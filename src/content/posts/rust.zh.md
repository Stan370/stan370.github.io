---
title: 学习 Rust：用 Rust 重写 Tor metrics-lib 的架构笔记
date: 2025-04-08 22:57:19
tags:
  - 编程
lang: zh-CN
sourceHash: 702363fcbd8243a8
translatedFrom: en
translationStatus: reviewed
---

最近我申请了 Tor 组织的一个项目，目标是使用 Rust 重新实现 **`metrics-lib`**，在保持原有功能完整的前提下，充分发挥 Rust 在性能、内存安全与并发方面的优势。这也契合 Tor Project 推进指标流水线现代化的整体方向。

该项目的核心目标是用 Rust 重写当前基于 Java 的 Tor Metrics Library。这个库是解析和分析 Tor 网络描述符（descriptors）的关键组件，被众多服务和研究人员广泛使用。通过用 Rust 重新实现，我们希望显著提升解析性能、利用 Rust 现代化的语言特性，并提供更符合人体工程学的 API，同时帮助 Network Health Team 等团队逐步将部分服务迁移到 Rust。除了复刻现有功能外，新库还将吸收 `DescriptorParser` 的能力，支持将解析后的描述符数据导出为 CSV、Parquet 或 PostgreSQL 表，从而支撑更高级的数据集成与分析需求。

Rust 重写版不仅需要提供与 `metrics-lib` **一致**的解析与校验功能，还将支持将文档**导出**至外部存储，例如把 Parquet 文件写入对象存储，或直接落库到 PostgreSQL 表中。

为了实现更高的可维护性、性能与安全性，本方案基于 **Rust** 进行完整重写——这门系统级编程语言具备**内存安全**、**零成本抽象**以及**与现代数据流水线更好的集成能力**，具体实践包括：

- 利用 Rust 的所有权系统保证内存安全
- 在可行路径上尽量采用零拷贝（zero-copy）解析

| **层级** | **技术栈** |
| --- | --- |
| 编程语言 | Rust |
| 网络 IO | `reqwest`, `hyper`, `tokio` |
| 文本解析 | `nom`, `pest` |
| 存储导出 | `parquet`, `serde`, `postgres` |
| 测试与 CI/CD | `cargo test`, GitLab CI/CD |
| 文档与静态检查 | `rustdoc`, `clippy`, `rustfmt` |

### 2.1 原有架构梳理

在过去十年间，该库已从 1.0.0 持续演进至 2.26.0。

核心特性包括：

1. **数据来源：**
    - 主要面向 **CollecTor**（`collector.torproject.org`）归档的观测数据。
    - 数据通常以包含大量独立文件的压缩归档格式（`.tar.xz`、`.tar.gz`、`.tar`）存储。
    - 同时也支持直接处理单个未归档的数据文件。
2. **支持的数据类型：** `metrics-lib` 可以解析多种 Tor 网络测量数据：
    - **中继描述符（Relay Descriptors）：**
        - `server-descriptors`：中继节点发布的自身详细信息（IP、端口、密钥、带宽、策略等），解析为 `RelayServerDescriptor`。
        - `extra-info-descriptors`：中继节点的补充信息（带宽历史、GeoIP 数据等），解析为 `RelayExtraInfoDescriptor`。
        - `microdescriptors`：体积更小、更新更频繁的中继摘要，用于客户端引导，解析为 `RelayMicrodescriptor`。
    - **网络状态共识文档（Network Status Consensus Documents）：**
        - 由目录权威（Directory Authorities）达成一致的特定时刻 Tor 网络状态快照。
        - `microdesc-consensus`：包含对 microdescriptors 的引用、中继标志、带宽权重等，解析为 `RelayMicrodescriptorConsensus`，其中每个中继条目对应一个 `NetworkStatusEntry`。
        - `relay-consensus`：（现已较少使用，属历史格式）结构类似但基于 server descriptors，解析为 `RelayServerDescriptorConsensus`。
    - **出口列表（Exit Lists）：**
        - 特定时刻被识别为出口节点的中继快照，通常由 TorDNSEL 等服务生成，解析为 `ExitList`，包含 `ExitNodeEntry` 对象。
    - **网桥数据（Bridge Data）：**
        - 与上述类似，但专用于未公开列表的 Tor 网桥（Bridges）。
        - `bridge-server-descriptors`：解析为 `BridgeServerDescriptor`。
        - `bridge-extra-info-descriptors`：解析为 `BridgeExtraInfoDescriptor`。
        - `bridge-statuses`：类似于共识文档但面向网桥，由 Bridge Authority 生成，解析为 `BridgeAuthoritativeStatus`。
3. **核心设计模式：Reader 与迭代器（Iterators）：**
    - 为每个主要数据类别提供对应的 **Reader**（如 `DescriptorReader`、`ConsensusReader`、`ExitListReader`、`BridgeDescriptorReader`、`BridgeStatusReader`）。
    - 实例化 Reader 时传入归档路径（如 `.tar.xz`）或单文件路径。
    - Reader 本身作为**迭代器**运行：遍历 Reader（例如 `for desc in DescriptorReader(path):`）即可逐条产出解析后的对象。
    - 这种流式遍历方式避免了将整个归档一次性加载到内存中，内存效率很高。
4. **数据表示：结构化对象：**
    - Reader 产出的每一项都是强类型对象（如 `RelayServerDescriptor`、`NetworkStatusEntry`、`ExitNodeEntry`）。
    - 对象属性直接映射到原始文件中的解析字段（如 `desc.nickname`、`desc.fingerprint`、`consensus.valid_after_time`、`relay_status.flags`、`exit_node.exit_addresses`）。
5. **关键优势与能力：**
    - **抽象封装：** 屏蔽底层文件格式细节（描述符语法、共识结构、压缩包解包）。
    - **自动化批处理：** 轻松遍历归档中的海量文件。
    - **结构化访问：** 提供便捷的面向对象字段访问方式。
    - **自动类型分发：** `DescriptorReader` 会依据文件中的 `@type` 注解自动识别描述符类型并返回对应对象（`RelayServerDescriptor`、`RelayExtraInfoDescriptor` 等）。
    - **健壮错误处理：** 内置异常机制（如 `InvalidDescriptor`），优雅应对格式损坏或无法解析的文件。
