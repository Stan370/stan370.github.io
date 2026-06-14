---
title: 巨魔时代后的 iOS 26侧载
date: 2026-06-14 21:47:21
categories: 
- 随谈
tags:
- IOS
- Apple
img: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl941CZ3jQAu2YGF57d2MKmTVPvBVGyvmIzQ&s
---
在现代操作系统里，iOS 系统的沙盒和签名机制可以说是防守最严密的堡垒之一，但有的“国产软件”让我的使用体验一落千丈。

**开屏与摇一摇广告是最烦的，这是用户感知最明显的场景。电商大促期间（如 618、双 11），知乎或斗鱼的开屏广告会被京东买断, sdk还会利用手机的陀螺仪敏感度触发“摇一摇”或“扭一扭”跳转，即使用户只是轻微晃动手机，App 也会判定为触发广告，立即调用 Universal Links 瞬间拉起京东。**
在 iOS 26 中，苹果把相册、麦克风、蓝牙的权限卡得死死的，但陀螺仪和加速度传感器（CoreMotion 框架）是默认对所有应用公开的，根本不需要用户授权！乎和斗鱼之所以能一秒拉起京东，利用iOS 系统的 openURL，只要知乎向系统发出一个 openURL: openapp.jdmobile:// 的请求，iOS 的桌面管理进程（SpringBoard）就会无条件去寻找并拉起京东 App。甚至像你在 Apple 社区看到的反馈：即使你卸载了京东，它们也会利用 Safari 弹出网页版京东，恶心至极。
以前用安卓的时候还有李跳跳这种良心app帮助但是ios封闭的系统让安装“第三方”app的门槛提高了，我习惯了服务器上的 root 权限和容器化的自由。
so我开始研究 iOS 侧载（Sideload）时，苹果那套精密的“安全枷锁”激起了我的解构欲。

## iOS 自签，侧载、JIT、SideStore 和 LiveContainer 扫盲
**我的探索路径：**

本文是我在探索 iOS 证书体系、JIT 编译、SideStore 离线续签、以及 LiveContainer 容器化引擎过程中的扫盲与破局记录。 核心是在 “不越狱” 的前提下，通过利用 iOS 系统的开发者机制、动态加载特性以及内存管理的“灰色地带”，来绕过苹果严格的代码签名和沙盒限制。

要打破规则，先要理解规则。iOS 的侧载本质上是一场**证书所有权**的博弈。

## 1. 证书体系的“阶级分化”

苹果利用非对称加密，要求所有在 iOS 上运行的二进制文件必须拥有合法的签名（Provisioning Profile）。
什么是调试证书和发布证书
一般来讲，iOS 的证书有两种，一种是调试证书，一种是发布证书；后者往往被统称为企业证书。

两者的区别在于，发布证书中少了很多和开发有关的权限，像调试证书签名的软件，一般里面都会带有一个 get-task-allow，这个权限决定了 iOS 是否允许这个 App 被调试器调试，而允许调试又是启用 JIT 的必须品。发布证书里没有这个权限，因此使用发布证书签名的软件都无法启用 JIT；和 JIT 工具是否使用的和软件同一个证书没有任何关系。

调试证书数量极为稀有，一个开发者同时只能申请两张这样的证书；发布证书的数量则会多不少。免费开发者只能申请调试证书，发布证书只有付费开发者才可以申请。

注意，虽然网上很多会有卖“个人开发者证书”的，但这些证书本质都是发布证书，换句话说功能上和企业证书没有任何的区别；你用免费的企业证书使用不了的软件用这些证书一样使用不了。

### 证书权限
iOS 里面经常可以看到各种各样的授权弹窗，XXX 希望访问照片图库，XXX 希望访问通讯录，XXX 希望访问位置信息……但若是你足够聪明，会发现并不是每个软件上面所有的弹窗都会弹一遍，这和证书本身的权限又有关系, 什么是证书的权限？简单来说，苹果为你颁发证书的时候，会一并提供一份列表，上面记载了所有你可以使用的权限；这些权限不一定会全部继承到你希望签名的 App 上，具体使用哪些权限和你在 Xcode 里的设置有关，但概念上是几乎一样的。

证书权限又分成两种，一种是普通的权限，就是有弹窗允许你控制的那种；另一种稍微特殊一点，叫 Entitlements，这类权限的处理是全自动的，你是看不到任何选项的，如果你平时只是从 App Store 上下载软件的话可能都不知道这个东西的存在。

普通的权限自不必说，下面这些都是普通权限：

照片图库
定位
麦克风
……
而下面这几种是 Entitlement：

Increased Memory Limit
Extended Virtual Addressing
Personal VPN
上面提到的 get-task-allow
……
普通的权限，几乎没什么限制，谁都可以用，但是 Entitlement 就非常好玩了，有一些也是什么人都可以用的，例如 Increased Memory Limit，有一些是必须要求付费开发者证书且需要向苹果申请的，例如 Personal VPN，还有的干脆只给苹果自己用的，例如 com.apple.private.mediaplayer.internal。 证书的管理和有效期 可能有人会注意到开发者 App 会显示在 VPN 与设备管理里面，而这个地方正常情况下是显示 VPN 配置和描述文件的，为什么开发者 App 也在里面呢？ 事实上开发者 App 和证书管理靠的依然是描述文件。 一个 App，侧载到 iOS 上，iOS 怎么知道这个 App 的有效期还有多久，怎么知道 App 申请的哪些 Entitlement 是有效的？就是靠描述文件。 首先正常情况下证书本身的有效期是一年（除了 Apple iPhoneOS Application Signing 这张 App Store 使用的证书），包括免费开发者证书哦！ 那为什么都说免费开发者证书安装出来的软件有效期是七天，这是因为免费开发者签名之后生成的那个描述文件的有效期是七天；七天之后，描述文件过期，尽管证书还在有效期内，但是 iOS 却不认了。至于续签，就是用你的这张证书重新生成一份新的描述文件安装，这份描述文件又是新的七天有效期，因此完成了续签的效果。

一个侧载的 App 的描述文件要被 iOS 识别为有效，需要同时满足下面三个条件：

证书在有效期内
描述文件在有效期内
描述文件记载的 Entitlements 符合软件实际使用的 Entitlements
* **免费个人开发者证书**：人人都能申请。**代价极其高昂**——7天有效期、最多只能安装 3 个 App、限制 10 个 App ID。
* **付费个人/企业证书（$99/年）**：1年有效期、安装数量无上限、支持高级权限（Entitlements）。
* **神迹：TrollStore（巨魔）**：利用了当年 CoreTrust 的系统级漏洞，直接绕过了整个证书验证链。它不需要任何证书，就能给 App 赋予根权限（Root）且永久免签。但在高版本系统上，这个漏洞已经被彻底堵死。


---

iOS 26 以后，核心问题是**沙盒增强（App Sandbox Hardening）** 

> 苹果正式封堵了 CoreTrust 漏洞，**TrollStore（巨魔）彻底失效**。没有了巨魔，想越狱就必须依赖软件漏洞（如 iOS 27 的 palera1n 变体），这对于不爱折腾的人来说几乎是不可能的。

> 传统的 SideStore/AltStore 等方案，现在必须依赖**本地环回 VPN（Loopback VPN）**的技术来欺骗 iOS。

  * **稳定性急剧恶化**：在 iOS 26.0 和 26.1 上，只要手机重启，这个“虚拟的 Mac”就会断开连接。你必须手动重开 VPN，并重新信任你的电脑（或 SideStore 模拟的电脑），否则 App 就会闪退。
  * **通知延迟**： SideStore 的通知同步机制变得极不可靠，很多通知会严重延迟。




| **方案** | **稳定性** | **限制数量** | **核心代价** | **结论** |
| --- | --- | --- | --- | --- |
| **LiveContainer + SideStore** | 极低（7天续签+VPN高发故障） | 表面无限（设于码头） | 丢通知、无JIT、性能折损、操作繁琐 | **下策**（仅适合极客折腾） |
| **企业证书（自签/购买）** | 风险中等（随时面临苹果掉签） | 无限制（原有安装） | 证书可能被封禁，需要重新安装 | **中策**（适合省心大众的用户） |
| **TrollStore（巨魔商店）** | 极高（永久免签、间歇性能） | 无限制（原有安装） | **依赖系统特定漏洞** | **上策**（一旦符合条件就是绝对的主宰） |

**那有没有可能彻底甩掉电脑，让手机自己给自己续签？什么是最好的方案？**

## 下面的所有方案都是基于这个免费7天证书，开发者开源的方案
### iloader
iLoader是用来引导安装的桌面实用程序，比之前的AltServer和SideServer更好用 添加了更多功能(凭据保存，登录信息，安装器)为了让 SideStore 和 StikDebug 能够欺骗 iOS 26，使其误认为本地 VPN 是苹果官方的开发用 Mac，它们需要原始的硬件配对密钥。iLoader 通过usbmuxd（或 Windows 上的 iTunes 服务）与设备通信，生成这些锁定文件并自动注入到您的设备中。

### SideStore 与本地环回 VPN


SideStore 做的事情本质是：帮你自动完成“签名 + 安装 + 7天刷新”这一整套流程。
简单说就是，当你用数据线连接 Mac 并点击“信任此电脑”之后，Xcode 安装测试 App 时 iOS 内部会开启开发者调试相关服务，而 SideStore 就是通过“配对文件（pairing file）”模拟那台信任过的电脑。

当然，它也是需要一些技术门槛，具体就不展开了，简单说就是 SideStore 通过工具拦截 iOS 的请求，把验证开发者的请求重定向到手机本地进行处理验证，这个验证需要一个 pairing file（设备配对记录），而这个文件实际上是在你第一次用电脑（或工具）信任这台 iPhone 时，从设备导出的开通“开发通道”的凭证，这个 pairing file 用途是：

证明设备已经信任侧载工具
允许 iOS 内部开发服务（MobileInstallation 或等效通道）被 SideStore 调用
当然，这个配对文件可能会随机失效，或者在设备更新/重置后失效，需要重新生成/导入。
不过，苹果也在收缩这个场景，例如 iOS 26.4 现在需要验证传入的 socket 是否位于本地子网（local subnet）上，如果检测到 utun 位于子网之外，连接就会被拒绝，这是一个“网掩码检查”（netmask check），只是这个问题后续也有人在支持解决。

所以实际上 iOS 也是可以做到“合规”侧载，只是这个侧载门槛还是比较高的，比起 Android 就算禁止侧载后的 24 小时冷静期或者 adb 安装的门槛还高，所以大部分时候你认为非欧盟不可以侧载，其实也没错。

实际上这也是一场攻防过程，iOS 开发者安装应用属于必须提供的路径，而现在 SideStore 把这个途径给自动化，所以严格来说也算是在合理情况下的利用漏洞，至少它不需要越狱不是么？

另外 iOS 26.4 中调整了账户切换流程，把退出登录放在设置里面的账号设置，需要点击媒体与购买项目才能退出账号，这对于需要经常切换账户的用户来说确实麻烦：




**SideStore** 的出现打破了空间限制。它的核心思维非常巧妙，用网络工程的手段解决了系统限制：

> **破局思路**：苹果限制了只有开发机（电脑）才能通过 USB/无线局域网触发签名刷新。那么，如果我们在 iOS 内部自己跑一个“网关”，让手机自己跟自己通信呢？

1. **生成配对文件（Pairing File）:** 必须的硬件授权.
使用 `iDevicepair` 工具，在电脑上让手机生成一个受信配对证书。这个文件包含了手机的 UDID 和密钥，是允许设备触发开发者通信的“钥匙”。


2. **构建本地环回 VPN 网关:** 黑掉通信路径.
在手机上安装 `LocalDevVPN` 或 `StosVPN`。这个 VPN 并不连接外网，而是利用 WireGuard 协议在系统内部建立一个环回接口（Loopback），将手机发往本地开发端口的请求，拦截并路由给自己。


3. **伪装 Anisette 服务器:** 模拟苹果身份认证.
SideStore 内部集成了 Anisette 服务器逻辑，通过本地环回网络，直接生成苹果服务器所需的同步令牌（OTP/ADI），在不脱离手机的情况下，独立向苹果服务器发起 `App Refresh` 请求。


通过这套网络欺骗，SideStore 实现了**无机续签**。但 3 个 App 的硬性限制依然是一堵墙。

---

### LiveContainer —— 沙盒内的“Docker”
LiveContainer最大的好处就是安装APP数量无上限！我们知道不论是SideStore还是AltStore，因为是用免费的个人Apple开发者帐号签名IPA的，所以会有一个装置同时只能安装3个APP的限制。要解锁就只能花钱买3000台币的Apple开发者年费帐号。而LiveContainer没有此限制，在这个APP内部想装几个APP就装几个，只是需要进行切换程序。不需要花钱买Apple开发者帐号。SideStore 解决了续签问题，但我们手上依然只有可怜的 3 个 App 名额（SideStore 自身还要占一个）。为了实现“无限侧载”，**LiveContainer** 登场了。

作为一个后端开发者，我第一次看到 LiveContainer 的源码时被它的构思震撼了：**这不就是 iOS 版的免安装动态链接器吗？**
它不是一个虚拟机，也不是超轻量 Hypervisor，它是一个**应用启动器（App Launcher）**。

```
[ iOS 系统底层 ] 
       │
[ LiveContainer 主程序 ] (合法签名，占用 1 个 App 名额)
       │
       ├── (动态加载) ──> [ 壳 IPA 1 ] (Guest App) -> 独立沙盒目录 1
       └── (动态加载) ──> [ 壳 IPA 2 ] (Guest App) -> 独立沙盒目录 2

```
首先LiveContainer会拆开IPA，修补二进位Mach-O执行档的记忆体结构，将__PAGEZERO区段的起始记忆体地址调整，避开一些安全机制。

把Mach-O标头的档案类型从MH_EXECUTE改成MH_DYLIB，这样系统就会以载入函式库的方式来处理这个App。

接着注入一段新的指令，载入自己的TweakLoader.dylib，让App在启动时会执行自定义的程式码。

修补@executable_path，LiveContainer对_NSGetExecutablePath传出空指标，并让它当掉，产生SIGSEGV错误，再修改@executable_path上下文。让载入的App 以为自己是正统安装的。

修补NSBundle.mainBundle，直接改成安装的IPA的路径。

采用Restoring Dyld Memory Loading方法，绕过iOS的签名验证。也可以用JIT来绕过签名验证。如果没有JIT，就透过AltStore或SideStore给APP签名。

呼叫dlopen启动APP的二进位执行档。

让TweakLoader在指定资料夹里面载入tweaks。

找到程式执行入口，跳到该处。

APP呼叫UIApplicationMain，像一般的iOS APP一样启动。

关于多帐号与Keychain管理：iOS的Keychain可以用「Access Groups」区分不同App的资料。 LiveContainer预先建立了128组不同的Access Groups。每次建立一个新的App容器，就随机分配一组Access Group，达成资料隔离的效果。这样至多能安装到128个APP。
1. **改变可执行文件属性**：LiveContainer 会强行修改你导入的 IPA 镜像。它将主执行文件的 Mach-O 头部从“独立可执行文件（`MH_EXECUTE`）”强行篡改并 patch 为“动态链接库（`MH_DYLIB`）”。
2. **通过 `dlopen` 挂载**：在 LiveContainer 运行时，主程序通过底层 C 语言的 `dlopen()` 函数，直接将写成 dylib 的子 App 动态加载到自己的进程空间里。
3. **接管主函数劫持**：找到子 App 的入口指针，直接跳转执行 `UIApplicationMain`。

---
但当你高高兴兴地在 LiveContainer 里跑起高帧率重度游戏、MeloNX（Switch 模拟器）或 UTM 虚拟机时，你会发现它们卡得像幻灯片，甚至直接闪退。
因为你缺少了侧载技术里的圣杯：**JIT (Just-In-Time Compilation)**。

### 为什么需要 JIT？

像模拟器这类 App，需要实时把虚拟机的指令（如 ARM64/X86）翻译成 iOS 原生能懂的机器码。如果无法在运行时动态将一段内存标记为“可执行（Executable）”，就只能采用效率极低的解释器模式（Interpreter）。

苹果出于安全考虑，默认**严禁**任何生产环境的应用拥有 `mprotect` 动态读写执行内存的权限。

### 高版本 iOS 上的 JIT 破局

在最新的系统环境下，要想在 LiveContainer 内部成功挂载 JIT，需要使用 **StikDebug** 这类调试工具：

> **调试附加原理**：苹果虽然禁止了普通 App 的 JIT，但却给开发者留了后门——**允许开发者对自己的 App 进行 Debug 调试**。StikDebug 正是利用了这一点，通过前面 SideStore 生成的配对文件，伪装成外部调试器，通过网络给指定进程的 PID 发送附加调试信号（Attach via PID），从而在合规的流程下“恩赐”了该进程动态执行内存的权限。

---


由于 LiveContainer 是在一个共享沙盒内通过 `dlopen` 强行缝合子 App，它存在着天然的原生缺陷：
LiveContainer能够汇入多个APP，只要不删除APP，切换APP之后资料依然会存在。 因为不是真正安装到iOS系统，所以APP产生的资料只会储存在LiveContainer内部。 开启iOS档案APP → 我的iPhone/iPad → LiveContainer → Data → Application，可以看到各个APP的资料。 你必须忍受偶发性的 VPN 环回冲突、证书失效、以及每次大版本升级时底层 Hook 报错。

## VPN
现在主流的签名工具，一种是以 SideStore、iLoader 为代表的免费开发者自签工具，另一类是以全能签、Feather 等工具为代表的购买证书签名工具。 其实真说有什么区别，主要还是刚刚提到的证书种类和权限的区别，基本上，如果你要使用的软件有如下特征： 需要通知推送 包含 VPN 隧道 那么全能签之类的工具更适合你。相反，如果你要使用的软件有如下特征： 需要 JIT（模拟器、虚拟机） 那么 SideStore 更适合你。 注意这两种情况绝大多数情况下是不能交换的，比如你强行使用 SideStore 签名 LocalDevVPN 这种包含了 VPN 隧道的工具，那么相关的功能是完全无法使用的；又或者你使用全能签签名 MeloNX 这种模拟器，也完全无法使用，部分软件可能还会闪退。
LocalDevVPN：
它本质上是一个 iOS 开发者工具，用于在设备上创建安全、隔离的本地回环网络隧道（Loopback VPN）
由于国内网络环境或运营商对苹果特定开发接口（Anisette 服务器等）的限制，SideStore 直连经常会失败。LocalDevVPN 通过建立本地虚拟网络接口，能够绕过这些直连限制，让 SideStore 的网络请求成功路由到目标服务器

在你的 iOS 26 设备上，实际发生的硬核数据流向是这样的：

SideStore 客户端 发起开发者续签请求，其网络目标指向 SideStore 预设的一个虚拟开发机 IP。

StosVPN (TUN 网卡) 捕捉到该流量，直接拦截网络层（L3）IP 包，绕过真实网卡，将其重定向到本地。

minimuxer (用户态进程) 接收到流量，剥离网络层，提取应用层载荷。关键步骤：将这些请求转化为标准的、带配对密钥的 Usbmuxd 协议报文。

iOS 系统原生 lockdownd 进程 接收到来自 minimuxer 的报文，在经过非对称加密验证后，由于配对文件（Pairing File）完全吻合，系统会被彻底欺骗，以为自己正通过 USB 线缆连接在一台真正的 Mac 电脑上。

## 总结

1. **LocalDevVPN（修路）**：
   它本质上是一个 iOS 开发者工具，用于在设备上创建安全、隔离的**本地回环网络隧道（Loopback VPN）**[[1]]。由于国内网络环境或运营商对苹果特定开发接口（Anisette 服务器等）的限制，SideStore 直连经常会失败。LocalDevVPN 通过建立本地虚拟网络接口，能够绕过这些直连限制，让 SideStore 的网络请求成功路由到目标服务器[[10]]。
2. **SideStore（造车）**：
   负责利用你的 Apple ID 向苹果服务器请求证书，对 IPA 进行签名，并定期续签。同时，它还负责向系统的 `debugserver` 发送指令，为特定的 App 开启 JIT 权限。
3. **LiveContainer（开车）**：
   它本身不需要重签 IPA，而是通过动态加载技术在宿主进程内运行未签名的代码。但是，如果你要在 LiveContainer 中运行某些依赖 Keychain（钥匙串）或特定 Entitlements 的应用，它需要导入 SideStore 导出的证书凭据[[18]]。

要实现完美的“无限自签 + 免签运行 + JIT”，请按照以下流程操作：

#### 1. 准备工作
*   **获取工具**：你需要一个**外区 Apple ID**（国区 App Store 无法下载），在 App Store 搜索并下载 **LocalDevVPN**[[10]]。同时确保你已经安装了 SideStore 和 LiveContainer。
*   **登录账号**：在 SideStore 中登录你的免费 Apple ID，并完成 Anisette 服务器的配置（通常使用默认的或自建的服务器）。

#### 2. 建立网络隧道（关键步骤）
*   打开 **LocalDevVPN** 应用。
*   在 Wi-Fi 或蜂窝数据环境下，点击连接，启动其内置的 VPN（此时系统状态栏会出现 VPN 图标）[[14]]。这个回环隧道已经建立，准备接管 SideStore 的网络请求。

#### 3. SideStore 续签与 JIT 激活
*   **续签应用**：保持 LocalDevVPN 处于连接状态，打开 **SideStore**，进入 "My Apps"（我的应用）标签页[[20]]。点击应用旁边的刷新按钮（Refresh）。此时，SideStore 会通过网络隧道成功连接到苹果服务器，完成证书的重新签名，解决 7 天掉签问题[[9]]。
*   **开启 JIT**：如果你需要为某个应用（比如模拟器，或者 LiveContainer 宿主本身）开启 JIT，同样在保持 LocalDevVPN 连接的状态下，在 SideStore 中点击 "Enable JIT"（开启 JIT）按钮[[34]]。网络隧道确保了调试指令能够成功下发给底层的 `debugserver`。

#### 4. LiveContainer 导入凭据（针对特定应用）
*   如果你要在 LiveContainer 中运行的 IPA 需要完整的钥匙串访问权限或特定的开发者权限，你需要将 SideStore 的证书导入给 LiveContainer。
*   **操作**：在 SideStore 的设置中找到 "Export Credentials"（导出凭据），设置一个密码并导出。然后打开 **LiveContainer**，进入设置，选择 "Import from AltStore/SideStore"（从 AltStore/SideStore 导入），输入刚才设置的密码即可完成导入[[18]]。
*   之后，你就可以在 LiveContainer 中直接添加并运行各种 IPA 文件，享受免签且具备完整权限的运行环境。

从系统底层来看，这套方案的精妙之处在于**职责分离与网络层欺骗**：
*   **LiveContainer** 解决了代码签名校验的问题（利用 Mach-O 动态加载）。
*   **SideStore** 解决了开发者身份和 JIT 内存权限的问题（利用 `amfid` 和 `debugserver` 机制）。
*   **LocalDevVPN** 则纯粹在 BSD Socket 和 Network Extension 层面工作，通过 NetFlow 路由规则，将 SideStore 发往苹果开发服务器的 TCP/UDP 流量引入本地回环接口，配合后端的代理或隧道服务，规避了运营商的 QoS 限制或 DNS 污染。
