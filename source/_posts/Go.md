---
title: 入门学习GO的一些记录
date: 2022-12-07 17:43:33

categories: 
- 计算机工程
tags:
- 计算机基础
- 编程
img: https://cdn.jsdelivr.net/gh/Stan370/stan370.github.io/medias/featureimages/go.png
---

## Go的优势是什么

计算机一直在演化，但是编程语言并没有以同样的速度演化。现在的手机，内置的 CPU 核 数可能都多于我们使用的第一台电脑。高性能服务器拥有 64 核、128 核，甚至更多核。但是我 们依旧在使用为单核设计的技术在编程。 编程的技术同样在演化。大部分程序不再由单个开发者来完成，而是由处于不同时区、不同 时间段工作的一组人来完成。大项目被分解为小项目，指派给不同的程序员，程序员开发完成后， 再以可以在各个应用程序中交叉使用的库或者包的形式，提交给整个团队。 如今的程序员和公司比以往更加信任开源软件的力量

Go 语言是一种让代码分享更容易的编程语言。Go 语言自带一些工具，让使用别人写的包更容易，并且 Go 语言也让分享自己写的包 更容易。 在本章中读者会看到 Go 语言区别于其他编程语言的地方。**Go 语言对传统的面向对象开发 进行了重新思考，并且提供了更高效的复用代码的手段。Go 语言还让用户能更高效地利用昂贵 服务器上的所有核心，而且它编译大型项目的速度也很快。**

在Go语言出现之前，开发者们总是面临非常艰难的抉择，究竟是使用执行速度快但是编译速度并不理想的语言（如：C++），还是使用编译速度较快但执行效率不佳的语言（如：.NET、Java），或者说开发难度较低但执行速度一般的动态语言呢？显然，Go语言在这 **3 个条件**之间做到了最佳的平衡：**快速编译，高效执行，易于开发。**

Golang快速高效的轻量级**并发支持**，垃圾回收使得其成为开发处理大量后端请求的后端系统首选。在 Go 中部署微服务相对容易

**Go uses goroutines and channels to handle concurrency, making the function calls "colorless." This means there is no need to differentiate between synchronous and asynchronous functions at the syntactic level, simplifying the development process.  Go语言的并发模型是CSP（Communicating Sequential Processes），提倡通过通信共享内存而不是通过共享内存而实现通信。**

Go 的编译器在逻辑上可以被分成四个阶段：**词法与语法分析、类型检查和 AST 转换、通用 SSA 生成和最后的机器代码生成**，在这一节我们会使用比较少的篇幅分别介绍这四个阶段做的工作，后面的章节会具体介绍每一个阶段的具体内容。

所有的编译过程其实都是从解析代码的源文件开始的，词法分析的作用就是解析源代码文件，它将文件中的**字符串序列转换成 Token 序列，方便后面的处理和解析，我们一般会把执行词法分析的程序称为词法解析器（lexer）**。

而语法分析的输入是词法分析器输出的 Token 序列，语法分析器会按照顺序解析 Token 序列，该过程会将词法分析生成的 Token 按照编程语言定义好的文法（Grammar）自下而上或者自上而下的规约，每一个 Go 的源代码文件最终会被归纳成一个 [SourceFile](https://golang.org/ref/spec#Source_file_organization) 结构[5](https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-compile-intro/#fn:5)：

Go语言支持交叉编译，比如说你可以在运行 Linux 系统的计算机上开发可以在 Windows 上运行的应用程序。这是第一门完全支持 UTF-8 的编程语言，这不仅体现在它可以处理使用 UTF-8 编码的字符串，就连它的源码文件格式都是使用的 UTF-8 编码。

https://go.dev/doc/faq#Is_Go_an_object-oriented_language

**强类型静态编译型语言。隐式继承**

可以在事后添加接口，而无需注释原始类型。因为类型和接口之间没有明确的关系，所以没有要管理或讨论的类型层次结构。

**声明变量**

var a string， var 声明自动匹配，

使用操作符 := 可以高效地创建一个新的变量，称之为初始化声明。

如果在相同的代码块中，我们不可以再次对于相同名称的变量使用初始化声明，例如：a := 20 就是不被允许的，编译器会提示错误 no new variables on left side of :=，但是 a = 20 是可以的，因为这是给相同的变量赋予一个新的值。

如果你在定义变量 a 之前使用它，则会得到编译错误 undefined: a。

如果你声明了一个局部变量却没有在相同的代码块中使用它，同样会得到编译错误，例如下面这个例子当中的变量 a：

:=表示声明并赋值，只要:=左边有一个新变量都可以用:=,否则只能用=; 且不能用于声明全局变量

***iota*** 是 *Go* 语言的一个保留字,用作常量计数器。由于 *iota* 具有自增特性,所以使用iota能简化定义，在定义[枚举](https://so.csdn.net/so/search?q=%E6%9E%9A%E4%B8%BE&spm=1001.2101.3001.7020)时很有用。

使用`iota`时只需要记住以下两点

 1.`iota`在`const`关键字出现时将被重置为0。

 2.`const`中每新增**一行**常量声明将使`iota`计数一次(iota可理解为`const`语句块中的行索引)。

"_"表示匿名变量，无法访问

引用传递是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。

```
//Go 语言支持匿名函数，可作为闭包。匿名函数是一个"内联"语句或表达式。匿名函数的优越性在于可以直接使用函数内的变量，不必申明。
以下实例中，我们创建了函数 getSequence() ，返回另外一个函数。该函数的目的是在闭包中递增 i 变量
func getSequence() func() int {
   i:=0
   return func() int {
      i+=1
     return i
   }
}

func main(){
   /* nextNumber 为一个函数，函数 i 为 0 */
   nextNumber := getSequence()

   /* 调用 nextNumber 函数，i 变量自增 1 并返回 */
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())

   /* 创建新的函数 nextNumber1，并查看结果 */
   nextNumber1 := getSequence()
   fmt.Println(nextNumber1())
   fmt.Println(nextNumber1())
}
```

**命名规范**

1.1 Go是一门区分大小写的语言。

命名规则涉及变量、常量、全局函数、结构、接口、方法等的命名。 Go语言从语法层面进行了以下限定：**任何需要对外暴露的名字必须以大写字母开头，不需要对外暴露的则应该以小写字母开头**。

1. 当命名（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Analysize，那么使用这种形式的标识符的对象就**可以被外部包的代码所使用**（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；
2. **命名如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的**（像面向对象语言中的 private ）

1.2 包名称

保持package的名字和目录保持一致，尽量采取有意义的包名，简短，有意义，尽量和标准库不要冲突。包名应该为**小写**单词，不要使用下划线或者混合大小写。

```go
package domainpackage main
```

1.3 文件命名

尽量采取有意义的文件名，简短，有意义，应该为**小写**单词，使用**下划线**分隔各个单词。

```go
approve_service.go
```

1.4 结构体命名

- 采用驼峰命名法，首字母根据访问控制大写或者小写
- struct 申明和初始化格式采用多行，例如下面：
    
    ```go
    type MainConfig struct {    Port string `json:"port"`    Address string `json:"address"`}config := MainConfig{"1234", "123.221.134"}
    ```
    

%v 按默认格式输出 %+v 在%v的基础上额外输出字段名 %#v 在%+v的基础上额外输出类型名

**defer关键字**

**defer是当前函数的声明周期结束后才会**出栈**，所以return和defer在一个函数中时return先defer后return**

动态数组传参是引用传递，而且不同元素长度的动态数组形参一致

1.

```
func main() {
	slice := []int{0, 1, 2, 3}
	m := make(map[int]*int)for key, val := range slice {
	    m[key] = &val // 这里是将指针指向循环变量 val 的地址
	}
	
	for k, v := range m {
	    fmt.Println(k, "->", *v) // 输出 map 中的值
}

```

上面代码输出什么？

问题的根源在于 **`val`** 是在循环中声明的，它是一个局部变量。在每次迭代中，**`val`** 的值会更新为切片中当前索引位置的值。然而，**`&val`** 取得的是变量 **`val`** 的地址，而不是其值的地址。

在 **`for key, val := range slice`** 循环结束后，**`val`** 的值将是迭代完成后的最后一个元素 **`3`**。因为 **`m`** 中存储的是 **`&val`**，也就是 **`val`** 的地址，而这个地址在整个循环过程中都没有发生改变，所以无论遍历 **`m`** 中的哪个键值对，最终输出的结果都会是 **`*v`**，即指向 **`val`** 地址的值，也就是 **`3`**。

1.  **new 和 make** 都可以用来分配空间，初始化类型，但是它们确有不同。

new(T) 为一个 T 类型新值分配空间并将此空间初始化为 T 的零值，返回的是新值的地址，也就是 T 类型的指针 *T，该指针指向 T 的新分配的零值。`p1 := new(int)`

slice 的零值是 nil，使用 make 之后 slice 是一个初始化的 slice，即 slice 的长度、容量、底层指向的 array 都被 make 完成初始化，此时 slice 内容被类型 int 的零值填充，形式是 [0 0 0]，map 和 channel 也是类似的。

https://go.dev/doc/faq#Is_Go_an_object-oriented_language

We decided to take a step back and think about what major issues were going to dominate software engineering in the years ahead as technology developed, and how a new language might help address them. For instance, the rise of multicore CPUs argued that a language should provide first-class support for some sort of concurrency or parallelism. And to make resource management tractable in a large concurrent program, garbage collection, or at least some sort of safe automatic memory management was required.

**强类型静态编译型语言。隐式继承**

可以在事后添加接口，而无需注释原始类型。因为类型和接口之间没有明确的关系，所以没有要管理或讨论的类型层次结构。

UTF-8 是被广泛使用的编码格式，是文本文件的标准编码，其它包括 XML 和 JSON 在内，也都使用该编码。由于该编码对占用字节长度的不定性，Go 中的字符串也可能根据需要占用 1 至 4 个字节（示例见第 4.6 节），这与其它语言如 C++、Java 或者 Python 不同（Java 始终使用 2 个字节）。Go 这样做的好处是不仅减少了内存和硬盘空间占用，同时也不用像其它语言那样需要对使用 UTF-8 字符集的文本进行编码和解码。

## 协程Goroutine

Goroutine的并发编程模型, GC 内存模型 都基于GMP模型，简要解释一下GMP的含义：

1. **G（Goroutines）：** Goroutines 是 Go 语言中轻量级线程的抽象，它们是由 Go 运行时管理的并发执行单元。Goroutines 可以看作是函数执行的轻量级版本，它们可以在程序中并发运行，但相比于传统的线程来说，它们的创建和销毁的成本更低，因此可以创建成千上万个 Goroutines 而不会产生太大的开销。
2. **M（Machine）：** M 代表着执行 Goroutines 的执行线程（Machine）。每个物理线程（OS 线程）都对应着一个 M，而 M 负责调度和执行 Goroutines。Go 运行时会维护一个 M 池，用来管理和调度 Goroutines。
3. **P（Processor）：** P 是 G 和 M 之间的调度器。P 的作用是在 M 上运行 Goroutines，P 维护了一个 Goroutines 的队列。P 将 Goroutines 分配给 M 执行，当一个 M 的 Goroutines 执行完毕时，P 会将其分配给其他的 M。

Go's Global Memory Pool (GMP) is a shared memory space where goroutines can access data. It provides a mechanism for goroutines to share variables without explicit synchronization.

**How it Works:**

- Goroutines acquire a lock to access the GMP.
- The lock is released when the goroutine has finished.
- Multiple goroutines can access the GMP concurrently without interfering with each other.

In the context of programming languages, "colorless" refers to the uniformity of function calls, where there is no distinction between synchronous and asynchronous functions. This concept contrasts with "colored" functions in languages that require explicit handling of asynchronous operations, such as using **`async`** and **`await`** keywords.

### **Colorless Concurrency Explained**

### **The Problem with Colored Functions**

In languages like JavaScript and Python, asynchronous functions must be explicitly marked with **`async`**, and their calls must be awaited using **`await`**. This leads to a distinction between synchronous and asynchronous functions, often referred to as "colored" functions. This can introduce complexity in code management because:

- Every function that interacts with an asynchronous function must also be marked as asynchronous.
- The programmer must consistently use **`await`** when calling asynchronous functions, which can lead to errors if forgotten.

### **Go's Approach: Colorless Concurrency**

Go was designed with concurrency as a fundamental feature. Instead of marking functions as asynchronous, **Go uses goroutines and channels to handle concurrency, making the function calls "colorless." This means there is no need to differentiate between synchronous and asynchronous functions at the syntactic level, simplifying the development process.**

Golang不同于其他语言对并发的支持：     例如，用户在写一个 Web 服务器，希望同时处理不同的 Web 请求，如果 使用 C 或者 Java，不得不写大量的额外代码来使用线程。在 Go 语言中，net/http 库直接使用了 内置的 goroutine。每个接收到的请求都自动在其自己的 goroutine 里处理。goroutine 使用的内存 比线程更少，Go 语言运行时会自动在配置的一组逻辑处理器上调度执行 goroutine。每个逻辑处 理器绑定到一个操作系统线程上。这让用户的应用程序执行效率更高，而开发工作量 显著减少。

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

Yes, it is true that **Go channels are concurrent but not inherently asynchronous**. Let's break down the details:

Go channels provide a powerful mechanism for safe and efficient communication between goroutines. While the communication itself is synchronous, channels are essential for structuring concurrent programs in Go. If you need true asynchrony (e.g., non-blocking I/O), you might explore techniques like using goroutines with channels for signaling or leverage libraries designed for asynchronous operations.

原子函数和互斥锁都能工作，但是依靠它们都不会让编写并发程序变得更简单，更不容易出错，或者更有趣。在 Go 语言里，你**不仅可以使用原子函数和互斥锁来保证对共享资源的安全访 问以及消除竞争状态，还可以使用通道，通过发送和接收需要共享的资源，在 goroutine 之间做 同步**。

它包括三种类型的定义。可选的`<-`
代表channel的方向。如果没有指定方向，那么Channel就是双向的，既可以接收数据，也可以发送数据。

```
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

`<-`总是优先和最左边的类型结合。(The <- operator associates with the leftmost chan possible)

创建管道`c := make(chan int)`

无缓冲的通道（unbuffered channel）是指**在接收前没有能力保存任何值的通道**。这种类型的通 道要求发送 goroutine 和接收 goroutine 同时准备好，才能完成发送和接收操作。如果两个 goroutine 没有同时准备好，通道会导致**先执行发送或接收操作的 goroutine 阻塞等待**。这种对通道进行发送 和接收的交互行为本身就是同步的。其中任意一个操作都无法离开另一个操作单独存在。

**无缓冲通道** (unbuffered channel) 的确会导致发送方 goroutine 和接收方 goroutine **同步化**。

- **发送操作会阻塞**，直到有另一个 goroutine 准备从通道接收数据。
- **接收操作会阻塞**，直到有另一个 goroutine 准备向通道发送数据。

正因为这种同步的特性，无缓冲通道也被称为 **同步通道** (synchronous channel)。

这个特性使得无缓冲通道非常适合用于：

1. **保证消息顺序**: 由于发送和接收操作的同步性，无缓冲通道能够保证消息按照发送顺序被接收。
2. **信号量机制**: 可以使用无缓冲通道来实现信号量，例如通知一个 goroutine 另一个 goroutine 已经完成任务。
3. **同步多个 goroutine**: 可以使用无缓冲通道来协调多个 goroutine 的执行，例如等待所有 goroutine 都完成后再进行下一步操作

**缓冲通道 (buffered channel)** 在 Go 的并发编程中非常有用，尤其适用于以下场景:

**1. 缓解生产者和消费者速度差异:**

- 当消息的生产速度和消费速度可能出现暂时性不一致时，缓冲通道可以充当队列，存储一部分消息。
- 生产者可以持续生成消息，无需等待消费者立即处理，避免阻塞。
- 消费者可以按照自己的节奏从通道中获取消息。

**2. 允许有限的异步操作:**

- 虽然 Go 的通道本质上是同步的，但缓冲通道可以提供一定程度的异步行为。
- 发送者只有在缓冲区满时才会阻塞，允许一定程度的 "发射后不管" (fire-and-forget) 操作。

**3. 提高程序吞吐量:**

- 在某些情况下，缓冲通道可以提高程序的整体吞吐量。
- 例如，如果消费者需要处理消息的时间较长，缓冲通道可以让生产者继续生成消息，而不必等待消费者完成。

**一些具体的例子:**

- **日志系统:** 生产者可以快速地将日志消息发送到缓冲通道，而消费者可以异步地将消息写入磁盘。(注意消费者数量，用其他机制保证消息顺序性)
- **工作队列:** 生产者可以将任务放入缓冲通道，而多个消费者可以并发地从通道中获取任务并执行。
- **消息传递系统:** 缓冲通道可以用于实现消息队列，允许不同组件之间进行异步通信。

默认情况下，在另一端准备好之前，发送和接收都会阻塞。这使得 goroutine 可以在**没有明确的锁或竞态变量的情况下进行同步。**

发动和接收数据应当在并行线上，而不能是串行的，因为发送和接收都会阻塞，如果串行，就会死锁（就是一个一直阻塞在那等对端），但不用为此操心，因为go在执行时候（编译会通过）会报错

make的第二个参数指定缓存的大小：`ch := make(chan int, 100)`。

通过缓存的使用，可以尽量避免阻塞，提供应用的性能。

**select**是Golang在语言层面提供的多路IO复用的机制，其可以检测多个channel是否ready(即是否可读或可写)

select中各个case执行顺序是随机的；

如果某个case中的channel已经ready，则执行相应的语句并退出select流程；

如果所有的case的channel都没有ready，则有default会走default然后退出select，没有default，select将阻塞直至channel ready；

case后面不一定是读channel，也可以写channel，只要是对channel的操作就可以；

select {}                        //空的select 语句会永远阻塞，因为没有 goroutine 可以提供任何数据。因此，主协程会引发恐慌并停止僵局。

```go
func (n*node)heartbeatDetect() {
for {
		select {
		case<-n.heartbeat:
		// 收到心跳信号则退出select等待下一次心跳
		breakcase<-time.After(time.Second*3):
		// 心跳超时，关闭连接
					n.conn.Close()
		return}
	}
}
```


## 垃圾回收GC

相信很多人对垃圾收集器的印象都是暂停程序（Stop the world，STW），随着用户程序申请越来越多的内存，系统中的垃圾也逐渐增多；当程序的内存占用达到一定阈值时，整个应用程序就会全部暂停，垃圾收集器会扫描已经分配的所有对象并回收不再使用的内存空间，当这个过程结束后，用户程序才可以继续执行，Go 语言在早期也使用这种策略实现垃圾收集，但是今天的实现已经复杂了很多。


Can you explain how Go's garbage collection works?

所有的 GC 算法其存在形式可以归结为追踪（Tracing）和引用计数（Reference Counting）

memory leak  ignored  finally crash.

Go 使用垃圾收集器来自动管理内存，它负责检测和回收不再被程序使用的内存，以减少内存泄漏和提高性能。

Garbage collection is a mechanism used in programming languages to automatically manage memory by **identifying and reclaiming memory that is no longer in use (garbage), allowing it to be reused.**

When a program runs, memory is allocated for various data structures and objects. As the program executes, some of these allocated memory blocks become **unreachable or unreferenced**—meaning they are no longer needed by the program. Garbage collection is responsible for identifying and freeing these unused memory blocks t**o prevent memory leaks and optimize memory usage.**

During runtime, the garbage collector scans the memory heap, identifies which objects are reachable (still in use), and identifies those that are unreachable (garbage). It then reclaims the memory occupied by the unreachable objects so that it can be reused for future allocations. apa

For instance, non-pointer Go values stored in the goroutine stack, because go compiler know when to free it.  Go 编译器无法确定其生命周期，无法以这种方式分配内存的 Go 值被称为逃逸到堆。 “堆”可以被认为是内存分配的总称. 

1. **Tricolor Marking:**
    - Objects in memory are categorized into three colors: white, grey, and black.
    - Initially, all objects are considered white (unscanned or unvisited).
    - The GC starts with a set of root objects (global variables, stack references, etc.) and marks them as grey.
    - It traverses through the object graph, marking reachable objects as grey and adding them to a work queue.
    - As the GC progresses, grey objects turn black, indicating that they have been scanned and all their references have been examined.
    - Objects that remain white after this process are considered unreachable (garbage).
2. **Concurrent Marking:**
    - Go's garbage collector performs garbage collection concurrently with the program's execution, reducing stop-the-world pauses.
    - While the garbage collection is in progress, the application can continue running, except for short stop-the-world phases necessary for specific tasks like stack scanning.
3. **Sweeping and Reclamation:**
    - Once the marking phase is complete, the sweep phase identifies all white (unmarked) objects and reclaims their memory.
    - The memory is then added back to the heap for future allocations.p
    

Golang在GC的演进过程中也经历了很多次变革，大概分为**「3个阶段」**

- Go V1.3之前的标记-清除法(mark and sweep) 清除比标记和扫描快得多
- Go V1.5的三色并发标记法
- Go V1.8混合写屏障机制

垃圾收集（GC）的**频率和启动时间对于 CPU 时间和内存之间的权衡**至关重要。GC 的执行频率由 GOGC 参数决定，它影响着 GC 应该启动的时间以及内存回收的程度。

例如，将 GOGC 设置为 100（默认值为 100），表示在分配了大约 100 个新对象后触发 GC。**加倍 GOGC 将使堆内存开销加倍，并使 GC CPU 成本大致减半.** 

 **就延迟而言，stop-the-world GC 可能需要相当长的时间来执行其标记和清除阶段 降低 GC 频率也可能会导致延迟改善**

Tracing garbage collection（追踪式垃圾收集）是一种垃圾回收（GC）算法，通常应用于动态内存管理系统中。从根对象出发，根据对象之间的引用信息，一步步推进直到扫描完毕整个堆，并标记哪些对象是活跃的（可达的），然后清理那些未被标记的对象。     

最传统的标记清除算法，垃圾收集器从垃圾收集的根对象出发，递归遍历这些对象指向的子对象并将所有可达的对象标记成存活；标记阶段结束后，垃圾收集器会依次遍历堆中的对象并清除其中的垃圾，整个过程需要标记对象的存活状态，用户程序在垃圾收集的过程中也不能执行，我们需要用到更复杂的机制来解决 STW 的问题。

追踪式垃圾收集相对于其他算法（比如引用计数等）有其优势和劣势。**优势在于它能够处理循环引用（Circular references）并回收垃圾，但是劣势在于它可能引起暂停（停顿式垃圾收集），即在标记和清理的过程中，会暂停应用程序的执行。**

虽然 Go 语言的垃圾回收会有一些额外的开销，但是编程时，能显著降低开发难度。Go 语言把无趣的内存管理交给专业的编译器去做，而让程序员专注于更有趣的事情。

程序运行时将所使用的内存划分成两部分：

1. 1. 栈（Stack） 函数的局部内存空间，用于保存函数的局部变量，也包括函数调用时的参数、返回值。栈内存与函数的生命周期完全一致，在函数调用时创建、退出时销毁，由程序自动管理，并且栈上数据仅对当前函数可见，因此，只要内存使用的生命周期在函数生命周期之内，都可以分配栈上的空间。 栈更加高效与安全，但对于使用场景有严格限制。
2. 2. 堆（Heap） 全局内存空间，由整个程序共享。堆内存的分配与释放需要单独管理，像C语言有专门的分配与释放内存的内置函数，但现在几乎所有的高级编程语言都提供了自动的内存管理策略，Go 语言便是其中之一。由于堆内存的全局可见性，还需要保证并发访问下数据的同步性。 堆更加灵活，但面临着更复杂的管理问题，为程序带来了额外的开销。

由此可见，对于一个内存区域，它在程序中的可见范围决定了应该使用哪种内存：如果该内存区域的可见范围跨越了多个函数，那么就必须使用堆内存，而如果其可见范围仅仅局限于一个函数之内，则可以优先考虑栈空间。

程序的变量就是对内存区域的抽象，因此，对变量的可见范围（作用域）进行分析，进而判断应该将其分配到栈上还是堆上的过程，叫着**逃逸分析**。即为了简化内存管理，我们默认所有变量都使用栈空间，但如果一个变量由于被多个函数所引用，必须将其转移到堆上，我们就说该变量“逃逸”到了堆上。

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

- **`strconv.Itoa`**：用于将整数转换为字符串表示，例如将整数 5 转换为字符串 "5"。
- **`string(int)`**：将整数解释为 Unicode 码点并转换为相应的字符，这在处理字符串压缩时并不适用。

rune类型是Go语言中的一个基本类型，其实就是一个**int32的别名**
，主要用于表示一个字符类型大于一个字节小于等于4个字节的情况下，特别是**中文字符。**

. A `byte` has a limit of 0 – 255 in numerical range. It can represent an ASCII character.

在 Go 语言中，**`byte`** 是 **`uint8`** 类型的别名，表示一个 8 位无符号整数。它主要用于表示原始的二进制数据，如文件内容、网络数据包等。

```
fmt.Println([]byte("falcon"))
     fmt.Println([]byte("čerešňa"))
}

$ go run str2bytes.go
[102 97 108 99 111 110]
[196 141 101 114 101 197 161 197 136 97]

```

根据内存和性能来看，在函数间传递**大数组**是一个开销很大的操作。在函数之间传递变量时，总是以值的方式传递的。如果这个变量是一个数组，意味着整个数组，不管有多长，都会完整复制，并传递给函数。

指针的一个应用是你可以传递一个变量的引用（如函数的参数），这样不会传递变量的拷贝。指针传递是很廉价的，只占用 4 个或 8 个字节。当程序在工作中需要占用大量的内存，或很多变量，或者两者都有，使用指针会减少内存占用和提高效率。被指向的变量也保存在内存中，直到没有任何指针指向它们，所以从它们被创建开始就具有相互独立的生命周期。

## Slice切片

```go
type slice struct {
	array unsafe.Pointer
	len   int
	cap   int
}
```

编译期间的切片是 [`cmd/compile/internal/types.Slice`](https://draveness.me/golang/tree/cmd/compile/internal/types.Slice) 类型的，但是在运行时切片可以由如下的 [`reflect.SliceHeader`](https://draveness.me/golang/tree/reflect.SliceHeader) 结构体表示，其中:

- `Data` 是指向数组的指针;
- `Len` 是当前切片的长度；
- `Cap` 是当前切片的容量，即 `Data` 数组的大小：

在Go中，切片是一种动态数组的抽象，它提供了一种方便且灵活的方式来处理数据集合。切片本身并不包含数据，而是**对底层数组的一个引用**，并提供了对该数组局部的访问。

以下是关于切片的一些关键概念：

1. **底层数组：** 切片是建立在数组的基础之上的。切片不拥有自己的数据，而是引用一个底层数组，这个数组负责实际的存储。当切片被创建时，底层数组会被分配一段空间，切片的操作实际上是在这个空间内进行的。
2. **切片的传递：** 切片是引用类型，当切片作为参数传递给函数时，函数接收的是切片的引用。因此，在函数内对切片的修改会影响到调用者的切片。

**切片本身是一个只读对象，其工作机制类似数组指针的一种封装。**切片常见的操作有 reslice、append、copy。与此同时，切片还具有可索引，可迭代的优秀特性。

在对slice进行append等操作时，可能会造成slice的自动扩容。其扩容时的大小增长规则是：

1. 如果期望容量大于当前容量的两倍就会使用期望容量；
2. 如果当前切片的长度小于 1024 就会将容量翻倍；
3. 如果当前切片的长度大于 1024 就会每次增加 25% 的容量，直到新容量大于期望容量；

在 Go 语言中，切片是引用类型。当你将一个切片作为参数传递给函数时，实际上传递的是切片的副本，但这个副本指向的是相同底层数组（底层数据结构）。

传递切片时，副本包括了切片本身的一些元数据信息（如指向底层数组的指针、长度、容量等），但它们共享相同底层数组的数据。

**因此，在函数内部对传递的切片的修改（例如修改切片中的元素值）会影响到原始切片指向的相同底层数组的数据。但如果在函数内部重新分配了新的底层数组给传递的切片，或者修改了切片的长度和容量等元数据信息，这些修改不会影响到原始切片**。

```jsx
package main

import "fmt"

func modifySlice(s []int) {
    // 在函数内修改切片元素
    s[0] = 100
    s = append(s, 200) // 在此追加元素，但不会影响原始切片的长度或容量
}

func main() {
    original := []int{1, 2, 3, 4, 5}
    fmt.Println("Original Slice:", original)

    modifySlice(original)
    fmt.Println("After Modification:", original)//100,2,3,4,5

    slice := make([]int, 2, 10)
    slice1 := slice[1:2]
    slice2 := append(slice1, 1)
    slice2 = append(slice2, 1)
    slice2[0] = 10001
    fmt.Println(slice)                                //【0,0】
    fmt.Println(slice1)         // [0]
    fmt.Println(cap(slice2))    //18
}
```

### **深拷贝与浅拷贝的区别**

1. **修改后的影响**：
    - 浅拷贝：修改拷贝对象的嵌套元素会影响原对象，因为它们共享相同的嵌套对象。
    - 深拷贝：修改拷贝对象不会影响原对象，因为所有嵌套对象都被复制了。
2. **性能**：
    - 浅拷贝：性能较好，因为只复制顶层结构，嵌套对象仍然共享。
    - 深拷贝：性能较差，因为需要递归复制所有嵌套对象，尤其是对于深层次嵌套的对象结构。

### **实际应用**

深拷贝和浅拷贝在实际编程中有不同的应用场景：

- **浅拷贝**：适用于简单数据结构，或者在需要共享数据的场景下。
- **深拷贝**：适用于需要独立副本的数据结构，特别是在并发编程或多线程环境中，以避免数据竞争和不一致性。

在 Go 语言中，**`copy`** 函数并不执行深拷贝，而是执行浅拷贝。**`copy`** 函数用于将一个源切片的元素复制到目标切片中，但只会复制切片中的元素值   如果切片的元素是引用类型（例如，指向结构体或切片等），**`copy`** 函数只会复制引用，而不会复制引用指向的实际数据。这意味着对目标切片中的引用类型元素的修改将影响源切片中相应的元素，因为它们引用的是相同的底层数组中的对象。

分析可以发现，“Hello, world”字符串底层数据和以下数组是完全一致的：

```
var data = [...]byte{
    'h', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd',
}
沟通一个切片的开闭，需要约定一个前提: 语境的开始从0开始，开始从1开始（通常情况从下标0开始）
左闭右开

**new := old[5:]，使用 [start:] 的形式截取，推荐
new := old[5:len(old)-1]，通过计算原数组长度，截取从开始下标至最后一个下标（由于下标从0开始，所以长度减一）**
```

切片的行为更为灵活，切片的结构和字符串结构类似，但是解除了只读限制。切片的底层数据虽然也是对应数据类型的数组，但是每个切片还有独立的长度和容量信息，切片赋值和函数传参数时也是将切片头信息部分按传值方式处理。因为切片头含有底层数据的指针，所以它的赋值也不会导致底层数据的复制。

### String

在 Go 中，遍历字符串（string）时，可以使用 **`range`** 关键字来遍历字符串的 Unicode 码点（code point）。因为 Go 中的字符串是不可变的字节序列，而且每个字符可能由多个字节组成，因此使用 **`range`** 关键字能够更好地处理 Unicode 字符。

在 Go 语言中，字符串底层实际上是一个字节（byte）数组，也就是说，字符串中的每个字符在底层都是由一个或多个字节（byte）表示的。但是，当我们遍历或处理字符串时，字符可以被视为 **`rune`** 或 **`byte`**，具体取决于使用的方式。

### **字符串中的字符表示**

1. **字节（byte）表示**：
    - 当直接通过索引访问字符串的元素时，得到的是 **`byte`** 类型。**`byte`** 是 **`uint8`** 的别名，表示一个无符号的 8 位整数。
    - 字符串在内存中是以 UTF-8 编码存储的，每个字符可能由一个或多个字节组成。
2. **Unicode 代码点（rune）表示**：
    - 当使用 **`for range`** 遍历字符串时，得到的是 **`rune`** 类型。
    - **`rune`** 是 **`int32`** 的别名，用于表示 Unicode 代码点。
    - **`rune`** 可以表示所有的 Unicode 字符，包括那些需要多个字节表示的字符。
    

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

> go 中，slice、map、channel都是引用类型，所以都会有如上的特性。
> 

在默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。

注意1：无论是值传递，还是引用类型传递，传递给函数的都是变量的副本，不过，值传递是值的拷贝。引用传递是地址的拷贝，一般来说，地址拷贝更为高效。而值拷贝取决于拷贝的对象大小，对象越大，则性能越低。

注意2：map、slice、chan、指针、interface默认以引用的方式传递。

不定参数传值 就是函数的参数不是固定的，后面的类型是固定的。（可变参数）

匿名函数的定义就是没有名字的普通函数定义。

**Go 中数组赋值和函数传参都是值复制的。那这会导致什么问题呢？**

假想每次传参都用数组，那么每次数组都要被复制一遍。如果数组大小有 100万，在64位机器上就需要花费大约 800W 字节，即 8MB 内存。这样会消耗掉大量的内存。于是乎有人想到，函数传参用数组的指针。

```
slice1 := make(int[],3)  //声明切片并分配空间初始值为0

var slice2 = []int
//Objective-C, Swift, Ruby, Lua中的关键字，与C++里的NULL不同，NULL是一个宏定义，值为0，nil表示无值
if slice2==nil{

}
//追加元素,如果append时超过容量cap，容量将自动变为2倍
numbers = append(numbers,2)
```

nil 指针也称为空指针。

```

var a int= 20   /* 声明实际变量 */
   var ip *int        /* 声明指针变量 */

   ip = &a  /* 指针变量的存储地址 */

   fmt.Printf("a 变量的地址是: %x\\n", &a  )

   /* 指针变量的存储地址 */
   fmt.Printf("ip 变量储存的指针地址: %x\\n", ip )
   /* 使用指针访问值 */
   fmt.Printf("*ip 变量的值: %d\\n", *ip )
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

### Map

Map 是一种无序的键值对的集合。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。

Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，Map 是无序的，我们无法决定它的**返回顺序，这是因为 Map 是使用 hash 表**来实现的。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/ed7dc340-8912-4511-bc8c-ded0e638ab91/Untitled.png)

```
/*查看元素在集合中是否存在 */
    capital, ok := countryCapitalMap [ "American" ] /*如果确定是真实的,则存在,否则不存在 */

```

`[mapstructure](<https://github.com/mitchellh/mapstructure>)`
用于将通用的`map[string]interface{}`解码到对应的 Go 结构体中，或者执行相反的操作。很多时候，解析来自多种源头的数据流时，我们一般事先**并不知道他们对应的具体类型**。只有读取到一些字段之后才能做出判断。这时，**我们可以先使用标准的`encoding/json`库将数据解码为`map[string]interface{}`类型，然后根据标识字段利用`mapstructure`
库转为相应的 Go 结构体以便使用**

## function方法

A method is on an object or is static in class.A function is independent of any object (and outside of any class).

For Java and C#, there are only methods.

For C, there are only functions.

For C++ and Python it would depend on whether or not you're in a class.

### 1) 在定义时调用匿名函数

匿名函数lambda：是指**一类无需定义标识符（函数名）的函数或子程序**
。 所谓匿名函数，通俗地说就是没有名字的函数，lambda函数没有名字，是一种简单的、在同一行中定义函数的方法。 lambda函数一般功能简单：单行expression决定了lambda函数不可能完成复杂的逻辑，只能完成非常简单的功能。

匿名函数可以在声明后调用，例如：
`1. func(data int) { 2.     fmt.Println("hello", data) 3. }(100)`

表示对匿名函数进行调用，传递参数为 100。

1. 将匿名函数赋值给变量

匿名函数可以被赋值，例如：
`1. // 将匿名函数体保存到f()中 2. f := func(data int) { 3.     fmt.Println("hello", data) 4. } 5.  6. // 使用f()调用 7. f(100)`

匿名函数的用途非常广泛，它本身就是一种值，可以方便地保存在各种容器中实现回调函数和操作封装。

What is () before a function Golang?

it's called receiver argument, 函数名前的括号规定了接收到的object,就像面向对象的类,想要调用Person类中的eat方法首先需要创建一个Person对象

The parenthesis before the function name is **the Go way of defining the object on which these functions will operate**.

```
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

闭包和[匿名函数](https://zh.wikipedia.org/wiki/%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)经常被用作同义词。但严格来说，匿名函数就是字面意义上没有被赋予名称的函数，而闭包则实际上是一个函数的实例，也就是说它是存在于内存里的某个结构体。如果从实现上来看的话，匿名函数如果没有捕捉自由变量，那么它其实可以被实现为一个函数指针，或者直接内联到调用点，如果它捕捉了自由变量那么它将是一个闭包；而闭包则意味着同时包括函数指针和环境两个关键元素。在编译优化当中，没有捕捉自由变量的闭包可以被优化成普通函数，这样就无需分配闭包结构体，这种编译技巧被称为[函数跃升](https://zh.wikipedia.org/w/index.php?title=%E5%87%BD%E6%95%B0%E8%B7%83%E5%8D%87&action=edit&redlink=1)

### 闭包

**闭包**（closure）是一个函数以及其捆绑的周边环境状态（**lexical environment**，**词法环境**）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

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

### **Difference:**

- **`log.Panicln()`** is used to log an error message and then trigger a panic, providing some context or details about the error **before** the program exits due to the panic.
- **`panic()`** is used to immediately halt the program's execution without providing additional context or logging. It is usually used for unrecoverable errors where the program cannot continue.

## Reflect

反射是指程序在运行时runtime **检查其自身结构并根据该信息修改其行为的能力**。程序在编译时，变量被转换为内存地址，变量名不会被编译器写入到可执行部分。在运行程序时，程序无法获取自身的信息。

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

Protocol Buffers (Protobuf) over JSON, particularly in evolving systems: **backward and forward compatibility through field numbering.** Let's break down why this is so powerful:

**The Problem with Unstructured Data and Versioning:**

- **JSON's flexibility is a double-edged sword.** While easy to read and work with, it lacks a strict schema. This means changes to field names or data types can easily break compatibility between clients and servers that were written for different versions of the API.
- **Versioning headaches.** Teams often resort to complex versioning schemes (e.g., in the URL or headers) to manage compatibility, adding overhead and complexity.

Benefit

- **Backward Compatibility:** Older clients, unaware of newer fields (added with higher numbers), will simply ignore them. The data for the fields they do understand is still present and correctly parsed.
- **Forward Compatibility:** Newer clients can receive messages with fields they don't yet know about (from older servers). They'll skip over these unknown fields without issues.
- **No Versioning Hell:** You often avoid the need for explicit API versioning in your Protobuf services, simplifying development and maintenance.

PB常用于后端多个服务通信，尤其适用通信接口于字段多，数据结构复杂，需要充分压缩数据的场景

**Serialization:**

- **What it is:** The process of converting a data structure (like a Protobuf message, a Python object, etc.) into a stream of bytes or a string representation.
- **Protobuf and Serialization:** Protobuf's primary function is efficient serialization! Its `.proto` definitions define the structure, and Protobuf compilers generate code (in various languages) with methods to

JSON(marshal, unmarshal)

控制层返回json字符串数据给前端，前端通过ajax处理将数据展示给用户

Substring 从以连续顺序放置在两个指定索引之间的字符串中取出字符。另一方面， **子序列**可以通过删除中间的一些元素或不删除元素从另一个序列导出，但始终保持原始序列中元素的相对顺序。

`json.Decoder`会一个一个元素进行加载，不会把整个json数组读到内存里面，适用于从数据流中解码多个值。例如http连接与socket连接的读取与写入，或者是文件的读取

`json.Unmarshal`适用于读取已经在内存中的json数据进行解码，例如直接是`[]byte`的输入

Both JSON and XML can be used to receive data from a web server.

parse to JS object:  const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

```
**Json Marshal：将数据编码成json字符串
jsonstu,err := json.Marshal(stu)
if err!=nil{
        fmt.Println("生成json字符串错误")
    }

{"name":"张三","Age":18,"HIgh":true,"class":{"Name":"1班","Grade":3}}**

```

JSON、BSON 等格式进行序列化及对象关系映射（Object Relational Mapping，简称 ORM）系统都会用到结构体标签，这些系统使用标签设定字段在处理时应该具备的特殊属性和可能发生的行为。这些信息都是静态的，无须实例化结构体，可以通过反射获取到。

```
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

Golang 没有类和继承等经典的 OOP 功能，但它确实通过其类型系统和接口的使用支持一些基本的 OOP 概念。 Golang 中的关键 OOP 功能包括：在 Golang 中，方法是与特定类型关联的函数。它们是用接收器定义的

this是指向当前对象的指针(姑且用C里面的指针来看吧)

self是指向当前类的指针

**多态**

Go 语言提供了另外一种数据类型即**接口，它把所有的具有共性的方法**定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口。

**继承(组合实现)**   

type Human struct{}

type Superman struct{

Human//表示继承Human类的方法

}

### interface

在 Go 中，接口是隐式实现的。如果一个type（在本例中为 PostController）包含接口 (PostControllerInterface) 中定义的所有方法，则认为它实现了该接口。

当您定义一个结构体 (PostController) 时，其方法与接口 (PostControllerInterface) 中的方法签名相匹配，Go 编译器会自动推断该 PostController 结构体实现了 PostControllerInterface。

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

```

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

```
f := NewFile(10, "./test.txt")
在 Go 语言中常常像上面这样在工厂方法里使用初始化来简便的实现构造函数。
```

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

## PKG

Go的Web框架大致可以分为这么两类：

1. Router框架
2. MVC类框架

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f4134d3-a1ff-4102-81c1-0b26b70b10e5/Untitled.png

1. Controller，与上述类似，服务入口，负责处理路由，参数校验，请求转发。
2. Logic/Service，逻辑（服务）层，一般是业务逻辑的入口，可以认为从这里开始，所有的请求参数一定是合法的。业务逻辑和业务流程也都在这一层中。常见的设计中会将该层称为 Business Rules。
3. DAO/Repository，这一层主要负责和数据、存储打交道。将下层存储以更简单的函数、接口形式暴露给 Logic 层来使用。负责数据的持久化工作。

每一层都会做好自己的工作，然后用请求当前的上下文构造下一层工作所需要的结构体或其它类型参数，然后调用下一层的函数。在工作完成之后，再把处理结果一层层地传出到入口，如*图 5-14所示*。

!https://chai2010.gitbooks.io/advanced-go-programming-book/content/images/ch6-08-controller-logic-dao.png

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