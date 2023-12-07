# Signal System

Distortion happens in when a composite signal transmission suffers from the delayed frequency.(equalizer can compensate)

音频文件 在被编码后，传输过程中的 速率（传输速度），在视频工作者里 所谓的对应音频的 “码率”，单位是 bps (每秒内传输bit的数量)。在数字音频中， 音频播放时的 传输速率（比特率）对音质也会产生影响。

码字（Code Word）是指利用Huffman码编码后的信号。

一帧包含m个数据位（即报文）和r个冗余位（校验位）。

| S .No. | ANALOG COMMUNICATION                                         | DIGITAL COMMUNICATION                                        |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 01.    | In analog communication analog signal is used for information transmission. | In digital communication digital signal is used for information transmission. |
| 02.    | Analog communication uses analog signal whose amplitude varies continuously with time from 0 to 100. | Digital communication uses digital signal whose amplitude is of two levels either Low i.e., 0 or either High i.e., 1. |
| 03.    | It gets affected by noise highly during transmission through communication channel. | It gets affected by noise less during transmission through communication channel. |
| 04.    | In analog communication only limited number of channels can be broadcasted simultaneously. | It can broadcast large number of channels simultaneously.    |
| 05.    | In analog communication error Probability is high.           | In digital communication error Probability is low.           |
| 06.    | In analog communication noise immunity is poor.              | In digital communication noise immunity is good.             |
| 07.    | In analog communication coding is not possible.              | In digital communication coding is possible. Different coding techniques can be used to detect and correct errors. |
| 08.    | Separating out noise and signal in analog communication is not possible. | Separating out noise and signal in digital communication is possible. |
| 09.    | Analog communication system is having complex hardware and less flexible. | Digital communication system is having less complex hardware and more flexible. |
| 10.    | In analog communication for multiplexing [Frequency Division Multiplexing (FDM) ](https://www.geeksforgeeks.org/frequency-division-and-time-division-multiplexing/)is used. | In Digital communication for multiplexing [Time Division Multiplexing (TDM)](https://www.geeksforgeeks.org/frequency-division-and-time-division-multiplexing/) is used. |
| 11.    | Analog communication system is low cost.                     | Digital communication system is high cost.                   |
| 12.    | It requires low bandwidth.                                   | It requires high bandwidth.                                  |
| 13.    | Power consumption is high.                                   | Power consumption is low.                                    |
| 14.    | It is less portable.                                         | Portability is high.                                         |

### dB

**dB的换算公式是比较的比值单位**

对于功率，dB = 10*lg(A/B)。对于电压或电流，dB = 20*lg(A/B)。此处A，B代表参与比较的功率值或者电流、电压值。

**2.    在换算时要把握一个原则，dB数值的相加 等于 倍数的相乘。**

doubling 3db quadrup 6dB increasing 8 times 9dB 

**例如：30dB 1000times of previous

**又例如：56 dB = 20dB + 30 dB + 6 dB = 10 \* 30 \* 2 = 600 倍**

## Purpose

信号传输时“通过一定的介质将模拟信号或电信号进行传输”，那么这个过程中一定会有一些信号的损失而使得我们接受到的信息不准确，造成损失的原因impairment分为：attenuation, distortion, noise

那么如何去让信号的传输更加稳定可靠，就是本课程的目的。我们关注信号的处理方式，以及信道的设计等等，以尽可能的减少impairment.

<img src="https://img-blog.csdnimg.cn/2f09eee09d6f423a84c2c4857c9be1ac.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAd29uZGVyc3RydWNrMA==,size_20,color_FFFFFF,t_70,g_se,x_16" alt="img" style="zoom: 67%;" />

### Channel

#### Channel coding

例如，考虑由两个codeword “000”和“111”组成的代码。这两个词之间的汉明距离为3，因此是*k* = 2错误检测。这意味着如果翻转一位或翻转两位，则可以检测到错误。如果三个位被翻转，则“000”变为“111”并且无法检测到错误。

例如，考虑由两个代码字“000”和“111”组成的相同的 3 位代码。汉明空间由8个字000、001、010、011、100、101、110和111组成。码字“000”和单位错误字“001”、“010”、“100”均小于或等于 1 到“000”的汉明距离。同样，码字“111”及其单位错误字“110”、“101”和“011”都在原始“111”的1汉明距离内。在这个代码中，单个比特错误总是在原始代码的 1 个汉明距离内，并且该代码可以进行*1-纠错*，即*k=1*。**“000”和“111”之间的最小汉明距离是3，**

因此，其码字之间具有最小汉明距离*d*的代码最多可以检测*d* -1 个错误，并且可以纠正 ⌊( *d* -1)/2⌋ 个错误。[[2\]](https://en.wikipedia.org/wiki/Hamming_distance#cite_note-Robinson2003-2)后一个数字也称为*[打包半径](https://en.wikipedia.org/wiki/Sphere_packing#Other_spaces)*或代码*的纠错能力*

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211130101318504.png" alt="image-20211130101318504" style="zoom:50%;" />

数字信道不能直接传输模拟信号，模拟信道也不能直接传输数字信号 。**不同的数据必须转换为相应的信号才能进行传输：模拟数据一般采用模拟信号(Analog Signal)，例如用一系列连续变化的电磁波(如无线电与电视广播中的电磁波)，或电压信号(如电话传输中的音频电压信号)来表示；数字数据则采用数字信号(Digital Signal)，例如用一系列断续变化的电压脉冲(如我们可用恒定的正电压表示二进制数1，用恒定的负电压表示二进制数0)，或光脉冲来表示。 当模拟信号采用连续变化的电磁波来表示时，电磁波本身既是信号载体，同时作为传输介质；而当模拟信号采用连续变化的信号电压来表示时，它一般通过传统的模拟信号传输线路(例如电话网、有线电视网)来传输。 当数字信号采用断续变化的电压或光脉冲来表示时，一般则需要用双绞线、电缆或光纤介质将通信双方连接起来，才能将信号从一个节点传到另一个节点。** 

**普通电话线是针对语音通话而设计的模拟信道**，适用于传输模拟信号。但是计算机产生的是离散脉冲表示的数字信号，因此**要利用电话交换网实现计算机的数字脉冲信号的传输，就必须首先将数字脉冲信号转换成模拟信号。**将发送端数字脉冲信号转换成模拟信号的过程称为调制(Modulation)；将接收端模拟信号还原成数字脉冲信号的过程称为解调(Demodulation)。将调制和解调两种功能结合在一起的设备称为调制解调器(Modem) 

​    在通信网的发展初期，所有的通信信道都是模拟信道。但由于数字技术的高速发展，数字信道可提供更高的通信服务质量，因此，过去建造的模拟信道正在被数字信道所代替。现在计算机通信所使用的通信信道在主干线路上已基本是数字信道。

### Spectral analysis

在频域，0频率也被称为直流分量，在傅里叶级数的叠加中，它仅仅影响全部波形相对于数轴整体向上或是向下而不改变波的形状。

一个函数的[傅里叶变换](https://baike.baidu.com/item/傅里叶变换)包括了原始信号中的所有信息，只是表示的型式不同。因此可以用反傅里叶变换重组原始的信号。若要完整的重组原始信号，需要有每个频率下的幅度及其[相位](https://baike.baidu.com/item/相位)，这些信息可以用二维向量、复数、或是极座标下的大小及角度来表示。在[信号处理](https://baike.baidu.com/item/信号处理)中常常考虑幅度的平方，也就是功率，所得的就是[功率谱密度](https://baike.baidu.com/item/功率谱密度)。

周期信号的平均功率等于各谐波分量幅值的[平方和](https://www.zhihu.com/search?q=平方和&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A241700599})。容易理解，周期信号的功率是离散地分布在频率为基频 ***Ω\*₀** 整数倍的谐波分量上的。

实际上，大部分的仪器及软件都用[快速傅里叶变换](https://baike.baidu.com/item/快速傅里叶变换)来产生频谱的信号。快速傅里叶变换是一种针对[采样信号](https://baike.baidu.com/item/采样信号)计算[离散傅里叶变换](https://baike.baidu.com/item/离散傅里叶变换)的数学工具，可以近似傅里叶变换的结果。

## Modulation



调制（modulation）就是对信号源的信息进行处理加到载波上，使其变为适合于[信道](https://baike.baidu.com/item/信道)传输的形式的过程，就是使载波随信号而改变的技术。广义的调制分为**基带调制和带通调制**（也称载波调制）。调制的方式有很多。根据调制信号是数字信号还是模拟信号，载波是连续波还是脉冲序列，相应的调制调制方式有模拟连续波调制、数字连续波调制、模拟脉冲调制、数字脉冲调制等。载波信号帮助我们将消息信号传输到很远的距离，

那么如何将消息信号和载波信号进行结合呢？我们知道，一个信号包括了幅度、频率和相位，那么我们可以根据消息信号的幅度来改变载波信号的幅度、频率和相位，即我们所熟知的[调幅](https://www.zhihu.com/search?q=调幅&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A373074671})、调频和调相。调制本身是一个电信号变换的过程，是按A信号的特征然后去改变B信号的某些特征值（如振幅、频率、相位等），导致B信号的这个特征值发生有规律的变化，当然 这个规律是由A信号本身的规律所决定的。由此，B信号就携带了A信号的相关信息，在某种场合下，可以把B信号上携带的A信号的信息释放出来

最早的调制概念，是模拟调制，就是我们广播还能见到的AM/FM，这个调制是把信息（声音信号，频率典型在44KHz以下）通过一系列手段，搬移到射频频率上去。

而现代数字通讯的出现，以及相应数字域/模拟域处理的分开（因为半导体器件的原因，数字和模拟）导致数字信号的调制被分成两块：一个是数字调制（就是基带信号的形成），一个是模拟调制（虽然还叫调制，其实已经退化成频谱搬移，只改变载波。但是它一点不简单。

到了后来，大家写文章的时候，基带处理的说我这是调制，射频处理的也说我这是调制

![Modulation categorization.svg](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Modulation_categorization.svg/2560px-Modulation_categorization.svg.png)

### purpose

1）通信系统中发送端的原始电信号通常具有频率很低的频谱分量，一般不适宜直接在信道中进行传输，因此，通常需要将原始信号变换成频带适合信道传输的信号。 [1] 

2）通过调制可以将多个基带信号搬移到不同的频谱处，从而更加充分的利用信道 ，提高传输性能 。 [3] 

3）调制可以扩展无线通信信号的带宽，从而提高抗干扰和抗衰落的能力。 [3] 

4）减小无线通信中发射和接受天线的尺寸。


<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211130100917047.png" alt="image-20211130100917047" style="zoom:80%;" />

PAM相当于抽样过程， PCM相当于整合了 抽样，量化，编码。

所以PCM将模拟信号变为二进制信号，所以也叫数模转换(ADC Analogue to Digital Converter)我们把输入信号通过PCM后，变成了PCM信号

carrier wave： 未受调制的周期性振荡信号称为载波，载波可以是正弦波，也可以是非正弦波（如周期性脉冲序列），**载波受调制后称为已调信号**，它含有调制信号的全波特征。一般要求正弦载波的频率远远高于调制信号的带宽，否则会发生混叠，使传输信号失真。

Case.1 矩形冲击正交函数(以数字波形来传输)

矩形冲击就是上面提到的pulse shapes，所以它的绝对下限带宽就会大于D/2=500Hz。

意思就是最小带宽的值都会比500大，而带宽大对于信号的传输是不利的，**因为对于信道的要求更高**，所以我们应该怎么减少这个带宽呢？

Case.2 Sinc函数冲击正交函数(以模拟波形来传输)

就是使用Sinc函数来替换pulse shapes充当载波，还记得上面提到，如果是用sinc传输，那么带宽下限就会正好等于D/2=500Hz

### Line code

Unipolar：单极的，所有信号电平都组织在时间轴的一侧。

Polar：极性的，信号电压水平在时间轴两侧组织

Bipolar：双极的，使用三个级别：正、零和负。一个数据元素的电压电平为零，而另一个元素在正负之间交替。

RZ：return to zero

NRZ：no return to zero

其实单纯看图的话就可以懂它的编码方式，然后PPT上有说一些各种方式的好处什么的，自行阅读下就好。这里解释下不太直观的：

曼彻斯特NRZ：曼彻斯特编码指定了哪种变化代表那个数据，同时电平的变化也只发生在每个周期的中间。在图中的曼彻斯特编码中就定义如下： 当信号由高电平变为低电平时，表示1 ；当信号由低电平变为高电平时，表示0 

### mathetical数字信号 

eg. PCM signal

为什么要正交？

空间上的正交向量 （x,y,z） ，空间上最多有8个方向互相垂直（乘积为0，

每个正交函数都是一个载波，一个载波携带一个信息，最多调制出8个信息；然后发送方发送正交函数相加的的信号，编码传输

接收方将其×一个载波就能解调出载波上的信息。

### PSD

功率谱是**功率谱密度函数（PSD）**的简称，它定义为单位频带内的信号功率。

功率谱是**针对功率信号来说**的。功率谱的推导公式相对复杂，不过幸运的是维纳-辛钦定理证明了：一段信号的功率谱等于这段信号**自相关函数的傅里叶变换。**所以求功率谱就有了两种方法：1.(傅立叶变换的平方)/(区间长度)；2.自相关函数的傅里叶变换。这两种方法分别叫做直接法和相关函数法。

功率谱这里存在着一些问题，整理如下：

**1.功率谱密度的单位是什么，看有的写的是dB，还有的说是W/Hz。**

功率谱的单位是W/Hz，单位是dB时是做了对数处理（10logX）。取对数的目的是使那些振幅较低的成分相对高振幅成分得以拉高，以便观察掩盖在低幅噪声中的周期信号。



**3.FFT和PSD都是表示的频谱特性，帮助我们找出峰值的位置，那么有了FFT为什么还要提出PSD？**

信号分为确定信号和随机信号，而确定信号又分为能量信号和功率信号，随机信号一定是功率信号。根据狄里赫利条件，能量信号可以直接进行傅里叶变换，而功率信号不行。对于无法做傅里叶变换的信号，只能走一步弯路，先求自相关，再做傅里叶。但是物理意义上就是功率谱了。不过总之得到了信号的频率特性。![image-20211217225823455](C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211217225823455.png)

复用和多址的区别，就是复用针对资源，而多址针对用户

复用（Multiplexing）这个词通常用在传输上，将一个物理信道根据时间、频率、空间等资源划分为多个虚拟信道。这么做的好处有二：一是减少管道的个数，为运营商减少线路成本；二是提升单通道的容量。从作用上看都是针对传输而言的，与具体用户无关。
多址(multiple access)则应用在接入中我们知道在同一个基站下，不同的用户利用相同的资源（同一时间，同一频率）发出通信请求肯定会发生冲突。而多址技术正是用来解决这个问题：如何划分资源块，使更多的用户终端（如手机）能够在不发生冲突的情况下获得服务。当然，处理好用户接入的问题能够提升服务质量并带来商业效益。
例：
将10MHz的频率资源，划分成5个2MHz，作为子信道，这种做法，叫复用。5个的用户使用这些子信道，每个子信道变成了用户的“址”，这叫多址。



## week4

### Spread spectrum

扩频是用编码及调制的方法来实现的,扩频通常利用类似[噪声](https://en.wikipedia.org/wiki/Noise)的序列信号结构将通常的[窄带](https://en.wikipedia.org/wiki/Narrowband)信息信号扩展到相对[宽带](https://en.wikipedia.org/wiki/Wideband)（无线电radio wave）频带上。接收器将接收到的信号相关联以检索原始信息信号。最初有两个动机：要么抵抗敌人干扰通信的努力（**抗干扰**，或 AJ），要么隐藏甚至发生通信的事实，有时称为[低拦截概率](https://en.wikipedia.org/wiki/Low_probability_of_intercept)(LPI)。[[1\]](https://en.wikipedia.org/wiki/Spread_spectrum#cite_note-ref_1-1)

[跳频扩频](https://en.wikipedia.org/wiki/Frequency-hopping_spread_spectrum)(FHSS)、[直接序列扩频](https://en.wikipedia.org/wiki/Direct-sequence_spread_spectrum)(DSSS)、[跳时扩频](https://en.wikipedia.org/wiki/Time-hopping_spread_spectrum)(THSS)、[线性调频扩频](https://en.wikipedia.org/wiki/Chirp_spread_spectrum)(CSS) 以及这些技术的组合都是扩频的形式。这些技术中的前两种技术采用伪随机数序列（使用[伪随机数发生器](https://en.wikipedia.org/wiki/Pseudorandom_number_generator)创建）来确定和控制信号在分配的带宽上的扩展模式。无线标准[IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11)在其无线电接口中使用 FHSS 或 DSSS。

- 自 1940 年代以来已知并自 1950 年代以来在军事通信系统中使用的技术在比最低要求高几个数量级的宽频率范围内“传播”无线电信号。扩频的核心原理是使用类似噪声的载波，顾名思义，带宽比相同数据速率下简单点对点通信所需的带宽要宽得多。
- 耐[干扰](https://en.wikipedia.org/wiki/Radio_jamming)（干涉）。直接序列（DS）抗连续时间窄带干扰能力强，而跳频（FH）抗脉冲干扰能力强。在 DS 系统中，窄带干扰对检测性能的影响与干扰功率量分布在整个信号带宽上的影响一样大，在这种情况下，它通常不会比背景噪声强太多。相比之下，在信号带宽较低的窄带系统中，如果干扰功率恰好集中在信号带宽上，接收信号质量将严重下降。
- 抗[窃听](https://en.wikipedia.org/wiki/Eavesdropping)。扩频序列（在 DS 系统中）或跳频模式（在 FH 系统中）通常不为任何人所不知道的信号，在这种情况下，它会掩盖信号并减少对手理解它的机会。此外，对于给定的噪声[功率谱密度](https://en.wikipedia.org/wiki/Power_spectral_density)(PSD)，扩频系统在扩频前每比特需要与窄带系统相同的能量，因此如果扩频前的比特率相同，则需要相同的功率，但由于信号功率在大带宽上扩展，信号 PSD 低得多——通常明显低于噪声 PSD——因此对手可能根本无法确定信号是否存在。然而，对于关键任务应用，尤其是那些使用商用无线电的应用，扩频无线电不能提供足够的安全性，除非至少使用长非线性扩频序列并对消息进行加密。
- 抗[褪色](https://en.wikipedia.org/wiki/Fading)。扩频信号占用的高带宽提供了一些频率分集；即，信号不太可能在其整个带宽上遇到严重的[多径](https://en.wikipedia.org/wiki/Multipath_propagation)衰落。在直接序列系统中，可以使用[瑞克接收机](https://en.wikipedia.org/wiki/Rake_receiver)来检测信号。
- 多址能力，称为[码分多址](https://en.wikipedia.org/wiki/Code-division_multiple_access)(CDMA) 或码分复用 (CDM)。多个用户只要使用不同的扩频序列，就可以在同一频段同时传输。

### OFDM

OFDM具备高速率资料传输的能力，加上能有效对抗[频率选择性衰减](https://zh.wikipedia.org/wiki/衰落)，而逐渐获得重视与采用。OFDM使用大量紧邻的正交[子载波](https://zh.wikipedia.org/w/index.php?title=子載波&action=edit&redlink=1)（Orthogonal sub-carrier），每个子载波采用传统的调制方案，进行低符号率调制。可以视为一调制技术与复用技术的结合。![image-20211219142719954](C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211219142719954.png)

优点：把高速的串行数据流变换为低速的并行数据流，从而克服多经效应。OFDM系统发送端的技术过程：映射，串/并转换，IFFT，并/串转换，传输到信道。<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211219141746530.png" alt="image-20211219141746530" style="zoom:80%;" /<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211219142031160.png" alt="image-20211219142031160" style="zoom:200%;" />

#### 多径效应

（multipath effect）：指电磁波经不同路径传播后，各分量场到达接收端时间不同，按各自相位相互叠加而造成干扰，使得原来的信号失真，或者产生错误。 Solved by .**循环前缀**

Adding **Cyclic prefix(guard interval)** can avoid ISI and maintain orthogonality.**循环前缀**是指一个[符号](https://en.wikipedia.org/wiki/Symbol_(data))的前缀，以重复结尾。接收器通常配置为丢弃循环前缀样本，但循环前缀有两个目的：

- 它提供[保护间隔](https://en.wikipedia.org/wiki/Guard_interval)以消除来自前一个符号的符号[间干扰](https://en.wikipedia.org/wiki/Intersymbol_interference)。
- 它重复符号的结尾，因此可以将频率选择性多径信道的线性卷积建模为[循环卷积](https://en.wikipedia.org/wiki/Circular_convolution)，进而可以通过[离散傅立叶变换](https://en.wikipedia.org/wiki/Discrete_Fourier_transform)变换到频域。这种方法适用于简单的频域处理，例如信道估计和均衡。

为了使循环前缀服务于其目标，它的长度必须至少等于多径信道的长度。循环前缀的概念传统上与[OFDM](https://en.wikipedia.org/wiki/Orthogonal_frequency-division_multiplexing)系统相关联，但是现在循环前缀也用于[单载波](https://en.wikipedia.org/w/index.php?title=Single_carrier&action=edit&redlink=1)系统以提高对[多径](https://en.wikipedia.org/wiki/Multipath_propagation)传播的鲁棒性。循环字首会造成带宽效益下降，故必须小于OFDM symbol长度的1/4。如：一个OFDM symbol共有256个子载波，则其循环字长度为64个比特。

