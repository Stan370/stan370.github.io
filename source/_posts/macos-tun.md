---
title: 记一次 MacOS 代理死锁排查
date: 2026-09-15 22:00:19
tags:
---

## 从一串看似随机的崩溃日志，聊聊从 Clash 迁移到 sing-box 的 DNS 闭环死锁

最近clash的崩溃和ui问题忍无可忍，把 macOS 上的主力代理客户端从 Clash verge迁移到了 [SFM 1.14](https://sing-box.sagernet.org/installation/package-manager/#problematic-sources) （sing-box for macOS）。本以为导入订阅、转个格式就能无缝起飞，结果连上ping能通但是访问代理网页就是no internet

回看SFM控制台日志，最扎眼的一段长这样：

```text
ERROR[0014] [729071269 736ms] router: process DNS packet: read udp 192.168.0.104:52546->1.1.1.1:53: read: connection refused
...
DEBUG[0015] outbound 🇯🇵日本专线01|BGP|流媒体 unavailable: context canceled
DEBUG[0015] outbound/urltest[自动选择]: outbound 🇯🇵日本专线03|BGP|流媒体 unavailable: context canceled
...
(packet-tunnel) stopping, reason: NEProviderStopReason(rawValue: 1)

```

很多刚接触 sing-box 的人看到 `NEProviderStopReason(rawValue: 1)`，第一反应是 macOS 的 NetworkExtension 权限坏了，或者内核驱动崩了。但沿着日志向上翻，真正的罪魁祸首其实只有一行：

> **`router: process DNS packet: read udp 192.168.0.104:52546->1.1.1.1:53: read: connection refused`**


是不是 macOS 的网络扩展权限出问题了？还是 Homebrew 安装的应用签名损坏？
但是我感觉 可能有loopback 循环死锁问题 or 路由依赖死锁。
回看sfm代理里remote dns 配置 

```json
{
  "dns": {
    "servers": [
      {
        "type": "local",
        "tag": "local"
      },
      {
        "type": "udp",
        "tag": "remote",
        "server": "1.1.1.1"
      },
      {
        "type": "udp",
        "tag": "cn",
        "server": "223.5.5.5"
      }
    ],
    "rules": [
      {
        "rule_set": "geosite-cn",
        "server": "cn"
      }
    ],
    "final": "remote"
  }
}

```

意图很明确：国内域名查询 223.5.5.5，其余走 Cloudflare 的 1.1.1.1。但在 macOS 的 TUN 环境下，这套配置直接引发了闭环死锁：UDP 53 的本地撞墙：注意源 IP 192.168.0.104。这是我 Mac 物理 Wi-Fi 网卡的地址。因为 remote 没有声明 detour，sing-box 默认通过物理出站（direct）裸发 UDP 查询。在本地网络环境下，发往境外的明文 UDP 53 会被 ISP 防火墙直接阻断或 Reset，抛出 connection refused。节点健康检查猝死：sing-box 启动后要维持节点可用性，后台的 urltest 模块开始定时探测节点延迟。要测速就必须先解析健康检查域名（如 [www.gstatic.com](https://www.gstatic.com)）；而解析域名又被 final 分流送进了已经死掉的 1.1.1.1。测速请求全军覆没，日志狂报 context canceled。TUN 网卡被系统击毙：DNS 彻底挂死，整个系统所有进出 TUN 的应用层握手全被挂起。macOS 的 NetworkExtension 监控守护进程发现 Packet Tunnel 处于无响应状态，直接执行系统级熔断：抛出 NEProviderStopReason(rawValue: 1)，强行卸载虚拟网卡。  


## 逐层解剖：这个死锁是如何形成的？

为什么同样的节点、相同的网络环境，在之前的 Clash 里从来没出过这种事？

要搞清楚这一点，必须理解 macOS 代理实现的两种模式：
```
[ 应用发起流量 (HTTP/HTTPS/TCP/UDP) ]
           │
  ┌────────┴──────────────────────────┐
  ▼                                   ▼
【 传统系统代理模式 】              【 NetworkExtension / TUN 模式 】
  系统设置写入 HTTP/SOCKS 端口        建立虚拟网桥（utun*）接管 L3 IP 数据包
  依赖应用自觉遵循系统代理设置          所有应用、终端、守护进程无差别捕获
  终端/非标准应用极易漏跑              DNS、ICMP、UDP 必须由代理内核全权路由

```

### 1. 传统系统代理（System Proxy）

在系统设置中填入 `127.0.0.1:7890`。应用（主要是 Safari、Chrome 等浏览器）发起请求时，自己将流量打包成 HTTP CONNECT 或 SOCKS5 握手发给代理软件。

* **局限**：终端（curl/git）、很多电子游戏和后台 Daemon 根本不读系统代理配置，经常出现“浏览器能翻、终端拉代码卡死”的割裂体验。

### 2. 现代虚拟网卡（Packet Tunnel / TUN）

像 SFM 和开启了 TUN 模式的 Clash，会通过系统 API 创建一个虚拟网卡（如 `utun4`），直接把系统的默认网关指向这块虚拟网卡。

* 任何进程、任何协议（TCP、UDP、ICMP）只要想发包，全被系统丢进这根管道。
* **代价是：代理内核必须承担起一个完整软路由的职责。** 尤其是 DNS——一旦操作系统把本机 DNS 指向了 TUN 虚拟网卡（例如日志里的 `172.19.0.1`），代理软件就必须百分之百保证能给出 DNS 应答。一旦内部 DNS 逻辑卡死，整台机器连局域网都访问不了。


理解了 TUN 的运行机制，就能看清这两款工具在架构上的本质差异：

### 1. Clash：开箱即用的“保姆型”网络栈

为什么 Clash 很少遇到上面的死锁？
因为 Clash 广泛采用 **Fake-IP** 机制。当系统向它索要 `google.com` 的 IP 时，Clash 根本不连外网，而是瞬间从保留地址池（`198.18.0.0/15`）抓一个虚拟 IP 返回给系统。
应用拿着假 IP 发起连接，流量进入 Clash 后，Clash 依据映射表直接把原始域名丢给远端代理服务器去建连。**你的物理网卡压根没有在本地解析境外 DNS 的环节，自然不可能被 ISP 的 UDP 53 阻断卡死。**

### 2. SFM (sing-box)：颗粒度拉满的“工程师路由”

sing-box 坚守显式声明与类型安全：

* 你配了 `1.1.1.1` 且不给 `detour`，它就严格执行你的指令，拿本地物理网卡裸连。
* 你在 DNS 模块里写了 `"detour": "direct"`，如果出站列表里只有 `"type": "direct"` 但忘了起名字，或者打错成 `"direct-out"`，内核启动时直接毫不留情地报错：`outbound detour not found: direct`。

| 核心维度 | Clash 生态（Clash Verge Rev / Mihomo 等） | SFM (sing-box for macOS) |
| --- | --- | --- |
| **客户端形态** | Web/Tauri 跨平台 GUI 壳，外挂 Go 编译的内核子进程 | **SwiftUI 纯原生开发**，通过 macOS NetworkExtension 实现 |
| **内存与续航** | 运行内存通常在 150MB~400MB 之间，耗电略高 | 常驻仅 **30MB~80MB**，极其轻量，对 MacBook 移动续航非常友好 |
| **配置容错率** | 极高。有隐式回退逻辑，提供大量自动化默认项 | 极低。强类型校验，路由节点、Detour 链路必须严丝合缝 |
| **现代协议跟进** | 主流协议覆盖完备，前沿协议取决于内核分支 | **前沿网络协议试验场**，原生首发支持 Hysteria 2、TUIC、Reality |
| **生态习惯** | 订阅生态大一统，机场订阅格式的原生载体 | 偏向专业自建、进阶用户手搓或专用格式订阅 |


---

* **Clash 是“保姆型”工具**：Clash 的 TUN 模式默认广泛采用 **Fake-IP**。当应用程序发起 DNS 查询时，Clash 根本不立刻去远程服务器查询，而是直接返回一个内网保留地址（如 `198.18.0.x`）。等你的流量打到这个假 IP 上时，Clash 才会连同原始域名直接封装扔给代理节点，由远端节点去发起解析。从头到尾，你的本地物理网卡压根不需要去连外网的 UDP 53。
* **sing-box 是“显式路由”设计**：sing-box 遵循极简和透明原则。你在 DNS 块写了 `1.1.1.1:53`，它绝不会自作主张帮你套上一层代理；没有配置 `detour`，它就老老实实拿你的本地物理网卡去发裸包。

---
## 复现
### 第一步：UDP 53 的物理撞墙

注意日志里的源地址和目的地址：`192.168.0.104 -> 1.1.1.1:53`。
`192.168.0.104` 是我本地物理网卡的局域网 IP。因为配置里的 `remote` 没有任何特殊的转发声明（detour），sing-box 默认通过直连（direct）将数据包送出。
而国内网络对**直连境外的明文 UDP 53 端口**实施了极其严格的阻断和重置。本地网卡一发出查询，立刻被对端拒绝，抛出 `read: connection refused`。

### 第二步：连锁反应，节点测速全线猝死

sing-box 启动后，后台的 `urltest` 模块会自动测速各个节点（如日志里的 `🇯🇵日本专线01`、`🇬🇧英国伦敦02`）。
要测速，就得请求测试域名（比如 `[www.gstatic.com](https://www.gstatic.com)`）；要请求域名，就必须先走 DNS 解析；由于 `final` 规则把所有非 CN 域名统统送进了已经瘫痪的 `1.1.1.1:53`，所有的节点测速请求全部遭遇丢包超时，日志里爆出一排排 `context canceled`。

### 第三步：TUN 网卡被系统击毙

一旦 DNS 解析器全军覆没，所有试图发起的网络请求都挂在等待队列里，吞吐量直接归零。macOS 的 NetworkExtension 监控机制检测到 TUN 接口异常无响应，判定网络隧道已处于假死状态，随即触发强制熔断：
`(packet-tunnel) stopping, reason: NEProviderStopReason(rawValue: 1)`。

整个过程不到 10 秒，一个简单的 DNS 阻断直接带垮了整个系统网络。

## 破局：修复方案与延伸踩坑

要解开这个依赖死锁，思路非常清晰：**绝不能让境外的 DNS 查询以明文形式裸奔在本地网卡上**。

### 方案 A：让远程 DNS 走代理节点（推荐）

改用加密的 DoH/DoT，并且显式指定 `detour` 到你的节点出站选择器上：

```json
{
  "type": "https",
  "tag": "remote",
  "server": "1.1.1.1",
  "detour": "自动选择"
}

```

> **踩坑注意**：
> 如果你在国内 DNS（例如 `223.5.5.5`）上也随手加了 `"detour": "direct"`，一定要确保你的 `outbounds` 列表里确实存在一个 `"tag": "direct"` 的出站配置。否则内核启动时会直接抛出强类型校验错误：
> `(packet-tunnel) error: start dns/udp[cn]: outbound detour not found: direct`
> sing-box 的校验非常严格，任何不存在的 tag 引用都会直接导致启动失败。

### 方案 B：对齐 Clash，开启 Fake-IP

如果你想保留类似 Clash 的低延迟体验，完全避免本地 DNS 解析等待，可以直接引入 `fakeip` 解析器：

```json
{
  "dns": {
    "servers": [
      {
        "type": "fakeip",
        "tag": "fakeip",
        "inet4_range": "198.18.0.0/15"
      },
      {
        "type": "local",
        "tag": "local"
      },
      {
        "type": "udp",
        "tag": "cn",
        "server": "223.5.5.5"
      }
    ],
    "rules": [
      { "rule_set": "geosite-cn", "server": "cn" },
      { "query_type": ["A", "AAAA"], "server": "fakeip" }
    ],
    "final": "local"
  }
}

```


排查这个 Bug 的过程，本质上是一次对代理底层路由逻辑的重新审视：

1. **不要轻视日志里的第一条 Warning/Error**：崩溃的末尾往往是系统的自我保护机制（比如 `NEProviderStopReason`），真正的病根早在前几秒的 DNS 阶段就已经埋下。
2. **理解软件设计的透明度边界**：Clash 替你做了太多隐式处理，而迁移到 sing-box 的第一课，就是学会为自己的每一个数据包流动路径负责——尤其是最容易被忽视的 DNS 报文。