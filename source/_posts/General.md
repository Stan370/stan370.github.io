---
title: CS NOTES
date: 2023-10-07 17:43:33
categories: 
- 基础知识
tags:
- 计算机基础
- 编程
- web
- 计算机网络
---

# CS NOTES

UTF-8 能够使用一到四个单[字节](https://en.wikipedia.org/wiki/Byte)（8 位）代码单元对[Unicode](https://en.wikipedia.org/wiki/Unicode)中的所有 1,112,064 [[a]](https://en.wikipedia.org/wiki/UTF-8#cite_note-code-point-count-2)个有效字符[代码点进行编码。](https://en.wikipedia.org/wiki/Code_point)具有较低数值的代码点，往往更频繁地出现，使用较少的字节进行编码。它是为与[ASCII](https://en.wikipedia.org/wiki/ASCII)[向后兼容而](https://en.wikipedia.org/wiki/Backward_compatibility)设计的：Unicode 的前 128 个字符与 ASCII 一一对应，使用与 ASCII 具有相同二进制值的单个字节进行编码，因此有效的 ASCII 文本是有效的 UTF-8 -编码的 Unicode 也是如此。

UTF-8 导致的国际化问题[[7]](https://en.wikipedia.org/wiki/UTF-8#cite_note-Microsoft_GDK-8) [[8]](https://en.wikipedia.org/wiki/UTF-8#cite_note-whatwg-9)比任何替代文本编码都少，并且它已在所有现代[操作系统](https://en.wikipedia.org/wiki/Operating_system)中实现，包括[Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows)和[JSON](https://en.wikipedia.org/wiki/JSON)等标准，其中越来越多的情况是，它是唯一允许的[Unicode](https://en.wikipedia.org/wiki/Unicode)形式。

[UTF-8 是万维网](https://en.wikipedia.org/wiki/World_Wide_Web)（和互联网技术）的主要编码，截至 2023 年，占所有网页的 97.9%，前 10,000 个页面的 99.0% 以上，许多语言的 100 % 。[[9]](https://en.wikipedia.org/wiki/UTF-8#cite_note-W3TechsWebEncoding-10)几乎所有国家和语言都有 95% 或更多的网络使用 UTF-8 编码。

# Electronics

AC和DC是电力学中常见的两种电流类型的缩写。

AC代表交流（Alternating Current），指的是电流的方向和大小周期性地变化。在交流电中，电流的方向会反复改变，正负极性会交替出现。交流电是由电力系统提供的常见电源类型，例如家庭中的电源插座。

DC代表直流（Direct Current），指的是电流在同一方向上持续不变。在直流电中，电流以恒定的方向和大小流动。直流电通常由电池或直流电源提供，如电子设备中的电池或适配器。

笔记本电源通常被称为AC/DC适配器，意味着它可以将来自交流电源（例如墙上插座）的交流电转换为电脑所需的直流电。适配器中的电子元件将交流电转换为电脑所需的直流电源，以便供应电脑的各种组件和充电电池。

The main difference between AC and DC lies in their applications and characteristics. AC is more suitable for long-distance power transmission and is used in most household appliances, lighting systems, and industrial machinery. On the other hand, DC is commonly used in electronic circuits, batteries, and low-voltage applications. Some electronic components, such as transistors and diodes, require DC power to operate correctly.

It's worth noting that the choice between AC and DC depends on the specific requirements of the electrical system or device. While AC is more efficient for long-distance transmission, DC is often more efficient for low-voltage applications and electronic devices due to lower conversion losses. Both AC and DC have their advantages and are used in various applications depending on their specific benefits.

物理信道分为：

1. 有线信道（比如：双绞线、同轴电缆、光纤、等等）

2. 无线信道（比如：微波通讯、电台广播、卫星通讯、等等）

3. 存储信道

信道的工作模式。大致可以分为如下三种。为了让大伙儿比较好理解，俺对每一种都举相应的例子。

**单工（simplex）**

比如“电台广播”就是典型的【单工】。“电台”可以发信号给“收音机”，但“收音机”【不能】发信号给“电台”。

**半双工（half-duplex）**

比如“单条铁路轨道”，就是典型的【半双工】。火车在单条铁轨上，可以有两种运行方向；但对于同一个瞬间，只能选其中一个方向（否则就撞车了）。

**全双工（full-duplex）**

比如“光纤”就是典型的【全双工】。在同一根光导纤维中，可以有多个光束【同时相向】传播，互相不会干扰对方。

如今家庭宽带普及，光纤入户，modem 面对的物理介质是“光纤线路”。

**[中继器](https://en.wikipedia.org/wiki/Repeater)（repeater）**

信号在物理介质中传输，会出现【衰减】（不论是“有线 or 无线”都有可能衰减）。“中继器”的作用是【信号增益】，使得信号能传得更远。

另外，比如“微波通讯”是直线传播，而地球表面有弧度，还有地形的起伏。所以每隔一定距离要建“微波塔”。这玩意儿也相当于“中继器”。

# Questions

Localhost 会按[dns解析流程进行解析](https://plantegg.github.io/2019/06/09/%E4%B8%80%E6%96%87%E6%90%9E%E6%87%82%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98/)，然后和127.0.0.1 一样。在特殊的程序中比如MySQL 命令行会对localhost提前做特别处理。

证明，n 枚硬币中一定有一枚假币，要用 k 次普通天平找出这枚假币，则问题有解的充分必要条件是 n ≤ 3k。

必要性很容易说明，其核心思路本文一开始就已经说过了：每使用一次天平，会产生三个分支剧情；使用 k 次天平，一共会产生 3k 个不同的结局。这只够区分 3k 个不同的可能性。然而，究竟谁是假币，这一共有 n 种不同的可能性。所以，n 不能超过 3k。

用老鼠测试100瓶药一瓶是毒药，喝下去一滴就死，假设一只最多喝100瓶，最少需要几只老鼠可以找出毒药？其实这个问题答案很简单，我们只需要**7只小白鼠**就够了，而这个问题的解题关键就是数学编码中的二进制。

1、首先，”100瓶药水其中有1瓶有毒“这个随机变量X的信息熵为：log100 = 6.64

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6d96db6-808e-4b37-9e02-51b7a4ac447c/Untitled.png)

1. 菜鸟： 多线程如何实现 继承Thread方法 implements Runnable
2. 线程池创建和销毁
3. 设计模式
4. 缓存 一致性怎么达成
5. 索引的优缺点

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74c0fd31-5857-455d-892c-565f24f2034f/Untitled.png)

全连接队列、半连接队列溢出这种问题很容易被忽视，但是又很关键，特别是对于一些短连接应用（比如Nginx、PHP，当然他们也是支持长连接的）更容易爆发。 一旦溢出，从cpu、线程状态看起来都比较正常，但是压力上不去，在client看来rt也比较高（rt=网络+排队+真正服务时间），但是从server日志记录的真正服务时间来看rt又很短。

另外就是jdk、netty等一些框架默认backlog比较小，可能有些情况下导致性能上不去

Linux内核引入全连接队列、半连接队列。服务端收到客户端发起的 SYN 请求后，**内核会把该连接存储到半连接队列**，并向客户端响应 SYN+ACK，接着客户端会返回 ACK，服务端收到第三次握手的 ACK 后，**内核会把连接从半连接队列移除，然后创建新的完全的连接，并将其添加到 accept 队列，等待进程调用 accept 函数时把连接取出来。**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/fb41ee28-492b-4af3-a4b2-7ea72c21bd5b/Untitled.png)

**第三次握手是可以携带数据的，前两次握手是不可以携带数据的**

“三次握手”：为了对每次发送的数据量进行跟踪与[协商](https://baike.baidu.com/item/%E5%8D%8F%E5%95%86/6116011?fromModule=lemma_inlink)，确保数据段的发送和接收同步，根据所接收到的数据量而确认数据发送、接收完毕后何时[撤消](https://baike.baidu.com/item/%E6%92%A4%E6%B6%88/4188145?fromModule=lemma_inlink)联系，并建立虚连接

**为什么要采用三次握手，两次不行吗**

相信大家比较常回答的是：“因为三次握手才能保证双方具有接收和发送的能力。” 这回答是没问题，但这回答是片面的，并没有说出主要的原因。

在前面我们知道了什么是 **TCP 连接**：

- 用于保证可靠性和流量控制维护的某些状态信息，这些信息的组合，包括 **Socket、序列号和窗口大小**称为连接。

所以，重要的是**为什么三次握手才可以初始化 Socket、序列号和窗口大小并建立 TCP 连接。**

接下来，以三个方面分析三次握手的原因：

- **三次握手才可以阻止重复历史连接的初始化（主要原因）**

TCP 使用三次握手建立连接的最主要原因就是防止「历史连接」初始化了连接。**在两次握手的情况下，服务端没有中间状态给客户端来阻止历史连接 直接进入Established状态，导致服务端可能建立一个历史连接，造成资源浪费。**

- **三次握手才可以同步双方的初始序列号**
- **三次握手才可以避免资源浪费**

RFC规范里 服务端通常需要等待完成数据的发送和处理，所以服务端的 `ACK` 和 `FIN` 一般都会分开发送，因此是需要四次挥手。

当被动关闭方（上图的服务端）在 TCP 挥手过程中，「**没有数据要发送」并且「开启了 TCP 延迟确认机制」，那么第二和第三次挥手就会合并传输，这样就出现了三次挥手。**

TCP fast open 可以在「第二次建立连接」时减少 TCP 连接建立的时延。过程如下：

- 在第一次建立连接的时候，服务端在第二次握手产生一个 `Cookie` （已加密）并通过 SYN、ACK 包一起发给客户端，于是客户端就会缓存这个 `Cookie`，所以第一次发起 HTTP Get 请求的时候，还是需要 2 个 RTT 的时延；
- 在下次请求的时候，客户端在 SYN 包带上 `Cookie` 发给服务端，就提前可以跳过三次握手的过程，因为 `Cookie` 中维护了一些信息，服务端可以从 `Cookie` 获取 TCP 相关的信息，这时发起的 HTTP GET 请求就只需要 1 个 RTT 的时延；

TCP Fast Open 这个特性是不错，但是它需要服务端和客户端的操作系统同时支持才能体验到，而 TCP Fast Open 是在 2013 年提出的，所以市面上依然有很多老式的操作系统不支持，而升级操作系统是很麻烦的事情，因此 TCP Fast Open 很难被普及开来。还有一点，针对 HTTPS 来说，TLS 是在应用层实现的握手，而 TCP 是在**内核实现**的握手，这两个握手过程是无法结合在一起的，总是得先完成 TCP 握手，才能进行 TLS 握手。

**TCP 如何保证可靠性？**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/58c042b4-08fd-4a8a-aafc-367bd26f398f/Untitled.png)

TCP主要提供了检验和、序列号/确认应答、超时重传、最大消息长度、滑动窗口控制等方法实现了可靠性传输。

**面向字节流：** TCP将数据视为字节流，而不是独立的数据包。这意味着数据可以被分割成任意大小的数据块，并且**不需要按原始数据包的顺序接收**。

如果我们考虑实际网络传输过程中的各种影响，假设发送端陆续调用 send 函数先后发送 「Hi.」和「I am Xiaolin」 报文，那么实际的发送很有可能是这几种情况。 第一种情况，这两个消息被分到同一个 TCP 报文，

第二种情况，「I am Xiaolin」的部分随 「Hi」 在一个 TCP 报文中发送出去，像这样： 图片 第三种情况，「Hi.」 的一部分随 TCP 报文被发送出去，另一部分和 「I am Xiaolin」 一起随另一个 TCP 报文发送出去，像这样。

> 为什么 UDP 是面向报文的协议？
> 

当用户消息通过 UDP 协议传输时，**操作系统不会对消息进行拆分**，在组装好 UDP 头部后就交给网络层来处理，所以发出去的 UDP 报文中的数据部分就是完整的用户消息，也就是**每个 UDP 报文就是一个用户消息的边界**，这样接收方在接收到 UDP 报文后，读一个 UDP 报文就能读取到完整的用户消息。

**屏蔽“有连接 or 无连接”的差异  网络层的定位是“抽象物理层和数据链路层，提供端到端”的通信能力。**当网络部署全世界的时候，最初的设计者认为网络重路由、乱序的概率，很容易会高过了有连接服务能够容忍的概率。毕竟，有连接服务要先付出代价“建立连接”来换取“通信过程中的高效”。一旦遇到网络重路由或者乱序，就要重新付出“建立连接”的代价。**尽管网络层本身是无连接和不可靠的，但上层协议，如传输层的TCP，可以提供可靠性和连接性，以确保数据的正确传输和顺序。**这种分层的设计有助于网络的模块化，不同层次可以独立开发和升级，从而促进了互联网的增长和演进。

Mysql**表格设计**？

平衡范式与冗余(效率优先；往往牺牲范式)拒绝3B(拒绝大[sql语句](https://so.csdn.net/so/search?q=sql%E8%AF%AD%E5%8F%A5&spm=1001.2101.3001.7020)：big sql、拒绝大事务：big transaction、拒绝大批量：big batch);

第一范式（1NF）是指数据库表的**每一列都是不可分割的基本数据项**，同一列中不能有多个值，即实体中的某个属性不能有多个值或者不能有重复的属性。如果出现重复的属性，就可能需要定义一个新的实体，新的实体由重复的属性构成，新实体与原实体之间为一对多关系。在第一范式（1NF）中表的每一行只包含一个实例的信息。简而言之，第一范式就是无重复的列。

说明：在任何一个关系数据库中，第一范式（1NF）是对关系模式的基本要求，**不满足第一范式（1NF）的数据库就不是关系数据库。**

第一范式存在问题：冗余度大、会引起修改操作的不一致性、数据插入异常、数据删除异常。

先建立索引或者分区，然后再查询

**判断循环链表** 原链表反向啊，构造双向链表，快慢指针

序列化过程中的无限递归错误?            遇到序列化过程中的无限递归错误通常是由于对象之间存在循环引用而导致的。比如，对象A引用了对象B，而对象B又引用了对象A，这样的情况可能导致无限递归序列化。

在应用解耦、流量削峰等场景下常需要用到消息队列，生产者不断生产消息投递到队列里面，不必等待消费者消费；消费者从队列里面取消息进行处理，不需要找生产者要数据；这就是典型的生产者消费者模式，平衡了生产者消费者的处理能力，达到了解耦的目的。

当面试中被问“你了解那些设计模式”的时候，只回答一个单例模式未免显得有点不够专业，多了解一下效果可能会稍好一点。和单例模式对比，生产者消费者模式实现也比较简单，适合手写；对于其中的细节又可以再挖掘。

不多叨叨了，本文就自己实现一个阻塞队列，然后创建生产者和消费者，来实现一个简单的生产者消费者模式。

1. 生产者在队列未满时一直生产，满了则停止生产；
2. 消费者在队列不为空的时候一直消费，空了则停止消费；
3. 当消费者发现队列里面没有消息了通知生产者生产；
4. 当生产者生产了消息通知消费者消费。

1.eg大量外部数据排序怎么做， 堆排序、桶排序、归并排序的实现

**大数据小内存排序问题**，很经典，很常见，类似的还有比如 “如何对上百万考试的成绩进行排序” 等等。

归并排序可以采用自底向上的迭代方式进行合并，每次将相邻的两个小数组合并成一个更大的有序数组，直到整个数组被合并成一个大的有序数组。在这个过程中，可以将每个小数组看作是完全二叉树中的一棵子树，利用完全二叉树的特性进行合并

大数据检索**三种方法：**

- 数据库排序（对数据库设备要求较高）
- 分治法（常见思路）
- 位图法（Bitmap）

2.排序的稳定性是什么

3.协程和线程池，加不加锁

4.线程和进程，OS的线程与JVM的线程一一对应，并行与并发

5.Servlet Springboot关系

6.Java的泛型，作用是什么？源码

7.反射和注解

8.数据库事务，索引是什么

9.解释java传递实参的引用时为什么是值传递？

布隆过滤器的原理是，当一个元素被加入集合时，通过K个[散列函数](https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97%E5%87%BD%E6%95%B0)将这个元素映射成一个位[数组](https://zh.wikipedia.org/wiki/%E6%95%B0%E7%BB%84)中的K个点，把它们置为1。检索时，我们只要看看这些点是不是都是1就（大约）知道集合中有没有它了：如果这些点有任何一个0，则被检元素一定不在；如果都是1，则被检元素很可能在。这就是布隆过滤器的基本思想。本质上布隆过滤器是一种数据结构，比较巧妙的**概率型数据结构**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd61e62f-ef22-41d0-b442-5b73db829919/Untitled.png)

布隆过滤器（Bloom Filter）可以用于**去重**操作，它可以高效地判断一个元素是否已经存在于一个集合中，从而避免重复添加相同的元素。在添加元素之前，首先使用布隆过滤器来检查该元素是否已经存在于集合中。如果布隆过滤器返回 "可能存在"，则可以进一步进行精确的去重检查。如果布隆过滤器返回 "一定不存在"，则可以安全地将该元素添加到集合中，因为它肯定不会导致重复。

选择布隆过滤器还是位图取决于具体的应用需求，如果需要高效地**过滤**掉一部分元素，布隆过滤器是一个不错的选择；如果需要精确查询元素是否存在，位图更适合。

## Bitmap

BitMap算法的核心思想是用bit数组来记录0-1两种状态，然后再将具体数据映射到这个比特数组的具体位置，这个比特位设置成0表示数据不存在，设置成1表示数据存在。

BitMap算在在**大量数据查询、去重**等应用场景中使用的比较多，这个算法具有比较高的空间利用率。

使用Bitmap也是快速确定大量正整数中给定数字是否存在的可行选择。位图是一种将元素集合表示为位的数据结构，其中每个位代表特定元素的存在或不存在。

以下是如何使用位图来解决检查十亿个唯一正整数中是否存在某个数字的问题：

1. **初始化：**创建一个位图（位数组），其大小可以容纳您正在处理的正整数范围（例如，如果您的数字在 1 到 10^9 的范围内，则创建一个具有 10^9 的位图位）。将所有位初始化为 0。
2. **设置位：**对于正整数集中的每个数字，将位图中的相应位设置为 1。
3. **检查存在：**要检查给定的数字是否存在，只需检查位图中的相应位即可。如果该位为1，则该数存在于集合中；如果为0，则该数字不在集合中。

比hashmap占用空间少，用于elasticsearch，redis

如果我们需要记录某一用户在一年中每天是否有登录我们的系统这一需求该如何完成呢？如果使用[KV存储](https://www.zhihu.com/search?q=KV%E5%AD%98%E5%82%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22480386998%22%7D)，每个用户需要记录365个，当用户量上亿时，这所需要的存储空间是惊人的。

**Redis 为我们提供了位图这一[数据结构](https://www.zhihu.com/search?q=%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22480386998%22%7D)，每个用户每天的登录记录只占据一位，365天就是365位，仅仅需要46字节就可存储，极大地节约了存储空间。**

JVM内存模型， 储存在栈的对象引用指向堆中的对象；jVM传形参时会在**栈中创建一个新的对象**，每当引用类型作为参数传递时，都会创建一个对象引用（实参）的副本（形参），该形参保存的地址和实参一样。Java中其实还是值传递的，只不过对于对象参数，值的内容是对象的引用。

Springboot 注解， **多线程池 锁LOCK**，synchronized， 多线程(同时启动10个线程 结束时 信号量)

mysql  隔离级别       redis

Array[] 与 ArrayList的区别
LinkedList ArrayList  O(n)
HashMap , HashSet

+128原码是1000 0000，反码是0111 1111，补码是0111 1111+1=1000 0000表示-128   整型int -128到127

同时启动10个线程，如何保证子线程全部结束再去执行主线程

线程的同时启动，常见的有两种方式控制，在jdk1.5的版本下就有这两种控制类：CyclicBarrier 和CountDownLatch。

ThreadPoolExecutor

1.thread.join，2. [信号量](https://so.csdn.net/so/search?q=%E4%BF%A1%E5%8F%B7%E9%87%8F&spm=1001.2101.3001.7020)CountDownLatch等等          3.线程池ThreadPoolExecutor的shutdown与awaitTermination方法

****工作原理****

1. 初始化阶段：线程池被创建时，会初始化一定数量的线程，并将它们放入池中等待任务。
2. 提交任务：当有任务需要执行时，将任务提交至线程池。线程池会将任务放入任务队列中等待执行。
3. 线程执行任务：空闲线程从任务队列中获取任务并执行。如果没有可用的空闲线程，任务可能会等待，或者线程池会创建新的线程来处理任务。
4. 任务执行完成：任务执行完毕后，线程将结果返回给调用者，然后线程重新变为可用状态，等待下一个任务。
5. **无效连接请求**：无效连接请求是指未经授权或不存在的主机或服务尝试建立连接。这可能是由恶意攻击者伪造的连接请求，也可能是过时的连接请求，由于网络延迟或其他问题而导致被错误地处理。
6. **拒绝服务攻击**：拒绝服务（DoS）攻击是指恶意行为者试图通过发送大量的连接请求来超负荷服务器，从而使其无法正常提供服务。这种攻击会导致合法用户无法访问服务器。
7. **半开连接**：半开连接是指在TCP三次握手的过程中，连接的一方在握手过程中的某一步中断，导致连接处于不稳定状态。这可能会占用服务器资源，同时也可能导致通信问题。
8. **网络错误**：网络错误，如断网、网络延迟、丢包等，都可能导致连接在建立或传输过程中发生问题，从而造成错误连接。
9. **过时连接状态**：如果连接状态没有得到适时清理或更新，服务器可能会在一段时间后认为某个连接仍然有效，尽管实际上已经失效。这可能导致资源的浪费。
10. **恶意连接**：恶意连接是指由攻击者创建的连接，可能旨在获取未经授权的访问、传播恶意软件或进行其他恶意行为。

**HTTPS是如何保证安全传输的？**

https通过使⽤[对称加密](https://baike.baidu.com/item/%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86)、 [⾮对称加密](https://baike.baidu.com/item/%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86)、 [数字证书](https://baike.baidu.com/item/%E6%95%B0%E5%AD%97%E8%AF%81%E4%B9%A6/326874?fr=aladdin)**等⽅式来保证数据的安全传输。客户端向服务端发送数据之前，需要先建⽴**[TCP](https://baike.baidu.com/item/TCP/33012?fr=aladdin)连接，所以需要先建⽴TCP连接，建⽴完TCP连接后， 服务端会先给客户端发送公钥，客户端拿到公钥后就可以⽤来加密数据了，服务端到时候接收到数据就可以⽤私钥解密数据，这种就是通过⾮对称加密来传输数据。Client收到server key exchange公钥后发送client key exchange（与主密钥）通过**⾮对称加密**的⽅式来传输对称加密的秘钥， 通信建立后使用对称加密传输数据减少开销

HTTP1.1 第一个标准版本，核心一次一份

HTTP 帧现在对 Web 开发人员是透明的。在 HTTP/2 中，这是一个在 HTTP/1.1 和底层传输协议之间附加的步骤。Web 开发人员不需要在其使用的 API 中做任何更改来利用 HTTP 帧；当浏览器和服务器都可用时，HTTP/2 将被打开并使用。

**HTTP/2.0（HTTP/2）：**

HTTP/2 是 HTTP/1.1 的后续版本，于 2015 年 5 月实现标准化。它引入了几项关键改进：

1. **多路复用**：在 HTTP/1.1 中，请求和响应是按顺序处理的，导致队头阻塞问题。HTTP/2 使用多路复用，允许在单个连接上同时发送和接收多个请求和响应。这可以提高性能并减少延迟。
2. **标头压缩**：HTTP/2 使用 HPACK 压缩来减少请求和响应中标头字段的开销，从而进一步提高效率。
3. **服务器推送**：服务器可以在客户端请求资源之前主动将资源推送到客户端的缓存。这可以显着加快页面加载时间。
4. **流优先级**：HTTP/2 允许对请求进行优先级排序，从而可以更快地加载更重要的资源。
5. **二进制协议**：HTTP/2 是一种二进制协议，与 HTTP/1.1 基于文本的协议相比，它的解析和生成效率更高。

**HTTP/3：**

HTTP/3 是 HTTP 协议的最新版本，基于 Google 的 QUIC（快速 UDP 互联网连接）协议。它旨在通过解决基于 TCP 的协议（如 HTTP/1.1 和 HTTP/2）的一些限制来进一步提高性能。HTTP/3 的主要特性包括：

1. **多路复用和并发**：与 HTTP/2 一样，HTTP/3 支持多路复用以允许并发多个请求和响应。然而，它使用 UDP 而不是 TCP，这可以进一步减少延迟。
2. **减少队头阻塞**：HTTP/3 底层的 QUIC 协议旨在最大限度地减少基于 TCP 的协议可能出现的队头阻塞问题。
3. **改进的安全性**：QUIC 提供内置加密，默认情况下更加安全。
4. **连接迁移**：HTTP/3 允许连接在网络之间迁移而不丢失，这对于在 Wi-Fi 和蜂窝网络之间切换的移动设备特别有利。
5. **高延迟环境中的更好性能**：HTTP/3 针对高延迟网络条件（例如移动网络或卫星连接）下的性能进行了优化。

QUIC (Quick UDP Internet Connections) is a transport layer network protocol developed by Google. It was designed to improve upon some of the limitations of TCP (Transmission Control Protocol) and TLS (Transport Layer Security) to provide faster and more secure communication over the Internet. Here are some key features and characteristics of QUIC:

1. **Low Latency:** QUIC is designed to reduce latency in communication. It achieves this by combining the features of both transport and security layers into a single protocol, reducing the round trips needed to establish a connection.
2. **Multiplexing:** QUIC supports multiplexing, which allows multiple streams of data to be sent over a single connection. This feature reduces head-of-line blocking issues and enables more efficient use of network resources.
3. **Connection Migration:** QUIC connections are designed to be mobile-friendly. They can migrate between different network interfaces or IP addresses without dropping the connection. This is especially useful for mobile devices that switch between Wi-Fi and cellular networks.
4. **Encryption:** QUIC mandates encryption by default, using the Datagram Transport Layer Security (DTLS) protocol. This ensures that data exchanged over QUIC connections is secure.
5. **Adaptive Congestion Control:** QUIC includes built-in congestion control mechanisms to adapt to network conditions dynamically.
6. **Fast Handshake:** QUIC has a faster handshake process compared to TCP/TLS, which reduces the time needed to establish a secure connection.
7. **Forward Error Correction (FEC):** QUIC can use FEC to recover lost or corrupted packets, reducing the need for retransmissions and improving reliability.
8. **HTTP/3:** HTTP/3 is built on top of QUIC, replacing the older HTTP/2. This combination further improves web performance by reducing latency and providing better multiplexing capabilities.

Google值得注意的是，QUIC 可以通过 UDP 运行，这使得它能够绕过一些与 TCP 相关的拥塞控制和中间盒问题。然而，UDP的使用也带来了防火墙和网络配置方面的挑战，这些在部署基于QUIC的服务时需要考虑。

# Crypto

**double DES has the security level of a 57-bit key.   AES only supports a 128-bit block size**

When the sender sends their public key, the attacker substitutes their own public key. • The receiver believes that public key belongs to the sender and encrypts using it.

For example, if you want to establish an encrypted connection with someone over the internet, you need a way to verify that the public key you are using to establish the connection actually belongs to the person you think it does. Without **a certificate**, you might be vulnerable to a man-in-the-middle attack, where an attacker intercepts your connection and provides you with their own public key, pretending to be the person you are trying to connect with. With a certificate, you can verify the identity of the person you are communicating with by checking the certificate against a trusted list of CA's.

Prevention:

A certificate (X.509) contains a public key. It is signed with

the private key of the “trusted” authority

Playfair:

首先该密码需要秘钥，与，然后由秘钥制作相应的密码表。秘钥去重后,将秘钥依次填入5x5表格(先填纵列)，剩下的格子友a-z依次填入，如果前面遇到秘钥中的字母就跳过，将i和j放在同一个格子。如：秘钥是linux, 填成的密码表为：

l	a	f	o	t
i/j	b	g	p	v
n	c	h	q	w
u	d	l	r	y
x	e	m	s	z
在构建好密码表后，将待加密的明文分为两个一组，同时要保证每组的两个字符不相同，如果相同，则在其中间插入一个x获取q，在进行分组。如果最后还有一个字符单着，则添加一个x。

分好组后，依次拿出每个组，根据密码表对其加密，加密规则如下:

如果该组的两个字符在密码表的同一行，则密文分别是其紧靠着的右边这个字符。其中第一列被看做是最后一列的右方。
如果该组的两个字符在密码表的同一列，则密文分别是其紧靠着的下边这个字符。之中第一行被看做是最后一行的下方。
如果该组的两个字符即不再同一行，又不在同一类，则密文是其组成的长方形的另外两个顶点（至于横向替换还是纵向替换，这需要双方沟通好）。

加密算法思想：正向简单 逆向困难

Diffie和Hellman虽然提出了公钥密码体制的概念，但是很遗憾，他们没有提出一种[公钥加密算法](https://www.zhihu.com/search?q=%E5%85%AC%E9%92%A5%E5%8A%A0%E5%AF%86%E7%AE%97%E6%B3%95&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2220354745%22%7D)
，而是提出一种密钥协商协议，史称Diffie-Hellman[密钥协商协议](https://www.zhihu.com/search?q=%E5%AF%86%E9%92%A5%E5%8D%8F%E5%95%86%E5%8D%8F%E8%AE%AE&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2220354745%22%7D).

ECDHE 表示 "Elliptic Curve Diffie-Hellman Ephemeral"，是一种密钥交换协议，用于在加密通信中安全地协商密钥。

这种协议结合了椭圆曲线加密（ECC）和 Diffie-Hellman 密钥交换算法。ECDHE 允许通信双方在没有事先共享密钥的情况下协商出一个对称密钥，用于保护它们之间的加密通信。

EG. Here is an example of the Diffie Hellman protocol, with non-secret values in blue, and secret values in **red**. Alice bob做菜 混颜色 私钥 公钥

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72bd4ca1-4693-4202-8916-0f26480a9385/Untitled.png)

RSA算法的安全性在于，我们有一个大合数n = pq，其中p和q都是特别大的质数（现在要求差不多150位十进制），如果只给定这个大合数n的话，人们还没找到一个比较高效的算法，在只知道n的条件下，算出n到底是哪两个质数相乘得来的。

1. **非对称加密：** RSA 是一种非对称加密算法，公钥用于加密，私钥用于解密。这种特性使得安全通信成为可能。
2. **数字签名：** RSA 可用于数字签名，确保消息的完整性和验证消息发送方的身份。

**如果两个质数选的满足了一定的条·件，那么很可能你自己实现的RSA就容易被破解。**

**谁知道私钥d，谁就能分解整数n。所以我们不能对不同的用户使用相同的n，否则这两个用户可以分别互相算出对方的私钥。**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a970f899-3d1f-4b03-90eb-5f027129ea1e/Untitled.png)

|  | ECC | RSA |
| --- | --- | --- |
| Key length
 | 256 bit | 2048 bit |
| CPU&Memory usage | low | high |
| Network consumption
 | low | high |
| Cracking difficulty
 | difficult to crack | difficult to crack, but easier than ECC in theory |
| Anti aggression
 | strong | average |
| Encryption efficiency
 | high | average |

t

在[数论](https://zh.wikipedia.org/wiki/%E6%95%B8%E8%AB%96)中，对正[整数](https://zh.wikipedia.org/wiki/%E6%95%B4%E6%95%B8)*n*，**欧拉函数φ(n)**是小于或等于*n*的正整数中与*n*[互质](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%B3%AA)的数的数目。此[函数](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0_(%E6%95%B0%E5%AD%A6))以其首名研究者[欧拉](https://zh.wikipedia.org/wiki/%E6%AD%90%E6%8B%89)命名，它又称为**[φ函数](https://www.zhihu.com/search?q=%CF%86%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22151756874%22%7D)**（由[高斯](https://zh.wikipedia.org/wiki/%E5%8D%A1%E7%88%BE%C2%B7%E5%BC%97%E9%87%8C%E5%BE%B7%E9%87%8C%E5%B8%8C%C2%B7%E9%AB%98%E6%96%AF)所命名）或是**欧拉总计函数**（totient function，由[西尔维斯特](https://zh.wikipedia.org/wiki/%E8%A9%B9%E5%A7%86%E6%96%AF%C2%B7%E7%B4%84%E7%91%9F%E5%A4%AB%C2%B7%E8%A5%BF%E7%88%BE%E7%B6%AD%E6%96%AF%E7%89%B9)所命名）。

例如φ(8) = 4

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59c20d50-0e29-4776-b16d-9d61e98aaa85/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cfdaa0b-d387-44b2-a5d6-d8ff4aa4def6/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a896d3cc-c1ba-4a08-94f5-ff398f1bb450/Untitled.png)

**快速幂**            计算a的n次方，如果n是偶数（不为0），那么就**先计算a的n/2次方，然后平方**；如果n是奇数，那么就**先计算a的n-1次方，再乘上a**；递归出口是**a的0次方为1**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bf185c04-43cb-4363-8b33-a5e17fdfa1a7/Untitled.png)

### MITM

单独说DH协商算法不能防止中间人没有意义。因为密钥协商算法要解决的是在不可靠链路上安全地协商密钥。而通信双方身份认证又是另外一个体系的东西。

MITM:

1. 服务器向客户端发送公钥。
2. 攻击者截获公钥，保留在自己手上。
3. 然后攻击者自己生成一个【伪造的】公钥，发给客户端。
4. 客户端收到伪造的公钥后，生成加密hash值发给服务器。
5. 攻击者获得加密hash值，用自己的私钥解密获得真秘钥。
6. 同时生成假的加密hash值，发给服务器。
7. 服务器用私钥解密获得假秘钥。
8. 服务器用加秘钥加密传输信息

可以看出我们这里数据是明文传输的，存在窃听风险。但是我们为了阐述数字签名机制是如何运转的，故意将保证信息机密性的机制省略了。

如果想要保证数据的机密性，我们常见的做法是，通信双方通过非对称加密安全交换对称加密的密钥，后续通信过程的数据都使用对称加密保证数据机密性。

并且「签名」的作用本身也不是用来保证数据的机密性，而是用于验证数据来源的防止数据被篡改的，也就是确认发送者的身份。接受者 Alice 收到后，取下数字签名，同时用 Bob 的公钥解密，得到「摘要1」，**证明确实是 Bob 发的**。

再对邮件内容使用相同的散列函数计算「摘要2」，与上面得到的「摘要1」进行对比，**两者一致就说明信息未被篡改。**

## 求模运算的规律

```
(a + b) % p = (a % p + b % p) % p
(a - b) % p = (a % p - b % p + p) % p
(a * b) % p = (a % p * b % p) % p
	a ^ b % p = ((a % p)^b) % p
```

Have an Authentication Server (AS) – Users initially negotiate with AS to identify self – AS provides a non-corruptible authentication credential (ticket granting ticket TGT) 

• Have a Ticket Granting server (TGS) – Users subsequently request access to other services from TGS on basis of users TGT

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bf60a37-5408-4cea-ba17-884f73376d05/Untitled.png)

MD5 的作用是让大容量信息在用数字签名软件签署私人密钥前被"压缩"成一种保密的格式（就是把一个任意长度的字节串变换成一定长的十六进制数字串）。
MD5 其实在我们生活中是很常用的，似乎你并没有注意到，当你下载了一个镜像之后，你会发现下载页面还提供了一组 MD5 值，那么这组 MD5 值是用来做什么的呢？了解了 MD5 的作用之后，你就不难想到，MD5 是用来验证文件的一致性的，当你下载好镜像之后，你需要对该镜像做一次 MD5 的校验，得到的 MD5 值与下载页面提供的 MD5 值进行对比，以此来验证该镜像是否被篡改。
MD5算法，可以用来保存用户的密码信息。为了更好的保存，可以在保存的过程中，加入盐。/在保存用户密码的时候，盐可以利用生成的随机数。可以将密码结合MD5加盐，生成的数据摘要和盐保存起来 。以便于下次用户验证使用。在用户表里面，也保存salt。

# Network

[Network](https://www.notion.so/Network-0f2eb35096e24240abe436dd0a5c508e?pvs=21)

**DNS**是互联网基础设施的重要组成部分，它使用户能够轻松地访问网站，同时允许网站拥有灵活的服务器架构，因为它们可以更改其IP地址而不会影响用户的访问。这个过程通常在背后快速完成，使用户可以快速访问他们想要的网站，而无需手动输入IP地址。

DNS污染，又称为域名服务器缓存污染(DNS cache pollution)或者域名服务器快照侵害(DNS cache poisoning)

DNS污染是指一些刻意制造或无意中制造出来的域名服务器分组，把域名指往不正确的[IP地址](https://www.boce.com/ip)。一般来说，网站在互联网上一般都有可信赖的域名服务器，但为减免网络上的交通，一般的域名都会把外间的域名服务器数据暂存起来，待下次有其他机器要求解析域名时，可以立即提供服务。一旦有相关网域的局域域名服务器的缓存受到污染，就会把网域内的电脑导引往错误的服务器或服务器的网址。

**本地电脑的dns是最高优先级**，也就是说如果你电脑的dns设置跟其他2个不一样，那么当你访问网站的时候，是自动遵循你电脑的dns路线的。第二优先级的是路由器的dhcp的dns，如果你电脑端的dns没有设置=自动获取的话，这里获取的首先就是dhcp的dns，如果你电脑端和dhcp都没有设置dns，都是默认的话，使用的就是wan端口的dns，这样说大家都明白了吧，所以一般wan口的dns都是会自动获取到电信分配的dns的，即便是你路由器的dhcp和电脑端的dns都不设置都是可以正常上网的，当然你如果要防止dns劫持，那么你只需要在你电脑端设置一个安全的dns就行了。

专业点的说法就是WAN 端口的 DNS 服务器从ISP电信运营商获取，路由器向之发送域名解析请求；

DHCP 的 DNS 服务器可以自主设置或者继承WAN的DNS服务器，所有自动获取DNS服务器的连接设备向之发送域名解析请求； 所以上网使用域名解析时使用上面3个dns服务器的优先级循序：本机电脑的dns服务器--->路由器中的dhcp服务器中的dns服务器--->路由器中的wan口中的dns服务器。这3个服务器中只要有一个设置了都能保证上网的域名解析，
另外，你设备上，例如Windows也可以在网络连接上自主设置DNS服务器，或者接受DHCP服务器分配的DNS服务器，本地受用。

### **DHCP**

第一步：Client通过广播（broadcast）发送DHCP Discover 报文，Look for服务器端

第二步：Server通过单播（unicast）发送DHCP Offer 报文向客户端提供IP地址等网络信息

第三步：Client通过广播**DHCP Request 报文告知服务器端本地选择使用哪个IP地址**

第四步：Server通过DHCP Ack报文告知客户端IP地址是合法可用的
DHCP返回：*ip地址、网关（router、子网掩码、DNS*

### **NAT**

network address translation

**动机**（使用NAT的原因）: 本地网络只有一个有效IP地址:
不需要从ISP分配一块地址，可用一个IP地址用于所有的（局域网）设备 –省钱
**可以在局域网改变设备的地址情况下而无须通知外界**
可以改变ISP（地址变化）而不需要改变内部的设备地址
局域网内部的设备没有明确的地址，对外是不可见的 –安全

- **如果流量从Inside端口进来，那么先执行路由，后执行NAT(本地 到 全局)。**
- **如果流量从Outside端口进来，那么先执行NAT(全局 到 本地)，后执行路由。**

**安全外壳协议**( SSH **)**是一种[加密](https://en.wikipedia.org/wiki/Cryptography) [网络协议](https://en.wikipedia.org/wiki/Network_protocol)，用于在不安全的网络上安全地运行[网络服务。](https://en.wikipedia.org/wiki/Network_service)[[1]](https://en.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4251-1)其最著名的应用是 remote [login](https://en.wikipedia.org/wiki/Login) and [command-line](https://en.wikipedia.org/wiki/Command-line_interface) execution.

SSH 应用程序基于[客户端-服务器](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)架构，将[SSH 客户端](https://en.wikipedia.org/wiki/SSH_client)实例与[SSH 服务器](https://en.wikipedia.org/wiki/SSH_server)连接。[[2]](https://en.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4252-2) SSH 作为分层协议套件运行，包含三个主要分层组件：*传输层*提供服务器身份验证、机密性和完整性；用户*认证协议*向服务器验证用户；连接*协议*将加密隧道复用为多个逻辑通信通道。[[1]](https://en.wikipedia.org/wiki/Secure_Shell#cite_note-rfc4251-1)

[SSH 是在类 Unix](https://en.wikipedia.org/wiki/Unix-like)操作系统上设计的，作为[Telnet](https://en.wikipedia.org/wiki/Telnet)和[不安全的](https://en.wikipedia.org/wiki/Computer_security)远程[Unix shell](https://en.wikipedia.org/wiki/Unix_shell)协议的替代品

### Across the Wall

VPN协议和NAT协议都是通过重新构建一个IP首部来实现的，但他们的实现又有**区别**，VPN是将内部IP数据报加密后打包成外部IP数据报的数据部分，它的主要目的是为了数据的保密性，而NAT是纯进行地址转换，它的目的是为了解决本地编址的内部网络与外网通信的问题。

**VPN的实现主要使用了两种基本技术：隧道传输 和 加密技术**

**VPN** 通常处于网络层（第三层）或数据链路层（第二层）：

- **IP层的VPN**，如IPsec或L2TP，通常工作在网络层，它们通过创建虚拟的私有网络来路由IP数据包。
- **数据链路层的VPN**，如PPTP，工作在数据链路层，通常用于点对点通信。

WARP是建立在Cloudflare 1.1.1.1的免费DNS服务器上。从技术上讲，Warp本质上就是一款VPN服务，Warp使用来自1.1.1.1的DNS服务器，并对它们之间的所有流量进行加密。

通常，当你访问[http://Baidu.com](http://baidu.com/)时，URL会被翻译成网站所在服务器的IP地址，由ISP的DNS服务器托管。当你使用Warp时，Warp将手机上的DNS服务器固定为1.1.1.1。因此，所有请求都转到Cloudflare的安全服务器。

Warp在此基础上增加了一个额外的流程，使得设备和Cloudflare服务器之间的所有流量都是加密流量。**但Warp是基于WireGuard隧道的UDP协议，中国大陆绝大部分运营商都会对这类流量进行惩罚式、限速式的限制策略，导致Warp在大陆使用上突发很高，但均速很低。(只能用于failover** 😅 再加上Cloudflare的许多IP被国内Block，使得Warp在大陆接近一个不可用的状态。

WireGuard 是由 Jason Donenfeld 等人用 C 语言编写的一个开源 VPN 协议，被视为下一代 VPN 协议，旨在解决许多困扰 IPSec/IKEv2、OpenVPN 或 L2TP 等其他WireGuard 就是采用 UDP 转发流量的 VPN 工具。他最大的优点也就是最大的缺点，采用 UDP 转发流量确实是能够有效的干扰墙的封锁，但是其稳定性实在是不敢恭维。 

Clash是一个开源的多协议代理工具，可以用于实现网络流量的代理和转发。它支持多种代理协议（如Shadowsocks、VMess、Trojan、Socks5等）和路由规则，能够实现灵活的网络流量控制和代理功能。

**trojan**是近些年兴起的网络工具，项目官网 https://github.com/trojan-gfw。与**强调加密**和混淆的SS/SSR等工具不同，trojan将通信流量伪装成互联网上最常见的https流量，从而有效防止流量被检测和干扰。在敏感时期，基本上只有**trojan和 [v2ray伪装](https://itlanyan.com/v2ray-traffic-mask/) 能提供稳如狗的体验**。

想要长期稳定高效的科学上网，socks5 类型的代理基本是必须要掌握的。

*SOCKS*工作在比[HTTP代理](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8)更低的层次Session：SOCKS使用[握手协议](https://zh.wikipedia.org/w/index.php?title=%E6%8F%A1%E6%89%8B%E5%8D%8F%E8%AE%AE&action=edit&redlink=1)来通知代理软件其客户端试图进行的SOCKS连接，然后尽可能透明地进行操作，而常规代理可能会解释和重写报头（例如，使用另一种底层协议，例如[FTP](https://zh.wikipedia.org/wiki/%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)；然而，HTTP代理只是将HTTP请求转发到所需的HTTP服务器）。虽然HTTP代理有不同的使用模式，[HTTP CONNECT](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)方法允许转发TCP连接；然而，SOCKS代理还可以转发[UDP](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE)流量（仅SOCKS5），而HTTP代理不能。HTTP代理通常更了解HTTP协议，执行更高层次的过滤（虽然通常只用于GET和POST方法，而不用于CONNECT方法）。

**socks5** 类型的代理服务器在网络层级上是工作于应用层的**会话层**，很多流量都无法代理，因从即便是开了所谓的全局，也不能给游戏加速，毕竟游戏的网络传输一般都是跑在传输层的。**像 Ping 和 Trace 这些 ICMP 命令自然也是无法通过代理的**。（当然也有方法可以用软件强制接管虚拟网卡达到真全局的目的，比如 SSTAP，tun2socks 等等）

如果客户端和服务器都可以独立发包，但是偶尔发生延迟可以容忍（比如：在线的纸牌游戏，许多MMO类的游戏），那么可考虑使用TCP长连接如果客户端和服务器都可以独立发包，而且无法忍受延迟（比如：大多数的多人动作类游戏，一些MMO类游戏），那么考虑使用UDP加速器原理 加速器的原理很简单，就是UDP代理

**主要难在两点，其一是怎么处理游戏客户端到加速器服务器之间的UDP连接，其二是怎么让游戏客户端去连接这个加速器（一般游戏客户端是没有设置代理服务器的功能的）** 

处理UDP有两种思路，一种是协议套娃，将游戏的UDP包外面套一层TCP（UDP over TCP ），到了目的地再把TCP解包成UDP，最后在发送到游戏服务器，返回的数据包也做同样处理；另外一种是伪造TCP（FakeTCP），对UDP数据包加上伪造的TCP包头，让其看起来像是TCP协议，欺骗运营商。

主动检测
HTTP所有没有正确结构和密码的连接都将被重定向到预设端点,因此,如果可疑探针连接(或者只是您的粉丝连接到您的博客XD),木马服务器的行为与该端点完全相同(默认情况下)。
被动检测
因为流量受到保护TLS(用户有责任使用有效的证书),所以如果你正在访问一个HTTP站点,流量看起来
是一样的(握手后HTTPS只有一个);如果您没有访问某个站点,那么流量看起来与“保持活动状态”或“保持活动状态“相同。因此,木马还可以绕过ISP限制。RTT TLS HTTP HTTPS WebSocket QoS

### HTTPS加密

**直接把 TLS 1.2 升级成 TLS 1.3，TLS 1.3 大幅度简化了握手的步骤，完成 TLS 握手只要 1 RTT，而且安全性更高。**

**在 TLS 1.2 的握手中，一般是需要 4 次握手，先要通过 Client Hello （第 1 次握手）和 Server Hello（第 2 次握手） 消息协商出后续使用的加密算法，再互相交换公钥（第 3 和 第 4 次握手）**

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
5. 如果服务端发送了一个客户端证书请求，客户端将会发送一个用客户端私钥加密的随机字符串和客户端的数字证书，或者没有数字证书的警告。在某些强制客户端证书的实现中，如果客户端没有数字证书，则握手会失败
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

Socket

一个是 fread/fwrite 读写，一个是 recv 和 send 读写（在 Linux 下你用 read 和 write 的话，文件和 socket 两者都能读写，只是无法直接设置一些特殊的 flag）。

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

俺曾经写过一篇《

[如何让【不支持】代理的网络软件，通过代理进行联网（不同平台的 N 种方法）](https://program-think.blogspot.com/2019/04/Proxy-Tricks.html)

》，其中介绍了“HTTP 代理”的两种模式：“转发模式 ＆ 隧道模式”。对于“HTTP 代理”的隧道模式，可以实现【TCP over HTTP】（把 TCP 协议打包到 HTTP 协议内部）

**Transport**

**屏蔽“有连接 or 无连接”的差异  网络层的定位是“抽象物理层和数据链路层，提供端到端”的通信能力。**当网络部署全世界的时候，最初的设计者认为网络重路由、乱序的概率，很容易会高过了有连接服务能够容忍的概率。毕竟，有连接服务要先付出代价“建立连接”来换取“通信过程中的高效”。一旦遇到网络重路由或者乱序，就要重新付出“建立连接”的代价。**尽管网络层本身是无连接和不可靠的，但上层协议，如传输层的TCP，可以提供可靠性和连接性，以确保数据的正确传输和顺序。**这种分层的设计有助于网络的模块化，不同层次可以独立开发和升级，从而促进了互联网的增长和演进。

UDP（User Datagram Protocol）和TCP（Transmission Control Protocol）是两种常用的传输层协议，用于在计算机网络中传输数据。它们在性质、特点和用途上有许多区别，下面是它们的主要区别：

1. **连接性：**
    - TCP：是一种面向连接的协议，建立连接后会在通信双方之间建立可靠的数据传输通道。数据按顺序传输，确保可靠性，且会进行确认和重传以保证数据的完整性。
    - UDP：是一种无连接的协议，发送方将数据报发送到目标地址，接收方直接接收，没有建立持续的连接，不进行确认和重传。
2. **可靠性：**
    - TCP：保证数据的可靠传输，通过序号、确认和重传机制来确保数据的有序性和完整性。适用于需要确保**数据不丢失和按顺序到达**的应用，如网页浏览、文件传输等。
    - UDP：不保证数据的可靠传输，数据发送后不会收到确认。适用于实时性要求较高，可以容忍一些数据丢失的应用，如音频、视频流等。
3. **流控制：**
    - TCP：具有流控制机制，通过滑动窗口协商发送方和接收方之间的数据传输速率，避免数据过载。
    - UDP：没有流控制机制，发送方将数据发送出去，不会根据接收方的接收能力进行调整。
4. **带宽和延迟：**
    - TCP：由于其确认和重传机制，以及流控制，可能会引入一些额外的带宽消耗和延迟。
    - UDP：通常具有较低的延迟和带宽消耗，适合实时通信和多播等场景
    

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

# Linux

Linus Torvalds 创建了前者。后者是全球数百万开发人员之间的协作，涉及[GNU 项目](https://www.gnu.org/home.en.html), [Linux 内核开发团队](https://www.kernel.org/)[由 Torvalds 领导， X Window 系统的](http://www.x.org/wiki/)各种开发人员在过去的 29 年中，以及其他。这就是自由软件基金会要求将使用来自 GNU 项目的软件的完整 Linux 操作系统称为“GNU/Linux”的原因。**全称GNU/Linux，是一种免费使用和自由传播的[类UNIX](https://baike.baidu.com/item/%E7%B1%BBUNIX/9032872)操作系统**，其内核由[林纳斯·本纳第克特·托瓦兹](https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%9C%AC%E7%BA%B3%E7%AC%AC%E5%85%8B%E7%89%B9%C2%B7%E6%89%98%E7%93%A6%E5%85%B9/1034429)于1991年10月5日首次发布，它主要受到[Minix](https://baike.baidu.com/item/Minix/7106045)和Unix思想的启发，是一个基于[POSIX](https://baike.baidu.com/item/POSIX/3792413)的多用户、[多任务](https://baike.baidu.com/item/%E5%A4%9A%E4%BB%BB%E5%8A%A1/1011764)、支持[多线程](https://baike.baidu.com/item/%E5%A4%9A%E7%BA%BF%E7%A8%8B/1190404)和多[CPU](https://baike.baidu.com/item/CPU/120556)的操作系统。它能运行主要的[Unix](https://baike.baidu.com/item/Unix/219943)工具软件、应用程序和网络协议。它支持[32位](https://baike.baidu.com/item/32%E4%BD%8D/5812218)和[64位](https://baike.baidu.com/item/64%E4%BD%8D/2262282)硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux有上百种不同的发行版，如基于社区开发的[debian](https://baike.baidu.com/item/debian/748667)、[archlinux](https://baike.baidu.com/item/archlinux/10857530)，和基于商业开发的[Red Hat Enterprise Linux](https://baike.baidu.com/item/Red%20Hat%20Enterprise%20Linux/10770503)、[SUSE](https://baike.baidu.com/item/SUSE/60409)、[Oracle Linux](https://baike.baidu.com/item/Oracle%20Linux/6876458)等。

Linus built kernel to solve unix hard-use and lack I/O RPC function.  区分 Linux（内核）和 Linux（操作系统）。

Kernel 是计算机[操作系统](https://en.wikipedia.org/wiki/Operating_system)核心的[计算机程序](https://en.wikipedia.org/wiki/Computer_program)，通常可以完全控制系统中的所有内容**。**[[1]](https://en.wikipedia.org/wiki/Kernel_(operating_system)#cite_note-Linfo-1)它是操作系统代码的一部分，始终驻留在内存中[[2]](https://en.wikipedia.org/wiki/Kernel_(operating_system)#cite_note-2)并促进硬件和软件组件之间的交互。完整的内核通过[设备驱动程序控制](https://en.wikipedia.org/wiki/Device_driver)所有硬件资源（例如 I/O、内存、密码） ，仲裁涉及这些资源的进程之间的冲突，并优化公共资源的利用，例如 CPU 和缓存使用、文件系统和网络套接字。[在大多数系统上，内核是启动](https://en.wikipedia.org/wiki/Booting)时最先加载的程序之一（在[引导加载程序](https://en.wikipedia.org/wiki/Bootloader)）。它处理其余的启动以及内存、[外围设备](https://en.wikipedia.org/wiki/Peripheral)和来自[软件的](https://en.wikipedia.org/wiki/Software)[输入/输出](https://en.wikipedia.org/wiki/Input/output)(I/O) 请求，将它们转换为[中央处理器的](https://en.wikipedia.org/wiki/Central_processing_unit)[数据处理](https://en.wikipedia.org/wiki/Data_processing)指令。

内核的关键代码通常被加载到一个单独的内存区域，该区域受到保护，不会被[应用程序软件](https://en.wikipedia.org/wiki/Application_software)或操作系统的其他不太重要的部分访问。[内核在这个受保护的内核空间](https://en.wikipedia.org/wiki/User_space_and_kernel_space)中执行其任务，例如运行进程、管理硬盘等硬件设备[以及](https://en.wikipedia.org/wiki/Hard_disk_drive)处理中断。相比之下，浏览器、文字处理器或音频或视频播放器等**应用程序使用单独的内存区域，即[用户空间](https://en.wikipedia.org/wiki/User_space_and_kernel_space)。**这种分离可以防止用户数据和内核数据相互干扰并导致不稳定和缓慢，[[1]](https://en.wikipedia.org/wiki/Kernel_(operating_system)#cite_note-Linfo-1)以及防止出现故障的应用程序影响其他应用程序或使整个操作系统崩溃。即使在内核包含在应用程序[地址空间](https://en.wikipedia.org/wiki/Address_space)中的系统中，[内存保护](https://en.wikipedia.org/wiki/Memory_protection)也用于防止未经授权的应用程序修改内核。

内核的[接口](https://en.wikipedia.org/wiki/API)是一个[低级](https://en.wikipedia.org/wiki/High-_and_low-level) [抽象层](https://en.wikipedia.org/wiki/Abstraction_layer)。当[进程](https://en.wikipedia.org/wiki/Process_(computing))向内核请求服务时，它必须调用[系统调用](https://en.wikipedia.org/wiki/System_call)，通常是通过[包装函数](https://en.wikipedia.org/wiki/Wrapper_function)。

有不同的内核架构设计。[整体内核](https://en.wikipedia.org/wiki/Monolithic_kernel)完全在单个[地址空间](https://en.wikipedia.org/wiki/Address_space)中运行，CPU 在[管理模式](https://en.wikipedia.org/wiki/Protection_ring)下执行，主要是为了提高速度。[微内核](https://en.wikipedia.org/wiki/Microkernel)在用户空间中运行大部分但不是所有服务，[[3]](https://en.wikipedia.org/wiki/Kernel_(operating_system)#cite_note-3)就像用户进程一样，主要是为了弹性和[模块化](https://en.wikipedia.org/wiki/Modular_programming)。[[4]](https://en.wikipedia.org/wiki/Kernel_(operating_system)#cite_note-mono-micro-4) [MINIX 3](https://en.wikipedia.org/wiki/MINIX_3)是微内核设计的一个著名例子。相反，[Linux 内核](https://en.wikipedia.org/wiki/Linux_kernel)是整体式的，尽管它也是模块化的，因为它可以在运行时插入和删除可[加载的内核模块](https://en.wikipedia.org/wiki/Loadable_kernel_module)。

计算机系统的这个中央组件负责执行程序。内核负责随时决定将许多正在运行的程序中的哪些分配给处理器

$表明是非root用户登录，#表示是root用户登录，它们是终端shell的命令提示符 几种常用终端的命令提示符

BASH: root账户: # ,非root账户: $ KSH: root账户: # ,非root账户: $ CSH[TCSH]: root账户: % ,非root账户: %

```
而/ 是根节点， ~ 是 home
如果以root账号登陆   ~ 是 /root/
```

Program: a file containing instructions to be executed, static Process: an instance of a program in execution, live entity

execve（执行文件）在[父进程](https://baike.baidu.com/item/%E7%88%B6%E8%BF%9B%E7%A8%8B/614062)中fork一个子进程，在子进程中调用exec函数启动新的程序。exec函数一共有六个，其中execve为内核级[系统调用](https://baike.baidu.com/item/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8/861110)，其他（execl，execle，execlp，execv，execvp）exec(): often used after fork() to **load** another process

提出一个问题：当在O_APPEND打开后，然后用 lseek移动到其他的位置，然后再用write写，这个时候，请问你数据写到哪里去了？

是在末端，还是lseek移动到得位置。答案是在末端。

因为 O_APPEND打开后，是一个[原子操作](https://so.csdn.net/so/search?q=%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C&spm=1001.2101.3001.7020)：移动到末端，写数据。这是O_APPEND打开的作用。中间的插入时无效的

通信双方交流的信息单元（比特、字节、字、双字等等）应该以什么样的顺序进行传送。如果不达成一致的规则，通信双方将无法进行正确的编/译码从而导致通信失败。Big Endian 和 Little Endian

### FTP

**主动**模式的FTP是指**服务器主动**连接客户端的数据端口，被动模式的FTP是指**服务器被动等待**客户端连接自己的数据端口。

被动模式的FTP通常用在处于防火墙之后的FTP客户访问外界FTP服务器的情况，因为在这种情况下，防火墙通常配置为**不允许外界访问防火墙之内的主机**，而**只允许由防火墙之内的主机发起对外的连接请求**。因此，在这种情况下不能使用主动模式的FTP传输，而被动模式的FTP可以良好的工作。

主动模式需要服务器主动向客户端发起连接，而现在普通的客户端大多位于NAT之后，所以主动模式常常无法进行。即使可以，也需要客户端打开防火墙，允许服务端的20端口访问。所以服务端基本需要支持被动模式，但被动模式需要开放一段端口。为了安全，可以选择一小段端口，然后在防火墙开放这一段端口。

`fork()`    它不接受任何参数并返回一个整数值。下面是 fork() 返回的不同值。

***负值***：创建子进程不成功。***零***：返回新创建的子进程。***正值***：返回给父级或调用者。该值包含新创建的子进程的进程 ID。
系统调用，父进程调用fork会创建一个进程副本，代码中还可以通过fork返回值是否为0来区分是子进程还是父进程。fork 系统调用用于创建一个新进程，称为***子进程***，它与进行 fork() 调用的进程（父进程）同时运行。创建新的子进程后，两个进程都将执行 fork() 系统调用之后的下一条指令。**子进程使用与父进程相同的 pc（程序计数器）、相同的 CPU 寄存器、相同的打开文件。不同线程**

fork是用来创建子进程的，这个函数的特别之处在于一次调用，两次返回，一次返回到父进程中，一次返回到子进程中，我们可以通过返回值来判断其返回点：

`pid_t child = fork();
if( child < 0  ) {     //fork error.
    perror("fork process fail.\n");
} else if( child ==0  ) {   // in child process
    printf(" fork succ, this run in child process\n ");
} else {                        // in parent process
    wait(); printf(" this run in parent process\n ");
}`

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

# MIS

3 main types of metadata: **descriptive, administrative, and use**

- **Descriptive metadata** enables discovery, identification, and selection of resources. It can include elements such as title, author, and subjects.
- **Administrative metadata** facilities the management of resources. It can include elements such as technical, preservation, rights, and use.
- Use **metadata**, generally used in machine processing, describes relationships among various parts of a resource, such as chapters in a book.Data exhaust is **the data generated as a byproduct of people's online actions and choices**. Data exhaust consists of the various files generated by web browsers and their plug-ins such as cookies, log files, temporary internet files and and . sol files (flash cookies).

**Security Concerns with JSON**

JSON.parse()只会将标准的Json字符串(key和value都由双引号引起来，最外面用单引号括住)转为JSON对象。

eval()在转换字符串的时候是比较松的，即使不是标准的Json字符串也会被转换成Json对象。更重要的是eval()方法会执行要解析的字符串中的代码，这一点是十分危险的。

XML 

**Rule= element names must NOT have a space** 

**<1>banned</1> – Rule=tags cannot start with a number ◆ <xml>banned</xml> – Rule= there are a few reserved names, e.g. xml**

XML Schema Definition，通常简称为XSD，是一种精确描述XML语言的方法。 XSD根据相应XML语言的语法规则检查XML文档的结构和词汇的有效性。
//更多请阅读：https://www.yiibai.com/xsd/xsd_overview.html

<lastname>Refsnes</lastname><age>36</age><dateborn>1970-03-27</dateborn>

这是相应的简易元素定义：

<xs:element name="lastname" type="xs:string"/>

<xs:element name="age" type="xs:integer" default=””/>

<xs:element name="dateborn" type="xs:date"/>

兰伯特在论文《The Byzantine Generals Problem》中提到的口信消息型拜占庭问题之解：**如果叛将人数为 m，将军人数不能少于 3m + 1** ，那么拜占庭将军问题就能解决了。

拜占庭将军问题描述的是最困难的，也是最复杂的一种分布式故障场景，除了存在故障行为，还存在恶意行为的一个场景。你要注意，在存在恶意节点行为的场景中（比如在数字货币的区块链技术中），必须使用拜占庭容错算法（Byzantine Fault Tolerance，BFT）。除了故事中提到两种算法，常用的拜占庭容错算法还有：PBFT 算法，PoW 算法。

计算机分布式系统中，最常用的是非拜占庭容错算法，即故障容错算法（Crash Fault Tolerance，CFT）。CFT 解决的是分布式的系统中存在故障，但不存在恶意节点的场景下的共识问题。 也就是说，这个场景可能会丢失消息，或者有消息重复，但不存在错误消息，或者伪造消息的情况。常见的算法有 Paxos 算法、Raft 算法、ZAB 协议。

**区别与相似点**：

- **可理解性**：Raft 相对于 Paxos 更易于理解和实现。Paxos 的理解和实现较为复杂，而 Raft 设计的目标是提供更清晰的算法描述。
- **领导选举**：在共识算法中，领导者（Leader）的选举是一个关键问题。Paxos 和 Raft 都涉及领导选举，但在实现细节上存在差异。
- **日志复制**：Paxos 和 Raft 都通过在节点之间复制日志来实现数据的一致性。Raft 将日志复制问题划分为更容易管理的几个阶段。

无论是 Paxos 还是 Raft，它们都是为解决分布式系统中的数据一致性，共识问题而设计的。

在Paxos算法中，有三种角色：

Proposer：提案Proposal提出者
Acceptor：决策者，可以批准议案          Learner：最终决策的学习者
Paxos算法安全性前提如下：

只有被提出的value才能被选定。
只有一个value被选定，并且如果某个进程认为某个value被选定了，那么这个value必须是真的被选定的那个。
Paxos算法类似于两阶段提提交
————————————————

**Raft**是一种用于替代[Paxos](https://zh.wikipedia.org/wiki/Paxos)的[共识](https://zh.wikipedia.org/wiki/%E5%85%B1%E8%AD%98%E6%A9%9F%E5%88%B6)算法。相比于[Paxos](https://zh.wikipedia.org/wiki/Paxos)，Raft的目标是提供更清晰的逻辑分工使得算法本身能被更好地理解，同时它安全性更高，并能提供一些额外的特性。
**Raft makes several guarantees to the user – only one will be discussed here.**

 **• Election safety: at most one leader can be elected in a given term.** 

**• Uses a “heartbeat” mechanism: All nodes continually receive messages from the leader**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/255d65d7-d005-4647-86bc-af2792f7aab8/Untitled.png)

## **负载均衡**

负载均衡（Load Balancing）是计算机网络和服务器管理中的一项关键技术，用于分配和管理网络流量、请求或工作负载，以确保系统的稳定性、可靠性和性能。它主要用于分散来自用户或客户端的请求，以均匀分布到多个服务器或资源上，从而避免单一服务器过载，**提高系统的可用性和响应速度**。

以下是一些关于负载均衡的重要概念和工作原理：

1. **负载均衡器（Load Balancer）**：负载均衡器是位于网络架构中的设备或软件，它接收传入的请求，并根据一定的策略将这些请求分发到一组后端服务器。负载均衡器可以是硬件设备，也可以是软件应用程序，例如NGINX、Apache HTTP Server的负载均衡模块，或云服务提供商的负载均衡服务。
2. **负载均衡算法**：负载均衡器使用不同的算法来决定如何分配请求。一些常见的算法包括轮询（Round Robin）、最少连接（Least Connections）、IP哈希（IP Hash）、权重轮询（Weighted Round Robin）等。

是防止有的人干死了，有的人闲死了，来**根据能力**（CPU、IO）分配一下工作量

现有的负载均衡算法主要分为静态和动态两类。静态负载均衡算法以固定的概率分配任务，不考虑服务器的状态信息，如轮转算法、加权轮转算法等；动态负载均衡算法以服务器的实时负载状态信息来决定任务的分配，如最小连接法

常用的负载均衡策略

**1.轮询(Round Robin)**

按顺序将请求依次分配给服务器，每个服务器按照顺序依次接收请求 适用于服务器性能相近的情况。

**2.最小连接数(Least Connection)**

将请求分配给当前连接数最少的服务器，确保负载相对均衡，适用于长连接的场景。

**3.最少响应时间(Least Response Time)**

将请求分配给响应时间最短的服务器，确保客户端能够获得最快的响应，适用于对响应时间要求较高的场景。

**4.IP哈希(IP Hash)**

根据请求的源IP地址计算哈希值，将同一IP的请求分配给同一台服务器，保证特定客户端的请求都发送到同一服务器，适用于需要会话保持的应用。

**5.加权轮询(Weighted Round Robin)**

根据服务器的权重值，按比例分配请求，权重高的服务器接收到的请求数更多。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/d6aaf80b-faac-438e-871a-a784023a6052/Untitled.png)

## Nginx

nginx [engine x] 是一个 HTTP 和反向代理服务器、邮件代理服务器和通用 TCP/UDP 代理服务器。

由俄罗斯的程序设计师Igor Sysoev所开发以解决C10K问题，官方测试nginx能够支支撑5万并发链接，**软件负载均衡：** 在应用程序级别实现负载均衡，实现请求的分发。例如，使用特定框架或库，将请求分发给不同的服务实例或节点。这种方法相对来说灵活性较高，但也需要在应用程序代码中实现和维护负载均衡逻辑。
2.

并且cpu、内存等资源消耗却非常低，运行非常稳定。

反向代理是负载均衡的实现方式之一 这个问题描述是性能，只能代理到多个节点，代理单一节点对性能提升明显是没意义的。或者如某个回答说的，应该是提升吞吐量，性能的描述不是很准确。

反向代理**隐藏了真实的服务端**，当我们请求 [w](http://www.baidu.com/)ww.baidu.com 的时候，就像拨打10086一样，背后可能有成千上万台服务器为我们服务，但具体是哪一台，你不知道，也不需要知道，你只需要知道反向代理服务器是谁就好了，[w](http://www.baidu.com/)ww.baidu.com 就是我们的反向代理服务器，反向代理服务器会帮我们把请求转发到真实的服务器那里去。

**LVS四层[负载均衡](https://so.csdn.net/so/search?q=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1&spm=1001.2101.3001.7020)集群**

总结：从上面的对比看来四层负载与七层负载最大的区别就是效率与功能的区别。四层负载架构设计比较简单，无需解析具体的消息内容，在网络吞吐量及处理能力上会相对比较高，而七层负载均衡的优势则体现在功能多，控制灵活强大。在具体业务架构设计时，使用七层负载或者四层负载还得根据具体的情况综合考虑。

**[一致性Hash算法](https://zhuanlan.zhihu.com/p/98030096)**

IP_hash将同一IP的请求分配给同一台服务器

取模哈希函数中基数的变化，这样会导致大部分映射关系改变一致性哈希算法就很好地解决了分布式系统在扩容或者缩容时，发生过多的数据迁移的问题。

当网站分配请求时，考虑到每个节点的硬件配置有所区别，我们可以引入权重值，将硬件配置更好的节点的权重值设高，然后根据各个节点的权重值，按照一定比重分配在不同的节点上，让硬件配置更好的节点承担更多的请求，这种算法叫做加权轮询。

加权轮询算法使用场景是建立在每个节点存储的数据都是相同的前提。所以，每次读数据的请求，访问任意一个节点都能得到结果。

但是，加权轮询算法是无法应对「分布式系统（数据分片的系统）」的，因为分布式系统中，每个节点存储的数据是不同的。

当我们想提高系统的容量，就会将数据水平切分到不同的节点来存储，也就是将数据分布到了不同的节点。比如**一个分布式 KV（key-value） 缓存系统，某个 key 应该到哪个或者哪些节点上获得，应该是确定的**，不是说任意访问一个节点都可以得到缓存结果的。

因此，我们要想一个能应对分布式系统的负载均衡算法

一致性哈希要进行两步哈希：

- 第一步：对存储节点进行哈希计算，也就是对存储节点做哈希映射，比如根据节点的 IP 地址进行哈希（mod 2^32）；
- 第二步：当对数据进行存储或访问时，对数据进行哈希映射；

所以，**一致性哈希是指将「存储节点」和「数据」都映射到一个首尾相连的哈希环上**。增加或删除节点时只对后继节点产生影响，但数据分配不均匀可能会导致大量请求访问同一个节点

使用虚拟节点除了会提高节点的均衡度，还会提高系统的稳定性。**当节点变化时，会有不同的节点共同分担系统的变化，因此稳定性更高**。

比如，当某个节点被移除时，对应该节点的多个虚拟节点均会移除，而这些虚拟节点按顺时针方向的下一个虚拟节点，可能会对应不同的真实节点，即这些不同的真实节点共同分担了节点变化导致的压力。

而且，有了虚拟节点后，还可以为硬件配置更好的节点增加权重，比如对权重更高的节点增加更多的虚拟机节点即可。

因此，**带虚拟节点的一致性哈希方法不仅适合硬件配置不同的节点的场景，而且适合节点规模会发生变化的场景**。

**哲学家就餐问题**（英语：Dining philosophers problem）是在[计算机科学](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)中的一个经典问题，用来演示在[并发计算](https://zh.wikipedia.org/wiki/Concurrent_computing)中[多线程](https://zh.wikipedia.org/wiki/%E5%A4%9A%E7%BA%BF%E7%A8%8B)[同步](https://zh.wikipedia.org/wiki/%E5%90%8C%E6%AD%A5)（Synchronization）时产生的问题。

**服务生解法[[编辑](https://zh.wikipedia.org/w/index.php?title=%E5%93%B2%E5%AD%A6%E5%AE%B6%E5%B0%B1%E9%A4%90%E9%97%AE%E9%A2%98&action=edit&section=4)]**

一个简单的解法是引入一个餐厅服务生，哲学家必须经过他的允许才能拿起餐叉。因为服务生知道哪只餐叉正在使用，所以他能够作出判断避免死锁。

为了演示这种解法，假设哲学家依次标号为A至E。如果A和C在吃东西，则有四只餐叉在使用中。B坐在A和C之间，所以两只餐叉都无法使用，而D和E之间有一只空余的餐叉。假设这时D想要吃东西。如果他拿起了第五只餐叉，就有可能发生死锁。相反，如果他征求服务生同意，服务生会让他等待。这样，我们就能保证下次当两把餐叉空余出来时，一定有一位哲学家可以成功的得到一对餐叉，从而避免了死锁。

**资源分级解法**

另一个简单的解法是为资源（这里是餐叉）分配一个[偏序](https://zh.wikipedia.org/wiki/%E5%81%8F%E5%BA%8F)或者分级的关系，并约定所有资源都按照这种顺序获取，按相反顺序释放，而且保证不会有两个无关资源同时被同一项工作所需要。在哲学家就餐问题中，资源（餐叉）按照某种规则编号为1至5，每一个工作单元（哲学家）总是先拿起左右两边编号较低的餐叉，再拿编号较高的。用完餐叉后，他总是先放下编号较高的餐叉，再放下编号较低的。在这种情况下，当四位哲学家同时拿起他们手边编号较低的餐叉时，只有编号最高的餐叉留在桌上，从而第五位哲学家就不能使用任何一只餐叉了。而且，只有一位哲学家能使用最高编号的餐叉，所以他能使用两只餐叉用餐。当他吃完后，他会先放下编号最高的餐叉，再放下编号较低的餐叉，从而让另一位哲学家拿起后边的这只开始吃东西。

尽管资源分级能避免死锁，但这种策略并不总是实用的，特别是当所需资源的列表并不是事先知道的时候。例如，假设一个工作单元拿着资源3和5，并决定需要资源2，则必须先要释放5，之后释放3，才能得到2，之后必须重新按顺序获取3和5。对需要访问大量数据库记录的计算机程序来说，如果需要先释放高编号的记录才能访问新的记录，那么运行效率就不会高，因此这种方法在这里并不实用。

**Chandy/Misra解法**

允许任意的用户争用任意数量的资源。与资源分级解法不同的是，这里编号可以是任意的。

## 高并发解决

在[操作系统](http://baike.baidu.com/view/880.htm)中，是指一个时间段中有几个程序都处于已启动运行到运行完毕之间，且这几个程序都是在同一个[处理机](http://baike.baidu.com/view/2107226.htm)上运行。其中两种并发关系分别是同步和互斥

假如有1秒钟有1万个请求，我们的apache服务器的连接数500，处理业务的时间为100ms，4台服务器的连接数1秒内能处理500*4/0.1=2万(QPS)，完全满足这个要求了，但实际情况是随着请求数的增加，机器处于高负荷的状态，CPU切换次数增大会严重影响处理时长，很有可能由100ms变成500ms甚至更长，此时1秒钟处理的连接数为500**4/0.5=4000，这就会导致大量的请求阻塞.时间越长阻塞越大。根据用户的行为特征，越是阻塞就越会去点击请求这样就会雪上加霜，最终拖垮服务进程

二、解决方案

1、前后端分离

前端采用静态html页面，这样就不需要进行视图渲染了，减少性能开销。一些**静态页面**、css样式、js可以采用CDN加速(Http cache-control。前后端分离可以独立发布，前端有问题，可以直接改好发布而不需要重启服务端，一些大型项目启动服务端会耗费很长时间，如果此时访问量很大的话就会出现阻塞现象。

2、服务端接口处理速度要快

1）引入缓存

就比如上面的场景，优化代码缩短处理时间也是可以解决的。像这种高并发的情况，能不查数据库就不查数据库，因为数据库的连接也是有限的，比如mysql连接z数好像在500左右，而且连接数据库也是耗时间的。这种情况可以想办法将数据放入缓存，比如redis，redis连接数在5万左右且查询速度远比数据库要快，会节省大量查询时间。还有些数据是基础数据一直都不会变的，可以加载到本地缓存比如谷歌的guava

2）读多写少 尽量使用乐观锁

悲观锁是互斥的，遇到加锁状态必须等待，这会增加阻塞的概率。而且高并发的情况下，有些线程可能永远都拿不到锁，对用户体验是非常差的。

乐观锁可以解决这个问题，不过乐观锁有时候会更新不到数据，此时就会去重试，增加系统开销，但相对悲观锁来说会好很多。可以使用redis的watch功能(redis乐观锁)

3）拆分功能-微服务概念

比如一个系统里有会员信息、商品信息、交易信息，那么我们可以拆成3个微服务，图片、文件用专门的服务器存储，每个应用单独部署，且每个微服务部署集群，每个微服务有自己的数据库。这样就会用户请求跟数据交互都分流了。

这个会增加成本，不过既要性能高又要成本低不太现实，看实际情况了。如果高并发长时间才会搞一次，可以采取灵活部署的办法，平常可以一台服务器部署多个微服务，等活动开始的时候增加机器分开部署

4）削峰

削峰主要通过消息来处理，比如rabbitMq、kafka,这种行为属于偷懒行为，对于实时性要求不高的场景是可以的。一般QPS为1万以上的推荐kafka，实时性要求非常高的用rabbitmq。

5）重启与过载保护

假如服务进程挂了，这样的高并发情况下，重启几乎是无效的，重启就会立马崩溃掉，此时需要加一个服务网关做限流控制，还有用到redis的需要预热操作

3、从用户行为上做控制

1）页面上不让用户重复点击，点击后置灰，别小看这个功能，可以减少50%的无效请求。

2）防作弊，有些用户可以通过技术手段绕过上面的限制，这样就需要在服务端做限制了。比如限流，配置一个用户一定时间内最多访问多少请求，可以用redis存储用户的请求次数，最好用watch功能，避免用户同时操作。有些黄牛可能有多个用户，那么就需要针对IP做限制了，比如增加验证码，当然也可以直接对IP做限流，不过可能会误伤部分用户。

3）有些黄牛会模拟真实场景，比如12306抢票，这样的话只能通过大数据分析了，根据用户行为筛选出哪些账户是僵尸账户，平常不动，高峰期就活跃了，这样可以有针对性的对这些用户做限制操作

4、考虑事务问题

高并发的情况下如果不做控制很容易出现数据错乱的问题，解决这个问题需要**数据同步**。

大致思路有：

1、悲观锁

比如synchronized,lock,redis分布式锁，悲观锁容易造成阻塞

2、同步队列

请求全部进入一个同步队列里，然后一个个操作，跟悲观锁类似，也容易造成阻塞

3、乐观锁

数据库加版本号，**每次更新操作需要带版本号进行幂等操作**。也可以用redis的watch功能，乐观锁操作会有很多无效操作，增加重试开销，但相对引起阻塞的问题这点性能开销还是可以接受的，所以高并发情况下最好还是用乐观锁

```bash
update goods set status=2,version=version+1
where id=#{id} and version=#{version};
```

互联网正在高速发展，使用互联网服务的用户越多，高并发的场景也变得越来越多。电商秒杀和抢购，是两个比较典型的互联网高并发场景。虽然我们解决问题的具体技术方案可能千差万别，但是遇到的挑战却是相似的，因此解决问题的思路也异曲同工。

个人整理并发解决方案。

a.应用层面：读写分离、缓存、队列、集群、令牌、系统拆分、隔离、系统升级（可水平扩容方向）。

b.时间换空间：降低单次请求时间，这样在单位时间内系统并发就会提升。

c.空间换时间：拉长整体处理业务时间，换取后台系统容量空间。

## System Design

https://zhuanlan.zhihu.com/p/191057045

需要设计哪些功能（也可以自己想），需要承受多大的访问量？

首先可以把Twitter的功能一个个罗列出来，很显然你无法在45分钟的面试中完成所有功能的设计，所以需要筛选出核心功能（Post a Tweet，Timeline，News Feed，Follow/Unfollow a user，Register/Login）。

然后有的面试官可能会问你系统承受的QPS大概是多少？需要考虑并发用户，读频率（Read QPS）以及写频率（Write QPS）。记住重要的是你的思考和计算过程而不是计算结果。

**分析QPS有什么用？**

- 如果QPS = 100，那么用你的笔记本作Web服务器就好了；
- QPS = 1K，一台好点的Web 服务器也能应付，需要考虑Single Point Failure；
- QPS = 1m，则需要建设一个1000台Web服务器的集群，并且要考虑如何Maintainance（某一台挂了怎么办）。

**QPS 和 服务器/数据库之间的关系**

- 一台Web Server承受量约为 1K的QPS（考虑到逻辑处理时间以及数据库查询的瓶颈）；
- 一台SQL Database承受量约为 1K的QPS（如果JOIN和INDEX query比较多的话，这个值会更小）；
- 一台 NoSQL Database (Cassandra) 约承受量是 10k 的 QPS；
- 一台 NoSQL Database (Memcached) 约承受量是 1M 的 QPS。

**第二步，Service服务**

所谓服务可以认为是逻辑处理的整合，对于同一类问题的逻辑处理可以归并到一个服务中。这一步实际上就是将整个系统细分为若干个小的服务。

根据第一步选出的核心功能，我们可以将推特拆分成如下的几个服务：

!https://pic3.zhimg.com/80/v2-6e94502ebcdfa365216faa12aed65b0a_1440w.webp

**第三步，Storage 存储**

接下来就是4S分析法中最重要的一部分，存储。根据每个服务的数据特性选择合适的存储结构，然后细化数据表结构。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e20d5080-2dcb-4042-b55f-6e43dc3be4b0/Untitled.png)

# 操作系统OS

!https://pic.leetcode-cn.com/1642125846-FXGHTw-20210216234120.png

地址空间（address space）表示任何一个计算机实体所占用的内存大小

**程序局部性原理**：是指程序在执行时呈现出局部性规律，即在一段时间内，整个程序的执行仅限于程序中的某一部分。相应地，执行所访问的存储空间也局限于某个内存区域，具体来说，局部性通常有两种形式：时间局部性和空间局部性。

**时间局部性：**被引用过一次的存储器位置在未来会被多次引用（通常在循环中）。

**空间局部性：**如果一个存储器的位置被引用，那么将来他附近的位置也会被引用。

**存储器抽象**

在[计算机](https://baike.baidu.com/item/%E8%AE%A1%E7%AE%97%E6%9C%BA)中，每个设备以及进程都被分配了一个**地址空间**。处理器的地址空间由其[地址总线](https://baike.baidu.com/item/%E5%9C%B0%E5%9D%80%E6%80%BB%E7%BA%BF)以及[寄存器](https://baike.baidu.com/item/%E5%AF%84%E5%AD%98%E5%99%A8)决定。地址空间可以分为Flat——表示起始空间位置为0；或者Segmented——表示空间位置由[偏移量](https://baike.baidu.com/item/%E5%81%8F%E7%A7%BB%E9%87%8F)决定。在一些系统中，可以进行地址空间的类型转换。至于IP地址空间，IPV4协议并没有预见到IP地址的需求量如此之大，32位的地址空间已经无法满足需求了。因此，开发了[IPV6协议](https://baike.baidu.com/item/IPV6%E5%8D%8F%E8%AE%AE)，支持128位的地址空间 [1] 。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/616a6191-5305-41a1-a6f1-97354fce0c91/Untitled.png)

**暴露问题**

把物理地址暴露给进程会带来下面几个严重问题。第一，如果[用户程序](https://baike.baidu.com/item/%E7%94%A8%E6%88%B7%E7%A8%8B%E5%BA%8F)可以寻址内存的每个[字节](https://baike.baidu.com/item/%E5%AD%97%E8%8A%82)，它们就可以很容易地（故意地或偶然地）破坏操作系统，从而使系统慢慢地停止运行。即使在只有一个用户进程运行的情况下，这个问题也是存在的。第二，使用这种模型，想要同时（如果只有一个CPU就轮流执行）运行多个程序是很困难的。在[个人计算机](https://baike.baidu.com/item/%E4%B8%AA%E4%BA%BA%E8%AE%A1%E7%AE%97%E6%9C%BA)上，同时打开几个程序是很常见的（一个文字处理器，一个邮件程序，一个[网络浏览器](https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E6%B5%8F%E8%A7%88%E5%99%A8/12509222)，其中一个当前正在工作，其余的在按下鼠标的时候才会被激活）。在系统中没有对[物理内存](https://baike.baidu.com/item/%E7%89%A9%E7%90%86%E5%86%85%E5%AD%98)的抽象的情况下，很难做到上述情景，因此，我们需要其他办法。

为了解决这些问题，现代操作系统使用虚拟内存技术，将物理地址空间抽象成虚拟地址空间，并通过**内存管理单元（MMU）**来实现地址转换，使得每个进程只能访问自己的**虚拟地址空间**，从而提高系统的安全性、隔离性和稳定性。

### Memory

传统存储管理，进程必须把作业一次性装入内存中才能开始运行，且驻留在内存中。那其他app要运行怎么办或暂时用不到的数据占用了很多内存

**虚拟内存为每个进程提供了一个私有的地址空间 每个进程拥有一片连续完整的[内存空间](https://www.zhihu.com/search?q=%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2282746153%22%7D) 数据不断换入换出外存实现宏观上的大于实际内存的虚拟内存。**

1. **虚拟地址空间和物理地址空间：** 每个应用程序看到的是一组虚拟地址，而不是真正的物理内存地址。操作系统负责将这些虚拟地址映射到物理内存中的实际位置。
2. **分页技术：** 操作系统将虚拟内存划分成固定大小的页面（通常是4KB），同时也将物理内存划分成相同大小的页框。虚拟页被映射到物理页框，但不一定要将所有虚拟页都加载到物理内存中。
3. **页面置换：** 当应用程序需要访问一个虚拟页，但该页不在物理内存中时，会触发页面置换。操作系统会根据一定的算法，将一个当**前不太可能访问**的物理页替换出去，然后将需要的虚拟页加载到这个物理页中。
4. **页表：** 操作系统维护一个页表，记录虚拟页与物理页的映射关系。当应用程序访问虚拟地址时，操作系统会查询页表，找到对应的物理页。
5. **页面调度算法：** 操作系统使用不同的算法来决定哪些页应该被替换出物理内存，以便为新的虚拟页腾出空间。一些常见的页面调度算法包括最近最少使用（LRU）、先进先出（FIFO）、最不常用（LFU）等。

虚拟内存的主要优点包括：

- 允许运行比物理内存更大的应用程序。
- 提供了更好的内存管理和分配灵活性。
- 能够使多个应用程序同时运行，而不会发生内存冲突。
- 提供了更好的内存保护，防止一个应用程序影响到其他应用程序的内存空间。

然而，虚拟内存也有一些缺点，比如访问虚拟内存可能会引入一定的性能开销，因为涉及到物理内存和硬盘之间的数据交换。如果系统中同时运行的应用程序过多，可能会导致频繁的页面置换，从而影响性能。

总之，虚拟内存是现代操作系统中重要的内存管理技术，它通过将物理内存和硬盘空间结合起来，使得计算机系统能够更有效地管理内存资源，并支持运行多个应用程序。

例如有一台计算机可以产生 16 位地址，那么一个程序的地址空间范围是 0~64K。该计算机只有 32KB 的物理内存，虚拟内存技术允许该计算机运行一个 64K 大小的程序。

32位系统使用32位地址线的最大寻址空间为2的32次方bytes，计算后即4294967296 Bytes，也就是我们常说的4096MB，32位地址线的寻址空间封顶即为4GB

**分页系统映射**

内存管理单元（MMU）管理着地址空间和物理内存的转换，其中的页表（Page table）存储着页（程序地址空间）和页框（物理内存空间）的映射表。一个虚拟地址分成两个部分，一部分存储页面号，一部分存储偏移量。CPU 上的内存管理单元（Memory Management Unit，MMU）就是专门用来进行**虚拟地址到物理地址的转换的**，不过 MMU 需要借助存放在内存中的页表，而这张表的内容正是由操作系统进行管理的。

页表是一个十分重要的数据结构！

操作系统为每个进程建立了一张页表。一个进程对应一张页表，进程的每个页面对应一个页表项，每个页表项由页号和块号（页框号）组成，记录着进程页面和实际存放的内存块之间的映射关系。

寄存器是CPU内部高速存取数据的地方，比缓存更接近CPU的运算器。 8086是16位cpu（字长16位）：

其CPU一次最多可处理16位数据 寄存器最大宽度位16位 寄存器与PU之间的通路位16位。 地址20位，最大可寻址220 = 1MB地址空间

同时函数运行时需要额外的寄存器来保存一些信息，像部分局部变量之类，这些寄存器也是线程私有的，**一个线程不可能访问到另一个线程的这类寄存器信息**。

所属线程的栈区、程序计数器、栈指针以及函数运行使用的寄存器是线程**私有**的。

指针本质上可以在整个OS允许的[内存块](https://www.zhihu.com/search?q=%E5%86%85%E5%AD%98%E5%9D%97&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%2216303748%22%7D)上任意移动，有时候还会跨界到其他内存块上去。本质上它离机器语言太近，能够造成非常巨大的[外延性](https://www.zhihu.com/search?q=%E5%A4%96%E5%BB%B6%E6%80%A7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%2216303748%22%7D)破坏。一个最经典的例子就是内存践踏造成的缓冲区溢出。

Java语言中没有明确的指针概念，它使用引用（reference）来操作对象。这是为了提高安全性和简化开发，因为指针容易导致内存泄漏、越界访问和悬空指针等问题。Java的对象引用是由Java虚拟机（JVM）管理的，这种方式有助于减少对内存的直接操作，从而提高了安全性和可靠性。

C++ 利用 智能指针达成的效果是：一旦某对象不再被引用，系统刻不容缓，立刻回收内存

一个解决**空悬指针**的办法是，引入一层间接性，让 p1 和 p2 所指的对象永久有 效。

在Java中，常见的内存泄漏情况包括：

1. **长期持有对象的引用：** 如果一个对象被分配了内存，并被存储在某个全局变量、静态变量、集合或缓存中，但在后续的程序执行过程中未释放对该对象的引用，即使该对象不再需要，也无法被垃圾回收。
2. **监听器未及时移除：** 当一个对象作为监听器注册到某个事件上，但在对象不再需要时，未取消注册或者移除对监听器的引用，这可能导致对象无法被垃圾回收。
3. **未关闭资源：** 例如打开了文件、数据库连接、网络连接等资源，但在使用完后未显式地关闭或释放这些资源，会导致资源泄漏，进而可能导致内存泄漏。
4. **循环引用：** 当两个或多个对象相互引用，并且这些对象之间形成了一个环形的引用结构，即使这些对象在外部不再被使用，但由于它们互相引用导致它们之间的引用计数不为零，无法被垃圾回收。

为避免内存泄漏，需要进行良好的内存管理和编程实践：

- 及时释放不再需要的对象引用，可以手动将对象引用置为null。
- 在使用完资源后及时关闭文件、数据库连接、网络连接等。
- 避免循环引用，使用弱引用或软引用来避免形成永久性的对象引用。
- 对于监听器等注册的对象，及时取消注册或移除引用。

## **进程间通信IPC**

**可选用的6种方法**

1. 管道 Linux管道是一种特殊的文件描述符的「`|`」竖线就是一个**管道**，它的功能是将前一个命令（`ps auxf`）的输出，作为后一个命令（`grep mysql`）的输入，从这功能描述，可以看出**管道传输数据是单向的**，如果想相互通信，我们需要创建两个管道才行。管道是通过调用 pipe 函数创建的，fd[0] 用于读，fd[1] 用于写。Channel是Go语言中的一种特殊类型，用于在Goroutine之间进行通信和同步。
2. 消息队列（Message Queue）：以上三种方式只适合传递传递少量信息，POSIX 标准中 定义了消息队列用于**进程间数据量较多小数据的通信**。进程可以向队列添加消息，被赋予读权 限的进程则可以从队列消费消息。消息队列克服了信号承载信息量少，管道只能用于无 格式字节流以及缓冲区大小受限等缺点，但实时性相对受限。
3. 信号（Signal）：信号用于通知目标进程有某种事件发生，除了用于进程间通信外，进 程还可以发送信号给进程自身。信号的典型应用是 kill 命令  `kill -l`运行在 shell 终端的进程，我们可以通过键盘输入某些组合键的时候，给进程发送信号。例如
- Ctrl+C 产生 `SIGINT` 信号，表示终止该进程；
- Ctrl+Z 产生 `SIGTSTP` 信号，表示停止该进程，但还未结束；

如果进程在后台运行，可以通过 `kill` 命令的方式给进程发送信号，但前提需要知道运行中的进程 PID 号，例如：

- kill -9 1050 ，表示给 PID 为 1050 的进程发送 `SIGKILL` 信号，用来立即结束该进程；

所以，信号事件的来源主要有硬件来源（如键盘 Cltr+C ）和软件来源（如 kill 命令）。

信号是进程间通信机制中**唯一的异步通信机制**

1. 信号量（Semaphore）：为了防止多进程竞争共享资源，互斥和同步问题。**信号量**就实现了这一保护机制。PV操作，信号量用于两个进程之间同步协作手段，它相当于操作系统提 供的一个特殊变量，程序可以在上面进行 wait() 和 notify() 操作。进程 A 在访问共享内存前，先执行了 P 操作，由于信号量的初始值为 1，故在进程 A 执行 P 操作后信号量变为 0，表示共享资源可用，于是进程 A 就可以访问共享内存。 若此时，进程 B 也想访问共享内存，执行了 P 操作，结果信号量变为了 -1，这就意味着临界资源已被占用，因此进程 B 被阻塞。 直到进程 A 访问完共享内存，才会执行 V 操作，使得信号量恢复为 0，接着就会唤醒阻塞中的线程 B，使得进程 B 可以访问共享内存，最后完成共享内存的访问后，执行 V 操作，使信号量恢复到初始值 1。
2. **共享内存（Shared Memory）**：允许多个进程访问同一块公共的内存空间，这是效率最高的进程间通信形式。**原本每个进程的内存地址空间都是相互隔离的，但操作系统提供了让进程主动创建、映射、分离、控制某一块内存的程序接口。当一块内存被多进程共享**时，各个进程往往会与其它通信机制，譬如信号量结合使用，来达到进程间同步及互斥的协调操作。
3. 套接字接口（Socket）RPc：**消息队列和共享内存只适合单机多进程间的通信，套接字接口 是更为普适的进程间通信机制，可用于不同机器之间的进程通信**。套接字（Socket）起 初是由 UNIX 系统的 BSD 分支开发出来的，现在已经移植到所有主流的操作系统上。

当仅限于本机进程间通信时，套接字接口是被优化过的，不会经过网络协 议栈，不需要打包拆包、计算校验和、维护序号和应答等操作，只是简单地将应用层数 据从一个进程拷贝到另一个进程，这种进程间通信方式有个专名的名称：UNIX Domain Socket，又叫做 IPC Socket。

- **只支持半双工通信：** 意味着数据传输是单向交替的，通信的一方既是发送者也是接收者，但同一时间只能进行一种操作。
- **仅限于父子进程或兄弟进程之间使用：** 由于UNIX Domain Socket是本地通信的一种方式，因此通常用于同一台机器上的进程间通信，比如父子进程或兄弟进程之间。

1. **空分复用技术（Swapping）：** 空分复用是操作系统中一种管理内存的机制。它将当前不被使用或暂时不需要的内存页面从物理内存移到磁盘上（称为交换区），以便释放物理内存以供其他程序或进程使用。当需要时，这些页面可以再次被换回物理内存中。这种技术能够有效地扩展可用内存的大小。空分复用需要快速的内存地址映射，使得操作系统能够迅速将虚拟内存地址转换为实际物理内存地址。这种映射是由CPU中的存储器管理单元（Memory Management Unit，MMU）负责完成的。
2. **时分复用技术（Time Division Multiplexing，TDM）：** 时分复用是一种通信技术，用于多路复用，让多个用户或信号共享同一个通信信道或资源。在操作系统中，时分复用也可以被理解为在单个CPU上执行多个进程的技术。这种技术会分割时间成为多个时间片（Time Slice），每个时间片分配给不同的进程，使得它们轮流占用CPU并执行。这种技术可以使系统中的多个进程表现出并发性，尽管实际上在同一时间点只有一个进程在执行。这种并发性是通过快速的进程切换和调度实现的。

**多线程/多进程解决了阻塞问题**

线程是抢占式，**而协程是非抢占式的**，所以需要用户自己释放使用权来切换到其他协程，因此同一时间其实只有一个协程拥有运行权，相当于单线程的能力。

协程并不是取代线程, 而且**抽象于线程之上**, 线程是被分割的CPU资源, 协程是组织好的代码流程, 协程需要线程来承载运行, 线程是协程的资源, 但协程不会直接使用线程, 协程直接利用的是执行器(Interceptor), 执行器可以关联任意线程或线程池, 可以使当前线程, UI线程, 或新建新程.。

**线程是协程的资源。协程通过Interceptor来间接使用线程这个资源。**

内核态和用户态

内核kernel是程序，它需要运行，就必须被分配 CPU。因此，CPU 上会运行两种程序，一种是操作系统的内核程序（也称为系统程序），一种是应用程序。前者完成系统任务，后者实现应用任务。两者之间有控制和被控制的关系，前者有权管理和分配资源，而后者只能**向系统申请使用资源。**

**文件传输零拷贝**

什么是 DMA 技术？简单理解就是，**在进行 I/O 设备和内存的数据传输的时候，数据搬运的工作全部交给 DMA 控制器，而 CPU 不再参与任何与数据搬运相关的事情，这样 CPU 就可以去处理别的事务**。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/886c819c-75b8-4ea9-ac7f-812d4c949002/Untitled.png)

上下文切换到成本并不小，一次切换需要耗时几十纳秒到几微秒，虽然时间看上去很短，但是在高并发的场景下，这类时间容易被累积和放大，从而影响系统的性能。 其次，还发生了 4 次数据拷贝，其中两次是 DMA 的拷贝，另外两次则是通过 CPU 拷贝的，下面说一下这个过程： 

第一次拷贝，把磁盘上的数据拷贝到操作系统内核的缓冲区里，这个拷贝的过程是通过 DMA 搬运的。 第二次拷贝，把内核缓冲区的数据拷贝到用户的缓冲区里，于是我们应用程序就可以使用这部分数据了，这个拷贝到过程是由 CPU 完成的。 第三次拷贝，把刚才拷贝到用户的缓冲区里的数据，再拷贝到内核的 socket 的缓冲区里，这个过程依然还是由 CPU 搬运的。 第四次拷贝，把内核的 socket 缓冲区里的数据，拷贝到网卡的缓冲区里，这个过程又是由 DMA 搬运的。

 我们回过头看这个文件传输的过程，我们只是搬运一份数据，结果却搬运了 4 次，过多的数据拷贝无疑会消耗 CPU 资源，大大降低了系统性能。 这种简单又传统的文件传输方式，存在冗余的上文切换和数据拷贝，在高并发系统里是非常糟糕的，多了很多不必要的开销，会严重影响系统性能。

**所以，要想提高文件传输的性能，就需要减少「用户态与内核态的上下文切换」和「内存拷贝」的次数。**

**零拷贝（*Zero-copy*）技术，因为我们没有在内存层面去拷贝数据，也就是说全程没有通过 CPU 来搬运数据，所有的数据都是通过 DMA 来进行传输的。**。

零拷贝技术的文件传输方式相比传统文件传输的方式，减少了 2 次上下文切换和数据拷贝次数，**只需要 2 次上下文切换和数据拷贝次数，就可以完成文件的传输，而且 2 次的数据拷贝过程，都不需要通过 CPU，2 次都是由 DMA 来搬运。**

所以，总体来看，**零拷贝技术可以把文件传输的性能提高至少一倍以上**。

事实上，Kafka 这个开源项目，就利用了「零拷贝」技术，从而大幅提升了 I/O 的吞吐率，这也是 Kafka 在处理海量数据为什么这么快的原因之一。

如果你追溯 Kafka 文件传输的代码，你会发现，最终它调用了 Java NIO 库里的 `transferTo` 方法

## 并发

并发Concurrent：无论上一个开始执行的任务是否完成，当前任务都可以开始执行 （也就是说，A B 顺序执行的话，A 一定会比 B 先完成，而并发执行则不一定。） 与可以一起执行的并行（parallel）相对的是不可以一起执行的串行（serial）

从宏观方面来说，并发就是同时进行多种时间，实际上，这几种时间，并不是同时进行的，而是交替进行的，而由于CPU的运算速度非常的快，同一时间只有一个线程运行

并行：则是真正意义上的同时进行多种事情。这种只可以在多核CPU的基础上完成。

综上，并发与并行并不是互斥的概念，只是前者关注的是任务的抽象调度、后者关注的是任务的实际执行。而它们又是相关的，比如**并行一定会允许并发**。 所以题目中的例子：

### Cpu

CPU 里有两部分： 一部分叫做 Control Unit，负责控制。比如计数器，指令寄存，等等。

一部分叫做 Logic Unit，负责运算。比如加法器，累加器，等等。有些也会把 ‘ 数据总线’ 归于逻辑运算单元里

单核 CPU 多任务：并发（不必等上一个任务完成才开始下一个任务）、串行（只有一个实际执行任务的 CPU 核）

!https://img-blog.csdnimg.cn/20200706205605930.JPG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW95YW5namlhbjcyNA==,size_16,color_FFFFFF,t_70

**单核cpu同一时间只能运行一个线程**

区别：进程是操作系统分配资源的基本单位，线程是任务调度和执行的

**1.CPU角度来看:**

我们以Intel的Core i5-8250U为例来举例,它是[四核八线程](https://product.pconline.com.cn/so/s63153/)的CPU ,

我认为是一个CPU集成了4个核心,一般来说一个核心对应一个线程,Intel通过超线程技术来实现一个核心对应2个线程,所以它是四核8线程.

线程数：是同一时刻设备能并行执行的程序个数,**这里说的线程是CPU级别的,不是java里的线程.**

**2.操作系统角度:**

进程是正在运行的程序的实例。它包含了程序执行所需的代码、数据和系统资源，例如内存空间、文件和设备等。每个进程都是独立的，有自己独立的内存空间，它们之间不能直接访问对方的内存。所以说**进程是最小的资源分配单位,**

我们可以看到这个任务管理器的图,我电脑是4核8线程的CPU,我的电脑四核八线程，是采用超线程技术将一个物理处理核心模拟成两个逻辑处理核心.

我认为,一个逻辑处理器核心同一时间点只能执行一个进程,那理论上最多应该同时执行8个进程啊.

我的电脑同时开启了213个进程,2900个线程,那它是怎么处理的呢?我找了下资料

原来操作系统是采用的是时间片轮转的抢占式调度方式，每个进程有各自独立的一块内存，使得各个进程之间内存地址相互隔离,

由于CPU的执行效率非常高，时间片非常短，在各个任务之间快速地切换，给人的感觉就是多个任务在“同时进行”.

REAL TIME System

实时操作系统与一般的[操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)相比，最大的特色就是“[实时性](https://zh.wikipedia.org/wiki/%E5%AE%9E%E6%97%B6%E8%AE%A1%E7%AE%97)”[[1]](https://zh.wikipedia.org/zh-cn/%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F#cite_note-1)，如果有一个任务需要执行，实时操作系统会马上（在较短时间内）执行该任务，不会有较长的延时。这种特性保证了各个任务的及时执行。实时操作系统分为两大类:

- 事件驱动型。当一个高优先级的任务需要执行时，系统会自动[切换](https://zh.wikipedia.org/wiki/%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BA%A4%E6%8F%9B)到这个任务。这种根据优先级调度任务的方式称为[抢占式任务处理](https://zh.wikipedia.org/wiki/%E6%8A%A2%E5%8D%A0%E5%BC%8F%E4%BB%BB%E5%8A%A1%E5%A4%84%E7%90%86)。
- 时间触发型。每个任务在各自设定好的的时间间隔内重复、轮流调度。

关于实时系统，有很多人有错误的认知：

1. 实时系统一定很快，**错误**。实时系统不一定快，相反的，实时系统的效率往往不高，如果系统中存在着周期性的高优先级任务，往往会导致实时系统的低优先级任务被周期性的打断，造成整个系统[吞吐量](https://www.zhihu.com/search?q=%E5%90%9E%E5%90%90%E9%87%8F&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%222600653219%22%7D)下降（比如[机械硬盘](https://www.zhihu.com/search?q=%E6%9C%BA%E6%A2%B0%E7%A1%AC%E7%9B%98&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%222600653219%22%7D)访问，高低任务交叉执行会导致磁头反复移动，效率降低）。

2. 实时系统一定很小，代码精简，**错误**。现在大型的实时系统已经很大了，一个操作系统的代码中，规模最大的往往是各种驱动，现代实时操作系统因为要支持多种硬件平台，驱动规模不会太小。

3. 实时系统里不能有delay/sleep操作，**错误**。实时系统里可以有[delay](https://www.zhihu.com/search?q=delay&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%222600653219%22%7D)的，因为delay可能是用户行为，delay本身也是一个确定性的操作，实时系统里应该避免不确定的delay动作。

---

实时系统的设计原则是**要避免不确定性的设计，实时系统可以很慢，效率可以低**，确定性才是必须的

### **进程与线程**

线程最大的区别在于上下文切换过程中，**线程不用切换虚拟内存，因为同一个进程内的线程都是共享虚拟内存空间的，线程就单这一点不用切换，就相比进程上下文切换的性能开销减少了很多。**

**进程（Process）：**

1. **定义：** 进程是程序在执行时的一个实例。它包含了程序代码、数据以及执行时的环境。每个进程都有独立的内存空间，使得多个进程能够同时运行，互不干扰。
2. **资源隔离：** 不同的进程之间具有独立的内存空间和资源，一个进程的崩溃不会直接影响其他进程。
3. **通信开销：** 进程之间的通信开销较大，需要使用操作系统提供的IPC（进程间通信）机制，如管道、消息队列、共享内存等。
4. **创建开销：** 创建新进程的开销相对较大，涉及复制父进程的内存空间等操作。
5. **并发性：** 进程之间可以实现真正的并发，因为它们在不同的内存空间中执行，不会互相干扰。

**线程（Thread）：**

1. **定义：** 线程是进程中的一个执行单元，一个进程可以包含多个线程。所有线程共享进程的内存空间和资源，可以更高效地进行并发执行。
2. **资源共享：** 线程之间共享同一进程的内存空间，可以直接访问相同的数据和资源。
3. **通信开销：** 由于线程共享内存，上下文切换快，线程之间的通信开销较小，但也需要进行同步和互斥操作以避免竞争条件。
4. **创建开销：** 创建新线程的开销相对较小，因为新线程可以共享父进程的内存空间。
5. **并发性：** 线程之间的并发性比进程更高，因为它们共享相同的内存空间，但同时也会增加竞争条件和同步的复杂性。

协程

- 协程的调度完全由用户控制。
- 一个线程可以拥有多个协程，协程不是被操作系统内核所管理，而完全是由程序所控制。
- 与其让操作系统调度，不如我自己来，这就是协程

**进程就是包换上下文切换的程序执行时间总和** = **CPU加载上下文+CPU执行+CPU保存上下文** 由于创建或撤销进程时，系统都要为之分配或回收资源，如内存空间、I/O 设备等，所付出的开销远大于创建或撤销线程时的开销。类似地，在进行进程切换时，涉及当前执行进程 CPU 环境的保存及新调度进程 CPU 环境的设置，而线程切换时只需保存和设置少量寄存器内容，开销很小。

## 同步与异步

**线程同步（Thread Synchronization）**是指在多线程编程中，为了避免多个线程之间对共享资源的并发访问引发的问题（如竞争条件、死锁等），需要采取措施来协调线程的执行，以确保线程之间的操作按照期望的顺序进行。线程同步的目的是保证多个线程能够有序地访问共享资源，避免数据的不一致和错误。

常见的线程同步机制包括：

1. **互斥锁（Mutex）：** 互斥锁是一种最基本的线程同步机制，用于保护共享资源免受并发访问。一次只有一个线程能够持有互斥锁，其他线程必须等待直到锁被释放。这样可以防止多个线程同时修改同一资源。
2. **信号量（Semaphore）：** 信号量是一种计数器，用于控制多个线程对共享资源的访问。它可以用来**限制同时访问资源的线程数量**，也可以用于线程间的通信。
3. **条件变量（Condition Variable）：** 条件变量用于在线程之间传递信息，以及在某些条件满足时唤醒等待的线程。它通常和互斥锁一起使用，以实现更复杂的同步需求。
4. **读写锁（Read-Write Lock）：** 读写锁允许多个线程同时读取共享资源，但只允许一个线程进行写操作。这可以提高读操作的并发性能。多个读线程可以同时获得锁，写线程会阻塞其他写线程和读线程。**乐观锁**
5. **原子操作（Atomic Operations）：** 原子操作是不可中断的操作，可以在单个指令中完成。它们可以用于保护简单的共享数据结构，避免竞争条件。
6. **自旋锁**： 自旋锁与互斥量类似，但它不使线程进入阻塞态；而是在获取锁之前一直占用CPU，处于忙等（自旋）状态。
7. **屏障（Barrier）：** 屏障用于等待多个线程都达到某个点，然后再继续执行后续操作，常用于需要多个线程协同完成的任务。

1. **乐观锁**：乐观锁是一种假设在大多数情况下不会发生冲突的锁。它不会在访问共享资源之前获取锁，而是在更新共享资源时进行检查。如果检测到其他线程已经更新了共享资源，那么当前线程可能需要重试或者采取其他措施来处理冲突。乐观锁通常用于多读的场景，可以提高吞吐量。
2. **悲观锁**：悲观锁是一种假设在大多数情况下会发生冲突的锁。它在访问共享资源之前获取锁，并假定其他线程会干扰。悲观锁通常用于写入操作，以确保在写入共享资源时不会发生冲突。

乐观锁的实现方式主要有两种：CAS机制和版本号机制。

对于ABA问题，比较有效的方案是引入版本号，内存中的值每发生一次变化，版本号都+1；在进行CAS操作时，不仅比较内存中的值，也会比较版本号，只有当二者都没有变化时，CAS才能执行成功。Java中的AtomicStampedReference类便是使用版本号来解决ABA问题的。

除了CAS，版本号机制也可以用来实现乐观锁。版本号机制的基本思路是在数据中增加一个字段version，表示该数据的版本号，每当数据被修改，版本号加1。当某个线程查询数据时，将该数据的版本号一起查出来；当该线程更新数据时，判断当前版本号与之前读取的版本号是否一致，如果一致才进行操作。

临界区 对临界资源进行访问的那段代码称为临界区。

为了互斥访问临界资源，每个进程在进入临界区之前，需要先进行检查。

// entry section // critical section; // exit section

1. 同步与互斥 同步：多个进程因为合作产生的直接制约关系，使得进程有一定的先后执行关系。 互斥：多个进程在同一时刻只有一个进程能进入临界区。
2. 信号量 信号量（Semaphore）是一个整型变量，可以对其执行 down 和 up 操作，也就是常见的 P 和 V 操作。

down : 如果信号量大于 0 ，执行 -1 操作；如果信号量等于 0，进程睡眠，等待信号量大于 0； up ：对信号量执行 +1 操作，唤醒睡眠的进程让其完成 down 操作。 down 和 up 操作需要被设计成原语，不可分割，通常的做法是在执行这些操作的时候屏蔽中断。

如果信号量的取值只能为 0 或者 1，那么就成为了 互斥量（Mutex） ，0 表示临界区已经加锁，1 表示临界区解锁。

**互斥锁**

1严格轮换法 加入锁变量 2 Peterson算法 进程0出临界区后进程1才会离开忙等

```jsx
typedef int semaphore; semaphore mutex = 1; 
void P1() { down(&mutex);
 // 临界区 up(&mutex); }
void P2() { down(&mutex); // 临界区 up(&mutex); } 使用信号量实现生产者-消费者
```

问题描述：使用一个缓冲区来保存物品，只有缓冲区没有满，生产者才可以放入物品；只有缓冲区不为空，消费者才可以拿走物品。

因为缓冲区属于临界资源，因此需要使用一个互斥量 mutex 来控制对缓冲区的互斥访问。

为了同步生产者和消费者的行为，需要记录缓冲区中物品的数量。数量可以使用信号量来进行统计，这里需要使用两个信号量：empty 记录空缓冲区的数量，full 记录满缓冲区的数量。其中，empty 信号量是在生产者进程中使用，当 empty 不为 0 时，生产者才可以放入物品；full 信号量是在消费者进程中使用，当 full 信号量不为 0 时，消费者才可以取走物品。

注意，不能先对缓冲区进行加锁，再测试信号量。也就是说，不能先执行 down(mutex) 再执行 down(empty)。如果这么做了，那么可能会出现这种情况：生产者对缓冲区加锁后，执行 down(empty) 操作，发现 empty = 0，此时生产者睡眠。消费者不能进入临界区，因为生产者对缓冲区加锁了，消费者就无法执行 up(empty) 操作，empty 永远都为 0，导致生产者永远等待下，不会释放锁，消费者因此也会永远等待下去。

### 异步编程

异步（Asynchronous）：异步编程是一种处理并发操作的方式，其中不需要等待一个操作完成才能执行下一个操作。在异步编程中，一个操作的启动不会阻塞程序的其他部分，**而是允许程序继续执行其他操作，之后当异步操作完成时，程序会得到通知或回调。**这种方式可以提高程序的响应性和并发性。但**由于资源有限，进程的执行不是一贯到底的，这就是进程的异步性。 异步和同步是相对的，同步就是顺序执行，执行完一个再执行下一个，需要等待、协调运行**

"异步阻塞" 意味着可能存在某些情况下，虽然使用了异步编程的方式，但在某些时刻程序仍然被阻塞，等待某些操作的完成。这种情况可能发生在以下情形下：

- 某些异步操作内部使用了同步操作，导致当前线程在等待这些同步操作完成时被阻塞。
- 异步操作之间存在依赖关系，某个异步操作必须等待另一个异步操作完成后才能执行。
- 程序中的某些部分仍然采用同步编程方式，而不是全面采用异步编程。

要避免异步操作中的阻塞，通常需要使用异步编程框架和模式，以确保在异步操作中也不会阻塞程序的其他部分。这包括使用回调、Promise、异步/await等机制来管理异步操作的执行顺序和依赖关系，从而实现真正的非阻塞异步编程。

eg.       我们以经典的读取文件的模型举例。（对操作系统而言，所有的输入输出设备都被抽象成文件。）

在发起读取文件的请求时，应用层会调用系统内核的 I/O 接口。

如果应用层调用的是阻塞型 I/O，那么在调用之后，应用层即刻被挂起，一直出于等待数据返回的状态，直到系统内核从磁盘读取完数据并返回给应用层，应用层才用获得的数据进行接下来的其他操作。

如果应用层调用的是非阻塞 I/O，那么调用后，系统内核会立即返回（虽然还没有文件内容的数据），应用层并不会被挂起，它可以做其他任意它想做的操作。（至于文件内容数据如何返回给应用层，这已经超出了阻塞和非阻塞的辨别范畴。）

阻塞和非阻塞解决了应用层等待数据返回时的状态问题，那系统内核获取到的数据到底如何返回给应用层呢？是否是阻塞还是非阻塞，**关注的是接口调用（发出请求）后等待数据返回时的状态。**

同步还是异步，**关注的是任务完成时消息通知的方式。由调用方盲目主动问询的方式是同步调用，由被调用方主动通知调用方任务已完成的方式是[异步调用](https://www.zhihu.com/search?q=%E5%BC%82%E6%AD%A5%E8%B0%83%E7%94%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2222707398%22%7D)。**

同步的优点是：同步是按照顺序一个一个来，不会乱掉，更不会出现上面代码没有执行完就执行下面的代码， 缺点：是解析的速度没有异步的快；

异步的优点是：异步是接取一个任务，直接给后台，在接下一个任务，一直一直这样，谁的先读取完先执行谁的， 缺点：没有顺序 ，谁先读取完先执行谁的 ，会出现上面的代码还没出来下面的就已经出来了，会报错；

**异步是当一个调用请求发送给被调用者,而调用者不用等待其结果的返回而可以做其它的事情。实现异步可以采用多线程技术或则交给另外的进程来处理。**

# 软工

- 需求在初始阶段就能够被精心设计。
- 具有容易理解的线性结构。
- 易于管理。

瀑布的缺点

- 既不灵活，又不支持变更。
- 任何阶段一旦出现延迟，都会导致项目无法推进。
- 由于较为死板，因此项目总体时间较长。
- 并不鼓励在初始阶段之后，利益相关者进行积极地沟通。
1. Architecture comes in Designing phase and Design Patterns comes in Building phase.
2. Architectural pattern is like a blue print and design pattern is actual implementation.
3. Architecture is base which everything else adhere to and design pattern is a way to structure classes to solve common problems.
4. All **Architecture is design pattern** but all **design pattern can not be architecture.** Like MVC can come under both. But singleton design pattern can not be an architecture pattern. MVC, MVVM all come under both.

**敏捷软件开发**

A build is an executable version of the system.

Integration build plan describes the sequences of build in an iteration

## Testing

白盒测试也称为结构测试，主要用于检测软件编码过程中的错误。程序员的编程经验、对[编程](https://baike.baidu.com/item/%E7%BC%96%E7%A8%8B/139828)软件的掌握程度、工作状态等因素都会影响到编程质量，导致代码错误。

黑盒测试又称为功能测试，主要检测软件的每一个功能是否能够正常使用。在测试过程中，将程序看成不能打开的黑盒子，不考虑程序内部结构和特性的基础上通过程序接口进行测试，检查程序功能是否按照设计需求以及说明书的规定能够正常打开使用。

单元测试，需要遵循一下规则：

1、每一个测试方法上使用@Test进行修饰

2、每一个测试方法必须使用public void 进行修饰

3、每一个测试方法不能携带参数

4、测试代码和源代码在两个不同的项目路径下

5、测试类的包应该和被测试类保持一致

6、测试单元中的每个方法必须可以独立测试

junit如何解决这个问题的呢？答案在于内部提供了一个断言机制，他能够将我们预期的结果和实际的结果进行比对，判断出是否满足我们的期望。相信到这，你已经迫不及待的想认识一下junit，下面我们直接通过案例，来分析一下这个机制。

灰度发布，又名金丝雀发布，或者灰度测试，是指在黑与白之间能够平滑过渡的一种发布方式。在其上可以进行A/B testing，即让一部分用户继续用产品特性A，一部分用户开始用产品特性B，如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户都迁移到B上面来。

灰度发布是对某一产品的发布逐步扩大使用群体范围，也叫灰度放量。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度。

灰度期：灰度发布开始到结束期间的这一段时间，称为灰度期。

**灰度发布的意义**

灰度发布能及早获得用户的意见反馈，完善产品功能，提升产品质量，让用户参与产品测试，加强与用户互动，降低产品升级所影响的用户范围。

**灰度发布步骤**

定义目标

选定策略：包括用户规模、发布频率、功能覆盖度、回滚策略、运营策略、新旧系统部署策略等

筛选用户：包括用户特征、用户数量、用户常用功能、用户范围等

部署系统：部署新系统、部署用户行为分析系统（web analytics）、设定分流规则、运营数据分析、分流规则微调

发布总结：用户行为分析报告、用户问卷调查、社会化媒体意见收集、形成产品功能改进列表

产品完善

新一轮灰度发布或完整发布

### UML统一建模语言

是一种为[面向对象](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/2262089)系统的产品进行说明、可视化和[编制](https://baike.baidu.com/item/%E7%BC%96%E5%88%B6/9907954)文档的一种标准语言，是非专利的第三代建模和规约语言。UML是面向对象设计的建模工具，独立于任何具体程序设计语言。

windows中只有“/r/n”才能正确触发“我们理解的换行”操作

## Design pattern

生产者消费者模式并不是GOF提出的23种设计模式之一，23种设计模式都是建立在**面向对象**的基础之上的，但其实面向过程的编程中也有很多高效的编程模式

**创建型模式（Creational Patterns）**

**工厂模式（Factory Pattern）**：通过定义一个创建对象的接口，但是让子类决定具体实例化哪个类。包括简单工厂、工厂方法和抽象工厂模式。

**单例模式（Singleton Pattern）**：确保一个类只有一个实例，并提供全局访问点。

**建造者模式（Builder Pattern）**：将一个复杂对象的构建与其表示分离，使得同样的构建过程可以创建不同的表示。

**原型模式（Prototype Pattern）**：用于创建对象的一种模式，通过复制现有对象来生成新对象。

**结构型模式（Structural Patterns）**实现接口（**`implements`**）表示类遵循了接口定义，并实现了接口中声明的方法。

**适配器模式（Adapter Pattern）**：将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的类可以一起工作。

**装饰者模式（Decorator Pattern）**：动态地给对象添加额外的职责，就增加功能而言，装饰者模式比生成子类更加灵活。

**代理模式（Proxy Pattern）**：控制对对象的访问，可以用于增加额外的操作或控制对原始对象的访问。

**组合模式（Composite Pattern）**：将对象组合成树形结构以表示“部分-整体”的层次结构。

**行为型模式（Behavioral Patterns）**

**观察者模式（Observer Pattern）**：定义了对象之间的一对多依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。    **示例**：一个购物网站中，用户下单成功后，通知库存系统减少相应商品的库存；同时通知订单处理系统生成订单信息。

**策略模式（Strategy Pattern）**：定义了一系列的算法，并将每一个算法封装起来，使它们可以相互替换。

**模板方法模式（Template Method Pattern）**：定义一个操作中的算法骨架，而将一些步骤延迟到子类中。使得子类可以不改变一个算法的结构即可重新定义该算法的某些特定步骤。

**命令模式（Command Pattern）**：将请求封装成对象，从而允许使用不同的请求、队列或日志请求来参数化其他对象。

**简单工厂，工厂方法，[抽象工厂]**都属于设计模式中的创建型模式。其主要功能都是帮助我们把对象的实例化部分抽取了出来，优化了系统的架构，并且增强了系统的扩展性。

★工厂模式中，重要的是工厂类，而不是产品类。产品类可以是多种形式，多层继承或者是单个类都是可以的。但要明确的，工厂模式的接口只会返回一种类型的实例，这是在设计产品类的时候需要注意的，最好是有父类或者共同实现的接口。

★使用工厂模式，返回的实例一定是工厂创建的，而不是从其他对象中获取的。

★工厂模式返回的实例可以不是新创建的，返回由工厂创建好的实例也是可以的。

发现[简单工厂模式](https://so.csdn.net/so/search?q=%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F&spm=1001.2101.3001.7020)存在一系列问题：

- 工厂类集中了所有实例（产品）的创建逻辑，一旦这个工厂不能正常工作，整个系统都会受到影响；
- 违背“开放 - 关闭原则”，一旦添加新产品就不得不修改工厂类的逻辑，这样就会造成工厂逻辑过于复杂。
- 简单工厂模式由于使用了静态工厂方法，静态方法不能被继承和重写，会造成工厂角色无法形成基于继承的等级结构。

为了解决上述的问题，我们又使用了一种新的[设计模式](https://so.csdn.net/so/search?q=%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F&spm=1001.2101.3001.7020)：工厂方法模式。工厂方法模式可以说是简单工厂模式的进一步抽象和拓展，在保留了简单工厂的封装优点的同时，让扩展变得简单，让继承变得可行，增加了多态性的体现。

区别

简单工厂 ： 用来生产同一等级结构中的任意产品。一台咖啡机就可以理解为一个工厂模式，你只需要按下想喝的咖啡品类的按钮（摩卡或拿铁），它就会给你生产一杯相应的咖啡，你不需要管它内部的具体实现，只要告诉它你的需求即可。（对于增加新的产品，无能为力）

工厂方法 ：用来生产同一等级结构中的固定产品。（支持增加任意产品）**抽象工厂** ：用来生产不同产品族的全部产品。（对于增加新的产品，无能为力；支持增加产品族）

不想喝咖啡了想喝啤酒，这个时候如果直接修改简单工厂里面的代码，这种做法不但不够优雅，也不符合软件设计的“开闭原则”,这时直接继承抽象class override方法

**单例模式**（Singleton Pattern）是 Java 中最简单的设计模式之一，提供了一种创建对象的最佳方式。这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。

- 1、单例类只能有一个实例。
- 2、单例类必须自己创建自己的唯一实例。
- 3、单例类必须给所有其他对象提供这一实例。

**优点：**

- 1、在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。
- 2、避免对资源的多重占用（比如写文件操作）。

**缺点：**没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。

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

**使用场景：**

- 1、要求生产唯一序列号。
- 2、WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。
- 3、创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。

**注意事项：**getInstance() 方法中需要使用同步锁 synchronized (Singleton.class) 防止多线程同时进入造成 instance 被多次实例化。

建议使用第 3 种**饿汉**方式。只有在要明确实现 lazy loading 效果时，才会使用第 5 种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第 6 种枚举方式。

创建者模式

Builder pattern 主要解决在软件系统中，有时候面临着“一个复杂对象”的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定。

1、去肯德基，汉堡、可乐、薯条、炸鸡翅等是不变的，而其组合是经常变化的，生成出所谓的“套餐”。 2、JAVA 中的 StringBuilder。

**原型模式（Prototype Pattern）**是用于创建重复的对象，同时又能保证性能。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。

这种模式是实现了一个原型接口，该接口用于创建当前对象的克隆。当直接创建对象的代价比较大时，则采用这种模式。例如，一个对象需要在一个高代价的数据库操作之后被创建。我们可以缓存该对象，在下一个请求时返回它的克隆，在需要的时候更新数据库，以此来减少数据库调用。

java中的深浅拷贝，需要拷贝的原型类 需要实现`Cloneable`接口，然后重写其中的`clone`方法，才可以实现类的拷贝。

适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。这种模式涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能

**享元模式**（Flyweight Pattern）主要用于减少创建对象的数量，以减少内存占用和提高性能。这种类型的设计模式属于结构型模式，它提供了减少对象数量从而改善应用所需的对象结构的方式。

享元模式尝试重用现有的同类对象，如果未找到匹配的对象，则创建新对象。

## SOLID原则

SRP 单一责任原则 OCP 开放封闭原则 LSP 里氏替换原则 ISP 接口隔离原则 DIP 依赖倒置原则

**单一责任原则** 指的是一个类或者一个方法只做一件事。如果一个类承担的职责过多，就等于把这些职责耦合在一起，一个职责的变化就 可能抑制或者削弱这个类完成其他职责的能力。例如餐厅服务员负责把订单给厨师去做，而不是服务员又要订单又要炒菜。

**开放封闭原则**

对扩展开放，对修改关闭。意为一个类独立之后就不应该去修改它，而是以扩展的方式适应新需求。例如一开始做了普通 计算器程序，突然添加新需求，要再做一个程序员计算器，这时不应该修改普通计算器内部，应该使用面向接口编程， 组合实现扩展。

https://juejin.cn/post/684490360656337306

**★函数模块遵循OCP，基本手段（或主要体现）为设计出通用性的函数。**

**为什么要将行为作为参数Parameterization**

用户需求的频繁更改发生在方方面面，程序员常常面对“某种”这个字眼所标志的变化，即“某种”是对各种各样变化的抽象。实验4的需求变化，发生在函数级别，当要输出0-x之间符合“某种”条件的数时，程序员需要在不修改他的源代码的前提下，设计一个函数filter，能够一次性地应对各种可能的条件。换句话说，程序员需要设计一个在各种情况下都能够使用的、具有**一般性/通用性的函**数。

**Liskov Substitution Principle**

> 子类必须能够替换其父类而不改变程序的正确性。如果一个子类不能完全替换其父类，那么这个继承关系可能存在问题。 **LSP是继承复用的基石，只有当衍生类可以替换掉基类，软件单位的功能不受到影响时，基类才能真正被复用**，而衍生类也能够在基类的基础上增加新的行为。里氏代换原则是对“开-闭”原则的**补充**。实现“开-闭”原则的关键步骤就是抽象化。而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。
> 

不符合LSP的最常见的情况是

1.父类定义的方法或属性有过于严格的约束，而子类重写该方法或属性时，放宽了这些约束。这可能导致父类方法的前置条件（Preconditions）无法满足；

2.子类不能实现父类的抽象方法

**接口隔离原则** 类不应该依赖不需要的接口，知道越少越好。例如电话接口只约束接电话和挂电话，不需要让依赖者知道还有通讯录。

**依赖倒置原则** 指的是高级模块不应该依赖低级模块，而是依赖抽象。抽象不能依赖细节，细节要依赖抽象。比如类A内有类B对象，称为类A依赖类B，但是不应该这样做，而是选择类A去依赖抽象。例如垃圾收集器不管垃圾是什么类型，要是垃圾就行。

[迪米特法则](https://so.csdn.net/so/search?q=%E8%BF%AA%E7%B1%B3%E7%89%B9%E6%B3%95%E5%88%99&spm=1001.2101.3001.7020)（law of demeter,LoD）也成为最少知识原则（least knowledge principle），虽然名字不同，但描述的是同一个规则：一个对象应该对其他对象有最少的了解。通俗地讲，一个类应该对自己需要耦合或调用的类知道得最少 **低耦合**

# leetcode

贪心选择的一般特征：贪心选择性质和最优子结构性质。

贪心算法和动态规划算法都要求问题具有最优子结构性质，这是两类算法的一个共同点。大多数时候，能用贪心算法求解的问题，都可以用动态规划算法求解。但是能用动态规划求解的，不一定能用贪心算法进行求解。

找到最优子结构 => 动态规划解**最值问题**，状态转移方程

## **栈、队列**

**栈是递归的底层实现，** 我们用栈实现队列，用队列实现栈来掌握的栈与队列的基本操作。

接着，通过括号匹配问题、字符串去重问题、删除字串问题，逆波兰表达式问题来系统讲解了栈在系统中的应用，以及使用技巧。

通过求滑动窗口最大值，以及前K个高频元素介绍了两种队列：单调队列和优先级队列，这是特殊场景解决问题的利器，是一定要掌握的。

> 正常循环的情况下，数组的滚动（游标移动）是向后的，引入栈的时候，**则可以有了向前滚动的机会（有了一定的反悔的机会），然后这样子就能够解决一些局部的问题**（比如说，寻找相邻的大的数字）。由于栈还可以对于没有价值（已经发现了大的数字）的东西删除，这样子的遗忘功能，**简化了搜索空间，问题空间。**
> 

当一个算法完全不进行**多余**的运算，那么它是一个时间复杂度最低的算法。但我们往往会对一些结果进行**重复**的计算，那么栈的引入就是为了解决这样的问题，栈**存储**了一些**重要**的运算结果，用于和接下来的元素进行**比较**。

**单调队列**
	可以查询区间最值（不能维护区间k大，因为队列中很有可能没有k个元素）
	优化DP 	优化动态规划方面问题的一种特殊数据结构，且多数情况是与定长连续子区间问题相关联。
**单调栈       对于某个元素i：**

左边区间第一个比它小的数，第一个比它大的数
	确定这个元素是否是区间最值
	右边区间第一个大于它的值
	到 右边区间第一个大于它的值 的距离
	确定以该元素为最值的最长区间

**单调递增栈**：只有比栈顶元素小的元素才能直接进栈，否则需要先将栈中比当前元素小的元素出栈，再将当前元素入栈。这样就保证了：栈中保留的都是比当前入栈元素大的值，并且从栈顶到栈底的元素值是单调递增的。

```jsx
def monotoneIncreasingStack(nums):
    stack = []
    for num in nums:
        while stack and num >= stack[-1]:
            stack.pop()
        stack.append(num)
```

2.1 寻找左侧第一个比当前元素大的元素 [#](https://algo.itcharge.cn/03.Stack/02.Monotone-Stack/01.Monotone-Stack/#21-%e5%af%bb%e6%89%be%e5%b7%a6%e4%be%a7%e7%ac%ac%e4%b8%80%e4%b8%aa%e6%af%94%e5%bd%93%e5%89%8d%e5%85%83%e7%b4%a0%e5%a4%a7%e7%9a%84%e5%85%83%e7%b4%a0)

从左到右遍历元素，构造单调递增栈（从栈顶到栈底递增）：

- 一个元素左侧第一个比它大的元素就是将其「插入单调递增栈」时的栈顶元素。
- 如果插入时的栈为空，则说明左侧不存在比当前元素大的元素。

单调队列实际上是单调栈的的升级版。单调栈只支持访问尾部，而单调队列两端都可以。

[单调队列](https://so.csdn.net/so/search?q=%E5%8D%95%E8%B0%83%E9%98%9F%E5%88%97&spm=1001.2101.3001.7020)是指：队列中元素之间的关系具有单调性，而且，队首和队尾都可以进行出队操作，只有队尾可以进行入队操作。

## **滑动窗口**

滑动窗口指的是这样一类问题的求解方法，在数组上通过双指针同向移动而解决的一类问题。将嵌套的循环问题，转换为单循环问题，降低[时间复杂度](https://www.zhihu.com/search?q=%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A620247024%7D)。

：寻找满足xx最长子串/子数组/子序列

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53295652-bbef-43ae-a3ef-cb7a6b304b5b/Untitled.png)

1.当不满足条件时，拓展右边界，当满足条件时，缩短左边界，最后得到一个解并暂存
2.循环第一步，又得到一个解，将其与第一个解相对比，得到最优解并暂存，以此类推。

### [347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)

最大（小）堆是指在树中，存在一个结点而且该结点有儿子结点，该结点的data域值都不小于（大于）其儿子结点的data域值，并且它是一个完全二叉树。

对于 topk 问题：最大堆求topk小，最小堆求 topk 大。

topk小：构建一个 k 个数的最大堆，当**读取的数小于根节点时**，替换根节点，重新塑造最大堆 topk大：构建一个 k 个数的最小堆，当读取的数**大于**根节点时，替换根节点，重新塑造最小堆 eg. leetcode 215

借助 哈希表 来建立数字和其出现次数的映射，遍历一遍数组统计元素的频率 维护一个元素数目为 k的最小堆why？

每次都将新的元素与堆顶元素（堆中频率最小的元素）进行比较 如果新的元素的频率比堆顶端的元素大，则弹出堆顶端的元素，将新的元素添加进堆中 最终，堆中的 kk 个元素即为前 kk 个高频元素

是使用小顶堆呢，还是大顶堆？

有的同学一想，题目要求前 K 个高频元素，那么果断用大顶堆啊。

那么问题来了，定义一个大小为k的大顶堆，在每次移动更新大顶堆的时候，每次弹出都把最大的元素弹出去了，那么怎么保留下来前K个高频元素呢。

**所以我们要用小顶堆，因为要统计最大前k个元素，只有小顶堆每次将最小的元素弹出，最后小顶堆里积累的才是前k个最大元素。**

**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)修改输入数组**

https://blog.csdn.net/A233666/article/details/113956814

如果不是原地修改的话，我们直接 new 一个 `int[]` 数组，把去重之后的元素放进这个新数组中，然后返回这个新数组即可。

但是原地删除，不允许我们 new 新数组，只能在原数组上操作，然后返回一个长度，这样就可以通过返回的长度和原始数组得到我们去重后的元素有哪些了。

这种需求在数组相关的算法题中时非常常见的，**通用解法就是我们前文 [双指针技巧](https://labuladong.gitee.io/algo/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E5%8F%8C%E6%8C%87%E9%92%88%E6%8A%80%E5%B7%A7.html) 中的快慢指针技巧**。

我们让慢指针 `slow` 走在后面，快指针 `fast` 走在前面探路，找到一个不重复的元素就告诉 `slow` 并让 `slow` 前进一步。这样当 `fast` 指针遍历完整个数组 `nums` 后，**`nums[0..slow]` 就是不重复元素**。

## 位运算

**最大化最小值/ 最小化最大值问题**
基本题型: 给定n个整数序列，将其划分为m个连续子序列，求这m个子序列的和的最大化最小值 或者最小化最大值问题。 Leetcode 410
解题思路: **二分法**

二分查找细节https://leetcode.cn/problems/binary-search/solution/er-fen-cha-zhao-xiang-jie-by-labuladong/

while 中是 < 还是 <=?

答：left==right时是否需要终止循环，是否找到

```cpp
 int right = nums.size(); // 定义target在左闭右开的区间里，即：[left, right)        while (left < right) { // 因为left == right的时候，在[left, right)是无效的空间，所以使用 <
```

```

//二分查找
int binary_search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if(nums[mid] == target) {
            // 直接返回
            return mid;
        }
    }
    // 直接返回
    return -1;
}
```

## 回溯法+剪枝

这一类问题都需要先画出树形图，然后编码实现。

编码通过 深度优先遍历 实现，使用一个列表，在 深度优先遍历 变化的过程中，遍历所有可能的列表并判断当前列表是否符合题目的要求

如果题目要求，结果集不计算顺序，此时需要按顺序搜索，才能做到不重不漏。「力扣」第 47 题（ 全排列 II ）、「力扣」第 15 题（ 三数之和 ）也使用了类似的思想，使得结果集没有重复。

Recursive algorithms can be both **in-place and not-in-place**, depending on how they are implemented. In computer science, an "in-place" algorithm is one that uses **a constant amount of extra memory** or auxiliary data structures to perform its operations, regardless of the size of the input data. On the other hand, a "not-in-place" algorithm uses additional memory that grows with the input size. 因此，虽然精确的空间复杂度分析（O(1)、O(n) 等）对于理论讨论和比较很有用，但现实世界的考虑通常会导致对算法的内存使用情况进行更细致的评估。目标是在空间效率和算法简单性之间取得平衡，使代码更容易理解和维护，同时仍然实现可接受的性能。 

## 组合数学

Catalan 数列

[data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

可以应用于以下问题：

1. 有 2n个人排成一行进入剧场。入场费 5 元。其中只有 n个人有一张 5 元钞票，另外 n 人只有 10 元钞票，剧院无其它钞票，问有多少种方法使得只要有 10 元的人买票，售票处就有 5 元的钞票找零？
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
2. 一位大城市的律师在她住所以北 n 个街区和以东 n 个街区处工作。每天她走 2n 个街区去上班。如果她从不穿越（但可以碰到）从家到办公室的对角线，那么有多少条可能的道路？
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
3. 在圆上选择 2n 个点，将这些点成对连接起来使得所得到的  条线段不相交的方法数？
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
4. 一个栈（无穷大）的进栈序列为1,2,3…n  有多少个不同的出栈序列？
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    
5. n个结点可构造多少个不同的二叉树？
    
    [data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
    

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/ac8a6425-a1eb-4273-a125-106d72d07352/Untitled.png)

**[97. 交错字符串](https://leetcode.cn/problems/interleaving-string/)**              

给定三个字符串 `s1`、`s2`、`s3`，请你帮忙验证 `s3` 是否是由 `s1` 和 `s2` ****交错** 组成的。

两个字符串 `s` 和 `t` **交错** 的定义与过程如下，其中每个字符串都会被分割成若干 **非空** 子字符串：

- `s = s1 + s2 + ... + sn`
- `t = t1 + t2 + ... + tm`
- `|n - m| <= 1`
- **交错** 是 `s1 + t1 + s2 + t2 + s3 + t3 + ...` 或者 `t1 + s1 + t2 + s2 + t3 + s3 + ...`

怎么想到DP解法而不是双指针 有感：

**斐波那契数列**：

- DFS解法是递归地计算第 n 个斐波那契数。
- 该问题可以转换为DP，通过存储每个子问题的解来减少重复计算，例如使用数组或哈希表来存储已计算的结果。

**NP-完全问题**：

- 一些问题，如旅行商问题（TSP）等属于NP-完全问题，DFS可能可以用来找到解，但难以以多项式时间转换为DP。

大部分能暴力递归式（dfs）解决的问题就在形式上是dp的了，你只要把暴力递归式的输入参数当成状态来看待，真正的难点在于把暴力递归的状态进行压缩合并变到多项式大小的状态集合，所以不是你意识不到他是不是dp问题，而是你没有足够的经验和思路去把一个算法最简单的状态集合设计出来. When doing leetcode, using dp的难点是你就算知道了用dp，也可能想不出状态转移方程
有时即使你意识到问题可以用DP解决，也可能遇到难以找到状态转移方程的困难。这可能需要更多的经验、练习和对问题的探索，以便设计出最优的状态集合和转移方程。

• 动态规划可以被看作是优化后的暴力递归版本。它通常通过存储子问题的解并避免重复计算来提高效率，从而将指数级的时间复杂度降低为多项式级别。

字符串的题 dfs 可作为一种解法。 **遇到字符串(字串，子数组，子序列)题，先想DP**.…

## 树和二叉树

快速排序就是个二叉树的前序遍历，归并 排序就是个二叉树的后序遍历

动归/DFS/回溯算法都可以看做二叉树问题的扩展，只是它们的关注点不同：

- **动态规划**：动态规划是一种将问题分解为子问题，并以自底向上的方式解决的方法。每个子问题的解决方案被记录下来，以避免重复计算。你可以将动态规划问题视为填充一张二维表格，其中每个格子代表一个子问题的解，从而形成一种树状的结构。这与二叉树的概念有些类似。
- **回溯**：回溯是一种深度优先的搜索方法，通常用于解决排列、组合、子集等问题。你可以将回溯过程看作在一个决策树上的遍历，每个节点代表一个选择，通过遍历树上的路径来寻找解。你的理解关于回溯关注于节点间的「树枝」是正确的。
- **DFS**：深度优先搜索是一种遍历图或树的方法。它从一个起始节点出发，沿着一个路径一直向下遍历，直到无法继续为止，然后回溯并探索其他分支。你的理解关于DFS关注于单个「节点」也是正确的。

遍历

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c57a2004-37c9-4653-9daa-ac2816fc2790/Untitled.png)

中序遍历：递归，栈，移动右子树使用pre指针遍历

Morris遍历

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/77aacc26-b749-466c-a7b1-16ce355ca216/Untitled.png)

这个算法的核心思想是在遍历过程中修改树的结构，将节点的右子树指向后继节点，然后再恢复树的结构，以便能够顺序遍历节点。这种方法在空间效率上具有显著优势，但需要小心处理节点的指针，以避免陷入无限循环。

### BST AVL

BST二叉查找树（排序树），若它的左子树不空，则左子树上所有的结点的值均不大于它根结点的值；　　若它的左子树不空，则左子树上所有的结点的值均不小于它根结点的值；

**最**重要的性质是：**二叉搜索树的中序遍历是有序的**

当节点数目一定，保持树的左右两端保持平衡，树的查找效率最高。

**这种左右子树的高度相差不超过 1 的树为平衡二叉树。**

性质：

1. 可以是空树。
2. 假如不是空树，任何一个结点的左子树与右子树都是平衡二叉树，高度之差的绝对值不超过 1 。在一棵平衡二叉树中，节点的平衡因子只能取 0 、1 或者 -1 ，分别对应着左右子树等高，左子树比较高，右子树比较高。

以递归解决二叉树这种对称数据结构的策略，称为对称性递归。可以用**对称性递归解决的二叉树问题大多是判断性问题(bool类型函数),**这一类问题又可以分为以下两类：https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/solution/yi-pian-wen-zhang-dai-ni-chi-tou-dui-che-uhgs/
1、不需要构造辅助函数。这一类题目有两种情况：第一种是单树问题，且不需要用到子树的某一部分(比如根节点左子树的右子树)，只要利用根节点左右子树的对称性即可进行递归。第二种是双树问题，即本身题目要求比较两棵树，那么不需要构造新函数。该类型题目如下：

1. 相同的树 翻转二叉树
2. 二叉树的最大深度
3. 平衡二叉树
4. 二叉树的直径
5. 合并二叉树 另一个树的子树 单值二叉树

2、需要构造辅助函数。这类题目通常只用根节点子树对称性无法完全解决问题，必须要用到子树的某一部分进行递归，即要调用辅助函数比较两个部分子树。形式上主函数参数列表只有一个根节点，辅助函数参数列表有两个节点。该类型题目如下：

1. 对称二叉树 剑指 Offer 26. 树的子结构

[100. 相同的树](https://leetcode-cn.com/problems/same-tree/)，并注意与这道题的区别：[剑指 Offer 26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)。与字符串对比的话，子树就相当于字符串的子串（要求连续），树的子结构就相当于字符串的子序列（不要求连续）

为什么还需要非线性结构呢？ 答案是为了高效地兼顾静态操作和动态操作，**我们一般使用树去管理需要大量动态操作的数据**

堆排序的基本思想是先将待排序的序列构建成一个堆，然后依次从堆顶取出最值（最大值或最小值），将其与堆的最后一个元素交换，并将堆的大小减一，然后再通过一系列操作使得剩余的元素重新构建成一个堆。重复执行此过程，直到堆为空，从而得到一个有序的序列。

堆排序的主要步骤如下：

1. 构建初始堆：将待排序序列构建成一个初始堆，即满足堆的特性。
2. 交换和调整：将堆顶元素与堆的最后一个元素交换位置，并将堆的大小减一。然后通过向下调整（或向上调整）操作，使剩余元素重新构建成一个堆。
3. 重复执行步骤2，直到堆为空。

由于**完全二叉树**的性质，堆排序可以高效**地在数组中进行操作**，因为堆的结构可以直接映射到数组的索引上，不需要显式使用指针。2i, 2i+1

垂直遍历leetcode.314

```
   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7
  输入： {3,9,20,#,#,15,7}
输出： [[9],[3,15],[20],[7]]
public List<List<Integer>> verticalOrder(TreeNode root) {
        // Write your code here
        List<List<Integer>> results = new ArrayList<>();
        if (root == null) {
            return results;
        }
        Map<Integer, List<Integer>> map = new TreeMap<Integer, List<Integer>>();
        Queue<Integer> qCol = new LinkedList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        qCol.offer(0);

        while(!queue.isEmpty()) {
            TreeNode curr = queue.poll();
            int col = qCol.poll();
            if(!map.containsKey(col)) {
                map.put(col, new ArrayList<Integer>(Arrays.asList(curr.val)));
            } else {
                map.get(col).add(curr.val);
            }
            if(curr.left != null) {
                queue.offer(curr.left);
                qCol.offer(col - 1);
            }
            if(curr.right != null) {
                queue.offer(curr.right);
                qCol.offer(col + 1);
            }
        }
        for(int n : map.keySet()) {
            results.add(map.get(n));
        }
        return results;
    }

```

### 前缀和构造多叉树

前缀和处理数组区间问题，**快速得到某个子数组的和**

Trie（发音类似 “try”）或者说 前缀树 字典树是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

**前缀和是一种重要的预处理，能大大降低查询的时间复杂度。我们可以简单理解为“数列的前 n 项的和”。这个概念其实很容易理解，即一个数组中，第 n 位存储的是数组前 n 个数字的和。**

通过一个例子来进行说明会更清晰。题目描述：有一个长度为 N 的整数数组 A，要求返回一个新的数组 B，其中 B 的第 i 个数 B[i]是**原数组 A 前 i 项和**。

### **[2559. 统计范围内的元音字符串数](https://leetcode.cn/problems/count-vowel-strings-in-ranges/)**

难度中等9收藏分享切换为英文接收动态反馈

给你一个下标从 **0** 开始的字符串数组 `words` 以及一个二维整数数组 `queries` 。

每个查询 `queries[i] = [li, ri]` 会要求我们统计在 `words` 中下标在 `li` 到 `ri` 范围内（**包含** 这两个值）并且以元音开头和结尾的字符串的数目。

返回一个整数数组，其中数组的第 `i` 个元素对应第 `i` 个查询的答案。

**注意：**元音字母是 `'a'`、`'e'`、`'i'`、`'o'` 和 `'u'` 。

https://leetcode.cn/problems/count-vowel-strings-in-ranges/

### **[2575. 找出字符串的可整除数组](https://leetcode.cn/problems/find-the-divisibility-array-of-a-string/)**

难度中等9收藏分享切换为英文接收动态反馈

给你一个下标从 **0** 开始的字符串 `word` ，长度为 `n` ，由从 `0` 到 `9` 的数字组成。另给你一个正整数 `m` 。

`word` 的 **可整除数组** `div`  是一个长度为 `n` 的整数数组，并满足：

- 如果 `word[0,...,i]` 所表示的 **数值** 能被 `m` 整除，`div[i] = 1`
- 否则，`div[i] = 0`

返回 **`word` 的可整除数组。

思路： 如何想到递归求模 

first：

1. (a + b) % p = (a % p + b % p) % p （1）
2. (a - b) % p = (a % p - b % p) % p （2）
3. (a * b) % p = (a % p * b % p) % p （3）
4. a ^ b % p = ((a % p)^b) % p （4）

second：

1. 记`N[i]`为`word[0 ~ i]`表示的值。
2. 记`n[i]`为`word[i]`表示的数。
3. 不难得出 : `N[i] = N[i - 1] * 10 + n[i]`
4. 在此假设 : `N[i - 1] = p * m + q`(即余数是`q`)
5. 那么 : `N[i] % m = (p * m * 10) % m + (q * 10 + n[i ] ) % m`
6. 其中 : `(p * m * 10) % m`必能整除, 因此只要看后半部分

## **平方根**

历史上至少有过两个问题，它们看起来非常困难，非常不像 P 问题，但在人们的不懈努力之下，最终还是成功地加入了 P 问题的大家庭。其中一个是线性规划（linear programming），它是一种起源于二战时期的运筹学模型。1947 年，乔治·丹齐格（George Dantzig）提出了一种非常漂亮的算法叫作“单纯形法”（simplex algorithm），它在随机数据中的表现极为不错，但在最坏情况下却需要耗费指数级的时间。因此，很长一段时间，人们都在怀疑，线性规划是否有多项式级的算法。直到 1979 年，人们才迎来了线性规划的第一个多项式级的算法，它是由前苏联数学家列昂尼德·哈奇扬（Leonid Khachiyan）提出的。另外一个问题则是质数判定问题（primality test）：判断一个正整数是否是质数（prime），或者说判断一个正整数是不是无法分成两个更小的正整数之积。人们曾经提出过各种质数判定的多项式级算法，但它们要么是基于概率的，要么是基于某些假设的，要么是有一定适用范围的。2002 年，来自印度理工学院坎普尔分校的阿格拉瓦尔（M. Agrawal）、卡亚勒（N. Kayal）和萨克斯泰纳（N. Saxena）发表了一篇重要的论文《PRIMES is in P》，给出了第一个确定性的、时间复杂度为多项式级别的质数判定算法，质数判定问题便也归入了 P 问题的集合。很容易看出，找出一个多项式级的答案**验核**算法，再怎么也比找出一个多项式级的答案**获取**算法更容易。

为了练习函数与循环，判断一个数是否为质数：我们来实现一个平方根函数：用牛顿法实现平方根函数。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eede3649-4131-4d14-9733-17f27ded8766/Untitled.png)

法一：牛顿迭代法的本质是借助泰勒[级数](https://so.csdn.net/so/search?q=%E7%BA%A7%E6%95%B0&spm=1001.2101.3001.7020)，从初始值开始快速向零点逼近。

计算机通常使用循环来计算 x 的平方根。从某个猜测的值 z 开始，我们可以根据 z² 与 x 的近似度来调整 z，产生一个更好的猜测：

```
z -= (z*z - x) / (2*z)
    long c=x;
        while(c*c>x){
            c = (c+x/c)/2;//怎么得出来的？
        }
    return (int)c;
```

法二：二分查找逼近

在数学中，**数根**(又称位数根或数字根Digital root)是自然数的一种性质，换句话说，每个自然数都有一个数根。

数根是将一正整数的各个位数相加（即横向相加），若加完后的值大于10的话，则继续将各位数进行横向相加直到其值小于十为止[1]，或是，将一数字重复做数字和，直到其值小于十为止，则所得的值为该数的数根。

例如54817的数根为7，因为5+4+8+1+7=25，25大于10则再加一次，2+5=7，7小于十，则7为54817的数根。

然后是它的用途。

数根可以计算模运算的同余，对于非常大的数字的情况下可以节省很多时间。

数字根可作为一种检验计算正确性的方法。例如，两数字的和的数根等于两数字分别的数根的和。

另外，数根也可以用来判断数字的整除性，如果数根能被3或9整除，则原来的数也能被3或9整除。

堆的三种操作：

1删除堆顶元素的方法： 常见操作是用数组尾部元素替换堆顶，**这里不直接删除堆顶，因为所有的元素会向前移动一位，会破坏了堆的结构**

然后进行下移操作，将新的堆顶和它的子节点进行交换，直到子节点大于等于这个新的堆顶，删除堆顶的时间复杂度为`O(logk)`

2堆化：就是将任意数组调整为堆的结构。

1. 任意数组都可以看做一颗完全二叉树
2. 从当前这个完全二叉树的最后一个非叶子节点开始进行元素下沉（siftDown）操作，逐步将这颗二叉树调整为堆结构     buildHeap 第二种 从堆的顶部（数组的开头）开始，并对每个项目调用 siftUp。 

3 插入

- [法一：交换法](https://blog.csdn.net/qq_52320085/article/details/123925981#_3)
- [法三:哨兵法](https://blog.csdn.net/qq_52320085/article/details/123925981#_60)

```
import java.util.ArrayList;

public class Heap {
	private ArrayList<Integer> data;
	private boolean isMaxHeap;
	public Heap(boolean isMaxHeap) {
	    data = new ArrayList<>();
	    this.isMaxHeap = isMaxHeap;
	}

// 建堆
public void buildHeap(int[] arr) {
    for (int num : arr) {
        data.add(num);
    }
    for (int i = parent(data.size() - 1); i >= 0; i--) {
        siftDown(i);
    }
}

// 插入 在堆中插入新元素后维护堆的性质
public void insert(int num) {
    data.add(num);
    siftUp(data.size() - 1);
}

// 删除最大值
public int delete() {
    int res = data.get(0);
    data.set(0, data.get(data.size() - 1));
    data.remove(data.size() - 1);
    siftDown(0);
    return res;
}

// 查询最大/小值
public int peek() {
    return data.get(0);
}

private void siftUp(int i) {
    while (i > 0 && data.get(parent(i)).compareTo(data.get(i)) > 0) {
        swap(i, parent(i));
        i = parent(i);
    }
}

private void siftDown(int i) {
    int maxIndex = i;
    int left = leftChild(i);
    if (left < data.size() && compare(data.get(left), data.get(maxIndex)) > 0) {
        maxIndex = left;
    }
    int right = rightChild(i);
    if (right < data.size() && compare(data.get(right), data.get(maxIndex)) > 0) {
        maxIndex = right;
    }
    if (i != maxIndex) {
        swap(i, maxIndex);
        siftDown(maxIndex);
    }
}
对于任意节点 i，其左子节点的索引为 2i+1，右子节点的索引为 2i+2，而父节点的索引为 floor((i-1)/2)。
private int parent(int i) {
    return (i - 1) / 2;
}

private int leftChild(int i) {
    return 2 * i + 1;
}

private int rightChild(int i) {
    return 2 * i + 2;
}

private void swap(int i, int j) {
    int temp = data.get(i);
    data.set(i, data.get(j));
    data.set(j, temp);
}

private int compare(int a, int b

```

Quicksort基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

三路快排 当序列中有大量的重复元素，二路排序虽然会均衡的分配到两个序列中，但是重复元素仍然参与到分割序列中，带来无谓的性能损耗。

```
     public void sort(int[] args, int l, int r) {
        if (l >= r) {
            return;
        }
    int target = args[l];
    int lt = l, gt = r + 1, i = l + 1;
    while (i < gt) {
        if (args[i] < target) {
            swap(args, i, lt + 1);
            lt++;
            i++;
        } else if (args[i] > target) {
            swap(args, i, gt - 1);
            gt--;
        } else {
            i++;
        }
    }
    swap(args, l, lt);

    sort(args, l, lt - 1);
    sort(args, gt, r);
    }
//快速选择算法
public int findKthLargest(int[] nums, int k) {
        int left = 0;
        int right = nums.length - 1;
        int pivot = partition(nums, left, right);
        // 从小到大排序，倒数第k个就是第k个最大元素
        int targetIndex = nums.length - k;

        while (true) {
            if (pivot == targetIndex) {
                return nums[pivot];
            } else if (pivot > targetIndex) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
            pivot = partition(nums, left, right);
        }
    }

    int partition(int[] nums, int left, int right) {
        // 基准值索引
        int pivot = left;
        // 预放值索引
        int index = left + 1;
        // 将比基准值小的都紧挨着基准值
        for (int i = index; i <= right; i++) {
            if (nums[i] < nums[pivot]) {
                swap(nums, i, index);
                index++;
            }
        }
        // 把基准值移动到比基准值小的数列的最右边
        swap(nums, pivot, index - 1);
        return index - 1;
    }
```

快速选择算法过一次遍历，确定某一个元素在排序以后的位置，这个算法叫「快速选择」。要理解「快速选择」算法，必须先理解「快速排序」的「partition」。 快速排序会递归处理划分的两边，而选择只处理划分一边。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/844a5fb5-852c-475f-8356-33a67426f713/Untitled.png)

### **LRUcache**

解法

1.LinkedHashmap。**伪头部**（dummy head）和**伪尾部**（dummy tail）标记界限，这样在添加节点和删除节点的时候就不需要检查相邻的节点是否存在。 当向缓存中添加新项时，如果达到容量限制，将删除链表头部（最少使用）的节点，并更新哈希表。

使用双向链表加哈希表维护get 和 put  O(1) 平均时间复杂度

2.自己实现LinkedHashmap

1. LRU 的功能可以使用双向链表实现，访问到的节点移动到头部，超出容量的从尾部删除。
2. 要实现O(1)得使用HashMap，里面储存 key 与 链表节点即可，这样可以快速定位节点，然后删除它，将它移动到链表头部。

3.O（n）解法 好写

1. 使用HashMap来存储键值对，其中键是缓存的键，值是对应的缓存项。
2. 使用ArrayList来维护最近访问的顺序，最近访问的项位于列表的末尾。
3. 当访问缓存项时，将其移到ArrayList的末尾，以表明它是最近访问的。
4. 当缓存达到容量限制时，淘汰最近最少使用的项（即ArrayList的头部项）。

• ArrayList 中的移除和添加操作是线性时间复杂度 O(n)。但由于在缓存中存储的是键，因此在 ArrayList 中查找和移除元素的复杂度可以视为 O(n)。

**LFU 的缓存污染问题：**

LFU 通常根据缓存中条目的访问频率来替换最不经常使用的条目。但是，LFU 在某些情况下可能出现“缓存污染”问题：

**新数据问题：** 当一些数据被频繁访问但实际上不是常用数据时，它们的频率计数会增加，导致 LFU 将其视为常用数据，长时间占据缓存空间。

**突发事件问题：** 在短时间内，某些数据可能会因为特定事件而被频繁访问，这些数据的频率计数可能会暂时性地高于实际常用数据。

**LRU 的长环模式问题：**

LRU 根据最近最少使用的原则进行缓存替换，但存在一个“长环模式”问题：

**周期性访问模式：** 如果存在一组数据被周期性地访问（例如，每隔一段时间访问一次），而且这组数据的访问顺序与 LRU 的缓存替换顺序一致，就会导致这些数据在缓存中形成长环。

**替换不及时：** 长环中的数据虽然可能在某段时间内并不频繁使用，但由于周期性访问模式，它们的位置始终位于 LRU 缓存替换算法的末尾，因此不容易被替换出去。

**解决方法：**

针对这些问题，可以考虑使用一些改进的缓存算法或结合其他策略来提高缓存效率，如：

**LFU 的改进版本：** 可以考虑采用 LFU 的变体算法，如动态调整频率计数的算法，以更准确地反映数据的实际热度。

**LRU 的改进版本：** 引入时间衰减机制，使得长时间不被访问的数据在一定时间后被逐渐淘汰，而不仅仅依赖于访问顺序。

**混合替换策略：** 使用两种或多种不同的缓存替换策略组合，根据具体情况动态选择合适的替换策略。

 

在[可计算性理论](https://zh.wikipedia.org/wiki/%E5%8F%AF%E8%A8%88%E7%AE%97%E6%80%A7%E7%90%86%E8%AB%96)与[计算复杂性理论](https://zh.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E8%A4%87%E9%9B%9C%E6%80%A7%E7%90%86%E8%AB%96)中，所谓的**归约**是将某个[计算问题](https://zh.wikipedia.org/w/index.php?title=%E8%A8%88%E7%AE%97%E5%95%8F%E9%A1%8C&action=edit&redlink=1)变换为另一个问题的过程。可用归约法定义某些问题的[复杂度类](https://zh.wikipedia.org/wiki/%E8%A4%87%E9%9B%9C%E5%BA%A6%E9%A1%9E)（因变换过程而异）。P NP

以直觉观之，如果存在能有效[解决问题](https://zh.wikipedia.org/wiki/%E8%A7%A3%E6%B1%BA%E5%95%8F%E9%A1%8C)B的算法，也可以作为解决问题A的子程序，则将问题A称为“可归约”到问题B，因此求解A并不会比求解B更困难。

A(x) = B(f(x)), in other words, for x∈A，there’s f(x)∈B

# WEB开发

## **Restful规范**

REST:REpresentational State Transfer 直接翻译：表现层状态转移

REST建立在 HTTP 协议之上，利用 HTTP 方法和资源来进行通信和交互。

转移（Transfer）：无论状态是由服务端还是客户端来提供的，“取下一篇文章”这个行为逻辑必然只能由服务端来提供，因为只有服务端拥有该资源及其表征形式。服务器通过某种方式，把“用户当前阅读的文章”转变成“下一篇文章”，这就被称为“表征状态转移”

URL**定位资源**，用HTTP**描述操作**。

**看Url就知道要什么 看http method就知道干什么 看http status code就知道结果如何**

**为什么要用RESTful结构呢？**

大家都知道“古代”网页是前端后端融在一起的，比如之前的PHP，JSP等。在之前的桌面时代问题不大，但是近年来移动互联网的发展，各种类型的Client层出不穷，RESTful可以通过一套统一的接口为 Web，iOS和Android提供服务。另外对于广大平台来说，比如Facebook platform，微博开放平台，微信公共平台等，它们不需要有显式的前端，只需要一套提供服务的接口

### 6大原则

1）客户端 - 服务器 - 通过将用户接口问题与数据存储问题分开，我们通过简化服务器组件来提高跨多个平台的用户接口的可移植性并提高可伸缩性。

2）无状态 - 从客户端到服务器的每个请求都必须包含理解请求所需的所有信息，并且不能利用服务器上任何存储的上下文。因此，会话状态完全保留在客户端上。无状态是 REST 的一条核心原则，部分开发者在做服务接口规划时，觉得 REST 风格的服务怎么设计都感觉别扭，很有可能的一种原因是在服务端持有着比较重的状态。REST 希望服务器不要去负责维护状态，每一次从客户端发送的请求中，应包括所有的必要的上下文信息，会话信息也由客户端负责保存维护，服务端依据客户端传递的状态来执行业 务处理逻辑，驱动整个应用的状态变迁。客户端承担状态维护职责以后，会产生一些新 的问题，譬如身份认证、授权等可信问题，它们都应有针对性的解决方案（这部分内容 可参见“安全架构”的内容）。 但必须承认的现状是，目前大多数的系统都达不到这个要求，往往越复杂、越大型的系统越是如此。服务端无状态可以在分布式计算中获得非常高价值的好处，但大型系统的上下文状态数量完全可能膨胀到让客户端在每次请求时提供变得不切实际的程度，在服务端的**内存、会话、数据库或者缓存等地方持有一定的状态**成为一种是事实上存在，并将长期存在、被广泛使用的主流的方案。

3）可缓存 - 缓存约束要求将对请求的**响应中的数据隐式或显式标记为可缓存或不可缓存**。如果响应是可缓存的，则客户端缓存有权重用该响应数据以用于以后的等效请求。

4）统一接口 - 通过将通用性的软件工程原理应用于组件接口，简化了整个系统架构，提高了交互的可见性。为了获得统一的接口，需要多个架构约束来指导组件的行为。REST由四个接口约束定义： 资源识别;

通过陈述来处理资源;

自我描述性的信息; 并且，超媒体作为应用程序状态的引擎。

5）**分层系统** - 分层系统风格允许通过约束组件行为来使体系结构由分层层组成，这样每个组件都不能“看到”超出与它们交互的直接层。

6）按需编码（可选） - REST允许通过以小程序或脚本的形式下载和执行代码来扩展客户端功能。这通过减少预先实现所需的功能数量来简化客户端。

### 问题

1. **仅支持请求/响应通信：** REST 风格的通信模式是基于请求和响应的。这意味着它不适合实时或持续通信，例如实时数据流。对于需要双向通信或服务器推送数据给客户端的应用场景，REST 不是最佳选择。
2. **可用性受限：** REST 通常要求客户端和服务器同时在线才能进行通信。如果其中一方离线，通信将无法进行，这可能降低系统的可用性。
3. **服务发现的需求：** 客户端需要知道服务的 URL 才能进行通信。这意味着客户端必须使用服务发现机制来发现服务实例的位置和地址，可能会增加系统的复杂性。
4. **获取多个资源的挑战性：** 在单个请求中获取多个资源可能会有挑战。在传统的 RESTful 架构中，通常需要多个请求来获取不同资源，并且客户端必须合并和处理这些响应。**面向资源的编程思想只适合做 CRUD** **抽象资源**。所谓的抽象资源是“不直接对应数据库表的资源”。比如“登录/登出”。如果你用**RPC式的接口设计**，这就很直接：**POST /login** 和 **POST /logout**。但是你要硬套RESTful，你就得挖空心思的想出一个抽象资源“会话”（session）。登录 = 创建会话，登出 = 销毁会话。于是你把接口设计成 **POST /sessions** 和 **DELETE /sessions**。这就很**反直觉**，且背离RESTful的设计初衷。 元数据如何返回也是个问题。比如分页查询是很常见的需求。但是当前是第几页，一共多少条记录等，这些元数据放在响应的哪儿呢？如果放在body里，有点不REST，因为REST的响应应该只包含数据；如果放在header里，则又要和客户端商定协议细节，客户端实现也变得更困难。
5. **多个更新操作的映射困难：** 将多个更新操作映射到 HTTP 动词可能会有挑战。例如，使用 HTTP 方法如 PUT 或 PATCH 对多个资源进行原子性更新可能会复杂化，因为 HTTP 方法通常用于单个资源的操作。

**REST 与 HTTP 完全绑定，不适合应用于要求高性能传输的场景中**

对于需要**直接控制传输，如二 进制细节、编码形式、报文格式、连接方式等细节的场景中**，REST 确实不合适，这些场 景往往存在于服务集群的内部节点之间，这也是之前曾提及的，REST 和 RPC 尽管应用 场景的确有所重合，但重合的范围有多大就是见仁见智的事情。 **RESTful 和 HTTP 绑的太死，很难用在其他传输协议里，比如你很难把 REST 用在 Redis PubSub 里。相比之下，一个包含指令和数据的RPC包通过HTTP发还是通过Kafka发都没问题**

**REST 不利于事务支持**

**REST 没有传输可靠性支持** 是的，并没有。在 HTTP 中你发送出去一个请求，通常会收到一个与之相对的响应，譬 如 HTTP/1.1 200 OK 或者 HTTP/1.1 404 Not Found 诸如此类的。但如果你没有收到任 何响应，那就无法确定消息到底是没有发送出去，抑或是没有从服务端返回回来，这其 中的关键差别是服务端到底是否被触发了某些处理？应对传输可靠性最简单粗暴的做法 是把消息再重发一遍。这种简单处理能够成立的前提是服务应具有幂等性

**服务发现**之所以重要，是因为它解决了微服务架构最关键的问题：如何精准的定位需要调用的服务ip以及端口。无论使用哪种方式来提供服务发现功能，大致上都包含以下三点：

- Register, 服务启动时候进行注册
- Query, 查询已注册服务信息
- Healthy Check,确认服务状态是否健康

整个过程很简单。大致就是在服务启动的时候，先去进行注册，并且定时反馈本身功能是否正常。由服务发现机制统一负责维护一份正确或者可用的服务清单。因此，服务本身需要能随时接受查下，反馈调用方服务所要的信息。

在分布式系统中，服务发送心跳信息并不能完全反映其真正的健康状态。以下是一些方法和策略，可以帮助应对这种情况：主动健康检查：针对服务发送心跳信息而未能准确反映其真实状态的问题，需要使用更为全面和准确的健康检查机制，并在设计系统时实施弹性策略和监控机制

Spring 是分层的企业级应用轻量级开源框架，以 IoC 和 AOP为内核。

- 用来简化Spring应用的初始搭建以及开发过程，使用特定的方式来进行配置
- 创建独立的Spring引用程序main方法运行
- 嵌入的[tomcat](https://www.zhihu.com/search?q=tomcat&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22391071918%22%7D)无需部署war文件
- 简化maven配置
- 自动配置Spring添加对应的功能starter自动化配置

**IoC**控制反转，就是把原先我们代码里面需要实现的对象创建、依赖的代码，**反转给容器来帮忙实现**。当应用了IoC，一个对象依赖的其它对象会通过被动的方式传递进来，而不是这个对象自己创建或者查找依赖对象。IoC 的实现方式有依赖注入和依赖查找，由于依赖查找使用的很少，因此 IoC 也叫做依赖注入。依赖注入指对象被动地接受依赖类而不用自己主动去找，对象不是从容器中查找它依赖的类，而是在容器实例化对象时主动将它依赖的类注入给它。假设一个 Car 类需要一个 Engine 的对象，那么一般需要需要手动 new 一个 Engine，利用 IoC 就只需要定义一个私有的 Engine 类型的[成员变量](https://www.zhihu.com/search?q=%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%221958402611%22%7D)，容器会在运行时自动创建一个 Engine 的实例对象并将引用自动注入给成员变量。

AOP 即[面向切面编程](https://www.zhihu.com/search?q=%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%BC%96%E7%A8%8B&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%221958402611%22%7D)，简单地说就是将代码中重复的部分抽取出来，在需要执行的时候使用[动态代理](https://www.zhihu.com/search?q=%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%221958402611%22%7D)的技术，在不修改源码的基础上对方法进行增强。优点是可以减少代码的冗余，提高开发效率，维护方便。常用场景包括[权限认证](https://www.zhihu.com/search?q=%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%221958402611%22%7D)、自动缓存、错误处理、日志、调试和事务等。

**相关注解**

`@Aspect`：声明被注解的类是一个切面 Bean。

`@Before`：[前置通知](https://www.zhihu.com/search?q=%E5%89%8D%E7%BD%AE%E9%80%9A%E7%9F%A5&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%221958402611%22%7D)，指在某个连接点之前执行的通知。

`@After`：后置通知，指某个连接点退出时执行的通知（不论正常返回还是异常退出）。

### Spring MVC 核心组件

`DispatcherServlet`：SpringMVC 中的[前端控制器](https://www.zhihu.com/search?q=%E5%89%8D%E7%AB%AF%E6%8E%A7%E5%88%B6%E5%99%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%221958402611%22%7D)，是整个流程控制的核心，负责接收请求并转发给对应的处理组件。控制器，是整个流程控制的核心，负责接收请求并转发给对应的处理组件。

`Handler`：处理器，完成具体业务逻辑，相当于 Servlet 或 Action。

`HandlerMapping`：完成URL 到 Controller映射的组件，DispatcherServlet 接收到请求之后，通过 HandlerMapping 将不同的请求映射到不同的 Handler。

Mybatis 是一个实现了数据持久化的 **ORM** 框架，简单理解就是对 JDBC 进行了封装。

ORM全称是：Object Relational Mapping(对象关系映射](https://www.zhihu.com/search?q=对象关系映射&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={“sourceType”%3A“article”%2C“sourceId”%3A“27188788”}))，其主要作用是在编程中，把面向对象的概念跟数据库中表的概念对应起来。举例来说就是，我定义一个对象，那就对应着一张表，这个对象的实例，就对应着表中的一条记录。

Spring 启动时读取应用程序提供的Bean配置信息，并在Spring容器中生成一份相应的Bean配置注册表，然后根据这张注册表实例化Bean，装配好Bean之间的依赖关系，为上层应用提供准备就绪的运行环境。

# Database

> 对于数据库而言，重要的不是数据量，而是当数据量增加时运算如何增加。
> 

时间复杂度用来检验某个算法处理一定量的数据要花多长时间，时间复杂度不会给出确切的运算次数，但是给出的是一种理念。

NoSQL指**非关系型数据库**，与关系型数据库存在显著差异。其中最重要之处在于NoSQL数据库不适用SQL语言。其数据存储不需要固定的表格模式，一般都有水平可扩展性。NoSQL数据库分为以下几类：

①Key/Value键值存储。这种数据存储通常都无数据结构，被当作字符串或者二进制数据，但是数据加载快，典型应用于高并发和日志系统场景。如Redis。

②列存储数据库。列存储数据库功能相对局限，但是查找速度快，易分布式扩展。一般用于分布式文件系统。如Hbase、Cassandra

③文档型数据库。和键值对数据库类似，也没有严格数据格式。不需要预先创建表结构，数据格式更加灵活，一般用户Web应用。如MongoDB。

④图形数据库。图形数据库专注于构建关系图谱，如社交网络、推荐系统等等。这类网络有Neo4j、DEX。

NoSQL种类繁多，Spring Boot支持绝大多数。我们主要介绍常见的Redis和MongoDB。

DBMS: XML,file system

## Mysql

MySQL 的架构共分为两层：**Server 层和存储引擎层**，

- **Server 层负责建立连接、分析和执行 SQL**。MySQL 大多数的核心功能模块都在这实现，主要包括连接器，查询缓存、解析器、预处理器、优化器、执行器等。另外，所有的内置函数（如日期、时间、数学和加密函数等）和所有跨存储引擎的功能（如存储过程、触发器、视图等。）都在 Server 层实现。
- **存储引擎层负责数据的存储和提取**。支持 InnoDB、MyISAM、Memory 等多个存储引擎，不同的存储引擎共用一个 Server 层。现在最常用的存储引擎是 InnoDB，从 MySQL 5.5 版本开始， InnoDB 成为了 MySQL 的默认存储引擎。我们常说的索引数据结构，就是由存储引擎层实现的，不同的存储引擎支持的索引类型也不相同，比如 InnoDB 支持索引类型是 B+树 ，且是默认使用，也就是说在数据表中创建的主键索引和二级索引默认使用的是 B+ 树索引。

执行一条 SQL 查询语句，期间发生了什么？

- 连接器：建立连接，管理连接、校验用户身份；
- 查询缓存：查询语句如果命中查询缓存则直接返回，否则继续往下执行。MySQL 8.0 已删除该模块；
- 解析 SQL，通过解析器对 SQL 查询语句进行词法分析、语法分析，然后构建语法树，方便后续模块读取表名、字段、语句类型；
- 执行 SQL：执行 SQL 共有三个阶段：
    - 预处理阶段：检查表或字段是否存在；将 `select *` 中的 `` 符号扩展为表上的所有列。
    - 优化阶段：基于查询成本的考虑， 选择查询成本最小的执行计划；
    - 执行阶段：根据执行计划执行 SQL 查询语句，从存储引擎读取记录，返回给客户端；

## 索引

数据库索引是对数据库表的一列或者多列的值进行排序一种结构，使用索引可以快速访问数据表中的特定信息。

**索引的优缺点？**

优点：

- 大大加快数据检索的速度。
- 将随机I/O变成顺序I/O(因为B+树的叶子节点是连接在一起的)
- 加速表与表之间的连接

缺点：

- 从空间角度考虑，建立索引需要占用物理空间
- 从时间角度 考虑，创建和维护索引都需要花费时间，例如对数据进行增删改的时候都需要维护索引。

索引的实现通常使用**Hash索引和B+树**（MySQL常用的索引就是B+树）。除了数据之外，数据库系统还维护为满足特定查找算法的数据结构，这些数据结构以某种方式引用数据，这种数据结构就是索引。简言之，索引就类似于书本，字典的目录。以下是一些关键概念和要点与数据库索引相关：

1. **索引类型**：
    - **B树索引**：是最常见的索引类型，适用于大多数数据库系统。B树索引在树结构中进行数据划分，使得在平均情况下，检索时间复杂度为O(log n)。
    - **哈希索引**：基于哈希算法，适用于等值查询。但是，哈希索引不适用于范围查询，且不适合于有序数据。
    - **全文索引**：用于文本数据的高效搜索，支持关键词搜索、模糊查询等。
    - **空间索引**：用于地理空间数据的索引，可以支持地理坐标查询和范围查询。

### **什么时候不需要创建索引？**

- `WHERE` 条件，`GROUP BY`，`ORDER BY` 里用不到的字段，索引的价值是快速定位，如果起不到定位的字段通常是不需要创建索引的，因为索引是会占用物理空间的。
- 字段中存在大量重复数据，不需要创建索引，比如性别字段，只有男女，如果数据库表中，男女的记录分布均匀，那么无论搜索哪个值都可能得到一半的数据。在这些情况下，还不如不要索引，因为 MySQL 还有一个查询优化器，查询优化器发现某个值出现在表的数据行中的百分比很高的时候，它一般会忽略索引，进行全表扫描。
- 表数据太少的时候，不需要创建索引；
- 经常更新的字段不用创建索引，比如不要对电商项目的用户余额建立索引，因为索引字段频繁修改，由于要维护 B+Tree的有序性，那么就需要频繁的重建索引，这个过程是会影响数据库性能的。

**MySQL 索引**
索引是在存储引擎层实现的，而不是在服务器层实现的，所以不同存储引擎具有不同的索引类型和实现。InnoDB将磁盘数据建立索引并储存在B+树中

1. B+Tree 索引
是大多数 MySQL 存储引擎的默认索引类型。

B树是一种多路平衡查找树

B+ 树**查询效率更稳定**。因为 B+ 树每次只有访问到叶子节点才能找到对应的数据，而在 B 树中，非叶子节点也会存储数据，这样就会造成查询效率不稳定的情况，有时候访问到了非叶子节点就可以找到关键字，而有时需要访问到叶子节点才能找到关键字。 

其次，B+ 树的查询效率更高，这是因为通常 B+ 树比 B 树更矮胖（阶数更大，深度更低），查询所需要的磁盘 I/O 也会更少。同样的磁盘页大小，B+ 树可以存储更多的节点关键字。 

B+Tree 只在叶子节点存储数据，而 B 树 的非叶子节点也要存储数据，所以 B+Tree 的单个节点的数据量更小，**在相同的磁盘 I/O 次数下，就能查询更多的节点**。 另外，B+Tree 叶子节点采用的是双链表连接，适合 MySQL 中常见的基于范围的顺序查找，而 B 树无法做到这一点。

2、B+Tree vs Hash， Hash 在做等值查询的时候效率贼快，搜索复杂度为 O(1)。 但是 Hash 表不适合做范围查询，它更适合做等值的查询，这也是 B+Tree 索引要比 Hash 表索引有着更广泛的适用场景的原因。

红黑树等平衡树也可以用来实现索引，但是文件系统及数据库系统普遍采用 B+ Tree 作为索引结构，这是因为使用 B+ 树访问磁盘数据有更高的性能。

Why use b+ tree as index?  

二叉搜索树查询效率无疑是最高的，因为平均来说每次比较都能缩小一半的搜索范围  所以表面上来看我们使用 B、B+ 树没有 二叉查找树效率高，但是实际上由于 B、B+ 树降低了树高，减少了磁盘 IO 次数，反而大大提升了速度。

（一）B+ 树比其他Avl树有更低的树高

平衡树的树高 O(h)=O(log_dN)，其中 d 为每个节点的出度。红黑树的出度为 2，而 B+ Tree 的出度一般都非常大，所以红黑树的树高 h 很明显比 B+ Tree 大非常多。

（二）磁盘访问原理

B树被作为实现索引的数据结构被创造出来，是因为它能够完美的利用“局部性原理”。

局部性原理：软件设计要尽量遵循“数据读取集中”与“使用到一个数据，大概率会使用其附近的数据”，这样磁盘预读能充分提高磁盘IO；

操作系统一般将内存和磁盘分割成固定大小的块，每一块称为一页，内存与磁盘以页为单位交换数据。数据库系统将索引的**一个节点的大小设置为页的大小，使得一次 I/O 就能完全载入一个节点**。

**B+Tree 相比于 B 树和二叉树来说，最大的优势在于查询效率很高，因为即使在数据量很大的情况，查询一个数据的磁盘 I/O 依然维持在 3-4次。**

（三）磁盘预读特性

为了减少磁盘 I/O 操作，磁盘往往不是严格按需读取，而是每次都会预读。预读过程中，磁盘进行顺序读取，顺序读取不需要进行磁盘寻道，并且只需要很短的磁盘旋转时间，速度会非常快。并且可以利用预读特性，相邻的节点也能够被预先载入。

- 聚簇索引：将[数据存储](https://cloud.tencent.com/product/cdcs?from_column=20065&from=20065)与索引放到了一块，找到索引也就找到了数据 聚簇索引的叶子节点就是实际的数据行
- 非聚簇索引：一个表可以有多个非聚簇索引，这些索引在逻辑上只是指向数据行的指针。 将数据存储于索引分开结构，索引结构的叶子节点指向了数据的对应行，myisam通过key_buffer把索引先缓存到内存中，当需要访问数据时（通过索引访问数据），在内存中直接搜索索引，然后通过索引找到磁盘相应数据，这也就是为什么索引不在key buffer命中时，速度慢的原因

区别就在于叶子节点存放的是什么数据：

- 聚簇索引的叶子节点存放的是实际数据，所有完整的用户记录都存放在聚簇索引的叶子节点；
- 二级索引的叶子节点存放的是主键值，而不是实际数据。

**如果某个查询语句使用了二级索引，但是查询的数据不是主键值，这时在二级索引找到主键值后，需要去聚簇索引中获得数据行，这个过程就叫作「回表」，也就是说要查两个 B+ 树才能查到数据。不过，当查询的数据是主键值时，因为只在二级索引就能查询到，不用再去聚簇索引查，这个过程就叫作「索引覆盖」，也就是只需要查一个 B+ 树就能找到数据。**

## Redis

Redis（Remote Dictionary Server )，即远程字典服务。C语言开发的一个开源的（遵从BSD协议）高性能键值对（key-value）的内存数据库，可以用作数据库、缓存、消息中间件等。它是一种NoSQL（not-only sql，泛指[非关系型数据库](https://www.zhihu.com/search?q=%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22118561398%22%7D)）的数据库。

Redis的基本概念和用法：

1. **高性能**：Redis完全存储在内存中，这使得它能够以非常高的速度执行读写操作。
2. **多种数据结构**：除了键值对，Redis还支持字符串、哈希表、列表、集合、有序集合等多种数据结构，允许更灵活的数据操作。
3. **持久化**：Redis支持将数据持久化到硬盘，以便在重启后恢复数据。它提供了两种持久化方式：快照（Snapshotting）和AOF（Append-Only File）。
4. **发布/订阅**：Redis提供了发布（publish）和订阅（subscribe）的功能，允许不同部分之间通过消息进行通信。
5. **事务**：Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化，**Redis 在事务失败时不进行回滚，而是继续执行余下的命令。Redis官方认为事务是原子性的：所有的命令，要么全部执行（但不一定成功），要么全部不执行。**
6. **缓存**：Redis常用于作为缓存层，将频繁访问的数据存储在内存中，以提高读取性能。
7. **计数器和排行榜**：Redis适用于计数器和排行榜等需要快速处理增减操作的场景。
8. **分布式锁**：Redis可以用来实现分布式锁，以确保在多个节点上的操作不会互相干扰。
9. **消息队列**：使用Redis的列表数据结构，可以实现简单的消息队列，用于异步处理任务。

**Redis这么快？**

> 第一：Redis完全基于内存，绝大部分请求是纯粹的内存操作，非常迅速，数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度是O(1)。第二：数据结构简单，对数据操作也简单。第三：采用单线程，避免了不必要的上下文切换和竞争条件，不存在多线程导致的CPU切换，不用去考虑各种锁的问题，不存在加锁释放锁操作，没有死锁问题导致的性能消耗。虽然 Redis 的主要工作（网络 I/O 和执行命令）一直是单线程模型，但是**在 Redis 6.0 版本之后，也采用了多个 I/O 线程来处理网络请求**，**这是因为随着网络硬件的性能提升，Redis 的性能瓶颈有时会出现在网络 I/O 的处理上**。
> 

第四：使用多路复用IO模型，非阻塞IO。

String、Hash、List、Set、SortedSet。

1. **Hashes:** Hashes are maps between string fields and string values. They are useful for representing objects with multiple fields, such as user profiles.
2. **String** data up to 512 MB 。String类型是**二进制安全**的(其本质是将操作输入作为原始的、无任何特殊字符意义的数据流)，意思是 redis 的 string 可以包含任何数据。如数字，字符串，jpg图片或者序列化的对象。
3. **Lists:** 双向链表实现Lists are ordered collections of strings. You can add elements to the head (left) or tail (right) of a list. Lists can be used for task queues, message queues, and more.
4. **Sets:** Sets are unordered collections of unique strings. They are used for storing unique values. You can perform set operations like union, intersection, and difference. 
5. **Sorted Sets (ZSETs):** Similar to sets, but each member has a score associated with it. Sorted sets are used for tasks that require ordering by score, such as leaderboards.
6. **Bitmaps:** Bitmaps are used for bit-level operations. They are often used to represent sets with a large number of unique items in a very memory-efficient way.

- Redis 的字符串表示为 `sds(simple dynamic string)` ，而不是 C 字符串（以 `\0` 结尾的 `char*`）。
- 对比 C 字符串， `sds` 有以下特性：
    - 可以高效地执行长度计算（`strlen`）；
    - 可以高效地执行追加操作（`append`）；
    - 二进制安全；
- `sds` 会为追加操作进行优化：加快追加操作的速度，并降低内存分配的次数，代价是多占用了一些内存，而且这些内存不会被主动释放。

struct sdshdr{
int len;//buf数组中已经使用的字节的数量，也就是SDS字符串长度
int  free;//buf数组中未使用的字节的数量
char buf[];//字节数组，字符串就保存在这里面
};

Redis需要对数据设置过期时间，并采用的是惰性删除+定期删除两种策略对过期键删除。[Redis对过期键的策略+持久化](https://mp.weixin.qq.com/s?__biz=MzI4Njg5MDA5NA==&mid=2247484386&idx=1&sn=323ddc84dc851a975530090fcd6e2326&chksm=ebd742e3dca0cbf52bc65d430447e639d81cc13e0ac34613edf464dae3950b10e2e1df74dcc5&token=1834317504&lang=zh_CN&scene=21#wechat_redirect)

1. **数据过期清除策略**：
    1. 定期删除：Redis会定期（默认每隔100ms）随机抽取一些设置了过期时间TTL 的键，检查其是否过期，如果有过期的键就删除。这个策略确实是为了避免全局扫描而引入的，以减少CPU负载。
    2. 惰性删除：当你尝试访问某个键时，Redis会检查该键是否已过期，如果已过期，则删除它。这个策略确保在获取键的时候处理过期数据，称为"惰性"，因为它不主动扫描键。
2. 内存淘汰策略：
    - Redis是一个内存数据库，当内存用尽时，需要根据一定的策略来释放一些键以腾出内存空间。这个策略称为内存淘汰策略（Memory Eviction Policy）。
    - Redis提供了不同的内存淘汰策略，常见的策略包括：
        - LRU（Least Recently Used）：删除最近最少使用的键。
        - LFU（Least Frequently Used）：删除最不频繁使用的键。
        - Random（随机淘汰）：随机选择一个键进行删除。
        - TTL（Time To Live）：根据键的TTL来删除过期的键。
    - 你可以根据需要在Redis配置文件中选择适合你的内存淘汰策略，默认使用LRU策略。

如果缓存数据**设置的过期时间是相同**的，并且Redis恰好将这部分数据全部删光了。这就会导致在这段时间内，这些缓存**同时失效**，全部请求到数据库中。

跳表是**可以实现二分查找的有序链表**。

- Multi开始事务。
- 命令入队。
- Exec执行事务。

**持久化**

Reids 是先执行写操作命令后，才将该命令记录到 AOF 日志里的，这么做其实有两个好处。

- **避免额外的检查开销**：因为如果先将写操作命令记录到 AOF 日志里，再执行该命令的话，如果当前的命令语法有问题，那么如果不进行命令语法检查，该错误的命令记录到 AOF 日志里后，Redis 在使用日志恢复数据时，就可能会出错。
- **不会阻塞当前写操作命令的执行**：因为当写操作命令执行成功后，才会将命令记录到 AOF 日志。

**RDB 快照**：将某一时刻的内存数据，以二进制的方式写入磁盘

所以，RDB 快照就是记录某一个瞬间的内存数据，记录的是实际数据   因此在 Redis 恢复数据时， RDB 恢复数据的效率会比 AOF 高些，因为直接将 RDB 文件读入内存就可以，不需要像 AOF 那样还需要额外执行操作命令的步骤才能恢复数据。

> RDB 做快照时会阻塞线程吗？
> 

Redis 提供了两个命令来生成 RDB 文件，分别是 save 和 bgsave，他们的区别就在于是否在「主线程」里执行：

- 执行了 save 命令，就会在主线程生成 RDB 文件，由于和执行操作命令在同一个线程，所以如果写入 RDB 文件的时间太长，**会阻塞主线程**；
- 执行了 bgsave 命令，会创建一个子进程来生成 RDB 文件，这样可以**避免主线程的阻塞**；

Redis 还可以通过配置文件的选项来实现每隔一段时间自动执行一次 bgsave 命令，默认会提供以下配置：

`save 900 1
save 300 10
save 60 10000`

别看选项名叫 save，实际上执行的是 bgsave 命令，也就是会创建子进程来生成 RDB 快照文件。 只要满足上面条件的任意一个，就会执行 bgsave，它们的意思分别是：

- 900 秒之内，对数据库进行了至少 1 次修改；
- 300 秒之内，对数据库进行了至少 10 次修改；
- 60 秒之内，对数据库进行了至少 10000 次修改。

这里提一点，Redis 的快照是**全量快照**，也就是说每次执行快照，都是把内存中的「所有数据」都记录到磁盘中。所以执行快照是一个比较重的操作，如果频率太频繁，可能会对 Redis 性能产生影响。如果频率太低，服务器故障时，丢失的数据会更多。

**AOF 是一种持久化方式，它通过将 Redis 所有的写操作（包括写命令）以追加（append）的方式记录到一个文件中。AOF 文件包含了可以重放（replay）重建数据集的写命令序列，因此，它记录了数据库状态的完整变更历史。**

优点：

**可读性强**：AOF 文件是一个文本文件，易于理解和查看。

**数据完整性**：AOF 文件中包含了对数据的操作记录，可以用来恢复数据。

**灵活性**：AOF 文件支持不同的同步策略，如每秒同步、每个命令同步等，提供了一定程度的灵活性。

缺点：

**文件较大**：由于记录了所有写操作，AOF 文件可能会比 RDB 文件更大。

**恢复速度相对较慢**：在恢复时，可能会因为需要重新执行大量写操作而导致恢复速度较慢。

### 缓存

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/2ddd57f1-969b-4dfa-be99-704511625908/Untitled.png)

**缓存雪崩**：

- Redis挂掉了，请求全部走数据库。
- 对缓存数据设置相同的过期时间，导致某段时间内缓存失效，请求全部走数据库。

缓存雪崩如果发生了，很可能就把我们的数据库**搞垮**，导致整个服务瘫痪！

**如何解决缓存雪崩？**

- 解决方法：考虑用**加锁或者队列**的方式保证来保证不会有大量的线程对数据库一次性进行读写，从而避免失效时大量的并发请求落到底层存储系统上；还有一个解决方案，原有的失效时间基础上增加一个随机值，这样就会大幅度的**减少缓存在同一时间过期**。

对于“Redis挂掉了，请求全部走数据库”这种情况，我们可以有以下的思路：

- 事发前：实现Redis的**高可用**(主从架构+Sentinel 或者Redis Cluster)，尽量避免Redis挂掉这种情况发生。
- 事发中：万一Redis真的挂了，我们可以设置**本地缓存(ehcache)+限流(hystrix)**，尽量避免我们的数据库被干掉(起码能保证我们的服务还是能正常工作的)
- 事发后：redis持久化，重启后自动从磁盘上加载数据，**快速恢复缓存数据**。

可以发现缓存击穿跟缓存雪崩很相似，如果缓存中的**某个热点数据过期**了，此时大量的请求直接访问数据库就是 **缓存击穿**

应对缓存击穿可以采取前面说到两种方案：

- 互斥锁方案，保证同一时间只有一个业务线程更新缓存，未能获取互斥锁的请求，要么等待锁释放后重新读取缓存，要么就返回空值或者默认值。
- 不给热点数据设置过期时间，由后台异步更新缓存，或者在热点数据准备要过期前，提前通知后台线程更新缓存以及重新设置过期时间；

**缓存穿透**

是指查询一个一定**不存在的数据**。由于缓存不命中，并且出于容错考虑，如果从**数据库查不到数据则不写入缓存**，这将导致这个不存在的数据**每次请求都要到数据库去查询**，失去了缓存的意义。

缓存穿透也有两种方案：

- 由于请求的参数是不合法的(每次都请求不存在的参数)，于是我们可以使用布隆过滤器(BloomFilter)或者压缩filter**提前拦截**，不合法就不让这个请求到数据库层！
- 当我们从数据库找不到的时候，我们也将这个**空对象设置到缓存里边去**。下次再请求的时候，就可以从缓存里边获取了。
- 这种情况我们一般会将空对象设置一个**较短的过期时间**。

**缓存与数据库双写一致**

只要我们设置了**键的过期时间**，我们就能保证缓存和数据库的数据**最终是一致**的。因为只要缓存数据过期了，就会被删除。随后读的时候，因为缓存里没有，就可以查数据库的数据，然后将数据库查出来的数据写入到缓存中。

除了设置过期时间，我们还需要做更多的措施来**尽量避免**数据库与缓存处于不一致的情况发生。分布式环境下非常容易出现缓存和数据库间数据一致性问题，针对这一点，如果项目对缓存的要求是强一致性的，那么就不要使用缓存。我们只能采取合适的策略来降低缓存和数据库间数据不一致的概率，而无法保证两者间的强一致性。合适的策略包括合适的**缓存更新策略**，更新数据库后**及时更新缓存、缓存失败时增加重试机制。**

两种策略各自有优缺点：

- 先删除缓存，再更新数据库
- 在高并发下表现不如意，在原子性被破坏时表现优异
- 先更新数据库，再删除缓存(`Cache Aside Pattern`设计模式)

**缓存更新的策略**

- Cache Aside（旁路缓存）策略；
- Read/Write Through（读穿 / 写穿）策略；
- Write Back（写回）策略；

主要分为两类 **Cache-Aside** 和 **Cache-As-SoR。** SoR 即「System Of Record，记录系统」，表示数据库。 实际开发中，Redis 和 MySQL 的更新策略用的是 Cache Aside，另外两种策略主要应用在计算机系统里

- **Cache Aside 策略**：应用程序直接**与数据库和缓存交互**，并负责维护缓存的一致性。这种策略简单易用，但是需要维护缓存和数据库的一致性，可能出现缓存穿透或缓存雪崩的问题，一般采用**延迟双删**来保证最终一致性

> 查询：先查询缓存，如果缓存中没有，则查询数据库，并将结果写入缓存
> 
> 
> 更新：先更新数据库，然后删除缓存或者更新缓存
> 

Cache-As-SoR **可以理解为，应用认为后端就是一个单一的存储，而存储自己维护自己的Cache。**数据库由缓存代理，缓存未命中时由缓存加载数据库数据然后应用从缓存读，写数据时更新完缓存后同步写数据库。应用只感知缓存而不感知数据库。

- **Read/Write Through 策略**：应用程序**只和缓存交互**，使用缓存与数据库交互

> 查询：先查询缓存，如果缓存中没有，则缓存从数据库中加载数据，并写入缓存
> 
> 
> 更新：先更新缓存，再由缓存同步更新数据库
> 
- **Write Behind 策略**：应用程序**只和缓存交互**。回写式，数据写入缓存即可返回，缓存内部会异步的去更新数据源，这样好处是**写操作特别快**，因为只需要更新缓存。并且缓存内部可以合并对相同数据项的多次更新，但是带来的问题就是**数据不一致**，可能发生写丢失。
- **Refresh-Ahead 策略**：应用程序**只和缓存交互**，由后台服务与数据库交互

> 查询：只查询缓存
> 
> 
> 更新：由后台服务**自动从数据库中查询最新的数据**，并将数据写入缓存中，
> 

**性能**

`Cache Aside` 的性能较高，它**只在缓存未命中**时才访问数据库

`Read/Write Through` 的性能较低，它在**每次读写时都需要访问数据库**

`Write Behind Caching` 的性能最高，它**只在缓存未命中**时才访问数据库，而**写入操作是异步的**

`Refresh-Ahead` 的性能介于 `Cache Aside` 和 `Write Behind Caching` 之间，它**只在即将过期时**才访问数据库，并且**写入操作也是异步的**

**数据一致性**

`Cache Aside` 的数据一致性较低，它**只在缓存未命中时**才更新缓存，而写入操作则是**直接更新数据库**，**并将缓存中的数据删除或更新**

`Read/Write Through` 的数据一致性最高，它在**每次读写时都**更新数据库和缓存

`Write Behind Caching` 的数据一致性最低，它**只在缓存未命中**时才更新缓存，而写入操作则是先更新缓存，并在**异步更新数据库**，有较大的延迟。

`Refresh-Ahead` 的数据一致性介于 `Read/Write Through` 和 `Cache Aside` 之间，它保证了缓存中的数据**总是最新**的，但是有一定的延迟

Redis 持久化策略，其实就是为了减少服务宕机后数据丢失，以及快速恢复数据，也算是支持高可用的一种实现。 除此之外，Redis 还提供了其它几种方式来保证**系统高可用，**业务中最常用的莫过于主从同步（也称作主从复制）、Sentinel 哨兵机制以及 Cluster 集群。 

### **主从复制**

 Redis 同时支持主从复制和读写分离：一个 Redis 实例作为主节点 Master，负责写操作。其它实例（可能有 1 或多个）作为从节点 Slave，负责复制主节点的数据。

主节点 Master 数据更新：Master 负责处理所有的写操作，包括写入、更新和删除等。 数据同步：写操作在 Master 上执行，然后 Master 将写操作的结果同步到所有从节点 Slave 上。 从节点 Slave 数据读取：Slave 负责处理读操作，例如获取数据、查询等。 数据同步：Slave 从 Master 复制数据，并在本地保存一份与主节点相同的数据副本。 

2.2 为什么要读写分离 1）防止并发2）易于扩展 我们都知道，大部分使用 Redis 的业务都是读多写少的。所以，我们可以根据业务量的规模来确定挂载几个从节点 Slave，当缓存数据增大时，我们可以很方便的扩展从节点的数量，实现弹性扩展。 同时，读写分离还可以实现数据备份和负载均衡，从而提高可靠性和性能。 3）高可用保障 不仅如此，Redis 还可以手动切换主从节点，来做故障隔离和恢复。

****主从复制过程****

- 从服务器连接主服务器，发送SYNC命令；主服务器接收到SYNC命名后，开始执行BGSAVE命令生成RDB文件并使用缓冲区记录此后执行的所有写命令；主服务器BGSAVE执行完后，向所有从服务器发送快照文件，并在发送期间继续记录被执行的写命令；从服务器收到快照文件后丢弃所有旧数据，载入收到的快照；主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；从服务器完成对快照的载入，开始接受命令请求，并执行来自主服务器缓冲区的写命令；（从服务器初始化完成）主服务器每执行一个写命令就会向从服务器发送相同的写命令，从服务器接收并执行收到的写命令（从服务器初始化完成后的操作）
- 一般主从配置可以缓解请求压力，做读写分离，写服务器不开启持久化，从服务器开启，从服务器还负责读取的操作，而且从服务器可以是多个，可以有效缓解主服务器的压力；但是坏处在于，如果主服务器宕机，无法自动切换恢复；

bgsave 过程中，Redis 依然**可以继续处理操作命令**的，也就是数据是能被修改的，关键的技术就在于**写时复制技术（Copy-On-Write, COW）。**执行 bgsave 命令的时候，会通过 fork() 创建子进程

**写入时复制**（英语：**Copy-on-write**，简称**COW**）是一种计算机[程序设计](https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88)领域的优化策略。其核心思想是，如果有多个调用者（callers）同时请求相同资源（如内存或磁盘上的数据存储），他们会共同获取相同的指针指向相同的资源，直到某个调用者试图修改资源的内容时，系统才会真正复制一份专用副本（private copy）给该调用者，而其他调用者所见到的最初的资源仍然保持不变。这过程对其他的调用者都是[透明](https://zh.wikipedia.org/wiki/%E9%80%8F%E6%98%8E)的。此作法主要的优点是如果调用者没有修改该资源，就不会有副本（private copy）被建立，因此多个调用者只是读取操作时可以共享同一份资源。

Redis的**持久化策略**

有两种：1、RDB：快照形式是直接把内存中的数据保存到一个dump的文件中，定时保存，保存策略。2、AOF：把所有的对Redis的服务器进行修改的命令都存到一个文件里，命令的集合。Redis默认是快照RDB的持久化方式。当Redis重启的时候，它会优先使用[AOF文件](https://www.zhihu.com/search?q=AOF%E6%96%87%E4%BB%B6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22118561398%22%7D)来还原数据集，因为AOF文件保存的数据集通常比RDB文件所保存的数据集更完整。你甚至可以关闭[持久化功能](https://www.zhihu.com/search?q=%E6%8C%81%E4%B9%85%E5%8C%96%E5%8A%9F%E8%83%BD&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22118561398%22%7D)，让数据只在服务器运行时存。

**集群原理**

在Redis集群中，所有Redis节点彼此互联，节点内部使用二进制协议优化传输速度和带宽。当一个节点宕机后，集群中超过半数节点检测失效才认为该节点失效。不同于Tomcat集群需要反向代理服务器，Redis集群中任意节点都可以直接和Java客户端连接。Redis集群上的数据分配采用哈希槽。Redis集群中内置了16384个哈希槽，当有数据要存储时，Redis会首先使用CRC16算法对key进行计算，将计算结果对16384取余，这样每个key都会对应一个取值在16384之间的哈希槽。开发者可根据每个Redis实例性能来调整每个Redis实例上哈希槽的分布范围。

### **查询优化**

数据库查询优化是指通过调整数据库查询语句、数据库结构和相关配置，以提高数据库查询性能和效率的过程。在大型应用中，数据库通常是性能瓶颈之一，因此优化查询可以显著提升整体应用性能。以下是一些常见的数据库查询优化技巧：

1. **选择合适的索引**：索引是数据库中加速查询的关键。确保在经常查询的字段上创建适当的索引，但也不要过度创建索引，因为过多的索引可能会降低写操作的性能。
2. **优化查询语句**：
    - 使用适当的条件：在查询中使用WHERE子句限制返回的行数，避免全表扫描。
    - 避免使用SELECT *：只选择需要的列，减少数据传输和处理成本。
    - 使用JOIN优化：合理使用INNER JOIN、LEFT JOIN等连接，确保查询返回所需的数据，避免笛卡尔积和不必要的数据拉取。
3. **分批处理**：对于大量数据的查询，可以使用分页或者批量处理技术，避免一次性处理过多数据。
4. **避免子查询**：尽量避免在查询中使用复杂的子查询，因为它们可能导致性能下降。可以考虑使用连接或者临时表来代替子查询。
5. **使用EXPLAIN**：数据库提供了EXPLAIN语句，可以帮助你理解查询是如何执行的，以及是否使用了索引等。通过分析EXPLAIN的输出，可以发现潜在的性能问题并进行优化。
6. **定期维护和优化数据库**：定期进行数据库的优化和维护操作，如重新组织表、更新统计信息等，以保持数据库的健康状态。
7. **缓存**：使用缓存技术来存储常用查询的结果，减少数据库查询的次数。但需要注意及时更新缓存，以保证数据的一致性。
8. **硬件和服务器优化**：数据库所运行的服务器的硬件性能也会影响查询性能。确保服务器的CPU、内存、存储等方面都能满足数据库的需求。
9. **数据库规范化与反规范化**：在设计数据库结构时，要考虑数据的规范化程度。有时候，为了提高查询性能，可以考虑适当的反规范化。
10. **使用合适的数据库引擎**：不同的数据库引擎有不同的优势和特点。根据应用的需求选择适合的数据库引擎，如MySQL、PostgreSQL、MongoDB等。

DELETE FROM messages WHERE create < DATE_SUB(NOW(), INTERVAL 3 MONTH);

1. 分解大连接查询
将一个大连接查询分解成对每一个表进行一次单表查询，然后在应用程序中进行关联，这样做的好处有：

**缓存之所以能够大幅提高系统的性能，关键在于数据的访问具有局部性，也就是二八定律：「百分之八十的数据访问是集中在 20% 的数据上」。这部分数据也被叫做热点数据。**

让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。
分解成多个单表查询，这些单表查询的缓存结果更可能被其它查询使用到，从而减少冗余记录的查询。
减少锁竞争；
在应用层进行连接，可以更容易对数据库进行拆分，从而更容易做到高性能和可伸缩。
查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。

聚簇索引：将数据和索引放到一起存储，索引结构的叶子节点保留了数据行。 非聚簇索引：将数据进和索引分开存储，索引叶子节点存储的是指向数据行的地址。

CREATE INDEX ,ALTER TABLE

最基本的分页方式：

```
SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT ...
```

在中小数据量的情况下，这样的 SQL 足够用了，唯一需要注意的问题就是确保使用了索引。

举例来说，如果实际 SQL 类似下面语句，那么在 category_id, id 两列上建立复合索引比较好。

```
SELECT * FROM articles WHERE category_id = 123 ORDER BY id LIMIT 50, 10
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e37d8205-76d7-42cc-af76-6c807159e612/Untitled.png)

## DBMS

一般业务刚上线的时候，直接使用单机数据库就够了，但是随着用户量上来之后，系统就面临着大量的写操作和读操作，单机数据库处理能力有限，容易成为系统瓶颈。

由于存在读写锁冲突，并且很多大型互联网业务往往**读多写少**，读操作会首先成为数据库瓶颈，我们希望消除读写锁冲突从而提升数据库整体的读写能力。

那么就需要采用读写分离的数据库集群方式，一主多从，主库会同步数据到从库。写操作都到主库，读操作都去从库。

读写分离的主要思想是将数据库的读和写操作分开处理，从而减轻主数据库的负担，提高整个系统的并发能力和性能。

常见的读写分离架构包括：

1. **主从复制**：通过在主数据库上进行写操作，并将写操作同步到多个从数据库（只读副本）。读操作则可以在从数据库上执行，分担了主数据库的读压力。
2. **Sharding分片**：按照某种规则（例如按照用户ID、地理位置等）将数据分散存储在不同的数据库节点上，每个节点负责一部分数据。这样可以水平扩展数据库系统，提高了系统整体的读写能力。

Mysql**表格设计**？

平衡范式与冗余(效率优先；往往牺牲范式)拒绝3B(拒绝大[sql语句](https://so.csdn.net/so/search?q=sql%E8%AF%AD%E5%8F%A5&spm=1001.2101.3001.7020)：big sql、拒绝大事务：big transaction、拒绝大批量：big batch);

第一范式（1NF）是指数据库表的**每一列都是不可分割的基本数据项**，同一列中不能有多个值，即实体中的某个属性不能有多个值或者不能有重复的属性。如果出现重复的属性，就可能需要定义一个新的实体，新的实体由重复的属性构成，新实体与原实体之间为一对多关系。在第一范式（1NF）中表的每一行只包含一个实例的信息。简而言之，第一范式就是无重复的列。

说明：在任何一个关系数据库中，第一范式（1NF）是对关系模式的基本要求，**不满足第一范式（1NF）的数据库就不是关系数据库。**

第一范式存在问题：冗余度大、会引起修改操作的不一致性、数据插入异常、数据删除异常。

1. **冗余度大**：
    - 1NF要求每列都是原子性的，这可能导致数据的冗余。当数据重复存储在不同的表中，会增加存储空间，增加了数据不一致性的风险。
2. **修改操作的不一致性**：
    - 如果某个信息在多个地方存储，当需要修改这个信息时，需要在所有存储位置进行同样的修改。如果有一个位置的信息修改了而其他位置未修改，数据就会不一致。
3. **数据插入异常**：
    - 数据插入异常指的是由于表中的部分列被留空或无法插入新行，而导致无法插入需要的数据。在1NF中，如果表中的某列是必填项，而其他列不是，当插入新行时，可能会出现无法插入数据的情况。
4. **数据删除异常**：
    - 当从表中删除数据时，可能会意外删除其他相关数据，从而造成数据丢失。这种情况在存在多个依赖于相同键的表时较为常见。如果删除某个主键相关的信息，可能会导致其他数据不完整或不一致。

**第二范式**，强调记录的唯一性约束，数据表必须有一个主键，并且没有包含在主键中的列必须**完全依赖**于主键，而不能只依赖于主键的一部分。

举例：

学生信息（学号，身份证，姓名）学号-》姓名 ，学号，身份证-》姓名 所以姓名部分依赖于（学号，身份证）该表不是2NF。

**2.3 3NF 第三范式**

第三范式，强调数据属性冗余性的约束，也就是非主键列必须直接依赖于主键。也就是消除了非主属性对码的传递函数依赖的2NF。

BCNF消除主键的某一列会依赖于主键的其他列

**4NF 第四范式**

非主属性不应该有多值。如果有多值就违反了第四范式。4NF是限制关系模式的属性间不允许有非平凡且非函数依赖的多值依赖。

举例：用户联系方式表(用户id，固定电话，移动电话)，其中用户id是主键，这个满足了BCNF,但是一个用户有可能会有多个固定电话或者多个移动电话，那么这种设计就不合理，应该改为(用户id，联系方式类型，电话号码)。

说明：如果只考虑函数依赖，关系模式规范化程度最高的范式是BCNF;如果考虑多值依赖则是4NF。

先建立索引或者分区，然后再查询

### 事务

要保证交易正常可靠地进行，数据库就得解决上面的四个问题，这也就是`事务`诞生的背景

事务是为了保证数据的**一致性**

**事务（transaction）指一组 SQL 语句；每一个MySQL语句都是相互依赖的。而整个单独单元作为一个不可分割的整体， 如果单元中某条SQL语句一旦执行失败或产生错误，整个单元将会回滚。 所有受到影响的数据将返回事务开始以前的状态;如果单元中的所有SQL语句均执行成功， 则事务被顺利执行。 保留点（savepoint）指事务处理中设置的临时占位符（placeholder），你可以对它发布回退（与回退整个事务处理不同）。**

**创建**

**隐式事务:**

```c
比如insert、update、delete语句。
```

**显式事务:**

```c
事务具有明显的开启和结束标记。前提: 必须先设置自动提交功能为禁用。set autocommit=0;
```

**事务四大特性，数据库特性**

- A (Atomicity) 原子性：整个事务中的所有操作，要么全部完成，要么全部不完成，不可能停滞在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样
- C (Consistency) 一致性：在事务开始之前和事务结束以后，数据库的**完整性约束**没有被破坏。A账户和B账户之间相互转账，无论如何操作，A、B账户的总金额都必须是不变的。数据库只有一个状态，不存在未确定状态
- 隔离性（Isolation）：隔离性是当多个用户 并发的 访问数据库时，如果操作同一张表，数据库则为每一个用户都开启一个事务，且**事务之间互不干扰**，如果A在**转账**1亿给B（T1），同时C又在转账3亿给A（T2），不管T1和T2谁先执行完毕，最终结果必须是A账户增加2亿，而不是3亿，B增加1亿，C减少3亿。4个隔离级别
    
    持久性（Durability）：持久性就是指如果事务一旦被提交，数据库中数据的改变就是永久性的，即使断电或者宕机的情况下，也不会丢失提交的事务操作。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64a05ff1-8db7-4b5c-b09c-cadaa3e5cf76/Untitled.png)
    

只有满足一致性，事务的执行结果才是正确的。 在无并发的情况下，事务串行执行，隔离性一定能够满足。此时只要能满足原子性，就一定能满足一致性。 在并发的情况下，多个事务并行执行，事务不仅要满足原子性，还需要满足隔离性，才能满足一致性。 **如何保证原子性**

作为接口的调用方，对于接口调用的结果，一般会返回成功、失败和超时。对于成功和失败，都是明确的状态，调用方可以根据结果做相应的处理，而超时则是**未知状态**，由于不确定是否成功请求了，作为调用方来说，所以一般都会选择重试。而重试就会出现定义中描述的多次执行。我们转账**超时**的时候，如果下游转账系统做好**幂等**控制，我们发起**重试**，那即可以**保证转账正常进行，又可以保证不会多转一笔**。

可以从下面这个例子中加深一下理解：A账户向B账号汇钱

使用BEGIN开启一个事务，使用COMMIT提交一个事务，这种事务被称为显式事务，例如，把上述的转账操作作为一个显式事务：

```
begin; -- 开始一个事务
update table set A = A - 1亿; -- 伪sql，仅作示意
update table set B = B + 1亿;
-- 其他读写操作
commit; -- 提交事务
```

要保证上面操作的原子性， 就得等`begin`和`commit`之间的操作全部成功完成后，才将结果统一提交给数据库保存，如果途中任意一个操作失败，就撤销前面的操作，且操作不会提交数据库保存,这样就保证了`同生共死`。

```sql
begin; -- 开始一个事务update table set A = A - 1亿; -- 伪sql，仅作示意update table set B = B + 1亿;-- 其他读写操作commit; -- 提交事务
```

要保证上面操作的原子性， 就得等`begin`和`commit`之间的操作全部成功完成后，才将结果统一提交给数据库保存，如果途中任意一个操作失败，就撤销前面的操作，且操作不会提交数据库保存,这样就保证了`同生共死`。

**如何保证隔离性**

原子性的问题解决了，但是如果有另外的事务在同时修改数据A怎么办呢？ 虽然可以保证事务的同生共死，但是数据一致性会被破坏。 此时需要引入数据的隔离机制，确保同时只能有一个事务在修改A，一个修改完了，另一个才来修改。 这需要对数据A加上[互斥锁](https://www.zhihu.com/search?q=%E4%BA%92%E6%96%A5%E9%94%81&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2243493165%22%7D)

**问题：ACID中哪个特性最重要？**

Consistency 一致性, AID都是为了保证C，但注意的是ACID里的一致性和CAP定理里的一致性**不是一回事**！这里的一致性是指系统从一个正确的状态,迁移到另一个正确的状态.什么叫正确的状态呢?就是当前的状态满足预定的约束就叫做正确的状态

然而微服务架构下，每个微服务都有自己的数据库，导致微服务架构的系统不能简单地满足 ACID，我们就需要寻找微服务架构下的数据一致性解决方案。

微服务架构的系统本身是一种[分布式系统](https://so.csdn.net/so/search?q=%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F&spm=1001.2101.3001.7020)，而本文讨论的问题其实也就是分布式事务之数据一致性的问题，我们来聊聊分布式系统的 CAP 理论和 BASE 理论。

如果不考虑事务的隔离性，会发生的几种问题：

**1，脏读**

脏读是指在一个事务处理过程里读取了另一个未提交的事务中的数据。

当一个事务正在多次修改某个数据，而在这个事务中这多次的修改都还未提交，这时一个并发的事务来访问该数据，就会造成两个事务得到的数据不一致。例如：用户A向用户B转账100元，对应SQL命令如下

    `update account set money=money+**100** where name=’B’;  (此时A通知B)

    update account set money=money - **100** where name=’A’;`

当只执行第一条SQL时，A通知B查看账户，B发现确实钱已到账（此时即发生了脏读），而之后无论第二条SQL是否执行，只要该事务不提交，则所有操作都将回滚，那么当B以后再次查看账户时就会发现钱其实并没有转。

**不可重复读和幻读到底有什么区别呢？**

(1) 不可重复读是读取了其他事务更改的数据，**针对update操作**

解决：使用行级锁，锁定该行，事务A多次读取操作完成后才释放该锁，这个时候才允许其他事务更改刚才的数据。

(2) 幻读是读取了其他事务新增的数据，**针对insert和delete操作 （前后多次读取，数据总量不一致）**

解决：使用表级锁，锁定整张表，事务A多次读取数据总量之后才释放该锁，这个时候才允许其他事务新增数据。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b8e3320-e84c-4306-9350-00c7b485ebb0/Untitled.png)

### 隔离级别

并发环境中事务的隔离级别一共分为四种，安全性分别如下：

- **序列化（SERIALIZABLE）**：如果隔离级别为序列化，则用户之间通过一个接一个顺序地执行当前的事务，这种隔离级别提供了事务之间最大限度的隔离。
- **可重复读（REPEATABLE READ）**：这是MySQL的默认事务隔离级别，它确保**同一事务的多个实例在并发读取数据时，会看到同样的数据行。**不过理论上，这会导致另一个棘手的问题：幻读 （Phantom Read）。简单的说，幻读指当用户读取某一范围的数据行时，另一个事务又在该范围内插入了新行，当用户再读取该范围的数据行时，会发现有新的“幻影” 行。InnoDB和Falcon存储引擎通过多版本并发控制（**MVCC**，Multiversion Concurrency Control）机制解决了该问题。
- **提交读（READ COMMITTED）**这是大多数数据库系统的默认隔离级别（Oracle、PostgreSQL、SQL Server默认模式）。它满足了隔离的简单定义：**一个事务只能看见已经提交事务所做的改变。**这种隔离级别 也支持所谓的不可重复读（Nonrepeatable Read），因为同一事务的其他实例在该实例处理其间可能会有新的commit，**所以同一select可能返回不同结果。**
- **未提交读（READ UNCOMMITTED）**处于这个隔离级的事务可以读到其他事务还没有提交的数据 在该隔离级别，所有事务都可以看到其他未提交事务的执行结果。本隔离级别很少用于实际应用，因为它的**性能**也不比其他级别好多少。

1. 一个事务A（txnId=100）修改了数据X，使得X=1，并且commit了
2. 另外一个事务B（txnId=101）开始尝试读取X，但是还X=1。但B没有提交。
3. 第三个事务C（txnId=102）修改了数据X，使得X=2。并且提交了
4. 事务B又一次读取了X。这时
- 如果事务B是Read Committed。那么就读取X的最新commit的版本，也就是X=2
- 如果事务B是Repeatable Read。那么读取的就是当前事务（txnId=101）之前X的最新版本，也就是X被txnId=100提交的版本，即X=1。

注意，这里B不论是Read Committed，还是Repeatable Read，都不会被锁，都能立刻拿到结果。这也就是MVCC存在的意义。

在基于MVCC的数据库实现中，根本就不需要出现Read Uncommitted这种情况。Read Uncommitted是早期数据库，读写都基于锁进行实现的产物。在实际业务中Read Uncommitted毫无意义

当多个用户/进程/线程同时对数据库进行操作时，会出现3种冲突情形：

1. 读-读，不存在任何问题
2. 读-写，有隔离性问题，可能遇到脏读（会读到未提交的数据） ，幻影读等。
3. 写-写，可能丢失更新

要解决冲突，一种办法是是锁，即基于锁的并发控制，比如2PL，这种方式开销比较高，而且无法避免死锁。

多版本并发控制（MVCC）是一种用来**解决读-写冲突**的无锁并发控制，也就是为事务分配单向增长的时间戳，为每个修改保存一个版本，版本与事务时间戳关联，读操作只读该事务开始前的数据库的快照。 这样在读操作不用阻塞写操作，写操作不用阻塞读操作的同时，避免了脏读和不可重复读

乐观并发控制（OCC）是一种用来**解决写-写冲突**的无锁并发控制，认为事务间争用没有那么多，所以先进行修改，在提交事务前，检查一下事务开始后，有没有新提交改变，如果没有就提交，如果有就放弃并重试。乐观并发控制类似自选锁。乐观并发控制适用于低数据争用，写冲突比较少的环境。

**多版本并发控制可以结合基于锁的并发控制来解决写-写冲突，即MVCC+2PL，也可以结合乐观并发控制来解决写-写冲突。**

### MVCC

MVCC（Multi-Version Concurrency Control，多版本并发控制）是数据库系统中一种常见的并发控制机制，用于处理多个事务同时对同一数据进行读写操作时的并发性。

MVCC 的工作原理如下：

1. **版本控制：** **每当对数据库进行写操作（如插入、更新或删除）时，系统会为每个操作创建一个新版本的数据，而不是直接覆盖原始数据。**
2. **版本号：** 每个数据行都有一个唯一的版本号或时间戳来标识。这些版本号可以表示数据的创建时间或事务的提交时间。
3. **读取操作：** 当进行读取操作时，事务会根据其开始时间或事务 ID 查看可见的版本。这意味着事务只能看到在其开始之前提交的版本。这样，即使其他事务正在修改数据，读操作也不会受到影响，因为它们会查看之前已提交的版本。
4. **写操作：** 对于写操作，事务会创建新版本的数据，并在提交时更新系统中的版本控制信息。其他正在进行的事务可以继续访问旧版本的数据，直到新版本的数据被完全提交。

MySQL的**InnoDB存储引擎实现MVCC的策略**就是使用这种方法来提高读写事务控制的、他大大**提高了读写事务的并发性能**，原因是MVCC是一种不采用锁来控制事物的方式，是一种非堵塞

一般解决幻读的方法是增加范围锁RangeS，锁定检索范围为只读，这样就避免了幻读。

MVCC最大的优势：**读不加锁，读写不冲突**。读写不冲突是非常重要的，极大的增加了系统的并发性能。**MVCC机制也是乐观锁的一种体现。**

分布式事务由于网络不可靠的问题

二阶段锁（Two-Phase Locking，简称2PL）是一种并发控制机制，用于确保并发执行的事务不会导致数据不一致或丢失更新的问题。这种机制通过两个阶段来实现对共享资源的锁定和释放。

**1. 两个阶段**

a. 加锁阶段（Growing Phase）

在这个阶段，事务可以获取锁，但不能释放任何锁。事务可以根据需要动态地请求和获取锁，但一旦释放了锁，就不能再获取新的锁。这个阶段的目标是获取所有需要的锁。

b. 解锁阶段（Shrinking Phase）

在这个阶段，事务可以释放已经持有的锁，但不能再获取新的锁。一旦事务释放了一个锁，就不能再获取锁，这样可以确保事务不会在释放锁之后再对其他资源请求锁，从而防止死锁的发生。

**2. 特性**

a. 死锁避免

通过强制事务按照两个阶段的顺序获取和释放锁，可以有效地避免死锁的发生。在解锁阶段，事务不再获取新的锁，从而减少了死锁的可能性。

b. 严格一致性

二阶段锁保证了事务的严格一致性，即事务在提交之前持有的锁不会被释放，确保了事务在整个执行过程中对数据的一致性要求。

c. 并发性

尽管二阶段锁可以保证一致性，但它可能限制了系统的并发性。因为在加锁阶段，事务需要获取所有需要的锁，这可能导致一些事务等待其他事务释放锁，从而降低了系统的并发性能。

# Distributed System

分布式事务是指涉及多个**独立参与者（如数据库、消息队列、服务等）**的事务操作。在分布式环境中，确保多个参与者之间的事务操作具有原子性、一致性、隔离性和持久性（ACID属性）是复杂的。

ZooKeeper（ZooKeeper分布式协调服务）是一个开源的分布式协调服务，提供了一个高性能、高可靠性的分布式应用协调和管理的平台。它主要用于解决分布式系统中的一些数据一致性共识问题，比如选举master、分布式锁、配置管理等。底层基于paxos改造，目前kafka,Hbase,Hadoop都通过zookeeper实现。

1. **协调服务**：ZooKeeper 提供了分布式系统中的一致性和协同服务，包括统一命名服务、状态同步等。
2. **分布式锁**：ZooKeeper 提供了基于临时节点的分布式锁，可以用于协调多个节点的访问。
3. **选举机制**：ZooKeeper 提供了一些原语，可以用来实现选主机制，确保在集群中只有一个节点拥有特定的角色。

Zookeeper是集群部署，只要集群中超过半数节点存活，即可提供服务，例如一个由3个节点的Zookeeper，允许1个Zookeeper节点宕机，集群仍然能提供服务；一个由５个节点的Zookeeper，允许2个节点宕机。

但Zookeeper的设计是CP模型，即要保证数据的强一致性，必然在可用性方面做出牺牲。

Zookeeper不同于raft只有leader follower

leader向所有follower发送定期心跳，心跳返回不过半则导致leader退位。follower没有收到来自leader的心跳会导致进入looking状态

---

分布式锁基本使用两个解决方案：

（1）基于ZooKeeper的分布式锁，适用于高可靠（高可用）而并发量不是太大的场景；

（2）基于Redis的分布式锁，适用于并发量很大、性能要求很高的、而可靠性问题可以通过其他方案去弥补的场景。

ZooKeeper 分布式锁的实现依赖于**有序节点和事件监听机制**，通过客户端创建有序节点、比较节点顺序和监听节点变化事件，确保在分布式环境下实现了简单而有效的分布式锁：

创建临时顺序节点：客户端尝试在 ZooKeeper 中创建一个临时顺序节点，表示自己请求锁。

获取所有顺序节点：客户端获取所有与锁相关的节点列表，并确定自己的节点序号。

判断是否获得锁：客户端检查自己创建的节点是否为当前所有节点中最小的节点序号，如果是，则表示获得了锁。

否则等待：如果客户端的节点不是当前序号最小的节点，客户端将监听其前一个节点的变化事件，并进入等待状态。

释放锁：当持有锁的客户端完成操作后，会删除对应的节点，释放锁，此时监听该节点的其他等待锁的客户端会收到通知，重新检查节点序号以尝试获取锁。

**Kafka 使用 ZooKeeper：**

Apache Kafka 是一个分布式流处理平台，用于处理实时数据流。Kafka 使用 ZooKeeper 来进行多个方面的管理，包括：

**Broker 管理**：ZooKeeper 负责跟踪 Kafka 集群中的所有 Broker 的元数据，比如 Broker 的状态、位置等信息。

**Topic 和 Partition 管理**：ZooKeeper 存储了 Kafka Topic 和 Partition 的元数据信息，帮助 Kafka Broker 和 Consumer 定位和管理消息。

**Leader 选举**：ZooKeeper 协助 Kafka 进行 Leader 的选举和管理，确保 Partition 在集群中的高可用性。

**HBase 使用 ZooKeeper：**

Apache HBase 是一个分布式、面向列的 NoSQL 数据库，运行在 Hadoop 上。HBase 也使用 ZooKeeper 来进行诸多管理：

**RegionServer 管理**：ZooKeeper 跟踪 HBase 中的 RegionServer 的状态和位置信息，协助 HBase 进行 Region 的负载均衡。

**Master 和备份 Master 选举**：ZooKeeper 用于 Master 节点的选举，并协助备份 Master 在主节点失效时接管管理。

**Hadoop 使用 ZooKeeper：**

Apache Hadoop 是一个用于分布式存储和处理大规模数据的框架。在 Hadoop 中，ZooKeeper 主要用于一些管理和协调任务，例如：

**NameNode 高可用**：ZooKeeper 用于协助 Hadoop 实现 NameNode 的高可用性，确保在 NameNode 故障时可以快速切换到备用节点。

**作业协调**：ZooKeeper 在 Hadoop 集群中用于作业协调，比如记录作业的状态、分配任务等。

在分布式系统中，每个节点虽然可以知晓自己的操作时成功或者失败，却无法知道其他节点的操作的成功或失败。当一个事务跨越多个节点时，为了保持事务的[ACID](https://zh.wikipedia.org/wiki/ACID)特性，需要引入一个作为**协调者**的组件来统一掌控所有节点（称作**参与者**）的操作结果并最终指示这些节点是否要把操作结果进行真正的提交（比如将更新后的数据写入磁盘等等）。因此，二阶段提交的算法思路可以概括为： **参与者将操作成败通知协调者，再由协调者根据所有参与者的反馈情报决定各参与者是否要提交操作还是中止操作。**

2PC 的过程分为两个阶段：

1. **投票阶段（Voting Phase）**：
    - 协调者（Coordinator）向所有参与者发送一个请求以确认是否可以提交事务。
    - 参与者在确认自身可以提交事务的情况下，返回“同意”消息，否则返回“中止”消息。
2. **提交/中止阶段（Commit/Abort Phase）**：
    - 如果所有参与者都返回“同意”，协调者发送一个全局提交消息。
    - 如果有任何参与者返回“中止”，协调者发送一个全局回滚消息。

2PC 的优点是可以确保分布式事务的一致性，使得所有参与者要么都提交要么都回滚。然而，它也有一些缺点，包括：

- 阻塞：在第一个阶段，协调者会阻塞等待所有参与者的回应，这可能导致整个系统的阻塞。
- 单点故障：协调者成为了单点故障，一旦协调者出现问题，整个协议可能失败。

由于这些限制，一些分布式系统可能会选择其他协议来解决分布式事务的问题，以减少阻塞、提高性能和降低单点故障的影响。

Paxos与分布式事务有相似之处，但并不相同。而在分布式数据库中，分布式事务是用来保证跨节点事务原子性的，而Paxos协议则是保证数据多副本一致性的。

这里要理解到，即使没有多副本，分布式事务一样是需要的；即使没有分布式事务，多副本一致性也是需要的。因此这两者有关联，但各自处理场景不同。

而Paxos在分布式数据库中多副本一致性，保证的到底是什么呢？大多数人会认为主要是保证有多数副本节点写入成功，而实际上，更重要的，其实是为了保证大量并发写入，在各个节点上的写入顺序是一致的，即必须严格保证各个副本节点，关于并发操作的写入顺序一致，这一点是需要注意的。

在分布式系统中，缓存数据一致性是一个重要的问题，因为不同的缓存节点可能会存储相同的数据副本，而当数据更新时，需要确保所有缓存节点上的数据保持一致。以下是一些常见的方法和策略，用于解决缓存数据一致性问题：

1. **缓存失效策略**：
当数据发生变化时，及时使缓存失效。这样，下次请求到达时，缓存将会被更新。这种方法简单有效，但可能导致"缓存雪崩"问题，即大量失效缓存导致数据库压力过大。
2. **缓存更新策略**：
当数据更新时，不仅使缓存失效，而是先更新数据库，然后更新缓存。这种方式可以避免缓存雪崩，但可能会带来一些延迟。
3. **写-through 缓存**：
当数据写入数据库时，同时更新缓存。这确保了缓存和数据库的一致性，但也可能导致写操作的延迟。
4. **写-behind 缓存**（也称为异步写缓存）：
当数据写入数据库时，首先更新缓存。然后，异步地将数据写入数据库。这可以提高写操作的性能，但可能会带来数据不一致的风险。
5. **分布式缓存**：
使用分布式缓存系统，如 Redis 或 Memcached，它们具有内置的机制来处理数据一致性。这些系统通常提供了复制、分片和一致性哈希等特性，以确保数据在缓存集群中保持一致。
6. **版本控制**：
在数据中引入版本控制，每次更新都伴随着版本号的增加。缓存节点可以存储数据的版本号，以便在比较版本号时检查数据是否一致。
7. **发布/订阅模式**：
使用发布/订阅模式，当数据更新时，发布一个消息通知所有缓存节点更新数据。这种方式可以确保所有节点在数据更新时保持同步。
8. **一致性哈希**：
一致性哈希算法可以用于在缓存集群中确定每个数据项应该存储在哪个节点上。这有助于在缓存节点发生变化时，最小化数据的迁移。

**单点故障**( **SPOF** ) 是系统的一部分，如果发生[故障](https://en.wikipedia.org/wiki/Failure)，整个系统将[停止工作](https://en.wikipedia.org/wiki/Cascading_failure)

Systems can be made robust by adding [redundancy](https://en.wikipedia.org/wiki/Redundancy_(engineering)) in all potential SPOFs. Redundancy can be achieved at various levels.

The assessment of a potential SPOF involves identifying the critical components of a complex system that would provoke a total systems failure in case of [malfunction](https://en.wiktionary.org/wiki/malfunction). Highly [reliable systems](https://en.wikipedia.org/wiki/Reliability_engineering) should not rely on any such individual component.

设计一个避免单点故障的分布式系统：

1. **冗余节点**：
引入冗余节点是一种常见的方法。将系统的功能分布到多个节点上，每个节点都能独立处理请求。如果一个节点发生故障，其他节点可以继续处理请求。这可以通过负载均衡来实现，确保请求被平均分配到各个节点上。
2. **主从备份**：
对于存储数据的场景，使用主从备份架构可以帮助避免单点故障。主节点负责处理写操作，从节点负责复制主节点的数据，并提供读操作。如果主节点发生故障，可以将一个从节点提升为新的主节点。
3. **集群化架构**：
将系统划分为多个相互独立的集群，每个集群都有自己的节点和资源。这种架构可以减少单个集群发生故障对整体系统的影响。同时，通过使用跨集群的通信机制来实现跨集群的协调。
4. **使用分布式存储**：
分布式存储系统可以确保数据分布在多个节点上，从而避免单点存储故障。一些分布式存储技术如HDFS（Hadoop Distributed File System）、Ceph等可以提供高度可靠的数据存储。
5. **自动扩展和缩放**：
采用自动扩展和缩放机制可以根据负载情况动态调整节点数量。当负载增加时，系统可以自动添加新节点来分担负载，当负载减少时，可以自动缩减节点数量。
6. **监控和警报系统**：
设置监控和警报系统来实时监测系统的状态。一旦发现故障或异常，系统可以自动触发警报，从而能够迅速采取行动来处理问题。

CAP原则又称CAP定理，指的是在一个分布式系统中，Consistency（一致性）、 Availability（可用性）、Partition tolerance（分区容错性），三者不可兼得。

1. **一致性（Consistency）**：一致性要求分布式系统的所有节点在同一时刻对于相同的数据有相同的视图。换句话说，如果一个写操作成功完成后，所有后续的读操作都应该返回最新的写入结果。
2. **可用性（Availability）**：可用性要求分布式系统在有请求时能够提供响应，即系统保持活跃状态，不会出现无响应的情况。可用性意味着在任何时刻，系统都至少能够响应一部分请求，即使某些节点或组件失败。
3. **分区容忍性（Partition Tolerance）**：分区容忍性是指分布式系统能够在节点之间发生通信故障或网络分区的情况下继续正常运行。网络分区是指系统中的节点被分隔成多个不能相互通信的子集。
- 以电商网站为例，会员登录、个人设置、个人订单、购物车、搜索用AP，因为这些数据短时间内不一致不影响使用；后台的商品管理就需要CP，避免商品数量的不一致；**支付功能需要CA**，保证支付功能的安全稳定

提高分区容忍性的办法就是一个数据项复制到多个节点上，那么出现分区之后，这一数据项就可能分布到各个区里。容忍性就提高了。

然而，要把数据复制到多个节点，就会带来一致性的问题，就是多个节点上面的数据可能是不一致的。要保证一致，每次写操作就都要等待全部节点写成功，而这等待又会带来可用性的问题。

总的来说就是，**数据存在的节点越多，分区容忍性越高，但要复制更新的数据就越多，一致性就越难保证。为了保证一致性，更新所有节点数据所需要的时间就越长，可用性就会降低。**

BASE理论的核心思想是：**即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性。**

1. Basically Available（基本可用） 响应时间上的损失：正常情况下，处理用户请求需要0.5s返回结果，但是由于系统出现故障，处理用户请求的时间变成3s。 系统功能上的损失：正常情况下，在一个电子商务网站上进行购物的时候，消费者几乎能够顺利完成每一笔订单，但是在一些节日大促购物高峰的时候，由于消费者的购物行为激增，为了保护购物系统的稳定性，部分消费者可能会被引导到一个降级页面
2. 软状态 软状态指允许系统中的数据存在中间状态，并认为该中间状态的存在不会影响系统的整体可用性，即**允许系统在不同节点的数据副本之间进行数据同步的过程存在延时**
3. 最终一致性 最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性。
- **分布式：** 一个业务分拆多个子业务，部署在不同的服务器上
- **集群：** 同一个业务，部署在多个服务器上。比如之前做电商网站搭的redis集群以及solr集群都是属于将redis服务器提供的缓存服务以及solr服务器提供的搜索服务部署在多个服务器上以提高系统性能、并发量解决海量存储问题。

The **consensus problem** requires agreement among a number of processes (or agents) for a single data value. Some of the processes (agents) may fail or be unreliable in other ways, so consensus protocols must be [fault tolerant](https://en.wikipedia.org/wiki/Fault_tolerant) or resilient. The processes must somehow put forth their candidate values, communicate with one another, and agree on a single consensus value.

The consensus problem is a fundamental problem in control of multi-agent systems. One approach to generating consensus is for all processes (agents) to agree on a majority value. In this context, a majority requires at least one more than half of available votes (where each process is given a vote). However, one or more faulty processes may skew the resultant outcome such that consensus may not be reached or reached incorrectly.

解决共识问题的协议旨在处理数量有限的错误进程Protocols that solve consensus problems are designed to deal with limited numbers of faulty [processes](https://en.wikipedia.org/wiki/Process_(computing)). These protocols must satisfy a number of requirements to be useful. For instance, a trivial protocol could have all processes output binary value 1. This is not useful and thus the requirement is modified such that the output must somehow depend on the input. That is, the output value of a consensus protocol must be the input value of some process. Another requirement is that a process may decide upon an output value only once and this decision is irrevocable. A process is called correct in an execution if it does not experience a failure. A consensus protocol tolerating halting failures must satisfy the following properties.[[1]](https://en.wikipedia.org/wiki/Consensus_(computer_science)#cite_note-coulouris-1)

OLTP vs OLAP

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/235d1c69-6aa1-4d68-944f-bc9712ea91a2/Untitled.png)

### MapReduce

1TB的数据，如何统计单词数？如何建立倒排索引？这其实是很复杂的过程，如果有10TB，或者1PB数据怎么办呢？这时候单机就没办法做，变得很复杂需要想办法来解决。很多人说这些可以自己单机写，单机写的过程甚至构建了一个MapReduce的系统

是面向大数据并行处理的计算模型、框架和平台，它隐含了以下三层含义：

1）MapReduce是一个基于集群的高性能并行计算平台（Cluster Infrastructure）。它允许用市场上普通的商用服务器构成一个包含数十、数百至数千个节点的分布和并行计算集群。

2）**MapReduce**是一种[编程模型](https://en.wikipedia.org/wiki/Programming_model)和相关实现，用于在[集群上使用](https://en.wikipedia.org/wiki/Cluster_(computing))[并行](https://en.wikipedia.org/wiki/Parallel_computing)[分布式](https://en.wikipedia.org/wiki/Distributed_computing)算法处理和生成[大数据](https://en.wikipedia.org/wiki/Big_data)集将数据分布存储、数据通信、容错处理等并行计算涉及到的很多系统底层的复杂细节交由系统负责处理，大大减少了软件开发人员的负担。

3）MapReduce是一个并行程序设计模型与方法（Programming Model & Methodology）。它借助于**函数式程序设计语言**Lisp的设计思想，提供了一种简便的[并行程序设计方法](https://baike.baidu.com/item/%E5%B9%B6%E8%A1%8C%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%B3%95/22651264)，用Map和Reduce两个函数编程实现基本的并行计算任务，提供了抽象的操作和并行编程接口，以简单方便地完成大规模数据的编程和计算处理  A MapReduce program is composed of a *[map](https://en.wikipedia.org/wiki/Map_(parallel_pattern))*
 [procedure](https://en.wikipedia.org/wiki/Procedure_(computing)), which performs filtering and sorting (such as sorting students by first name into queues, one queue for each name), and a *[reduce](https://en.wikipedia.org/wiki/Reduce_(parallel_pattern))*
 method, which performs a summary operation (such as counting the number of students in each queue, yielding name frequencies). The "MapReduce System" (also called "infrastructure" or "framework") orchestrates the processing by [marshalling](https://en.wikipedia.org/wiki/Marshalling_(computer_science))
 the distributed servers, running the various tasks in parallel, managing all communications and data transfers between the various parts of the system, and providing for [redundancy](https://en.wikipedia.org/wiki/Redundancy_(engineering))
 and [fault tolerance](https://en.wikipedia.org/wiki/Fault-tolerant_computer_system)
.

**Hadoop实现了一个[分布式文件系统](https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F/1250388)（ Distributed File System），其中一个组件是[HDFS](https://baike.baidu.com/item/HDFS/4836121)（Hadoop Distributed File System）。HDFS有高[容错性](https://baike.baidu.com/item/%E5%AE%B9%E9%94%99%E6%80%A7/9131391)的特点，并且设计用来部署在低廉的（low-cost）硬件上；而且它提供高吞吐量（high throughput）来访问[应用程序](https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F/5985445)的数据，适合那些有着超大数据集（large data set）的应用程序。HDFS放宽了（relax）[POSIX](https://baike.baidu.com/item/POSIX/3792413)的要求，可以以流的形式访问（streaming access）文件系统中的数据。Hadoop的框架最核心的设计就是：[HDFS](https://baike.baidu.com/item/HDFS/4836121)和[MapReduce](https://baike.baidu.com/item/MapReduce/133425)。HDFS为海量的数据提供了存储，而MapReduce则为海量的数据提供了计算**

# 信息检索

正向索引: **当用户发起查询时（假设查询为一个关键词），搜索引擎会扫描索引库中的所有文档，找出所有包含关键词的文档，这样依次从文档中去查找是否含有关键词的方法叫做正向索引**。增加效率，**搜索引擎会把正向索引变为反向索引（倒排索引）即把“文档→单词”的形式变为“单词→文档”的形式，分出来的词集合称为Term Dictionary**。

倒排索引具体机构如下: 单词1→文档1的ID；文档2的ID；文档3的ID…

倒排索引(Inverted Index)：倒排索引是实现**“单词-文档矩阵”**的一种具体存储形式，通过倒排索引，可以根据单词快速获取包含这个单词的文档列表。倒排索引主要由两个部分组成：“单词词典”和“倒排文件”。

单词词典(Lexicon)：搜索引擎的通常索引单位是单词，单词词典是由文档集合中出现过的所有单词构成的字符串集合，单词词典内每条索引项记载单词本身的一些信息以及指向“倒排列表”的指针。 倒排列表(PostingList)：倒排列表记载了出现过某个单词的所有文档的文档列表及单词在该文档中出现的位置信息，每条记录称为一个倒排项(Posting)。根据倒排列表，即可获知哪些文档包含某个单词。 倒排文件(Inverted File)：所有单词的倒排列表往往顺序地存储在磁盘的某个文件里，这个文件即被称之为倒排文件，倒排文件是存储倒排索引的物理文件。

TF(term frequency): 单词在文档中出现的次数。 Pos: 单词在文档中出现的位置。

这个表格展示了更加复杂的倒排索引，前两列不变，第三列倒排索引包含的信息为(文档ID，单词频次，<单词位置>)，比如单词“乔布斯”对应的倒排索引里的第一项(1;1;<1>)意思是，文档1包含了“乔布斯”，并且在这个文档中只出现了1次，位置在第一个。

### MQ（Message Queue）

是基础数据结构中“先进先出”的一种数据结构。一般用来解决应用**解耦，异步消息，流量削峰**等问题，实现高性能，高可用，可伸缩和最终一致性架构

缺点：

**系统复杂性**

本来蛮简单的一个系统，我代码随便写都没事，现在你凭空接入一个中间件在那，我是不是要考虑去维护他，而且使用的过程中是不是要考虑各种问题，比如消息**重复消费**、**消息丢失**、**消息的顺序消费**等等，反正用了之后就是贼烦。

**数据一致性**

这个其实是分布式服务本身就存在的一个问题，**不仅仅是消息队列的问题**，但是放在这里说是因为用了消息队列这个问题会暴露得比较严重一点。

**可用性**

你搞个系统本身没啥问题，你现在突然接入一个中间件在那放着，万一挂了怎么办？我下个单**MQ挂了**，优惠券不扣了，积分不减了，这不是杀一个程序员能搞定的吧，感觉得杀一片。

### 消息队列中间件

消息队列的核心思想就是把同步的操作变成异步处理

在实际应用中包括如下四个场景：

- 应用耦合：多应用间通过消息队列对同一消息进行处理，避免调用接口失败导致整个过程失败；
- 异步处理：多应用对消息队列中同一消息进行处理，应用间并发处理消息，相比串行处理，减少处理时间；
- 限流削峰：广泛应用于秒杀或抢购活动中，避免流量过大导致应用系统挂掉的情况；
- 消息驱动的系统：系统分为消息队列、消息生产者、消息消费者，生产者负责产生消息，消费者(可能有多个)负责对消息进行处理；发布/订阅模式下包括三个角色：角色主题（Topic）发布者(Publisher)订阅者(Subscriber)

目前在市面上比较主流的消息队列中间件主要有，**Kafka、ActiveMQ、RabbitMQ、RocketMQ** 等这几种。

### Elasticsearch

Elasticsearch 是一个分布式、可扩展、实时的搜索与数据分析引擎。 它能从项目一开始就赋予你的数据以搜索、分析和探索的能力，可用于实现全文搜索和实时数据统计。

## 微服务

### 熔断、隔离、降级

服务隔离、降级和熔断的产生背景 tomcat底层都会共享一个线程池（自己创建的例外），当某个方法(服务)访问非常慢造成响应延迟，会造成大多数线程阻塞，导致整个线程池被占用甚至拖垮。 线程名定义：线程池名称+线程ID

2.服务隔离解决思路 2.1 线程池隔离

不同的http服务使用不同的线程池，当自己的资源用完，直接返回失败而不是占用别人的资源 优点：可提高并发性 缺点：增加CPU调度开销 使用场景：第三方应用或接口；并发量大

2.2 信号量隔离

原子计数器方式记录当前运行的线程数，超过则拒绝，不超过则+1，返回则-1 使用场景：内部应用或中间件；并发需求不大

区别：信号量可动态调整，但线程池不可以调整

3.服务降级 当服务不可用（服务正在等待、链接超时、网络延迟、服务器响应慢等），客户端一直等待时，调用fallback方法给客户端返回一个错误提示，不让客户端继续等待。 目的：提高用户体验，防止雪崩效应。

4.服务熔断 熔断和保险丝一样，当访问请求过多的时候，达到一个阈值（自己设置）就直接拒绝访问，可以保护当前服务，让服务不会被挂掉，需要和服务降级一起使用。

### RPC

RPC 的全称是 Remote Procedure Call 是一种进程间通信方式。它允许**程序调用另一个地址空间(通常是共享网络的另一台机器上)的过程或函数**，而不用程序员显式编码这个远程调用的细节。即无论是调用本地接口/服务的还是远程的接口/服务，本质上编写的调用代码基本相同。

RPC 是一个请求响应模型 会隐藏底层的通讯细节(不需要直接处理Socket通讯或Http通讯)。客户端发起请求，服务器返回响应(类似于Http的工作方式).RPC 在使用形式,最初目的是像调用本地函数(或方法)一样去调用远程的函数(或方法)。

除 RPC 之外，常见的多系统数据交互方案还有分布式消息队列、HTTP 请求调用、数据库和分布式缓存等。 其中 RPC 和 HTTP 调用是没有经过中间件的，它们是端到端系统的直接数据交互。

在RPC框架中主要有三个角色：`提供者`、`消费者`和`注册中心`。如下图所示：

!https://img-blog.csdnimg.cn/3236c96f76d343e4811384df4d06f2d1.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzkwNTQ1,size_16,color_FFFFFF,t_70#pic_center

在这里插入图片描述

- 提供者: 暴露服务的服务提供方。
- 调用者: 调用远程服务的服务消费方。
- 注册中心: 服务注册与发现的注册中心。

**4步：建立通信，服务寻址，网络传输，服务调用**

3、网络传输

3.1、序列化

客户端怎么把参数值传给远程的函数呢？在本地调用中，我们只需要把参数压到栈里，然后让函数自己去栈里读就行。但是在远程过程调用时，客户端跟服务端是不同的进程，**不能通过内存来传递参数**。甚至有时候客户端和服务端使用的都不是同一种语言（比如服务端用C++，客户端用Java或者Python）。这时候就需要客户端把参数先转成一个字节流，传给服务端后，再把字节流转成自己能读取的格式。这个过程叫序列化和反序列化。同理，从服务端返回的值也需要序列化反序列化的过程。

当A机器上的应用发起一个RPC调用时，调用方法和其入参等信息需要通过底层的网络协议如TCP传输到B机器，由于网络协议是基于二进制的，所有我们传输的参数数据都需要先进行序列化（Serialize）或者编组（marshal）成二进制的形式才能在网络中进行传输。然后通过寻址操作和网络传输将序列化或者编组之后的二进制数据发送给B机器。

3.2、反序列化 B接收到请求后，二进制信息恢复为内存中的表达方式

网络传输。

远程调用往往用在网络上，客户端和服务端是通过网络连接的。所有的数据都需要通过网络传输，因此就需要有一个网络传输层。网络传输层需要把Call ID和序列化后的参数字节流传给服务端，然后再把序列化后的调用结果传回客户端。只要能完成这两者的，都可以作为传输层使用。因此，它所使用的协议其实是不限的，能完成传输就行。尽管大部分RPC框架都使用TCP协议，但其实UDP也可以，而gRPC干脆

[通信方式](about:blank#%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A1)

分布式运算8宗罪

\1. The network is reliable —— 网络是可靠的。 \2. Latency is zero —— 延迟是不存在的。 \3. Bandwidth is infinite —— 带宽是无限的。 \4. The network is secure —— 网络是安全的。 \5. Topology doesn’t change —— 拓扑结构是一成不变的。 \6. There is one administrator —— 总会有一个管理员。 \7. Transport cost is zero —— 不必考虑传输成本。 \8. The network is homogeneous —— 网络是同质化的

RPC发展为RMI（Sun/Oracle）、Thrift（Facebook/Apache）、Dubbo（阿里巴巴/Apache）、gRPC（Google）、Motan1/2（新浪）、Finagle（Twitter）、brpc（百度/Apache）、.NET Remoting（微软）、Arvo（Hadoop）、JSON-RPC 2.0 （公开规范，JSON-RPC 工作组）……等等难以穷举的协议和框架。最近几年，RPC 框架有明显的朝着更高层次（不仅仅负责调用远程服务，还管理远程 服务）与插件化方向发展的趋势，不再追求独立地解决 RPC 的全部三个问题（表示数据、 传递数据、表示方法）

## 并发

虽然一些编程语言的框架在不断地提高多核资源使用效率，例如 [Java](http://c.biancheng.net/java/) 的 Netty 等，但仍然需要开发人员花费大量的时间和精力搞懂这些框架的运行原理后才能熟练掌握。

作为程序员，要开发出能充分利用硬件资源的应用程序是一件很难的事情。现代计算机都拥有多个核，但是大部分编程语言都没有有效的工具让程序可以轻易利用这些资源。编程时需要写大量的线程同步代码来利用多个核，很容易导致错误。

Go语言正是在多核和网络化的时代背景下诞生的原生支持并发的编程语言。Go语言从底层原生支持并发，无须第三方库，开发人员可以很轻松地在编写程序时决定怎么使用 CPU 资源。

Go语言的并发是基于 goroutine 的，goroutine 类似于线程，但并非线程。可以将 goroutine 理解为一种虚拟线程。Go语言运行时会参与调度 goroutine，并将 goroutine 合理地分配到每个 CPU 中，最大限度地使用 CPU 性能。

多个 goroutine 中，Go语言使用通道（channel）进行通信，通道是一种内置的[数据结构](http://c.biancheng.net/data_structure/)，可以让用户在不同的 goroutine 之间同步发送具有类型的消息。这让编程模型更倾向于在 goroutine 之间发送消息，而不是让多个 goroutine 争夺同一个数据的使用权。

# Web搜索

 增大 Batch_Size 有何好处？ 内存利用率提高了，大矩阵乘法的并行化效率提高。 跑完一次 epoch（全数据集）所需的迭代次数减少，对于相同数据量的处理速度进一步加快。 在一定范围内，一般来说 Batch_Size 越大，其确定的下降方向越准，引起训练震荡越小。  盲目增大 Batch_Size 有何坏处？ 内存利用率提高了，但是内存容量可能撑不住了。 跑完一次 epoch（全数据集）所需的迭代次数减少，要想达到相同的精度，其所花费的时间大大增加了，从而对参数的修正也就显得更加缓慢。 Batch_Size增大到一定程度，其确定的下降方向已经基本不再变化。

词项频率(Term Frequency, TF): 排序中的重要因子 ▪ Tf-idf 权重计算方法: 最出名的经典排序方法 ▪ 向量空间模型(Vector space model): 信息检索中最重要的形式化模型之一 (其他模型还包括布尔模型和概率模型)

## Markov

**马尔可夫模型**

P(o1,o2,o3,…|s1,s2,s3….)根据应用的不同而又不同的名称，在语音识别中它被称为“[声学模型](https://baike.baidu.com/item/%E5%A3%B0%E5%AD%A6%E6%A8%A1%E5%9E%8B)”(*AcousticModel*)，在[机器翻译](https://baike.baidu.com/item/%E6%9C%BA%E5%99%A8%E7%BF%BB%E8%AF%91)中是“翻译模型”(*TranslationModel)*而在拼写校正中是“纠错模型”(*CorrectionMode*l)。而P(s1,s2,s3,…)就是我们在系列一中提到的语言模型。

第一，s1,s2,s3,…是一个[马尔可夫链](https://baike.baidu.com/item/%E9%A9%AC%E5%B0%94%E5%8F%AF%E5%A4%AB%E9%93%BE)，也就是说，si只由si-1决定(详见系列一)；

第二，第i时刻的接收信号oi只由发送信号si决定（又称为独立输出假设,即P(o1,o2,o3,…|s1,s2,s3….)=P(o1|s1)*P(o2|s2)*P(o3|s3)…。

满足上述两个假设的模型就叫隐含马尔可夫模型。我们之所以用“隐含”这个词，是因为状态s1,s2,s3,…是无法直接观测到的。

在利用隐含马尔可夫模型解决语言处理问题前，先要进行模型的训练。常用的训练方法由伯姆（*Baum*）在60年代提出的，并以他的名字命名。隐含马尔可夫模型在处理语言问题早期的成功应用是语音识别。七十年代，当时*IBM*的*FredJelinek*(贾里尼克)和[卡内基·梅隆大学](https://baike.baidu.com/item/%E5%8D%A1%E5%86%85%E5%9F%BA%C2%B7%E6%A2%85%E9%9A%86%E5%A4%A7%E5%AD%A6)的*JimandJanetBake提出用隐含马尔可夫模型来识别语音，语音识别的错误率相是人工智能和模式匹配等方法的三分之一(从30%到10%)。八十年代李开复博士坚持采用隐含马尔可夫模型的框架，成功地开发了世界上第一个大词汇量连续语音识别系统Sphinx。

衡量二分类：

**精确率**是针对我们**预测结果**而言的，它表示的是预测为正的样本中有多少是真正的正样本。那么预测为正就有两种可能了，一种就是把正类预测为正类(TP)，另一种就是把负类预测为正类(FP)，也就是

!https://upload-images.jianshu.io/upload_images/7880701-bff5466551031535.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/138/format/webp

img

而**召回率**是针对我们原来的**样本**而言的，它表示的是样本中的正例有多少被预测正确了。那也有两种可能，一种是把原来的正类预测成正类(TP)，另一种就是把原来的正类预测为负类(FN)。

召回率(Recall): RR/(RR + NR)，返回的相关结果数占实际相关结果总数的比率，也称为查全率，R∈ [0,1]

▪ 正确率(Precision): RR/(RR + RN)，返回的结果中真正相关结果的比率，也称为查准率， P∈ [0,1]

▪ 两个指标分别度量检索效果的某个方面，忽略 任何一个方面都有失偏颇。两个极端情况：返 回有把握的1篇，P=100%，但R极低；全部文 档都返回，R＝1，但P极低

## RNN

Softmax 如果你在开发一个音乐分类的应用，需要对k种类型的音乐进行识别，那么是选择使用 softmax 分类器呢，还是使用 logistic 回归算法建立 k 个独立的二元分类器呢？

这一选择取决于你的类别之间是否互斥，例如，如果你有四个类别的音乐，分别为：古典音乐、乡村音乐、摇滚乐和爵士乐，那么你可以假设每个训练样本只会被打上一个标签（即：一首歌只能属于这四种音乐类型的其中一种），此时你应该使用类别数*k*= 4的softmax回归。（如果在你的数据集中，有的歌曲不属于以上四类的其中任何一类，那么你可以添加一个“其他类”，并将类别数*k*设为5。）

如果你的四个类别如下：人声音乐、舞曲、影视原声、流行歌曲，那么这些类别之间并不是互斥的。例如：一首歌曲可以来源于影视原声，同时也包含人声 。这种情况下，使用4个二分类的 logistic 回归分类器更为合适。这样，对于每个新的音乐作品 ，我们的算法可以分别判断它是否属于各个类别。

当前我们来看一个计算视觉领域的例子，你的任务是将图像分到三个不同类别中。(i) 假设这三个类别分别是：室内场景、户外城区场景、户外荒野场景。你会使用sofmax回归还是 3个logistic 回归分类器呢？ (ii) 当前假设这三个类别分别是室内场景、黑白图片、包含人物的图片，你又会选择 softmax 回归还是多个 logistic 回归分类器呢？

在第一个例子中，三个类别是互斥的，因此更适于选择softmax回归分类器 。而在第二个例子中，建立三个独立的 logistic回归分类器更加合适。

## 错误

1. 都会出现错误提示: [Error] assignment to expression with array type

 中文通俗意思：不可以赋值给具有数组类型的表达式。这里的表达式是指整个数组的首地址。

 也就是说在C语言内部 数组的首地址是不可更改的，相当于被const修饰

### SIGSEGV Segmentation fault.段错误

1.利用指针对数组间访时越界了，即间访到该数组后面的空间了（即间访了一段不属于操作系统给你的空间。）

2.间访悬挂或 空指针!!!

写入东西，应先用内存分配为指针分配一段空间或将其指向某个东西。

1. 

img

 程序企图向指针ps所指内存中写入,但指针ps所指的是常量字符串，在生成可执行文件后它会与代码段放在一起，该区域是只读的，所以企图修改指针所指内容会出错。

**Notice**

<1>定义了指针后记得初始化，在使用的时候记得判断是否为NULL <2>在使用数组的时候是否被初始化，数组下标是否越界，数组元素是否存在等 <3>在变量处理的时候变量的格式控制是否合理等