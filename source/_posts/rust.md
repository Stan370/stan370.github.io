---
title: Learn Rust
date: 2025-04-08 22:57:19
tags:
- 编程

---

Recently, I applied for a project in Tor organization, which aims to reimplement the** `metrics-lib` **in Rust, maintaining the same functionality while leveraging Rust's advantages in terms of performance, memory safety, and concurrency. This aligns with the Tor Project's broader initiative to modernize the metrics pipeline.**The goal of this project is to rewrite the current Java-based Tor Metrics Library in Rust. This library is a crucial component for parsing and analyzing Tor network descriptors used by various services and researchers. By reimplementing the library in Rust, we aim to improve performance, take advantage of Rust’s modern language features, and provide a more ergonomic API. This rewrite will also allow the Network Health Team (and others) to migrate some of their services to Rust. In addition to replicating current features, the new library will include some features from the DescriptorParser for exporting parsed descriptor data into formats like CSV, Parquet, or PostgreSQL tables, thereby enabling more advanced integrations and analysis capabilities.
The rust rewrite should provide the **same** parsing and validation functionalities provided by metrics-lib and in addition allow **exporting** of the documents in some external storage, like parquet files to be saved into object storage or a table on a postgresql database.

To modernize and improve maintainability, performance, and safety, this proposal outlines a full re-implementation of the library in **Rust**, a systems programming language that offers **memory safety**, **zero-cost abstractions**, and **better integration with modern data pipelines**. Such as:

- Use Rust's ownership system for safe memory management
- Implement zero-copy parsing where possible

| **Layer** | **Tech Stack** |
| --- | --- |
| Language | Rust |
| Network IO | `reqwest`, `hyper`, `tokio` |
| Parsing | `nom`, `pest` |
| Storage Output | `parquet`, `serde`, `postgres` |
| Testing & CI/CD | `cargo test`, GitLab CI/CD |
| Docs & Linting | `rustdoc`, `clippy`, `rustfmt` |

### 2.1 Original structure

The library has evolved significantly from version 1.0.0 to 2.26.0, over the past 10 years.

Key features include:

1. **Data Sources:**
    - The library primarily targets data archived by **CollecTor** (`collector.torproject.org`).
    - This data is typically stored in compressed tar archives (`.tar.xz`, `.tar.gz`, `.tar`) containing numerous individual data files.
    - It can also process individual, unarchived data files.
2. **Supported Data Types:**`metrics-lib` can parse several distinct types of Tor network measurement data:
    - **Relay Descriptors:**
        - `server-descriptors`: Detailed information published by relays about themselves (IP, ports, keys, bandwidth, policies, etc.). Parsed into `RelayServerDescriptor`.
        - `extra-info-descriptors`: Additional information published by relays (bandwidth history, geoip data, etc.). Parsed into `RelayExtraInfoDescriptor`.
        - `microdescriptors`: Smaller, more frequently updated versions of relay information used for client bootstrapping. Parsed into `RelayMicrodescriptor`.
    - **Network Status Consensus Documents:**
        - These documents represent a snapshot of the Tor network state at a specific time, as agreed upon by the Directory Authorities.
        - `microdesc-consensus`: Contains references to microdescriptors, relay flags, bandwidth weights, etc. Parsed into `RelayMicrodescriptorConsensus`. Contains `NetworkStatusEntry` objects for each relay listed.
        - `relay-consensus`: (Less common now, but historically used) Similar but based on server descriptors. Parsed into `RelayServerDescriptorConsensus`.
    - **Exit Lists:**
        - Snapshots of relays identified as Exit nodes at a particular time, often generated by services like TorDNSEL. Parsed into `ExitList`. Contains `ExitNodeEntry` objects.
    - **Bridge Data:**
        - Similar data types but specifically for Tor Bridges (unlisted relays).
        - `bridge-server-descriptors`: Parsed into `BridgeServerDescriptor`.
        - `bridge-extra-info-descriptors`: Parsed into `BridgeExtraInfoDescriptor`.
        - `bridge-statuses`: Analogous to consensus documents but for bridges, generated by the Bridge Authority. Parsed into `BridgeAuthoritativeStatus`.
3. **Core Design Pattern: Readers and Iterators:**
    - The library uses a **Reader** pattern for each major data category (e.g., `DescriptorReader`, `ConsensusReader`, `ExitListReader`, `BridgeDescriptorReader`, `BridgeStatusReader`).
    - You instantiate a Reader, providing it the path to an archive file (e.g., `.tar.xz`) or a single data file.
    - The Reader acts as an **iterator**. You loop over the reader (e.g., `for desc in DescriptorReader(path):`), and it yields parsed data objects one by one.
    - This is efficient as it typically doesn't load the entire archive or all data into memory at once (it likely streams through the archive).
4. **Data Representation: Structured Objects:**
    - When the Reader yields an item, it's a object (like `RelayServerDescriptor`, `NetworkStatusEntry`, `ExitNodeEntry`).
    - These objects have **attributes** corresponding to the fields parsed from the raw data files (e.g., `desc.nickname`, `desc.fingerprint`, `consensus.valid_after_time`, `relay_status.flags`, `exit_node.exit_addresses`).
5. **Key Features & Benefits:**
    - **Abstraction:** Hides file format details (descriptor syntax, consensus structure, tarball handling).
    - **Automation:** Easily process large numbers of files within archives.
    - **Structured Data:** Provides convenient object-oriented access to data fields.
    - **Type Dispatching:** The `DescriptorReader` automatically identifies the type of descriptor (`@type` annotation in the file) and returns the appropriate object type (`RelayServerDescriptor`, `RelayExtraInfoDescriptor`, etc.).
    - **Error Handling:** Includes mechanisms (like `InvalidDescriptor` exceptions) to handle malformed or unparseable files gracefully.


