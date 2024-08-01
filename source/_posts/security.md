---
title: 网络安全实践
date: 2024-03-10 15:43:32
---
# Web Security
在广阔的互联网领域，信息源源不断，交易瞬息万变，一场无声的战斗正在上演。网络威胁潜伏在阴影中，试图利用漏洞并破坏我们建造的数字堡垒。这就是网络安全的领域，一个动态且不断发展的领域，它是用户与渗透到网络世界的无数风险之间的守护者。

Consider this: Beyond the visible web lies an untamed and uncharted area akin to the Wild West, where data bandits and cyber outlaws reign supreme. These ne'er-do-wells constantly innovate their nefarious methods to breach firewalls, hijack sessions, and steal sensitive data. Web security is the marshal that stands in their way, brandishing the latest cryptographic shields and a sharp strategy to enforce the law of the land.

## HTTPS
1. **客户端发起请求**：
    - 客户端向服务器发起 HTTPS 请求。
2. **服务器响应并发送证书**：
    - 服务器响应请求并发送 SSL/TLS 证书。证书中包含服务器的公钥，该公钥由受信任的证书颁发机构（CA）签名。
3. **客户端验证证书**：
    - 客户端验证服务器的证书，确保证书由受信任的 CA 签发，证书未过期，且证书中的域名与请求的域名匹配。
    - **验证证书链**：客户端通过验证证书链来确认证书是否由受信任的 CA 签发。证书链由服务器证书、中间证书（如果有）、根证书组成。
    - **检查证书有效期**：客户端检查证书的有效期，确保当前日期在证书的有效期内。
    - **验证证书的域名**：客户端验证证书中的域名是否与请求的域名匹配。
    - **检查证书吊销状态**：客户端可以通过在线证书状态协议（OCSP）或证书吊销列表（CRL）来检查证书是否被吊销。
4. **协商 SSL/TLS 版本和加密算法**：
    - 客户端和服务器协商选择双方都支持的 SSL/TLS 版本和加密算法套件（cipher suite）。这些算法套件定义了具体使用的对称加密算法、非对称加密算法、哈希算法等。
5. **密钥交换和会话密钥生成**：
    - **Ephemeral Diffie-Hellman（DHE）或 Ephemeral Elliptic Curve Diffie-Hellman（ECDHE）**：客户端和服务器使用临时的 Diffie-Hellman 或椭圆曲线 Diffie-Hellman 参数生成一个共享的预主密钥（pre-master secret）。这涉及使用服务器的临时公钥（通常是服务器基于 ECC 生成的）和客户端生成的临时公钥。
    - **RSA**：如果使用 RSA 密钥交换，客户端生成一个随机的预主密钥，并使用服务器证书中的公钥对其进行加密，然后发送给服务器。服务器使用其私钥解密预主密钥。
6. **生成会话密钥**：
    - 双方使用共享的预主密钥生成会话密钥。会话密钥用于对通信数据进行对称加密。
7. **数据加密**：
    - 使用协商好的对称加密算法（如 AES、ChaCha20 等），客户端和服务器使用会话密钥对传输的数据进行加密和解密。
8. **完整性验证**：
    - 使用消息认证码（MAC）或哈希函数（如 SHA-256）来验证数据的完整性，确保数据在传输过程中未被篡改。
证书验证的技术
浏览器验证证书: 浏览器验证证书的合法性，包括：
证书颁发机构: 浏览器检查证书是否由一个受信任的证书颁发机构（CA）颁发。
证书有效期: 浏览器检查证书是否在有效期内。
证书与域名匹配: 浏览器检查证书是否与网站的域名匹配。
证书签名: 浏览器检查证书的签名是否正确。
浏览器检查证书链: 浏览器检查证书链，确保证书是由一个受信任的 CA 颁发的。
浏览器验证证书的公钥: 浏览器验证证书的公钥，确保它与服务器的公钥匹配。

证书验证使用了以下技术：

X.509: X.509 是一种证书格式，用于存储证书信息。
SSL/TLS: SSL/TLS 是一种加密协议，用于建立安全连接。
公钥加密: 公钥加密是一种加密算法，用于加密数据。
数字签名: 数字签名是一种加密算法，用于验证证书的合法性。
证书验证的工具

证书验证可以使用以下工具：

浏览器: 浏览器内置了证书验证功能。
openssl: openssl 是一种命令行工具，用于验证证书。
certutil: certutil 是一种命令行工具，用于验证证书。
**安全外壳协议**( SSH **)**是一种[加密](https://en.wikipedia.org/wiki/Cryptography) [网络协议](https://en.wikipedia.org/wiki/Network_protocol)，用于在不安全的网络上安全地运行[网络服务。](https://en.wikipedia.org/wiki/Network_service)[[1]](https://en.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4251-1)其最著名的应用是 remote [login](https://en.wikipedia.org/wiki/Login) and [command-line](https://en.wikipedia.org/wiki/Command-line_interface) execution.

SSH 应用程序基于[客户端-服务器](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)架构，将[SSH 客户端](https://en.wikipedia.org/wiki/SSH_client)实例与[SSH 服务器](https://en.wikipedia.org/wiki/SSH_server)连接。[[2]](https://en.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4252-2) SSH 作为分层协议套件运行，包含三个主要分层组件：*传输层*提供服务器身份验证、机密性和完整性；用户*认证协议*向服务器验证用户；连接*协议*将加密隧道复用为多个逻辑通信通道。[[1]](https://en.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4251-1)

[SSH 是在类 Unix](https://en.wikipedia.org/wiki/Unix-like)操作系统上设计的，作为[Telnet](https://en.wikipedia.org/wiki/Telnet)和[不安全的](https://en.wikipedia.org/wiki/Computer_security)远程[Unix shell](https://en.wikipedia.org/wiki/Unix_shell)协议的替代品

### Across the Wall

12.15问题：router设置为ipv6 解析时间长 infra建设没跟上，放弃。 想完全保证安全性和国内访问速率：刷openwrt，smartdns实现国内国外 dns 分流，需要另一台软路由。 折衷方案：全局代理？

代理模式： HTTP/socks系统代理 （开发者决定 大部分只使用browser）， TUN tap代理， 真VPN

TUN： 手机代理，软路由的模式

TUN虚拟网卡只能说非常接近 VPN还不是真正的VPN 因为我们用的ss vmess trojan等主流的翻墙协议 都无法**封装网络层的数据包** 最直观的感受就是ping命令这个网络层的工具 当我们使用clash的tun模式ping谷歌的话 会返回一个假的延迟 这个一毫秒的延迟是直接从虚拟网卡返回的 并且 如果使用下节要讲的fakeIP模式的话 还会直接返回一个假的IP 因为ss vmess等协议无法代理网络层的icmp协议 而ping就是icmp协议的工具 真正的VPN可以代理网络层 所以我使用真正的VPN wireguard是可以ping通谷歌的 可以看到延迟是真实的

目前来讲 tun模式是比较完美的客户端代理方式 既能实现在网络层接管系统所有流量 又能在此基础上实现分流 美中不足的地方就是使用ping命令 来测试网络延迟的时候就不太方便了 如果你平时只是用来浏览网页的话 第一种系统代理的方式也是一个不错的选择 至于真VPN的话 并不推荐用来科学上网 更适合有内网穿透需求的用户

VPN协议和NAT协议都是通过重新构建一个IP首部来实现的，但他们的实现又有**区别**，VPN是将内部IP数据报加密后打包成外部IP数据报的数据部分，它的主要目的是为了数据的保密性，而NAT是纯进行地址转换，它的目的是为了解决本地编址的内部网络与外网通信的问题。

**VPN的实现主要使用了两种基本技术：隧道传输 和 加密技术**

**VPN** 通常处于网络层（第三层）或数据链路层（第二层）：

- **IP层的VPN**，如IPsec或L2TP，通常工作在网络层，它们通过创建虚拟的私有网络来路由IP数据包。
- **数据链路层的VPN**，如PPTP，工作在数据链路层，通常用于点对点通信。

Virtual Private Network 译为虚拟专用网络或者虚拟私有网络 什么网络是私有网络 你家里的局域网就是你的私有网络 我们无法直接和你没有公网ip的电脑进行通信 除非到你家里连上你家的路由器 那我们就能在同一个私有网络里 那什么是虚拟 顾名思义 虚拟的意思就是虚拟 就是物理不存在 虚拟私有网络的意思就是我不需要物理的跑到你家里去 物理的连接上你家的路由器 就可以实现与你没有公网IP的电脑进行通信 而要实现这个功能的话 就必须要能够封装网络层的数据包 只有能够封装网络层的数据包 才能实现异地组网 才能实现内网穿透 才能实现虚拟的和你在同一内网里 才能称之为VPN 

VPN是一种技术 而不是某个具体的协议 VPN有很多技术实现 PPTP VPN IPSEC VPN OPENVPN WIREGUARD等等 具体实现细节都不太一样 

但有一个是必须要支持的 就是**封装网络层 如果ss协议也能够封装网络层 实现异地组网 那也能称之为VPN** 

当然 我这里并不是说VPN就更高级 相反的 对于科学上网来讲 它可是一点都不高级 因为VPN并不是为翻墙而生的 只是因为它能对数据进行加密 顺便实现了翻墙功能 相较于**ss这种专门为翻墙而生 将流量特征隐藏**的协议 VPN的流量清晰明了的写着它就是VPN的流量 而且VPN分流很不方便 所以用来科学上网并不合适 这里就不再深入了 以后有机会出内网穿透的教程再来详细介绍 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/4ea5941a-a013-41e5-b7ef-33fae9328bc2/Untitled.png)

1. Clash 的 DNS和代理两个模块是独立的. 日常终端PC使用 Clash for Windows 开启Systerm Proxy( HTTPS/SOCKS5代理) 并不需要 DNS enable: true, TUN 模式 是虚拟了网卡, 接管一切流量. OpenClash 实现虚拟网关用的是 TUN 模式, 而 Fake-IP /Redir-Host 的TUN模式、游戏模式 是(TAP 模式 很绕口 而 [TAP 模式更推荐使用 Redir-Host 模式](https://docs.cfw.lbyczf.com/contents/tap.html#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
2. [OpenClash 的绕过大陆IP 主要由两个模块组成](https://www.v2ex.com/t/939660) . 使用一份国内站点域名表 2w多条，添加至 Dnsmasq 中，在这个域名表中的 将会使用 默认114.114.114.114 来进行解析为真实的 IP ，在 iptables 中添加中国大陆 IP 段（ ipset ；直接绕过的规则并不使用 Clash 核心的 DNS 解析. [由此解决了 *所有流量都经 Clash 核心转发，性能损耗过大* 的问题](https://songchenwen.com/tproxy-split-by-dns)
3. 插件设置-DNS设置中 *本地 DNS 劫持 使用防火墙转发 才能有黑白名单不走代理的局域网IP/MAC 选项. *我不清楚为何Redir-Host 模式 两种转发都能选黑白名单. Fake-IP 模式只在使用防火墙转发才能选择黑白名单*. issue区有两种方法 [[Feature] fakeIP模式下访问控制也有“不走代理的局域网设备 IP” #2506](https://github.com/vernesong/OpenClash/issues/2506) [[Feature] Fake-IP模式下对于MAC/IP黑白名单、绕过大陆IP，可否提供更多选项？ #3319](https://github.com/vernesong/OpenClash/issues/3319) 也有回复说 绕过中国大陆 IP 的实现是靠 Dnsmasq 先 DNS 分流判断实现的, 选择使用防火墙转发会使此功能失效
4. 上游 Clash 官方已弃用 Redir-Host [(redir-host mode no longer available from Premium 2023.02.16)](https://lancellc.gitbook.io/clash/clash-config-file/dns#enhanced-mode) Clash.Meta 还在使用两者; Clash for Windows 不换核情况下 遵循上游 Clash 默认TUN Mode 是Fake IP Mode ; 两者的区别只是 Fake-IP-filter: - '+.*' 绕过所有域名 就变成 Redir-Host Mode
5. Fake-IP 模式 用假IP映射是为了使用 Rule 域名规则, 需要代理域名的解析均传递真实域名到代理服务器上 所以并无必要获得无污染DNS的解析 IP. Clash.Meta 的嗅探功能是为了把 Redir-Host 模式的 “真实IP” 变回域名. (实现CDN优化 解锁Netflix 等. 所以 Fake-IP 模式只需要配置 nameserver 并无必要配置 fallback 以及 fallback filter ; 配置nameserver 仅为了直连和fakeip filter 内的国内加速.

### WARP原理

WARP是CloudFlare提供的一项基于WireGuard的网络流量安全及加速服务，能够让你通过连接到CloudFlare的边缘节点实现隐私保护及链路优化。WireGuard 是由 Jason Donenfeld 等人用 C 语言编写的一个开源 VPN 协议，被视为下一代 VPN 协议，旨在解决许多困扰 IPSec/IKEv2、OpenVPN 或 L2TP 等其他WireGuard 就是采用 UDP 转发流量的 VPN 工具。他最大的优点也就是最大的缺点，采用 UDP 转发流量确实是能够有效的干扰墙的封锁，但是其稳定性实在是不敢恭维。 

其连接入口为双栈（IPv4/IPv6均可），且连接后能够获取到由CF提供基于NAT的IPv4和IPv6地址，因此我们的单栈服务器可以尝试连接到WARP来获取额外的网络连通性支持。这样我们就可以让仅具有IPv6的服务器访问IPv4，也能让仅具有IPv4的服务器获得IPv6的访问能力。

- 为仅IPv6服务器添加IPv4

原理如图，IPv4的流量均被WARP网卡接管，实现了让IPv4的流量通过WARP访问外部网络。

- 为仅IPv4服务器添加IPv6

原理如图，IPv6的流量均被WARP网卡接管，实现了让IPv6的流量通过WARP访问外部网络。

- 双栈服务器置换网络

有时我们的服务器本身就是双栈的，但是由于种种原因我们可能并不想使用其中的某一种网络，这时也可以通过WARP接管其中的一部分网络连接隐藏自己的IP地址。至于这样做的目的，最大的意义是减少一些滥用严重机房出现验证码的概率；同时部分内容提供商将WARP的落地IP视为真实用户的原生IP对待，能够解除一些基于IP识别的封锁。

WARP是建立在Cloudflare 1.1.1.1的免费DNS服务器上。从技术上讲，Warp本质上就是一款VPN服务，Warp使用来自1.1.1.1的DNS服务器，并对它们之间的所有流量进行加密。

通常，当你访问[http://Baidu.com](http://baidu.com/)时，URL会被翻译成网站所在服务器的IP地址，由ISP的DNS服务器托管。当你使用Warp时，Warp将手机上的DNS服务器固定为1.1.1.1。因此，所有请求都转到Cloudflare的安全服务器。

Warp在此基础上增加了一个额外的流程，使得设备和Cloudflare服务器之间的所有流量都是加密流量。**但Warp是基于WireGuard隧道的UDP协议，中国大陆绝大部分运营商都会对这类流量进行惩罚式、限速式的限制策略，导致Warp在大陆使用上突发很高，但均速很低。(只能用于failover** 😅 再加上Cloudflare的许多IP被国内Block，使得Warp在大陆接近一个不可用的状态。

Clash是一个开源的多协议代理工具，可以用于实现网络流量的代理和转发。它支持多种代理协议（如Shadowsocks、VMess、Trojan、Socks5等）和路由规则，能够实现灵活的网络流量控制和代理功能。

当使用 clash 作为系统代理或者直接将浏览器的代理设置为 clash 时, 请求会交给 clash 来处理, 包括 dns 解析, 当然 clash 拿到请求之后, 并不会先 dns 解析 ip, 它会先根据规则一条一条匹配, 如果有命中规则, 则根据相应的规则去处理.

这里要注意一下 `IP-CIDR`, 如果后面没有 `no-resolve`, 则需要 dns 解析 ip, 解析到 ip (可能被污染)后再根据此条进行对比, 如果没命中则进行下一条规则. 如果命中了, 走代理, 则不管它有没有被污染, 请求都会转发到节点服务器; 如果走直连, 则可能会被污染影响. 当然加上 `no-resolve` 之后, 就会让 clash 不进行 dns 解析, 所以此条 `IP-CIDR` 的直接 pass 掉, 可以这么说, 只有当浏览器直接对 ip 地址发起请求的时候, `IP-CIDR` 才会有效果.

接下来再讨论下手机上的 qx / surge 等工具, 或者 clash 开启了 enhanced mode 后, dns 解析这一块发生的变化.

由于请求并不是直接交给代理去处理, 所以浏览器需要先构建 dns 查询请求, 请求来到了 qx 或者软路由上面的 clash (透明代理)后, 被它劫持, 它有两种处理方式, redir-host 和 fake-ip, 前者已经被遗弃, 因为前者是要去获取 dns 解析的, dns 解析可能会解析到污染的 ip, 并且大多时候并不需要它进行 dns 解析. 所以 fake-ip 是主流, fake-ip 直接返回一条假的 ip, 并且对 ip 和域名进行了映射关系缓存, 这样浏览器拿到假的 ip 后进行 tcp 连接, 请求再次到达 qx / clash, 被截获后, 找到对应的域名, 接下来就是针对域名的规则匹配.

**trojan**是近些年兴起的网络工具，项目官网 https://github.com/trojan-gfw。与**强调加密**和混淆的SS/SSR等工具不同，trojan将通信流量伪装成互联网上最常见的https流量，从而有效防止流量被检测和干扰。在敏感时期，基本上只有**trojan和 [v2ray伪装](https://itlanyan.com/v2ray-traffic-mask/) 能提供稳如狗的体验**。

想要长期稳定高效的科学上网，socks5 类型的代理基本是必须要掌握的。Clash 支持的代理类型有 `ss`、`vmess`、`socks5`、`http` 和 `snell`

**SOCKS**是一种[Internet](https://en.wikipedia.org/wiki/Internet) [协议](https://en.wikipedia.org/wiki/Protocol_(computing))，它通过[代理服务器在](https://en.wikipedia.org/wiki/Proxy_server)[客户端](https://en.wikipedia.org/wiki/Client_(computing))和[服务器](https://en.wikipedia.org/wiki/Server_(computing))之间交换[网络数据包](https://en.wikipedia.org/wiki/Packet_(information_technology))。**SOCKS5**可选择提供[身份验证](https://en.wikipedia.org/wiki/Authentication)，因此只有授权用户才能访问服务器。实际上，SOCKS 服务器将 TCP 连接代理到任意 IP 地址，并提供一种转发 UDP 数据包的方法。

SOCKS 执行在[OSI 模型](https://en.wikipedia.org/wiki/OSI_model)的第 5 层（[会话层，](https://en.wikipedia.org/wiki/Session_layer)[表示层](https://en.wikipedia.org/wiki/Presentation_layer)和[传输层](https://en.wikipedia.org/wiki/Transport_layer)之间的中间层）。SOCKS 服务器接受 TCP 端口 1080 上的传入客户端连接，如[RFC](https://en.wikipedia.org/wiki/RFC_(identifier))  [1928](https://datatracker.ietf.org/doc/html/rfc1928)中所定义。

SOCKS使用[握手协议](https://zh.wikipedia.org/w/index.php?title=%E6%8F%A1%E6%89%8B%E5%8D%8F%E8%AE%AE&action=edit&redlink=1)来通知代理软件其客户端试图进行的SOCKS连接，然后尽可能透明地进行操作，而常规代理可能会解释和重写报头（例如，使用另一种底层协议，例如[FTP](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)；然而，HTTP代理只是将HTTP请求转发到所需的HTTP服务器）。虽然HTTP代理有不同的使用模式，[HTTP CONNECT](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)方法允许转发TCP连接；然而，SOCKS代理还可以转发[UDP](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE)流量（仅SOCKS5），而HTTP代理不能。HTTP代理通常更了解HTTP协议，执行更高层次的过滤（虽然通常只用于GET和POST方法，而不用于CONNECT方法）。

**socks5** 类型的代理服务器在网络层级上是工作于应用层的**会话层**，很多流量都无法代理，因从即便是开了所谓的全局，也不能给游戏加速，毕竟游戏的网络传输一般都是跑在传输层的。**像 Ping 和 Trace 这些 ICMP 命令自然也是无法通过代理的**。（当然也有方法可以用软件强制接管虚拟网卡达到真全局的目的，比如 SSTAP，tun2socks 等等）

如果客户端和服务器都可以独立发包，但是偶尔发生延迟可以容忍（比如：在线的纸牌游戏，许多MMO类的游戏），那么可考虑使用TCP长连接如果客户端和服务器都可以独立发包，而且无法忍受延迟（比如：大多数的多人动作类游戏，一些MMO类游戏），那么考虑使用UDP加速器原理 加速器的原理很简单，就是UDP代理

**主要难在两点，其一是怎么处理游戏客户端到加速器服务器之间的UDP连接，其二是怎么让游戏客户端去连接这个加速器（一般游戏客户端是没有设置代理服务器的功能的）** 

处理UDP有两种思路，一种是协议套娃，将游戏的UDP包外面套一层TCP（UDP over TCP ），到了目的地再把TCP解包成UDP，最后在发送到游戏服务器，返回的数据包也做同样处理；另外一种是伪造TCP（FakeTCP），对UDP数据包加上伪造的TCP包头，让其看起来像是TCP协议，欺骗运营商。

主动检测
HTTP所有没有正确结构和密码的连接都将被重定向到预设端点,因此,如果可疑探针连接(或者只是您的粉丝连接到您的博客XD),木马服务器的行为与该端点完全相同(默认情况下)。
被动检测
因为流量受到保护TLS(用户有责任使用有效的证书),所以如果你正在访问一个HTTP站点,流量看起来
是一样的(握手后HTTPS只有一个);如果您没有访问某个站点,那么流量看起来与“保持活动状态”或“保持活动状态“相同。因此,木马还可以绕过ISP限制。RTT TLS HTTP HTTPS WebSocket QoS

**常见端口扫描技术**

**3.3.2.1. 全扫描**

扫描主机尝试使用三次握手与目标主机的某个端口建立正规的连接，若成功建立连接，则端口处于开放状态，反之处于关闭状态。

全扫描实现简单，且以较低的权限就可以进行该操作。但是在流量日志中会有大量明显的记录。

**3.3.2.2. 半扫描**

半扫描也称SYN扫描，在半扫描中，仅发送SYN数据段，如果应答为RST，则端口处于关闭状态，若应答为SYN/ACK，则端口处于监听状态。不过这种方式需要较高的权限，而且现在的大部分防火墙已经开始对这种扫描方式做处理。

**3.3.2.3. FIN扫描**

FIN扫描是向目标发送一个FIN数据包，如果是开放的端口，会返回RST数据包，关闭的端口则不会返回数据包，可以通过这种方式来判断端口是否打开。

这种方式并不在TCP三次握手的状态中，所以不会被记录，相对SYN扫描要更隐蔽一些。

### HTTPS加密

是的，HTTPS（Hypertext Transfer Protocol Secure）使用了混合加密机制，包括非对称加密和对称加密，以确保安全的数据传输。

 **TLS 1.2 升级成 TLS 1.3，TLS 1.3 大幅度简化了握手的步骤，完成 TLS 握手只要 1 RTT，而且安全性更高。在 TLS 1.2 的握手中，一般是需要 4 次握手，先要通过 Client Hello （第 1 次握手）和 Server Hello（第 2 次握手） 消息**协商**出后续使用的加密算法，再互相交换公钥（第 3 和 第 4 次握手）**

SSL握手的步骤如下：

1. SSL或TLS客户端先向服务端发送一个加密通信请求，叫做ClientHello请求。该请求包含以下信息：
    - 客户端支持的SSL或者TLS版本
    - 客户端生成的随机数，用于生成后续通信的随机字符串（"对话密钥"）
    - 客户端支持的加密算法
2. SSL或TLS服务端收到客户端请求后，向客户端发出响应，叫做ServerHello。该响应包含以下信息：
    - 服务端从客户端提供的SSL或TLS列表中选择的版本
    - Sesstion ID 和 另外生成的随机数
    - 服务端的数字证书（如果服务端需要用于客户端身份验证的数字证书，则服务端发送一个客户端证书请求，其中包含受支持的证书类型列表和可接受的认证机构(CAs)的专有名称。）
    - 确认使用的加密算法
3. 客户端收到服务端响应后，首先校验服务端发来的数字证书决定是否继续通信。
4. **TLS 第三次握手**    客户端验证完证书后，认为可信则继续往下走。 接着，客户端就会生成一个新的**随机数 (*pre-master*)**，用服务器的 RSA 公钥加密该随机数，通过「**Client Key Exchange**」消息传给服务端。 服务端收到后，用 RSA 私钥解密，得到客户端发来的随机数 (pre-master)。 至此，**客户端和服务端双方都共享了三个随机数，分别是 Client Random、Server Random、pre-master**。 于是，双方根据已经得到的三个随机数，生成**会话密钥（Master Secret）**，它是对称密钥，用于对后续的 HTTP 请求/响应的数据加解密。 生成完「会话密钥」后，然后客户端发一个「**Change Cipher Spec**」，告诉服务端开始使用加密方式发送消息。
5. 如果服务端发送了一个客户端证书请求，客户端将会发送一个用客户端私钥加密的随机字符串和客户端的数字证书，或者没有数字证书的警告。在某些强制客户端证书的实现中，如果客户端没有数字证书，则握手会失败. 
6. 服务端接受并验证客户端证书
7. 客户端向服务端发送一条完成的消息，该消息使用密钥加密，表示握手的客户端部分已经完成。
8. 服务端向客户端发送一条完成的消息，该消息使用密钥加密，表示握手的服务端部分已经完成
9. 在SSL或TLS会话期间，服务端和客户端现在可以交换使用共享密钥对称加密的消息

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8136f52-d35d-46c6-964e-ab05e6590e71/Untitled.png)

A rainbow table is a precomputed table of passwords and their hashes,

[彩虹表对包含大量盐](https://en.wikipedia.org/wiki/Salt_(cryptography))的单向哈希无效。例如，考虑使用以下函数生成的密码哈希（其中“ + ”是[串联](https://en.wikipedia.org/wiki/Concatenation)运算符）：

`saltedhash(password) = hash(password + salt)`

要么

`saltedhash(password) = hash(hash(password) + salt)`

salt 值不是秘密的，可以随机生成并与密码哈希一起存储。大盐值通过确保每个用户的密码被唯一地散列来防止预计算攻击，包括彩虹表。这意味着具有相同密码的两个用户将具有不同的密码哈希值（假设使用不同的盐）。为了成功，攻击者需要为每个可能的盐值预先计算表。salt 必须足够大，否则攻击者可以为每个 salt 值制作一个表。对于使用 12 位盐的旧[Unix 密码，这将需要 4096 个表，这会显着增加攻击者的成本，但对于 TB 硬盘驱动器来说并非不切实际。](https://en.wikipedia.org/wiki/Crypt_(C))[SHA2-crypt](https://en.wikipedia.org/wiki/Crypt_(C)#SHA2-based_scheme)和[bcrypt](https://en.wikipedia.org/wiki/Crypt_(C)#Blowfish-based_scheme)方法——用于[Linux](https://en.wikipedia.org/wiki/Linux)、[BSD](https://en.wikipedia.org/wiki/BSD) Unixes 和[Solaris](https://en.wikipedia.org/wiki/Solaris_(operating_system)) — 有 128 位的盐。[[4]](https://en.wikipedia.org/wiki/Rainbow_table#cite_note-alexander-4)这些较大的盐值使得针对这些系统的预计算攻击对于几乎任何长度的密码都不可行。即使攻击者可以每秒生成一百万张表，他们仍然需要数十亿年才能为所有可能的盐生成表。 Or by key  strengthening 

Injection—     Could try to "sanitise" (clean/make safe) data input, but there is a better solution. • Do not create SQL (or similar statements) by adding together strings. • Can use special routines designed to produce these statements. • Languages designed for the web contain functions to help with this. • In Java, PreparedStatement is a class to do this. 

### Socket

HTTP是构建在TCP协议之上的，而TCP可以使用Socket来实现网络通信。基于这一点，可以使用Socket编程来创建HTTP客户端或服务器。**Socket API提供了对底层网络通信的访问，可以使用不同的编程语言（如Python、Java、C++等）的Socket库来实现HTTP客户端和服务器**。Socket APi 也可以实现UDP通信

对于HTTP客户端：

- 客户端可以使用Socket建立与服务器的TCP连接。
- 客户端通过Socket发送HTTP请求（如GET、POST等）给服务器。
- 服务器接收到请求后，通过Socket发送HTTP响应给客户端。
- 客户端通过Socket接收服务器的响应数据。

对于HTTP服务器：

- 服务器可以使用Socket监听指定端口，接收客户端的连接请求。
- 服务器接收到连接后，创建Socket连接到客户端。
- 服务器通过Socket接收来自客户端的HTTP请求。
- 服务器处理请求，并通过Socket发送HTTP响应给客户端。

分层模型中的精华思想之一是封装（Encapsulation）。在网络协议的分层设计中，封装指的是**每一层向上一层提供服务**时，将上一层的数据进行封装，隐藏了底层协议的实现细节，形成一个黑盒子，**上层协议不需要了解下层协议的任何细节**。封装使得分层模型中的每一层都像一个黑盒，只暴露出相应的接口和功能，而隐藏了内部实现的细节，这样有利于提高系统的可靠性、可维护性和可扩展性，同时促进了协议的标准化和互操作性。

一个是 fread/fwrite 读写，一个是 recv 和 send 读写（在 Linux 下你用 read 和 write 的话，文件和 socket 两者都能读写，只是无法直接设置一些特殊的 flag）

一般的文件以及 socket 客户端读写的都是数据，而 socket 服务端 accept 读出来的是可以读写的客户端文件。

1. **监听套接字 (Listening Socket)**：这是服务器端的套接字，通过调用**`bind`**、**`listen`**和**`accept`**函数来建立。监听套接字用于等待客户端的连接请求，当客户端请求连接时，**`accept`**函数会返回一个新的已完成连接套接字。
2. **已完成连接套接字 (Connected Socket)**：这是服务器端的套接字，也是客户端的套接字。它们通过**`connect`**函数（客户端）或**`accept`**函数（服务器端）建立连接后，用于实际的数据传输。这些套接字可以通过**`read`**和**`write`**函数来进行数据的读取和写入。

成功连接建立之后，双方开始通过 read 和 write 函数来读写数据，就像往一个文件流里面写东西一样。

严格来讲，“网关”是一个逻辑概念，【不要】把它当成具体的网络设备。充当“网关”的东东，可能是：路由器 or XX层交换机 or XX层防火墙 or 代理服务器 ......

“网关”也分不同的层次。如果不加定语，通常指的是“3层网关”（网络层网关）。列几种比较常见的，供参考：

路由器充当网关——3层（网络层）

3层交换机充当网关——3层（网络层）

4层交换机充当网关——4层（传输层）

应用层防火墙充当网关——7层（应用层）

代理服务器充当网关——（取决于代理的层次，参见前一个小节）

“隧道协议”可以做到更灵活的包裹——既可以对层次相隔很远的协议进行包裹，也可以对同一层的协议进行包裹，甚至可以“倒挂”——所谓的“倒挂”就是让【上】层反过来包裹【下】层。

举例：

俺曾经写过一篇《[如何让【不支持】代理的网络软件，通过代理进行联网（不同平台的 N 种方法）](https://program-think.blogspot.com/2019/04/Proxy-Tricks.html)》，其中介绍了“HTTP 代理”的两种模式：“转发模式 ＆ 隧道模式”。对于“HTTP 代理”的隧道模式，可以实现【TCP over HTTP】（把 TCP 协议打包到 HTTP 协议内部）

**Network层**

网络层的两种交换技术：电路交换（有连接） VS 分组交换（无连接）。

IP/ARP 是根据IP地址获取MAC地址的一种协议。/ICMP

1. **IP地址：** IP协议使用IP地址来唯一标识网络上的每个设备。IPv4和IPv6是两个常见的IP地址版本。IPv4使用32位地址，而IPv6使用128位地址，提供了更广泛的地址空间以应对互联网的增长需求。
2. **面向无连接：** IP是一种面向无连接的协议，这意味着每个数据包（或数据报）都是独立的，不需要在通信之前建立连接。每个数据包独立传输，因此不会维护通信状态。
3. **不可靠传输：** IP提供了不可靠的传输，这意味着它不保证数据包的传输顺序、可靠性或交付。数据包可能会在传输过程中丢失、重复、延迟或乱序，因此上层协议（如TCP）负责处理可靠性和顺序问题。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/b91e7cce-3503-4dad-b95e-3b5a338d858a/Untitled.png)

根据RFC 791，IP地址是一个32位的二进制数字，通常表示为四个八位字节的点分十进制表示法，如xxx.xxx.xxx.xxx。

1. **A类地址：**
    - A类地址的第一个字节的最高位始终为0，这表示A类地址的范围是1.0.0.0到126.0.0.0。
    - 这类地址通常用于大型网络，因为其范围允许约1670万个主机地址。
2. **B类地址：**
    - B类地址的前两个字节的最高两位始终为10，这表示B类地址的范围是128.0.0.0到191.255.0.0。
    - B类地址通常用于中等规模的网络，可容纳约6.5万个主机地址。
3. **C类地址：**
    - C类地址的前三个字节的最高三位始终为110，这表示C类地址的范围是192.0.0.0到223.255.255.0。
    - C类地址通常用于小型网络，每个C类网络可以容纳约254个主机地址。

在实际网络中，已经有许多其他IP地址分配方案和规则，包括子网掩码、无类域间路由（CIDR）等，这些使得IP地址的分配更加灵活和高效。所以，不再严格使用A、B、C类地址来划分网络规模。

VLSM([可变长子网掩码](https://baike.baidu.com/item/%E5%8F%AF%E5%8F%98%E9%95%BF%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81/9163142)) 是为了有效的使用[无类别域间路由](https://baike.baidu.com/item/%E6%97%A0%E7%B1%BB%E5%88%AB%E5%9F%9F%E9%97%B4%E8%B7%AF%E7%94%B1/15758573)（CIDR）和路由汇聚(route summary)来控制[路由表](https://baike.baidu.com/item/%E8%B7%AF%E7%94%B1%E8%A1%A8/2707408)的大小，它是网络管理员常用的IP寻址技术

CIDR无类网络是一种相对于有类网络的网络，无类网络IP地址的掩码是变长的。
在有类网络的基础上，拿出一部分主机ID作为子网ID。
例如：
IP地址为192.168.250.44 子网掩码不能是小于24位。
因为这是一个C类地址（前3Bytes是网络号），子网掩码只能大于24位。
而掩码255.255.248.0（21位）是不符合规定的。
·
如果一个网络中的主机有100台，
那么，可以用子网掩码/25来划分这个C类网络（“192.168.250.0/24”）：
划分成192.168.250.0/25 和192.168.250.128/25两个子网。
—主机192.168.250.44/25 属于子网192.168.250.0/25。

**路由器用于不同网络之间的通信，进行跨网络的路由决策，而交换机用于内部网络的局域网络通信，将数据帧从一个接口转发到另一个接口。**在许多网络中，路由器和交换机通常是一起使用的，以实现内部通信和与外部网络的连接。

**路由器（Router）**：

1. **网络层设备：** 路由器位于OSI模型的网络层，负责在不同网络之间进行数据包的转发和路由选择。
2. **跨网络通信：** 路由器用于将数据包从一个网络传送到另一个网络，通常在不同IP子网之间执行路由操作。
3. **决策基于IP地址：** 路由器的路由决策是基于目标IP地址进行的，它查找路由表以确定数据包应该被转发到哪个接口或下一个路由器。
4. **网络分割和隔离：** 路由器可以分隔不同的网络，提供网络隔离和安全性。
5. **网络地址转换（NAT）：** 一些路由器支持NAT，允许多个设备共享一个公共IP地址。

**交换机（Switch）**：

1. **数据链路层设备：** 交换机位于OSI模型的数据链路层，主要用于在局域网络（LAN）内的设备之间进行数据帧的交换。
2. **内部局域网络通信：** 交换机用于在同一网络内的设备之间传输数据，通常在相同IP子网内工作。
3. **决策基于MAC地址：** 交换机的决策是基于目标设备的MAC地址进行的，它使用MAC地址表来确定数据帧应该被发送到哪个接口。
4. **高性能：** 交换机通常提供高性能的数据交换，因为它们在硬件级别进行操作，不需要进行复杂的路由选择。
5. **无状态：** 交换机通常是无状态设备，不存储关于通信的历史信息，而路由器可能会维护路由表和状态信息。

### 爬

https://websec.readthedocs.io/zh/latest/info/site.html

robots.txt 也不是强制的规范，而是一种内容网站和搜索引擎之间博弈的产物。对于一个搜索引擎来说，遵守或者不遵守只关乎你作为一个搜索引擎的声誉，大多数时候还是遵守的，比如说百度上至今不能搜索淘宝宝贝，因为淘宝主动屏蔽了百度。内容站点也不是啥[白月光](https://www.zhihu.com/search?q=%E7%99%BD%E6%9C%88%E5%85%89&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2081752804%7D)，无非也是想要**搜索引擎带来的流量，但是又不想爬虫占用服务器资源**。

[zhihu.com](http://zhihu.com)/robots.txt

```
User-agent: Googlebot
Disallow: /appview/
Disallow: /login
Disallow: /logout
Disallow: /resetpassword
Disallow: /terms
Disallow: /search
Allow: /search-special
Disallow: /notifications
Disallow: /settings
Disallow: /inbox
Disallow: /admin_inbox
Disallow: /*?guide*

```

数据提取：

1. **请求发送与响应获取**：爬虫程序通过发送 HTTP/HTTPS 请求获取网页内容，通常使用库或框架（如Python的requests、Scrapy等）来发送请求，并接收并解析网页服务器返回的响应。
2. **网页解析与DOM操作**：爬虫需要解析 HTML 或 XML 格式的网页内容以提取所需的信息。通常使用解析器（如Beautiful Soup、lxml等）来解析网页结构，并使用 XPath 或 CSS 选择器等技术定位和提取所需的数据。
3. **动态网页抓取**：针对使用 JavaScript 动态加载内容的网页，爬虫需要模拟浏览器行为，如使用无头浏览器（Headless Browser）或类似工具（如Selenium）来渲染 JavaScript，并获取动态生成的内容。 **模拟浏览器行为**：对于需要处理动态内容或使用 JavaScript 渲染的网页，模拟浏览器行为更有优势，甚至可能需要处理 WebSocket 连接。
4. 并发 分布式： ip代理池
5. 

反爬虫技术：

1. **动态内容生成**：网站使用动态生成内容或者 Ajax 请求，这使得爬虫难以捕获完整的页面数据。
2. **网站结构变化**：经常更改网站的页面结构、URL格式或数据的位置，使得爬虫难以获取持续准确的数据。
3. **使用登录验证**：限制对需要用户登录的内容的访问，要求爬虫模拟登录行为才能获取数据。
4. **robots.txt 文件**：用于向搜索引擎爬虫提供指导，告知哪些页面可以被索引，哪些页面不应该被索引。
5. **IP 黑名单**：阻止来自特定IP地址的请求，这些IP地址可能是已知的恶意爬虫。
6. **用户代理检测**：识别请求中的用户代理（User-Agent），并阻止或限制来自爬虫的请求。
7. **验证码**：通过向用户展示验证码，要求用户进行验证以确认其身份，从而阻止自动化爬虫。
8. **频率限制**：限制对网站的访问频率，例如限制某个IP地址或用户在特定时间段内的请求次数。
9. **JavaScript 加载**：某些爬虫不支持JavaScript，网站可以利用JavaScript动态加载内容，使得爬虫难以获取完整的页面内容。

Service worker 本质上充当 Web 应用程序、浏览器与网络（可用时）之间的代理服务器。这个 API 旨在创建有效的离线体验，它会拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的的资源。它还提供入口以推送通知和访问后台同步 API。

Service workers 也可以用来做这些事情：

- 后台数据同步
- 响应来自其他源的资源请求
- 集中接收计算成本高的数据更新，比如地理位置和陀螺仪信息，这样多个页面就可以利用同一组数据
- 在客户端进行 CoffeeScript、LESS、CJS/AMD 等模块编译和依赖管理（用于开发目的）
- 后台服务钩子
- 自定义模板用于特定 URL 模式
- 性能增强，比如预取用户可能需要的资源，比如相册中的后面数张图片

未来 service worker 能够用来做更多使 web 平台接近原生应用的事。值得关注的是，其他标准也能并且将会使用 service worker，例如：

- [后台同步](https://github.com/slightlyoff/BackgroundSync)：启动一个 service worker 即使没有用户访问特定站点，也可以更新缓存
- [响应推送](https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API)：启动一个 service worker 向用户发送一条信息通知新的内容可用
