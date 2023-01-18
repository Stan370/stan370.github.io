# Work

### Notice

8.13 logout: +endpoint set-cookie null       api

sdk signout deal with logout logic: redirect_url=httpsxxxx&id=xx&redirect_url=xxx

现在只需要改一下signinurl的处理参数逻辑,再写个单元测试(本地http:127,若需要https Nginx跑)

Test方法: 1. mvn 删库rm -rf 2.局部方法调试 find usage, alter table

8.22 SQL密码public/1234 两个版本?;

 debug 要恢复暂停进程的执行，请在“[调试”窗口](https://www.jetbrains.com/help/rider/Debug_Tool_Window.html)F9中按或单击**“resume program** ” 。该进程将继续运行，直到它遇到断点，直到它退出，直到您停止执行或分离调试器。

# Cryptology

**对称加密 (DES, 3DES, AES)：**如果要加密一串消息，很自然的想法是，加密和解密用的同一个密码。如同现实生活中，一把钥匙既可以锁上一把锁，也可以打开一把锁，这就是密码学中的对称加密 (Symmetric Encryption)：加密和解密用的是同一串密钥 (Secret Key)。实际应用中的[数据加密](https://www.zhihu.com/search?q=%E6%95%B0%E6%8D%AE%E5%8A%A0%E5%AF%86&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22465894109%22%7D)，通常都是使用的对称加密，因为**[对称加密算法](https://www.zhihu.com/search?q=%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22465894109%22%7D)很多对硬件特别友好，所以在硬件加密模块上运行效率非常高**。

**非对称加密 (RSA), 非对称加密是为了解决对称加密无法解决的问题。例如，怎么才能保证使用密钥的人是可信的呢？**

Successful MITM attack execution has two distinct phases: interception and decryption.

**If simple DES is using a key of 56-bits then the keyspace consists of 2^**56 **keys.**

DES Is a block cipher with:

 – Block size : 64 bits – Key size : 56 bits – Number of rounds: 16

Stream cipher . The One-Time Pad, which is supposed to employ a purely random key, can potentially achieve "perfect secrecy". That is, it's supposed to be fully immune to brute force attacks. The problem with the one-time pad is that, in order to create such a cipher, its key should be as long or even longer than the plaintext. In other words, if you have 500 MegaByte video file that you would like to encrypt, you would need a key that's at least 4 Gigabits long.

## SAML

SAML的全称是Security Assertion Markup Language（安全断言标记语言），它在各种单点登录场景中被广泛使用。比如，某传统企业在AWS上购买了云资源，但是该企业员工的身份登录信息却保存在企业局域网内的ADFS中，此时就需要利用SAML帮助员工能通过ADFS登录到AWS上。再比如，某互联网企业购买了一个办公类SaaS软件，但是它并不想使用SaaS软件厂商提供的登录页面，而是希望在企业内部的办公平台直接登录该SaaS软件，此时就需要利用SAML来把办公平台和该SaaS软件的身份体系打通。在云计算逐渐普及的当下，诸如此类的应用场景越来越多。这就需要相关领域的同学能够对SAML有充分的了解。

## Login Authetication

1.**Seesion：**每次认证用户发起请求时，服务器需要去创建一个记录来存储信息。当越来越多的用户发请求时，内存的开销也会不断增加。

**可扩展性：**在服务端的内存中使用Seesion存储想登录信息，伴随而来的是可扩展性问题。

**CORS(跨域资源共享)：**当我们需要让数据跨多台移动设备上使用时，跨域资源的共享会是一个让人头疼的问题。在使用Ajax抓取另一个域的资源，就可以会出现禁止请求的情况。

**CSRF(跨站请求伪造)：**用户在访问银行网站时，他们很容易受到跨站请求伪造的攻击，并且能够被利用其访问其他的网站。

### cookie

cookie是可以跨域的在相同地址下享，根据同源策略cookie是区分端口的，但是**对浏览器来说，cookie是区分域，不区分端口的**，在一个ip地址下多个端口的cookie是共享的

[Cookie hijacking](http://en.wikipedia.org/wiki/HTTP_cookie#Cookie_hijacking) 是個很常見的 XSS 攻擊手法，大多是利用網站既有的 XSS 漏洞並透過 JavaScript 取得 documnet.cookie 資料，而 documnet.cookie 就包含所有你在該網頁所有可用的 Cookie 資料，但若你的網站程式在**設定 Cookie 的時候有特別加上 HttpOnly 屬性**，就可以進一步避免該頁的 Cookie 被 JavaScript 存取，表示client不可以查看cookie。后端服务器对cookie设置的一个附加的属性，在生成cookie时使用HttpOnly标志有助于减轻客户端脚本访问受保护cookie的风险

如果给Cookie配置了secure属性，那么这个Cookie能在https协议中传输

如果maxAge属性为正数，则表示该Cookie会在maxAge秒之后自动失效。浏览器会将maxAge为正数的Cookie持久化，即写到对应的Cookie文件中。无论客户关闭了浏览器还是电脑，只要还在maxAge秒之前，登录网站时该Cookie仍然有效。

如果maxAge为负数，则表示该Cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该Cookie即失效。maxAge为负数的Cookie，为临时性Cookie，不会被持久化，不会被写到Cookie文件中。Cookie信息保存在浏览器内存中，因此关闭浏览器该 Cookie就消失了。Cookie默认的maxAge值为-1。

‍如果maxAge为0，则表示删除该Cookie。Cookie机制没有提供删除Cookie的方法，因此通过设置该Cookie即时失效实现删除Cookie的效果。失效的Cookie会被浏览器从Cookie文件或者内存中删除 。

Domain 属性指定哪些主机可以接收 cookie。如果未指定，则该属性默认为设置 cookie 的同一主机，不包括子域。如果指定了域，则始终包含子域。因此，指定域比省略它的限制要小。但是，当子域需要共享有关用户的信息时，它会很有帮助。

2**. Token 登录**

为了解决上面登录验证的方式的一些痛点，出现了Token登录验证的方式。 最常见的 Token 生成方式是使用 JWT（Json Web Token），jwt实际上就是一个字符串，它由三部分组成：头部、载荷与签名 header.payload.signature，这三个部分都是json格式。

头部取决于 The header typically consists of two parts: **the type of the token, which is JWT, and the algorithm that is used, such as HMAC SHA256 or RSA SHA256**
.

```
JWTs encode claims   to be transmitted as a JSON [RFC7159] object that is used as the   payload of a JSON Web Signature (JWS) [JWS] structure or as the   plaintext of a JSON Web Encryption (JWE) [JWE] structure
```

当 server 收到浏览器传过来的 token 时，它会首先取出 token 中的 header + payload，根据密钥生成签名，然后再与 token 中的签名比对，如果成功则说明signature是合法的，即 token 是合法的。而且你会发现 payload 中存有我们的 userId，所以**拿到 token 后直接在 payload 中就可获取 userid，避免了像 session 那样要从 redis 去取的开销**。只要 server 保证密钥不泄露，那么生成的 token 就是安全的，因为如果伪造 token 的话在签名验证环节是无法通过的，就此即可判定 token 非法。

可以看到通过这种方式有效地避免了 token 必须保存在 server 的弊端，实现了分布式存储，不过需要注意的是，token 一旦由 server 生成，它就是有效的，直到过期，无法让 token 失效，除非在 server 为 token 设立一个黑名单，在校验 token 前先过一遍此黑名单，如果在黑名单里则此 token 失效，但一旦这样做的话，那就意味着黑名单就必须保存在 server，这又回到了 session 的模式，那直接用 session 不香吗。所以一般的做法是当客户端登出要让 token 失效时，直接在本地移除 token 即可，下次登录重新生成 token 就好

### **JWT**

遵守Oauth2 提高安全性

优点:

1 可以适用于**分布式的单点登录**场景。
2 可以使用**跨域认证**解决方案。
3 jwt实现自动刷新token的方案(待认证)。
核心
　　　1）给用户颁发的token值相当于一把锁，服务器端的秘钥相当于一把钥匙
　　　2）每次客户端请求都会携带这把锁

1. 用户使用账号、密码**登录**（最常见应用）应用，登录的请求发送到Authentication Server。
2. Authentication Server进行用户验证，然后创建JWT[字符串](https://www.zhihu.com/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2257869896})返回给客户端。
3. 客户端请求接口时，在请求头带上JWT。
4. Application Server验证JWT合法性，如果合法则继续调用应用接口返回结果。

关键在于生成JWT，和解析JWT这两个地方。

使用场景：有几种情况它是很有用的。

如果你正在构建从服务器到服务器或客户端到服务器（如：移动应用 APP 或单页面应用）的 API 服务，那么使用 JWT 是非常明智的。比如：

- 你的客户端需要通过 API 进行身份验证，并返回 JWT
- 然后，客户端使用返回的 JWT 经过身份验证去请求其它的 API 服务
- 这些其它 API 服务通过客户端的 JWT 验证客户端是可信的，并且可以执行某些操作无需再次验证

JWT claims are pieces of information asserted about a subject.

**Registered claims**

The JWT specification defines seven reserved claims that are not required, but are recommended to allow interoperability with **[third-party applications](https://auth0.com/docs/get-started/applications/confidential-and-public-applications/enable-third-party-applications)**. These are:

- `iss` (issuer): Issuer of the JWT
- `sub` (subject): Subject of the JWT (the user)
- `aud` (audience): Recipient for which the JWT is intended
- `exp` (expiration time): Time after which the JWT expires
- `nbf` (not before time): Time before which the JWT must not be accepted for processing
- `iat` (issued at time): Time at which the JWT was issued; can be used to determine age of the JWT
- `jti` (JWT ID): **Unique identifier; can be used to prevent the JWT from being replayed** (allows a token to be used only once)

`IssuedAt` == Notbefore = 

Session和JWT的区别：

对于用户的状态保存的位置：**session是保存在服务端的，而jwt是保存在客户端的(server 生成**
对于安全性：由于jwt的payload是使用**base64编码**的，并没有加密，因此jwt中不能存储敏感数据。而session的信息是存在服务端的，相对来说更安全。
对于两者长度：jwt太长，cookie的限制大小一般是4k，cookie很可能放不下，所以jwt一般放在local storage里面。而sessionId只是很短的一个字符串，因此使用jwt的http请求比使用session的开销大得多。
对于使用时间： jwt是一次性的。如果想修改里面的内容，就必须签发一个新的jwt。
对于扩展性：jwt可扩展性好，在应用程序分布式部署的情况下，session需要做多机数据共享，通常可以存在数据库或者redis里面。而jwt不需要。
对于实用性：jwt的载荷中可以存储一些常用信息，用于交换信息，有效地使用 JWT，可以降低服务器查询数据库的次数。

1. SSO 单点登入

只需登入一次passport,就能进入所有系统

1. 用户访问网站  `a.com` 下的 pageA 页面。
2. 由于没有登录，则会重定向到认证中心，并带上回调地址 `www.sso.com?return_uri=a.com/pageA`，以便登录后直接进入对应页面。
3. 用户在认证中心输入账号密码，提交登录。
4. 认证中心验证账号密码有效，然后重定向  `a.com?ticket=123` 带上**授权码 ticket**，并将认证中心 `sso.com` 的登录态写入 Cookie。
5. 在 `a.com` 服务器中，拿着 ticket 向认证中心确认，授权码 ticket 真实有效。
6. 验证成功后，服务器将登录信息写入 Cookie（此时客户端有 2 个 Cookie 分别存有 `a.com` 和 `sso.com` 的登录态）。

SSO退出

当某个产品 `c.com` 退出登录时：

1. 清空 `c.com` 中的登录态 Cookie。
2. 请求认证中心 `sso.com` 中的退出 api。
3. 认证中心遍历下发过 ticket 的所有产品，并调用对应的退出 api，完成退出。

### OAuth

对于一个APP来说，如果它想要使用OAuth，那么首先它要在服务提供商那里注册。

应用程序要提供一下信息授权 Authorization Grant：

1应用程序名称(Application Name)
2应用程序网站(Application Website)
3回调URL(Redirect URI or Callback URL)
在用户**同意授权(或者拒绝)之后**，服务提供商会将用户重新导向这个Callback URL，这个Callback URL要来负责处理授权码或者访问令牌。

应用程序注册完成之后，服务提供商会颁发给应用程序一个“客户端认证信息(client credentials)”。Client Credential包括：

4 Client ID
提供给服务提供商，用于识别应用程序用于构建提供给用户请求授权的URL
5 Client Secret
提供给服务提供商，用于验证应用程序只有应用程序和服务提供商两者可知

**Oauth2.0**

```
     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|   Resource    |
     |        |                               |     Owner     |
     |        |<-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->| Authorization |
     | Client |                               |     Server    |
     |        |<-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|    Resource   |
     |        |                               |     Server    |
     |        |<-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+

                     Figure 1: Abstract Protocol Flow 

```

### **OAuth2四种模式**

**1.1. 隐式授权模式（Implicit Grant）**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da550c95-49b1-4871-b207-40e03ea89648/Untitled.png)

****1.2. 授权码授权模式（Authorization code Grant）****

第三步：认证服务器向用户展示授权页面，等待用户授权
第四步：用户授权，认证服务器生成一个code和带上client_id发送给应用服务器
然后，应用服务器拿到code，并用client_id去后台查询对应的client_secret
第五步：将code、client_id、client_secret传给认证服务器换取access_token和
refresh_token
第六步：将**access_token和refresh_token**传给应用服务器

A refresh token can help you balance security with usability. Since refresh tokens are typically longer-lived, you can use them **to request new access tokens after the shorter-lived access tokens expire**
.
第七步：验证token，访问真正的资源页面

Most common

****1.3. 密码模式（Resource Owner Password Credentials Grant）****

**只要client请求，我们就将AccessToken发送给它。这种模式是最方便但最不安全的模式。因此这就要求我们对client完全的信任，而client本身也是安全的。**

**安全性建议**

**资源提供方:**

对client_id和回调地址做严格校验

获取access token的code仅能使用一次，且与授权用户关联

尽量避免直接读取当前用户session进行绑定

有效使用client_secret参数

1. OAuth第三方登入

选择vx登入

这时会跳转微信的 OAuth 授权登录，并带上 `a.com` 的回调地址。

用户输入微信账号和密码，登录成功后，需要选择具体的授权范围，如：授权用户的头像、昵称等。

授权之后，微信会根据拉起 `a.com?code=123` ，这时带上了一个临时票据 code。

获取 code 之后， `a.com` 会拿着 code 、appid、appsecret，向微信服务器申请 token，验证成功后，微信会下发一个 token。

有了 token 之后， `a.com` 就可以凭借 token 拿到对应的微信用户头像，用户昵称等信息了。

`a.com` 提示用户登录成功，并将登录状态写入 Cooke，以作为后续访问的凭证。

- Cookie + Session 历史悠久，适合于简单的后端架构，需开发人员自己处理好安全问题。
- Token 方案对后端压力小，适合大型分布式的后端架构，但已分发出去的 token ，如果想收回权限，就不是很方便了。
- SSO 单点登录，适用于中大型企业，想要统一内部所有产品的登录方式。
- OAuth 第三方登录，简单易用，对用户和开发者都友好，但第三方平台很多，需要选择合适自己的第三方登录平台。

# Linux

`fork()`
 系统调用，父进程调用fork会创建一个进程副本，代码中还可以通过fork返回值是否为0来区分是子进程还是父进程。fork 系统调用用于创建一个新进程，称为***子进程***，它与进行 fork() 调用的进程（父进程）同时运行。创建新的子进程后，两个进程都将执行 fork() 系统调用之后的下一条指令。**子进程使用与父进程相同的 pc（程序计数器）、相同的 CPU 寄存器、相同的打开文件。**

它不接受任何参数并返回一个整数值。下面是 fork() 返回的不同值。

***负值***：创建子进程不成功。***零***：返回新创建的子进程。***正值***：返回给父级或调用者。该值包含新创建的子进程的进程 ID。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2e4d734-908a-46ef-9e67-e454fe3a52d4/Untitled.png)

fork只能创建调用该函数的线程的副本，进程中其他运行的线程，fork不予处理。这就意味着，对于多线程程序而言，寄希望于通过fork来**创建一个完整进程副本是不可行的。**

cd /去root目录   cd ~去当前用户所在目录

### Linux 里利用 grep 和 find 命令查找文件内容

**从文件内容查找匹配指定字符串的行：**

```
$ grep "被查找的字符串" 文件名
```

例子：在当前目录里第一级文件夹中寻找包含指定字符串的 .in 文件

```
grep "thermcontact" /.in
```

从文件内容查找与正则表达式匹配的行：

```
$ grep –e "正则表达式" 文件名
```

查找时不区分大小写：

```
$ grep –i "被查找的字符串" 文件名
```

cmd

~代表你的/home/用户明目录                 ls -a 查看隐藏

**单点故障**( **SPOF** ) 是系统的一部分，如果发生[故障](https://en.wikipedia.org/wiki/Failure)，整个系统将[停止工作](https://en.wikipedia.org/wiki/Cascading_failure)

Systems can be made robust by adding [redundancy](https://en.wikipedia.org/wiki/Redundancy_(engineering)) in all potential SPOFs. Redundancy can be achieved at various levels.

The assessment of a potential SPOF involves identifying the critical components of a complex system that would provoke a total systems failure in case of [malfunction](https://en.wiktionary.org/wiki/malfunction). Highly [reliable systems](https://en.wikipedia.org/wiki/Reliability_engineering) should not rely on any such individual component.

# Java

**执行过程**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d2c526a-ce2c-4f77-87c5-77b878c06b3e/Untitled.png)

步骤 1： 写源代码，源代码将以.java的文件格式保存在电脑硬盘中。 步骤 2： 编译器（compiler）检查是否存在编译期错误（例如缺少分号，关键字拼写错误等）。若通过检测，编译器就会将源代码翻译成字节码（bytecode），以.class的文件格式保存在电脑硬盘中。 步骤 3： 若要运行此Java程序，JVM中会有一个叫类加载器（class loader）的内置程序把字节码从硬盘载入到正位于内存中的JVM里去。 步骤 4： JVM中还有一个叫字节码校验器（bytecode verifier）的内置程序检测是否存在运行期错误（例如栈溢出）。若通过检测，字节码校验器就会将字节码传递给解释器（interpreter）。 步骤 5： 解释器会对字节码进行逐行翻译，将其翻译成当前所在系统可以理解的机器码（machine code）， 步骤 6：将机器码交给操作系统，操作系统会以main方法作为入口开始执行程序。至此，一个Java程序就这样运行起来了

JIT(just-in time compiler)动态优化

Person person = new Student();这行代码将会生成一个person变量，该变量的编译时类型是Person，运行时类型是Student。

**[Java](http://lib.csdn.net/base/java)**的引用变量有两个类型 编译时类型和运行时类型：

java允许把一个子类对象直接赋值给一个父类引用变量，无须任何类型转换，或者被称为向上转型，由系统自动完成。

引用变量在编译阶段只能调用其编译时类型所具有的方法，但运行时则执行它运行时类型所具有的方法，因此，编写Java代码时，引用变量只能调用声明该变量所用类里包含的方法。与方法不同的是，对象的属性则不具备多态性。通过引用变量来访问其包含的实例属性时，系统总是试图访问它编译时类所定义的属性，而不是它运行时所定义的属性。

## 类加载

****java.lang.Class****

接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件加载到内存中。此过程就称为类的加载。
加载到内存中的类，我们就称为运行时类。此运行时类，就作为Class的一个实例。
换句话说，**Class的实例就对应着一个运行时类。**

（2）加载到内存中的运行时类，会缓存一定的时间。在此时间之内，我们可以通过不同的方式来获取此运行时类。

## thread

ScheduledExecutorService的主要作用就是可以将定时任务与线程池功能结合使用

### reflection

**现有的框架都是以反射为基础。**

在实际项目开发中，**用的最多的是框架，填的最多的是类，反射这一概念就是将框架和类揉在一起的调和剂**。所以，反射才是接触项目开发的敲门砖！

在[堆内存](https://so.csdn.net/so/search?q=%E5%A0%86%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020)的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可 以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射

![https://img-blog.csdnimg.cn/20200609160849703.png](https://img-blog.csdnimg.cn/20200609160849703.png)

### Java反射机制

Java反射机制主要就是在程序运行的时候，动态的**加载一些类和这些类的详细信息，然后操作这些类或者是对象的属性以及方法**。它的本质其实是JVM在得到一个class对象之后，再通过class对象进行一些反编译，这样就能得到对象中的各种信息。

**优点：** 运行期类型的判断，动态加载类，提高代码灵活度。

**缺点：**

- 性能瓶颈：反射相当于一系列解释操作，通知 JVM 要做的事情，性能比直接的 java 代码要慢很多。
- 安全问题，让我们可以动态操作改变类的属性同时也增加了类的安全隐患。

*Lombok*）是一个基于注解的 Java 库，可让您减少样板代码。Lombok 提供了各种注解，旨在替换以样板、重复或繁琐而著称的 Java 代码。例如，通过使用 Lombok，您可以**避免编写不带参数的构造函数和方法**，只需添加一些注释即可。当库将表示所需代码和样板代码的字节码注入到您的*.class*文件中时，会在**编译**时发生奇迹。另外，正如我们将看到的，该库可以插入到您的 IDE 中，让您拥有与自己编写所有样板代码相同的体验。

@data is shortcut **for @ToString, @EqualsAndHashCode, @Getter on all fields, @Setter on all non-final fields, and @RequiredArgsConstructor**`toString()equals()hashCode()`

# Spring

## 应用分层

**Controller层**叫做控制层，负责请求转发，接受页面过来的参数，传给Service处理，接到返回值，再传给页面。即用于接口暴露。

**Service层**叫服务层，被称为服务，粗略的理解就是对一个或多个DAO进行的再次封装，封装成一个服务。即sevice层用于逻辑处理，sevice层专注业务逻辑，对于其中需要的数据库操作，都通过Dao去实现。

Service层主要负责业务模块的应用逻辑应用设计。
Service层的设计：同样是首先设计接口，再设计其实现类，接着再Spring的配置文件中配置其实现的关联。这样我们就可以在应用中调用service接口来进行业务处理。service层 具体要调用已经定义的dao层接口 ，封装service层**业务逻辑**有利于通用的业务逻辑的独立性和重复利用性。程序显得非常简洁。

### **3、Controller层**

Controller层，负责具体的业务模块流程的控制，在此层要调用service层的接口来控制业务流程，控制的配置也同样是在Spring的配置文件里进行，针对具体的业务流程，会有不同的控制器。我们具体的设计过程可以将**流程进行抽象归纳**，设计出可以重复利用的子单元流程模块。这样不仅使程序结构变得清晰，也大大减少了代码量。

建立了DAO层后才可以建立Service层，**而Service层又是在Controller层之下的，因而Service层应该既调用DAO层的接口，又要提供接口给Controller层的类来进行调用**，它刚好处于一个中间层的位置。每个模型都有一个Service接口，每个接口分别封装各自的业务处理方法。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7ed9801-5eba-4adb-9fb0-beed017b3960/Untitled.png)

Controller：控制器
主要负责具体业务模块流程的控制，此层要调用到Service层的接口去控制业务流程，控制的配置同样在Spring配置文件中配置。针对不同的业务流程有不同的控制器。在设计的过程可以设计出重复利用的子单元流程模块。

四：model：模型
模型就是指视图的数据Model，模型，通常来讲，我们会把模型和另一个东西放在一起来说：View，视图。模型通常认为是视图的内核，何谓之视图？我们正在与之交互的网站的界面就是视图，而模型是指他的内核：数据

**Spring Boot 引入了*[@SpringBootApplication](https://www.baeldung.com/spring-boot-annotations#spring-boot-application)*注解**。此单个注释等效于使用*@Configuration*、*@EnableAutoConfiguration*和 *@ComponentScan*。

@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制

@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。

@Configuration：允许在 Spring 上下文中注册额外的 bean 或导入其他配置类

启用注解注入后，**我们可以对属性、设置器和构造器使用自动装配**。

```jsx
public class FooService {  
    @Autowired
    private FooFormatter fooFormatter;
}
```

让我们看看如何使用*@Autowired*注释属性。这消除了对 getter 和 setter 的require

使用*@Autowired*将此 bean 注入*Foo**Service** bean*

`@RequestMapping`注解用于将所有传入的 HTTP 请求 URL 映射到相应的控制器方法

Java Bean 是一种类，而且是特殊的、可重用的类。Java language 是一种面向对象的编程语言，类是面向对象的编程语言的基础；可重用又是面向对象编程思想存在的意义之一，所以起名 Bean 很是形象。

A JavaBean is just a [standard](http://www.oracle.com/technetwork/java/javase/documentation/spec-136004.html). It is a regular Java `class`, except it follows certain conventions:

1. **All properties are private (use [getters/setters](http://en.wikipedia.org/wiki/Mutator_method))**
2. **A public [no-argument constructor](http://en.wikipedia.org/wiki/Nullary_constructor)**
3. **Implements `[Serializable](http://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html)`.**

## Servlet容器

Tomcat

- 与Servlet程序合作处理HTTP请求——根据HTTP请求生成HttpServletRequest对象并传递给Servlet进行处理，将Servlet中的HttpServletResponse对象生成的内容返回给浏览器.
    
    ![https://pica.zhimg.com/v2-ce6e39bb02e3c6a2f4eb1e5afaa6e4e6_r.jpg?source=1940ef5c](https://pica.zhimg.com/v2-ce6e39bb02e3c6a2f4eb1e5afaa6e4e6_r.jpg?source=1940ef5c)
    

虽然Tomcat也可以认为是HTTP服务器，但通常它仍然会和Nginx配合在一起使用：

- 动静态资源分离——运用Nginx的反向代理功能分发请求：所有动态资源的请求交给Tomcat，而静态资源的请求（例如图片、视频、CSS、JavaScript文件等）则直接由Nginx返回到浏览器，这样能大大减轻Tomcat的压力。
- 负载均衡，当业务压力增大时，可能一个Tomcat的实例不足以处理，那么这时可以启动多个Tomcat实例进行水平扩展，而Nginx的负载均衡功能可以把请求通过算法分发到各个不同的实例进行处理

Filter可认为是Servlet的一种“变种”，它主要用于对用户请求进行预处理，也可以对HttpServletResponse进行后处理，是个典型的处理链。是一个可以复用的代码片段，可以用来转换HTTP请求、响应和头信息。Filter不像Servlet，它不能产生一个请求或者响应，它只是修改对某一资源的请求，或者修改从某一的响应。

**chain.doFilter()，执行该方法之前，即对用户请求进行预处理；执行该方法之后，即对服务器响应进行后处理。**

在上面的请求Filter中，仅在日志中记录请求的URL，对所有的请求都执行chain.doFilter (request,reponse)方法，当Filter对请求过滤后，依然将请求发送到目的地址。如果需要检查权限，可以在Filter中根据用户请求的HttpSession，**判断用户权限是否足够。如果权限不够，直接调用重定向即可，无须调用chain.doFilter(request,reponse)方法**

> Filter有如下几个用处。
> 
> - 在HttpServletRequest到达Servlet之前，拦截客户的HttpServletRequest。
> - 根据需要检查HttpServletRequest，也可以修改HttpServletRequest头和数据。
> - 在HttpServletResponse到达客户端之前，拦截HttpServletResponse。
> - 根据需要检查HttpServletResponse，也可以修改HttpServletResponse头和数据。
> 
> **Filter有如下几个种类。**
> 
> - 用户授权的Filter：Filter负责检查用户请求，根据请求过滤用户非法请求。
> - 日志Filter：详细记录某些特殊的用户请求。
> - 负责解码的Filter：包括对非标准编码的请求解码。
> - 能改变XML内容的XSLT Filter等。
> 
> ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a20e3e6d-9b97-44c4-83b4-55197b65504b/Untitled.png)
> 

1、Filter是依赖于Servlet容器，属于Servlet规范的一部分，而拦截器则是独立存在的，可以在任何情况下使用。

2、Filter的执行由Servlet容器回调完成，而拦截器通常通过动态代理的方式来执行。

3、Filter的生命周期由Servlet容器管理，而拦截器则可以通过IoC容器来管理，因此可以通过注入等方式来获取其他Bean的实例，因此使用会更方便。

Listener.       通过listener可以监听web服务器中某一个执行动作，并根据   其要求作出相应的响应。通俗的语言说就是在application，session，request三个对象创建消亡或者往其中添加修改删除属性时自动执  行代码的功能组件。

***MockHttpServletRequest测试doGet处理req,res***

# **授权（Authorization）**

- **用户授予第三方应用访问该用户某些资源的权限**
    - 你在安装手机应用的时候，APP 会询问是否允许授予权限（访问相册、地理位置等权限）
    - 你在访问微信小程序时，当登录时，小程序会询问是否允许授予权限（获取昵称、头像、地区、性别等个人信息）

对后台所有系统进行的**统一权限管理**项目，发现书中以及网上介绍的相关方法论已经很多了，多是基于RBAC 0到RBAC 3（Role-Bases Access Control）模型的理论介绍

RBAC支持公认的安全原则：最小特权原则、责任分离原则和数据抽象原则。
•	最小特权原则得到支持，是因为在RBAC模型中可以通过限制分配给角色权限的多少和大小来实现，分配给与某用户对应的角色的权限只要不超过该用户完成其任务的需要就可以了。
•	责任分离原则的实现，是因为在RBAC模型中可以通过在完成敏感任务过程中分配两个责任上互相约束的两个角色来实现，例如在清查账目时，只需要设置财务管理员和会计两个角色参加就可以了。
•	数据抽象是借助于抽象许可权这样的概念实现的，如在账目管理活动中，可以使用信用、借方等抽象许可权，而不是使用操作系统提供的读、写、执行等具体的许可权。但RBAC并不强迫实现这些原则，安全管理员可以允许配置RBAC模型使它不支持这些原则。因此，RBAC支持数据抽象的程度与RBAC模型的实现细节有关。
RBAC96是一个模型族，其中包括RBAC0~RBAC3四个概念性模型。
1、基本模型RBAC0定义了完全支持RBAC概念的任何系统的最低需求。
2、RBAC1和RBAC2两者都包含RBAC0，但各自都增加了独立的特点，它们被称为高级模型。
RBAC1中增加了角色分级的概念，一个角色可以从另一个角色继承许可权。
RBAC2中增加了一些限制，强调在RBAC的不同组件中在配置方面的一些限制。
3、RBAC3称为统一模型，它包含了RBAC1和RBAC2，利用传递性，也把RBAC0包括在内。这些模型构成了RBAC96模型族。
￼
RBAC模型简述
RBAC0的模型中包括用户（U）、角色（R）和许可权（P）等3类实体集合。
RABC0权限管理的核心部分，其他的版本都是建立在0的基础上的，看一下类图：

RBAC0定义了能构成一个RBAC控制系统的最小的元素集合。
在RBAC之中,包含用户users(USERS)、角色roles(ROLES)、目标objects(OBS)、操作operations(OPS)、许可权permissions(PRMS)五个基本数据元素，此模型指明用户、角色、访问权限和会话之间的关系。
每个角色至少具备一个权限，每个用户至少扮演一个角色；可以对两个完全不同的角色分配完全相同的访问权限；会话由用户控制，一个用户可以创建会话并激活多个用户角色，从而获取相应的访问权限，用户可以在会话中更改激活角色，并且用户可以主动结束一个会话。
用户和角色是多对多的关系，表示一个用户在不同的场景下可以拥有不同的角色。
例如项目经理也可以是项目架构师等；当然了一个角色可以给多个用户，例如一个项目中有多个组长，多个组员等。
这里需要提出的是，将用户和许可进行分离，是彼此相互独立，使权限的授权认证更加灵活。
角色和许可（权限）是多对多的关系，表示角色可以拥有多分权利，同一个权利可以授给多个角色都是非常容易理解的，想想现实生活中，当官的级别不同的权限的情景，其实这个模型就是对权限这方面的一个抽象，联系生活理解就非常容易了。
RBAC1，基于RBAC0模型，引入角色间的继承关系，即角色上有了上下级的区别，角色间的继承关系可分为一般继承关系和受限继承关系。一般继承关系仅要求角色继承关系是一个绝对偏序关系，允许角色间的多继承。而受限继承关系则进一步要求角色继承关系是一个树结构，实现角色间的单继承。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/41c50053-cd4a-43de-96fb-be58a3771155/Untitled.png)

# 微Service

Microservices architecture is a relatively new trend in software development, it has gained popularity in recent years. The term "microservices" was coined by Martin Fowler and James Lewis in 2014, although the concept of building large applications as a collection of small, modular services has been around for some time.
The rise of cloud computing and containerization technologies like Docker, as well as advances in infrastructure automation, have made it easier to deploy and manage microservices-based applications at scale. Additionally, the need for faster development cycles and more flexible deployment options in the age of digital transformation has made the microservices architecture more appealing to many organizations.

**然而，微服务架构并不是一个放之四海而皆准的解决方案，它自身也面临着一系列挑战，例如增加的复杂性、服务到服务的通信和服务发现。只有当您试图解决的问题足够复杂以保证分布式架构时，微服务才有意义，否则增加的复杂性可能不值得从中受益。**

Service，我们有时候会需要一些相对独立，与业务系统没啥关系的功能。但不是所有的功能都可以做成一个服务，服务是一个相对独立的功能模块，完成一些指定的工作，这些工作高度抽象和通用。一个典型的服务像是数据库服务、缓存服务、文件存储服务、身份验证服务、消息队列服务等。

关系型数据库服务可以视为是一个接收SQL语句并给出一个查询结果的服务，我们不必关心服务内部具体是如何处理问题的，我们只需要关注服务给出的接口。

并不是所有的模块都适合做成服务，一个服务首先最重要的是[独立性](https://www.zhihu.com/search?q=%E7%8B%AC%E7%AB%8B%E6%80%A7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22157049250%22%7D)，这个服务必须可以独立的完成指定的工作。复杂的服务可能依赖于一个或者多个更基础的服务，但是服务通常不应当依赖于任何具体的业务代码，服务必须具有高度的[抽象性](https://www.zhihu.com/search?q=%E6%8A%BD%E8%B1%A1%E6%80%A7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22157049250%22%7D)。关系型数据库服务就具有高度的抽象性，事实上只要我们撰写标准的SQL，不论后面是MySQL、SQL Server还是Oracle，他们都会呈现出几乎完全相同的行为。

一个更为简单的服务像是缓存服务，我们把一坨数据放进去，在一段时间内可以快速的获取这坨数据，在一段时间后数据就会消失。

当你的代码需要一个高度抽象高度标准化的功能，而这个功能又不能简单的实现，或者这个功能需要很多资源的配合，例如缓存服务需要内存资源，而数据库服务通常需要磁盘资源，身份验证服务通常需要数据库服务支持。这个时候就可以考虑将这个功能模块做成一个服务。

服务作为基础的部件，我们通常会要求它能够应付各种各样的情况，一个优质的服务通常会有非常高的可用性，因为我们的系统可能会依赖于各种各样的服务，而整个系统的可用性将不可能比其中任何一个服务的可用性更高。

所以服务的特征：抽象、独立、稳定。

**什么是微服务**

- 使用一套小服务来开发单个应用的方式，每个服务运行在独立的进程里，一般采用轻量级的通讯机制互联，并且它们可以通过自动化的方式部署
- 什么叫微？
    - 单一功能
    - 代码少，不是，而且代码多
    - 架构变的复杂了
    - 微服务是设计思想，不是量的体现

当程序跑起来时，一般情况下，应用程序（application program）会时常通过API调用库[https://blog.csdn.net/qq_27384769/article/details/111178203](https://blog.csdn.net/qq_27384769/article/details/111178203)里所预先备好的函数。但是有些[库函数](https://www.zhihu.com/search?q=%E5%BA%93%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A27459821%7D)（library function）却要求应用先传给它一个函数，好在合适的时候调用，以完成目标任务。这个被传入的、后又被调用的函数就称为**回调函数**（callback function）。

有一家旅馆提供叫醒服务，但是要求旅客自己决定叫醒的方法。可以是打客房电话，也可以是派服务员去敲门，睡得死怕耽误事的，还可以要求往自己头上浇盆水。这里，“叫醒”这个行为是旅馆提供的，相当于库函数，但是叫醒的方式是由旅客决定并告诉旅馆的，也就是回调函数。而旅客告诉旅馆怎么叫醒自己的动作，也就是把回调函数传入库函数的动作，称为**登记回调函数**（to register a callback function）

阻塞式回调和延迟式回调。两者的区别在于：阻塞式回调里，回调函数的调用一定发生在起始函数返回之前；而延迟式回调里，回调函数的调用有可能是在起始函数返回之后。这里不打算对这两个概率做更深入的讨论，之所以把它们提出来，也是为了说明强调起始函数的重要性。网上的很多文章，提到这两个概念时，只是笼统地说阻塞式回调发生在[主调函数](https://www.zhihu.com/search?q=%E4%B8%BB%E8%B0%83%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A27459821%7D)返回之前，却没有明确这个主调函数到底是起始函数还是中间函数，不免让人糊涂，所以这里特意说明一下。另外还请注意，本文中所举的示例均为阻塞式回调。延迟式回调通常牵扯到多线程

## 服务架构

      可用性:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/543121e2-0d4f-4205-9fda-61ddd14f8be2/Untitled.png)

**限流**
防止恶意请求流量，恶意攻击。

通过对**并发的请求或者访问进行限速或者设置一个时间窗口内的请求进行限速**来保护系统。一旦达到限制速率可以拒绝服务（定向到错误页或者告知资源没有了）排队或者等待（秒杀、下单）**降级（返回兜底数据或者默认数据，如商品详情页库存默认有货）**
常见限流方式：拒绝服务; 服务降级; 分级规则处理用户; 延时处理. 限制并发数；如数据库连接池，线程池；限制瞬时并发数；限制时间窗口内的平均速率；限制远程接口调用速率；限制MQ的消费速率；还可以根据网络连接数，网络流量，CPU或内存负载限流。
常见的限流算法：滑动窗口（建立一个窗口，每次固定大小的可以访问）；漏桶（控制传输速率）算法思想是不断向桶里注水，无论水的速率是快还是慢，水都是按照固定速率放外面漏水，如果桶满了就会溢出；令牌桶：能够解决突发流量

**降级牺牲的是什么？**

**强强一致性变成最终一致性**

大多数的系统是不需要强一致性的。

强一致性就要求多种资源的占用，减少强一致性就能释放更多资源

这也是我们一般利用消息中间件来削峰填谷，变强一致性为最终一致性，也能达到效果

**干掉一些次要功能**

停止访问不重要的功能，从而释放出更多的资源

举例来说，比如电商网站，评论功能流量大的时候就能停掉，当然能不直接干掉就别直接，最好能简化流程或者限流最好
**熔断**
在固定的时间窗口内，接口调用超时比率达到一个阈值，会开启熔断，进入熔断后，后续对服务接口的调用不再经过网络，直接执行本地的默认方法，达到服务降级的效果。当过了规定时间后服务将从熔断状态恢复过来，再次接受调用方的远程调用。
实现熔断的框架：SpringCloudHystrix

三者**关系**

熔断强调的是服务之间的调用能实现自我恢复的状态；

限流是从系统的流量入口考虑，从进入的流量上进行限制，达到保护系统的作用；

降级，是从系统内部的平级服务或者业务的维度考虑，流量大了，可以干掉一些，保护其他正常使用；

熔断是降级方式的一种；

降级又是限流的一种方式；

三者都是为了通过一定的方式去保护流量过大时，保护系统的手段

- 在高并发环境下，**服务之间的依赖关系导致调用失败，解决的方式通常是:**

**限流->熔断->隔离->降级, 其目的是防止雪崩效应**。

- [架构之高可用：负载均衡](notion://www.notion.so/md/arch/arch-y-loadbalance.html)
    - 负载均衡（Load Balance），意思是将负载（工作任务，访问请求）进行平衡、分摊到多个操作单元（服务器，组件）上进行执行。是解决高性能，单点故障（高可用），扩展性（水平伸缩）的终极解决方案。
- [架构之高可用：容灾备份,故障转移](notion://www.notion.so/md/arch/arch-y-backup.html)
    - 容灾技术是系统的高可用性技术的一个组成部分，容灾系统更加强调处理外界环境对系统的影响，特别是灾难性事件对整个IT节点的影响，提供节点级别的系统恢复功能。故障转移（failover），即当活动的服务或应用意外终止时，快速启用**冗余**或备用的服务器、系统、硬件或者网络接替它们工作。故障恢复是在计划内或计划外中断解决后**切换回主站点**的过程。

# REST

REST:REpresentational State Transfer 直接翻译：表现层状态转移

REST实际上是对“HTTP”（Hypertext Transfer）的进一步**抽象**，两者就如同接口与实现类的关系一般。

转移（Transfer）：无论状态是由服务端还是客户端来提供的，“取下一篇文章”这个行为逻辑必然只能由服务端来提供，因为只有服务端拥有该资源及其表征形式。服务器通过某种方式，把“用户当前阅读的文章”转变成“下一篇文章”，这就被称为“表征状态转移”

URL**定位资源**，用HTTP**描述操作**。

**看Url就知道要什么        看http method就知道干什么          看http status code就知道结果如何**

浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含 HTTP 状态码的信息头（server header）用以**响应浏览器的请求**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/47e9b58f-6738-449f-a64c-3cbeaec393e3/Untitled.png)

301—永久移动。被请求的资源已被永久移动位置；

302—请求的资源现在临时从不同的 URI 响应请求；

305—使用代理。被请求的资源必须通过指定的代理才能被访问；

307—临时跳转。被请求的资源在临时从不同的URL响应请求；

400—错误请求；

402—需要付款。该状态码是为了将来可能的需求而预留的，用于一些数字货币或者是微支付；

403—禁止访问。服务器已经理解请求，但是拒绝执行它；

404—找不到对象。请求失败，资源不存在；

406—不可接受的。请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体；

HTTP状态码（图二）

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2399a49-5279-4282-a9c0-6425b60267fe/Untitled.png)

408—请求超时；

409—冲突。由于和被请求的资源的当前状态之间存在冲突，请求无法完成；

410—遗失的。被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址；

413—响应实体太大。服务器拒绝处理当前请求，请求超过服务器所能处理和允许的最大值。

417—期望失败。在请求头 Expect 中指定的预期内容无法被服务器满足；

418—我是一个茶壶。超文本咖啡罐控制协议，但是并没有被实际的HTTP服务器实现；

420—方法失效。

422—不可处理的实体。请求格式正确，但是由于含有语义错误，无法响应；

304 是对客户端有缓存情况下服务端的一种响应。
在浏览器第一次请求某一个URL时，服务器端的返回状态会是200，内容是客户端请求的资源，同时有一个Last-Modified的属性标记此文件在服务器端最后被修改的时间。客户端第二次请求此URL时，根据HTTP协议的规定，浏览器会向服务器传送If-Modified-Since报头，询问该时间之后文件是否有被修改过。
如下两张图片，图一为浏览器无缓存的状态码，可以看出 status 全为 200。图二是浏览器中存在缓存时的状态码，可以看出全为 304。同时我们还可以比较二者页面的加载时间，时间位于最下面一行的Load Time，可以看出差距比较大，使用缓存可以节省好多时间。

原始重定向

- **301**
    
    重定向是永久重定向。它是可缓存的，并且此 URL 的任何书签都应更新为指向新 URL。
    
- **302**
    
    重定向是临时重定向。默认情况下它是不可缓存的，并且应该每次都重新请求（但您可以使用缓存标头覆盖它）。
    

对于上述两种情况，**后续请求应使用与原始请求相同的方法（POST、GET、CONNECT、PUT、DELETE 等）**，对于 GET 和 HEAD 请求以外的任何请求，客户端应提示用户在提出请求之前。

不幸的是，这是客户端有时会出错的部分，并且大多数客户端将后续请求的方法更改为 GET，而不管原始方法如何。因此，又创建了三个重定向代码：

较新的重定向

- **303**
    
    重定向与302（即临时）相同，只是后续请求现在明确更改为 GET 请求并且不需要确认。
    
- **307**
    
    重定向与302（即临时）相同，只是后续请求现在明确与原始请求相同，并且对于 GET 和 HEAD 以外的请求方法必须从用户那里获取确认。
    
- **308**
    
    重定向与301（即永久）相同，除了请求方法和正文不会更改。
    

**为什么要用RESTful结构呢？**

大家都知道"古代"网页是前端后端融在一起的，比如之前的PHP，JSP等。在之前的桌面时代问题不大，但是近年来移动互联网的发展，各种类型的Client层出不穷，RESTful可以通过一套统一的接口为 Web，iOS和Android提供服务。另外对于广大平台来说，比如Facebook platform，微博开放平台，微信公共平台等，它们不需要有显式的前端，只需要一套提供服务的接口

### **6大原则**

1）客户端 - 服务器 - 通过将用户接口问题与数据存储问题分开，我们通过简化服务器组件来提高跨多个平台的用户接口的可移植性并提高可伸缩性。

2）无状态 - 从客户端到服务器的每个请求都必须包含理解请求所需的所有信息，并且不能利用服务器上任何存储的上下文。因此，会话状态完全保留在客户端上。无状态是 REST 的一条核心原则，部分开发者在做服务接口规划时，觉得 REST 风格的服务怎么设计都感觉别扭，很有可能的一种原因是在服务端持有着比较重的状态。REST 希望服务器不要去负责维护状态，每一次从客户端发送的请求中，应包括所有的必要的上下文信息，会话信息也由客户端负责保存维护，服务端依据客户端传递的状态来执行业
务处理逻辑，驱动整个应用的状态变迁。客户端承担状态维护职责以后，会产生一些新
的问题，譬如身份认证、授权等可信问题，它们都应有针对性的解决方案（这部分内容
可参见“安全架构”的内容）。
但必须承认的现状是，目前大多数的系统都达不到这个要求，往往越复杂、越大型的系统越是如此。服务端无状态可以在分布式计算中获得非常高价值的好处，但大型系统的上下文状态数量完全可能膨胀到让客户端在每次请求时提供变得不切实际的程度，在服
务端的**内存、会话、数据库或者缓存等地方持有一定的状态**成为一种是事实上存在，并将长期存在、被广泛使用的主流的方案。

3）可缓存 - 缓存约束要求将对请求的**响应中的数据隐式或显式标记为可缓存或不可缓存**。如果响应是可缓存的，则客户端缓存有权重用该响应数据以用于以后的等效请求。

4）统一接口 - 通过将通用性的软件工程原理应用于组件接口，简化了整个系统架构，提高了交互的可见性。为了获得统一的接口，需要多个架构约束来指导组件的行为。REST由四个接口约束定义：         资源识别;

通过陈述来处理资源;

自我描述性的信息; 并且，超媒体作为应用程序状态的引擎。

5）**分层系统** - 分层系统风格允许通过约束组件行为来使体系结构由分层层组成，这样每个组件都不能“看到”超出与它们交互的直接层。

6）按需编码（可选） - REST允许通过以小程序或脚本的形式下载和执行代码来扩展客户端功能。这通过减少预先实现所需的功能数量来简化客户端。

### **问题**

**面向资源的编程思想只适合做 CRUD**

强调**抽象资源**。所谓的抽象资源是“不直接对应数据库表的资源”。比如“登录/登出”。如果你用RPC式的接口设计，这就很直接：**POST /login** 和 **POST /logout**。但是你要硬套RESTful，你就得挖空心思的想出一个抽象资源“会话”（session）。登录 = 创建会话，登出 = 销毁会话。于是你把接口设计成 **POST /sessions** 和 **DELETE /sessions**。这就很**反直觉**，且背离RESTful的设计初衷。

元数据如何返回也是个问题。比如分页查询是很常见的需求。但是当前是第几页，一共多少条记录等，这些元数据放在响应的哪儿呢？如果放在body里，有点不REST，因为REST的响应应该只包含数据；如果放在header里，则又要和客户端商定协议细节，客户端实现也变得更困难。

**REST 与 HTTP 完全绑定，不适合应用于要求高性能传输的场景中**

对于需要直接控制传输，如二 进制细节、编码形式、报文格式、连接方式等细节的场景中，REST 确实不合适，这些场 景往往存在于服务集群的内部节点之间，这也是之前曾提及的，REST 和 RPC 尽管应用 场景的确有所重合，但重合的范围有多大就是见仁见智的事情。 RESTful 和 HTTP 绑的太死，很难用在其他传输协议里，比如你很难把 REST 用在 Redis PubSub 里。相比之下，一个包含指令和数据的RPC包通过HTTP发还是通过Kafka发都没问题

**REST 不利于事务支持**

**REST 没有传输可靠性支持** 是的，并没有。在 HTTP 中你发送出去一个请求，通常会收到一个与之相对的响应，譬 如 HTTP/1.1 200 OK 或者 HTTP/1.1 404 Not Found 诸如此类的。但如果你没有收到任 何响应，那就无法确定消息到底是没有发送出去，抑或是没有从服务端返回回来，这其 中的关键差别是服务端到底是否被触发了某些处理？应对传输可靠性最简单粗暴的做法 是把消息再重发一遍。这种简单处理能够成立的前提是服务应具有幂等性

**Features**

1、每一个URI代表1种资源；

2、客户端使用GET、POST、PUT、DELETE4个表示操作方式的动词对服务端资源进行操作：GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源；

3、通过操作资源的表现形式来操作资源；

4、资源的表现形式是XML或者HTML；

5、客户端与服务端之间的交互在请求之间是无状态的，从客户端到服务端的每个请求都必须包含理解请求所必需的信息。

# pattern

单例模式在单线程环境下的两种经典实现：**饿汉式** 和**懒汉式**，但是饿汉式是[线程安全](https://so.csdn.net/so/search?q=%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8&spm=1001.2101.3001.7020)的，而懒汉式是非线程安全的。在多线程环境下，我们特别介绍了五种方式来在多线程环境下创建线程安全的单例，即分别使用**synchronized方法**、**synchronized块**、**静态内部类**、**双重检查模式** 和**ThreadLocal** 来实现懒汉式单例，并总结出实现效率高且线程安全的懒汉式单例所需要注意的事项。

- **立即加载 ：** 在类加载初始化的时候就主动创建实例；
- **延迟加载 ：** 等到真正使用的时候才去创建实例，不用时不去主动创建。
    
    在单线程环境下，单例模式根据实例化对象时机的不同，有两种经典的实现：一种是 **饿汉式单例(立即加载)**，一种是 **懒汉式单例(延迟加载)**。**饿汉式单例在单例类被加载时候，就实例化一个对象并交给自己的引用；而懒汉式单例只有在真正使用的时候才会实例化一个对象并交给自己的引用。**代码示例分别如下：
    

饿汉式单例天生就是线程安全. 在线程访问单例对象之前就已经创建好了。再加上，由于一个类在整个生命周期中只会被加载一次，因此该单例类只会创建一个实例，也就是说，线程每次都只能也必定只可以拿到这个唯一的对象.

使用双重检测同步延迟加载去创建单例的做法是一个非常优秀的做法，**其不但保证了单例，而且切实提高了程序运行效率。**对应的代码清单如下：

```
// 线程安全的懒汉式单例
public class Singleton3 {

//使用volatile关键字防止重排序，因为 new Instance()是一个非原子操作，可能创建一个不完整的实例
    private static volatile Singleton3 singleton3;

    private Singleton3() {
    }

    public static Singleton3 getSingleton3() {
// Double-Check idiom
        if (singleton3 == null) {
            synchronized (Singleton3.class) {// 1
// 只需在第一次创建实例时才同步
                if (singleton3 == null) {// 2
                    singleton3 = new Singleton3();// 3
                }
            }
        }
        return singleton3;
    }
}/* Output(完全一致):
        1104499981
        1104499981
        1104499981
        1104499981
        1104499981
        1104499981
        1104499981
        1104499981
        1104499981
        1104499981
 *///:~

```

如上述代码所示，为了在保证单例的前提下提高运行效率，我们需要对 singleton3 进行第二次检查，目的是避开过多的同步（因为这里的同步只需在第一次创建实例时才同步，一旦创建成功，以后获取实例时就不需要同步获取锁了）。这种做法无疑是优秀的，但是我们必须注意一点：　　　　**必须使用volatile关键字修饰单例引用。**

# Web

## http ****幂等性****

幂等性场景：

1：因为网络波动，引起重复请求。
案例：例如收藏（取消收藏）请求，我们请求了一次，因为网络原因，我们一直没有返回响应，用户由于没有看到被收藏了，结果再次点击收藏，而两次点击收藏导致我们后端仍处于未收藏状态，影响了幂等性。
2： 用户重复操作，导致重复扣款，重复下单等问题。
例如： 双十一，用户下单请求，提交一次后，由于网络堵塞，用户点击了刷新，导致相同订单重复请求，则会导致数据库中存在两个订单。
3：应用中使用了超时，重试机制。
Nginx重试， RPC框架重试， 业务层面重试等。
4：第三方平台接口（支付宝），异步回调。
例如： 支付宝支付完成后，支付宝会调用我们后台接口，证明支付完成，但是，由于异常，支付宝调用了两次我们后台，则导致我们后台扣款了两次，实际支付宝只扣款一次。
5： 页面刷新， 回退按钮，导致重复提交表单。
例如：学校网站问卷调查统计，再提交时，由于网络延时，或者后端反应过慢，导致用户重新刷新，重新提交表单，则导致问卷多出一份。
6：定时任务导致重复执行。

---

HTTP/接口幂等性与解决方案
[https://blog.51cto.com/u_15317888/3232610](https://blog.51cto.com/u_15317888/3232610)

一种是RESTful的，它把HTTP当成应用层协议，比较忠实地遵守了HTTP协议的各种规定；另一种是**SOA的，它并没有完全把HTTP当成应用层协议**，而是把HTTP协议作为了传输层协议，然后在HTTP之上建立了自己的应用层协议。本文所讨论的HTTP幂等性主要针对RESTful风格的，不过正如上一节所看到的那样，幂等性并不属于特定的协议，它是分布式系统的一种特性；所以，不论是SOA还是RESTful的Web API设计都应该考虑幂等性。下面将介绍HTTP GET、DELETE、PUT、POST四种主要方法的语义和幂等性。

HTTP GET方法用于获取资源，不应有副作用，所以是幂等的。比如：GET http://www.bank.com/account/123456，不会改变资源的状态，不论调用一次还是N次都没有副作用。请注意，这里强调的是一次和N次具有相同的副作用，而不是每次GET的结果相同。GET http://www.news.com/latest-news这个HTTP请求可能会每次得到不同的结果，但它本身并没有产生任何副作用，因而是满足幂等性的。

HTTP DELETE方法用于删除资源，有副作用，但它应该满足幂等性。比如：DELETE http://www.forum.com/article/4231，调用一次和N次对系统产生的副作用是相同的，即删掉id为4231的帖子；因此，调用者可以多次调用或刷新页面而不必担心引起错误。

比较容易混淆的是HTTP POST和PUT。POST和PUT的区别容易被简单地误认为“POST表示创建资源，PUT表示更新资源”；而实际上，二者均可用于创建资源，更为本质的差别是在幂等性方面。在HTTP规范中对POST和PUT是这样定义的：

> The POST method is used to request that the origin server accept the entity enclosed in the request as a new subordinate of the resource identified by the Request-URI in the Request-Line ...... If a resource has been created on the origin server, the response SHOULD be 201 (Created) and contain an entity which describes the status of the request and refers to the new resource, and a Location header.
> 

**POST所对应的URI并非创建的资源本身，而是资源的接收者。**比如：POST http://www.forum.com/articles的语义是在http://www.forum.com/articles下创建一篇帖子，HTTP响应中应包含帖子的创建状态以及帖子的URI。两次相同的POST请求会在服务器端创建两份资源，它们具有不同的URI；所以，POST方法不具备幂等性。而PUT所对应的URI是要创建或更新的资源本身。比如：PUT http://www.forum/articles/4231的语义是创建或更新ID为4231的帖子。对同一URI进行多次PUT的副作用和一次PUT是相同的；因此，PUT方法具有幂等性。

## request

Authority = Host Name + Port No

And if URL protocol is using a default port, say port 80 for http URL, then only in that case Authority = Host Name (Port No is assumed to be 80),

Whereas Host Name is either Domain Name or I.P Address

**Example:**

1. `http://www.example.com/`***Authority =*** www.example.com***Host Name =*** www.example.com

redirect是服务端根据逻辑,发送一个状态码,告诉浏览器重新去请求那个地址.所以地址栏显示的是新的URL.

2. 从数据共享来说forward:转发页面和转发到的页面可以共享request里面的数据.redirect:不能共享数据.

3. 从运用地方来说forward:一般用于用户登陆的时候,根据角色转发到相应的模块.

redirect:一般用于用户注销登陆时返回主页面和跳转到其它的网站等

4. 从效率来说forward:高.redirect:低.

                                    **scheme://host:port/path?query**

1. **A host.** The host name identifies the host that holds the resource. For example, `www.example.com`. A server provides services in the name of the host, but hosts and servers do not have a one-to-one mapping. Refer to [Host names](https://www.ibm.com/docs/en/SSGMCP_5.2.0/com.ibm.cics.ts.internet.doc/topics/dfhtl28.html#dfhtl28).
    
    Host names can also be followed by a **port number**. Refer to [Port numbers](https://www.ibm.com/docs/en/SSGMCP_5.2.0/com.ibm.cics.ts.internet.doc/topics/dfhtl2d.html#dfhtl2d). Well-known port numbers for a service are normally omitted from the URL. Most servers use the well-known port numbers for HTTP and HTTPS , so most HTTP URLs omit the port number.
    
2. **A path.** The path identifies the specific resource in the host that the web client wants to access. For example, `/software/htp/cics/index.html`.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9bc890ac-9cdf-4aed-9052-79aff67ecb71/Untitled.png)

## POST

- **GET** - 从指定的资源请求数据。
- **POST** - 向指定的资源提交要被处理的数据。
- **查询字符串（名称/值对）是在 POST 请求的 HTTP 消息主体中发送的：**
- The HTTP protocol does not specify a limit.
- The POST method allows sending far more data than the GET method, which is limited by the [URL length](https://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers) - about 2KB.
- The maximum [POST request body](https://stackoverflow.com/questions/14551194/how-are-parameters-sent-in-an-http-post-request) size is configured on the HTTP server and typically ranges from**1MB to 2GB**
- The HTTP client (browser or other user agent) can have its own limitations. Therefore, the maximum POST body request size is `min(serverMaximumSize, clientMaximumSize)`.

Here are the POST body sizes for some of the more popular HTTP servers:

- Nginx ([largest web server market share](https://news.netcraft.com/archives/2019/04/22/april-2019-web-server-survey.html) as of April 2019) - default [1MB](https://stackoverflow.com/questions/28476643/default-nginx-client-max-body-size/28476755#28476755), no practical maximum ([2**63](https://stackoverflow.com/questions/28476643/default-nginx-client-max-body-size/28476755?noredirect=1#comment98741319_28476755))
- Apache - [maximum 2GB](https://httpd.apache.org/docs/2.4/mod/core.html#limitrequestbody), no default documented
- IIS - [default 28.6MB](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/requestfiltering/requestlimits/#attributes) for the request length, 2048 bytes for the query string; maximum undocumented
- InfluxDB - [default ~25MB](https://docs.influxdata.com/influxdb/latest/administration/config/#max-body-size-25000000), maximum undocumented

## Network

安全性

设置定义了您的路由器所用的认证和加密类型，以及通过路由器网络传输的数据的隐私保护级别。无论您选取哪种设置，请务必要设置一个高安全性密码来加入网络。

- **WPA3 个人级**是目前可用于无线局域网设备的最新、最安全的协议。它适用于所有支持 Wi-Fi 6 (802.11ax) 无线局域网的设备以及某些旧款设备。
- **WPA2/WPA3 过渡级**是一种混合模式，能够将 WPA3 个人级应用于支持这种安全协议的设备，同时允许旧款设备使用 WPA2 个人级 (AES)。
- **WPA2 个人级 (AES)** 是您在无法使用上述任何更安全的模式时的适当之选。在这种情况下，还要选取 AES 作为加密或密码类型（如果可用）。

信道宽度

设置为 **20 MHz** - 适用于 2.4 GHz 频段      ****设置为**自动**或所有宽度（**20 MHz、40 MHz、80 MHz**） - 适用于 5 GHz 频段

信道宽度指定了传输数据时可用的“管道”大小。 信道越宽，速度越快，但也更容易受到干扰的影响，并且更有可能干扰其他设备。

- 在 2.4 GHz 频段中使用 20 MHz 信道有助于避免出现性能和可靠性问题，尤其是在路由器附近有其他 Wi-Fi 网络和 2.4 GHz 设备（包括蓝牙设备）时。
- 在 5 GHz 频段中使用自动或所有信道宽度可确保最佳性能以及与所有设备的兼容性。相比而言，在 5 GHz 频段下**更少发生无线干扰问题**。

## CDN

DDOS这些攻击得以实施都是由于用户web服务器的真实ip暴露出去了。下面为大家揭秘黑客查找真实ip的多种方法。真实ip隐藏的方法“CDN”。

[内容分发网络](https://cloud.tencent.com/product/cdn?from=10680)(content delivery network或content distribution network，缩写作CDN)指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。

CDN节点会在多个地点，不同的网络上摆放。这些节点之间会动态的互相传输内容，对用户的下载行为最优化，并借此减少内容供应者所需要的带宽成本，改善用户的下载速度，提高系统的稳定性。国内常见的CDN有ChinanNet Center（网宿科技）、ChinaCache（阿里云）等，国外常见的有Akamai(阿卡迈)、Limelight Networks（简称LLNW）等；如下图，国内外主流的CDN市场格局：

CDN这个技术其实说起来并不复杂，最初的核心理念，就是使用路由算法**将内容缓存在终端用户附近**。vs.镜像服务器 是源内容服务器的完整复制。而CDN，是部分内容的缓存，智能程度更高。

确切地说，**CDN=更智能的镜像+缓存+流量导流来加速访问。**

①、当用户点击APP上的内容，APP会根据URL地址去**本地DNS**（域名解析系统）寻求IP地址解析。

②、本地DNS系统会将域名的解析权交给**CDN专用DNS服务器**。

③、CDN专用DNS服务器，将CDN的全局负载均衡设备IP地址返回用户。

④、用户向**CDN的负载均衡设备**发起内容URL访问请求。

⑤、CDN负载均衡设备根据用户IP地址，以及用户请求的内容URL，选择一台用户所属区域的**缓存服务器**。

⑥、负载均衡设备告诉用户这台缓存服务器的IP地址，让用户向所选择的缓存服务器发起请求。

⑦、用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送到用户终端。

⑧、如果这台缓存服务器上并没有用户想要的内容，那么这台缓存服务器就要网站的**源服务器**请求内容。

⑨、源服务器返回内容给缓存服务器，缓存服务器发给用户，并根据用户自定义的缓存策略，判断要不要把内容缓存到缓存服务器上。

### 负载均衡器功能[[编辑](https://en.wikipedia.org/w/index.php?title=Load_balancing_(computing)&action=edit&section=33)]

硬件和软件负载平衡器可能具有多种特殊功能。负载均衡器的基本特征是能够根据调度算法将传入请求分布在集群中的多个后端服务器上。以下大多数功能是特定于供应商的：

**不对称负载**可以手动分配一个比率，以使某些后端服务器比其他服务器获得更大的工作负载份额。这有时被用作一种粗略的方法来说明某些服务器的容量比其他服务器多，并且可能并不总是按预期工作。**优先激活**当可用服务器的数量下降到一定数量以下或负载过高时，可以使备用服务器联机。

**[TLS 卸载和加速](https://en.wikipedia.org/wiki/TLS_acceleration)**TLS（或其前身 SSL）加速是一种将加密协议计算卸载到专用硬件上的技术。根据工作负载，处理[TLS的加密和身份验证要求](https://en.wikipedia.org/wiki/Transport_Layer_Security)request 可以成为 Web Server 的 CPU 需求的主要部分；随着需求的增加，用户会看到响应时间变慢，因为 TLS 开销分布在 Web 服务器之间。为了消除对 Web 服务器的这种需求，平衡器可以终止 TLS 连接，将 HTTPS 请求作为 HTTP 请求传递给 Web 服务器。如果平衡器本身没有过载，这不会显着降低最终用户感知的性能。这种方法的缺点是所有 TLS 处理都集中在单个设备（平衡器）上，这可能成为新的瓶颈。一些负载平衡器设备包括用于处理 TLS 的专用硬件。与其升级负载均衡器，后者是相当昂贵的专用硬件，放弃 TLS 卸载并添加一些 Web 服务器可能更便宜。还，一些服务器供应商（例如 Oracle/Sun）现在将加密加速硬件集成到他们的 CPU 中，例如 T2000。F5 Networks 在其本地流量管理器 (LTM) 中集成了专用的 TLS 加速硬件卡，用于加密和解密 TLS 流量。平衡器中 TLS 卸载的一个明显好处是它能够根据 HTTPS 请求中的数据进行平衡或内容切换。

**[分布式拒绝服务](https://en.wikipedia.org/wiki/Distributed_denial_of_service)(DDoS) 攻击防护**负载均衡器可以提供诸如[SYN cookie](https://en.wikipedia.org/wiki/SYN_cookies)和延迟绑定（后端服务器在完成 TCP 握手之前不会看到客户端）等功能，以减轻[SYN 泛洪](https://en.wikipedia.org/wiki/SYN_flood)攻击，并且通常将工作从服务器卸载到更高效的平台。**[HTTP 压缩](https://en.wikipedia.org/wiki/HTTP_compression)**HTTP 压缩通过利用所有现代 Web 浏览器中可用的 gzip 压缩来减少为 HTTP 对象传输的数据量。响应越大，客户端越远，此功能就越能提高响应时间。权衡是此功能对负载平衡器提出了额外的 CPU 需求，并且可以由 Web 服务器来完成。

**TCP 卸载**不同的供应商对此使用不同的术语，但其想法是通常来自每个客户端的每个 HTTP 请求都是不同的 TCP 连接。此功能利用 HTTP/1.1 将来自多个客户端的多个 HTTP 请求合并到一个到后端服务器的单个 TCP 套接字中。

前端工程化的完成离不开 Node.js

# **JS**

**JavaScript** (often shortened to **JS**) is a lightweight, interpreted, 基于原型 object-oriented language with [first-class functions](https://en.wikipedia.org/wiki/First-class_function), and is best known as the scripting language for Web pages, but it's [used in many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) as well. It is a [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming), multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.                  JavaScript 对象是变量的容器。

在基于**类**的[面向对象语言](https://www.zhihu.com/search?q=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2233658346%22%7D)中（比如Java和C++）， 是构建在**类(class)**和**实例(instance)**上的。其中**类**定义了所有用于具有某一特征对象的属性。**类**是抽象的事物， 而不是其所描述的全部对象中的任何特定的个体。另一方面， 一个**实例**是一个**类**的实例化，是其中的一个成员。

**基于原型的面向对象**在基于**原型**的语言中（如JavaScript）并不存在这种区别：**它只有对象！**不论是构造函数(constructor)，实例(instance)，原型(prototype)本身都是对象。基于原型的语言具有所谓的原型对象的概念，新对象可以从中获得原始的属性。

## 闭包closure

是一个函数以及其捆绑的周边环境状态（**lexical environment**，**词法环境**）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

通常你使用只有一个方法的对象的地方，都可以使用闭包。

在 Web 中，你想要这样做的情况特别常见。大部分我们所写的 JavaScript 代码都是基于事件的 — 定义某种行为，然后将其添加到用户触发的事件之上（比如点击或者按键）。我们的代码通常作为回调：为响应事件而执行的函数。

## 计数器困境

设想下如果你想统计一些数值，且该计数器在所有函数中都是可用的。

你可以使用全局变量，函数设置计数器递增：

如果我在函数内声明计数器，如果没有调用函数将无法修改计数器的值：

```perl
function add() {
    var counter = 0;
    return counter += 1;
}
add();
add();
add();
 
// 本意是想输出 3, 但事与愿违，输出的都是 1 !
```

****防抖和节流****

是优化高频率执行代码的一种手段

如：浏览器的 `resize`、`scroll`、`keypress`、`mousemove` 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能

为了优化体验，需要对这类事件进行调用次数的限制，对此我们就可以采用 **防抖（debounce）** 和 **节流（throttle）** 的方式来减少调用频率

- 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
- 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时

一个经典的比喻:

想象每天上班大厦底下的电梯。把电梯完成一次运送，类比为一次函数的执行和响应

假设电梯有两种运行策略 `debounce` 和 `throttle`，超时设定为15秒，不考虑容量限制

电梯第一个人进来后，15秒后准时运送一次，这是节流

电梯第一个人进来后，等待15秒。如果过程中又有人进来，15秒等待重新计时，直到15秒后开始运送，这是防抖

### **节流**

完成节流可以使用时间戳与定时器的写法  使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行

可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下

`function throttled(fn, delay) {
    let timer = null
    let starttime = Date.now()
    return function () {
        let curTime = Date.now() // 当前时间
        let remaining = delay - (curTime - starttime)  //从上一次到现在，还剩下多少多余时间
        let context = this
        let args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
            fn.apply(context, args)
            starttime = Date.now()
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9552c9b-777c-450b-9626-98509e1bd1eb/Untitled.png)

防抖在连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小`resize`。只需窗口调整完成后，计算窗口大小。防止重复渲染。

节流在间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 搜索框，搜索联想功能

## React

React有两个主要的特点：

1. 简单
简单的表述任意**时间点**你的应用应该是什么样子的，React将会自动的管理UI界面更新当数据发生变化的时候。
2. 声明式
在数据发生变化的时候，React从概念上讲与点击了F5一样，实际上它仅仅是更新了变化的一部分而已。
React是关于**构造可重用组件**的，实际上，使用React你做的仅仅是**构建组件。通过封装**，使得组件代码**复用**、测试以及关注点分离更加容易。

`ReactElement`通过`createElement`创建，调用该方法需要传入三个参数：

- type
- config
- children

`type`指代这个`ReactElement`的类型

- 字符串比如`div`，`p`代表原生DOM，称为`HostComponent`
- Class类型是我们继承自`Component`或者`PureComponent`的组件，称为`ClassComponent`
- 方法就是`functional Component`
- 原生提供的`Fragment`、`AsyncMode`等是Symbol，会被特殊处理
- TODO: 是否有其他的

**Component&props**

**React核心思想是组件化，其中 组件 通过属性(props) 和 状态(state)传递数据。**

props 是组件对外的接口，state 是组件对内的接口。组件内可以引用其他组件，组件之间的引用形成了一个树状结构（组件树），如果下层组件需要使用上层组件的数据或方法，上层组件就可以通过下层组件的props属性进行传递，因此props是组件对外的接口。组件除了使用上层组件传递的数据外，自身也可能需要维护管理数据，这就是组件对内的接口state。根据对外接口props 和对内接口state，组件计算出对应界面的UI。

主要区别：

State是可变的，是一组用于反映组件UI变化的状态集合；
而Props对于使用它的组件来说，是只读的，要想修改Props，只能通过该组件的父组件修改。
在组件状态上移的场景中，父组件正是通过子组件的Props, 传递给子组件其所需要的状态。

定义组件最简单的方式就是编写 JavaScript 函数：

`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。

你同时还可以使用 [ES6 的 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 来定义组件：

`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`

const compont = () = > { }

1. `React`组件被**声明一次**
2. 但`组件`可以作为`JSX`中的`React元素`被**多次使用**
3. 当`元素`被使用时，它就成为该组件的**一个实例**，挂载在React的组件树中

JS中       forEach()方法没有返回值，而map()方法有返回值。
二：forEach遍历通常都是直接引入当前遍历数组的内存地址，生成的数组的值发生变化，当前遍历的数组对应的值也会发生变化。
三：map遍历的后的数组通常都是生成一个新的数组，新的数组的值发生变化，当前遍历的数组值不会变化。

React中只有map

**Virtual DOM 虚拟DOM**    
传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是`Virtual DOM`,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。

为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。

在DOM树上的节点被称为**元素**，在这里则不同，Virtual DOM上称为component。Virtual DOM的节点就是一个完整抽象的组件，它是由components组成。

Component必须大写, ()里为html 标记语言

假设你的 HTML 文件某处有一个 `<div>`：

`<div id="root"></div>`

我们将其称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。

仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 `[ReactDOM.createRoot()](https://zh-hans.reactjs.org/docs/react-dom-client.html#createroot)`：

**事件处理**

例如，传统的 HTML：

`<button onclick="activateLasers()">
  Activate Lasers
</button>`

在 React 中略微不同：

`<button onClick={activateLasers}>  Activate Lasers
</button>`

在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。

`e` 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/)来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。React 事件与原生事件不完全相同。如果想了解更多，请查看 `[SyntheticEvent](https://zh-hans.reactjs.org/docs/events.html)` 参考指南。

使用 React 时，你一般不需要使用 `addEventListener` 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。

当你使用 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 `Toggle` 组件会渲染一个让用户切换开关状态的按钮：

`**useCallback`的作用其实是用来避免子组件不必要的reRender：**

首先，假如我们不使用useCallback，在父组件中创建了一个名为handleClick的事件处理函数，根据需求我们需要把这个handleClick传给子组件，当父组件中的一些state变化后（这些state跟子组件没有关系），父组件会reRender，然后会重新创建名为handleClick函数实例，并传给子组件，这时即使用React.memo把子组件包裹起来，子组件也会重新渲染，因为props已经变化了，但这个渲染是无意义的

如何优化呢？这时候就可以用useCallback了，我们用useCallback把函数包起来之后，在父组件中只有当deps变化的时候，才会创建新的handleClick实例，子组件才会跟着reRender（注意，必须要用React.memo把子组件包起来才有用，否则子组件还是会reRender。React.memo是类似于class组件中的Pure.Component的作用）

对于这种**deps不是经常变化的情况，我们用useCallback和React.memo的方式可以很好地避免子组件无效的reRender**。但其实社区中对这个useCallback的使用也有争议，比如子组件中只是渲染了几个div，没有其他的大量计算，而浏览器去重新渲染几个dom的性能损耗其实也是非常小的，我们花了这么大的劲，使用了useCallback和React.memo，换来的收益很小，所以一些人认为就不用useCallback，就让浏览器去重新渲染好了。至于到底用不用，此处不深入讨论，我的建议是当子组件中的dom数量很多，或者有一些大量的计算操作，是可以进行这样的优化的。

### JSX

`const element = <h1>Hello, world!</h1>;`

这个有趣的标签语法既不是字符串也不是 HTML。

它被称为 JSX，它是 JavaScript 的语法扩展。我们建议将它与 React 一起使用来描述 UI 应该是什么样子。JSX 可能会让您想起模板语言，但它具有 JavaScript 的全部功能。

JSX 产生 React “元素”。[我们将在下一节](https://reactjs.org/docs/rendering-elements.html)探索将它们渲染到 DOM 。下面，您可以找到入门所需的 JSX 基础知识。

By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.使用大括号，来在属性值中插入一个 JavaScript 表达式****

React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)
。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 [XS](https://en.wikipedia.org/wiki/Cross-site_scripting)

### **Hook**

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

是 React 16.8 的新增特性。它可以让你在**不编写 class 的情况下使用 state 以及其他的 React 特性。**

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

2、为什么要使用 hooks
难以理解的 class 、组件中必须去理解 javascript 与 this 的工作方式、需要绑定事件处理器、纯函数组件与 class 组件的差异存在分歧、甚至需要区分两种组件的使用场景；Hook 可以使你在非 class 的情况下可以使用更多的 React 特性。

在组件之间复用状态逻辑很难、大型组件很难拆分和重构，也很难测试。**Hook 使你在无需修改组件结构的情况下复用状态逻辑。没有 class 继承、没有 this、没有生命周期、代码更加简洁、这就是使用 hooks 的意义**

React 提供了一些内置的 Hooks，比如 useState。您还可以创建自己的 Hooks 以在不同组件之间重用有状态行为。

Usestate hook等价于写class & render

**向 class 组件中添加局部的 state,state是异步的**

当您调用 时`setState()`，React 会将您提供的对象合并到当前状态。

```
const [state, setState] = useState(initialState);
```

setState返回一个 state，以及更新 state 的函数。在初始渲染期间，返回的状态 (`state`) 与传入的第一个参数 (`initialState`) 值相同。

`setState` 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入[队列](https://so.csdn.net/so/search?q=%E9%98%9F%E5%88%97&spm=1001.2101.3001.7020)。Or函数式更新

**useRef 与 useState区别**

1与状态不同，即使在组件重新渲染之后，存储在引用或 ref 中的数据或值仍保持不变。因此，**引用不会影响组件渲染，但状态会影响。**

2useState 返回 2 个属性或一个数组。一个是值或状态，另一个是更新状态的函数。相反，useRef用来储存persitent value 只返回一个值，即实际存储的数据。

3当参考值改变时，它会被更新而不需要刷新或重新渲染。但是在 useState 中，组件必须再次渲染以更新状态或其值。

何时使用 Refs 和 States

Refs 在获取用户输入、DOM 元素属性和存储不断更新的值时很有用。但是，如果您在组件状态中存储组件相关信息或use methods in components states 是最好的选择。

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。当你在定时器中操作 state 的时候，而 setState 更新就是同步的。

**useEffect是什么？**

副作用钩子：用于处理组件中的副作用，用来取代生命周期函数。the function passed to `useEffect`fires **after** layout and paint, during a deferred event. This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, because most types of work shouldn’t block the browser from updating the screen.

```
useEffect(
  () => {
    //func
  },
  [props.source],
);
```

当props.source变动时 执行 //func

### Lifecycle

Component 组件的生命周期**可分成三个状态：**
 **Mounting(挂载)：已插入真实DOM**. **Updating(更新)：正在被重新渲染**
 **Unmounting(卸载)：已移出真实DOM**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5b07601-37a4-4929-8939-6be7a2ef3977/Untitled.png)

index.js为入口               `ReactDOM.render(`

函数式组件

**`export`**声明用于从 JavaScript 模块中导出值。然后可以使用`[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)`声明或[动态导入将](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)导出的值导入其他程序。导入绑定的值会在导出它的模块中发生变化——当模块更新它导出的绑定的值时，更新将在其导入值中可见。

## Typescript

TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

Deno可以运行.ts ,or npm install tsc to compile ts into js, then run in node ; or webpack

tsconfig.json

动态编译 type inference不run难以发现错误, 传入参数缺失默认undefine

unlesss                                   `a: number` **类型限定**

### 语法

{ } 大括号，表示定义一个对象，大部分情况下要有成对的属性和值，或是函数

**[ ]中括号，表示一个数组，也可以理解为一个数组对象**

`data? : {}[];  *// 表示data这个数组中的每一个元素是对象，且data缺省*`

**`?:`**
 is a [ternary operato](https://en.wikipedia.org/wiki/Ternary_operator)r that is part of the syntax for basic [conditional expressions](https://en.wikipedia.org/wiki/Conditional_(programming)) in several [programming languages](https://en.wikipedia.org/wiki/Programming_language).

? 作用

**成员**

`// 这里的？表示这个name属性有可能不存在
class A {
  name?: string
}

interface B {
  name?: string
}`

: colon配合 label 属性使用，表示是否显示 label 后面的冒号

### **安全链式调用**

`// 这里 Error对象定义的stack是可选参数，如果这样写的话编译器会提示
// 出错 TS2532: Object is possibly 'undefined'.
return new Error().stack.split('\n');

// 我们可以添加?操作符，当stack属性存在时，调用 stack.split。若stack不存在，则返回空
return new Error().stack?.split('\n');`

组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

[泛型](https://www.tslang.cn/docs/handbook/generics.html)**即是类型的形参**

**接口和别名的区别**

1. 都可以用来自定义类型
2. 类型别名支持联合和交叉类型定义
3. 别名不支持重复命名，接口可以

### umi

可插拔的企业级 React 应用程序框架。 “umi 是一个基于路由的框架，支持 next.js 式的常规路由和各种高级路由功能，比如路由级别的按需加载

**Ant design**

Ant Design System 是企业级 UI 设计语言和 React UI 库的开源代码。它带有一组高质量的 React 组件，具有主题定制能力

• The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

### Protable

ProTable 在 antd 的 Table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 antd Table 不同的 api。

### **request**

`request` 是 ProTable 最重要的 API，`request` 会接收一个对象。对象中必须要有 `data` 和 `success`，如果需要手动分页 `total` 也是必需的。`request` 会接管 `loading` 的设置，同时在查询表单查询和 `params` 参数发生修改时重新执行。同时 查询表单的值和 `params` 参数也会带入。

iauth result success不符合param对successs的要求

## ES6

ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现。

新增:1.类 2.模块化      

在ES6中模块作为重要的组成部分被添加进来。模块的功能主要由 export 和 import 组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口，通过 import 来引用其它模块提供的接口。同时还为模块创造了命名空间，防止函数的命名冲突。

**3.箭头函数**

=>不只是关键字 function 的简写，它还带来了其它好处。箭头函数与包围它的代码**共享同一个 this,**能帮你很好的解决this的指向问题。比如 var self = this;或 var that =this这种引用外围this的模式。但借助 =>，就不需要这种模式了。`(a,b) => a+b` 相当于function(a,b) {a+b;}

```
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
//相当于：(param1, param2, …, paramN) =>{ return expression; }

//加括号的函数体返回对象字面量表达式：
params => ({foo: bar})
```

由于JavaScript函数对`this`绑定的错误处理，下面的例子无法得到预期结果：

```
var obj = {
    birth: 1990,
    getAge:function () {
var b =this.birth;// 1990var fn =function () {
return new Date().getFullYear() -this.birth;// this指向window或undefined
        };
return fn();
    }
};

```

现在，箭头函数完全修复了`this`的指向，`this`总是指向词法作用域，也就是外层调用者`obj`：

4.`使用模板字符串
var name = `Your name is ${first} ${last}.``

在 ES6 中通过 `${}`就可以完成字符串的拼接，只需要将变量放在大括号之中。

5.解构赋值

定义：ES6允许按照一定模式，从[数组](https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84&spm=1001.2101.3001.7020)和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。解构的语法：

**const {dispatch} = this.props;**

**这段代码你可以认为是这样：**

**const dispatch = this.props.dispatch;**

7.Promise

Promise 是异步编程的一种解决方案，比传统的解决方案 callback 更加的优雅。它最早由社区提出和实现的，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。一个 Promise 只能成功或失败一次，如果一个 Promise 成功或失败并且您稍后添加一个成功/失败回调，则将调用正确的回调

A`[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)`是表示异步操作最终完成或失败的对象。由于大多数人都是已经创建的 Promise 的消费者

Async 函数会 返回一个已完成的 [promise](https://so.csdn.net/so/search?q=promise&spm=1001.2101.3001.7020) 对象，实际在使用的时候会和await操作符配合使用，在介绍await之前，我们先看看 async 函数本身有哪些特点。

8.let 与 const

在之前 JS 是没有块级作用域的，const与 let 填补了这方便的空白，const与 let 都是块级作用域。

在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 ？

`const`定义常量与使用`let` 定义的变量相似：

- 二者都是块级作用域
- 都不能和它所在作用域内的其他变量或函数拥有相同的名称

两者还有以下两点区别：

- `const`声明的常量必须初始化，而`let`声明的变量不用
- const 定义常量的值不能通过再赋值修改，也不能再次声明。而 let 定义的变量值可以修改。

const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的对象或者数组，其实是可变的。下面的代码并不会报错：

```perl
// 创建常量对象
const car = {type:"Fiat", model:"500", color:"white"};
// 修改属性:
car.color = "red";
```

### callback

[客户端 JavaScript](https://link.zhihu.com/?target=https%3A//dzone.com/articles/full-stack-development-from-client-side-javascript) 在浏览器中运行，并且浏览器的主进程是单线程[事件循环](https://link.zhihu.com/?target=https%3A//blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)。如果我们尝试在单线程事件循环中执行长时间运行的操作，则会阻止该过程。从技术上讲这是不好的，因为过程在等待操作完成时会停止处理其他事件。

例如，`alert` 语句被视为浏览器中 javascript 中的阻止代码之一。如果运行 alert，则在关闭 alert 对话框窗口之前，你将无法在浏览器中进行任何交互。为了防止阻塞长时间运行的操作，我们使用了回调。

JavaScript 被认为是单线程脚本语言。单线程是指 JavaScript 一次执行一个代码块。当 JavaScript 忙于执行一个块时，它不可能移到下一个块。

换句话说，我们可以认为 JavaScript 代码本质上总是阻塞的。但是这种阻塞性使我们无法在某些情况下编写代码，因为在这些情况下我们没有办法在执行某些特定任务后立即得到结果。

我谈论的任务包括以下情况：

- 通过对某些端点进行 API 调用来获取数据。
- 通过发送网络请求从远程服务器获取一些资源（例如，文本文件、图像文件、二进制文件等）。

**为了处理这些情况，必须编写异步代码，而回调函数是处理这些情况的一种方法。所以从本质上上说，回调函数是异步的。**

不用回调不行么，可以啊，可以一直傻等，这也符合同步的原则。代码可读性好，就是性能搓。就是不人性啊，等的捉急啊，加上JS单线程的设计，你这样是要操作一个IO其他啥都不能干了，那不玩死人。

于是有了回调，在JS中，回调最大的好处是 调用者和回调者分开了，刚好实现这个异步事件机制

# TEST

**单元测试**是针对软件设计中的最小单位-程序模块，进行正确性检查的测试工作。 单元在软件代码中指一个函数或一个类，在图形化的软件中，单元一般指一个窗口，一个菜单。

当软件项目中相关单元都开发完成并完成单元测试后只能确保每个独立单元没有问题,  但多个单元整合成完整功能时, 需要再次进行质量验证。这个步骤就是**集成测试**。

**集成测试**又叫组装测试，通常在单元测试的基础上，将所有程序模块进行有序的、递增的测试。重点测试不同模块的接口部分。

无论单元测试还是集成测试，都是根据不同的测试阶段划分的。一个项目首先要进行的就是单元测试，单元测试完成后进行**集成测试**。 **集成测试**完成后还有系统测试和验收测试等等才能完成软件项目的最终验收和交付。

![https://picx.zhimg.com/80/v2-a2ad9d01f870da1f35d15b1cb8b34754_1440w.jpg?source=1940ef5c](https://picx.zhimg.com/80/v2-a2ad9d01f870da1f35d15b1cb8b34754_1440w.jpg?source=1940ef5c)

在具体的测试执行过程中又分为是否查看源代码的测试方式， 不查看源代码的测试方式为**黑盒测试**，查看源代码的测试方式为**白盒测试**。

黑盒测试是指测试的时候完全不考虑程序内部结构和内部特性，注重于测试软件的功能需求，只关心软件的输入数据和 输出数据。

# DB

字段 一个成员，它表示与对象或类关联的变量。 在数据库中，大多数时，**表的“列”称为“字段” ，每个字段包含某一专题的信息**
。 就像“通讯录”数据库中，“姓名”、“联系电话”这些都是表中所有行共有的属性，所以把这些列称为“姓名”字段和“联系电话”字段。

## 数据仓库

数据仓库的两个重要的概念是：

- 进入仓库的数据不可变
- 记录数据的变化历史

如何理解呢？不可变，意味着进到仓库的数据就类似归档了。原则上，不能对仓库里面的数据进行修改；如果随意的对仓库里面的数据进行修改，这个“仓库”就和交易系统没区别了，无法起到正确反映业务过程的作用。此外，适合于数据仓库的存储服务，如早年Oracle和DB2都有针对数据仓库的Data Warehouse产品，以及Hadoop体系的一系列组件，都是针对“批量插入，无更改或少量更改”而专门设计的，所以才能达到查询效率的最优化。也因此产生了OLTP系统和OLAP系统的两大模式。

因此，“数据不可变”这是一个基准原则。

**纯增量**

类似交易流水、交易日志、登记簿之类的数据，数据发生的时候，就有明确的时间戳，并且数据发生之后不会改变的，比如上面说的账户交易流水表，记录产生之后不可变更。可以直接根据时间戳把当天的数据挑选出来，这批数据直接插入全量表，每日追加数据即可。

一般会单独增加一个日期字段表示数据什么时候进来的。

**对比增量**

类似账户表、用户信息表之类主数据信息表或者状态表，在交易系统中往往只会记录最新状态而不会记录变化时间。当然，也有系统保留操作日志，记录变更情况。

对于前者，需要我们自己把最新数据和仓库里的数据做一个对比，找出被变更过的数据。

当一个数据需要存储多份时，会出现一致性问题，所以就需要进行同步，同步分为两种：增量和全量。

不管哪种方式，永远要切记的是：

`不要对仓库里的表做更新（update）操作！`复制

空间和时间的对比是软件届是永恒的矛盾话题。在这里也是一样。

全量
简单来说，就是在一定的周期中，把当前系统在周期时间内所有数据复制到目标表/系统这样的同步方式就叫做—>全量

增量
增量同步的前提是全量，然后再更具规则增量同步；

增量的基础是全量，就是你要使用某种方式先把全量数据拷贝过来，然后再采用增量方式同步更新。

增量的话，就是指抓取某个时刻（更新时间）或者检查点（checkpoint）以后的数据来同步，不是无规律的全量同步。这里引入一个关键性的前提：副本一端要记录或者知道（通过查询更新日志或者订阅更新）哪些更新了。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a0e412f-8cc9-445c-896d-a89ee8affda7/Untitled.png)

两个系统之间需要同步数据，同步的方法可以分为全量和增量两种形式。多年的经验告诉我，能用全量就别用增量。增量有三个问题

1.数据提供方，很难制作增量包，事无巨细都要记录，稍微记错就全完了

2.数据接收方，理解并且实施增量包的逻辑比较复杂

3.中间过程一旦出了问题，很难定位

# Elasticsearch

是一个**实时**的**分布式存储、搜索、分析**的引擎。

Relational DB ‐> Databases ‐> Tables ‐> Rows ‐> Columns

Elasticsearch ‐> Indices ‐> Types ‐> Documents ‐> Fields

为什么要使用Elasticsearch呢？我们在日常开发中，**数据库**也能做到（实时、存储、搜索、分析）。

相对于数据库，Elasticsearch的强大之处就是可以**模糊查询**。

有的同学可能就会说：我数据库怎么就不能模糊查询了？？我反手就给你写一个SQL：

`select * from user where name like '%公主号Java3y%'`

这不就可以把**公主号Java3y**相关的内容搜索出来了吗？

的确，这样做的确可以。但是要明白的是：`name like %Java3y%`这类的查询是不走**索引**的，不走索引意味着：只要你的数据库的量很大（1亿条），你的查询肯定会是**秒**级别的

Mysql

- **INNER JOIN**：如果表中有至少一个匹配，则返回行
- **LEFT JOIN**：即使右表中没有匹配，也从左表返回所有的行
- **RIGHT JOIN**：即使左表中没有匹配，也从右表返回所有的行
- **FULL JOIN**：只要其中一个表中存在匹配，则返回行

Elasticsearch的数据结构是怎么样的呢？看下面的图：

![https://pic4.zhimg.com/80/v2-ada6a56e22eaa7541552527f64e59e17_1440w.jpg](https://pic4.zhimg.com/80/v2-ada6a56e22eaa7541552527f64e59e17_1440w.jpg)

我们输入一段文字，Elasticsearch会根据分词器对我们的那段文字进行**分词**（也就是图上所看到的Ada/Allen/Sara..)，这些分词汇总起来我们叫做`Term Dictionary`，而我们需要通过分词找到对应的记录，这些文档ID保存在`PostingList`

在`Term Dictionary`中的词由于是非常非常多的，所以我们会为其进行**排序**，等要查找的时候就可以通过**二分**来查，不需要遍历整个`Term Dictionary`

由于`Term Dictionary`的词实在太多了，不可能把`Term Dictionary`所有的词都放在内存中，于是Elasticsearch还抽了一层叫做`Term Index`，这层只存储 部分 **词的前缀**，`Term Index`会存在内存中（检索会特别快）

`Term Index`在内存中是以**FST**（Finite State Transducer)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3217d73a-df51-4510-bffc-2033afa24e22/Untitled.png)

Bitmap

Examples of bitmap graphic formats include **GIF, JPEG, PNG, TIFF, XBM, BMP, and PCX as well as bitmap (i.e., screen) fonts**
. The image displayed on a computer monitor is also a bitmap, as are the outputs of printers, scanners, and similar devices. They are created using paint programs like Adobe Photoshop.

**Index**：Elasticsearch的Index相当于数据库的Table

**Type**：这个在新的Elasticsearch版本已经废除（在以前的Elasticsearch版本，一个Index下支持多个Type--有点类似于消息队列一个topic下多个group的概念）

**Document**：Document相当于数据库的一行记录

**Field**：相当于数据库的Column的概念

**Mapping**：相当于数据库的Schema的概念

**DSL**：相当于数据库的SQL（给我们读取Elasticsearch数据的API）

一个Index的数据我们可以分发到不同的Node上进行存储，这个操作就叫做**[分片](https://www.zhihu.com/search?q=%E5%88%86%E7%89%87&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22981341195%22%7D)**。

比如现在我集群里边有4个节点，我现在有一个Index，想将这个Index在4个节点上存储，那我们可以设置为4个分片。这4个分片的数据**合起来**就是Index的数据

数据写入的时候是**写到主分片**，副本分片会**复制**主分片的数据，读取的时候**主分片和副本分片都可以读**。

> Index需要分为多少个分片和副本分片都是可以通过配置设置的
> 

### **监控**

Elasticsearch 经常以多节点集群的方式部署。有多种 API 让你可以管理和监控集群本身，而不用和集群里存储的数据打交道。

****使用 Docker 启动单节点集群****

如果您在 Docker 容器中启动单节点 Elasticsearch 集群，则会自动为您启用和配置安全性。首次启动 Elasticsearch 时，会自动进行以下安全配置：

- 
    
    为传输层和 HTTP 层生成 [证书和密钥。](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html#elasticsearch-security-certificates)
    
- 传输层安全 (TLS) 配置设置被写入 `elasticsearch.yml`
- 为`elastic`用户生成密码。
- 为 Kibana 生成一个注册令牌。

然后您可以[启动 Kibana](https://www.elastic.co/guide/en/kibana/8.3/docker.html)并输入有效期为 30 分钟的注册令牌。此令牌自动应用您的 Elasticsearch 集群中的安全设置，通过 `kibana_system`用户向 Elasticsearch 进行身份验证，并将安全配置写入`kibana.yml`.

# Git

[Untitled](https://www.notion.so/8e58d4936d1f4d02a16a70b131fbed8f)

HEAD
HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交。 这表示 HEAD 将是下一次提交的父结点。 通常，可以把 HEAD 看做你的上一次提交的快照。可以简单理解为： HEAD 指向分支（branch），分支指向提交。

Index
Index（索引，或暂存区）是你预期的下一次提交。这就是当你运行 git commit 时 Git 看起来的样子。Git 将上一次检出到工作目录中的所有文件填充到 Index，之后你会将其中一些文件替换为新版本，接着通过 git commit 将它们转换为树来用作新提交。

工作目录
另外两棵树以一种高效但并不直观的方式，将它们的内容存储在 .git 文件夹中。工作目录会将它们解包为实际的文件以便编辑。 你可以把工作目录当做 “沙盒”，在你将修改提交到暂存区并记录到历史之前，可以随意更改。

**Pull**

- `merge`操作会生成一个新的节点，之前的提交分开显示。而`rebase`操作不会生成新的节点，是将两个分支融合成一个线性的提交。
- 解决冲突时。merge操作遇到冲突的时候，当前merge不能继续进行下去。手动修改冲突内容后，add 修改，commit就可以了。而`rebase`操作的话，会中断rebase,同时会提示去解决冲突。解决冲突后,将修改add后执行`git rebase –continue`继续操作，或者`git rebase –skip`忽略冲突。
- `git pull`和`git pull --rebase`区别：`git pull`做了两个操作分别是”获取”和”合并”。所以加了rebase就是以rebase的方式进行合并分支，默认为merge。

**总结**：选择 merge 还是 rebase？

- merge 是一个合并操作，会将两个分支的修改合并在一起，默认操作的情况下会提交合并中修改的内容
- merge 的提交历史忠实地记录了实际发生过什么，关注点在真实的提交历史上面
- rebase 并没有进行合并操作，只是提取了当前分支的修改，将其复制在了目标分支的最新提交后面
- rebase 的提交历史反映了项目过程中发生了什么，关注点在开发过程上面

merge和rebase都不能避免conflict，实际区别是对待conflict的方式，merge是合并过来解决冲突，并不改变分支拉出的位置，并生成一个merge commit。而rebase相当于将分支2中的提交cherry-pick到主分支上解决冲突，不会生成多余的commit，但是丢失了分支拉出的位置信息。无论哪种方式最终的结果一定是一样的，但是git历史不一样，对于master分支，merge的历史有两条线最终通过merge commit汇总，而rebase的历史只有一条线比较干净。

从 master 分支 checkout 出几个本地 feature 分支，你或者你的团队在协同开发某个 feature-a 时，可能别人已把 feature-b 的代码 merge 回 master 了，所以应该及时将 master 的改动 rebase 到你的本地分支，顺便 fix conflicts。即：

`$ git switch feature-a
$ git rebase master
fix [conflicts](https://www.zhihu.com/search?q=conflicts&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1990894567%7D)...
$ git rebase --continue`

并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？

幸好，Git还提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作

- 当您想记录工作目录和索引的当前状态，但又想回到干净的工作目录时。
- 这会保存您的本地修改并恢复工作目录以匹配 HEAD 提交。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/decda594-73c9-4dad-b21f-c38079a9d62f/Untitled.png)

默认情况下，用户的 SSH 密钥存储在其 `~/.ssh` 目录下。 进入该目录并列出其中内容，你便可以快速确认自己是否已拥有密钥：

我们需要寻找一对以 `id_dsa` 或 `id_rsa` 命名的文件，其中一个带有 `.pub` 扩展名。 `.pub` 文件是你的公钥，另一个则是与之对应的私钥。 如果找不到这样的文件（或者根本没有 `.ssh` 目录），你可以通过运行 `ssh-keygen` 程序来创建它们。 在 Linux/macOS 系统中，`ssh-keygen` 随 SSH 软件包提供；在 Windows 上，该程序包含于 MSysGit 软件

首先 `ssh-keygen` 会确认密钥的存储位置（默认是 `.ssh/id_rsa`），然后它会要求你输入两次密钥口令。 如果你不想在使用密钥时输入口令，将其留空即可。 然而，如果你使用了密码，那么请确保添加了 `-o` 选项，它会以比默认格式更能抗暴力破解的格式保存私钥。 你也可以用 `ssh-agent` 工具来避免每次都要输入密码。

现在，进行了上述操作的用户需要将各自的公钥发送给任意一个 Git 服务器管理员 （假设服务器正在使用基于公钥的 SSH 验证设置）。 他们所要做的就是复制各自的 `.pub` 文件内容，并将其通过邮件发送。 公钥看起来是这样的：

# Docker

**虚拟机是[硬件虚拟化](https://www.zhihu.com/search?q=%E7%A1%AC%E4%BB%B6%E8%99%9A%E6%8B%9F%E5%8C%96&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22824515963%22%7D)，容器是操作系统虚拟化，虚拟化是在硬件性能过剩的前提下，为不同应用提供某个级别的运行环境隔离**

## **镜像**

我们都知道，操作系统分为 **内核** 和 **用户空间**。对于 `Linux` 而言，内核启动后，会挂载 `root` 文件系统为其提供用户空间支持。而 **Docker 镜像**（`Image`），就相当于是一个 `root` 文件系统。比如官方镜像 `ubuntu:18.04` 就包含了完整的一套 Ubuntu 18.04 最小系统的 `root` 文件系统。

**Docker 镜像** 是一个**静态的,特殊的文件系统**，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像 **不包含任何动态数据，其内容在构建之后也不会被改变。**

**分层存储**

因为镜像包含操作系统完整的 `root` 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 [Union FS](https://en.wikipedia.org/wiki/Union_mount) 的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 `ISO` 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。

镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。

## 容器

镜像（`Image`）和容器（`Container`）的关系，就像是面向对象程序设计中的 `类` 和 `实例` 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。

容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 [命名空间](https://en.wikipedia.org/wiki/Linux_namespaces)。因此容器可以拥有自己的 `root` 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。也因为这种隔离的特性，很多人初学 Docker 时常常会混淆容器和虚拟机。

前面讲过镜像使用的是分层存储，容器也是如此。每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为 **容器存储层**。

容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。

按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 [数据卷（Volume）](notion://www.notion.so/docker_practice/data_management/volume)、或者 [绑定宿主目录](notion://www.notion.so/docker_practice/data_management/bind-mounts)，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。

**容器技术 vs 虚拟机**

与虚拟机通过操作系统实现隔离不同，容器技术**只隔离应用程序的运行时环境但容器之间可以共享同一个操作系统**，这里的运行时环境指的是程序运行依赖的各种库以及配置。容器是一种便于管理的轻量化虚拟机

我们知道和一个单纯的应用程序相比，**操作系统是一个很重而且很笨的程序**，简称笨重，有多笨重呢？

我们知道操作系统运行起来是需要占用很多资源的，大家对此肯定深有体会，刚装好的系统还什么都没有部署，单纯的操作系统其磁盘占用至少几十G起步，内存要几个G起步。

假设我有一台机器，16G内存，需要部署三个应用，那么使用虚拟机技术可以这样划分：

![https://pic4.zhimg.com/v2-c20cb49c88034e73e09059668b8cecfb_b.jpg](https://pic4.zhimg.com/v2-c20cb49c88034e73e09059668b8cecfb_b.jpg)

在这台机器上开启三个虚拟机，每个虚拟机上部署一个应用，其中VM1占用2G内存，VM2占用1G内存，VM3占用了4G内存。

我们可以看到虚拟本身就占据了总共7G内存，因此**我们没有办法划分出更过虚拟机从而部署更多的应用程序**，可是我们部署的是应用程序，要用的也是应用程序而**不是操作系统**。

如果有一种技术可以让我们避免把内存浪费在“无用”的操作系统上岂不是太香？这是问题一，主要原因在于操作系统太重了。

还有另一个问题，那就是启动时间问题，我们知道操作系统重启是非常慢的，因为操作系统要从头到尾把该检测的都检测了该加载的都加载上，这个过程非常缓慢，动辄数分钟，因此操作系统还是太笨了。

那么有没有一种技术可以让我们获得虚拟机的好处又能克服这些缺点从而一举实现鱼和熊掌的兼得呢？

答案是肯定的，这就是容器技术。

**什么是容器**

容器一词的英文是[container](https://www.zhihu.com/search?q=container&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22187505981%22%7D)，其实container还有集装箱的意思

- 集装箱之间相互隔离
- 长期反复使用
- 快速装载和卸载
- 规格标准，在港口和船上都可以摆放

容器技术可实现不同云计算之间应用程序的可移植性，以及提供了一个把应用程序拆分为分布式组件的方法。此外，用户还可以管理和扩展这些容器成为集群。

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的[镜像](https://baike.baidu.com/item/%E9%95%9C%E5%83%8F/1574)
中，然后发布到任何流行的 [Linux](https://baike.baidu.com/item/Linux)或[Windows](https://baike.baidu.com/item/Windows/165458)操作系统的机器上，也可以实现[虚拟化](https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E5%8C%96/547949)。容器是完全使用[沙箱](https://baike.baidu.com/item/%E6%B2%99%E7%AE%B1/393318)机制，相互之间不会有任何接口。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/151f837c-3734-4d8e-ab58-aa923abeddc2/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9097a033-79fd-4010-9f80-09767cbbac95/Untitled.png)

## **docker的底层实现**

docker基于Linux内核提供这样几项功能实现的：

- **NameSpace**我们知道Linux中的PID、IPC、网络等资源是全局的，而NameSpace机制是一种资源隔离方案，在该机制下这些资源就不再是全局的了，而是属于某个特定的NameSpace，各个NameSpace下的资源互不干扰，这就使得每个NameSpace看上去就像一个独立的操作系统一样，但是只有NameSpace是不够。
- **Control groups**虽然有了NameSpace技术可以实现资源隔离，但进程还是可以不受控的访问系统资源，比如CPU、内存、磁盘、网络等，为了控制容器中进程对资源的访问，Docker采用control groups技术(也就是[cgroup](https://www.zhihu.com/search?q=cgroup&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22187505981%22%7D))，有了cgroup就可以控制容器中进程对系统资源的消耗了，比如你可以限制某个容器使用内存的上限、可以在哪些CPU上运行等等。

有了这两项技术，容器看起来就真的像是独立的操作系统了。

Image镜像 为虚拟机的snapshot, 镜像在container中run

当输入cmd的docker run时本地主机无法访问REST服务器,如果我们想将容器内的端口暴露给容器外的端口，用 - -publish   / -p 80:5000,将docker中的80端口map暴露给到host  5000port

我们希望 docker 的服务是在后台运行的，我们可以过 **-d** 指定容器的分离模式,默认cmd返回,不进入容器

docker ps列出

[Volumes](https://docs.docker.com/storage/volumes/)
 are the preferred mechanism for persisting data generated by and used by Docker containers.

### Dockerfile

当我们使用该`FROM`命令时，我们告诉 Docker 在我们的镜像中包含镜像中的所有功能`golang:1.16-alpine`。我们所有的后续命令都将建立在该“基础”映像之上。

该`COPY`命令采用两个参数。第一个参数告诉 Docker 要将哪些文件复制到镜像中。最后一个参数告诉 Docker 你希望将该文件复制到哪里。

`RUN` command to execute the command `go mod download`
 there as well. This works exactly the same as if we were running `go`
 locally on our machine, but this time these Go modules will be installed into a directory inside the image.

multistage build is smaller than normal build in magnitude 这是因为 我们用来部署 Go 应用程序的[“无发行版”基础镜像非常简单，适用于静态二进制文件的精益部署。](https://github.com/GoogleContainerTools/distroless)

## Kubernetes

Kubernetes分布式架构运维平台，它实现了对容器资源的编排与控制 作者：

Kubernetes基础介绍 Borg / Kubernetes 框架 KUbernetes关键字含义

基础概念：什么是 Pod 控制器类型 K8S 网络通讯模式

工具部署：单节点 构建 K8S 集群

资源清单：资源 掌握资源清单的语法 编写 Pod 掌握 Pod 的生命周期***

Pod 控制器：掌握各种控制器的特点以及使用定义方式

服务发现：掌握 SVC 原理及其构建方式

存储：掌握多种存储类型的特点 并且能够在不同环境中选择合适的存储方案(有自己的简介)

调度器：掌握调度器原理 能够根据要求把Pod 定义到想要的节点运行

安全：集群的认证 鉴权 访问控制 原理及其流程

HELM：Linux yum 掌握 HELM 原理 HELM 模板自定义 HELM 部署一些常用插件

运维：修改Kubeadm 达到证书可用期限为 10年 能够构建高可用的 Kubernetes 集群

开发： Kubernetes 自开发实现特殊功能 

# dependency manage

## Maven

**`<parent>是<dependencies>`的超集**

`<parent>`和`<dependencies>`元素是两个不同的东西，但它们之间仍然存在着重要的关系。

简单来说就是`parent`定义了当前pom的父pom，`dependencies`定义了当前pom的实际依赖关系。父 pom 可以定义`dependencies`，但也可以定义子 Maven 项目继承的许多其他东西（特别是允许配置许多东西的`dependencyManagement`元素和`build`元素），因此可以以某种方式视为`dependencies`元素的超集。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc4bf43f-45ce-41b9-a72b-ffe166840fd8/Untitled.png)

本地仓库：
存放在本地服务器中，当运行项目的时候，maven会自动根据配置文件查找本地仓库，再从本地仓库中调用jar包使用。
远程仓库（私服）：
当本地仓库中没有项目所需要的jar包时，那么maven会继续查找远程仓库，一般远程仓库指的是公司搭建的私有服务器，也叫私服；
当jar包在私服中查找到之后，maven会将jar包下载到本地仓库中，下次使用的时候就不用再去找远程仓库。
中央仓库：
当远程仓库获取不到jar包时，就需要到中央仓库去查找，并下载在远程仓库中，本地仓库再从远程仓库中下载回来使用。

mvn clean install 依次执行了clean、resources、compile、testResources、testCompile、test、jar(打包)、install等8个阶段。

mvn clean deploy 依次执行了clean、resources、compile、testResources、testCompile、test、jar(打包)、install、deploy等９个阶段。

**mvn -U clean install**  

 **Forces a check for missing releases and updated snapshots on
remote repositories**
  

clean 命令清除项目target文件夹
package 命令完成了项目编译、单元测试、打包功能，但没有把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库
install 命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）**布署到本地maven仓库，但没有布署到远程maven私服仓库**
deploy 命令完成了项目编译、单元测试、打包功能，同时把打好的可执行jar包（war包或其它形式的包）布署到本地maven仓库和远程maven私服仓库

**Artifacts【项目的打包部署设置，这个是项目配置里面比较关键的地方】**

**artifact 可以作为存档文件 ，或者作为包含以下结构元素的目录结构：**

一个或多个编译模块、模块依赖的类库、Resources 集合、其他 artifacts、独立的文件目录或存档

> 再白话一点，就是说某个 module 要如何打包
> 
> 
> 例如 war exploded、war、jar、ear 等等这种打包形式
> 
> 某个 module 有了 Artifacts 就可以部署到应用服务器中了
> 

`jar：Java ARchive`，通常用于**聚合大量**的 Java 类文件、相关的元数据和资源（文本、图片等）文件到一个文件，以便分发 Java 平台应用软件或库

`war：Web application ARchive`，**一种 JAR 文件，其中包含**用来分发的 JSP、Java Servlet、Java 类、XML 文件、标签库、静态网页（HTML 和相关文件），以及构成 Web 应用程序的**其他资源**

`exploded`：在这里你可以理解为展开，不压缩的意思。**也就是 war、jar 等没压缩前的目录结构**。建议在开发的时候使用这种模式，便于修改了文件的效果立刻显现出来

**默认情况下，IDEA 的 Modules 和 Artifacts 的 output 目录已经设置好了，不需要更改，打成 war 包的时候会自动在 WEB-INF 目录下生成 classes，然后把编译后的文件放进去。**

Yarn是一个快速可靠安全的依赖管理工具。
主要的三个特点：

极其快速，Yarn会缓存它下载的每个包，所以无需重复下载。它还能并行化操作以最大化资源利用率。
特别安全，Yarn会在每个安装包被执行前校验其完整性
超级可靠， Yarn使用格式详尽而又简洁的lockfile文件和确定性算法来安装依赖，能够保证在一个系统上的运行的安装过程也会以同样的方式运行在其他系统上

# Iauth

Hotstar internal auth is to provide complete role based permission control and authentication services to internal dashboard and micro-services via JWT and SSO

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8cbd8e27-1d71-4bdb-969a-ee1787171141/Untitled.png)

### SDK

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/edcc517c-f6e1-4da6-804e-cc5676b3ad65/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/13ebf408-f93f-45a8-9836-febf6c4c29b4/Untitled.png)

The components of the URL are combined and delimited as follows:

`scheme://host:port/path?query`

### logout

[https://seceng-rex-portal.hotstar-labs.com/](https://seceng-rex-portal.hotstar-labs.com/)

[https://iauth-manage.pp.hotstar-labs.com/Service](https://iauth-manage.pp.hotstar-labs.com/Service)

[https://iauth.hotstar-labs.com/?id=REX-Dashboard%3Aauvxmcphru9asmwufgjkbpjtcudvlkfb&redirect_url=https%3A%2F%2Fseceng-rex-portal.hotstar-labs.com%2F&signin_request=tru](https://iauth.hotstar-labs.com/?id=REX-Dashboard%3Aauvxmcphru9asmwufgjkbpjtcudvlkfb&redirect_url=https%3A%2F%2Fseceng-rex-portal.hotstar-labs.com%2F&signin_request=true)

1. 账号密码是如何登录的

启动服务过程: wire将router interface与authrouter绑定,启动server自动生成的injector完成依赖注入(与数据库操作 router controller绑定?)

创建authrouter的同时启动service和 各种操作用户权限的函数 login,当server接收到用户请求时启动一个Context c记录 用户id和对应操作的服务

2. 其他服务如何通过IAuth登录的？

router group的api方法

3. 设计实现一个/v1/signout接口

前端可以隐藏v1, 比如users页面(/partner)，前端会调用 /v1/partners，拿到用户列表，然后加载到这个表格里

前端给后端api发送请求,我的想法是后端router执行user group绑定的DELETE下的logoutController的setCookie方法把Iauthkey的value设为“”,然后redirect到登入界面.  两次redirect 只能用GET

1. Permission 下related entities user/service

request function calls umi request method to backend, then it fetchs idtype& other info in the Gin.Context and passes to frontend to display.

frontend Debug:      [https://cloud.tencent.com/developer/article/1471757](https://cloud.tencent.com/developer/article/1471757)

1. defaultrole

Switch widget checked has changed pass into function,⇒ switch access state constant `defaultRoleEnabled`

context.Redirect calls Render,which writes the **response** headers and calls render.Render to render data.

1. Search bug :  filter 问题

1.   comment

**Array.prototype.map()**

The **`map()`** function lets you manipulate the items in an array by iterating and accessing individual items.**`map()`** method **creates a new array** populated with the results of calling a provided function on every element in the calling array.

创建mock test:

`context, _ := gin.CreateTestContext(httptest.NewRecorder())`

通常，您的网络服务器不应具有会话或注销功能。REST 服务应该是无状态的，并且身份验证信息与每个请求一起发送。

但是，如果您正在使用TOKEN对用户进行身份验证，并且您想明确告诉服务器使该令牌过期，*并且*您想以 RESTful 方式表达这一点，那么对我来说这是有意义的：

- 您的令牌以 /sessions/[id] 之类的 url 表示
- 您`DELETE`在该网址上发出`/webservice/logout/`对我来说，你有一个你删除的网址是没有意义的。

发出带有一些信息的 POST 请求以发出“注销”操作是一种明智的 HTTP API 设计方法，但它不是 REST。

need context and hooks

但实际上登录信息保存在一个用`httponly`属性标记的cookie中，以防止一些xss风险，这意味着它只能从服务器重置（没有手动清除cookie）

SDK是其他团队接入接口

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/659b79f2-3c4c-44aa-ae45-5c3193ef066a/Untitled.png)

- Expiration time: configurable for each service, default to 12h
- **SDK Initialization (Service Sign-In)S2S**

**Panic Token in vault**

- Also a **S2S Token**, but with very long expiration time.

2000是后端端口 8000是前端

- 写后台的过程是提供接口，是被调用方的开发者视角
- **写sdk的过程是使用接口，是调用方的开发者视角**

**SDK: We provide SDK of each language that does authN and authZ.**

Pros:

- Applicable to every scenario: inter/intra cluster, with/without ambassador, with/without sidecar
- No performance overhead due to network call
- Isolation between services. One cannot affect another.
- AuthN customization. Besides API based control, services can invoke customized permission checks with SDK. And SDK can provide lifecycle hooks for service to ingest customized logics.

Cons:

- We need to build SDK for each language
- Services need to integrate with SDK
- Services need to bump SDK version if they want to have new features or fixes

where’s ORM diagram for RBAC, 

solidclient is client or failover client

gin `Context` 优先 -》`defaultRedirectURL` -〉referer

verify —— release

*For the S2S scenario, services will always work even though the IAuth crashed.* This means IAuth SDK will handle all these exceptions caused by the IAuth backend service. *For the C2S scenario, services will downgrade when the IAuth crashed.* This means the **IAuth SDK will lose some functions while the IAuth backend service is down**. In this paper, we give all the details about that.

1. Setting panic service token

In the S2S scenario, we have a caller and a callee. The caller must carry a valid service token to prove its identity to the callee. Generally, a valid service token is generated through the IAuth SDK calling the IAuth backend service. In the case where the IAuth backend service crashed, the IAuth SDK needs a **backup panic service token**. Therefore, *IAuth provides each service **a long-lived panic service token** and developers need to set this token in the SDK*. In this way, the caller will always send requests carrying a valid service token

2. Failover of authentication

In the S2S scenario, we have a caller and a callee. The callee needs to check the service token each time it receives a request. The dedicated public key is needed to verify a service token. Generally, the public key is retrieved from the IAuth backend service. In the case where the IAuth backend service crashed, the IAuth SDK needs a backup mechanism. *Therefore, IAuth SDK stores the corresponding public keys locally and does a failover automatically once the IAuth backend service is down*. In that way, no matter IAuth backend service is up or down, authentication will always work.

3. Failover of authorization

We have two cases where the failover of authorization is needed. One case is that the service works well while the IAuth backend service crashes. *IAuth SDK caches the data of authorization locally periodically and the cache won’t delete the old data once the new data can’t be pulled from the IAuth backend service*, which makes itself work well in this case. Another case is that the service needs to be deployed when the IAuth backend service crashes. For this case, *IAuth SDK will startup in an s2s failover mode, where all requests are allowed directly, without the need to check permissions.* *Meanwhile, IAuth SDK will automatically switch to the normal mode once the IAuth backend service recovers from the crash.*

4. Failover of audit

Generally, the IAuth SDK collects all the audit logs and then sends them to the IAuth backend service. Once the IAuth backend service is down, the logs won’t be received successfully. *These logs will stay in the memory until the IAuth backend service is up again or the limitation of occupied memory is reached (50MB)*.

public key所有服务共享一样, private key iauth校验

Q:1.middleware shadow mode?            shadow mode 记录没有权限的请求,先允许访问`Requests without valid tokens aren't blocked. Redirects are stopped.`

2.Theoretically backend returns a 302 response and abort

context.next() → multiple handlers 异步执行, like `chain.doFilter(request, response)`

redirect+abort

// Cron keeps track of any number of entries, invoking the associated func as
// specified by the schedule. It may be started, stopped, and the entries may
// be inspected while running.

在Linux系统中，定时任务管理系统一般是由cron承担，我们可以把cron设置为开机时自动启动。cron启动后，它会读取它的所有配置文件（全局性配置文件/etc/crontab，以及每个用户的计划任务配置文件），然后cron会根据命令和执行时间来按时来调用度工作任务。
cron是一个linux下的定时执行工具，可以在无需人工干预的情况下运行作业。由于Cron 是Linux的内置服务，但它不自动起来，可以用以下的方法启动、关闭这个服务：

# GO

在Go语言出现之前，开发者们总是面临非常艰难的抉择，究竟是使用执行速度快但是编译速度并不理想的语言（如：C++），还是使用编译速度较快但执行效率不佳的语言（如：.NET、Java），或者说开发难度较低但执行速度一般的动态语言呢？显然，Go语言在这 **3 个条件**之间做到了最佳的平衡：**快速编译，高效执行，易于开发。**

Go语言支持交叉编译，比如说你可以在运行 Linux 系统的计算机上开发可以在 Windows 上运行的应用程序。这是第一门完全支持 UTF-8 的编程语言，这不仅体现在它可以处理使用 UTF-8 编码的字符串，就连它的源码文件格式都是使用的 UTF-8 编码。

Go语言在C语言的基础上取其精华，弃其糟粕，将C语言中较为容易发生错误的写法进行调整，做出相应的编译提示。

[https://go.dev/doc/faq#Is_Go_an_object-oriented_language](https://go.dev/doc/faq#Is_Go_an_object-oriented_language)

We decided to take a step back and think about what major issues were going to dominate software engineering in the years ahead as technology developed, and how a new language might help address them. For instance, the rise of multicore CPUs argued that a language should provide first-class support for some sort of concurrency or parallelism. And to make resource management tractable in a large concurrent program, garbage collection, or at least some sort of safe automatic memory management was required.

**强类型静态编译型语言。隐式继承**

可以在事后添加接口，而无需注释原始类型。因为类型和接口之间没有明确的关系，所以没有要管理或讨论的类型层次结构。

UTF-8 是被广泛使用的编码格式，是文本文件的标准编码，其它包括 XML 和 JSON 在内，也都使用该编码。由于该编码对占用字节长度的不定性，Go 中的字符串也可能根据需要占用 1 至 4 个字节（示例见第 4.6 节），这与其它语言如 C++、Java 或者 Python 不同（Java 始终使用 2 个字节）。Go 这样做的好处是不仅减少了内存和硬盘空间占用，同时也不用像其它语言那样需要对使用 UTF-8 字符集的文本进行编码和解码。

字符串是一种值类型，且值不可变，即创建某个文本后你无法再次修改这个文本的内容；更深入地讲，字符串是字节的定长数组。Go 支持以下 2 种形式的字面值：

解释字符串：

该类字符串使用双引号括起来，其中的相关的转义字符将被替换

该类字符串使用反引号括起来，支持换行，例如

**语法糖**

‘…’ 其实是go的一种语法糖。用法一：表示多个不确定数量的参数

用法二：slice打散传递

1. arr2 := []int{1,2,3}
2. arr1 = append(arr1,0)
3. arr1 = append(arr1,**arr2...**)

### 数据类型

Go语言中数组、字符串和切片三者是密切相关的数据结构。这三种数据类型，在底层原始数据有着相同的内存结构，在上层，因为语法的限制而有着不同的行为表现。首先，**Go语言的数组是一种值类型，虽然数组的元素可以被修改，但是数组本身的赋值和函数传参都是以整体复制的方式处理的**。Go语言字符串底层数据也是对应的字节数组，但是字符串的只读属性禁止了在程序中对底层字节数组的元素的修改。字符串赋值只是复制了数据地址和对应的长度，而不会导致底层数据的复制。切片的行为更为灵活，切片的结构和字符串结构类似，但是解除了只读限制。切片的底层数据虽然也是对应数据类型的数组，但是每个切片还有独立的长度和容量信息，切片赋值和函数传参数时也是将切片头信息部分按传值方式处理。因为切片头含有底层数据的指针，所以它的赋值也不会导致底层数据的复制。其实Go语言的赋值和函数传参规则很简单，除了闭包函数以引用的方式对外部变量访问之外，其它赋值和函数传参数都是以传值的方式处理。要理解数组、字符串和切片三种不同的处理方式的原因需要详细了解它们的底层数据结构。

数组是一个由**固定长度**的特定类型元素组成的序列，一个数组可以由零个或多个元素组成。数组的长度是数组类型的组成部分。因为数组的长度是数组类型的一个部分，不同长度或不同类型的数据组成的数组都是不同的类型，因此在Go语言中很少直接使用数组（不同长度的数组因为类型不同无法直接赋值）。和数组对应的类型是切片，切片是可以动态增长和收缩的序列，切片的功能也更加灵活，但是要理解切片的工作原理还是要先理解数组。

转换:   Atoi (string to int) and Itoa (int to string).

iota

rune类型是Go语言中的一个基本类型，其实就是一个**int32的别名**
，主要用于表示一个字符类型大于一个字节小于等于4个字节的情况下，特别是**中文字符。**

A `byte` in Go is an unsigned 8-bit integer. It has type `uint8`
. A `byte` has a limit of 0 – 255 in numerical range. It can represent an ASCII character.

```
fmt.Println([]byte("falcon"))
     fmt.Println([]byte("čerešňa"))
}

$ go run str2bytes.go
[102 97 108 99 111 110]
[196 141 101 114 101 197 161 197 136 97]
```

string与[]byte在底层结构上是非常的相近（后者的底层表达仅多了一个cap属性，因此它们在内存布局上是可对齐的），这也就是为何builtin中内置函数copy会有一种特殊情况`copy(dst []byte, src string) int`的原因了。对于[]byte与string而言，**两者之间最大的区别就是string的值不能改变**

字符串的值不能被更改，但可以被替换。 string在底层都是结构体`stringStruct{str: str_point, len: str_len}`，string结构体的str指针指向的是一个字符常量的地址， 这个地址里面的内容是不可以被改变的，因为它是只读的，但是这个指针可以指向不同的地址。

那么，以下操作的含义是不同的：

```
s := "S1" // 分配存储"S1"的内存空间，s结构体里的str指针指向这块内存
s = "S2"  // 分配存储"S2"的内存空间，s结构体里的str指针转为指向这块内存

b := []byte{1} // 分配存储'1'数组的内存空间，b结构体的array指针指向这个数组。
b = []byte{2}  // 将array的内容改为'2'
```

Golang 有 time.Time数据类型来处理挂钟时间和time.Duration来处理单调时间。 第一个基本方法是 time.Now()，它返回当前日期和时间，精确到纳秒。返回的值具有数据类型 time.Time，它是一个结构。根据 Golang 的官方文档，“A Time 代表具有纳秒精度的瞬间”。

**time.Duration**有一个基本类型 int64。持续时间表示两个瞬间之间经过的时间，以 int64 纳秒计数”。最大可能的纳秒表示可达 290 年。

## 指针,传参

- Go 中函数**传参仅有值传递**一种方式；
- **slice**、**map**、**channel**都是引用类型，但是跟c++的不同；
- **slice**能够通过函数传参后，修改对应的数组值，是因为 slice 内部保存了引用数组的指针，并不是因为引用传递。

```
type slice struct {
    array unsafe.Pointer
    len   int
    cap   int
}
```

slice本质上指的就是这个结构（data+len+cap，不包括底层的数组）。在参数传递过程中，这个结构拷贝了一份，data指向的还是原来的底层数组。当我们对slice中的元素进行修改时，还是会通过拷贝之后的data，直接对底层数组进行修改。

> go 中，slice、map、channel都是引用类型，所以都会有如上的特性。
> 

在默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。

注意1：无论是值传递，还是引用类型传递，传递给函数的都是变量的副本，不过，值传递是值的拷贝。引用传递是地址的拷贝，一般来说，地址拷贝更为高效。而值拷贝取决于拷贝的对象大小，对象越大，则性能越低。

注意2：map、slice、chan、指针、interface默认以引用的方式传递。

不定参数传值 就是函数的参数不是固定的，后面的类型是固定的。（可变参数）

匿名函数的定义就是没有名字的普通函数定义。

### map

Map 是一种无序的键值对的集合。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。

Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，Map 是无序的，我们无法决定它的**返回顺序，这是因为 Map 是使用 hash 表**来实现的。

`[mapstructure](https://github.com/mitchellh/mapstructure)`
用于将通用的`map[string]interface{}`解码到对应的 Go 结构体中，或者执行相反的操作。很多时候，解析来自多种源头的数据流时，我们一般事先**并不知道他们对应的具体类型**。只有读取到一些字段之后才能做出判断。这时，**我们可以先使用标准的`encoding/json`库将数据解码为`map[string]interface{}`类型，然后根据标识字段利用`mapstructure`
库转为相应的 Go 结构体以便使用**

指针的一个高级应用是你可以传递一个变量的引用（如函数的参数），这样不会传递变量的拷贝。指针传递是很廉价的，只占用 4 个或 8 个字节。当程序在工作中需要占用大量的内存，或很多变量，或者两者都有，使用指针会减少内存占用和提高效率。被指向的变量也保存在内存中，直到没有任何指针指向它们，所以从它们被创建开始就具有相互独立的生命周期。

nil 指针也称为空指针。

```perl
var a int= 20   /* 声明实际变量 */
   var ip *int        /* 声明指针变量 */

   ip = &a  /* 指针变量的存储地址 */

   fmt.Printf("a 变量的地址是: %x\n", &a  )

   /* 指针变量的存储地址 */
   fmt.Printf("ip 变量储存的指针地址: %x\n", ip )
   /* 使用指针访问值 */
   fmt.Printf("*ip 变量的值: %d\n", *ip )
普通占位符
占位符     说明                           举例                   输出
%v      相应值的默认格式。            Printf("%v", people)   {zhangsan}，
%+v     打印结构体时，会添加字段名     Printf("%+v", people)  {Name:zhangsan}
%#v     相应值的Go语法表示            Printf("#v", people)   main.Human{Name:"zhangsan"}
%T      相应值的类型的Go语法表示       Printf("%T", people)   main.Human
%%      字面上的百分号，并非值的占位符  Printf("%%")            %
布尔占位符
占位符       说明                举例                     输出
%t          true 或 false。     Printf("%t", true)       true
整数占位符
占位符     说明                                  举例                       输出
%b      二进制表示                             Printf("%b", 5)             101
%c      相应Unicode码点所表示的字符              Printf("%c", 0x4E2D)        中
%d      十进制表示                             Printf("%d", 0x12)          18
%o      八进制表示                             Printf("%d", 10)            12
%q      单引号围绕的字符字面值，由Go语法安全地转义 Printf("%q", 0x4E2D)        '中'
%x      十六进制表示，字母形式为小写 a-f         Printf("%x", 13)             d
%X      十六进制表示，字母形式为大写 A-F         Printf("%x", 13)             D
%U      Unicode格式：U+1234，等同于 "U+%04X"   Printf("%U", 0x4E2D)         U+4E2D
```

## function方法

A method is on an object or is static in class.A function is independent of any object (and outside of any class).

For Java and C#, there are only methods.

For C, there are only functions.

For C++ and Python it would depend on whether or not you're in a class.

### 1) 在定义时调用匿名函数

匿名函数lambda：是指**一类无需定义标识符（函数名）的函数或子程序**
。 所谓匿名函数，通俗地说就是没有名字的函数，lambda函数没有名字，是一种简单的、在同一行中定义函数的方法。 lambda函数一般功能简单：单行expression决定了lambda函数不可能完成复杂的逻辑，只能完成非常简单的功能。

匿名函数可以在声明后调用，例如：
`1. func(data int) {
2.     fmt.Println("hello", data)
3. }(100)`

表示对匿名函数进行调用，传递参数为 100。

2) 将匿名函数赋值给变量

匿名函数可以被赋值，例如：
`1. // 将匿名函数体保存到f()中
2. f := func(data int) {
3.     fmt.Println("hello", data)
4. }
5. 
6. // 使用f()调用
7. f(100)`

匿名函数的用途非常广泛，它本身就是一种值，可以方便地保存在各种容器中实现回调函数和操作封装。

What is () before a function Golang?

it's called receiver argument, 函数名前的括号规定了接收到的object,就像面向对象的类,想要调用Person类中的eat方法首先需要创建一个Person对象

The parenthesis before the function name is **the Go way of defining the object on which these functions will operate**. 

```jsx
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
```

### 闭包

闭包使得Javascript的垃圾回收机制GC不会收回a()所占用的资源，因为a()的内部函数b()的执行需要依赖a()中的变量i

defer `这些调用直到 return 前才被执。因此，可以用来做资源清理。`

```
package main
import "fmt"
type Test struct {
    name string
}

func (t *Test) Close() {
    fmt.Println(t.name, " closed")
}
func Close(t Test) {
    t.Close()
}
func main() {
    ts := []Test{{"a"}, {"b"}, {"c"}}
    for _, t := range ts {
        defer Close(t)
    }
}
```

defer后面的语句在执行的时候，函数调用的参数会被保存起来，但是不执行。也就是复制了一份。但是并没有说struct这里的this指针如何处理，通过这个例子可以看出go语言并没有把这个明确写出来的this指针当作参数来看待。

多个 defer 注册，按 FILO 次序执行 ( 先进后出 )。哪怕函数或某个延迟调用发生错误，这些调用依旧会被执行。

**尽可能不要在goroutine中使用闭包!**

## Exception

Golang 没有结构化异常，使用 panic 抛出错误，recover 捕获错误。

异常的使用场景简单描述：Go中可以抛出一个panic的异常，然后在defer中通过recover捕获这个异常，然后正常处理。

Python&Java try-catch 机制正是提案试图避免的那种事情。 Panic 和 recover 不是通常意义的异常机制。通常的方式是将 exception 和一个控制结构相关联，鼓励细粒度的 exception 处理，导致代码往往不易阅读。在 error 和调用一个 panic 之间确实存在差异，而且我们希望这个差异很重要。在 Java 中打开一个文件会抛出异常。在我的经验中，打开文件失败是最平常不过的事。而且还需要我写许多代码来处理这样的 exception。

## Reflect

反射是指在程序运行期**对程序本身进行访问和修改的能力**。程序在编译时，变量被转换为内存地址，变量名不会被编译器写入到可执行部分。在运行程序时，程序无法获取自身的信息。

支持反射的语言可以在程序编译期将变量的反射信息，如字段名称、类型信息、结构体信息等整合到可执行文件中，并给程序提供接口访问反射信息，这样就可以在程序运行期获取类型的反射信息，并且有能力修改它们。C/[C++](http://c.biancheng.net/cplus/)语言没有支持反射功能，只能通过 typeid 提供非常弱化的程序运行时类型信息；Java、[C#](http://c.biancheng.net/csharp/) 等语言都支持完整的反射功能；Lua、[JavaScript](http://c.biancheng.net/js/)类动态语言，由于其**本身的语法特性就可以让代码在运行期访问程序自身的值和类型信息，因此不需要反射系统**。

Go语言程序中的类型（Type）指的是系统原生数据类型，如 int、string、bool、float32 等类型，以及使用 type 关键字定义的类型，这些类型的名称就是其类型本身的名称。例如使用 type A struct{} 定义结构体时，A 就是 struct{} 的类型。

Map、Slice、Chan 属于引用类型，使用起来类似于指针

**结构体标签（Struct Tag）**

通过 reflect.Type 获取结构体成员信息 reflect.StructField 结构中的 Tag 被称为结构体标签（StructTag）。结构体标签是对结构体字段的额外信息标签。结构体标签（Struct Tag）类似于 [C#](http://c.biancheng.net/csharp/)
 中的特性（Attribute）。C# 允许在类、字段、方法等前面添加 Attribute，然后在反射系统中可以获取到这个属性系统。例如：

Tag 在结构体字段后方书写的格式如下：`key1:"value1" key2:"value2"`

key会指定**反射的解析方式**，如下： json(JSON标签) orm(Beego标签)、gorm(GORM标签)、bson(MongoDB标签)、form(表单标签)、binding(表单验证标签)

结构体标签由一个或多个键值对组成。键与值使用冒号分隔，值用双引号括起来。键值对之间使用一个空格分隔。

指定映射的字段名。为了做到这一点，我们需要为字段设置`mapstructure`标签。例如下面使用`username`代替上例中的`name`：

```
type Person struct {
  Namestring `mapstructure:"username"`
}
```

## JSON

Substring 从以连续顺序放置在两个指定索引之间的字符串中取出字符。另一方面， **子序列**可以通过删除中间的一些元素或不删除元素从另一个序列导出，但始终保持原始序列中元素的相对顺序。

key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。

key 和 value 中使用冒号 **:** 分割。              每个 key/value 对使用逗号 **,** 分割。

Both JSON and XML can be used to receive data from a web server.

parse to JS object:  const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

```jsx
**Json Marshal：将数据编码成json字符串
jsonstu,err := json.Marshal(stu)
if err!=nil{
        fmt.Println("生成json字符串错误")
    }

{"name":"张三","Age":18,"HIgh":true,"class":{"Name":"1班","Grade":3}}**
```

JSON、BSON 等格式进行序列化及对象关系映射（Object Relational Mapping，简称 ORM）系统都会用到结构体标签，这些系统使用标签设定字段在处理时应该具备的特殊属性和可能发生的行为。这些信息都是静态的，无须实例化结构体，可以通过反射获取到。

```perl
Type int `json: "type" id:"100"` //ERror:json后多了个空格,无法解析
{//reflect 获取字段tag
var u User
	t:=reflect.TypeOf(u)
	for i:=0;i<t.NumField();i++{
		sf:=t.Field(i)
		fmt.Println(sf.Tag.Get("json"),",",sf.Tag.Get("bson"))
	}
```

Json字符串转User对象的例子，这里主要利用的就是User这个结构体对应的字段Tag，json解析的原理就是通过反射获得每个字段的tag，然后把解析的json对应的值赋给他们。

利用字段Tag不光可以把Json字符串转为结构体对象，还可以把结构体对象转为Json字符串。

## Object orient

this是指向当前对象的指针(姑且用C里面的指针来看吧)

self是指向当前类的指针

**多态**

Go 语言提供了另外一种数据类型即**接口，它把所有的具有共性的方法**定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口。

**继承(组合)**

type Human struct{}

type Superman struct{

Human//表示继承Human类的方法

}

### interface

```
type A interface {
    Get(k string) interface{}
    Set(k string, v interface{})
}

func NewA() A {
    return &a{}
}

type a struct {
    // ...
}

func (a0 *a) Get(k string) interface{} {
    // ...
    return nil
}

func (a0 *a) Set(k string, v interface{}) {
    // ...
}
```

### 结构体

Go 中实现 “构造子工厂” 方法。为了方便通常会为类型定义一个工厂，按惯例，工厂的名字以 new 或 New 开头。假设定义了如下的 File 结构体类型：

```perl

type File struct {
fd      int     // 文件描述符
name    string  // 文件名
}
下面是这个结构体类型对应的工厂方法，它返回一个指向结构体实例的指针：

func NewFile(fd int, name string) *File {
if fd < 0 {
return nil
}

```
return &File{fd, name}

```

}
```

f := NewFile(10, "./test.txt")
在 Go 语言中常常像上面这样在工厂方法里使用初始化来简便的实现构造函数。

如果 File 是一个结构体类型，那么表达式 new(File) 和 &File{} 是等价的。

### Receiver type

With receiver functions you don’t have to mess around with classes or deal with inheritance. The person type has no knowledge of the receiver function. One advantage of using receiver function is when we couple it with iterfaces. I hope to write about interfaces shortly. In a nutshell, by using interfaces we can use the same receiver function to receive arguments of multiple types.

receiver在其他语言以及go语言里也叫做 **函数签名**（函数签名是最普遍的叫法）

相当于类方法

```
type MyStruct struct {
    x int
}

func (m MyStruct) Set1() {
    m.x = 1
}

func (m *MyStruct) Set2() {
    m.x = 2
}
```

go get -u 

标志指示 get 更新提供命令行上命名的包的依赖项的模块，以便在可用时使用更新的次要版本或补丁版本。

解决Spring循环依赖的方式是：

1. 出现循环依赖的Bean必须要是单例
2. 依赖注入的方式不能全是构造器注入的方式（

先去缓存里找**Bean**，没有则**实例化当前的Bean**放到Map，如果有需要**依赖**当前Bean的，就能从Map取到。

`A`依赖于`B`

`B`依赖于`X`

`Y`依赖于`A`和`B`

## PKG

Go的Web框架大致可以分为这么两类：

1. Router框架
2. MVC类框架

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f4134d3-a1ff-4102-81c1-0b26b70b10e5/Untitled.png)

1. Controller，与上述类似，服务入口，负责处理路由，参数校验，请求转发。
2. Logic/Service，逻辑（服务）层，一般是业务逻辑的入口，可以认为从这里开始，所有的请求参数一定是合法的。业务逻辑和业务流程也都在这一层中。常见的设计中会将该层称为 Business Rules。
3. DAO/Repository，这一层主要负责和数据、存储打交道。将下层存储以更简单的函数、接口形式暴露给 Logic 层来使用。负责数据的持久化工作。

每一层都会做好自己的工作，然后用请求当前的上下文构造下一层工作所需要的结构体或其它类型参数，然后调用下一层的函数。在工作完成之后，再把处理结果一层层地传出到入口，如*图 5-14所示*。

![https://chai2010.gitbooks.io/advanced-go-programming-book/content/images/ch6-08-controller-logic-dao.png](https://chai2010.gitbooks.io/advanced-go-programming-book/content/images/ch6-08-controller-logic-dao.png)

Route框架

**httproute使用压缩字典树radix tree**

字典树常用来进行字符串检索，例如用给定的字符串序列建立字典树。对于目标字符串，只要从根节点开始深度优先搜索，即可判断出该字符串是否曾经出现过，时间复杂度为`O(n)`
，n可以认为是目标字符串的长度。为什么要这样做？字符串本身不像数值类型可以进行数值比较，两个字符串对比的时间复杂度取决于字符串长度。如果不用字典树来完成上述功能，要对历史字符串进行排序，再利用二分查找之类的算法去搜索，时间复杂度只高不低。可认为字典树是一种空间换时间的典型做法。

Go语言的`net/http`注册的路径和相应的处理函数都存入了m字段中，我们只要知道处理HTTP请求的时候，会调用`Handler`接口的`ServeHTTP`方法，而`ServeMux`正好实现了`Handler`。

```
func (mux*ServeMux)ServeHTTP(w ResponseWriter, r*Request) {
//省略一些无关代码

	h, _:= mux.Handler(r)
	h.ServeHTTP(w, r)
}
```

上面代码中的`mux.Handler`会获取到我们注册的`Index`函数，然后执行它，具体`mux.Handler`的详细实现不再分析了，大家可以自己看下源代码。

现在我们可以总结下`net/http`包对HTTP请求的处理。

```
HTTP请求->ServeHTTP函数->ServeMux的Handler方法->Index函数
```

这就是整个一条请求处理链，现在我们明白了`net/http`里对HTTP请求的原理。

`net/http`的默认路径处理HTTP请求的时候，会发现很多不足，比如：

1. 不能单独的对请求方法(POST,GET等)注册特定的处理函数
2. 不支持Path变量参数
3. 不能自动对Path进行校准

所以我们得自己写一个处理请求的router

## **GIN**

Gin is a web framework written in Go (Golang). It features a martini-like API with performance that is up to 40 times faster thanks to [httprouter](https://github.com/julienschmidt/httprouter). If you need performance and good productivity, you will love Gin.只要你的路由带有参数，并且这个项目的API数目超过了10，就尽量不要使用`net/http`中默认的路由。在Go开源界应用最广泛的router是httpRouter，很多开源的router框架都是基于httpRouter进行一定程度的改造的成果。关于httpRouter路由的原理，会在本章节的router一节中进行详细的阐释。

**Features**

**Fast**

Radix tree based routing, small memory foot print. No reflection. Predictable API performance.

**Middleware support**

An incoming HTTP request can be handled by a chain of middlewares and the final action. For example: Logger, Authorization, GZIP and finally post a message in the DB.

**Crash-free**

Gin can catch a panic occurred during a HTTP request and recover it. This way, your server will be always available. As an example - it’s also possible to report this panic to Sentry!

**JSON validation**

Gin can parse and validate the JSON of a request - for example, checking the existence of required values.

**Routes grouping**

Organize your routes better. Authorization required vs non required, different API versions… In addition, the groups can be nested unlimitedly without degrading performance.

**Error management**

Gin provides a convenient way to collect all the errors occurred during a HTTP request. Eventually, a middleware can write them to a log file, to a database and send them through the network.

**Rendering built-in**

Gin provides an easy to use API for JSON, XML and HTML rendering.

再来回顾一下文章开头说的，开源界有这么几种框架，第一种是对httpRouter进行简单的封装，然后提供定制的中间件和一些简单的小工具集成比如gin，主打轻量，易学，高性能。第二种是借鉴其它语言的编程风格的一些MVC类框架，例如beego，方便从其它语言迁移过来的程序员快速上手，快速开发。还有一些框架功能更为强大，除了数据库schema设计，大部分代码直接生成，例如goa。不管哪种框架，适合开发者背景的就是最好的

• routes group是为了管理一些相同的URL

`Gin`提供了`Any`方法，可以一次性注册以上这些`HTTP Method`方法。如果你只想注册其中某两个、或者三个方法，`Gin`就没有这样的便捷方法了，不过`Gin`为我们提供了通用的`Handle`方法，我们可以包装一下使用。

```
funcHandle(r*gin.Engine, httpMethods []string, relativePathstring, handlers...gin.HandlerFunc) gin.IRoutes {
var routes gin.IRoutes
for _, httpMethod:=range httpMethods {
		routes = r.Handle(httpMethod, relativePath, handlers...)
	}
return routes
}
```

如果对于这些请求的URL我们一个个去注册，比如张三用户和李四用户，分别注册一个对应的GET方法，是很繁琐的，所以Gin为我们提供了URL路由的**模糊匹配**，比如URL路径中的参数

/users/*id 表示模糊匹配id

`/users/:id`这种匹配模式是精确匹配的，只能匹配一个k

重定向的根本原因在于`/users`没有匹配的路由，但是有匹配`/users/`的路由，所以就会被重定向到`/users/`。得益于`gin.RedirectTrailingSlash`
 等于`true`

URL**获取查询参数**

`GetQuery`来代替`Query`方法。

`GetQuery`方法的底层实现其实是`c.Request.URL.Query().Get(key)`，通过`url.URL.Query()`来获取所有的参数键值对。

```
unc (c*Context)GetQueryArray(keystring) ([]string,bool) {
	c.getQueryCache()//缓存所有的键值对
if values, ok:= c.queryCache[key]; ok&& len(values) > 0 {
return values,true
	}
return []string{},false
}

func (c*Context)getQueryCache() {
if c.queryCache==nil {
		c.queryCache = c.Request.URL.Query()
	}
}

```

从以上的实现代码中，可以看到最终的实现都在`GetQueryArray`方法中，找到对应的`key`就返回对应的`[]string`，返回就返回空数组。

这里`Gin`进行了优化，通过缓存所有的键值对，提升代码的查询效率。这里缓存的`queryCache`本质上是`url.Values`，也是一个`map[string][]string`。提高了GIN的性能

`GetQuery`方法的底层实现其实是`c.Request.URL.Query().Get(key)`，通过`url.URL.Query()`
来获取所有的参数键值对

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab28a5ec-65a2-4ed5-bfc7-f4c972dc4c8a/Untitled.png)

通过`gin.Default()`生成的`gin.Engine`其实包含一个`RouterGroup`(嵌套组合),所以它可以用`RouterGroup`的方法。

`Group`方法又生成了一个`*RouterGroup`，这里最重要的就是`basePath`,它的值是`group.calculateAbsolutePath(relativePath)`

1.****gin 数据解析和绑定****

客户端传参，后端接收并解析到结构体。

### Lifecycle

Gin-Context 实现了对request和response的封装，是Gin的核心实现之一，学习使用gin框架就是学习使用Context包的过程。内部封装了request 和response 过程中的数据。

**框架启动过程**

**1. New 一个Engine实例**

`app **:=** gin.**Default**()`

**2. 注册添加路由、中间件**

你可能会疑惑，为什么这里的路由处理函数要接受一个 gin.Context 类型的参数，是在何时传入的？

**Engine结构体本身发挥的核心功能就是路由处理。**

`app.**GET**("/ping", **func**(c *****gin.Context) {
        c.**JSON**(200, gin.H{
            "message": "pong",
        })
    })`

### 中间件

非业务的需求都是在http请求处理前做一些事情，并且在响应完成之后做一些事情。我们有没有办法使用一些重构思路把这些公共的非业务功能代码剥离出去呢？回到刚开头的例子，我们需要给我们的`helloHandler()`
增加超时时间统计，我们可以使用一种叫`function adapter`的方法来对`helloHandler()`
进行包装：

中间件是一种业务无关的，在正常的的业务handler处理前后的，独立的逻辑处理片段，嵌入在 HTTP 的请求和响应之间。它可以获得 `Echo#Context`
 对象用来进行一些特殊的操作， 比如记录每个请求或者统计请求数。

eg. 一个http请求过程来窥视一番。

当你在浏览器中输入一个网址时，它会通过 DNS 解析到目标服务注册的公网IP地址

请求到达目标服务的 web 反向代理服务器 Tengine 之后，经过一定的过滤转发到目标服务A上

服务A通过 RPC框架 Dubbo 请求服务B的结果做中间计算，并且从 Tair 缓存中读取计算因子，计算结果

服务A接着使用 Druid 通过 TDDL 写入计算结果到 MySQL Master 节点然后返回结果

异步过程中 Canal 通过模拟 Binlog 主从复制的原理，迅速将这条 Binlog 消费并下发到消息队列 RocketMQ

服务C通过 RocketMQ 消费到事件之后，通过配置中心 ConfigServer 拉取到的策略进行对应策略的事件处理。

这个过程中我们使用了一系列的中间件来协同各个微服务完成整个流程，如web反向代理服务器 Tengine、RPC框架 Dubbo、缓存 Tair、[连接池](https://www.zhihu.com/search?q=%E8%BF%9E%E6%8E%A5%E6%B1%A0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1663627873%7D) Driud、数据库代理层 TDDL、Binlog 同步工具 Canal、消息队列 RocketMQ、配置中心 ConfigServer。

中间件可以理解为洋葱穿透。

ZooKeeper是一个[分布式](https://so.csdn.net/so/search?q=%E5%88%86%E5%B8%83%E5%BC%8F&spm=1001.2101.3001.7020)协调服务，它的主要作用是为分布式系统提供一致性服务，提供的功能包括：配置维护、命名服务、分布式同步、组服务等。Kafka的运行依赖ZooKeeper。

*Apache Flink 是一个框架和分布式处理引擎，用于对无界和有界*数据流进行状态计算。Flink 被设计为在*所有常见的集群环境中运行，以内存中的速度*和*任何规模*执行计算。

### kafka

- Kafka 结合了三个关键功能，因此您可以通过一个经过实战考验的解决方案实现端到端的事件流用例：
发布（写入）和订阅（读取）事件流，包括从其他系统持续导入/导出数据。
根据需要持久可靠地存储事件流。
在事件发生时或回顾性地处理事件流。

所有这些功能都以分布式、高度可扩展、弹性、容错和安全的方式提供。 Kafka 可以部署在裸机硬件、虚拟机和容器上，也可以部署在本地和云端。您可以在自行管理 Kafka 环境和使用各种供应商提供的完全托管服务之间进行选择。

服务器：Kafka 作为一个或多个服务器的集群运行，可以跨越多个数据中心或云区域。其中一些服务器形成存储层，称为代理。其他服务器运行 Kafka Connect 以将数据作为事件流持续导入和导出，以将 Kafka 与您现有的系统（如关系数据库以及其他 Kafka 集群）集成。为了让您实现关键任务用例，Kafka 集群具有高度可扩展性和容错性：如果其中任何一个服务器出现故障，其他服务器将接管它们的工作，以确保持续运行而不会丢失任何数据。

客户端：它们允许您编写分布式应用程序和微服务，以并行、大规模和容错方式读取、写入和处理事件流，即使在网络问题或机器故障的情况下也是如此。 Kafka 附带了一些这样的客户端，这些客户端由 Kafka 社区提供的数十个客户端进行了扩充：客户端可用于 Java 和 Scala，包括更高级别的 Kafka Streams 库，用于 Go、Python、C/C++ 和许多其他编程语言以及 REST API。

Events are organized and durably stored in **topics**. Very simplified, a topic is similar to a folder in a filesystem, and the events are the files in that folder. An example topic name could be "payments". Topics in Kafka are always multi-producer and multi-subscriber: a topic can have zero, one, or many producers that write events to it, as well as zero, one, or many consumers that subscribe to these events. Events in a topic can be read as often as needed—unlike traditional messaging systems, events are not deleted after consumption. Kafka's performance is effectively constant with respect to data size, so storing data for a long time is perfectly fine.

Topics are **partitioned**, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. This distributed placement of your data is very important for scalability because it allows client applications to both read and write the data from/to many brokers at the same time. When a new event is published to a topic, it is actually appended to one of the topic's partitions. Events with the same event key (e.g., a customer or vehicle ID) are written to the same partition, and Kafka [guarantees](https://kafka.apache.org/documentation/#semantics) that any consumer of a given topic-partition will always read that partition's events in exactly the same order as they were written.

broker, cluster

c.Next() 之前的操作是在 Handler 执行之前就执行(Authetication；c.Next() 之后的操作是在 Handler 执行之后再执行(总结处理，比如格式化输出、响应结束时间，响应时长计算之类的. if 想要计算这个请求到底花费了多久，就需要先执行下面的中间件和handler，等他们都完成后，再回到 `PrintResponse`
 这个中间件里，进行计时就ok了。 当你打印返回的response body的时候，也是一样的道理，中间件都会比handler先执行，但是没有handler，中间件怎么拿到 response body，这时候就要用到 c.Next() 先去 执行 余下的中间件和 handler，然后再回到我这个中间件里面

**3. 启动Gin框架**

**Run 本质就是将 注册的路由信息engine 绑定到一个 http.Server，然后开始开始监听并处理请求**

`app.**Run**()

**func** (engine *****Engine) **Run**(addr **...string**) (err **error**) {
   **defer** **func**() { **debugPrintError**(err) }()

   address **:=** **resolveAddress**(addr)
   **debugPrint**("Listening and serving HTTP on %s\n", address)
   err = http.**ListenAndServe**(address, engine)
   **return**}`

进入到 golang net/http包 （ListenandServe) ，Hanlder 是一个实现了ServeHTTP方法的类型

API调用过程

**当监听到请求时，gin框架就会衍生一个Context，为它添加上请求相关参数。开一个go程进行处理。**

**1. net\http 创建连接，握手**

****2. gin 框架处理请求核心：ServeHTTP****

```
func (engine*Engine)ServeHTTP(w http.ResponseWriter, req*http.Request) {
    c:= engine.pool.Get().(*Context)
    c.writermem.reset(w)
    c.Request = req
    c.reset()
    engine.handleHTTPRequest(c)
    engine.pool.Put(c)
}
```

## SEO

 - Search engine optimization: the process of making your site better for search engines.

如果您的网站不在 Google 的索引中

虽然 Google 可抓取数十亿个网页，但难免也会遗漏部分网站。造成抓取工具遗漏网站的常见原因如下：

- 此网站未与网络上的其他网站紧密关联
- 您刚刚推出新的网站，Google 还没来得及抓取
- 网站的设计致使 Google 难以有效抓取其中的内容
- Google 在尝试抓取网站时收到了错误消息
- 您的政策阻止 Google 抓取网站

元描述标记很重要，因为 Google 可能会在搜索结果中将其用作网页的摘要。请注意，我们说的是“可能”，因为如果网页中有一段可见文本能很好地匹配用户查询，那么 Google 也可能会选择使用这段文本。最好为每个网页添加元描述标记，以防 Google 找不到要在摘要中使用的恰当文本。

<meta

[网络搜索引擎](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E)通常使用网站具有的**反向链接数**作为确定该网站的搜索引擎排名，受欢迎程度和重要性的最重要因素之一。例如[Google](https://zh.wikipedia.org/wiki/Google)的[PageRank](https://zh.wikipedia.org/wiki/PageRank)系统[[1]](https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%90%91%E9%93%BE%E6%8E%A5#cite_note-1)。[垃圾索引](https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E7%B4%A2%E5%BC%95)（linkspam），即公司试图在其站点上放置尽可能多的入站链接backlinks，而不管源站点的上下文如何。搜索引擎排名的重要性非常高，它被视为在线业务和任何网站的访问者转化率（尤其是在线购物时）的关键参数。博客评论、文章提交、新闻稿发布，社交媒体参与和论坛发布可用于增加反向链接。

DNS 将域名转换为 IP 地址，以便浏览器能够加载互联网资源。

## 跨域

同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，现在所有支持 JavaScript 的浏览器都会使用这个策略。如果缺少了同源策略，浏览器很容易受到 XSS、 CSFR 等攻击。

同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。

浏览器都遵循同源策略，也就是说位于`www.flysnow.org`下的网页是无法访问非`www.flysnow.org`下的数据的

要解决跨域问题的办法有CORS、代理和JSONP

1.

出于安全原因，浏览器限制从脚本发起的跨域 HTTP 请求。例如，`XMLHttpRequest`Fetch [API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)遵循[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一来源请求资源，除非来自其他来源的响应包含正确的 CORS 标头。(XMLHTTP是一组API函数集，可被JavaScript、JScript、VBScript以及其它web浏览器内嵌的脚本语言调用，通过HTTP在浏览器和web服务器之间收发XML或其它数据。XMLHTTP最大的好处在于可以**动态**地更新网页，它无需重新从服务器读取整个网页，也不需要安装额外的插件。该技术被许多网站使用，以实现快速响应的动态网页应用。例如：Google的Gmail服务、Google Suggest动态查找界面以及Google Map地理信息服务。

2.JSONP （动态创建script标签）

JSONP跨域-前端适配，后端配合
前后端同时改造
jsonp原理：img、srcipt，link标签的src或href属性不受同源策略限制，可以用来作为请求，后端接受请求后返回一个回调函数callback，调用前端已经定义好的函数，从而实现跨域请求，如：

$('#btn').click(function(){
var frame = document.createElement('script');
frame.src = '[http://localhost:3000/article-listname=leo&age=30&callback=func](http://localhost:3000/article-listname=leo&age=30&callback=func)';
$('body').append(frame);
});

// 此为回调函数，其中res为后端返回的数据
function func(res){
alert(res.message+res.name+'你已经'+res.age+'岁了');
}
其中， func 这个回调函数命名，需要前后端沟通一致

3.接口代理

通过修改nginx服务器配置实现代理转发
前端修改，后端不用
前端请求 a 地址，设置nginx服务，将 a 地址代理到 b 地址。

如vue项目中可以在 vue.config.js 中设置

**Echo** is a Web pkg of GO,

****

Go官方提供了`database/sql`
包来给用户进行和数据库打交道的工作，`database/sql`
库实际只提供了一套操作数据库的接口和规范，例如抽象好的SQL预处理（prepare），连接池管理，数据绑定，事务，错误处理等等。官方并没有提供具体某种数据库实现的协议支持。

WEB开发中的ORM

ORM的目的就是屏蔽掉DB层，很多语言的ORM只要把你的类或结构体定义好，再用特定的语法将结构体之间的一对一或者一对多关系表达出来。那么任务就完成了。然后你就可以对这些映射好了数据库表的对象进行各种操作，例如save，create，retrieve，delete。至于ORM在背地里做了什么阴险的勾当，你是不一定清楚的。使用ORM的时候，我们往往比较容易有一种忘记了数据库的直观感受。

## casbin

Casbin 是一个强大的、高效的开源访问控制框架，其权限管理机制支持多种访问控制模型。储存RBAC关系中user role的ORM****

Casbin 可以：

1. 支持自定义请求的格式，默认的请求格式为`{subject, object, action}`。
2. 具有访问控制模型model和策略policy两个核心概念。
3. 支持RBAC中的多层角色继承，不止主体可以有角色，资源也可以具有角色。
4. 支持内置的超级用户 例如：`root` 或 `administrator`。超级用户可以执行任何操作而无需显式的权限声明。
5. 支持多种内置的操作符，如 `keyMatch`，方便对路径式的资源进行管理，如 `/foo/bar` 可以映射到 `/foo*`

Casbin 不能：

1. 身份认证 authentication（即验证用户的用户名和密码），Casbin 只负责访问控制。应该有其他专门的组件负责身份认证，然后由 Casbin 进行访问控制，二者是相互配合的关系。
2. 管理用户列表或角色列表。 Casbin 认为由项目自身来管理用户、角色列表更为合适， 用户通常有他们的密码，但是 Casbin 的设计思想并不是把它作为一个存储密码的容器。 而是存储RBAC方案中用户和角色之间的映射关系。

有两个配置文件，`model.conf`和`policy.csv`。 其中，`model.conf`存储了访问模型，`policy.csv`存储了特定的用户权限配置。 Casbin的使用非常精炼。 基本上，我们只需要一个主要结构：**enforcer**。 当构建这个结构时，`model.conf`和`policy.csv`将被加载。

换句话说，要新建一个Casbin执行器，你必须提供一个[Model](https://casbin.org/docs/zh-CN/supported-models)和一个[Adapter](https://casbin.org/docs/zh-CN/adapters)。

**gorm**框架是go的一个数据库连接及交互框架，一般用于连接关系型数据库。

Wire is a dependency inject platform. [di](https://link.zhihu.com/?target=https%3A//github.com/uber-go/dig)g和Facebook的[injec](https://link.zhihu.com/?target=https%3A//github.com/facebookarchive/inject)t，它们都是使用反射机制来实现运行时依赖注入(`runtime dependency injection`)，而wire则是采用**代码生成的方式来达到编译时依赖注入**(`compile-time dependency injection`)。使用反射带来的性能损失倒是其次，更重要的是反射使得代码难以追踪和调试（反射会令Ctrl+左键失效…）。而wire生成的代码是符合程序员常规使用习惯的代码，十分容易理解和调试。

`provider`和`injector`是`wire`的两个核心概念。

> provider: a function that can produce a value. These functions are ordinary Go code.
> 

通过提供`provider`函数，让`wire`知道如何产生这些依赖对象。`wire`根据我们定义的`injector`函数签名，生成完整的`injector`函数，`injector`函数是最终我们需要的函数，它将按**依赖顺序调**用`provider`。

injector中声明wire.build,`wire_gen.go`创建后，您可以通过运行重新生成它`[go generate](https://blog.golang.org/generate)`。****

Bind 函数的作用是为了让接口类型参与 wire 的构建过程。wire 的构建依靠的是参数的类型来组织代码，所以接口类型天然是不支持的。Bind 函数通过将接口类型和实现类型绑定，来达到依赖注入的目的。

eg.

`type Fooer interface{
    HelloWorld() 
}
type Foo struct{}
func (f Foo)HelloWorld(){}

var bind = wire.Bind(new(Fooer),new(Foo))`

这样将 bind 传入 NewSet 或 Build 中就可以将 **Fooer 接口和 Foo 类型绑定**。

这里需要特别注意，如果是 *Foo 实现了 Fooer 接口，需要将最后的 new(Foo) 改成 new(*Foo)

```
var Set = wire.NewSet(
    provideMyFooer,
    wire.Bind(new(Fooer), new(*MyFooer)),
    provideBar)
```

第一个参数`wire.Bind`是指向所需接口类型的值的指针，第二个参数是指向实现接口的类型的值的指针。任何包含接口绑定的集合也必须在提供具体类型的同一集合中具有提供者。

***属性自动注入***

`wire.Struct`函数构造一个结构类型并告诉注入器应该注入哪些字段。注入器将使用字段类型的提供程序填充每个字段。对于生成的结构类型`S`，`wire.Struct`同时提供`S`和`*S`
 提供一项额外的灵活性： 它能适应指针与非指针类型，根据需要自动调整生成的代码。

有时我们不需什么特定的初始化工作， 只是简单地创建一个对象实例， 为其指定属性赋值，然后返回。当属性多的时候，这种工作会很无聊。

`wire.Struct` 可以简化此类工作， 指定属性名来注入特定属性：

```
//. type S struct {
//    MyFoo *Foo
//    MyBar *Bar
//  }
//  var Set = wire.NewSet(wire.Struct(new(S), "MyFoo")) -> inject only S.MyFoo
//  var Set = wire.NewSet(wire.Struct(new(S), "*")) -> inject all fields
```

依赖注入的过程。

### **1. 定义 Injector**

创建`wire.go`文件，定义下你最终想用的实例初始化函数例如`initApp`（即 Injector），定好它返回的东西`*App`，在方法里用`panic(wire.Build(NewRedis, SomeProviderSet, NewApp))`罗列出它依赖哪些实例的初始化方法（即 Provider）/或者哪些组初始化方法（ProviderSet）

### **2. 定义 ProviderSet（如果有的话）**

ProviderSet 就是一组初始化函数，是为了少写一些代码，能够更清晰的组织各个模块的依赖才出现的。也可以不用，但 Injector 里面的东西就需要写一堆。 像这样 `var SomeProviderSet = wire.NewSet(NewES,NewDB)`定义 ProviderSet 里面包含哪些 Provider

### **3. 实现各个 Provider**

Provider 就是初始化方法，你需要自己实现，比如 NewApp，NewRedis，NewMySQL，GetConfig 等，注意他们们各自的输入输出

### **4. 生成代码**

执行 wire 命令生成代码，工具会扫描你的代码，依照你的 Injector 定义来组织各个 Provider 的执行顺序，并自动按照 Provider 们的类型需求来按照顺序执行和安排参数传递，如果有哪些 Provider 的要求没有满足，会在终端报出来，持续修复执行 wire，直到成功生成`wire_gen.go`文件。接下来就可以正常使用`initApp`来写你后续的代码了。

## 协程**Coroutine**

在目前的绝大多数语言中，都是通过加锁等线程同步方案来解决这一困难问题，Go语言却另辟蹊径，它将共享的值通过Channel传递(实际上多个独立执行的线程很少主动共享资源)。在任意给定的时刻，最好只有一个Goroutine能够拥有该资源。数据竞争从设计层面上就被杜绝了。

```
//go 关键字放在方法调用前新建一个 goroutine 并让他执行方法体
go GetThingDone(param1, param2);

//上例的变种，新建一个匿名方法并执行
go func(param1, param2) {
}(val1, val2)

//直接新建一个 goroutine 并在 goroutine 中执行代码块
go {
    //do someting...
}
```

**因为 goroutine 在多核 cpu 环境下是并行的。如果代码块在多个 goroutine 中执行，我们就实现了代码并行。那么问题来了，怎么拿到并行的结果呢？这就得用 channel 了。**

> goroutine（go协程）是由Go runtime管理的轻量级线程。
> 

这句话表明了协程是用户态，因为是由Go runtime管理，而非OS内核管理

并发编程中最常见的例子就是生产者消费者模式，该模式主要通过平衡生产线程和消费线程的工作能力来提高程序的整体处理数据的速度。简单地说，就是生产者生产一些数据，然后放到成果队列中，同时消费者从成果队列中来取这些数据。这样就让生产消费变成了异步的两个过程。当成果队列中没有数据时，消费者就进入饥饿的等待中；而当成果队列中数据已满时，生产者则面临因产品挤压导致CPU被剥夺的下岗问题。

### Channel

它包括三种类型的定义。可选的`<-`
代表channel的方向。如果没有指定方向，那么Channel就是双向的，既可以接收数据，也可以发送数据。

它包括三种类型的定义。可选的`<-`
代表channel的方向。如果没有指定方向，那么Channel就是双向的，既可以接收数据，也可以发送数据。

chan T          // 可以接收和发送类型为 T 的数据
chan<- float64  // 只可以用来发送 float64 类型的数据
<-chan int      // 只可以用来接收 int 类型的数据

`<-`总是优先和最左边的类型结合。(The <- operator associates with the leftmost chan possible)

创建管道`c := make(chan int)`

默认情况下，在另一端准备好之前，发送和接收都会阻塞。这使得 goroutine 可以在没有明确的锁或竞态变量的情况下进行同步。

发动和接收数据应当在并行线上，而不能是串行的，因为发送和接收都会阻塞，如果串行，就会死锁（就是一个一直阻塞在那等对端），但不用为此操心，因为go在执行时候（编译会通过）会报错

select和case的组合可以使哪个管道就绪（对端已阻塞），就读取该管道数据并执行相应case的代码块。

官网译: select 会阻塞，直到条件分支中的某个可以继续执行，这时就会执行那个条件分支。当多个都准备好的时候，会随机选择一个。

- 碰着I/O访问，阻塞了后面所有的计算。空着也是空着，老大就直接把CPU切换到其他进程，让人家先用着。当然除了I\O阻塞，还有时钟阻塞等等。一开始大家都这样弄，后来发现不成，太慢了。为啥呀，一切换进程得反复进入内核，置换掉一大堆状态。进程数一高，大部分系统资源就被进程切换给吃掉了。后来搞出**线程**的概念，大致意思就是，这个地方阻塞了，但我还有其他地方的逻辑流可以计算，这些逻辑流是共享一个地址空间的，不用特别麻烦的切换页表、刷新TLB，只要把寄存器刷新一遍就行，能比切换进程开销少点。
- 如果连时钟阻塞、 线程切换这些功能我们都不需要了，自己在进程里面写一个逻辑流调度的东西。那么我们即可以利用到并发优势，又可以避免反复系统调用，还有进程切换造成的开销，分分钟给你上几千个逻辑流不费力。这就是**用户态线程**。
- 从上面可以看到，实现一个用户态线程有两个必须要处理的问题：一是碰着阻塞式I\O会导致整个进程被挂起；二是由于缺乏时钟阻塞，进程需要自己拥有调度线程的能力。如果一种实现使得每个线程需要自己通过调用某个方法，主动交出控制权。那么我们就称这种用户态线程是协作式的，即是。**协程**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/103c64c8-8d67-412b-b4ee-32e84ba00440/Untitled.png)

非对称加密是为了解决对称加密无法解决的问题。例如，怎么才能保证使用密钥的人是可信的呢？
