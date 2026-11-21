---
title: Debugging a macOS Proxy DNS Deadlock
date: 2026-09-15 22:00:19
tags:
lang: en
sourceHash: 10c183757e606a89
translatedFrom: zh
translationStatus: reviewed
---

## From a Seemingly Random Crash Log to a DNS Loop Deadlock When Migrating from Clash to sing-box

After getting fed up with Clash's crashes and UI glitches, I migrated my primary macOS proxy client from Clash Verge to [SFM 1.14](https://sing-box.sagernet.org/installation/package-manager/#problematic-sources) (sing-box for macOS). I assumed importing my subscription and converting the config format would be smooth sailing—yet once connected, `ping` succeeded while every proxied web page failed with `no internet`.

Looking back at the SFM console log, the most striking snippet was:

```text
ERROR[0014] [729071269 736ms] router: process DNS packet: read udp 192.168.0.104:52546->1.1.1.1:53: read: connection refused
...
DEBUG[0015] outbound 🇯🇵日本专线01|BGP|流媒体 unavailable: context canceled
DEBUG[0015] outbound/urltest[自动选择]: outbound 🇯🇵日本专线03|BGP|流媒体 unavailable: context canceled
...
(packet-tunnel) stopping, reason: NEProviderStopReason(rawValue: 1)

```

When newcomers to sing-box see `NEProviderStopReason(rawValue: 1)`, their first guess is broken macOS NetworkExtension permissions or a kernel driver crash. Scrolling up, however, the true root cause was a single line:

> **`router: process DNS packet: read udp 192.168.0.104:52546->1.1.1.1:53: read: connection refused`**

Was it a macOS NetworkExtension permission issue or a broken Homebrew app signature?
No—it felt much more like a loopback cycle or routing dependency deadlock.
Looking at the `remote` DNS block in the SFM configuration:

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

The intention was clear: resolve domestic domains via `223.5.5.5` and send everything else to Cloudflare's `1.1.1.1`. Under macOS TUN mode, however, this configuration immediately triggered a closed-loop deadlock:

- **Plaintext UDP 53 blocked on the physical NIC**: Notice the source IP `192.168.0.104`—my Mac's physical Wi-Fi interface. Because `remote` declared no `detour`, sing-box sent plaintext UDP queries directly over the physical outbound (`direct`). On local ISP networks, outbound plaintext UDP 53 to overseas resolvers is dropped or reset, throwing `connection refused`.
- **Node health checks die en masse**: Upon startup, sing-box's `urltest` module periodically probes node latency. Probing requires resolving the health-check domain (e.g., [www.gstatic.com](https://www.gstatic.com)), which hits `final` and routes straight into the dead `1.1.1.1` resolver. Every probe times out with `context canceled`.
- **macOS kills the TUN interface**: With DNS completely stalled, every application handshake entering TUN hangs. The macOS NetworkExtension watchdog detects an unresponsive Packet Tunnel and trips a system-level circuit breaker: `NEProviderStopReason(rawValue: 1)`, forcibly tearing down the virtual interface.

## Layer-by-Layer Anatomy: How the Deadlock Forms

Why did the exact same nodes and network environment never hit this issue in Clash?

To understand why, compare the two proxy modes on macOS:

```
[ App initiates traffic (HTTP/HTTPS/TCP/UDP) ]
           │
  ┌────────┴──────────────────────────┐
  ▼                                   ▼
[ Traditional System Proxy ]       [ NetworkExtension / TUN Mode ]
  Writes HTTP/SOCKS port to OS       Creates virtual NIC (utun*) taking L3 IP packets
  Relies on apps honoring proxy      Captures all apps, CLI tools, and daemons alike
  Terminals/games easily bypass      Proxy core must route DNS, ICMP, and UDP itself

```

### 1. Traditional System Proxy

You configure `127.0.0.1:7890` in macOS System Settings. Applications (primarily browsers like Safari and Chrome) voluntarily wrap requests in HTTP CONNECT or SOCKS5 handshakes.

* **Limitation**: Terminal tools (`curl`/`git`), many games, and background daemons ignore system proxy settings, creating the classic split experience where browsers work while `git pull` hangs.

### 2. Modern Virtual Interface (Packet Tunnel / TUN)

SFM and Clash in TUN mode create a virtual network interface (such as `utun4`) via system APIs and point the OS default route into it.

* Every process and protocol (TCP, UDP, ICMP) enters that tunnel automatically.
* **The trade-off**: The proxy core must act as a full software router. In particular, once macOS points system DNS to the TUN interface (e.g. `172.19.0.1`), the proxy core must guarantee DNS answers—if internal DNS stalls, the entire machine loses connectivity.

Understanding TUN makes the architectural difference between the two tools clear:

### 1. Clash: Out-of-the-Box "Batteries-Included" Stack

Why does Clash rarely hit this deadlock?
Because Clash widely uses **Fake-IP**. When macOS asks for the IP of `google.com`, Clash does not query an external resolver first; it immediately returns a virtual IP from a reserved range (`198.18.0.0/15`).
When the application connects to that fake IP, Clash looks up the original domain in its mapping table and hands the domain directly to the remote proxy server. **Your physical NIC never performs local overseas DNS resolution, so it cannot be blocked by ISP UDP 53 filtering.**

### 2. SFM (sing-box): Explicit "Engineer's Router"

sing-box strictly enforces explicit configuration and type safety:

* If you configure `1.1.1.1` without a `detour`, it faithfully sends raw packets out your physical interface.
* If you write `"detour": "direct"` in a DNS server block while forgetting to tag your direct outbound as `"direct"`, startup fails immediately with `outbound detour not found: direct`.

| Dimension | Clash Ecosystem (Clash Verge Rev / Mihomo) | SFM (sing-box for macOS) |
| --- | --- | --- |
| **Client Form** | Cross-platform Web/Tauri GUI wrapping a Go core subprocess | **Pure native SwiftUI** built on macOS NetworkExtension |
| **Memory & Battery** | Typically 150MB–400MB RAM, higher power draw | **30MB–80MB** resident memory, lightweight and MacBook-friendly |
| **Config Forgiveness** | High, with implicit fallbacks and automatic defaults | Strict schema validation; every outbound and detour tag must match |
| **Modern Protocols** | Broad mainstream support depending on core fork | **Cutting-edge protocol testbed**, first-class Hysteria 2, TUIC, Reality |
| **Ecosystem** | De-facto standard for mainstream provider subscriptions | Geared toward self-hosted setups and explicit custom configs |

## Reproduction Sequence

### Step 1: Plaintext UDP 53 Hits the Wall

Look at the source and destination in the log: `192.168.0.104 -> 1.1.1.1:53`.
`192.168.0.104` is the LAN IP of the local physical interface. Without a `detour`, sing-box sends the query via `direct`. Domestic networks aggressively block or reset plaintext UDP 53 to overseas IPs, causing an immediate `read: connection refused`.

### Step 2: Chain Reaction Kills `urltest`

After startup, `urltest` tests every proxy node by requesting a probe URL (such as `www.gstatic.com`). Because `final` routes non-CN DNS lookups into the blocked `1.1.1.1:53`, every health check times out and floods the log with `context canceled`.

### Step 3: macOS Tears Down the TUN Interface

With DNS completely dead, outgoing connections pile up with zero throughput. macOS's NetworkExtension watchdog concludes the tunnel is hung and triggers a forced stop: `(packet-tunnel) stopping, reason: NEProviderStopReason(rawValue: 1)`. In under 10 seconds, a single blocked DNS rule takes down the whole system's network.

## Breaking the Deadlock: Fixes and Pitfalls

The fix is straightforward: **never send overseas DNS queries in plaintext over your local physical interface.**

### Option A: Route Remote DNS Through the Proxy Outbound (Recommended)

Switch to encrypted DoH/DoT and explicitly set `detour` to your proxy selector outbound:

```json
{
  "type": "https",
  "tag": "remote",
  "server": "1.1.1.1",
  "detour": "自动选择"
}

```

> **Watch out for a common pitfall**:
> If you also add `"detour": "direct"` to your domestic DNS server (`223.5.5.5`), make sure your `outbounds` array actually defines an outbound with `"tag": "direct"`. Otherwise sing-box refuses to boot with:
> `(packet-tunnel) error: start dns/udp[cn]: outbound detour not found: direct`

### Option B: Enable Fake-IP Like Clash

If you want Clash-like low-latency behavior without waiting on local DNS round-trips, introduce a `fakeip` server:

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

Debugging this issue was a good reminder of two fundamentals:

1. **Never ignore the first error in the log**: The final crash line (`NEProviderStopReason`) is usually just the OS's circuit breaker—the root cause happened seconds earlier in the DNS layer.
2. **Understand your tool's transparency boundary**: Clash hides routing decisions behind convenient defaults; migrating to sing-box means taking explicit ownership of every packet's path, especially DNS.
