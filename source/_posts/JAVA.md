​	

# JAVAWEB

![这里写图片描述](https://img-blog.csdn.net/20180430163324407?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3p0MTU3MzI2MjU4Nzg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## Spring

Spring 框架中用到了哪些设计模式？
关于下面一些设计模式的详细介绍，可以看笔主前段时间的原创文章《面试官:“谈谈Spring中都用到了那些设计模式?”。》 。

工厂设计模式 : Spring使用工厂模式通过 BeanFactory、ApplicationContext 创建 bean 对象。
代理设计模式 : Spring AOP 功能的实现。
单例设计模式 : Spring 中的 Bean 默认都是单例的。
模板方法模式 : Spring 中 jdbcTemplate、hibernateTemplate 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。
包装器设计模式 : 我们的项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库。这种模式让我们可以根据客户的需求能够动态切换不同的数据源。
观察者模式: Spring 事件驱动模型就是观察者模式很经典的一个应用。
适配器模式 :Spring AOP 的增强或通知(Advice)使用到了适配器模式、spring MVC 中也是用到了适配器模式适配Controller。



### Ajax

  JQuery和BootStrap是前端开发的两个重要框架，其中JQuery主要提供JavaScript框架，而BootStrap提供CSS排版框架。在SpringBoot开发中，引入JQuery和BootStrap有两种方法。[AJAX——核心XMLHttpRequest对象](http://blog.csdn.net/liujiahan629629/article/details/17126727)，而JQuery也对Ajax异步操作进行了封装，这里看一下几种常用的方式。 $.ajax，$.post， $.get， $.getJSON。

Ajax（Asynchronous JavaScript And XML）是一种异步交互模式，实现异步页面刷新。JQuery自带Ajax功能，可以基于JQuery实现Ajax。XMLHttpRequest(XHR) 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| ---------------------------- | ------------------------------------------------------------ |
| send(*string*)               |                                                              |

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息

```xmlhttp.onreadystatechange=function() {    ```

```if (xmlhttp.readyState==4 && xmlhttp.status==200)    {        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;    } }```

#### Serialization

序列化 (Serialization)是将对象的**状态信息转换为可以存储或传输**的形式的过程。在序列化期间，对象将其当前状态写入到临时或持久性存储区。以后，可以通过从存储区中读取或反序列化对象的状态，重新创建该对象。

序列化使其他代码可以查看或修改，那些不序列化便无法访问的对象实例数据。确切地说，代码执行序列化需要特殊的权限：即指定了 SerializationFormatter 标志的 SecurityPermission。在默认策略下，通过 Internet 下载的代码或 Internet 代码不会授予该权限；只有本地计算机上的代码才被授予该权限。

目的

1、以某种存储形式使自定义[对象持久化](https://baike.baidu.com/item/对象持久化)；    2、将对象从一个地方传递到另一个地方。           3、使程序更具维护性。



## Thread

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211130170606572.png" alt="image-20211130170606572" style="zoom:80%;" />

N threads over M cores: 1. N<=M 真并行处理 2. N>M pseudo parallel    只有runnable到running时才会占用cpu时间片

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20220316151315111.png" alt="image-20220316151315111" style="zoom:67%;" />

线程是并行的最小单位，一个线程实现一个功能

### 守护线程

在Java中有两类线程：User Thread(用户线程)、Daemon Thread(守护线程) 

#### Atomicity

cannot be interrupted, and once it starts is always completes.

JLS定义了线程对主存的操作指令：lock，unlock，read，load，use，assign，store，write。这些行为是不可分解的`原子操作`，在使用上相互依赖，read-load从主内存复制变量到当前工作内存，use-assign执行代码改变共享变量值，store-write用工作内存数据刷新主存相关内容。

- read（读取）：作用于主内存变量，把一个变量值从主内存传到线程的工作内存中，以便随后的load动作使用；
- load（载入）：作用于工作内存的变量，它把read操作从主内存中得到的变量值**放入工作内存的变量副本中**。
- use（使用）：作用于工作内存的变量，把工作内存中的一个变量值**传递给执行引擎**，每当虚拟机遇到一个需要使用变量的值的字节码指令时将会执行这个操作。
- assign（赋值）：作用于工作内存的变量，它把一个**从执行引擎接收到的值赋值给工作内存的变量**，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。
- store（存储）：**作用于工作内存的变量**，**把工作内存中的一个变量的值传送到主内存中**，以便随后的write的操作。
- write（写入）：**作用于主内存的变量**，它把store操作从工作内存中一个变量的值传送到主内存的变量中。

**采用继承Thread类方式：**
**（1）优点：编写简单，直接使用this便可访问当前线程，无需使用Thread.currentThread()方法。**
**（2）缺点：JAVA中不支持多重继承，所以线程类继承Thread类后便不能再继承其他父类。**

**采用实现Runnable接口方式：**
（1）优点：可实现多个接口，还可以继承其他的类。可多个线程共享同一个目标对象，适合用于多个相同线程处理同一份资源，从而将CPU代码和数据分开，形成清晰的模型，较好地体现面向对象的思想。
（2）缺点：编程稍微复杂，访问当前线程，必须使用**Thread.currentThread()**方法。

1.**start（）方法来启动线程，真正实现了多线程运行。**这时无需等待run方法体代码执行完毕，可以直接继续执行下面的代码；通过调用Thread类的start()方法来启动一个线程， 这时此线程是处于就绪状态， 并没有运行。 然后通过此Thread类调用方法run()来完成其运行操作的， 这里方法run()称为线程体，它包含了要执行的这个线程的内容， Run方法运行结束， 此线程终止。然后CPU再调度其它线程。在main线程中 create a new thread
2.**run（）方法当作普通方法的方式调用。**程序还是要顺序执行，要等待run方法体执行完毕后，才可继续执行下面的代码； 程序中只有主线程——这一个线程， 其程序执行路径还是只有一条， 这样就没有达到写线程的目的。



每当使用 Java 命令执行一个类时，实际上都会启动一个 JVM，**每一个JVM实际上就是在操作系统中启动一个线程**，Java 本身具备了垃圾的收集机制。所以在 Java 运行时至少会启动两个线程，一个是 main 线程，另外一个是垃圾收集线程。<img src="https://img2018.cnblogs.com/blog/1655301/201909/1655301-20190928151648653-69670221.png" alt="img" style="zoom: 80%;" />

**OS: 假如线程正在运行中，程序向硬盘发送访问请求然后等待，这时CPU空转，所以线程进入阻塞状态，CPU执行其他线程。**





sleep相当于让线程睡眠，交出CPU，让CPU去执行其他的任务。但是有一点要非常注意，sleep方法不会释放锁，

直接调用interrupt方法不能中断正在运行中的线程。但是如果配合isInterrupted()能够中断正在运行的线程，因为调用interrupt方法相当于将中断标志位置为true

<img src="https://images2015.cnblogs.com/blog/682616/201611/682616-20161115184256092-1439402886.jpg" alt="img" style="zoom: 67%;" />



#### sleep() yield() join()

① sleep()方法给其他线程运行机会时不考虑线程的优先级，因此会给低优先级的线程以运行的机会；yield()方法只会给相同优先级或更高优先级的线程以运行的机会； 因此，Thread.Sleep(0)的作用，就是“触发操作系统立刻重新进行一次CPU竞争”。睡眠1毫秒。这也是我们在大循环里面经常会写一句Thread.Sleep(0) ，因为这样就给了其他线程比如Paint线程获得CPU控制权的权力，这样界面就不会假死在那里。
② 线程执行sleep()方法后转入TIMED_WAITING状态，而执行yield()方法后转入就绪（ready）状态；
③ sleep()方法声明抛出InterruptedException，而yield()方法没有声明任何异常；

 yield()方法并***\*不会让线程进入阻塞状态\****，而是让***\*线程重回就绪状态\****，它只需要等待重新获取CPU执行时间，所以**执行yield()的线程有可能在进入到可执行状态后马上又被执行**。还有一点和 sleep 不同的是 ***\*yield 方法只能使同优先级或更高优先级的线程有执行的机会\****


   join()方法**阻塞**正在运行的线程，在线程B中调用了线程A的Join()方法**(B 暂停wait()，直到线程A执行完毕后(B notify()，才会继续执行线程B。如果调用此方法的线程没有执行完毕，程序不会往下继续执行）**，也就是等到该方法的线程执行完毕后程序再往下继续执行。注意该方法也需要捕捉异常。

####  wait()、notify() 

wait 方法是属于 ***\*Object\**** 类中的，wait 过程中线程会***\*释放对象锁\****，只有当其他线程调用 ***\*notify\**** 才能唤醒此线程。

只有当 notify/notifyAll() 被执行时候，才会唤醒一个或多个正处于等待状态的线程，然后继续往下执行，**直到执行完synchronized 代码块的代码或是中途遇到wait() ，再次释放锁。**

也就是说，notify/notifyAll() 的执行只是**唤醒沉睡的线程，而不会立即释放锁**，锁的释放要看代码块的具体执行情况。所以在编程中，尽量在使用了notify/notifyAll() 后立即退出临界区，以唤醒其他线程让其获得锁

4、wait() 需要被**try catch**包围，以便发生异常中断也可以使wait等待的线程唤醒。

```
synchronized (obj) {
                System.out.println("thread1 start");
                try {
                    obj.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();

```



#### Interrupt

对一个线程，调用 interrupt() 时，
① 如果线程处于被阻塞状态（例如处于sleep, wait, join 等状态），那么线程将立即退出被阻塞状态，并抛出一个InterruptedException异常。仅此而已。
② 如果线程处于正常活动状态，那么会将该线程的中断标志设置为 true，仅此而已。被设置中断标志的线程将继续正常运行，不受影响。

interrupt() **并不能真正的中断线程，需要被调用的线程自己进行配合才行。**
也就是说，一个线程如果有被中断的需求，那么就可以这样做。
① 在正常运行任务时，经常检查本线程的中断标志位，如果被设置了中断标志就自行停止线程。

每一个线程都有一个boolean类型的标志，此标志意思是当前的请求是否请求中断，默认为false。当一个线程A调用了线程B的interrupt方法时，那么线程B的是否请求的中断标志变为true。而线程B可以调用方法检测到此标志的变化。

- **阻塞方法：**如果线程B调用了阻塞方法**（wait,sleep,join）**，如果是否请求中断标志变为了true，那么它会抛出InterruptedException异常。抛出异常的同时它会将线程B的是否请求中断标志置为false
- **非阻塞方法：**可以通过线程B的isInterrupted方法进行检测是否请求中断标志为true还是false，另外还有一个静态的方法interrupted方法也可以检测标志。但是静态方法它检测完以后会自动的将是否请求中断标志位置为false。例如线程A调用了线程B的interrupt的方法，那么如果此时线程B中用静态interrupted方法进行检测标志位的变化的话，那么第一次为true，第二次就为false。

sleep、wait和join这些方法的内部会不断的检查中断状态的值，从而自己抛出InterruptEdException。

```
public void run() {
    try {
        // 1. isInterrupted()保证，只要中断标记为true就终止线程。
        while (!isInterrupted()) {
            // 执行任务...
        }
    } catch (InterruptedException e) { 
             // Restore the interrupted status
             Thread.currentThread().interrupt();
         }
    //，因为你的程序是实现了Runnable接口，然后在重写Runnable接口的run方法的时候，那么子类抛出的异常要小于等于父类的异常。而在Runnable中run方法是没有抛异常的。所以此时是不能抛出InterruptedException异常。如果此时你只是记录日志的话，那么就是一个不负责任的做法，因为在捕获InterruptedException异常的时候自动的将是否请求中断标志置为了false。至少在捕获了InterruptedException异常之后，如果你什么也不想做，那么就将标志重新置为true，以便栈中更高层的代码能知道中断，并且对中断作出响应。

}
```

**static boolean interrupted()**
 测试当前线程（正在执行这一命令的线程）是否被中断。**这一调用会将当前线程的中断状态重置为 false**

**boolean isInterrupted()**   更好
 测试线程是否被终止。不像静态的中断方法，这一调用不改变线程的中断状态

一个while循环中使用Thread.interrupted()作为条件,则在循环中断之后,您不知道是否终止,因为Thread.interrupted()返回true或其他一些条件已更改或一个休息声明跑了所以在这种情况下,使用Thread.currentThread().isInterrupted()真的是你唯一的选择.

### synchronized和Lock

Java中存在两种锁机制：synchronized和Lock，Lock接口及其实现类是JDK5增加的内容

**synchronized:**  Java的关键字，在jvm层面上                 **Lock:** 是一个接口

**用法**

**synchronized:** 在需要同步的对象中加入此控制，synchronized可以加在方法上，也可以加在特定代码块中，括号中表示需要锁的对象。

**Lock:** 一般使用ReentrantLock类做为锁。在加锁和解锁处需要通过lock()和unlock()显示指出。所以一般会在finally块中写unlock()以防死锁。

**锁的释放**

**synchronized:** 1、以获取锁的线程执行完同步代码，释放锁 2、线程执行发生异常，jvm会让线程释放锁。在发生异常时候会自动释放占有的锁，因此不会出现死锁

**Lock:** 在finally中必须释放锁，不然容易造成线程死锁。必须手动unlock来释放锁，可能引起死锁的发生

**锁的获取**

**synchronized:** 假设A线程获得锁，B线程等待。如果A线程阻塞，B线程会一直等待

**Lock:** 分情况而定，Lock有多个锁获取的方式，大致就是可以尝试获得锁，线程可以不用一直等待(可以通过tryLock判断有没有锁)

**锁的状态**

**synchronized:** 无法判断                           **Lock:** 可以判断

**性能**

**synchronized:** 少量同步

**Lock:** 大量同步

- Lock可以提高多个线程进行读操作的效率。（可以通过readwritelock实现读写分离）
- 在资源竞争不是很激烈的情况下，Synchronized的性能要优于ReetrantLock，但是在资源竞争很激烈的情况下，Synchronized的性能会下降几十倍，但是ReetrantLock的性能能维持常态；
- ReentrantLock提供了多样化的同步，比如有时间限制的同步，可以被Interrupt的同步（synchronized的同步是不能Interrupt的）等。在资源竞争不激烈的情形下，性能稍微比synchronized差点点。但是当同步非常激烈的时候，synchronized的性能一下子能下降好几十倍。而ReentrantLock确还能维持常态。公平锁机制。什么叫公平锁呢？也就是在锁上等待时间最长的线程将获得锁的使用权。通俗的理解就是谁排队时间最长谁先执行获取锁。

**锁的类型**

**synchronized:**  可重入 不可中断 非公平

**Lock:** 可重入 可判断 可公平（两者皆可）

**调度**

**synchronized:** 使用Object对象本身的wait 、notify、notifyAll调度机制

**Lock:** 可以使用Condition进行线程之间的调度

**底层实现**

**synchronized:** 底层使用指令码方式来控制锁的，映射成字节码指令就是增加来两个指令：monitorenter和monitorexit。当线程执行遇到[monitorenter指令](https://www.zhihu.com/search?q=monitorenter指令&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"180469207"})时会尝试获取内置锁，如果获取锁则锁计数器+1，如果没有获取锁则阻塞；当遇到monitorexit指令时锁计数器-1，如果计数器为0则释放锁。

**Lock:** 底层是CAS乐观锁，依赖AbstractQueuedSynchronizer类，把所有的[请求线程](https://www.zhihu.com/search?q=请求线程&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"180469207"})构成一个CLH队列。而对该队列的操作均通过Lock-Free（CAS）操作。

独占锁是一种悲观锁，synchronized就是一种独占锁；它假设最坏的情况，并且只有在确保其它线程不会造成干扰的情况下执行，会导致其它所有需要锁的线程挂起直到持有锁的线程释放锁。

所谓乐观锁就是每次不加锁,假设没有冲突而去完成某项操作;如果发生冲突了那就去重试，直到成功为止。

CAS(Compare And Swap)是一种有名的无锁算法。CAS算法是乐观锁的一种实现。CAS有3个操作数，内存值V，旧的预期值A，要修改的新值B。当且仅当预期值A和内存值V相同时，将内存值V修改为B并返回true，否则返回false。

注:synchronized和ReentrantLock都是悲观锁。

注:什么时候使用悲观锁效率更高、什么使用使用乐观锁效率更高，要根据实际情况来判断选择。


1. synchronized修饰一个代码块，被修饰的代码块称为同步语句块，其作用的范围是大括号{}括起来的代码，作用的对象是调用这个代码块的对象；    														this.notifyAll()会自动执行 解锁对象

  2. **修饰一个方法，被修饰的方法称为同步方法，其作用的范围是整个方法，作用的对象是调用这个方法的对象；** 

  3. **修改一个静态的方法，其作用的范围是整个静态方法，作用的对象是这个类的所有对象；** 

  4. **修改一个类，其作用的范围是synchronized后面括号括起来的部分，作用主的对象是这个类的所有对象。****

     同步锁

一个线程访问一个对象中的**synchronized(this)同步代码块时，其他试图访问该对象的线程将被阻塞**。当两个并发线程(thread1和thread2)访问同一个对象(syncThread)中的synchronized代码块时，在同一时刻只能有一个线程得到执行，另一个线程受阻塞，必须等待当前线程执行完这个代码块以后才能执行该代码块。    synchronized是对类的当前实例进行加锁，防止其他线程同时访问该类的该实例的所有synchronized块，注意这里是“ 类的当前实例 ”，类的两个不同实例就没有这种约束了。那么**static synchronized恰好就是要控制类的所有实例的访问了**.synchronized相当于this.synchronized，而staticsynchronized相当于类名.synchronized.

当一个线程访问对象的一个synchronized(this)同步代码块时，另一个线程仍然可以访问该对象中的非synchronized(this)同步代码块。

### 线程池

线程池顾名思义就是事先创建若干个可执行的线程放入一个池中（容器），需要的时候从池中获取线程不用自行创建，使用完毕不需要销毁线程而是放回池中，从而减少创建和销毁线程对象的开销。任何池化技术都是减低资源消耗，例如我们常用的 数据库连接池。

第2个问题： 为什么要用线程池？

1降低资源消耗          2提高响应速度        3提高线程的可管理性

（减少分配和释放现成的开销和控制线程数量），向下进一步解为什么要用多线程（可以并发工作），以及什么是线程（OS对任务执行的抽象），OS大概是如何调度的等（抢占式/协作式等）。

而向上就能可以理解如何去管理一组资源（用列表/集合/树），如何去“borrow”和“return”一个资源（锁/CAS），线程的创建释放策略（比如固定数量，定义最小最大数量，根据请求负载和某种算法做自适应等），还有一些设计模式上的考虑（池的实现可以切换而不改变接口；核心代码可以抽象为管理“池”而不仅仅是线程池；能够模拟为异步不阻塞的操作等），以及一些性能上的考量。





#### Deadlock,starvation,race conditon

A *deadlock* is a state in which each member of a group of actions, is waiting for some other member to release a lock. A *livelock* on the other hand is almost similar to a deadlock, except that the states of the processes involved in a livelock constantly keep on changing with regard to one another, none progressing. Thus Livelock is a special case of resource starvation, as stated from the general definition, the process is not progressing.

**Starvation:**
饥饿是一个与活锁和死锁密切相关的问题。在**动态**系统中，对资源的请求不断发生。因此，需要一些策略来决定谁何时获得资源。这个过程是合理的，**可能会导致一些进程永远不会得到服务**，即使它们没有死锁。 导致队列增长两次然后它  可以消费，从而导致计算不足 } 

当“贪婪”线程使共享资源长时间不可用时，就会发生饥饿。例如，假设一个对象提供了一个通常需要很长时间才能返回的同步方法。如果一个线程频繁调用这个方法，其他同样需要频繁同步访问同一对象的线程也会经常被阻塞。

#### monitor

**featrures: 1. mutual exclusion(supported by synchronized)**                  

2.cooperation(supported by wait() and notify())    线程协调工作

在不同的锁状态下，Mark word会存储不同的信息，这也是为了节约内存常用的设计。当锁状态为重量级锁（锁标识位=10）时，Mark word中会记录指向**Monitor对象**的指针，这个Monitor对象也称为**管程**或**监视器锁**。**synchronzied 需要关联一个对象，而这个对象就是 monitor object。**
monitor 的机制中，**monitor** object 充当着维护 mutex以及定义 wait/signal API 来管理线程的阻塞和唤醒的角色。
Java 语言中的 java.lang.Object 类，便是满足这个要求的对象，任何一个 Java 对象都可以作为 monitor 机制的 monitor object。
Java 对象存储在内存中，分别分为三个部分，即对象头、实例数据和对齐填充，而在其对象头中，保存了锁标识；同时，java.lang.Object 类定义了 **wait()，notify()，notifyAll() 方法，这些方法的具体实现，依赖于一个叫 ObjectMonitor** 模式的实现，这是 JVM 内部基于 C++ 实现的一套机制![img](https://pic3.zhimg.com/v2-ee554829ed472c73c5fb2461d5878b3e_b.jpg)

（1）当多个线程同时访问一段同步代码时，首先会进入 _EntryList 队列中。

（2）当某个线程获取到对象的Monitor后进入临界区域，并把Monitor中的 _owner 变量设置为当前线程，同时Monitor中的计数器 _count 加1。即获得对象锁。

（3）若持有Monitor的线程调用 wait() 方法，将释放当前持有的Monitor，_owner变量恢复为null，_count自减1，同时该线程进入 _WaitSet 集合中等待被唤醒。

（4）在_WaitSet 集合中的线程会被再次放到_EntryList 队列中，重新竞争获取锁。

（5）若当前线程执行完毕也将释放Monitor并复位变量的值，以便其他线程进入获取锁。

线程争抢锁的过程要比上面展示得更加复杂。除了_EntryList 这个双向链表用来保存竞争的线程，ObjectMonitor中还有另外一个单向链表 _cxq，由两个队列来共同管理并发的线程。



isAlive()<join()常用            3ways to terminate a thread:

##### volatile

Java提供了volatile关键字来**保证可见性**。当一个共享变量被volatile修饰时，它会保证修改的值会**立即**被更新到**主存**，当有其他线程需要读取时，它会去内存中读取新值。关闭缓存，但 (++,--)运算符不是原子性的不能用volatile（原子性：即一个操作或者多个操作 要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行。**Java内存模型只保证了基本读取和赋值是原子性操作，如果要实现更大范围操作的原子性，可以通过synchronized和Lock来实现。**）

内存屏障（[memory barrier](http://en.wikipedia.org/wiki/Memory_barrier)）和volatile什么关系？上面的虚拟机指令里面有提到，如果你的字段是volatile，Java内存模型将在写操作后插入一个写屏障指令，在读操作前插入一个读屏障指令。这意味着如果你对一个volatile字段进行写操作，你必须知道：1、一旦你完成写入，任何访问这个字段的线程将会得到最新的值。2、在你写入前，会保证所有之前发生的事已经发生，并且任何更新过的数据值也是可见的，因为内存屏障会把之前的写入值都刷新到缓存。

volatile 在并发情况下是线程不安全的，意味着**其他线程拿到的值可能不是最新的**。eg. a++     b= a+1

1. final fields cannot use volatile
2. accessed by 1thread cannot use volatile
3. **complex operations cannot use volatile**

　　而普通的共享变量不能保证可见性，因为普通共享变量被修改之后，什么时候被写入主存是不确定的，当其他线程去读取时，此时内存中可能还是原来的旧值，因此无法保证可见性。　　另外，通过synchronized和Lock也能够保证可见性，synchronized和Lock能保证同一时刻只有一个线程获取锁然后执行同步代码，并且在释放锁之前会将对变量的修改刷新到主存当中。因此可以保证可见性。

保证按线程顺序执行的两种方法：

- Thread类的join方法：使宿主线程阻塞指定时间或者直到寄生线程执行完毕
- CountDownLatch类：指定计数器，当计数器清零即取消阻塞









## Socket

servlet 不建立连接，仅仅是处理http请求的内容。 所有的输入输入输出电文都由applicationserver 进行处理。到servlet时，已经转换成对象了。属于应用层的东西。

socket(套接字)是网络通信的接口，通过接口的TCP/Ip/UDP通信， 需要自己建立连接，自己分析输入电文构造输出电文，属于transport层。 Socket套接字是通信的基石，是支持TCP/IP协议的网络通信的基本操作单元。它是网络通信过程中端点的抽象表示，**包含进行网络通信必须的五种信息**：连接使用的协议，本地主机的IP地址，本地进程的协议端口，远地主机的IP地址，远地进程的协议端口。Socket本质是**编程接口(API)**，对TCP/IP的封装，TCP/IP也要提供可供程序员做网络开发所用的接口，这就是Socket编程接口；HTTP是轿车，提供了封装或者显示数据的具体形式；Socket是发动机，提供了网络通信的能力。

ServerSocke.accept()用于等待socket连接， socket是server与客户端通信

### java Socket

client socket(需要IP 和port  number)                vs.              server socket(只需要port number返回service)

#### Accept() listen

accept()函数 　creates a new Socket object，系统调用  accept()  会有点古怪的地方的！你可以想象发生  这样的事情：有人从很远的地方通过一个你在侦听  (listen())  的端口连接  (connect())  到你的机器。它的连接将加入到等待接受  (accept())  的队列  中。你调用  accept()  告诉它你有空闲的连接。它将返回一个新的套接字文  件描述符！这样你就有两个套接字了，原来的一个还在侦听你的那个端口，  新的在准备发送  (send())  和接收  (  recv())  数据。这就是这个过程！ 

### session

Javaweb开发中的监听器，是用于监听web常见对象 **HttpServletRequest HttpSession ServletContext**

为了接受连接，先用[socket()](https://baike.baidu.com/item/socket())创建一个[套接口](https://baike.baidu.com/item/套接口)的描述字，然后用listen()创建套接口并为申请进入的连接建立一个后备日志，然后便可用[accept()](https://baike.baidu.com/item/accept())接受连接了。listen()仅适用于支持连接的套接口

API = 一堆classes associated with 

HttpSession session = request.getSession();

## HTML

超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。

您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

1、HTML：是用于描述网页文档的一种标记语言。

2、HTTP：通常运行在TCP之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。请求和响应消息的头以ASCII码形式给出；而消息内容则具有一个类似MIME的格式。

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210703131209253.png" alt="image-20210703131209253" style="zoom:50%;" />

<tr>必须在一个<table></table>里面,它不能单独使用,相当于<table>的属性标签. 

<th>...</th> 定义表头单元格。表格中的文字将以**粗体**显示，在表格中也可以不用此标签，<th>标签必须放在<tr>标签内

<tr>...</tr> 定义标签，一组行标签内可以建立多组由<td>或<th>标签所定义的单元格

<td>...</td> 定义单元格标签，一组<td>标签将将建立一个单元格，<td>标签必须放在<tr>标签内

### 语法

#### Link

- Use the `target` attribute to define where to open the linked document打开新窗口

- asd<form name= "input" action="" method = "get/post"            


3、onclick返回true或未处理onclick ----> 

4、触发onsubmit事件 ----> 

5、onsubmit未处理或返回true ------> 

6、提交表单.   onsubmit处理函数返回false，onclick函数返回false，都不会引起表单提交

**页面跳转：**

**方法1：使用onclick事件**

```
<``input` `type``=``"button"` `value``=``"按钮"``onclick``=``"javascrtpt:window.location.href='http://www.baidu.com/'"` `/>
```

　　或者直接使用button标签

```
<``button` `onclick``=``"window.location.href = 'https://www.baidu.com/'"``>百度</``button``>
```

**方法2：在button标签外套一个a标签**

```
<``a` `href``=``"http://www.baidu.com/"``>``  ``<``button``>百度</``button``>``</``a``>
```

　　或使用

```
<``a` `href``=``"http://www.baidu.com/"``><``input` `type``=``"button"` `value``=``'百度'``></``a``>
```

**方法3：使用JavaScript函数**

```
<``script``>``function jump(){`` ``window.location.href="http://www.baidu.com/";``}``</``script``>``<``input` `type``=``"button"` `value``=``"百度"` `onclick``=``javascrtpt``:jump() />``// 或者<``input` `type``=``"button"` `value``=``"百度"` `onclick``=``"jump()"` `/>``// 或者<``button` `onclick``=``"jump()"``>百度</``button``>
```

### **HTML中使用css**

- **Inline** - by using the `sytyle` attribute inside HTML elements
- **Internal** - by using a `<style>` element in the `<head>` section
- **External** - by using a `<link>` element to link to an external CSS file

1、链接的标签

链接标签是将整个CSS文件包含到HTML页面中最常见的方式。这是使用外部样式表调用的。标签不需要关闭标签。这个标签应该放在页面的标签中。

<link href="filename.css" rel="stylesheet">

在上面的标签简单地改变文件名。css到您的css文件的名称。

2、样式标签

将CSS包含到HTML中的第二种方法是样式标签，它确实需要一个结束标签。这被称为内部样式。样式标记允许您在它们之间键入CSS。这些可以放在你的页面的任何地方，但最好的做法是把它们放在你的内容或标题标签上面。

<style>
body{





## javascript

不用事先声明data type 只要 var

[form表单提交onclick和onsubmit ](https://www.cnblogs.com/ahudyan-forever/p/5795463.html)

   onsubmit只能表单上使用,提交表单前会触发, onclick是按钮等控件使用, 用来触发点击事件。在提交表单前，一般都会进行数据验证，可以选择在submit按钮上的onclick中验证,也可以在onsubmit中验证。

但是onclick比onsubmit更早的被触发。 onsubmit 一定搭配return

function is an object

​	默认不换行 document.write("</br>");  *// 正确的换行* 		document.write("</br>");

writeln( ) 方法与 write( ) 方法几乎一样，差别仅在于是前者将在所提供的任何字符串后添加一个换行符。在 HTML 中，这通常只会在后面产生一个空格；不过如果使用了 **<PRE> 和 <XMP>** 标识，这个换行符会被解释，且在浏览器中显示。

### dataType

1.null表示"没有对象"，即该处不应该有值，转为数值时为0。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

2.undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义，转为数值时为NaN。典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

3.undeclared：js语法错误，没有申明直接使用，js无法找到对应的上下文。

### 隐式转换 比较

<img src="https://upload-images.jianshu.io/upload_images/2791152-ba592aa9b81fe174.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="数据转换" style="zoom: 80%;" />
如图，任意两种类型比较时，如果不是同一个类型比较的话，则按如图方式进行相应类型转换，如对象和布尔比较的话，对象 => 字符串 => 数值 布尔值 =>如图，任意两种类型比较时，如果不是同一个类型比较的话，则按如图方式进行相应类型转换，如对象和布尔比较的话，对象 => 字符串 => 数值 布尔值 => 数值。如图，任意两种类型比较时，如果不是同一个类型比较的话，则按如图方式进行相应类型转换，如对象和布尔比较的话，对象 => 字符串 => 数值 布尔值 => 数值。如图，任意两种类型比较时，如果不是同一个类型比较的话，则按如图方式进行相应类型转换，如对象和布尔比较的话，对象 => 字符串 => 数值 布尔值 => 

如图，任意两种类型**比较时**，如果不是同一个类型比较的话，则按如图方式进行相应类型转换，如对象和布尔比较的话，对象 => 字符串 => 数值 布尔值 => 数值。

！== 不同类型不比较默认返回true，相同类型才比较进行非运算

**=== 和 !== 只有在相同类型下,才会比较其值。（值和类型都相同的情况下比较）**

**==， 两边值类型不同的时候，要先进行类型转换，再比较。**

**===，不做类型转换，类型不同的一定不等。"5"==5 is true 进行了类型转化   ，===&!==没进行** 

```
[] == false;
![] == false;
undefined == null //true
```

这两个的结果都是true,第一个是，对象 => 字符串 => 数值0 false转换为数字0,这个是true应该没问题，
第二个前边多了个!，则直接转换为布尔值再取反，转换为布尔值时，**空字符串(''),NaN,0，null,undefined**这几个外返回的都是true, 所以! []这个[] => true 取反为false,所以![] == false为true

```
isNaN(123) //false
isNaN(5-2) //false
isNaN('123') //false
isNaN('Hello') //true
isNaN('2005/12/12') //true
isNaN('') //false
isNaN(true) //false
isNaN(undefined) //true
isNaN('NaN') //true
isNaN(NaN) //true
NaN === NaN  *// false*
isNaN(0 / 0) //true
isNaN(null) //false
```

在类型转换中，经常用到方法valueOf()和toString()

自动转换类型

当 JavaScript 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型。

以下输出结果不是你所期望的：

5 + null  // 返回 5     null 转换为 0
"5" + null // 返回"5null"  null 转换为 "null"
"5" + 1   // 返回 "51"   1 转换为 "1" 
"5" - 1   // 返回 4     "5" 转换为 5

自动转换为字符串

当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法：

document.getElementById("demo").innerHTML = myVar;

myVar = {name:"Fjohn"} // toString 转换为 "[object Object]"
myVar = [1,2,3,4]    // toString 转换为 "1,2,3,4"
myVar = new Date()   // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"

### 运算

boolean/数字与字符串相加，结果将成为字符串！ 乘除 转换成number运算

### DOM 对象

![DOM HTML tree](https://www.runoob.com/wp-content/uploads/2013/09/ct_htmltree.gif)

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211107154849906.png" alt="image-20211107154849906" style="zoom:50%;" />

**一些 DOM 对象方法**

这里提供一些您将在本教程中学到的常用方法：

| 方法                     | 描述                                                         |
| :----------------------- | :----------------------------------------------------------- |
| getElementById()         | 返回带有指定 ID 的元素。                                     |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。                   |
| replaceChild()           | 替换子节点。                                                 |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                           |
| createAttribute()        | 创建属性节点。                                               |
| createElement()          | 创建元素节点。                                               |
| createTextNode()         | 创建文本节点。                                               |
| getAttribute()           | 返回指定的属性值。                                           |
| setAttribute()           | 把指定属性设置或修改为指定的值。                             |

getElementById 是一个方法，而 innerHTML 是属性。

js:插件引发了脚本语言（scripting language）的大爆炸。通过使用某种脚本语言，你可以将客 户端程序的源代码直接嵌入到 HTML 页面中，解释这种语言的插件在 HTML 页面被显示时 自动激活。脚本语言先天就相当易于理解，因为它们只是作为 HTML 页面一部分的简单文 本，当服务器收到要获取该个页面的请求时，它们可以被快速加载。此方法的缺点是你的代 码会被暴露给任何人去浏览（或窃取）。但是，通常你不会使用脚本语言去做相当复杂的事 情，所以这个缺点并不太严重。

- Writing into an alert box, using **window.alert()**.

- Writing into the HTML output using **document.write()**.

  您只能在 HTML 输出流中使用 **document.write**。 如果您在文档已加载后使用它（比如在函数中），会覆盖整个文档。

- Writing into an HTML element, using **innerHTML**.

- Writing into the browser console, using **console.log()**.





## Servlet

A servlet is a **[Java Programming](https://www.edureka.co/blog/java-tutorial/)** language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model. Although servlets can respond to any type of request, they are commonly used to extend the applications hosted by **web servers**. It is also a web component that is deployed on the server to create a dynamic web page.       动态地扩展Server的能力，并采用请求－响应模式提供Web服务

Servlet没有main方法，不能独立运行，它必须被部署到Servlet容器中，由容器来实例化和调用 Servlet的方法（如doGet()和doPost()），Servlet容器在Servlet的生命周期内包容和管理Servlet。在JSP技术 推出后，管理和运行Servlet/JSP的容器也称为Web容器。

![img](https://pic3.zhimg.com/50/v2-cbb35ec0c92292ea599108e643fd5183_720w.jpg?source=1940ef5c)五个方法，最难的地方在于形参，

然而Tomcat会事先把形参对象封装好传给我...除此以外，既不需要我写TCP连接数据库，也不需要我解析HTTP请求，更不需要我把结果转成HTTP响应，request对象和response对象帮我搞定了。

那么如何是Servlet线程安全呢？**答案是不要使用实例变量或类变量**。当然你也能够使用synchronized同步方法或使用单线程模型，但这样效率不高。暂时变量是不会影响线程安全的,由于他们是在栈上分配空间,并且每一个线程都有自己私有的栈空间.

JSP同步也一样。由于jsp会被编译成servlet。在jsp中<%! String unsafeVar; %>声明的变量事实上是servlet的实例变量，而<% String safevar %>变量声明是局部变量。

## tomcat

**Tomcat**运行在JVM之上，是servlet JSp的web容器，它和HTTP服务器一样，绑定IP地址并监听TCP端口，同时还包含以下职责：

- 管理Servlet程序的生命周期
- 将URL映射到指定的Servlet进行处理
- 与Servlet程序合作处理HTTP请求——根据HTTP请求生成HttpServletRequest对象并传递给Servlet进行处理，将Servlet中的HttpServletResponse对象生成的内容返回给浏览器.<img src="https://pica.zhimg.com/v2-ce6e39bb02e3c6a2f4eb1e5afaa6e4e6_r.jpg?source=1940ef5c" alt="preview" style="zoom: 67%;" />


虽然Tomcat也可以认为是HTTP服务器，但通常它仍然会和Nginx配合在一起使用：

- 动静态资源分离——运用Nginx的反向代理功能分发请求：所有动态资源的请求交给Tomcat，而静态资源的请求（例如图片、视频、CSS、JavaScript文件等）则直接由Nginx返回到浏览器，这样能大大减轻Tomcat的压力。

- 负载均衡，当业务压力增大时，可能一个Tomcat的实例不足以处理，那么这时可以启动多个Tomcat实例进行水平扩展，而Nginx的负载均衡功能可以把请求通过算法分发到各个不同的实例进行处理

  ![img](https://img-blog.csdn.net/20180622221844320?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjA3MjU5Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**PrintWriter out=response.getWriter()**
1，从HttpServletResponse中get一个PrintWriter；,

2，打个通俗的比方就是通过HttpServletResponse对象得到一支笔，然后out是输出字符流，即servlet接受到request请求后，servlet使用out来返回结果，不管客户端是什么（浏览器或者httpclient 或者别的serlvet等等），它都和客户端建立一个流输出管道，然后把字符流输出给请求端。

out.print("<html><body>"); 
out.print("任何内容");
out.print("</body></html>");

3，通过PrintWrite，以流方式输出html，返回给客户端，显示在IE上。

4，取一个响应客户端的流对象

5，获取PrintWriter流，用来在客户端输出

### HTTP REQUEST HEADER

**HTTP2.0 focus on reduce payload time. Using SPDY multiplex,universal encryption,server push**

### session  cookie

**两种用于保持HTTP连接状态的技术就应运而生了，一个是Cookie，而另一个则是Session**

除了可以将用户信息通过 Cookie 存储在用户浏览器中，也可以利用 Session 存储在服务器端，存储在服务器端的信息更加安全。

Session 可以存储在服务器上的文件、数据库或者内存中。也可以将 Session 存储在 Redis 这种内存型数据库中，效率会更高。

Session是指一个终端用户与交互系统进行通信的时间间隔，通常指从注册进入系统到注销退出系统之间所经过的时间。以及如果需要的话，可能还有一定的操作空间。需要注意的是，一个Session的概念需要包括特定的客户端，特定的[服务器](https://baike.baidu.com/item/服务器)端以及不中断的操作时间。A用户和C服务器建立连接时所处的Session同B用户和C服务器建立连接时所处的Session是两个不同的Session。

 session：同一次会话有效（只要浏览器不关，都属于同一次会话，无论是重定向还是请求转发，都有效；关闭或切换浏览器后无效；），session是存在于服务器端的，所以如果使用重定向的方式跳转，可以利用session来获取数据（并不是重定向传了数据，而是获取了服务器端的数据）

使用 Session **维护用户登录状态**的过程如下：

1.用户进行登录时，用户提交包含用户名和密码的表单，放入 HTTP 请求报文中；
2.服务器验证该用户名和密码，如果正确则把用户信息存储到 Redis 中，它在 Redis 中的 Key 称为 Session ID；
3.服务器返回的响应报文的 Set-Cookie 首部字段包含了这个 Session ID，客户端收到响应报文之后将该 Cookie 值存入浏览器中；
4.客户端之后对同一个服务器进行请求时会包含该 Cookie 值，服务器收到之后提取出 Session ID，从 Redis 中取出用户信息，继续之前的业务操作。
应该注意 Session ID 的安全性问题，不能让它被恶意攻击者轻易获取，那么就不能产生一个容易被猜到的 Session ID 值。此外，还需要经常重新生成 Session ID。在对安全性要求极高的场景下，例如转账等操作，除了使用 Session 管理用户状态之外，还需要对用户进行重新验证，比如重新输入密码，或者使用短信验证码等方式。

**Cookie 与 Session 选择**
Cookie 只能存储 ASCII 码字符串，而 Session 则可以存储任何类型的数据，因此在考虑数据复杂性时首选 Session；
Cookie 存储在浏览器中，容易被恶意查看。如果非要将一些隐私数据存在 Cookie 中，可以将 Cookie 值进行加密，然后在服务器进行解密；
对于大型网站，如果用户所有的信息都存储在 Session 中，那么开销是非常大的，因此不建议将所有的用户信息都存储到 Session 中。解决方法：JWT（json web **token**)		诞生于服务器，保存在浏览器header.payload.signature

**服务端执行 Session 机制时候会生成 Session 的 id 值，这个 id 值会发送给客户端，客户端每次请求都会把这个 id 值放到 http 请求的头部发送给服务端，而这个 id 值在客户端会保存下来，保存的容器就是 Cookie，因此当我们完全禁掉浏览器的Cookie的时候，服务端的Session也会不能正常使用。**



#### status code 

2xx success                    3xx redirection          4xx client error

301-moved permanently:resource has removed to different URI.      303-See other: resource has removed to different URI and should be use a GET method.     

res.sendError(SC_NOT_FOUND);           **res.setStatus(res.SC_NO_CONTENT) 204 stops browser reload**

### URL rewriting

 An un-written URL is a URL that does not have a session ID at the end (if sessions were enabled); that is why we should always encode URLs i.e., to make sure that the session ID is preserved if sessions are enabled but cookies are disabled. When cookies are disabled, the web application automatically goes into "URL rewriting mode" which means, it assumes all your exchanged URLs are encoded.

如果servlet 检测到browser支持cookie，URL不会rewritten；若需要rewriting, session ID会被插入URL



### redirect vs. forward

是servlet和JSP的两种主要的跳转方式。forward又叫转发，redirect叫做重定向。

1）forword 一般用于用户登录的时候，根据角色转发到相应的模块; want request go to different servlets or JSP in **same** web application

**2） redirect一般用于用户注销登录时返回主页面或者跳转到其他网站;x if request file in another web application **

**container  send 301 or 302 with header, and browser make a new request **

两者的区别总结：

1. 从地址栏显示来说：

1）forword是服务器内部的重定向，服务器直接访问目标地址的 url网址，把里面的东西读取出来，但是**客户端并不知道**，因此用forward的话，**客户端浏览器的网址是不会发生变化**的。

2）redirect是服务器根据逻辑，发送一个**状态码**，告诉浏览器重新去请求那个地址，所以地址栏显示的是新的地址。

2。 从数据共享来说：

1）由于在整个定向的过程中用的是同一个request，因此forward会将request的信息带到被重定向的jsp或者servlet中使用。即可以**共享数据           2）redirect不能共享**

3. **直接转发方式（Forward）**，**客户端和浏览器只发出一次请求**，Servlet、HTML、JSP或其它信息资源，由第二个信息资源响应该请求，在请求对象request中，保存的对象对于每个信息资源是共享的。

   **间接转发方式（Redirect）**实际是**两次HTTP请求**，服务器端在响应第一次请求的时候，让浏览器再向另外一个URL发出请求，从而达到转发的目的。

   **JSP**可以被看做一个特殊的Servlet，只不过是对Servlet的扩展，只要是JSP可以完成的，servlet也可以完成。jsp页面最终被转换为servlet来运行，因此处理请求实际上是编译后的servlet。
不同点：
1.servlet的实现方式是在java中嵌入html代码，编写和修改html非常不便，因此适合做流程控制、业务处理；JSP的实现方式是在html中嵌入java代码，适合页面展示。
2.servlet中没有内置对象，JSP中的内置对象都是必须通过HttpServletRequest对象，HttpServletResponce、HttpServlet对象得到。

- JavaEE提供了javax.servlet.http包中提供了HttpServletRequest和HttpServletResponse接口，这两个接口是继承于javax.servlet包中的ServletRequest和ServletResponse接口。

**请求转发和重定向的区别** request.getRequestDispatcher()
请求转发和重定向的区别也是非常重要的知识点！！！

请求转发是一个请求一次响应，而重定向是两次请求两次响应。
请求转发地址不变化，而重定向会显示后一个请求的地址。这是因为请求转发是服务器的行为，是由容器控制的转向，整个过程处于同一个请求中，因此客户端浏览器不会显示转向后的地址；但重定向是客户端的行为，重新发送了请求，整个过程不在同一个请求中，因此客户端浏览器会显示跳转后的地址。
请求转发只能转发到本项目其它Servlet，而重定向不只能重定向到本项目的其它Servlet，还能定向到其它项目。
请求转发是服务端行为，只需给出转发的Servlet路径，而重定向需要给出requestURI，既包含项目名。

#### 

 **从效率来说：1）forword效率高，而redirect效率低**

从本质来说：forword转发是服务器上的行为，而redirect重定向是客户端的行为 response.sendRedirect()

**For forward to process request** : 1servlet  calls      

RequestDispatcher view = req.getRequestDispatcher("Display.jsp");// in the server

view.forward(req,res);	view.include(req,res)

 无论是forward方法还是sendRedirect方法**调用前面**都不能有PrintWriter/ServletOutputStream 输出到客户端。

   forward方法报错： Java.lang.**IllegalStateException**: Cannot forward after response has been committed

2 JSP 

<jsp:forward page="relative URL"/>

<% String dest = "dest.jsp"; %>

<jsp:forward page="<%=dest %>" />



## JSP

JSP全称Java Server Pages，是一种动态网页开发技术。它使用JSP标签在static HTML网页中插入dynamic Java servlet代码。标签通常以<%开头以%>结束。

JSP是一种Java servlet，主要用于实现Java web应用程序的用户界面部分。网页开发者们通过结合HTML代码、XHTML代码、XML元素以及嵌入JSP操作和命令来编写JSP。JSP通过网页表单获取用户输入数据、访问数据库及其他数据源，然后动态地创建网页. JSP标签有多种功能，比如访问数据库、记录用户选择信息、访问JavaBeans组件等，还可以在不同的网页中传递控制信息和共享信息。

### Scriptlet

<%       %>称作jsp表达式，用于将**已经声明的变量或者表达式**输出到网页上面。

<%!        %>   JSP 声明中定义的变量、方法和类是全局性的，在 JSP 页面中的任何地方都能够使用。

注意2：JSP 声明中不能使用out.print()系列方法做 输出操作。 

<%-- --%> 服务器端注释，解析时将跳过这些代码，从而在客户端是查看源代码是看不到这些注释的。
<!-- -->客户端注释，是查看源代码是可以看到这些注释的。

### directive

jsp常用的编译指令有3个：include指令、page指令、taglib指令。

page指令不能作用于动态的包含文件，例如对使用<jsp:include>包含的文件，page指令的设置是无效的。一般情况下，page编译指令位于页面最上方，一个页面可以有多个编译配置指令。

2、语法格式：<%@page attribute1="value1" attribute2="value2"... %>

​     <% out.println("<script>" + "d=new Date(); document.write(d.toGMTString());" + "</script>"); %>

下表列出与Page指令相关的属性：

| **属性**    | **描述**                                            |
| :---------- | :-------------------------------------------------- |
| buffer      | 指定out对象使用缓冲区的大小                         |
| autoFlush   | 控制out对象的 缓存区                                |
| contentType | 指定当前JSP页面的MIME类型和字符编码                 |
| errorPage   | 指定当JSP页面发生异常时需要转向的错误处理页面       |
| isErrorPage | 指定当前页面是否可以作为另一个JSP页面的错误处理页面 |

predefined variable

#### Action

| 语法            | 描述                                            |
| :-------------- | :---------------------------------------------- |
| jsp:include     | 在页面被请求的时候引入一个文件。                |
| jsp:useBean     | 寻找或者实例化一个JavaBean。                    |
| jsp:setProperty | 设置JavaBean的属性。                            |
| jsp:getProperty | 输出某个JavaBean的属性。                        |
| jsp:forward     | 把请求转到一个新的页面。                        |
| jsp:plugin      | 根据浏览器类型为Java插件生成OBJECT或EMBED标记。 |
| jsp:element     | 定义动态XML元素                                 |
| jsp:attribute   | 设置动态定义的XML元素属性。                     |
| jsp:body        | 设置动态定义的XML元素内容。                     |
| jsp:text        | 在JSP页面和文档中使用写入文本的模板             |

## JavaBeans

Simple java classes for storing and accessing information. 面向对象A bean **encapsulates many objects into one object so that we can access this object from multiple places**. Moreover, it provides easy maintenance.JavaBean

主要用来传递数据，即把一组数据组合成一个JavaBean便于传输。此外，JavaBean可以方便地被IDE工具分析，生成读写属性的代码，主要用在图形界面的可视化设计中。 很多java class 都符合javabean需求

1、所有属性为private               must be packed
2、提供默认构造方法           no main()
3、提供getter和setter
4、实现serializable接口

没有**javabeans**的话jsp页面直接和数据层进行交互，这样会使得代码的可维护性变很差，而且在jsp中出现大量的业务逻辑代码是很不好的。

<jsp:useBean> 标签可以在 JSP 中声明一个 JavaBean，然后使用。声明后，JavaBean 对象就成了脚本变量，可以通过脚本元素或其他自定义标签来访问。<jsp:useBean> 标签的语法格式如下：

```
<jsp:useBean id="bean 的名字" scope="bean 的作用域" typeSpec/>
```

其中，根据具体情况，scope 的值可以是 **page，request，session 或 application**。id值可任意只要不和同一 JSP 文件中其它 <jsp:useBean> 中 id 值一样就行了。

3.Session是用户全局变量，在整个会话期间都有效。只要页面不关闭就一直有效（或者直到用户一直未活动导致会话过期，默认session过期时间为30分钟，或调用HttpSession的invalidate()方法）。存放在HttpSession对象中 

4.application是程序全局变量，对每个用户每个页面都有效。存放在ServletContext对象中。它的存活时间是最长的，如果不进行手工删除，它们就一直可以使用 

总结：当数据只需要在下一个forward有用时，用request就够了；
         若数据不只是在下一个forward有用时，就用session。
         上下文，环境信息之类的，用application。



## MVC

![img](https://bkimg.cdn.bcebos.com/pic/ac6eddc451da81cb26660e7e5066d01608243184?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto)



<img src="https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png" alt="Diagram to show the different parts of the mvc architecture." style="zoom: 33%;" />

**渲染**页面方面，大概有三种方式：

1. 后端渲染 + 后端路由 
2. 前后端分离 + 前端渲染 
3. 前后端分离 + 前端渲染 + 前端路由

## 前后端分离

只要你的Html网页的内容是在服务器端生成的，这就是服务器端渲染的方式。你用[Openresty+lua](https://www.zhihu.com/search?q=Openresty%2Blua&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A"444793972"})没问题。

**只要你的网页是在浏览器端，内容是通过接口从后端拿到的纯数据，这就是前后端分离**。在前后端分离的方式，浏览器和服务端传递的是数据，而在服务器端渲染的过程中，传递的是Html网页。

1 [数据量](https://www.zhihu.com/search?q=数据量&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A"444793972"})：前后端分离中传递数据，所以传输量会小。

​                 服务器端渲染，会传输更大的数据，而且，会有很多内容是重复的。

2 体验：前后端多了一个渲染数据的过程，服务器端省去了这个过程。这也是一直被提到的首屏渲染的问题。



3 解耦：前后端分离中，传输的是数据（只能由前端发送ajax请求，后端接受到ajax请求后，通过response返回数据，数据可以是规定数据结构，比如文本，json，xml，html 等，由前端ajax接受，但是如果html 文件不在项目中，需要jsonp跨域请求)）全部交给前端来处理，后端只负责提供数据。

​             服务器端渲染中，传输的是Html，后端传给前端的Model，通常是通过Hidden的Input来处理，或者是直接用模板技术生成（JSP，Velocity，freemak）等。

​             数据和展现并未分离，在过去，这被称之为套页面。

4 控制：网页之间有各种跳转交互，在前后端分离中，跳转的页面控制，全部是由前端来决定。跟后端完全没有关系。在服务器端渲染的方式中，大部分是由后端来决定，少部分是由前端来决定

5 SEO：前后端分离的方式，通常的载体是SPA，所以拿到的是没有数据的空壳子，很多搜索引擎，不支持SPA方式的SEO。

- 客户端渲染不利于 SEO 搜索引擎优化
- 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的





# 基本概念

Java only uses **PASS-BY-VALUE**:把引用变量的复制传给数组对象

jdk(develop kit)包含jre包含jvm；JRE是java运行时的环境，包含jvm和核心类库，JDK是开发工具包

Race Condition（也叫做资源竞争），是多线程编程中比较头疼的问题。特别是Java多线程模型当中，经常会因为多个线程同时访问相同的共享数据，而造成数据的不一致性。为了解决这个问题，通常来说需要加上同步标志“synchronized”，来保证数据的串行访问。但是“synchronized”是个性能杀手，过多的使用会导致性能下降，特别是扩展性下降，使得你的系统不能使用多个CPU资源。without proper synchronization and their operation interleaves on each other.

### 注解

三类：自定义注解、JDK内置注解、还有第三方框架提供的注解。

- 自定义注解就是我们自己写的注解，比如@UserLog
- JDK内置注解，比如@Override检验方法重写，@Deprecated标识方法过期等
- 第三方框架定义的注解比如SpringMVC的@Controller等

<img src="https://pic1.zhimg.com/80/v2-116b805ba12495e7d2758acd99dd6c4c_1440w.jpg?source=1940ef5c" alt="img" style="zoom:50%;" />

```java
public @interface 注解名称{
    属性列表;
}
```

### NoSQL

指非关系型数据库，与关系型数据库存在显著差异。其中最重要之处在于NoSQL数据库不适用SQL语言。其数据存储不需要固定的表格模式，一般都有水平可扩展性。NoSQL数据库分为以下几类：

①Key/Value键值存储。这种数据存储通常都无数据结构，被当作字符串或者二进制数据，但是数据加载快，典型应用于高并发和日志系统场景。如Redis。

②列存储数据库。列存储数据库功能相对局限，但是查找速度快，易分布式扩展。一般用于分布式文件系统。如Hbase、Cassandra

③文档型数据库。和键值对数据库类似，也没有严格数据格式。不需要预先创建表结构，数据格式更加灵活，一般用户Web应用。如MongoDB。

④图形数据库。图形数据库专注于构建关系图谱，如社交网络、推荐系统等等。这类网络有Neo4j、DEX。

NoSQL种类繁多，Spring Boot支持绝大多数。我们主要介绍常见的Redis和MongoDB。

**集群原理**

  在Redis集群中，所有Redis节点彼此互联，节点内部使用二进制协议优化传输速度和带宽。当一个节点宕机后，集群中超过半数节点检测失效才认为该节点失效。不同于Tomcat集群需要反向代理服务器，Redis集群中任意节点都可以直接和Java客户端连接。Redis集群上的数据分配采用哈希槽。Redis集群中内置了16384个哈希槽，当有数据要存储时，Redis会首先使用CRC16算法对key进行计算，将计算结果对16384取余，这样每个key都会对应一个取值在16384之间的哈希槽。开发者可根据每个Redis实例性能来调整每个Redis实例上哈希槽的分布范围。

**负载均衡**

是防止有的人干死了，有的人闲死了，来根据能力（CPU、IO）分配一下工作量

现有的负载均衡算法主要分为静态和动态两类。静态负载均衡算法以固定的概率分配任务，不考虑服务器的状态信息，如轮转算法、加权轮转算法等；动态负载均衡算法以服务器的实时负载状态信息来决定任务的分配，如最小连接法

## Jvm

是运行不同bytecode的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。可移植性高。字节码是JVM理解的代码（.class）。而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。	

### 类加载过程 及 双亲委派

类从被加载到[内存](https://so.csdn.net/so/search?q=内存&spm=1001.2101.3001.7020)中开始，到卸载出内存，经历了**加载、连接、初始化、使用**5个阶段，其中连接又包含了**验证、准备、解析**三个步骤。这些步骤总体上是按照图中顺序进行的

<img src="https://img-blog.csdnimg.cn/20200713095842419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvcml6b25fanVubW93ZW4=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" style="zoom:67%;" />			

4、解析
虚拟机将用于标识引用的符号替换为实际指向的引用的地址。符号或符号引用只不过是个标识（描述符），而实际地址才是真正的目的内存位置。

解析动作主要针对：类或接口、字段（类成员变量）、类方法、接口方法等引用进行。

类或接口的解析：判断所要转化成的直接引用是对数组类型，还是对普通的对象类型的引用，从而进行不同的解析。
字段解析：对字段进行解析时，会先在本类中查找是否包含有简单名称和字段描述符都与目标相匹配的字段，如果有，则查找结束；如果没有，则会按照继承关系从上往下递归搜索该类所实现的各个接口和它们的父接口，还没有，则按照继承关系从上往下递归搜索其父类，直至查找结束，查找流程如下图所示：

最后需要注意：理论上是按照上述顺序进行搜索解析，但在实际应用中，虚拟机的编译器实现可能要比上述规范要求的更严格一些。如果有一个同名字段同时出现在该类的接口和父类中，或同时在自己或父类的接口中出现，编译器可能会拒绝编译。

类方法解析：对类方法的解析与对字段解析的搜索步骤差不多，只是多了判断该方法所处的是类还是接口的步骤，而且对类方法的匹配搜索，是先搜索父类，再搜索接口。
接口方法解析：与类方法解析步骤类似，由于接口不会有父类，因此，只递归向上搜索父接口就行了。

5. 初始化

给类的静态变量初始化值，不同于准备阶段，此处是使用用于自定义的值进行赋值。

分为程序计数器、虚拟机栈、本地方法栈3个区域	<img src="https://pic3.zhimg.com/80/v2-dfc3b65b983a82e84420e1335a507e2a_1440w.jpg" alt="img" style="zoom:67%;" />

运行步骤：![Java程序运行过程](https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/Java%20%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B.png)

**为什么说java解释和编译并存？**   

​	从.class到机器码 Java通过解释器逐行解释执行，后面引入的JIT编译器运行效率高。当 JIT 编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。

​	**解释性语言**在运行程序的时候才翻译（java,Python），比如解释性basic语言，专门有一个解释器能够直接执行basic程序，每个语句都是执行的时候才翻译。这样解释性语言每执行一次就要翻译一次，效率比较低。编译型语言（C）写的程序执行之前，需要一个专门的编译过程，把程序编译成为机器语言的文件，比如exe文件，以后要运行的话就不用重新翻译了，直接使用编译的结果就行了（exe文件），因为翻译只做了一次，运行时不需要翻译，所以编译型语言的程序执行效率高。

​	8个二进制位为一个字节单位。一个英文字母（不分大小写）占一个字节的空间，一个中文汉字占两个字节的空间。英文标点占一个字节，中文标点占两个字节

#### 泛型（generics）

Java 泛型（generics）是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。

- 强化类型安全，由于泛型在编译期进行类型检查，从而保证类型安全，减少运行期的类型转换异常。
- 提高代码复用，泛型能减少重复逻辑，编写更简洁的代码。
- 类型依赖关系更加明确，接口定义更加优好，增强了代码和文档的易读性。

有两种限定通配符，⼀种是<? extends T>它通过确保类型必须是T的⼦类来**设定类型的上界** 用于灵活读取，

- 如果传入的类型不是 E 或者 E 的子类，编译不成功

另⼀种是<? super T>它通过确保类型必须是T的⽗类来设定类型的下界 用于灵活写入

下界: 用 super 进行声明，表示参数化的类型可能是所指定的类型，或者是此类型的父类型，直至 Object



泛型一般有三种使用方式:泛型类、泛型接口、泛型方法。

```
ArrayList<E>中的E称为类型变量或者类型形参
整个ArrayList<Integer>称为参数化的类型
```

数据类型

A servlet is deployed in a container. life cycle: init() service() destroy()

![](https://img-blog.csdn.net/20170720145846983?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzMwOTg3MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

Java 中使用 final 关键字来修饰常量

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210514101120469.png" alt="image-20210514101120469" style="zoom:50%;" />

自动类型转换：

```
低  ------------------------------------>  高
计算时低的类型转换为高的，然后运算
byte,short,char—> int —> long—> float —> double 
```

强制类型转换

强制转换的格式是在需要转型的数据前加上“( )”，然后在括号内加入需要转化的数据类型。有的数据经过转型运算后，精度会丢失，而有的会更加精确，

1. ​        x = (int)34.56 + (int)11.2;  // 丢失精度
2. ​        y = (double)x + (double)10 + 1;  // 提高精度<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210520160203853.png" alt="image-20210520160203853" style="zoom:33%;" />

## AOP

面向切面编程(AOP)常用于在一个访问过程中纵向切开，插入控制访问。但是AOP编程不会影响正常的执行流程，仅仅是在正常执行流程关键点进行切入编程。举个例子：公司有个人力资源管理系统已经上线，但是系统运行不稳定，有时运行很慢。为了检测系统哪里出了问题，同时又不能破坏原有系统，开发人员想要监控每个方法的执行时间，再根据这些执行时间判断问题所在。当问题解决后，再把这些监控移除。由于系统目前已经运行，如果手动修改系统中成千上万个方法，工作量非常大并且对原系统侵入太深，而且后续移除又很麻烦。

  这时，**在系统运行过程中动态添加代码，以相同代码检测每一个方法的执行，这就是采用面向切面编程**。Spring框架对于AOP提供了很好的支持。在AOP中，有一些常见的概念首先介绍给大家：

①Joinpoint（连接点）：类中可以被增强的方法被称为链接点。例如，想修改哪个方法的功能，那么该方法就是一个连接点。

②Pointcut（切入点）：对Joinpoint进行拦截的定义即为切入点。例如，拦截所有以insert开始的方法，这个定义即为切入点。

③Advice（通知）：拦截到Joinpoint后要做的事就是通知。例如，打印日志监控，通知分为前置通知、后置通知、异常通知、最终通知和环绕通知。

④Aspect（切面）：Pointcut和Advice结合就是一个切面。

⑤Target（对象）：要增强的类被称为Target。

## OO面向对象

### 对象与类

class only **exists** at compile time; an object only exists at runtime

对象有attributes(instance variable) and operations(methods)

local variable versus. instance variable

1. 局部变量未被初始化 parameter is virtually the same as local variable
2. 实例变量在类中valid被声明，且被初始化。多线程中，实例变量是多个线程共享资源，要注意同步访问时可能出现的问题
3. 类变量用static声明，一个对象修改了变量，则所以对象中这个变量的值都会发生改变

#### 实例化

Demo demo = new Demo();

1）右边的“**new** Demo”，是以Demo类为模板，在堆空间里创建一个Demo类对象（也简称为Demo对象）。

2）末尾的()意味着，在对象创建后，立即调用Demo类的**构造函数**，对刚生成的对象进行初始化。构造函数是肯定有的。如果你没写，Java会给你补上一个默认的构造函数。

3）左边的“Demo demo”创建了一个Demo 类引用变量。所谓Demo类引用，就是**以后可以用来指向Demo对象的对象引用**。

4）“=”操作符使对象引用**指向**刚创建的那个Demo对象。

3.实例化对象的语法：`类名 引用变量名 = new 构造器名() ;`
4.访问成员属性或成员方法一般语法是：`引用成员变量名.成员名`<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210514224826965.png" alt="image-20210514224826965" style="zoom: 33%;" />

### 特性：继承、多态、封装

#### 多态

（Polymorphism）按字面的意思就是“多种状态”。在Java中多态性是允许你将父对象设置成为和一个或更多的他的子对象相等的技术，赋值之后，**父对象就可以根据当前赋值给它的子对象的特性以不同的方式运作**。 **父类引用指向子类对象**

​     多态，指允许不同类的对象对同一消息做出响应。即同一消息可以根据发送对象的不同而采用多种不同的行为方式。（发送消息就是函数调用）简单的说，就是一句话：允许将子类类型的指针赋值给父类类型的指针（申明：Java中并没有指针这一说法，但是有引用的地方就会有指针）。     **解说：**在一般的继承关系中，总是父类给予子类更多的财富，让子类拥有更多的功能，而多态讲的是子类对父类的孝敬。只要将子类类型的指针赋值给父类类型的指针，那么我们就可以把父类当做子类来看待，也就是说，我们可以通过父类来使用子类的方法。这就是所说的父子情深。

   （2）作用

​     通过继承和多态，我们可以实例化一个父类对象，把各个子类当做父类的一个状态，当我们需要某个子类的时候，我们就借用指针，来得到相应子类的方法。经过这样处理，我们可以利用父类多态，方便的使用其所有子类的方法，从而使我们面对一个统一的对象（父类）来处理多种状态下的情况。

   （3）体现

​     **必要条件**        要有继承；        要有重写；        **父类引用指向子类对象**。

#### 继承与类

类和类之间的关系有三种：is-a、has-a和use-a关系。				

​				is-a关系也叫继承inheritance或泛化，比如学生和人的关系、手机和电子产品的关系都属于继承关系。

​				has-a关系通常称之为**聚类（关联）aggregation**,比如部门和员工的关系，汽车和引擎的关系都属于关联关系；关联关系如果是整体和部分的关联，那么我们称之为聚合关系；如果整体进一步负责了部分的生命周期（整体和部分是不可分割的，同时同在也同时消亡），那么这种就是最强的关联关系，我们称之为合成关系。
​				use-a关系通常称之为依赖，比如司机有一个驾驶的行为（方法），其中（的参数）使用到了汽车，那么司机和汽车的关系就是依赖关系。

**IS-A__Inheritance: via extends -- superclass subclasses**； Implements A，B多重继承    ；

final使得类不能被继承，方法不能被重写

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210506155240920.png" alt="image-20210506155240920" style="zoom: 33%;" />subclass只有一个parent

Private方法不能继承且不能被子类seen

#### 封装Encapsulation

封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，**不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性**。就好像我们看不到挂在墙上的空调的内部的零件信息（也就是属性），但是可以通过遥控器（方法）来控制空调。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。就好像如果没有空调遥控器，那么我们就无法操控空凋制冷，空调本身就没有意义了（当然现在还有很多其他方法 ，这里只是为了举例子）。



### Abstract class

抽象类，比如继承抽象类实现car.run

1. The compiler will not let you **instantiate** an abstract class ///abstractin terms of classesthat **class must be extended**, in order to be instantiated•abstractfor methodsthe **method must be overridden** in the child class
2. 子类必须implement superclass的所有抽象方法，但**父类可以没有抽象方法**，有抽象方法的一定是抽象类。
3. 抽象方法也不能用static修饰，试想一下，如果用static修饰了，那么我们可以直接通过类名调
   用，抽象类不能被实例化.
4. 抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能。

2、抽象方法不能用private修饰，因为抽象方法必须被子类实现（覆写），而private权限对于子类来
说是不能访问的，所以就会产生矛盾

3、
ADvantage:1、**由于抽象类不能被实例化**，最大的好处就是通过方法的覆盖来实现**多态**的属性。也就是运行期绑定
2、抽象类将事物的共性的东西提取出来，由子类继承去实现，代码易扩展、易维护。

子类继承父类执行顺序

**SonTest.java**

```
  public class SonTest extends FatherTest {
 
  // 然后再加入一个main函数
  public static void main(String[] args) {
  System.out.println("--子类主程序--");
  FatherTest father = new FatherTest("父亲的名字");
  father.speak();
  SonTest son = new SonTest("儿子的名字");
  son.speak();
  }
  }
```

1.先父再子，执行子类的重写方法

![img](https://img2018.cnblogs.com/blog/1080293/201809/1080293-20180927140643561-1197079835.jpg)2.静态代码块—主程序—非静态代码块—构造函数—一般方法

#### (Override)与(Overload)

重写是**子类**对**父类**的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变。**即外壳不变，核心重写！**

重写的好处在于**子类可以根据需要，定义特定于自己的行为。 也就是说子类能够根据需要实现父类的方法。**

重写方法不能抛出新的检查异常或者比被重写方法申明更加宽泛的异常。例如： 父类的一个方法申明了一个检查异常 IOException，但是在重写这个方法的时候不能抛出 Exception 异常，因为 Exception 是 IOException 的父类，只能抛出 IOException 的子类异常。

在面向对象原则里，重写意味着可以重写任何现有方法。如下  方法1.super 

```
public class A {
	private String nameA="A";	
	public void getName() {
		System.out.println("父类"+nameA);
	}
	public static void main(String[] args) {
	}
}
public class B extends A{
	private String nameB="B";	
	@Override   //注解重写方法
	public void getName() {
		System.out.println("子类"+nameB);
		super.getName();
	}
	public static void main(String[] args) {
		B b=new B();
		b.getName();
	}
}
Output：子类B
父类A
```

keyword : super. 调用父类方法、变量(非private修饰)                        super()调用父类构造器![img](https://www.runoob.com/wp-content/uploads/2013/12/overloading-vs-overriding.png)

What is the relation between class and object?

## 变量初始化

三类：1.类的属性

对于第一种变量，Java虚拟机会自动进行初始化。如果给出了初始值，则初始化为该初始值。如果没有给出，则把它初始化为该类型变量的默认初始值。

int类型变量默认初始值为0
**float类型变量默认初始值为0.0f
double类型变量默认初始值为0.0

**boolean类型变量默认初始值为false
**char类型变量默认初始值为0**(ASCII码)
**long类型变量默认初始值为0
所有对象引用类型变量（String,Array）默认初始值为null**，即不指向任何对象。

**注意数组本身也是对象，所以没有初始化的数组引用在自动初始化后其值也是null。**

2.method内local variable

必须进行初始化

3.method内的参数





## 语法

高级for()

```
int[] nums = {10,20,30,40,50};
//方法一:通过数组下标进行遍历
for(int i=0;i<nums.length;i++){
int n = nums[i];
System.out.println(n);
}
//方法二:使用for-each进行遍历 for(datatype x: nums)
    for(int i : index)的意思就是说，遍历index数组，每次遍历的对象用i 这个对象去接收。
    相当于：
    int i=0; //用于接收index数组中的某一个对象
    for(int j = 0;j<index.length;j++){
    i = index[j];
    }
for(int n:nums){
System.out.println(n);
}
```

**length:**

int i = Array.getLength(array);

a.length , s.length()  //a是int类数组， s是String

**编译运行**

类——对象——属性、方法

一个文件中只能有一个public class，表示公开接口。虚拟机会找public类中的main方法

> 第2、 public 类的名字必须和这个编译单元的文件名彻底相同，包括大小写。
>
> 对于一个public类，它是能够被项目中任何一个类所引用的，只需在使用它前import一下它所对应的class文件便可。将类名与文件名一一对应就能够方便虚拟机在相应的路径（包名）中找到相应的类的信息。若是不这么作的话，就很难去找，并且开销也会很大。

 

java中的修饰符分为类修饰符，字段修饰符，方法修饰符。根据功能的不同，主要分为以下五种。 

#### 权限访问修饰符 

public,protected,default,private,这四种级别的修饰符都可以用来修饰类、方法和字段。

public–publicinstance variables and methods are inherited•

protected–protectedinstance variables and methodsare inherited•

private– any privateinstance variables and methodsare not inherited and cannot be seen by the subclass

(一般实例变量用private修饰)

[<img src="https://iknow-pic.cdn.bcebos.com/29381f30e924b899942c9e7463061d950a7bf66e?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1/quality,q_85" alt="img" style="zoom:200%;" />](https://iknow-pic.cdn.bcebos.com/29381f30e924b899942c9e7463061d950a7bf66e?x-bce-process=image/quality,q_85)  

 private int[] age; //private 封装了class中的age属性

#### 非访问修饰符

 抽象方法控制符abstract 、静态方法控制符static 、最终方法控制符final 、本地方法控制符native 、同步方法控制符synchronized

（1）抽象方法控制符 abstract ： 抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。

一个类不能同时被 abstract 和 final 修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。

抽象类可以包含抽象方法和非抽象方法。

（2）静态方法控制符 static ：用修饰符 static 修饰的方法称为静态方法。静态方法是属于整个类的类方法；而不使用static 修饰、限定的方法是属于某个具体类对象的方法。 由于 static方法是属于整个类的，所以它不能操纵和处理属于某个对象的成员变量，而只能处理属于整个类的成员变量，即 static 方法只能处理 static的域。

**（3）最终方法控制符 final ：final类不能被继承；final方法不能重写，可被继承；final成员变量可以继承。**

用修饰符 final修饰的方法称为最终方法。最终方法是功能和内部语句不能更改的方法，即。final固定了方法所具有的功能和操作，防止当前类的子类对父类关键方法的错误定义，保证了程序的安全性和正确性。所有被 private 修饰符限定为私有的方法，以及所有包含在 final 类 ( 最终类)不能被extends

当变量是final时,通过将final局部变量"复制"一份,复制品直接作为局部内部中的数据成员.这样:当局部内部类访问局部变量 时,其实真正访问的是这个局部变量的"复制品"(即:这个复制品就代表了那个局部变量).因此:类内其他方法访问局部变量需要设置其为final

（4）本地方法控制符 native ：用修饰符 native 修饰的方法称为本地方法。为了提高程序的运行速度，需要用其它的高级语言书写程序的方法体，那么该方法可定义为本地方法用修饰符 native 来修饰。

（5）同步方法控制符 synchronized ：该修饰符主要用于多线程程序中的协调和同步



##### Static keyword    

# ![范德萨](https://images2018.cnblogs.com/blog/1295451/201808/1295451-20180815143157281-699250705.png)

**static静态成员变量：被类共享，无需初始化变量，方便调用**

静态成员变量虽然独立于对象，但是不代表不可以通过对象去访问，所有的静态方法和静态变量都可以通过对象访问（只要访问权限足够）。		this访问

 this.方法名称              
                                用来访问本类的成员方法

this();                    //访问本类的构造方法

static final:定义常量

**static方法：可重写不能重载，隐藏**，其中不能使用非静态方法(main中不能**直接**调用非静态方法)，不能使用非静态变量

instance method can invoke static method

想在不创建对象的情况下调用某个方法，就可以将这个方法设置为static。我们最常见的static方法就是main方法，只能访问static变量。因为程序在执行main方法的时候没有创建任何对象，因此只有通过类名来访问。

**import**

- 单类型导入(single-type-import)
  （例:import java.util.ArrayList; ）

- 按需类型导入(type-import-on-demand)
  （例:import java.util.*;）

  java以这样两种方式导入包中的任何一个public的类和接口

## Method

函数声明的变量时候叫Parameter,形参
函数调用的变量时候叫Argument，实参

Java语言中的“方法”（Method）在其他语言当中也可能被称为“函数”（Function）。{}框住

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210318184230744.png" alt="This用法" style="zoom: 50%;" />

java中的length属性是针对数组说的,比如说你声明了一个数组,想知道这个数组的长度则用到了length这个属性。java中的length()方法是针对字符串String说的,如果想看这个字符串的长度则用到length()这个方法



## String

String 一般指 java.lang.String 类，作为字符串.是对象不是数据类型   

对**字符串常量池**进行总结:

当用new关键字创建字符串对象时, 不会查询字符串常量池; 当用双引号直接声明字符串对象时, 虚拟机将会查询字符串常量池. 说白了就是: 字符串常量池提供了字符串的复用功能, 除非我们要显式创建新的字符串对象, 否则对同一个字符串虚拟机只会维护一份拷贝。<img src="https://img-blog.csdnimg.cn/img_convert/9b21555ad4b131f7b86d599a6d465f51.png" alt="640?wx_fmt=png" style="zoom:50%;" />

#### StringBuffer and StringBuilder

1. 操作少量的数据: 适用String
2. 单线程操作字符串缓冲区下操作大量数据: 适用StringBuilder       are **mutable** 
3. 多线程操作字符串缓冲区下操作大量数据: 适用StringBuffer       are **mutable** 

```
    String a = "hello2"; 　  
    String b = "hello";       
    String c = b + 2;       
    System.out.println((a == c));
    输出结果为:false。由于有符号引用的存在，所以  String c = b + 2;不会在编译期间被优化，不会把b+2当做字面常量来处理的

    String a = "hello2";   　
    final String b = "hello";       
    String c = b + 2;       
    System.out.println((a == c));
    输出结果为：true。对于被final修饰的变量，会在class文件常量池中保存一个副本，也就是说不会通过连接而进行访问
```


**String <--> 包装类**

String --> Integer: Integer i1 = new Integer("12"); 或者 Integer i1 = Integer.valueOf("12")
包装类 --> String: String str = 任何对象.toString();

Stringbuffer(synchronisation) vs.   new StringBuilder("cat"); 5.0后新方法

#### Scanner class 

1.把word当成delimiter myScanner.next()

2.读取primitive type values

3.Reading console input : new  Scanner(System.in)

### equals ==区别

对于基本数据类型来说，==比较的是值。对于引用数据类型来说，==比较的是对象的内存地址。

> 因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。

**`equals()`** 作用**不能用于判断基本数据类型的变量**，只能用来判断两个对象是否相等。`equals()`方法存在于`Object`类中，而`Object`类是所有类的直接或间接父类。

``equals()` 方法存在两种使用情况：

- **类没有覆盖 `equals()`方法** ：通过`equals()`比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 `Object`类`equals()`方法。
- **类覆盖了 `equals()`方法** ：一般我们都覆盖 `equals()`方法来比较两个对象中的属性（值）是否相等；若它们的属性（值）相等，则返回 true(即，认为这两个对象相等)。

**举个例子：**

```java
public class test1 {
    public static void main(String[] args) {
        String a = new String("ab"); // a 为一个引用
        String b = new String("ab"); // b为另一个引用,对象的内容一样
        String aa = "ab"; // 放在常量池中
        String bb = "ab"; // 从常量池中查找
        if (aa == bb) // true
            System.out.println("aa==bb");
        if (a == b) // false，非同一对象
            System.out.println("a==b");
        if (a.equals(b)) // true
            System.out.println("aEQb");
        if (42 == 42.0) { // true
            System.out.println("true");
        }
    }
}Copy to clipboardErrorCopied
```

**说明：**

- `String` 中的 `equals` 方法是被重写过的， `String` 的 `equals` 方法比较的是对象的值。
- 当创建 `String` 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 `String` 对象。

**一、equeals相等，那么hashCode一定相等**

**二、hashCode相等，那么equals不一定返回true**

**三、hashCode不相等，那么equals一定不相等**

为什么有了equals这样有效的方法还需要hashCode呢？

因为：

在HashSet(特性：不含有重复的内容)，有新对象加入时，会先计算对象的HashCode值来判断对象加入的位置，同时于已有的对象hashCode作比较，如果有相同的，再用equals去比较，若相同那么则不加入hashSet，若不相同，会使其加入到其他的位置。如果没有其他对象hashCode与之相同的，那么这个对象必定是一个新对象，这样就减少了equals的执行次数、先用hashCode去比较，从而大大提高了速度



将String转换成int
int guess = Integer.parseInt(StringGuess)



## ArrayList<String or int>andArray

##### array

在数组声明中包含数组长度永远是不合法的！如：int[5] arr; 。因为，声明的时候并没有实例化任何对象，只有在实例化数组对象时，JVM才分配空间，这时才与长度有关。在数组构造的时候必须指定长度，因为JVM要知道需要在堆上分配多少空间。数组不是集合，它只能保存同种类型的多个原始类型或者对象的引用

arraylist:建立在heap上 ArrayList <Integer>

是一个特殊的数组--动态数组。来自于System.Collections命名空间；通过添加和删除元素，就可以动态改变数组的长度。

```
ArrayList arr = new ArrayList(3);//初始容量为3
ArrayList<String> arr = new ArrayList<E>();
ArrayList arr1 = new ArrayList(); //不初始化刚开始的数组容量，当数组容量满时数组会自动一当前数组容量的2倍扩容
arr.add()    
arr.remove()
arr.size() arr.get()
boolean inIt = arr.constains(f)
arr.isEmpty()
```

boolean[] hitsArray = new boolean[2]                        

 二维数组int a【3】【4】//3行4列



## JAVA library API    

**API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数或类，目的是提供应用程序与开发人员基于某软件或硬件的以访问一组的能力，而又无需访问源码，或理解内部工作机制的细节。**

超类：java.lang.Objectis the ultimate parent of **EVERY** class in java

import java.util.ArrayList; //We need to know what package the class is in

java.lang provides fundamental自动部署 

包括Math.random()是令系统随机选取大于等于 0.0 且小于 1.0 [0,1)的伪随机 double 值

   <img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210525214409865.png" alt="image-20210525214409865" style="zoom:33%;" />另一种方法

Math.abs();                   Math.round();参数上加0.5，然后进行下取整 

Math.max(a,b);

```
//生成97-122的int型的整型
int` `intValue=(``int``)(Math.random()*``26``+``97``);

```

java.io: input output

java.awt: 画画painting images, users interfaces

#### JDK Class Library

Lots of classes in the API are abstract

java.lang-- Provides classes that are fundamental to the design of the Java programming language.

java.io-- Provides for system input and output through data streams, serialization and the file system.

java.awt-- Contains all of the classes for creating user interfaces and for painting graphics and images.

#### Main函数 psvm

```
什么是public
因为要在类外面调用main()所以是public
为什么是static
因为系统开始执行一个程序前,并没有创建main()方法所在类的实例对象,它只能通过类名类调用主方法main()作为程序入口,所以该方法是static
为什么是void
因为主方法没有返回值
为什么main
主方法名
为什么是String args[]或者String[] args？
这表示给主方法传一个字符串数组。String[] args是专门用来接收命令行参数的。并默认从args[0]开始接收，然后依次是args[1]、args[2]、args[3]…并且在命令行的输入的字符串中默认以“ ”为分隔符。
        public static void main(String args[]){
        String s1=args[0];
        String s2=args[1];
        String s3=args[2];
        System.out.println(s3);
        }
        打开cmd，运行指令 java E i love “China”  输出：China  
        当输入 ebu java program //ebu==args[0]  java==args[1]   
        当输入 "ebu java program"  // args[0] == ebu java program
```

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210506162352000.png" alt="image-20210506162352000" style="zoom: 50%;" />

### interface  接口

```
interface 接口名称 [extends 其他的接口名] {
        // 声明变量
        // 抽象方法，无内容 JDK1.8后可以定义方法by default static
}
```

**有时必须从几个类中派生出一个子类，继承它们所有的属性和方法**。但是，Java不支持**多重继承**。有了接口，就可以得到多重继承的效果。

接口(interface)是抽象方法和常量值的定义的集合。

从本质上讲，**接口是一种特殊的抽象类，这种抽象类中只包含常量和方法的定义，而没有变量和方法的实现。**
/*在JAVA中，**一个类无法继承自多个类，但是可以实现多个接口，使用关键字implements**
                                        多个接口之间使用“,”隔开  多个接口之间，没有先后顺序
    这个类叫做实现类，这个类必须实现所有接口的所有方法
 */**接口与抽象类的区别：**

接口里面不可以实现方法体，抽象类可以实现方法体

接口可以多继承接口，抽象类不可以

接口需要被子类实现，抽象类是被子类继承（单一继承）

接口中**只能有公有的方法和属性而且****必须赋初始值**，抽象类中可以有私有方法和属性

接口中**不能存在静态方法**，但是属性可以是final，抽象类中方法中可以有静态方法，属性也可以;   接口的所有的成员必须要public

4)接口中所有的属性是隐式的static和final的

public class Bat **implements** Flyable,Bitable;<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210506164510132.png" alt="image-20210506164510132" style="zoom:50%;" />interface与抽象类

**Qustion:**

1.为什么不直接在类里面写对应的方法, 而要多写1个接口(或抽象类)?

2.既然接口跟抽象类差不多, 什么情况下要用接口而不是抽象类.

3.为什么interface叫做接口呢? 跟一般范畴的接口例如usb接口, 显卡接口有什么联系呢?

1.为了使用多态，方便调用时重写1个对象方法 而不是重载多个



#### garbage collection

**Stack******(local variable and methods)***



**Heap******(objects and array)****实例变量在对象中，可被垃圾收集

**在Java虚拟机中，对象是在Java堆中分配内存的，这是一个普遍的常识。****但是，有一种特殊情况，那就是如果经过逃逸分析后发现，一个对象并没有逃逸出方法的话，那么就可能被优化成栈上分配。这样就无需在堆上分配内存，也无须进行垃圾回收了。**

**（1）程序内存布局场景下，堆与栈表示两种内存管理方式；**<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210508150143938.png" alt="image-20210508150143938" style="zoom: 50%;" />





object的life取决于references

**Class variable ,methods use:STATIC** 

static{   } //set static final 常量

static final变量在静态存储空间，被所有线程共享。static final变量可以在定义时初始化。static final变量可以在静态代码块中初始化。
final成员变量存储在对象中，不同对象有不同的值。 final变量可以在定义时初始化。  final变量可以在构造函数中初始化。

## 包装类wrapper class

8种对应 （Integer String Byte Short Long Boolean Double Float）

自动装箱（Autoboxing）：把一个基本类型的变量，直接赋值给对应的包装类变量，或者赋值给Object变量（Object是所有类的父类，子类对象可以直接赋给父类变量----Java的向上自动转型特性）如：

　　　　Integer i=3;或Object j=4;

自动拆箱（AutoUnboxing）：把一个包装类变量，直接赋值给一个基本类型的变量，如：

　　　　int a=i;

　　　　注意：int b=j;编译会报错，原因是：Java有向上自动转型特性，但不能自动向下转型，想要转要加强制转换，如：

　　　　int b = (Integer)j;

**Recursion vs. Iteration**

递归(recursion)实际上不断地深层调用函数，**直到函数有返回才会逐层的返回**，因此，递归涉及到运行时的堆栈开销（参数必须压入堆栈保存，直到该层函数调用返回为止），所以有可能导致堆栈溢出的错误；但是递归编程所体现的思想正是人们追求简洁、将问题交给计算机，以及将大问题分解为相同小问题从而解决大问题的动机。



### GUI

#### Swing组件

如图所示：swing组件主要可分为三个部分，后面会详细介绍

（1）顶层容器:：常用有JFrame(默认size（0）and invisible)，JDialog

（2）中间容器：**JPanel**，JOptionPane，JScrollPane，JLayeredPane 等，主要以panel结尾。

（3）基本组件：JLabel，JButton，JTextField，JPasswordField，JRadioButton 等。


java.awt（更慢） vs.  javax.swing（more efficient, consistensy across system written by pure JAVA）

Frame是Window的子类，一个Frame对象就是一个有标题有边界的顶层窗口。(默认**BorderLayout**)

Panel是最简单的容器类，是Container的子类。（默认**FlowLayout**）一个Panel对象就是要给应用程序提供空间，用来添加组件，包括其它的Panel对象。

Component（Container是Component的子类），Component是基类

[Swing](http://c.biancheng.net/swing/) 中使用 JTextField 类实现一个单行文本框，它允许用户输入**单行**的文本信息

#### Layout

flowlayout          gridlayout         borderLayout

myframe.add(button)

5.0后允许我们可以**省去**调用**getContentPane**()而直接在容器内应用add(),setLayout()和remove()。然而，我们还是不能忽略了ContentPane，即使我们可能将不会再使用ContentPane来添加部件到容器。







### Exception

Using **exception**让run-time error 在compile time被捕获，**更有效**

### <img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-12/Java%E5%BC%82%E5%B8%B8%E7%B1%BB%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84%E5%9B%BE2.png" alt="img" style="zoom:33%;" />![image-20210920151056607](C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210920151056607.png)

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210920151056607.png" alt="image-20210920151056607" style="zoom: 50%;" />

在 Java 中，所有的异常都有一个共同的祖先 `java.lang` 包中的 `Throwable` 类。**`Throwable` 类有两个重要的子类** `Exception`（异常）和 `Error`（错误）。`Exception` 能被程序本身处理(`try-catch`)， `Error` 是**无法处理**的(只能尽量避免)。

`Exception` 和 `Error` 二者都是 Java 异常处理的重要子类，各自都包含大量子类。

当java识别到**runtime** error ,an exception is thrown

- **`Exception`** :程序本身可以处理的异常，可以通过 `catch` 来进行捕获。`Exception` 又可以分为 受检查异常(必须处理) 和 不受检查异常(可以不处理)。

- **`Error`** ：`Error` 属于程序无法处理的错误,大多数错误与代码编写者执行的操作无关，而表示代码运行时 JVM（Java 虚拟机）出现的问题 ，我们没办法通过 `catch` 来进行捕获 。例如，Java 虚拟机运行错误（`Virtual MachineError`）、虚拟机内存不够错误(`OutOfMemoryError`)、类定义错误（`NoClassDefFoundError`）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。

  eg:   Exception in thread "main" java.lang.AssertionError:

  

try catch：自己处理异常

  * try {
    *可能出现异常的代码
    *} catch（Exception e）{

    e.printStackTrace();

    *如果出现了异常类A类型的异常，那么执行该代码
    *} ...（catch可以有多个）

  * finally {
    *最终肯定必须要执行的代码（例如释放资源的代码）
    *}

#### throw

​	throw new Exception("What are u doing");

（1）throws用于方法头，表示的只是异常的申明，而throw用于方法内部，抛出的是异常对象。

（2）throws可以一次性抛出多个异常，而throw只能一个
（3）throws抛出异常时，它的上级（调用者）也要申明抛出异常或者捕获，不然编译报错。而throw的话，可以不申明或不捕获（这是非常不负责任的方式）但编译器不会报错。

#### **Assertion**

判断语句是否为真，假——》

### **Sort**

若一个类要实现Comparator接口：它一定要实现compareTo(T o1,T o2) 函数，但可以不实现 equals(Object obj) 函数。 
为什么可以不实现 equals(Object obj) 函数呢？ 因为任何类，默认都是已经实现了equals(Object obj)的。 [Java](https://so.csdn.net/so/search?q=Java&spm=1001.2101.3001.7020)中的一切类都是继承于java.lang.Object，在Object.java中实现了equals(Object obj)函数；所以，其它所有的类也相当于都实现了该函数。 
(2) int compare(T o1, T o2) 是“比较o1和o2的大小”。返回“负数”，意味着“o1比o2小”；返回“零”，意味着“o1等于o2”；返回“正数”，意味着“o1大于o2”。 
(3) 这个排序算法是“经过调优的合并排序”算法 
我们不难发现：Comparable相当于“内部比较器”，而Comparator相当于“外部比较器”。 

## Collection

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190717224652123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phdmFlZV9nYW8=,size_16,color_FFFFFF,t_70)<img src="https://img-blog.csdn.net/20180807200307368?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MzczMjg1/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="img" style="zoom:67%;" />包括set，list，queue



Collection中的集合，元素是孤立存在的（理解为单身），向集合中存储元素采用一个个元素的方式存储。

Map中的集合，元素是成对存在的(理解为夫妻)。每个元素由键与值两部分组成，通过键可以找对所对应的值。

Collection中的集合称为单列集合，Map中的集合称为双列集合。

需要注意的是，Map中的集合不能包含重复的键，值可以重复；每个键只能对应一个值。

Map中常用的集合为HashMap集合、LinkedHashMap集合。


### 容器

 Java中容器主要分为两大类：Collection和Map

容器可以管理对象的生命周期、对象与对象之间的依赖关系，您可以使用一个配置文件（通常是[XML](https://baike.baidu.com/item/XML/86251)），在上面定义好对象的名称、如何产生（Prototype 方式或Singleton 方式）、哪个对象产生之后必须设定成为某个对象的属性等，在启动容器之后，所有的对象都可以直接取用，不用编写任何一行程序代码来产生对象，或是建立对象与对象之间的依赖关系。

### List

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20220211171122420.png" alt="image-20220211171122420" style="zoom:67%;" />

### Hashmap

HashSet底层是HashMap，HashMap的底层（数组+链表+红黑树)来实现的，它之所以有相当快的查询速度主要是因为它是通过计算散列码来决定存储的位置。

**HashMap 中，键值对的存储是通过1. put(key,vlaue)** 

**get方法，传入key，就可以查询到value**。 **HashMap的底层数组长度总是2的n次方**，

**HashTable**,不同的是:key和value的值均不允许为null;它支持线程的同步，即任一时刻只有一个线程能写Hashtable,因此也导致了Hashtale在写入时会比较慢。 

解决HashMap的哈希碰撞？

Java中HashMap是利用“拉链法”处理HashCode的碰撞问题。在调用HashMap的put方法或get方法时，都会首先调用hashcode方法，去查找相关的key，当有冲突时，再调用equals方法。hashMap基于hasing原理，我们通过put和get方法存取对象。当我们将键值对传递给put方法时，他调用键对象的hashCode()方法来计算hashCode，**然后找到bucket（哈希桶）位置来存储对象**。当获取对象时，通过键对象的equals()方法找到正确的键值对，然后返回值对象。**HashMap使用链表来解决碰撞问题，当碰撞发生了，对象将会存储在链表的头节点。hashMap在每个链表节点存储键值对对象。当两个不同的键却有相同的hashCode时，他们会存储在同一个bucket位置的链表中。键对象的equals()来找到键值对**

HashCode是使用Key通过Hash函数计算出来的，由于不同的Key，通过此Hash函数可能会算的同样的HashCode，所以此时用了拉链法解决冲突，把HashCode相同的Value连成链表. 但是get的时候根据Key又去桶里找，如果是链表说明是冲突的，此时还需要检测Key是否相同

Hashmap扩容：扩大[数组长度](https://so.csdn.net/so/search?q=数组长度&spm=1001.2101.3001.7020)，对原数组进行rehash操作，把原数组copy到新数组中 resize()



**deque**（double-ended queue，双端队列）是一种具有[队列](https://baike.baidu.com/item/队列/14580481)和[栈](https://baike.baidu.com/item/栈/12808149)的性质的[数据结构](https://baike.baidu.com/item/数据结构/1450)。双端队列中的元素可以从两端弹出)。**虽然没有严格要求 Deque 实现禁止插入 null 元素，但强烈鼓励他们这样做。**强烈建议允许使用 null 元素的任何 Deque 实现的用户不要利用插入 null 的能力。这是因为 null 被各种方法用作特殊返回值来指示双端队列为空。

Queue 中 remove() 和 poll()都是用来从队列头部删除一个元素。
在队列元素为空的情况下，remove() 方法会抛出NoSuchElementException异常，poll() 方法只会返回 null 。

<img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jYXJ0b29uLWJsb2cub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tLzEzOTg1OTQ5NjktNWNjZTVlOWFkYTczZF9hcnRpY2xleC5qcGc?x-oss-process=image/format,png" alt="img" style="zoom:80%;" />



使用java的同学请注意，如果你使用Stack的方式来做这道题，会造成速度较慢； 原因的话是Stack继承了Vector接口，而Vector底层是一个Object[]数组，那么就要考虑空间扩容和移位的问题了。 可以使用LinkedList来做Stack的容器，**因为LinkedList实现了Deque接口，所以Stack能做的事LinkedList都能做，其本身结构是个双向链表，扩容消耗少。** 但是我的意思不是像100%代码那样直接使用一个LinkedList当做队列，那确实是快，但是不符题意。 贴上代码，这样的优化之后，效率提高了40%，超过97%。

Vector 类实现了一个动态数组。和 ArrayList 很相似，但是两者是不同的：

- Vector 是同步访问的。
- Vector 包含了许多传统的方法，这些方法不属于集合框架。

**使用场景**

1.需要线程同步

  使用Collections工具类中synchronizedXxx()将线程不同步的ArrayDeque以及LinkedList转换成线程同步。

2.频繁的插入、删除操作：LinkedList

3.频繁的随机访问操作：ArrayDeque

4.未知的初始数据量：LinkedList

list.add()      list.remove()

PriorityQueue中常用的方法很多。来看几个常用的。

**（1）add：插入一个元素，不成功会抛出异常**

public boolean add(E e) { return offer(e);}

我们看到add方法其实是通过调用offer方法实现的。我们直接看offer方法

**（2）offer：插入一个元素，不能被立即执行的情况下会返回一个特殊的值（true 或者 false）**

## File

### Stream 

1 处理的数据单位不同，可分为：字符流，字节流

2.数据流方向不同，可分为：输入流，输出流

3.功能不同，可分为：节点流，处理流。<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211101110408278.png" alt="image-20211101110408278" style="zoom: 67%;" />

过滤流就是对节点流进行一系列的**包装**。例如BufferedInputStream和BufferedOutputStream，使用已经存在的节点流来构造，提供带缓冲的读写，提高了读写的效率，以及DataInputStream和DataOutputStream，使用已经存在的节点流来构造，提供了读写Java中的基本数据类型的功能。他们都属于过滤流。bytestream        characterstream

out就是System里面的一个静态数据成员，而且这个成员是java.io.PrintStream类的引用。如下图，被关键字static修饰的成员可以直接通过"类名.成员名"来引用，而无需创建类的实例。所以System.out是调用了System类的静态数据成员out。 

OutputStreamWriter是从字符流到字节流的桥接怎么理解？

     1、字符的输出需要通过字符流来操作，但是本质最后还是通过字节流输出到计算机上进行存储的
    
     2、 因此OutputStreamWriter流的作用就是利用字节流作为底层输出流然后构建字符输出流，字符输出流输出字符到流中，然后通过指定的字符集把流中的字符编码成字节输出到字节流中，其作用就是一个桥梁，使得双方链接起来

OutputStream需要封装在PrintWriter中以使用 println.

在try and catch中写read and write

FileReader fr = new FileReader()

BufferedReader   in = new BufferedReader(new InputStreamReader(socket.getInputStream()));        

PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())), true);

## Questions

只要是客户端通过访问服务器调取计算或者存储资源的，统统都是 C/S 架构。所谓的 Browser-Server 架构其实是 C/S 架构的一种特殊的实现形式，而不是其对立面。

float i =1;                          **java方法总是以小写开头**

println(i)   //1.0             println在结尾加上换行符，将输出光标定位在下一行的开始

#### 错误

runtime or compile time

1. java.lang.NullPointerException
2. OutOfBounds
3. 

#### java需要标识符

```
（1）类的内部不能直接写代码，但可以定义变量，代码只能写在方法内部，作为方法体。main是很特殊的方法。
（2）出错往往是不仔细，导致花括号｛或｝位置往前或往后，或者是多，也可能是少加花括号，导致语句被排除在方法之外，直接处在类当中。
（3）也可能是类当中直接忘记写方法。
```

而**深复制**则不同，它不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法**递归复制**到新对象上。

## 补充

<img src="https://img-blog.csdnimg.cn/20200706205605930.JPG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW95YW5namlhbjcyNA==,size_16,color_FFFFFF,t_70" alt="img" style="zoom: 67%;" />

**单核cpu同一时间只能运行一个线程**

区别：进程是操作系统分配资源的基本单位，线程是任务调度和执行的

**1.CPU角度来看:**

我们以Intel的Core i5-8250U为例来举例,它是[四核八线程](https://product.pconline.com.cn/so/s63153/)的CPU ,

我认为是一个CPU集成了4个核心,一般来说一个核心对应一个线程,Intel通过超线程技术来实现一个核心对应2个线程,所以它是四核8线程.

线程数：是同一时刻设备能并行执行的程序个数,**这里说的线程是CPU级别的,不是java里的线程.**

**2.操作系统角度:**

**在操作系统中,进程是最小的资源分配单位,在一个进程中可以有多个线程**.如下



 

 我们可以看到这个任务管理器的图,我电脑是4核8线程的CPU,我的电脑四核八线程，是采用超线程技术将一个物理处理核心模拟成两个逻辑处理核心.

我认为,一个逻辑处理器核心同一时间点只能执行一个进程,那理论上最多应该同时执行8个进程啊.

我的电脑同时开启了213个进程,2900个线程,那它是怎么处理的呢?我找了下资料

原来操作系统是采用的是时间片轮转的抢占式调度方式，每个进程有各自独立的一块内存，使得各个进程之间内存地址相互隔离,

由于CPU的执行效率非常高，时间片非常短，在各个任务之间快速地切换，给人的感觉就是多个任务在“同时进行”.
