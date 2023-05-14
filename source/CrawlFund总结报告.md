# CrawlFund总结报告

本项目可爬取天天基金网上的所有基金，辅助对基金投资的选择，包括基金代码,基金名称,单位净值,累计净值, 日增长率,   近1周,  近1月,  近3月,  近6月,  近1年,  近2年,  近3年,  今年来,  成立来的收益率等信息；实现了单个基金成立以来历史波动数据的爬取和基于echart的数据可视化，方便复盘投资决策；实现了多线程爬取二级网页的经理信息并写入csv

## 寻找思路

### 1.分析网站

1.首先来到[天天基金——基金排行]([http://fund.eastmoney.com/ fundranking.html](http://fund.eastmoney.com/jzzzl.html)) ，分析要爬取的内容![图形用户界面, 应用程序  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)

通过基金简称中的超链接，我们可以跳转到某个基金的首页，观察到页面的网址由首页地址加上基金代码组成。在详情页我们可以得到基金规模、基金经理、历史单位净值等信息。![图形用户界面, 应用程序  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image004.png)

 

通过对比定位发现，实时的排行数据根据客户端渲染生成，fundranking.html中的<div class="space6">下的<table id="dbtable" >分割了每一行的数据，在排行首页我们要想办法获取到50个基金（当前页面）的**基金代码，历史收益率和单位净值等信息。**

### 2.抓包分析

![图形用户界面, 文本, 应用程序  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image006.png)

在这里历史信息不在这个包中，应该在其他的包里，于是点击下一页，重新进行抓包。发现每次点击下一页时，都会发一个这个包
 对这个包进行分析，发现响应是ASP格式（和之前的html不同），并且我们要的历史数据也在这里面。

![图形用户界面, 应用程序  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image008.png)

 

![图形用户界面, 文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image010.png)

 

2.在F12-Network的response中我们发现到带有上述信息的数据包封装在ASP函数中，我们将Request URL中的地址复制下来，开启一个新页面进行访问，发现响应的内容如下，aspx格式，但是很明显，内容并不是我们想要的，猜想应该是页面对这个请求地址做了反扒。![img](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image012.png)

经过几次尝试，发现这个Request URL中的地址并不能直接访问，需要对请求投做特殊处理，也就是在发起对这个URL的请求时，请求头中要告诉浏览器，它是从那个网址跳转过来的，也就是不能直接访问这个URL，需要重借助另一个网址进行跳转，不然服务器会识别为爬虫行为，然后返回错误的数据。这个中间网址一般为Headers中的Referer,如下图所示。

![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image014.png)

所以在之后的代码编写环节要注意对headers的处理。 

Request URL: [http://fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=all&rs=&gs=0&sc=6yzf&st=desc&sd=2021-04-11&ed=2022-04-11&qdii=&tabSubtype=,,,,,&pi=1&pn=50&dx=1&v=0.12011115027658459](Request URL: http:/fund.eastmoney.com/data/rankhandler.aspx?op=ph&dt=kf&ft=all&rs=&gs=0&sc=6yzf&st=desc&sd=2021-04-11&ed=2022-04-11&qdii=&tabSubtype=,,,,,&pi=1&pn=50&dx=1&v=0.12011115027658459)后面的字符串很容易看出来和排序方式、升降序、时间有关，把他去掉也不影响最后的响应内容。

最后剩下的就好判断了，一个是基金代码，一个是当前页面，还有一个是每页显示的数据量，有了这些在进行翻页就简单多了。

不过通过每次改变pageIndex进行翻页，我感觉有些麻烦，所以就尝试改变pageSize来在一个页面中获取所有的数据，没想到还真的可以，这样就可以指定pageSize的大小来获取数据，而不用翻页多次发请求，方便了许多。

 

 

\3. 

 

 

## 代码编写

![电脑萤幕的截图  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image016.png)第一次伪装headers测试后发现 如果request URL请求带的参数错误天天基金会给你返回空白的 200结果。所以我们需要搞清楚Query String parameters的含义![文本  低可信度描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image018.png)

通过不断的调包抓包发现，ft表示基金类型（股票、混合、QDII）；sc表示排序方式，可根据不同时间周期的收益or净值排序；st表示升降序选择；sd、ed表示自定义时间周期（默认一年）；pi:x 表示当前排序下从第x个基金开始，**pn表示response将发送的基金数量**。

![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image020.png)

 

第一阶段 我们的任务是抓取3000条基金的基本信息（近6月收益率降序排序）并将数据保存在csv文件中。

编写class GetPage 来处理请求和获取数据 接着class Processdata 来进一步储存数据

![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image022.png)

在解析完带参请求后把数据保存，可以将数据保存在数据库中持久化

![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image024.png)

第二阶段，我们想要实现爬取单个基金的历史净值数据

首先打开https://fundf10.eastmoney.com/jjjz_162719.html，进行翻页操作，查看后台请求Preview

![图形用户界面, 应用程序  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image026.png)

分析完请求参数后根据同样的方法构造请求![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image028.png)

这部分代码的主要难点是对每一天数据的处理分割和分页获取操作

对数据解析：  ![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image030.png)

在terminal的信息展示![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image032.png)

 

 

 

使用yield generator 把每一页的数据添加到对象的属性中，实现数据的持久化，方便迭代器输出![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image034.png)

最后生成的csv文件包含自成立以来的净值信息（若乱码 注意文件打开的编码格式根据操作系统设置，UTF-8 or GBK）![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image036.png)

 

 

 

 

第三阶段，实现基金收益可视化

计划实现收益折线图和当日收益柱形图两种形式

\1.    导入pandas包处理csv数据，通过改变min_date可以实现统计已往任意时刻投入10000本金到现在的收益明细

![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image038.png)

导入pyecharts 实现可视化

pyecharts是一款将echarts封装到python中的一款开源框架，它提供了一个叫setOptions的方法，通过这个方法我们传入一个options就可以生成一个图表了，我们只需维护options变量。通过编辑Bar,Line,Grid对象,我们可以绘制柱形图，折线图和页面的布局![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image040.png)

 

 

 

柱形图源代码![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image042.png)

目录下生成的HTML： ![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image044.png)

 

示例：生成的162719.html效果图

![图片包含 工具, 铅笔  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image046.png)

//也可导入snapshot_selenium包，输出png格式![img](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image048.png)

 

 

第四阶段，为了爬取每个基金的详细信息，并发访问大量的URL，我们需要选择一种最适合该任务的编写方式。

 

有两个因素能够影响一个并发应用程序的性能：上下文切换和可扩展性。上下文切换在所有运行的任务间公平地共享 CPU 所需的工作，称为上下文切换，能够影响应用程序的性能。对同步应用程序来说，这项工作是由操作系统完成的，而且基本上是一个黑箱，不需要配置或微调选项。对异步应用程序来说，上下文切换是由循环完成的。默认的循环实现由asyncio提供，是用 Python 编写的，效率不是很高。

在以下场景时，我们可以说异步可能比同步快：存在高负载（没有高负载，访问的高并发性就没有优势）任务是 I/O 绑定的（如果任务是 CPU 绑定的，那么超过 CPU 数目的并发并没有帮助）你查看单位时间内的平均请求处理数。如果你查看单个请求的处理时间，甚至异步可能更慢，因为异步有更多并发的任务在争夺 CPU。

对于爬取3000+数据并将其写入文件的IO密集型任务，异步开发无疑是效率更高。

对于异步爬虫又有以下3种实现方式

1.多线程，多进程

好处：可以为相关的阻塞操作单独开辟线程或者进程，阻塞操作就可以异步执行

弊端：无法无限制的开启多线程或者多进程(如果不限制的开启了，会严重消耗CPU资源，这样会导致响应外界效率变慢)

2.线程池

好处：可以降低系统对进程或者线程创建和销毁的一个频率，从而降低系统的开销

弊端：线程池或者进程池使用有上限

3.单线程+异步协程

最大的优势就是协程极高的执行效率。因为子程序切换不是线程切换，而是由程序自身控制，因此，没有线程切换的开销，和多线程比，线程数量越多，协程的性能优势就越明显。

第二大优势就是不需要多线程的锁机制，因为只有一个线程，也不存在同时写变量冲突，在协程中控制共享资源不加锁，只需要判断状态就好了，所以执行效率比多线程高很多。因为协程是一个线程执行，那怎么利用多核CPU呢？最简单的方法是多进程+协程，既充分利用多核，又充分发挥协程的高效率，可获得极高的性能。

 

 

Version.1 线程池+同步锁

启动另一个进程，并在这个进程中使用多线程（线程池）来爬取网页，线程的任务调度交给线程池处理。线程池的大小可在Config.py中设置，这里设置为4核*8 =32

![文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image050.png)

爬取100条数据并同步写入csv的用时为41.646127 秒![img](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image052.png)

我们可以看到爬取300条数据并同步写入csv的用时为133.6秒![手机屏幕的截图  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image054.png)

当任务数>32时 随着数据量的增加，线程池开销成倍增加。

线程池内部是通过一个工作队列去维护任务的执行的。这将任务和线程分离，给了线程池优化线程数量的空间，解决了资源分配的问题，这些可以使应用程序和服务器应用响应更快。使用线程池是一个看似很不错的解决方案，但是它却有一个根本性的缺陷：连续争用问题。也就是多个线程在申请任务时，为了合理地分配任务要付出锁资源，对比快速的任务执行来说，这部分申请的损耗是巨大的。

 

Version.2 单线程+异步协程

asyncio是Python3.4版本引入的标准库，asyncio 往往是构建 IO 密集型的最佳选择。asyncio 提供一组 高层级 API 用于:

并发地 运行 Python 协程 并对其执行过程实现完全控制;

执行 网络 IO 和 IPC;

通过 队列 实现分布式任务; ![img](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image056.png)

同步 并发代码;

爬取300条数据并同步写入csv的用时为55.25秒，使用主动出让的程序调度方式使得效率提升了接近100%

![图形用户界面, 文本  描述已自动生成](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image058.png)

接下来可再设置一个交互界面 供用户选择获取基金详细信息的方式![img](file:///C:/Users/Stan/AppData/Local/Temp/msohtmlclip1/01/clip_image060.png)

## 总结

实现了3大功能：爬取基金的近1、3、6月，近1、3年及成立来的收益率，前基金经理及其任职时间、任职来的收益率及总的任职时间；任意基金的收益趋势图；在爬虫中使用异步实现高性能的数据爬取操作。

待发展功能：本地数据的索引排序，使用GEVENT框架的协程使用。