---
title: "巨魔时代后的 iOS 26 侧载"
date: 2026-06-14 21:47:21
categories:
  - 随谈
tags:
  - IOS
  - Apple
img: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl941CZ3jQAu2YGF57d2MKmTVPvBVGyvmIzQ&s
lang: zh
sourceHash: 10b533299dfa4419
translatedFrom: mixed
translationStatus: reviewed
---
在现代操作系统里，iOS 的沙盒和签名机制可以说是防守最严密的堡垒之一，但部分“国产软件”让我的使用体验一落千丈。

**开屏与摇一摇广告是最烦人的，这也是用户感知最明显的场景。电商大促期间（如 618、双 11），知乎或斗鱼的开屏广告会被京东买断，SDK 还会利用手机陀螺仪的高灵敏度触发“摇一摇”或“扭一扭”跳转——即使用户只是轻微晃动手机，App 也会判定为触发广告，立即调用 Universal Links 瞬间拉起京东。**

在 iOS 26 中，苹果把相册、麦克风、蓝牙等权限卡得死死的，但陀螺仪和加速度传感器（CoreMotion 框架）默认对所有应用公开，根本不需要用户授权！知乎和斗鱼之所以能一秒拉起京东，利用的是 iOS 系统的 `openURL` 机制：只要知乎向系统发出一个 `openURL: openapp.jdmobile://` 请求，iOS 的桌面管理进程（SpringBoard）就会无条件去寻找并拉起京东 App。甚至正如 Apple 社区里的用户反馈：即使你卸载了京东，它们也会利用 Safari 弹出网页版京东，体验极其糟糕。

以前用安卓的时候还有李跳跳这类良心 App 帮忙跳过广告，但 iOS 封闭的生态让安装“第三方” App 的门槛极高。我习惯了服务器上的 root 权限和容器化的自由，因此当我开始研究 iOS 侧载（Sideload）时，苹果那套精密的“安全枷锁”反而激起了我的解构欲。

## iOS 自签、侧载、JIT、SideStore 和 LiveContainer 扫盲

**我的探索路径：**

本文是我在探索 iOS 证书体系、JIT 编译、SideStore 离线续签以及 LiveContainer 容器化引擎过程中的扫盲与破局记录。核心思路是在“不越狱”的前提下，通过利用 iOS 系统的开发者机制、动态加载特性以及内存管理的“灰色地带”，绕过苹果严格的代码签名和沙盒限制。

要打破规则，先要理解规则。iOS 的侧载本质上是一场**证书所有权**的博弈。

## 1. 证书体系的“阶级分化”

苹果利用非对称加密，要求所有在 iOS 上运行的二进制文件必须拥有合法的签名（Provisioning Profile）。

### 什么是调试证书和发布证书

一般来讲，iOS 的证书分为两种：调试证书和发布证书，后者往往被统称为企业证书。

两者的核心区别在于，发布证书缺少许多开发相关权限。例如，使用调试证书签名的软件通常会携带 `get-task-allow` 权限，该权限决定了 iOS 是否允许该 App 被调试器附加调试，而允许调试正是启用 JIT 的必要前提。发布证书没有这项权限，因此使用发布证书签名的软件都无法启用 JIT——这与 JIT 工具本身是否与软件共用同一张证书没有任何关系。

调试证书数量极为稀有，一个开发者同时只能申请两张；发布证书的数量则会多不少。免费开发者只能申请调试证书，发布证书只有付费开发者才可以申请。

注意，虽然网上有很多售卖“个人开发者证书”的渠道，但这些证书本质上都是发布证书，换句话说在功能上和企业证书没有任何区别——用免费企业证书无法使用的软件，用这些证书同样无法使用。

### 证书权限

在 iOS 中经常能看到各种授权弹窗：“XXX 希望访问照片图库”、“XXX 希望访问通讯录”、“XXX 希望访问位置信息”……但仔细观察就会发现，并不是每个软件都会弹出所有弹窗，这与证书本身的权限有关。

什么是证书权限？简单来说，苹果在颁发证书时会附带一份权限清单，记载了你可以调用的全部能力。这些权限不一定全部继承到你要签名的 App 上，具体启用哪些取决于 Xcode 中的配置，但概念上基本一致。

证书权限又分为两类：一类是普通权限，即通过弹窗供用户手动授权的权限；另一类则比较特殊，称为 **Entitlements（授权能力）**，这类权限由系统全自动处理，界面上看不到任何开关选项。如果你平时只从 App Store 下载软件，可能从未意识到它的存在。

普通权限包括：

- 照片图库
- 定位
- 麦克风
- ……

而下面这些属于 Entitlement：

- `Increased Memory Limit`
- `Extended Virtual Addressing`
- `Personal VPN`
- 上文提到的 `get-task-allow`
- ……

普通权限几乎没有门槛，任何开发者都可以使用；而 Entitlement 则分级森严：有些面向所有开发者开放（如 `Increased Memory Limit`），有些必须持有付费开发者证书并向苹果单独申请（如 `Personal VPN`），还有的干脆仅供苹果自家内部使用（如 `com.apple.private.mediaplayer.internal`）。

### 证书管理与有效期

你可能注意到，开发者侧载的 App 会出现在“VPN 与设备管理”中，而这个页面通常用于展示 VPN 配置和描述文件，为什么开发者 App 也归类在这里？事实上，开发者 App 与证书的管理依然依赖**描述文件（Provisioning Profile）**。

当一个 App 被侧载到 iOS 上时，系统如何判断该 App 的剩余有效期，又如何核验其申请的 Entitlement 是否合法？靠的就是描述文件。正常情况下，证书本身的有效期为一年（App Store 专用的 `Apple iPhoneOS Application Signing` 证书除外），即便是免费开发者证书也是如此。

那为什么大家常说免费开发者证书签名的软件有效期只有 7 天？因为免费开发者签名生成的**描述文件**有效期只有 7 天。7 天到期后，尽管证书本身依然有效，但描述文件已经过期，iOS 便不再放行。所谓“续签”，本质上就是用你现有的证书重新生成并安装一份新的描述文件，从而获得新的 7 天有效期。

一个侧载 App 的描述文件要被 iOS 判定为有效，必须同时满足三个条件：

1. 证书在有效期内；
2. 描述文件在有效期内；
3. 描述文件记载的 Entitlements 与软件实际声明的 Entitlements 一致。

- **免费个人开发者证书**：人人都能申请，但**代价极高**——7 天有效期、最多同时安装 3 个 App、限制 10 个 App ID。
- **付费个人/企业证书（$99/年）**：1 年有效期、安装数量无上限、支持高级权限（Entitlements）。
- **神迹：TrollStore（巨魔）**：利用当年的 CoreTrust 系统级漏洞，直接绕过整个证书验证链。无需任何证书即可赋予 App 根权限（Root）并实现永久免签。但在高版本 iOS 上，该漏洞已被彻底封堵。

---

iOS 26 以后，核心痛点在于**沙盒增强（App Sandbox Hardening）**：

> 苹果已彻底封堵 CoreTrust 漏洞，**TrollStore（巨魔）彻底失效**。失去巨魔后，想越狱就只能依赖软件漏洞（如 iOS 27 的 palera1n 变体），对普通用户来说几乎遥不可及。

> 传统的 SideStore / AltStore 等方案，现在必须依赖**本地环回 VPN（Loopback VPN）**来欺骗 iOS。

- **稳定性急剧恶化**：在 iOS 26.0 和 26.1 上，只要手机重启，这台“虚拟的 Mac”就会断开连接。你必须手动重开 VPN 并重新信任电脑（或 SideStore 模拟的电脑），否则 App 就会闪退。
- **通知延迟**：SideStore 的通知同步机制变得极不可靠，大量通知会出现严重延迟。

| **方案** | **稳定性** | **限制数量** | **核心代价** | **结论** |
| --- | --- | --- | --- | --- |
| **LiveContainer + SideStore** | 极低（7 天续签 + VPN 高发故障） | 表面无限（运行在容器内） | 丢通知、无原生 JIT、性能折损、操作繁琐 | **下策**（仅适合极客折腾） |
| **企业证书（自签/购买）** | 风险中等（随时面临苹果掉签） | 无限制（原生安装） | 证书可能被封禁，需重新安装 | **中策**（适合图省心的大众用户） |
| **TrollStore（巨魔商店）** | 极高（永久免签、原生性能） | 无限制（原生安装） | **依赖特定系统漏洞** | **上策**（只要版本符合就是绝对主力） |

**那么，有没有可能彻底甩掉电脑，让手机自己给自己续签？目前最好的无越狱方案又是什么？**

## 以下方案均基于免费 7 天开发者证书与开源工具链

### iLoader

iLoader 是一款用于引导安装的桌面实用程序，比早期的 AltServer 和 SideServer 更易用，新增了凭据保存、登录信息管理和安装器等功能。为了让 SideStore 和 StikDebug 能够欺骗 iOS 26、使其误认为本地 VPN 是一台苹果官方开发用 Mac，它们需要原始硬件配对密钥。iLoader 通过 `usbmuxd`（或 Windows 上的 iTunes 服务）与设备通信，生成锁定配对文件并自动注入到设备中。

### SideStore 与本地环回 VPN

SideStore 的本质是帮你自动完成“签名 + 安装 + 7 天刷新”这一整套流程。简单来说，当你用数据线连接 Mac 并点击“信任此电脑”后，Xcode 安装测试 App 时 iOS 内部会开启开发者调试服务；而 SideStore 正是通过**配对文件（Pairing File）**来模拟那台曾被信任过的电脑。

当然，这套机制依然存在一定技术门槛。简而言之，SideStore 通过工具拦截 iOS 的请求，把校验开发者身份的流量重定向回手机本地处理。这一验证过程依赖配对文件——即你首次用电脑（或引导工具）信任这台 iPhone 时，从设备导出的用于开通“开发通道”的凭证。它的核心作用有两点：

- 证明设备已经信任该侧载工具；
- 允许 SideStore 调用 iOS 内部开发服务（`MobileInstallation` 或等效通道）。

配对文件可能会随机失效，或在系统更新、设备重置后失效，届时需要重新生成和导入。同时，苹果也在不断收紧这一通道：例如 iOS 26.4 新增了网络掩码检查（netmask check），会校验传入的 socket 是否位于本地子网（local subnet）内，若检测到 `utun` 不在子网内则拒绝连接——不过社区后续也跟进了相应的绕过支持。

因此，iOS 实际上也能做到“合规”侧载，只是门槛高得多，甚至高于 Android 收紧侧载后的 24 小时冷静期或 `adb` 安装门槛；所以大家平时觉得非欧盟地区不能侧载，也并非没有道理。

本质上这是一场持续的攻防博弈：开发者调试安装是苹果必须保留的官方路径，SideStore 只是把这条路径自动化了。至少，它不需要越狱。

此外，iOS 26.4 还调整了账户切换入口，将退出登录移到了设置 -> 账号设置 -> 媒体与购买项目中，对于经常切换外区账号的用户来说颇为繁琐。

**SideStore** 的出现打破了必须连电脑的空间限制，它巧妙地用网络工程的手段绕过了系统约束：

> **破局思路**：苹果限制只有开发机（电脑）才能通过 USB 或无线局域网触发签名刷新。那么，如果我们在 iOS 内部自己跑一个“网关”，让手机自己跟自己通信呢？

1. **生成配对文件（Pairing File）：必需的硬件授权**
   使用 `iDevicepair` 工具在电脑上为手机生成受信配对证书。该文件包含手机的 UDID 与密钥，是允许设备触发开发者通信的“钥匙”。

2. **构建本地环回 VPN 网关：接管通信路径**
   在手机上安装 `LocalDevVPN` 或 `StosVPN`。这类 VPN 并不连接外部网络，而是借助 WireGuard 协议在系统内部建立环回接口（Loopback），将手机发往本地开发端口的请求拦截并路由回自身。

3. **伪装 Anisette 服务器：模拟苹果身份认证**
   SideStore 内置了 Anisette 服务器逻辑，通过本地环回网络直接生成苹果服务器所需的同步令牌（OTP / ADI），无需依赖电脑即可独立向苹果服务器发起 `App Refresh` 请求。

借助这套网络欺骗机制，SideStore 实现了**无电脑续签**。但 3 个 App 的硬性名额限制依然横亘在前。

---

### LiveContainer —— 沙盒内的“Docker”

LiveContainer 最大的优势在于**安装 App 数量不受限制**。无论是 SideStore 还是 AltStore，只要使用免费个人 Apple 开发者账号签名 IPA，都会受限于单台设备同时最多安装 3 个 App（SideStore 自身还要占掉 1 个名额）。想要突破这一限制，过去只能花钱购买每年约 3000 台币（$99）的付费开发者账号；而 LiveContainer 在自身容器内部想装多少个 App 都可以，只需按需切换运行，无需购买付费账号。

作为一名后端开发者，我第一次读到 LiveContainer 的源码时着实被其构思震撼了：**这不就是 iOS 版的免安装动态链接器吗？**
它不是虚拟机，也不是轻量级 Hypervisor，而是一个**应用启动器（App Launcher）**。

```
[ iOS 系统底层 ]
       │
[ LiveContainer 主程序 ] (合法签名，占用 1 个 App 名额)
       │
       ├── (动态加载) ──> [ 壳 IPA 1 ] (Guest App) -> 独立沙盒目录 1
       └── (动态加载) ──> [ 壳 IPA 2 ] (Guest App) -> 独立沙盒目录 2
```

它的底层加载流程相当硬核：

- 首先拆解导入的 IPA，修补二进制 Mach-O 可执行文件的内存布局，调整 `__PAGEZERO` 区段的起始地址，以避开部分系统安全校验。
- 将 Mach-O 头部的目标文件类型从 `MH_EXECUTE` 修改为 `MH_DYLIB`，让系统以加载动态链接库的方式接纳这个 App。
- 注入新的加载指令，引入自身的 `TweakLoader.dylib`，使 App 启动时能够执行自定义注入逻辑。
- 修补 `@executable_path`：对 `_NSGetExecutablePath` 传入空指针并触发 `SIGSEGV` 异常，在捕获异常后改写上下文中的 `@executable_path`，让被加载的 App 以为自己是通过正规渠道安装的。
- 修补 `NSBundle.mainBundle`，将其直接指向所安装 IPA 的实际路径。
- 采用 Restoring Dyld Memory Loading 或 JIT 方式绕过 iOS 代码签名验证；若未开启 JIT，则退而借助 AltStore 或 SideStore 为应用签名。
- 调用 `dlopen()` 启动目标 App 的二进制文件。
- 由 `TweakLoader` 从指定目录加载对应的 tweaks 插件。
- 定位目标程序的执行入口并跳转执行。
- 目标 App 调用 `UIApplicationMain`，像原生 iOS 应用一样完成启动。

关于多账号与 Keychain 隔离管理：iOS 的 Keychain 支持通过 **Access Groups** 区分不同 App 的数据。LiveContainer 预先声明了 128 组不同的 Access Groups，每新建一个 App 容器就分配一组独立的 Access Group，从而实现数据隔离，因此最多可并行管理 128 个 App 容器。

归纳成核心三步，就是：

1. **改写可执行文件属性**：强行修改导入的 IPA，将主二进制文件的 Mach-O 头部从独立可执行文件（`MH_EXECUTE`）patch 为动态链接库（`MH_DYLIB`）。
2. **通过 `dlopen` 挂载**：运行时主程序调用底层 C 函数 `dlopen()`，把伪装成 dylib 的子 App 动态加载进自己的进程地址空间。
3. **劫持并移交主入口**：定位子 App 的入口函数指针，直接跳转执行 `UIApplicationMain`。

---

然而，当你兴冲冲地在 LiveContainer 里运行高帧率重度游戏、MeloNX（Switch 模拟器）或 UTM 虚拟机时，却会发现它们卡成幻灯片，甚至直接闪退。

原因在于缺少了侧载技术里的圣杯：**JIT（Just-In-Time Compilation，即时编译）**。

### 为什么需要 JIT？

模拟器这类应用需要实时将目标架构指令（如 ARM64 / x86）翻译成 iOS 原生机器码。如果无法在运行时把某段内存动态标记为“可执行（Executable）”，程序就只能退回到效率极低的解释器模式（Interpreter）。

出于安全考量，苹果默认**严禁**任何生产环境应用拥有通过 `mprotect` 动态读写并执行内存的权限。

### 高版本 iOS 上的 JIT 破局

在最新系统环境下，要想在 LiveContainer 内成功启用 JIT，需要借助 **StikDebug** 这类调试工具：

> **调试附加原理**：苹果虽然禁止普通 App 使用 JIT，但为开发者保留了后门——**允许开发者对自己的 App 进行 Debug 调试**。StikDebug 正是利用这一机制，借助此前 SideStore 生成的配对文件伪装成外部调试器，通过网络向指定进程的 PID 发送附加调试信号（Attach via PID），在合规流程内让系统为该进程授予动态执行内存的权限。

---

由于 LiveContainer 是在单一共享沙盒内通过 `dlopen` 强行“缝合”子 App，它存在与生俱来的局限：

LiveContainer 可以导入多个 App，只要不删除，切换应用后数据仍会保留。但由于并非真正安装到 iOS 系统中，所有子 App 产生的数据都仅保存在 LiveContainer 内部（打开 iOS“文件” App → 我的 iPhone/iPad → `LiveContainer` → `Data` → `Application` 即可查看各应用数据）。同时，你也不得不忍受偶发的 VPN 环回冲突、证书失效，以及每次 iOS 大版本升级后底层 Hook 报错的折腾。

## VPN 与工具选型

目前主流签名工具分为两大阵营：一类是以 SideStore、iLoader 为代表的免费开发者自签工具，另一类是以全能签、Feather 等为代表的付费/企业证书签名工具。它们的根本差异仍然在于前文所述的**证书种类与权限边界**：

- 如果你要使用的软件需要**推送通知**或包含 **VPN 隧道**，那么全能签这类发布证书方案更适合你；
- 相反，如果你要运行**需要 JIT 的软件**（如模拟器、虚拟机），那么基于调试证书的 SideStore 才是正确选择。

注意，这两类场景绝大多数情况下无法互换：强行用 SideStore 签名包含 VPN 隧道的 LocalDevVPN，其隧道功能将彻底失效；反过来用全能签签名 MeloNX 等模拟器，同样无法正常运行，甚至直接闪退。

### LocalDevVPN 的作用与底层数据流

LocalDevVPN 本质上是一个 iOS 开发者工具，用于在设备本地创建安全、隔离的**本地环回网络隧道（Loopback VPN）**。由于国内网络环境或运营商对苹果特定开发接口（如 Anisette 服务器）的限制，SideStore 直连经常失败；LocalDevVPN 通过建立本地虚拟网络接口，绕过直连限制，让 SideStore 的请求稳定路由到目标服务。

在你的 iOS 26 设备上，实际发生的底层数据流向如下：

1. **SideStore 客户端**发起开发者续签请求，目标地址指向预设的虚拟开发机 IP。
2. **StosVPN（TUN 网卡）**捕获该流量，直接拦截网络层（L3）IP 数据包，绕过物理网卡并将其重定向到本地。
3. **minimuxer（用户态进程）**接管流量，剥离网络层封装、提取应用层载荷，并将这些请求转换为标准的、携带配对密钥的 `usbmuxd` 协议报文。
4. **iOS 原生 `lockdownd` 进程**收到来自 `minimuxer` 的报文后，经过非对称加密校验，确认配对文件（Pairing File）完全匹配，从而被彻底欺骗，以为自己正通过 USB 数据线连接在一台真实的 Mac 电脑上。

## 总结

整套工具链可以形象地概括为三层协作：

1. **LocalDevVPN（修路）**：
   在设备上创建安全隔离的**本地回环网络隧道（Loopback VPN）**，绕过运营商或网络环境对苹果开发接口与 Anisette 服务的直连限制，确保 SideStore 请求稳定可达。
2. **SideStore（造车）**：
   负责用你的 Apple ID 向苹果服务器申请证书、为 IPA 签名并定期自动续签，同时向系统 `debugserver` 发送指令，为指定 App 开启 JIT 权限。
3. **LiveContainer（开车）**：
   自身无需重签子 IPA，通过动态加载技术在宿主进程中运行未签名代码。若某些应用依赖 Keychain 或特定 Entitlements，只需导入 SideStore 导出的证书凭据即可。

要搭建完整的“无限自签 + 免签运行 + JIT”环境，可按以下四步操作：

#### 1. 准备工作
- **获取工具**：准备一个**外区 Apple ID**（国区 App Store 无法下载），在 App Store 下载 **LocalDevVPN**，同时确保已安装 SideStore 和 LiveContainer。
- **登录账号**：在 SideStore 中登录免费 Apple ID，并完成 Anisette 服务器配置（使用默认节点或自建节点均可）。

#### 2. 建立网络隧道（关键步骤）
- 打开 **LocalDevVPN** 应用。
- 在 Wi-Fi 或蜂窝数据下点击连接，启动内置 VPN（状态栏会出现 VPN 图标），建立回环隧道以接管 SideStore 流量。

#### 3. SideStore 续签与 JIT 激活
- **续签应用**：保持 LocalDevVPN 连接，打开 **SideStore** 进入 "My Apps"（我的应用）标签页，点击应用旁的刷新按钮（Refresh），通过回环隧道完成证书重签，解决 7 天掉签问题。
- **开启 JIT**：若需为模拟器或 LiveContainer 宿主开启 JIT，同样保持 LocalDevVPN 连接，在 SideStore 中点击 "Enable JIT"（开启 JIT），让调试指令顺利下发至底层 `debugserver`。

#### 4. LiveContainer 导入凭据（针对特定应用）
- 若要在 LiveContainer 内运行需要完整钥匙串权限或特定开发者权限的 IPA，可将 SideStore 证书导入 LiveContainer。
- **操作步骤**：在 SideStore 设置中点击 "Export Credentials"（导出凭据），设置密码并导出；随后打开 **LiveContainer** 设置，选择 "Import from AltStore/SideStore"（从 AltStore/SideStore 导入），输入密码完成导入。
- 完成后，即可在 LiveContainer 中直接添加并运行各类 IPA，享受免签且权限完备的容器运行环境。

从系统底层视角来看，这套方案的精妙之处在于**职责分离与网络层欺骗**：
- **LiveContainer** 解决代码签名校验问题（利用 Mach-O 动态加载）；
- **SideStore** 解决开发者身份与 JIT 内存权限问题（利用 `amfid` 与 `debugserver` 机制）；
- **LocalDevVPN** 纯粹工作在 BSD Socket 与 Network Extension 层面，借助路由规则将 SideStore 发往苹果开发服务的 TCP/UDP 流量引入本地回环接口，配合后端代理或隧道规避运营商 QoS 限制或 DNS 污染。
