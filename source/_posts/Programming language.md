---
title: 基础语言与框架
---
# 基础语言与框架

# 面向对象语言(OO)知识点：

三个特征

- **封装** 封装，也就是 把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。
- **继承** 继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来类的情况下对这些功能进行扩展。通过继承创建的新类称为「子类」或「派生类」，被继承的类称为「基类」、「父类」或「超类」。 要实现继承，可以通过 **继承和组合** 来实现。
- **多态性** 它允许不同类的对象对相同的方法进行不同的实现，从而增加了代码的灵活性、可复用性和扩展性。 实现多态，有两种方式
1. **方法重写（Method Overriding）**：子类可以重写父类中的方法，以便根据自己的需求提供不同的实现。这样，当通过父类的引用调用这个方法时，实际执行的是子类的版本。
2. **动态绑定（Dynamic Binding）**：在运行时确定调用的是哪个实现。这使得程序能够根据对象的类型来选择正确的方法实现，而不是根据引用类型来决定。

我对面向对象的理解：**面向对象的编程方式使得每一个类都只做一件事**。**面向过程会让一个类越来越全能，就像一个管家一样做了所有的事**。而面向对象像是雇佣了一群职员，每个人做一件小事，各司其职，最终合作共赢

1.类之间的关系：

 简单的说，类和类之间的关系有三种：is-a、has-a和use-a关系。

 is-a关系也叫继承inheritance或泛化，比如学生和人的关系、手机和电子产品的关系都属于继承关系。

 has-a关系通常称之为聚类（关联）aggregation,比如部门和员工的关系，汽车和引擎的关系都属于关联关系；关联关系如果是整体和部分的关联，那么我们称之为聚合关系；如果整体进一步负责了部分的生命周期（整体和部分是不可分割的，同时同在也同时消亡），那么这种就是最强的关联关系，我们称之为合成关系。  use-a关系通常称之为依赖，比如司机有一个驾驶的行为（方法），其中（的参数）使用到了汽车，那么司机和汽车的关系就是依赖关系。

# PYTHON

它有以下几个特点：

- 面向对象：封装、继承、多态的设计方法。
- [动态语言](https://www.zhihu.com/search?q=%E5%8A%A8%E6%80%81%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)：是在运行时可以改变其结构的语言；例如，在程序运行过程中，给一个类的对象添加原本不存在的属性。
- [动态数据类型](https://www.zhihu.com/search?q=%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)：变量不需要指定类型，但需要解释器执行代码时去辨别数据类型；这个特点让编程变得简单，但代码执行效率变低。
- 高级语言：是指高度封装了的编程语言，相对于机器语言，更加适合人类编写与阅读。
- [解释型语言](https://www.zhihu.com/search?q=%E8%A7%A3%E9%87%8A%E5%9E%8B%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)：是指无需编译，直接能够将源代码解释为机器语言进行运行的语言。

从最后一个特点，我们能够看到Python是解释型语言，也就是说源代码需要通过解释器进行解释执行。

编程语言分为[编译型语言](https://www.zhihu.com/search?q=%E7%BC%96%E8%AF%91%E5%9E%8B%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)和解释型语言，我们需要了解它们的区别，才能够更好的理解编译器和解释器的区别。相信大家都知道C和C++ 这两种语言都是编译型语言。编译型语言的特点是执行速度快

编译型语言需要编译器处理，主要工作流程如下：

源代码 (source code) → 预处理器 (preprocessor) → 编译器 (compiler) → 目标代码 (object code) → 链接器 (Linker) → 可执行程序 (executables)

在这个工作流程中，编译器调用预处理器进行相关处理，将源代码进行[优化转换](https://www.zhihu.com/search?q=%E4%BC%98%E5%8C%96%E8%BD%AC%E6%8D%A2&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)（包括清除注释、宏定义、包含文件和条件编译），然后，通过将经过预处理的源代码编译成目标代码（[二进制机器语言](https://www.zhihu.com/search?q=%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%9C%BA%E5%99%A8%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)），再通过调用链接器外加库文件（例如操作系统提供的API），从而形成可执行程序，让机器能够执行。

在这个工作流程中，目标代码要和机器的CPU架构相匹配，库文件要和操作系统相匹配。

如果想在不同CPU的机器或者系统上运行C语言的源代码，就需要针对不同的CPU架构和操作系统进行编译，这样才能够在机器上运行程序。

所以，编译型语言的缺点我们就看到了，它不适合跨平台。

Python有多种解释器，比较著名的有CPython、IPython、PyPy、Jython和IronPython等。

其中CPython是Python官方默认的解释器，它是用C语言实现Pyhon解释器。

CPython是单纯的翻译器，将源代码转化为字节码之后解释执行。

而另外一款使用Python实现的Python解释器PyPy，比CPython解释器更加灵活。因为PyPy采用了[JIT技术](https://www.zhihu.com/search?q=JIT%E6%8A%80%E6%9C%AF&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)，在程序的运行性能上PyPy将近是CPython解释器执行效率的1至5倍。

1.和C/C++、Java等语言不同，Python中没有用花括号来构造代码块而是**使用了缩进的方式来表示代码的层次结构**

def roll_dice(n=2): for _ in range(1,100): 使用：代替{ }

!https://exp-picture.cdn.bcebos.com/23fd63c5cf672b5fa55afa223314f4d0b40327b1.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80

复合赋值位运算符“＆=、^ =、| =”

任务，可能事先需要设置，事后做清理工作。对于这种场景，Python的with语句提供了一种非常方便的处理方式。一个很好的例子是文件处理。with所求值的对象必须有一个__enter__()方法，一个__exit__()方法。

紧跟with后面的语句被求值后，返回对象的__enter__()方法被调用，这个方法的返回值将被赋值给as后面的变量。当with后面的代码块全部被执行完之后，将调用前面返回对象的__exit__()方法。

## 爬虫

### Regular expression

通过使用正则表达式，可以匹配，检索和替换那些符合某个模式(规则)的文本等.

- 测试字符串内的模式。 例如，可以测试输入字符串，以查看字符串内是否出现电话号码模式或信用卡号码模式。这称为数据验证。
- 替换文本。 可以使用正则表达式来识别文档中的特定文本，完全删除该文本或者用其他文本替换它。
- 基于模式匹配从字符串中提取子字符串。 可以查找文档内或输入域内特定的文本。

例如，您可能需要搜索整个网站，删除过时的材料，以及替换某些 HTML 格式标记。在这种情况下，可以使用正则表达式来确定在每个文件中是否出现该材料或该 HTML 格式标记。此过程将受影响的文件列表缩小到包含需要删除或更改的材料的那些文件。然后可以使用正则表达式来删除过时的材料。最后，可以使用正则表达式来搜索和替换标记。

元字符

[^...]：非…

**量词** ？：0-1 *: 0-∞ +： 1-∞

.* ? 惰性匹配 .* 贪婪匹配

### 反爬

1.headers 中的useragent

2.cookie

3.headers 中的referer

python爬虫的xpath、bs4、re解析方法。[xpath](https://so.csdn.net/so/search?q=xpath&spm=1001.2101.3001.7020)和bs4是属于第三方库 bs4 和 xpath 都是用来解析html数据的 相比之下，xpath的速度会快一点 正则使用元字符 xpath和bs4将获取的[源码](https://so.csdn.net/so/search?q=%E6%BA%90%E7%A0%81&spm=1001.2101.3001.7020)转化成一个对象

模拟浏览器——处理cookie

防盗链 溯源—— Referer

找到未加密的参数 和加密过程语句

**回车、换行的区别**

在Windows中：

‘ (回车)：即将光标回到当前行的行首(而不会换到下一行)，之后的输出会把之前的输出覆盖

‘’ 换行，换到当前位置的下一位置，而不会回到行首；

Unix系统里，每行结尾只有“<换行>”，即“”；

**Windows系统里面，每行结尾是“<回车><换行>”，即“”；**

Mac系统里，每行结尾是“<回车>”，即"；

也就是：

**Linux中遇到换行符(“”)会进行回车+换行**的操作，回车符（“）反而只会作为控制字符(”^M“)显示，不发生回车的操作。 而windows中要回车符+换行符(”")才会回车+换行，缺少一个控制符或者顺序不对都不能正确的另起一行。 一个直接后果是：

**Unix/Mac系统下的文件在Windows里打开的话，所有文字会变成一行；** **Windows里的文件在Unix/Mac下打开的话，在每行的结尾可能会多出一个^M符号。**

在解析字符串，或其他格式的文件内容的时候，经常需要判定回车换行”的地方，这个时候就要注意：既要判定“”又要判定“”。

写程序时可能得到一行，将其进行trim掉’,这样能得到所需要的string了。

### 2.循环

- `range(1, 101, 2)`：可以用来产生1到100的奇数，其中2是步长，即每次数值递增的值。
- `range(100, 0, -2)`：可以用来产生100到1的偶数，其中-2是步长，即每次数字递减的值。

# C程序语言设计：

**结构体**

C语言–“.”与“->”有什么区别？：都是访问结构体的方式， ->指向结构体的指针,equals (*a).b；

**循环**

1）break语句通常用在循环语句和开关语句中。当break用于开关语句switch中时，可使程序跳出switch而执行switch以后的语句；如果没有break语句，则将成为一个死循环而无法退出。 当break语句用于do-while、for、while循环语句中时，可使程序终止循环而执行循环后面的语句，通常break语句总是与if语句联在一起，即满足条件时便跳出循环。

2）continue语句的作用是跳过循环体中剩余的语句而强行执行下一次循环。continue语句只用在for、while、do-while等循环体中，常与if条件语句一起使用，用来加速循环

scanf

while(scanf(“%d,&n)&&n!=0) while(scanf(”%d“,&n&&n) while(scanf(”%d“,&n),n) 功能：当输入n且n!=0时继续循环，当n为0时结束循环(上述三种写法都可实现此种功能） while(scanf(”%d,&n)!=EOF)和while(~scanf(“%d”,&n) 功能：当读到文件结尾时终止循环

两个scanf(%c)的问题：

1。清空输入缓冲区 第一个scanf后加入语句：fflush(stdin); //C语言清空输入缓冲区函数

2。格式控制中加入空格 or 第一个scanf(%c) 将第二个scanf改为：scanf(" %c“,&ch2);//在%号前面加一个空格 name == &name[0] 用scanf读string scanf（“%s, char);scanf(”%s“,string)前者速度更快，现在想了想应该是数组名可以表示数组首地址的原因。 scanf格式输入时要求输入格式与格式控制符中的完全一样(如：scanf(”abcd%c",&ch);

 输入时必须输入abcde,ch得到的值为e)空格可以抵消前面输入的回车符。  所以scanf（%s）只能读一个单词  scanf（“%3.2f”）错误 读float和double时不能指定精度 读到第一个空白时停止 &储存int型scanf(“%d ,&price”);的地址 

059 (0开头的表示8进制，但9错误)；0xAF （16进制，10*16+15）
printf(“%x”, x); // 以16进制格式输出，输出17； printf(“%o”, x); // 以8进制格式输出，输出2。

“a”字符串‘a’字符常量、是以其代码（一般采用ASCII代码，整数类型）储存的；如果这样，char s=“abc”;sizeof(s)=4; 对于字符串结回尾有一个’\0’做结束符，所以它占四个直接空间。sizeof()!!!!测定 再比如 char* s = “abcde”;sizeof(s) = 4; 因为s是一个指针，无论指针指向什么内容，指针本答身就是一个地址，它只占4个字节。 系统默认浮点型常量是double类型的精度，//2表示’最小‘字符宽度//float 2.3f，2.3e10F； %f 单精度浮点数 %e 指数形式输出 %g 浮点型数据 会去掉多余的零 至多保留6位 **sizeof测量预留空间，sizeof name sizeof（char）;strlen()测量长度** 转义字符’\123’ 这个表示asc码为123的字符 char nerf =’’转义字符单引号括起来；但双引号内的不用 重定向： c1<words //使计算机从文件中查找输入而不是键盘 C本身不提供输入输出语句 printf，scanf通过调用库中的函数实现，他们也不是c语言中的关键字；

**函数：**

 { 随机数： 如果想要产生一个数是从1开始到最大值的，比如说，想要产生一个1-100之间的随机数，那么用法如下  int num = rand() % 100 + 1;srand函数 srand(time(0)) srand函数是随机数发生器的初始化函数，如果要确保每次产生的都不一样，我们需要引用一个专门为rand设置随机化种子的函数srand()  枚举类型（enum）enum week{ Mon, Tues, Wed, Thurs, Fri, Sat, Sun };auto 赋值Mon=0 Tues=1…. 赋予新的类型week 可以赋予每一个枚举值若干个属性  基础 即使将参数传给无返回值的void函数也能实现对原始参数值的修改  void函数利用（引用或者指针）来“返回”处理结果是程序员经常用到的方式，主要原因是：一可以让代码更简洁，二是能减少内存空间的占用。  ? 传值： 定义函数时函数括号中的变量名称为形式参数，简称形参或虚拟参数；Local variable ：function scope ,block scope //for(int i)  形式参数parameter是被调函数的变量，实际参数是主调函数（main）赋给被调函数的具体值

 注意

 1、 C语言中实参和形参之间的数据传递是单向的“**值传递**”，单向传递，只能由实参传给形参，反之不能。  2、 被调用函数的形参只有函数被调用时才会临时分配存储单元，一旦调用结束占用的内存便会被释放。  3、 传值方式传递的是实参的一个拷贝。  传值：将实参的值传递给形参  ? 主调函数向调用函数传递参数实际上只是将实参的拷贝（即临时副本）传递  给了被调用函数，并不是实参本身，这样被调用函数不能直接修改主调函数中变量的值，而只能修改其私有的临时变量副本的值。  ? 传递给调用函数的都是实参的一个拷贝，直接对拷贝进行操作不会影响实参。  invoke调用 ,recursive递归：(不会) n往n-1归 f(n)=f(n-1)+f(n-2)  阶乘——stack栈last in first out;  ? ?这种信息传递是单方向的，形参不能将值传回给实参。

# Java

**执行过程**

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d2c526a-ce2c-4f77-87c5-77b878c06b3e/Untitled.png

步骤 1： 写源代码，源代码将以.java的文件格式保存在电脑硬盘中。 步骤 2： 编译器（compiler）检查是否存在编译期错误（例如缺少分号，关键字拼写错误等）。若通过检测，编译器就会将源代码翻译成字节码（bytecode），以.class的文件格式保存在电脑硬盘中。 步骤 3： 若要运行此Java程序，JVM中会有一个叫类加载器（class loader）的内置程序把字节码从硬盘载入到正位于内存中的JVM里去。 

步骤 4： JVM中还有一个叫字节码校验器（bytecode verifier）的内置程序检测是否存在运行期错误（例如栈溢出）。若通过检测，字节码校验器就会将字节码传递给解释器（interpreter）。 步骤 5： 解释器会对字节码进行逐行翻译，将其翻译成当前所在系统可以理解的机器码（machine code）， 步骤 6：将机器码交给操作系统，操作系统会以main方法作为入口开始执行程序。至此，一个Java程序就这样运行起来了

在C++中，虚函数允许在派生类中重写基类的函数，同时在运行时根据对象的实际类型来调用相应的函数。而在Java中，与C++的虚函数对应的概念是Java中的方法重写（Method Overriding）和动态绑定（Dynamic Binding）。在Java中，所有非私有、非静态的方法默认都是虚方法，即它们可以被子类重写。

JIT(just-in time compiler)动态优化

Java程序最初是通过解释器进行解释执行的，当Java虚拟机发现某个方法或代码块运行特别频繁的时候，就会认为这是“热点代码”（Hot Spot Code)。JIT即时编译器会将这些“热点代码”编译成与本地机器相关的机器指令，进行各个层次的优化。

当程序需要迅速启动和执行的时候，解释器可以首先发挥作用，省去编译的时间，立即执行。在程序运行后，随着时间的推移，编译器逐渐发挥作用，把越来越多的代码编译成本地机器指令之后，可以获取更高的执行效率。当程序运行环境中内存资源限制较大，可以使用解释器执行节约内存，反之可以使用编译执行来提升效率。

大家都知道，Java程序的运行性能很高，基本上可以和C/C++的程序相媲美。这主要是因为JIT即时编译器可以针对那些频繁被调用的“热点代码”做出深度优化，而[静态编译器](https://www.zhihu.com/search?q=%E9%9D%99%E6%80%81%E7%BC%96%E8%AF%91%E5%99%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)无法完全推断出哪些是运行时的热点代码，而不能做出针对性的优化。因此，通过JIT即时编译器编译的[本地机器指令](https://www.zhihu.com/search?q=%E6%9C%AC%E5%9C%B0%E6%9C%BA%E5%99%A8%E6%8C%87%E4%BB%A4&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2239141067%22%7D)才会比直接生成的本地机器指令拥有更高的执行效率。

JDK1.6及以前，常量池在方法区，这时的方法区也叫做永久代；
JDK1.7的时候，方法区合并到了堆内存中，这时的常量池也可以说是在堆内存中；
JDK1.8及以后，方法区又从堆内存中剥离出来了，但实现方式与之前的永久代不同，这时的

**方法区被叫做元空间，常量池就存储在元空间。**

Person person = new Student();这行代码将会生成一个person变量，该变量的编译时类型是Person，运行时类型是Student。

- *[Java](http://lib.csdn.net/base/java)*的引用变量有两个类型 编译时类型和运行时类型：

java允许把一个子类对象直接赋值给一个父类引用变量，无须任何类型转换，或者被称为向上转型，由系统自动完成。

引用变量在编译阶段只能调用其编译时类型所具有的方法，但运行时则执行它运行时类型所具有的方法，因此，编写Java代码时，引用变量只能调用声明该变量所用类里包含的方法。与方法不同的是，对象的属性则不具备多态性。通过引用变量来访问其包含的实例属性时，系统总是试图访问它编译时类所定义的属性，而不是它运行时所定义的属性。

JVM内存结构可以分为五个模块加上一个直接内存。其中这些模块又可以分为两个大类，线程共享区域和线程私有区域。 线程共享区域：

- 堆内存：JVM 上最大的内存区域， 我们申请的几乎所有的对象， 都是在这里存储的。
- 方法区：JVM的逻辑划分，不同版本有不同实现。主要是用来存放已被虚拟机加载的类相关信息， 包括类信息、 静态变量、 常量、 运行时常量池、 字符串常量池等。

线程私有区域：

- 虚拟机栈：JVM 运行过程中存储当前线程运行方法所需的数据， 指令、 返回地址。
- 本地方法栈：Java程序调用底层C/C++函数库。
- 程序计数器：当前线程执行的字节码的行号指示器。

## 类加载

**java.lang.Class**

接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件加载到内存中。此过程就称为类的加载。
加载到内存中的类，我们就称为运行时类。此运行时类，就作为Class的一个实例。
换句话说，**Class的实例就对应着一个运行时类。**

类从被加载到[内存](https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020)中开始，到卸载出内存，经历了**加载、连接、初始化、使用**5个阶段，其中连接又包含了**验证、准备、解析**三个步骤。这些步骤总体上是按照图中顺序进行的

## Thread

**Java内存模型只保证了基本读取和赋值是原子性操作，如果要实现更大范围操作的原子性，可以通过synchronized和Lock来实现。**

Java提供了volatile关键字来**保证可见性**。当一个共享变量被volatile修饰时，它会保证修改的值会**立即**被更新到**主存**，当有其他线程需要读取时，它会去内存中读取新值。关闭缓存，**（从Load到Store）是不安全的，中间如果其他的CPU修改了值将会丢失。下面的测试代码可以实际测试voaltile的自增没有原子性**（原子性：即一个操作或者多个操作 要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行。

**编译器层面 和CPU层面都提供了一套内存屏障来禁止重排序的指令**，编码人员需要识别存在数据依赖的地方加上一个内存屏障指令，那么此时计算机将不会对其进行指令优化。

在多线程环境下，确保代码正确同步和避免重排序是至关重要的。Java 提供了各种机制来帮助程序员在多线程场景下明确表达数据依赖和避免指令重排序：

1. **volatile 关键字：** 使用 **`volatile`** 关键字可以确保变量的可见性，并防止编译器和处理器对被 **`volatile`** 修饰的变量进行重排序。它适用于简单的变量操作，但不能保证原子性。
2. **synchronized 关键字：** 使用 **`synchronized`** 关键字可以确保代码块在同一时刻只能被一个线程执行，从而保证了线程安全性和避免了重排序。
3. **Lock 接口及其实现类：** Java 提供了 **`Lock`** 接口及其实现类，如 **`ReentrantLock`**，允许更灵活地进行锁定和解锁，并提供了比 **`synchronized`** 更多的特性。
4. **Atomic 类：** Java 提供了一系列原子操作类，如 **`AtomicInteger`**、**`AtomicBoolean`** 等，用于在不使用锁的情况下执行原子操作。
- **Happens-Before 规则：** Java 内存模型定义了 Happens-Before 规则，规定了一系列操作的顺序，以保证多线程环境下的一致性和可预测性。程序员可以利用这个规则来确保代码正确性。
    
    
    Java 内存模型下一共有 8 条 happens-before 规则，如果线程间的操作无法从如下几个规则推导出来，那么它们的操作就没有顺序性保障，虚拟机或者操作系统就能随意地进行重排序，从而可能会发生并发安全问题。
    
    - 程序次序规则（Program Order Rule）：在一个线程内，按照程序代码顺序，书写在前面的操作先行发生于书写在后面的操作。准确地说，应该是控制流顺序而不是程序代码顺序，因为要考虑分支、循环等结构。
    - 管程锁定规则（Monitor Lock Rule）：一个 unlock 操作先行发生于后面对同一个锁的 lock 操作。这里必须强调的是同一个锁，而 “后面” 是指时间上的先后顺序。
    - volatile 变量规则（Volatile Variable Rule）：对一个 volatile 变量的写操作先行发生于后面对这个变量的读操作，这里的 “后面” 同样是指时间上的先后顺序。
    - 线程启动规则（Thread Start Rule）：Thread 对象的 start () 方法先行发生于此线程的每一个动作。
    - 线程终止规则（Thread Termination Rule）：线程中的所有操作都先行发生于对此线程的终止检测，我们可以通过 Thread.join () 方法结束、Thread.isAlive () 的返回值等手段检测到线程已经终止执行。
    - 线程中断规则（Thread Interruption Rule）：对线程 interrupt () 方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通过 Thread.interrupted () 方法检测到是否有中断发生。
    - 对象终结规则（Finalizer Rule）：一个对象的初始化完成（构造函数执行结束）先行发生于它的 finalize () 方法的开始。
    - 传递性（Transitivity）：如果操作 A 先行发生于操作 B，操作 B 先行发生于操作 C，那就可以得出操作 A 先行发生于操作 C 的结论。
1. **线程安全的集合类：** Java 提供了一些线程安全的集合类，如 **`ConcurrentHashMap`**、**`CopyOnWriteArrayList`** 等，可以在多线程环境下安全地进行操作。
2. **volatile 的双重检查锁定模式（Double-Checked Locking）：** 在需要延迟初始化对象的情况下，使用双重检查锁定模式结合 **`volatile`** 关键字，可以确保线程安全性。

ScheduledExecutorService的主要作用就是可以将定时任务与线程池功能结合使用

- Java中存在两种锁机制：synchronized和Lock，Lock接口及其实现类是JDK5增加的内容
    
    **synchronized:**  Java的关键字，在jvm层面上                 **Lock:** 是一个接口
    
    **用法**
    
    **synchronized:** 在需要同步的对象中加入此控制，synchronized可以加在方法上，也可以加在特定代码块中，括号中表示需要锁的对象。
    
    **Lock:** 一般使用**ReentrantLock**类做为锁。在加锁和解锁处需要通过lock()和unlock()显示指出。所以一定要在finally块中写unlock()以防死锁。
    
    **锁的释放**
    
    **synchronized:** 1、以获取锁的线程执行完同步代码，释放锁 2、线程执行发生异常，jvm会让线程释放锁。在发生异常时候会自动释放占有的锁，因此不会出现死锁
    
    **Lock:** 在finally中必须释放锁，不然容易造成线程死锁。必须手动unlock来释放锁，可能引起死锁的发生
    
    **锁的获取**
    
    **synchronized:** 假设A线程获得锁，B线程等待。如果A线程阻塞，B线程会一直等待
    
    **Lock:** 分情况而定，Lock有多个锁获取的方式，大致就是可以尝试获得锁，线程可以不用一直等待(可以通过tryLock判断有没有锁)
    
    **锁的状态**         **synchronized:** 无法判断                           **Lock:** 可以判断
    
    - Lock可以提高多个线程进行读操作的效率。（可以通过readwritelock实现读写分离）
    - **在资源竞争不是很激烈的情况下，Synchronized的性能要优于ReetrantLock，但是在资源竞争很激烈的情况下，Synchronized的性能会下降几十倍，但是ReetrantLock的性能能维持常态；**
    - ReentrantLock提供了多样化的同步，比如有时间限制的同 步，可以被Interrupt的同步（synchronized的同步是不能Interrupt的）等。在资源竞争不激烈的情形下，性能稍微比synchronized差点点。但是当同步非常激烈的时候，synchronized的性能一下子能下降好几十倍。而ReentrantLock确还能维持常态。公平锁机制。什么叫公平锁呢？也就是在锁上等待时间最长的线程将获得锁的使用权。通俗的理解就是谁排队时间最长谁先执行获取锁。
    
    ② 是否可手动释放
    synchronized 不需要用户去手动释放锁，synchronized 代码执行完后系统会自动让线程释放对锁的占用； ReentrantLock则需要用户去手动释放锁，如果没有手动释放锁，就可能导致死锁现象。一般通过lock()和unlock()方法配合try/finally语句块来完成，使用释放更加灵活。
    
    ③ 是否可中断
    synchronized是不可中断类型的锁，除非加锁的代码中出现异常或正常执行完成； ReentrantLock则可以中断，可通过trylock(long timeout,TimeUnit unit)设置超时方法或者将lockInterruptibly()放到代码块中，调用interrupt方法进行中断。
    
    ④ 是否公平锁
    
    所以公平和非公平的区别就是：线程执行同步代码块时，是否会去尝试获取锁。
    
    **如果会尝试获取锁，那就是非公平的。如果不会尝试获取锁，直接进队列，再等待唤醒，那就是公平的。**synchronized为非公平锁 ReentrantLock则即可以选公平锁也可以选非公平锁，通过构造方法new ReentrantLock时传入boolean值进行选择，为空默认false非公平锁，true为公平锁。
    
    可重入锁是指同一个线程如果首次获得了这把锁，那么因为它是这把锁的拥有者，因此 有权利再次获取这把锁
    
    公平锁是等待锁的线程**不会饿死。缺点是整体吞吐效率相对非公平锁要低**，等待队列中除第一个线程以外的所有线程都会阻塞，CPU唤醒阻塞线程的开销比非公平锁大。
    
    非公平锁的优点是可以减少唤起线程的开销，整体的吞吐效率高，因为线程有几率不阻塞直接获得锁，CPU不必唤醒所有线程。缺点是处于等待队列中的线程可能会饿死，或者等很久才会获得锁。
    
    **调度**
    
    **synchronized:** 使用Object对象本身的wait 、notify、notifyAll调度机制
    
    **Lock:** 可以使用Condition进行线程之间的调度
    
    **底层实现**
    
    **synchronized:** 底层使用指令码方式来控制锁的，映射成字节码指令就是增加来两个指令：monitorenter和monitorexit。当线程执行遇到[monitorenter指令](https://www.zhihu.com/search?q=monitorenter%E6%8C%87%E4%BB%A4&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22180469207%22})时会尝试获取内置锁，如果获取锁则锁计数器+1，如果没有获取锁则阻塞；当遇到monitorexit指令时锁计数器-1，如果计数器为0则释放锁。
    
    **Lock:** 底层是CAS乐观锁，依赖AbstractQueuedSynchronizer类，把所有的[请求线程](https://www.zhihu.com/search?q=%E8%AF%B7%E6%B1%82%E7%BA%BF%E7%A8%8B&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22180469207%22})构成一个CLH队列。而对该队列的操作均通过Lock-Free（CAS）操作。
    
    关于ReentrantLock和CAS的关系：ReentrantLock是一个基于CAS的悲观锁，而不是乐观锁。ReentrantLock使用CAS操作来实现锁的获取和释放，但它的行为是悲观的，因为它要求线程在访问共享资源之前获得锁。CAS本身是一种乐观锁的实现方式，但ReentrantLock使用CAS来保证互斥性，因此它被归类为悲观锁。总的来说，乐观锁和悲观锁是两种不同的并发控制策略，它们在多线程环境下解决了竞争问题，但它们的使用场景和实现方式有所不同。 CAS是一种用于实现乐观锁的原子操作，而ReentrantLock是一种基于CAS的悲观锁。
    
    1. **乐观锁**：乐观锁是一种假设在大多数情况下不会发生冲突的锁。它不会在访问共享资源之前获取锁，而是在更新共享资源时进行检查。如果检测到其他线程已经更新了共享资源，那么当前线程可能需要重试或者采取其他措施来处理冲突。乐观锁通常用于多读的场景，可以提高吞吐量。
    2. **悲观锁**：悲观锁是一种假设在大多数情况下会发生冲突的锁。它在访问共享资源之前获取锁，并假定其他线程会干扰。悲观锁通常用于写入操作，以确保在写入共享资源时不会发生冲突。
    
    乐观锁的实现方式主要有两种：CAS机制和版本号机制。
    
    对于ABA问题，比较有效的方案是引入版本号，内存中的值每发生一次变化，版本号都+1；在进行CAS操作时，不仅比较内存中的值，也会比较版本号，只有当二者都没有变化时，CAS才能执行成功。Java中的AtomicStampedReference类便是使用版本号来解决ABA问题的。
    
    除了CAS，版本号机制也可以用来实现乐观锁。版本号机制的基本思路是在数据中增加一个字段version，表示该数据的版本号，每当数据被修改，版本号加1。当某个线程查询数据时，将该数据的版本号一起查出来；当该线程更新数据时，判断当前版本号与之前读取的版本号是否一致，如果一致才进行操作。
    

最经典的分布式锁是可重入的公平锁，可重入锁（Reentrant Lock）是一种特殊类型的锁，允许同一个线程多次获取同一个锁而不会导致死锁。这种锁可以多次被同一线程获取，而不会因为同一线程的重复获取而阻塞自己。

### 池化技术

池化技术在编程中的应用旨在**提高性能和资源利用率。它通过预先创建和管理一组可重复使用的资源**，以便在需要时能够**快速分配这些资源**，从而减少资源的创建和销毁开销。池化技术的优点主要有两个：**提前准备和重复利用。**以下是一些常见的池化技术及其应用：

1. **线程池（Thread Pool）**：
    - 用途：线程池是一组预先创建的线程，用于执行并发任务。它们可用于限制并发线程数量，减少线程创建和销毁的开销，提高应用程序的性能和稳定性。
    - 优势：降低线程创建和销毁的开销，提高系统的响应性，避免资源竞争。
    - **任务队列**：线程池通常与任务队列结合使用，这样可以确保任务按顺序执行或按优先级执行。
2. **内存池（Memory Pool）**：
    - 用途：内存池是一块内存区域，用于分配和回收对象。它有助于降低内存分配和释放的开销，减少内存碎片，提高内存使用效率。
    - 优势：减少内存分配和释放的开销，提高内存使用效率，减少内存泄漏风险。
3. **数据库连接池（Database Connection Pool）**：
    - 数据库连接池预先创建了一组数据库连接，以便在应用程序需要访问数据库时能够快速获取连接，而不必为每次数据库操作都创建新连接。如果不适当地管理数据库连接，可能会导致连接泄漏，即连接没有被释放，而无法再次使用，最终导致资源浪费和性能问题。**连接竞争**：在高并发环境下，多个线程或客户端可能同时尝试创建数据库连接
    - 优势：减少数据库连接的创建和关闭开销，提高数据库访问性能，减少数据库资源占用。
4. **HttpClient连接池**：
    - 用途：HttpClient连接池是用于HTTP通信的连接池，它可以维护一组HTTP连接，以便在需要时快速执行HTTP请求，避免为每个请求都创建新连接。
    - 优势：减少HTTP连接的创建和关闭开销，提高HTTP通信性能，减少资源占用。

**ThreadpoolExecutor**

线程池本身的目的是为了提高任务执行效率，避免因频繁创建和销毁线程而带来的性能开销，**线程池尽量不要放耗时任务**

任务调度

1. 首先检测线程池运行状态，如果不是RUNNING，则直接拒绝，线程池要保证在RUNNING的状态下执行任务。
2. 如果workerCount < corePoolSize，则创建并启动一个线程来执行新提交的任务。
3. 如果workerCount >= corePoolSize，且线程池内的阻塞队列未满，则将任务添加到该阻塞队列中。
4. 如果workerCount >= corePoolSize && workerCount < maximumPoolSize，且线程池内的阻塞队列已满，则创建并启动一个线程来执行新提交的任务。
5. 如果workerCount >= maximumPoolSize，并且线程池内的阻塞队列已满, 则根据拒绝策略来处理该任务, 默认的处理方式是直接抛异常。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3a560408-36b8-4e6f-88fc-58352ea0ced8/Untitled.png)

## **注解**

注解是[元数据](https://so.csdn.net/so/search?q=%E5%85%83%E6%95%B0%E6%8D%AE&spm=1001.2101.3001.7020)的一种形式，提供有关于程序但不属于程序本身的数据。注解对它们注解的代码的操作没有直接影响。

**注解的作用**

- **[格式检查](https://www.zhihu.com/search?q=%E6%A0%BC%E5%BC%8F%E6%A3%80%E6%9F%A5&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2221410338%22})：**告诉编译器信息，比如被@Override标记的方法如果不是父类的某个方法，IDE会报错；
- **减少配置：**运行时动态处理，得到注解信息，实现代替配置文件的功能；
- **减少重复工作：**比如第三方框架xUtils，通过注解@ViewInject减少对findViewById的调用，类似的还有（JUnit、ActiveAndroid等）；

通过上面的描述可以发现，其实注解干的很多事情，通过配置文件也可以干，比如为类设置配置属性；但注解和配置文件是有很多区别的，在实际编程过程中，注解和配置文件配合使用在工作效率、**低耦合**、可拓展性方面才会达到权衡。

三类：自定义注解、JDK内置注解、还有第三方框架提供的注解。

- 自定义注解就是我们自己写的注解，比如@UserLog
- JDK内置注解，比如@Override检验方法重写，@Deprecated标识方法过期等
- 第三方框架定义的注解比如SpringMVC的@Controller等

!https://pic1.zhimg.com/80/v2-116b805ba12495e7d2758acd99dd6c4c_1440w.jpg?source=1940ef5c

```
public @interface 注解名称{
    属性列表;
}
```

Java 定义了一套注解，共有 7 个，3 个在 java.lang 中，剩下 4 个在 java.lang.annotation 中。

**作用在代码的注解是**

- @Override - 检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。
- @Deprecated - 标记过时方法。如果使用该方法，会报编译警告。
- @SuppressWarnings - 指示编译器去忽略注解中声明的警告。

作用在其他注解的注解(或者说 元注解)是:

- @Retention - 标识这个注解怎么保存，是只在代码中，还是编入class文件中，或者是在运行时可以通过反射访问。
- @Documented - 标记这些注解是否包含在用户文档中。
- @Target - 标记这个注解应该是哪种 Java 成员。
- @Inherited - 标记这个注解是继承于哪个注解类(默认 注解并没有继承于任何子类)

### Java反射机制

在[堆内存](https://so.csdn.net/so/search?q=%E5%A0%86%E5%86%85%E5%AD%98&spm=1001.2101.3001.7020)的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可 以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd9a9356-363e-44f4-893d-9f1796260382/Untitled.png)

Java反射机制主要就是在程序运行的时候，动态的**加载类的属性和方法，然后操作这些类或者是对象的属性以及方法**。它的本质其实是JVM在得到一个class对象之后，再通过class对象进行一些反编译，这样就能得到对象中的各种信息。

**优点：** 运行期类型的判断，动态加载类，提高代码灵活度。

**缺点：**

- 性能瓶颈：反射相当于一系列解释操作，通知 JVM 要做的事情，性能比直接的 java 代码要慢很多。
- 安全问题，让我们可以动态操作改变类的属性同时也增加了类的安全隐患。

*Lombok*）是一个基于注解的 Java 库，可让您减少样板代码。Lombok 提供了各种注解，旨在替换以样板、重复或繁琐而著称的 Java 代码。例如，通过使用 Lombok，您可以**避免编写不带参数的构造函数和方法**，只需添加一些注释即可。当库将表示所需代码和样板代码的字节码注入到您的*.class*文件中时，会在**编译**时发生奇迹。另外，正如我们将看到的，该库可以插入到您的 IDE 中，让您拥有与自己编写所有样板代码相同的体验。

@data is shortcut **for @ToString, @EqualsAndHashCode, @Getter on all fields, @Setter on all non-final fields, and @RequiredArgsConstructor**`toString()equals()hashCode()`

## **Spring**

Spring是一个轻量级的**IoC和AOP**容器框架。是为Java应用程序提供基础性服务的一套框架，目的是用于简化企业应用程序的开发，它使得开发者只需要关心业务需求。

IOC，Inversion of Control，控制反转，指将对象的控制权转移给容器，由 Spring 来负责控制对象的生命周期（比如创建、销毁）和对象间的依赖关系。

最直观的表达就是，以前创建对象的时机和主动权都是由自己把控的，如果在一个对象中使用另外的对象，就必须主动通过new指令去创建依赖对象，使用完后还需要销毁（比如Connection等），对象始终会和其他接口或类耦合起来。而 IOC 则是由专门的容器来帮忙创建对象，将所有的类都在 Spring 容器中登记，当需要某个对象时，不再需要自己主动去 new 了，只需告诉 Spring 容器，然后 Spring 就会在系统运行到适当的时机，把你想要的对象主动给你。也就是说，对于某个具体的对象而言，以前是由自己控制它所引用对象的生命周期，而在IOC中，所有的对象都被 Spring 控制，控制对象生命周期的不再是引用它的对象，而是Spring容器，由 **Spring 容器帮我们创建、查找及注入依赖对象，而引用对象只是被动的接受依赖对象，所以这叫控制反转。**

这大大增加了项目的可维护性且降低了开发难度.

（2）什么是DI：   依赖注入是一种通过外部注入依赖对象的方式，减少类之间的耦合性。常见的方式有构造函数注入、方法注入和属性注入。通过依赖注入，对象不再负责自己依赖对象的创建和管理，而是由外部系统负责。这意味着被注入的对象（依赖）不需要知道如何创建它所依赖的对象，它只需要知道它所依赖的接口或抽象。便于替换和测试 ，通过 DI，对象之间的依赖关系变得更加清晰，使得代码更具可重用性和可扩展性。 而 Spring 的 DI 具体就是通过反射实现注入的，反射允许程序在运行的时候动态的生成对象、执行对象的方法、改变对象的属性。 

类和类之间的关系有三种：is-a、has-a和use-a关系。

is-a关系也叫继承inheritance或泛化，比如学生和人的关系、手机和电子产品的关系都属于继承关系。

has-a关系通常称之为**聚类（关联）aggregation**,比如部门和员工的关系，汽车和引擎的关系都属于关联关系；关联关系如果是整体和部分的关联，那么我们称之为聚合关系；如果整体进一步负责了部分的生命周期（整体和部分是不可分割的，同时同在也同时消亡），那么这种就是最强的关联关系，我们称之为合成关系。
use-a关系通常称之为依赖，比如司机有一个驾驶的行为（方法），其中（的参数）使用到了汽车，那么司机和汽车的关系就是依赖关系。

---

Spring 的 IOC 容器工作的过程，其实可以划分为两个阶段：**容器启动阶段**和**Bean 实例化阶段**。

**将一个类声明为 Bean 的注解有哪些?**

- `@Component`：通用的注解，可标注任意类为 `Spring` 组件。如果一个 Bean 不知道属于哪个层，可以使用`@Component` 注解标注。
- `@Repository` : 对应持久层即 Dao 层，主要用于数据库相关操作。
- `@Service` : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。
- `@Controller` : 对应 Spring MVC 控制层，主要用于接受用户请求并调用 `Service` 层返回数据给前端页面

其中容器启动阶段主要做的工作是加载和解析配置文件，保存到对应的 Bean 定义中。

---

Spring 框架中的 Bean 是否线程安全，取决于其作用域和状态。

我们这里以最常用的两种作用域 prototype 和 singleton 为例介绍。几乎所有场景的 Bean 作用域都是使用默认的 singleton ，重点关注 singleton 作用域即可。

prototype 作用域下，每次获取都会创建一个新的 bean 实例，不存在资源竞争问题，所以不存在线程安全问题。singleton 作用域下，IoC 容器中只有唯一的 bean 实例，可能会存在资源竞争问题（取决于 Bean 是否有状态）。如果这个 bean 是有状态的话，那就存在线程安全问题（有状态 Bean 是指包含可变的成员变量的对象）。

**不过，大部分 Bean 实际都是无状态（没有定义可变的成员变量）的（比如 Dao、Service），这种情况下， Bean 是线程安全的。假如这个 Bean 是有状态的，也就是会对 Bean 中的成员变量进行写操作，那么可能就存在线程安全的问题。**

## Java 容器

Java中容器主要分为两大类：**Collection和Map**

容器可以管理对象的生命周期、对象与对象之间的依赖关系，您可以使用一个配置文件（通常是[XML](https://baike.baidu.com/item/XML/86251)），在上面定义好对象的名称、如何产生（Prototype 方式或Singleton 方式）、哪个对象产生之后必须设定成为某个对象的属性等，在启动容器之后，所有的对象都可以直接取用，不用编写任何一行程序代码来产生对象，或是建立对象与对象之间的依赖关系。

!https://img-blog.csdnimg.cn/20190717224652123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phdmFlZV9nYW8=,size_16,color_FFFFFF,t_70

https://img-blog.csdn.net/20180807200307368?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI5MzczMjg1/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70

包括set，list，queue

Collection中的集合，元素是孤立存在的（理解为单身），向集合中存储元素采用一个个元素的方式存储。

Map中的集合，元素是成对存在的(理解为夫妻)。**每个元素由键与值**两部分组成，通过键可以找对所对应的值。

Collection中的集合称为单列集合，Map中的集合称为双列集合。

需要注意的是，Map中的集合不能包含重复的键，值可以重复；每个键只能对应一个值。

```jsx
List

`ArrayList`：`Object[]` 数组

`Vector`：`Object[]` 数组

`LinkedList`：双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)

Set

`HashSet`(无序，唯一): 基于 `HashMap` 实现的，底层采用 `HashMap` 来保存元素

`LinkedHashSet`: `LinkedHashSet` 是 `HashSet` 的子类，并且其内部是通过 `LinkedHashMap` 来实现的。有点类似于我们之前说的 `LinkedHashMap` 其内部是基于 `HashMap` 实现一样，不过还是有一点点区别的

`TreeSet`(有序，唯一): 红黑树(自平衡的排序二叉树)

Queue

`PriorityQueue`: `Object[]` 数组来实现二叉堆

`ArrayQueue`: `Object[]` 数组 + 双指针

再来看看 `Map` 接口下面的集合。

Map

`HashMap`：JDK1.8 之前 `HashMap` 由数组+链表组成的，数组是 `HashMap` 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间

`LinkedHashMap`：`LinkedHashMap` 继承自 `HashMap`，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，`LinkedHashMap` 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看：[《LinkedHashMap 源码详细分析（JDK1.8）》](https://www.imooc.com/article/22931)

`Hashtable`：数组+链表组成的，数组是 `Hashtable` 的主体，链表则是主要为了解决哈希冲突而存在的

`TreeMap`：红黑树（自平衡的排序二叉树）
```

### **List**

List必须按照插入的顺序保存元素，Set不能有重复元素（通过比较hashcode和equals方法）但是也没有顺序，Queue按照排队规则来确定对象产生的顺序（通常与它们被插入的顺序相同）。

ArrayList是实现了基于动态数组的数据结构，LinkedList是基于链表结构。
**对于随机访问的get和set方法，ArrayList要优于LinkedList，因为LinkedList要移动指针。对于新增和删除操作add和remove，LinkedList比较占优势，因为ArrayList要移动数据。**

LinkedList头尾操作的性能非常优良

### **Hashmap**

An object that maps keys to values. A map cannot contain duplicate keys; each key can map to at most one value.

**HashSet底层是HashMap**，HashMap的**底层（数组+链表+红黑树)**来实现的，它之所以有相当快的查询速度主要是因为它是通过计算散列码来决定存储的位置。HashMap 的底层是**数组加链表**   HashMap 是用哈希表来存储数据的  。哈希表的底层是数组，数组里面是**entry 对象  。默认长度是16** 。 当像 哈希表里面添加一个对象的时候，会先调用 对象的 **hashcode** 算法，算出哈希码值 。根据哈希算法算出对应的数组的索引值，再根据索引值查找数组 ，数组中是否存在对象，如果不存在对象直接存进去  。如果数组中存在该对象，会调用对象的equals 方法 ，比较key值是否相等 。如果相等  ，value 值 直接覆盖  。如果不相等  ，则形成链表结构

jdk1.7  先添加的往后移，后添加的排前面  。这种情况就叫哈希碰撞  。这种情况应该尽量避免 ，否则一个索引中 链表的数据量大时  ，该索引中再添加一个对象时 equals 比较会影响效率 。因此  hashmap 提出了**加载因子**  用来避免碰撞  。加载因子的默认值是0.75 。当元素达到现有表的 75%的时候 进行自动扩容  ，一旦扩容 就会重新排序，减少哈希碰撞 。就是说大小为16的HashMap，到了第13个元素，就会扩容成32。

但是这种情况还是无法避免碰撞

JDK1.8中，HashMap在存储一个元素时，当对应链表长度大于8时，链表就转换为红黑树，这样又大大提高了查找的效率。

HashSet 允许有 null 值。HashSet 是无序的，即不会记录插入的顺序。

HashSet 不是线程安全的， 如果多个线程尝试同时修改 HashSet，则最终结果是不确定的。 您必须在多线程访问时显式同步对 HashSet 的并发访问。

**HashMap 中，键值对的存储是通过1. put(key,vlaue)**

**get方法，传入key，就可以查询到value**。 **HashMap的底层数组长度总是2的n次方**，

Hashtable 是早期Java类库提供的一个[哈希](https://so.csdn.net/so/search?q=%E5%93%88%E5%B8%8C&spm=1001.2101.3001.7020)表实现，本身是同步的，不支持 null 键和值，由于同步导致的性能开销，所以已经很少被推荐使用。

解决HashMap的哈希碰撞？

Java中HashMap是利用“拉链法”处理HashCode的碰撞问题。在调用HashMap的put方法或get方法时，都会首先调用hashcode方法，去查找相关的key，当有冲突时，再调用equals方法。当我们将键值对传递给put方法时，他调用键对象的hashCode()方法来计算hashCode，**然后找到bucket（哈希桶）位置来存储对象**。当获取对象时，通过键对象的equals()方法找到正确的键值对，然后返回值对象。**HashMap使用链表来解决碰撞问题，当碰撞发生了，对象将会存储在链表的头节点。hashMap在每个链表节点存储键值对对象。当两个不同的键却有相同的hashCode时，他们会存储在同一个bucket位置的链表中。键对象的equals()来找到键值对**

HashCode是使用Key通过Hash函数计算出来的，由于不同的Key，通过此Hash函数可能会算的同样的HashCode，所以此时用了拉链法解决冲突，把HashCode相同的Value连成链表. 但是get的时候根据Key又去桶里找，如果是链表说明是冲突的，此时还需要检测Key是否相同

Hashmap扩容：扩大[数组长度](https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84%E9%95%BF%E5%BA%A6&spm=1001.2101.3001.7020)，对原数组进行rehash操作，把原数组copy到新数组中 resize()

Map.Entry是为了更方便的输出map键值对。一般情况下，要输出Map中的key 和 value  是先得到key的集合keySet()，然后再迭代（循环）由每个key得到每个value。values()方法是获取集合中的所有值，不包含键，没有对应关系。而Entry可以一次性获得这两个值。

### **Treeset**

需要查找、插入、删除都是O(log n)时间复杂度的结构 =》 平衡树

Treeset由红黑树实现，自动对key进行排序

```jsx
Object first(): 返回集合的第一个元素。
Object last(): 返回集合的最后一个元素。
Object lower(Object e): 返回集合中位于指定元素(e)之前的元素。
Object higher(Object e): 返回集合中位于指定元素(e)之后的元素。
SortedSet subSet(Object fromElement, Object toElement): 返回此Set的子集合，返回从fromElement(包含)到toElement(不包含)。
SortedSet headSet(Object toElement): 返回Set的子集合，返回toElement之前的集合。
SortedSet tailSet(Object fromElement): 返回Set的子集合，返回fromElement之后的集合。

```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c68d75c9-35cb-4e90-8a81-c96f871dc0f8/Untitled.png)

### **Queue**

**deque**（double-ended queue，双端队列）是一种具有[队列](https://baike.baidu.com/item/%E9%98%9F%E5%88%97/14580481)和[栈](https://baike.baidu.com/item/%E6%A0%88/12808149)的性质的[数据结构](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/1450)。双端队列中的元素可以从两端弹出)。**虽然没有严格要求 Deque 实现禁止插入 null 元素，但强烈鼓励他们这样做。**强烈建议允许使用 null 元素的任何 Deque 实现的用户不要利用插入 null 的能力。这是因为 null 被各种方法用作特殊返回值来指示双端队列为空。

Queue 中 remove() 和 poll()都是用来从队列头部删除一个元素。
在队列元素为空的情况下，remove() 方法会抛出NoSuchElementException异常，poll() 方法只会返回 null 。

https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jYXJ0b29uLWJsb2cub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tLzEzOTg1OTQ5NjktNWNjZTVlOWFkYTczZF9hcnRpY2xleC5qcGc?x-oss-process=image/format,png

使用java的同学请注意，如果你使用Stack的方式来做这道题，会造成速度较慢； 原因的话是Stack继承了Vector接口，而Vector底层是一个Object[]数组，那么就要考虑空间扩容和移位的问题了。 可以使用LinkedList来做Stack的容器，**因为LinkedList实现了Deque接口，所以Stack能做的事LinkedList都能做，其本身结构是个双向链表，扩容消耗少。** 但是我的意思不是像100%代码那样直接使用一个LinkedList当做队列，那确实是快，但是不符题意。 贴上代码，这样的优化之后，效率提高了40%，超过97%。

`add/offer/offerLast`添加队尾，三个方法等价；`push/offerFirst`添加队头，两个方法等价。`remove/pop/poll/pollFirst`删除队头，四个方法等价；`pollLast`删除队尾。

**比如你想把`LinkedList`当做集合`list`，那么应该用`add/remove`，如果想用作队列，则使用`offer/poll`，如果用作栈，则使用`push/pop`，如果用作双端队列，则使用`offerFirst/offerLast/pollFirst/pollLast`。**

**单调队列**是一种主要用于解决**滑动窗口**类问题的数据结构，「下一个更大元素」，「上一个更小元素」

Vector 类实现了一个动态数组。和 ArrayList 很相似，但是两者是不同的：

- Vector 是同步访问的。
- Vector 包含了许多传统的方法，这些方法不属于集合框架。

**使用场景**

1.需要线程同步

使用Collections工具类中synchronizedXxx()将线程不同步的ArrayDeque以及LinkedList转换成线程同步。

2.频繁的插入、删除操作：LinkedList

3.频繁的随机访问操作：ArrayDeque

4.未知的初始数据量：LinkedList

**PriorityQueue**

`PriorityQueue`和`Queue`的区别在于，它的出队顺序与元素的[优先级](https://so.csdn.net/so/search?q=%E4%BC%98%E5%85%88%E7%BA%A7&spm=1001.2101.3001.7020)有关，对`PriorityQueue`调用`remove()`或`poll()`方法，返回的总是优先级最高的元素。e.g. 我们放入的顺序是"apple"、"pear"、"banana"，但是取出的顺序却是"apple"、"banana"、"pear"，这是因为从字符串的排序看，"apple"排在最前面，"pear"排在最后面。

因此，放入PriorityQueue的元素，**必须实现Comparable接口**，PriorityQueue会根据元素的排序顺序决定出队的优先级。

优先队列默认结构为**二叉小顶堆**（层序遍历） 弹出最小元素
小顶堆：每个结点的值都小于或等于其左右孩子结点的值
[大顶堆](https://so.csdn.net/so/search?q=%E5%A4%A7%E9%A1%B6%E5%A0%86&spm=1001.2101.3001.7020)：每个结点的值都大于或等于其左右孩子结点的值

（升序–》大根堆，降序–》小根堆）

Java 8 是一个非常成功的版本，这个版本新增的Stream，配合同版本出现的Lambda闭包 ，给我们操作集合（Collection）提供了极大的便利。Stream流是JDK8新增的成员，允许以声明性方式处理数据集合，可以把Stream流看作是遍历数据集合的一个高级迭代器。Stream 是 Java8 中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作，可以执行非常复杂的查找/筛选/过滤、排序、聚合和映射数据等操作。使用Stream API 对集合数据进行操作，就类似于使用 SQL 执行的数据库查询。也可以使用 Stream API 来并行执行操作。简而言之，Stream API 提供了一种高效且易于使用的处理数据的方式。

动态编程语言是**高级编程语言的一个类别**，在计算机科学领域已被广泛应用。 它是一类在运行时可以改变其结构的语言， 静态语言创建时需要显式声明类型，可能包含的特征有：[eval](https://zh.wikipedia.org/wiki/Eval)函数、[对象](https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))[运行时间](https://zh.wikipedia.org/wiki/%E8%BF%90%E8%A1%8C%E6%9C%9F)改变、[反射](https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%B0%84%E5%BC%8F%E7%BC%96%E7%A8%8B)和[宏](https://zh.wikipedia.org/wiki/%E5%AE%8F)。

如您所见，PHP 和 JavaScript 虽然都是弱类型语言，但是当它们遇到和类型定义明显矛盾的运算时，可能会做出不同的猜测或者转换，这种猜测有时让人匪夷所思。

类型系统的**“强/弱”指的是当编程语言遇到与类型定义不匹配的运算时，尝试猜测或者转换的力度/程序。它不是一条明确的界限，而是一个范围。**

- 强类型语言在遇到与类型定义明显矛盾的运算时，一般会当做一种语法错误，而不会尝试对值的类型进行转换。
- 弱类型语言恰好相反，会猜测程序员的意图，并对其中一些值的类型进行转换，以让程序继续执行。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/b4c41971-a519-4c3f-826d-7558d429c0fa/Untitled.png)

# **JS**

**JavaScript** (often shortened to **JS**) is a lightweight, interpreted, 基于原型 object-oriented language with [first-class functions](https://en.wikipedia.org/wiki/First-class_function), and is best known as the scripting language for Web pages, but it's [used in many non-browser environments](https://en.wikipedia.org/wiki/JavaScript#Other_usage) as well. It is a [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming), multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. 在浏览器里，每当一个事件发生并且有一个事件监听器绑定在该事件上时，**一个消息就会被添加进消息队列。**如果没有事件监听器，这个事件将会丢失。所以当一个带有点击事件处理器的元素被点击时，就会像其他事件一样产生一个类似的消息。  

- JavaScript 是一门高级语言。对于写网络应用程序而言，它足够灵活且富有表达力。它有许多优势——它是动态类型的，不需要编译环节以及一个巨大的能够提供强大框架、库和其他工具的生态系统。
- WebAssembly 是一门低级的类汇编语言。它有一种紧凑的二进制格式，使其能够以接近原生性能的速度运行，并且为诸如 C++和 Rust 等拥有低级的内存模型语言提供了一个编译目标以便它们能够在网络上运行。（注意，WebAssembly 有一个在将来支持使用了垃圾回收内存模型的语言的高级目标。）

JavaScript 对象是变量的容器。

在基于**类**的[面向对象语言](https://www.zhihu.com/search?q=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2233658346%22%7D)中（比如Java和C++）， 是构建在**类(class)和实例(instance)上的。其中类**定义了所有用于具有某一特征对象的属性。**类**是抽象的事物， 而不是其所描述的全部对象中的任何特定的个体。另一方面， 一个**实例**是一个**类**的实例化，是其中的一个成员。

**基于原型的面向对象**在基于**原型**的语言中（如JavaScript）并不存在这种区别：不论是构造函数(constructor)，实例(instance)，原型(prototype)本身都是对象。基于原型的语言具有所谓的原型对象的概念，新对象可以从中获得原始的属性。

- 语法细节
    
    `eval()` 是一个危险的函数，它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，你最终可能会在你的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的window.Function `[Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)` 就不容易被攻击。
    
    `eval()` 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。此外，现代 JavaScript 解释器将 JavaScript 转换为机器代码, it’s inefficient to use eval()
    
    Number.isNaN(), that only returns true if the value is actually NaN. The isNaN function returns unexpected values because it tries to convert the value to number and then check if it is NaN
    
    一元运算符加号（+）首先把非基本类型通过ToPrimitive抽象操作转换为基本类型，如果加号中的两项有一项是字符串，另一项则进行ToString操作，进行字符串拼接，如果是布尔值加数字，则对布尔进行ToNumber操作再求和
    
    - **JavaScript 数组是可调整大小的，并且可以包含不同的[数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)**。（当不需要这些特征时，可以使用[类型化数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)。）
    - **JavaScript 数组不是关联数组  JavaScript 数组的[索引从 0 开始](https://zh.wikipedia.org/zh-cn/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E7%9A%84%E7%B7%A8%E8%99%9F)**：数组的第一个元素在索引 `0` 处，第二个在索引 `1` 处，以此类推，最后一个元素是数组的 `[length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/length)` 属性减去 `1` 的值。
    - **JavaScript [数组复制操作](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#%E5%A4%8D%E5%88%B6%E6%95%B0%E7%BB%84)创建[浅拷贝](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)**。（*所有* JavaScript 对象的标准内置复制操作都会创建浅拷贝，而不是[深拷贝](https://developer.mozilla.org/zh-CN/docs/Glossary/Deep_copy)）。
    
    Associative Array 有很多别名，它和 Map（映射）、Dictionary（字典）本质上是一个东西。 Associative Array 由 Key-Value Pair（键值对）组成，在 Associative Array 里面，每个 key 都是独一无二的。 这种数据类型支持【增查改删】这四种常见操作。 2. 我们为什么需要关联数组？ Array 缺点也很明显，【查改删】特别麻烦（需要找到另一块连续内存）。 而另一种线性数据结构——Linked List，通过增加指针的方式来尝试解决 Array 存在的问题，这种方式的缺点在于，每一个操作都需要遍历所有的元素（因为它是线性的……）。 既然线性数据结构无法满足我们的需求，那我们就用非线性数据结构来实现 Associative Array 吧！ 在选择数据结构的时候，我们要考虑可能的操作，如果只是简单的【查】，那么 Array 是最高效的，但是如果涉及到【增查改删】这些复杂的操作，就应该选择 Associative Array 的相关数据结构（比如 dictionary，map……）。
    
    **Associative Array 常用 Tree 和 Hash Table 这两种数据结构来实现**
    

**问号（?）在 JavaScript 中的三种主要用途** 

**三元运算符 可选链 空值凝聚**

空值凝聚的工作原理与逻辑 OR 运算符完全一样，只是当左边的值为 `undefined` 或 `null` 时，你会得到右边的值。短路机制=》 对付0或’ ’时  ||无效 =》 空值凝聚

换句话说，`??` 只允许 `undefined` 或者 `null` 值，不允许空字符串（`''`）或 `0`。

JavaScript 是一种**单线程语言**，这意味着它一次只能执行一段代码。然而，事件循环的概念允许 JavaScript 高效地处理**异步操作**，例如 I/O 操作、计时器和回调，而不会阻塞主线程。

事件循环是 JavaScript 处理并发的关键部分，并提供非阻塞方式来管理异步操作。它的工作原理如下：

**调用堆栈**：每当 JavaScript 程序开始运行时，它都会首先执行全局范围内的代码。调用堆栈跟踪当前正在执行的函数。当一个函数被调用时，它被添加到调用堆栈的顶部，当它返回时，它被从堆栈中删除。

**Web API 和异步任务**：JavaScript 可以访问浏览器或环境提供的 Web API，例如 setTimeout、fetch 和 XMLHttpRequest。这些 API 允许启动异步任务。当异步任务启动时，它会移出主线程并进入 Web API 环境，其余代码继续执行。

**回调队列**：异步任务完成后，会生成一条消息（回调），并将其放入回调队列中。该队列保存等待执行的消息/回调。

**事件循环**：事件循环的工作是监视调用堆栈和回调队列，**使得IO操作js中永不阻塞**。当调用堆栈为空时（即所有同步代码已执行完毕），事件循环检查回调队列中是否有任何消息/回调。如果有消息，则会将其从队列移至调用堆栈，并执行其关联的函数。

**微任务队列：**除了回调队列之外，还有一个微任务队列。 Promise 和某些 API（例如queueMicrotask）将任务添加到此队列中。微任务比常规回调具有更高的优先级，并且它们在事件循环的下一个周期之前执行。 Microtask-》DOM 渲染-》 Macrotask

### Event loop

JavaScript 有一个基于**事件循环**的并发模型，事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。之所以称之为 **事件循环**，是因为它经常按照类似如下的方式来被实现：

JS

```
while (queue.waitForMessage()) {
  queue.processNextMessage();
}

```

`queue.waitForMessage()` 会同步地等待消息到达 (如果当前没有任何消息等待被处理)。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/98257634-fb99-46aa-b203-bb5c465a017d/Untitled.png)

["执行至完成"](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop#%E6%89%A7%E8%A1%8C%E8%87%B3%E5%AE%8C%E6%88%90)

每一个消息**完整地执行后，其他消息才会被执行**。这为程序的分析提供了一些优秀的特性，包括：当一个函数执行时，它不会被抢占，只有在它运行完毕之后才会去运行任何其他的代码，才能修改这个函数操作的数据。这与 C 语言不同，例如，如果函数在线程中运行，它可能在任何位置被终止，然后在另一个线程中运行其他代码。

这个模型的一个缺点在于当一个消息需要太长时间才能处理完毕时，Web 应用程序就无法处理与用户的交互，例如点击或滚动。为了缓解这个问题，浏览器一般会弹出一个“这个脚本运行时间过长”的对话框。一个良好的习惯是缩短单个消息处理时间，并在可能的情况下将一个消息裁剪成多个消息。

## 闭包closure

使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染(计数器困境)；缺点是闭包会常驻内存，增加内存使用量，使用不当很容易造成内存泄漏。在JavaScript中，函数即闭包，只有函数才会产生作用域  闭包有3个特性

（1）函数嵌套函数。

（2）在函数内部可以引用外部的参数和变量

（3）参数和变量不会以垃圾回收机制回收

设想下如果你想统计一些数值，且该计数器在所有函数中都是可用的。

你可以使用全局变量，函数设置计数器递增：

如果我在函数内声明计数器，如果没有调用函数将无法修改计数器的值：

function add() {
    var counter = 0;
    return counter += 1;
}
add();
add();
add();
// 本意是想输出 3, 但事与愿违，输出的都是 1 !

是一个函数以及其捆绑的周边环境状态（**lexical environment**，**词法环境**）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

通常你使用只有一个方法的对象的地方，都可以使用闭包。

```
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

在 Web 中，你想要这样做的情况特别常见。大部分我们所写的 JavaScript 代码都是基于事件的 — 定义某种行为，然后将其添加到用户触发的事件之上（比如点击或者按键）。我们的代码通常作为回调：为响应事件而执行的函数。

## 页面生成渲染的过程：

1.HTML 被 HTML 解析器解析成 DOM 树；

2.CSS  被 CSS 解析器解析成 CSSOM 树；

3.结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree)，这一过程称为 Attachment；

1. **布局（Layout）：** 布局是确定每个元素在屏幕上的精确位置和大小的过程。浏览器会遍历渲染树中的每个元素，考虑它们的样式信息、大小、位置等，然后计算出它们在屏幕上的最终位置。这个过程通常也被称为回流（reflow）。
2. **绘制（Paint）：** 一旦浏览器完成布局，它就可以开始将页面上的元素绘制到屏幕上。这包括绘制文本、图像、背景颜色等。浏览器使用计算机的图形处理单元（GPU）来加速绘制操作，以提高性能和流畅度。

第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的渲染。

减少HTML的回流（reflow）是优化网页性能的关键之一，因为回流操作会导致页面重新布局，消耗较多的计算资源。以下是一些减少HTML回流的最佳实践：

1. **以局部布局的形式组织HTML结构**：确保你的HTML结构是有序的，并且样式和布局信息应该尽可能靠近彼此。这意味着你应该将样式应用到尽可能低层级的DOM节点上，以减少影响范围。例如，如果你只想修改**`<p>`**元素的样式，那么应该将类（class）或样式规则应用到**`<p>`**元素上，而不是其父元素上。
2. **避免不必要的DOM树修改**：尽量减少DOM树的修改次数，因为每次修改都可能触发回流。如果不需要修改某个DOM元素的样式或内容，就不要修改它。
3. **使用文档碎片（Document Fragment）**：如果需要动态创建一组DOM元素并将其添加到文档中，可以使用文档碎片来一次性添加，而不是一个个添加。这样可以减少回流次数。
4. **批量操作DOM和CSS**：如果必须多次操作DOM元素，尽量将这些操作合并到一个批处理中，以减少回流的发生。例如，在循环中修改多个DOM元素之前，可以先将它们保存到数组中，然后一次性应用修改。
5. **使用CSS类切换**：使用CSS类切换来改变元素的样式，而不是直接操作样式属性。这样可以更容易管理和优化样式的应用。
6. **使用虚拟DOM（Virtual DOM）**：在一些现代JavaScript框架（如React、Vue等）中，使用虚拟DOM可以最小化对实际DOM的修改，从而减少回流的频率。
7. **使用事件委托**：将事件处理程序绑定到祖先元素上，以便处理子元素的事件，而不是为每个子元素都绑定事件处理程序。

**防抖和节流**

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

- 防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。**代码实现重在清零 `clearTimeout`**。防抖可以比作等电梯，只要有一个人进来，就需要再等一会儿。业务场景有避免登录按钮多次点击的重复提交。
- 节流：控制流量，单位时间内事件只能触发一次，与服务器端的限流 (Rate Limit) 类似。**代码实现重在开锁关锁 `timer=timeout; timer=null`**。节流可以比作过红绿灯，每等一个红灯时间就可以过一批。

完成节流可以使用时间戳与定时器的写法  使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行

可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下

```jsx
 function throttle(func, delay) {
  let timeoutId;
  let lastExecTime = 0;

  return function(...args) {
    const currentTime = new Date().getTime();

    if (currentTime - lastExecTime >= delay) {
      // 如果距离上次执行的时间大于等于指定的延迟时间，执行函数
      func.apply(this, args);
      lastExecTime = currentTime; // 更新上次执行的时间
    } else {
      // 如果未达到延迟时间，则设置定时器延迟执行函数
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = currentTime; // 更新上次执行的时间
      }, delay - (currentTime - lastExecTime));
    }
  };
}
```

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d9552c9b-777c-450b-9626-98509e1bd1eb/Untitled.png

防抖在连续的事件，只需触发一次回调的场景有：

- search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
- 窗口大小`resize`。只需窗口调整完成后，计算窗口大小。防止重复渲染。

节流在间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 鼠标连续点击，mousedown

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

### 纯粹原则

函数式编程的世界中，[纯函数](https://wikipedia.org/wiki/Pure_function) 通常具有如下特征：

- **只负责自己的任务**。它不会更改在该函数调用前就已存在的对象或变量。
- **输入相同，则输出相同**。给定相同的输入，纯函数应总是返回相同的结果。

上述示例的问题出在渲染过程中，组件改变了 **预先存在的** 变量的值。为了让它听起来更可怕一点，我们将这种现象称为 **突变（mutation）** 。纯函数不会改变函数作用域外的变量、或在函数调用前创建的对象——这会使函数变得不纯粹！

但是，**你完全可以在渲染时更改你 *刚刚* 创建的变量和对象**。在本示例中，你创建一个 `[]` 数组，将其分配给一个 `cups` 变量，然后 `push` 一打 cup 进去

传递给事件处理函数的函数应直接传递，而非调用。例如：

| 传递一个函数（正确） | 调用一个函数（错误） |
| --- | --- |
| <button onClick={handleClick}> | <button onClick={handleClick()}> |

区别很微妙。在第一个示例中，`handleClick` 函数作为 `onClick` 事件处理函数传递。这会让 React 记住它，并且只在用户点击按钮时调用你的函数。

在第二个示例中，`handleClick()` 中最后的 `()` 会在 [渲染](https://react.docschina.org/learn/render-and-commit) 过程中 **立即** 触发函数，即使没有任何点击。这是因为在 [JSX `{` 和 `}`](https://react.docschina.org/learn/javascript-in-jsx-with-curly-braces) 之间的 JavaScript 会立即执行。

****渲染会及时生成一张快照****

计数器困境 counter

React 会对 state 更新进行**批处理** 这让你可以更新多个 state 变量——甚至来自多个组件的 state 变量——而不会触发太多的 重新渲染。但这也意味着只有在你的事件处理函数及其中任何代码执行完成 之后，UI 才会更新。这种特性也就是 批处理，它会使你的 React 应用运行得更快。它还会帮你避免处理只更新了一部分 state 变量的令人困惑的“半成品”渲染。 **React 不会跨 多个 需要刻意触发的事件（如点击）进行批处理**——每次点击都是单独处理的。请放心，React 只会在一般来说安全的情况下才进行批处理。这可以确保，例如，如果第一次点击按钮会禁用表单，那么第二次点击就不会再次提交它。

```jsx
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>// Can this work? why
    </>
  )
}
//if don't work,try to use function
onclick={()=>{
setNumber(n=>n+1);setNumber(n=>n+1);setNumber(n=>n+1);}}

Q:<button onClick={() => {
setNumber(number + 5);
setNumber(n => n + 1);
setNumber(42);
}}>增加数字</button> A： 返回什么？？
```

主要区别：

state 在其表现出的特性上更像是一张快照。设置它不会更改你已有的 state 变量，但会触发重新渲染。 State是可变的，是一组用于反映组件UI变化的状态集合；
而Props对于使用它的组件来说，是只读的，要想修改Props，只能通过该组件的父组件修改。
在组件状态上移的场景中，父组件正是通过子组件的Props, 传递给子组件其所需要的状态。

**Component&props**

**React核心思想是组件化，其中 组件 通过属性(props) 和 状态(state)传递数据。**

props 是组件对外的接口，state 是组件对内的接口。组件内可以引用其他组件，组件之间的引用形成了一个树状结构（组件树），如果下层组件需要使用上层组件的数据或方法，上层组件就可以通过下层组件的props属性进行传递，因此props是组件对外的接口。组件除了使用上层组件传递的数据外，自身也可能需要维护管理数据，这就是组件对内的接口state。根据对外接口props 和对内接口state，组件计算出对应界面的UI。

定义组件最简单的方式就是编写 JavaScript 函数：

`function Welcome(props) {   return <h1>Hello, {props.name}</h1>; }`

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。

你同时还可以使用 [ES6 的 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 来定义组件：

`class Welcome extends React.Component {   render() {     return <h1>Hello, {this.props.name}</h1>;   } }`

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

为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个**diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。**

在DOM树上的节点被称为**元素**，在这里则不同，**Virtual DOM上称为component**。Virtual DOM的节点就是一个完整抽象的组件，它是由components组成。

假设你的 HTML 文件某处有一个 `<div>`：

`<div id="root"></div>`

我们将其称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。

仅使用 React 构建的应用通常只有单一的根 DOM 节点。如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 `[ReactDOM.createRoot()](<https://zh-hans.reactjs.org/docs/react-dom-client.html#createroot>)`：

**事件处理**

例如，传统的 HTML：

`<button onclick="activateLasers()">   Activate Lasers </button>`

在 React 中略微不同：

`<button onClick={activateLasers}>  Activate Lasers </button>`

在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。

`e` 是一个合成事件。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/)来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。React 事件与原生事件不完全相同。如果想了解更多，请查看 `[SyntheticEvent](<https://zh-hans.reactjs.org/docs/events.html>)` 参考指南。

使用 React 时，你一般不需要使用 `addEventListener` 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。

当你使用 [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 `Toggle` 组件会渲染一个让用户切换开关状态的按钮：

- `*useCallback`的作用其实是用来避免子组件不必要的reRender：**

首先，假如我们不使用useCallback，在父组件中创建了一个名为handleClick的事件处理函数，根据需求我们需要把这个handleClick传给子组件，当父组件中的一些state变化后（这些state跟子组件没有关系），父组件会re Render，然后会重新创建名为handleClick函数实例，并传给子组件，这时即使用React.memo把子组件包裹起来，子组件也会重新渲染，因为props已经变化了，但这个渲染是无意义的

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

**为什么要使用 hooks**
难以理解的 class 、**组件中必须去理解 javascript 与 this 的工作方式**、需要绑定事件处理器、纯函数组件与 class 组件的差异存在分歧、甚至需要区分两种组件的使用场景；Hook 可以使你在非 class 的情况下可以使用更多的 React 特性。

在组件之间复用状态逻辑很难、大型组件很难拆分和重构，也很难测试。**Hook 使你在无需修改组件结构的情况下复用状态逻辑。没有 class 继承、没有 this、没有生命周期、代码更加简洁、这就是使用 hooks 的意义**

React 提供了一些内置的 Hooks，比如 useState。您还可以创建自己的 Hooks 以在不同组件之间重用有状态行为。

Usestate hook等价于写class & render

**向 class 组件中添加局部的 state,state是异步的**

当您调用 时`setState()`，React 会将您提供的对象合并到当前状态。`setState(x)` 实际上会像 `setState(n => x)` 一样运行,  将state更新加入队列进行批处理

```
const [state, setState] = useState(initialState);

```

setState返回一个 state，以及更新 state 的函数。在初始渲染期间，返回的状态 (`state`) 与传入的第一个参数 (`initialState`) 值相同。

`setState` 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入[队列](https://so.csdn.net/so/search?q=%E9%98%9F%E5%88%97&spm=1001.2101.3001.7020)。Or函数式更新

**useRef 与 useState区别**

useRef 能让你引用一个不需要渲染的值。

2useState 返回 2 个属性或一个数组。一个是值或状态，另一个是更新状态的函数。相反，useRef用来储存persitent value 只返回一个值，即实际存储的数据。

3当参考值改变时，它会被更新而不需要刷新或重新渲染。但是在 useState 中，组件必须再次渲染以更新状态或其值。

何时使用 Refs 和 States

Refs 在获取用户输入、DOM 元素属性和存储不断更新的值时很有用。ref 不适合用于存储期望显示在屏幕上的信息

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。当你在定时器中操作 state 的时候，而 setState 更新就是同步的。

**useEffect是什么？**

它允许你 [将组件与外部系统同步](https://react.docschina.org/learn/synchronizing-with-effects)。副作用钩子：用于处理组件中的副作用，用来取代生命周期函数。the function passed to `useEffect`fires **after** layout and paint, during a deferred event. This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, because most types of work shouldn’t block the browser from updating the screen.

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

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5b07601-37a4-4929-8939-6be7a2ef3977/Untitled.png

index.js为入口               `ReactDOM.render(`

函数式组件

- *`export`*声明用于从 JavaScript 模块中导出值。然后可以使用`[import](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import>)`声明或[动态导入将](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)导出的值导入其他程序。导入绑定的值会在导出它的模块中发生变化——当模块更新它导出的绑定的值时，更新将在其导入值中可见。

## 设计原则

在这种情况下，**响应性**是指用户界面 (UI) 或网页设计平滑地调整其布局、元素和功能以适应不同的屏幕尺寸和分辨率而不损失可用性或可读性的能力。它涉及以一种为用户提供最佳观看和交互体验的方式设计和编码界面，无论他们使用什么设备。

这通常涉及：

流体布局：设计可以使用百分比等相对单位或使用 CSS Grid 或 Flexbox 根据屏幕尺寸调整和重新排列内容的布局。

媒体查询：使用 CSS 媒体查询根据设备的屏幕宽度应用不同的样式，从而为台式机、平板电脑和移动设备进行定制设计。

触摸友好的元素：确保按钮、表单输入和其他交互元素足够大并且易于在触摸屏上点击。

优化内容：在较小的屏幕上调整或隐藏某些内容或功能，以优先考虑重要信息并保持可用性。

视口元标记：在 HTML 标头中包含视口元标记以控制移动浏览器上的布局。

测试：定期在不同设备和屏幕尺寸上测试帐户创建屏幕，以确保其按预期运行并在所有平台上提供无缝的用户体验。

### Service worker API

Service Worker 是一种在浏览器背后运行的脚本，能够拦截和处理网络请求，实现诸如缓存文件、推送通知、离线访问等功能。它为 Web 应用提供了一种途径，使其能够在离线状态下运行，并且改善了性能和用户体验。

Service worker 是一个注册在指定源和路径下的事件驱动 worker。它采用 JavaScript 文件的形式，控制关联的页面或者网站，**拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。** 

Web Worker 是 HTML5 提供的一项技术，允许在浏览器中创建多线程的 JavaScript Runtime,  允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

Web Worker 主要有两种类型：Dedicated Worker 和 Shared Worker。

Service worker 运行在 worker 上下文：因此它无法访问 DOM，相对于驱动应用的主 JavaScript 线程，它运行在其他线程中，所以不会造成阻塞。它被设计为完全异步；因此，同步 XHR 和 Web Storage 不能在 service worker 中使用。 出于安全考量，Service worker 只能由 HTTPS 承载，毕竟修改网络请求的能力暴露给中间人攻击会非常危险，如果允许访问这些强大的 API，此类攻击将会变得很严重。在 Firefox 浏览器的用户隐私模式，Service Worker 不可用。

```jsx
event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存已打开');
        return cache.addAll(urlsToCache);
      })
  );
```

当 Service Worker 拦截到一个网络请求时（例如在 **`fetch`** 事件中），使用 **`caches.match(event.request)`** 的目的是检查该请求的资源是否已经存在于缓存中。如果存在缓存，则返回缓存中的响应；如果不存在缓存，则继续向网络发起请求获取资源。

接着，通过 **`then()`** 方法处理这个返回的 Promise，继续执行相应的逻辑。例如，如果匹配到缓存，则可以直接返回缓存的响应；如果未找到缓存，则继续使用 **`fetch(event.request)`** 从网络获取资源。

## Typescript

Typescript 是一个**强类型**的 JavaScript 超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。TS对JS的改进主要是**静态类型检查**TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

Deno可以运行.ts ,or npm install tsc to compile ts into js, then run in node ; or webpack

tsconfig.json

动态编译 type inference不run难以发现错误, 传入参数缺失默认undefine

unlesss                                   `a: number` **类型限定**

### 语法

{ } 大括号，表示定义一个对象，大部分情况下要有成对的属性和值，或是函数

- [ ]  **[ ]中括号，表示一个数组，也可以理解为一个数组对象**

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

可插拔的企业级 React 应用程序框架。 “umi 是一个基于路由的框架，支持 next.js 式的常规路由和各种高级路由功能，比如路由级别的按需加载，支持多种插件如AntD

**Ant design**

Ant Design System 是企业级 UI 设计语言和 React UI 库的开源代码。它带有一组高质量的 React 组件，具有主题定制能力

The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

**Protable**

ProTable 在 antd 的 Table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 antd Table 不同的 api。

**request**

`request` 是 ProTable 最重要的 API，`request` 会接收一个对象。对象中必须要有 `data` 和 `success`，如果需要手动分页 `total` 也是必需的。`request` 会接管 `loading` 的设置，同时在查询表单查询和 `params` 参数发生修改时重新执行。同时 查询表单的值和 `params` 参数也会带入。

iauth result success不符合param对successs的要求

### Vue

Vue 数据双向绑定原理是通过 `数据劫持` + `发布者-订阅者模式` 的方式来实现的，首先是通过 `ES5` 提供的 `Object.defineProperty()` 方法来劫持（监听）各属性的 **getter、setter**，并在当监听的属性发生变动时通知订阅者，是否需要更新，若更新就会执行对应的更新函数。详见 [vue源码](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue)。

- 常见的`基于数据劫持`的**双向绑定**有两种实现
    - 一个是目前Vue在用的 `Object.defineProperty`
    - 一个是ES2015中新增的 `Proxy`，而在Vue3.0版本后加入Proxy从而代替Object.defineProperty

**jQuery**强调的理念是写得少，做得多（write less, do more）。它简化了操作DOM的方法，让早期的程序员们能更方便的实现动画、修改`CSS`等各种操作，说它是JavaScript史上使用最广泛的一个库也不为过。jQuery独特的选择器、链式操作、事件处理机制和封装完善的Ajax都是其他JavaScript库望尘莫及的。

jQuery 的核心是一个[文档对象模型](https://en.wikipedia.org/wiki/Document_Object_Model)(DOM) 操作库。DOM 是网页所有元素的树形结构表示。jQuery 简化了查找、选择和操作这些 DOM 元素的语法。例如，jQuery 可用于查找文档中具有特定属性的元素（例如，所有带有标签的元素`[h1](https://en.wikipedia.org/wiki/HTML_element#heading)`）、更改其一个或多个属性（例如`color`，`visibility`），或使其响应事件（例如，鼠标点击）。

jQuery 还提供了超越基本 DOM 元素选择和操作的事件处理范例。事件分配和事件回调函数定义是在代码中的单个位置中一步完成的。jQuery 还旨在合并其他常用的 JavaScript 功能（例如，隐藏元素时的淡入和淡出、通过操作[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)属性实现动画）。

使用 jQuery 进行开发的原则是：

- JavaScript 和 HTML 的分离：jQuery 库提供了使用 JavaScript 将[事件](https://en.wikipedia.org/wiki/Event_(computing))[DOM 的](https://en.wikipedia.org/wiki/Document_Object_Model)[HTML 事件属性](https://en.wikipedia.org/wiki/HTML_attribute#Event_attributes)[完全分离](https://en.wikipedia.org/wiki/Separation_of_concerns)

Axios 基于promise用于浏览器和node.js的http客户端。

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

4.`使用模板字符串 var name =` Your name is ${first} ${last}.``

在 ES6 中通过 `${}`就可以完成字符串的拼接，只需要将变量放在大括号之中。

5.解构赋值

定义：ES6允许按照一定模式，从[数组](https://so.csdn.net/so/search?q=%E6%95%B0%E7%BB%84&spm=1001.2101.3001.7020)和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。解构的语法：

**const {dispatch} = this.props;**

**这段代码你可以认为是这样：**

**const dispatch = this.props.dispatch;**

7.Promise

Promise 是异步编程的一种解决方案，比传统的解决方案 callback 更加的优雅。Promise 是一种用于处理异步操作的对象，它代表一个尚未完成的操作。Promise 可以具有成功（resolved）状态或失败（rejected）状态，允许将回调函数绑定到这两种状态，以处理操作结果。

A Promise 是表示异步操作最终完成或失败的对象。由于大多数人都是已经创建的 Promise 的**消费者**

```jsx
// 创建一个 Promise
const myPromise = new Promise((resolve, reject) => {
  // 模拟异步操作，这里使用 setTimeout 延时 2 秒
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // 当随机数小于 0.5 时，解决 Promise 并传递一个值
      resolve("Promise 被解决了，随机数为 " + randomNumber);
    } else {
      // 当随机数大于等于 0.5 时，拒绝 Promise 并传递一个错误信息
      reject("Promise 被拒绝了，随机数为 " + randomNumber);
    }
  }, 2000); // 2 秒延时
});

// 处理 Promise 的解决和拒绝情况
myPromise
  .then((result) => {
    // 当 Promise 被解决时执行的回调
    console.log("解决: " + result);
  })
  .catch((error) => {
    // 当 Promise 被拒绝时执行的回调
    console.error("拒绝: " + error);
  });
```

Async 函数会 返回一个已完成的 [promise](https://so.csdn.net/so/search?q=promise&spm=1001.2101.3001.7020) 对象，实际在使用的时候会和await操作符配合使用，在介绍await之前，我们先看看 async 函数本身有哪些特点。

不同于“老式”的传入回调，在使用 Promise 时，会有以下约定：

在本轮 [事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop#%E6%89%A7%E8%A1%8C%E8%87%B3%E5%AE%8C%E6%88%90) 运行完成之前，回调函数是不会被调用的。

即使异步操作已经完成（成功或失败），在这之后通过 `[then()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)` 添加的回调函数也会被调用。

通过多次调用 `[then()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)` 可以添加多个回调函数，它们会按照插入顺序进行执行。

Promise 很棒的一点就是**链式调用**（**chaining**）连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 **Promise 链**来实现这种需求。

`then()` 函数会返回一个和原来不同的**新的 Promise**

现在，我们可以把回调绑定到返回的 Promise 上，形成一个 Promise 链来避免原来写法的回调地狱：

```
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);
```

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

```
// 创建常量对象
const car = {type:"Fiat", model:"500", color:"white"};
// 修改属性:
car.color = "red";

```

### JS中的异步并发

异步就是彼此独立,在等待某事件的过程中继续做自己的事，不需要等待这一事件完成后再工作。线程就是实现异步的一个方式。异步是让调用方法的主线程不需要同步等待另一线程的完成，从而可以让主线程干其它的事情。**异步是当一个调用请求发送给被调用者,而调用者不用等待其结果的返回而可以做其它的事情。实现异步可以采用多线程技术或则交给另外的进程来处理。**

WEB应用非常适合异步编程方式而不是多线程，因为网络请求资源，大部分时间是在io等待

**I/O密集型任务适合异步编程**，因为在这种情况下，大部分时间都花在**等待外部资源的响应**（如网络请求、数据库查询等），而不是消耗**CPU**进行计算。多线程在这种情况下可能会浪费CPU资源，因为线程会在等待I/O完成期间处于空闲状态。

异步编程允许**单个线程在等待I/O的同时处理其他任务**，从而提高整体的资源利用率。在异步编程中，当一个I/O操作被触发后，线程可以继续处理其他任务，而不会阻塞等待I/O操作完成。

多线程通常适用于CPU密集型任务，这些任务需要大量的计算资源。在这种情况下，通过多线程可以充分利用多核处理器的计算能力，提高计算性能。

下面是一些使用多线程的常见情况：

1. CPU密集型任务：例如图像处理、视频编码、复杂的数学计算等。
2. 并行处理：如果您有大量相似的任务需要同时进行处理，可以将它们分配给多个线程以并行执行。
3. UI应用程序：在桌面应用程序或游戏中，多线程可以确保用户界面保持响应性，而不会被阻塞在某个耗时的操作上。

需要注意的是，多线程编程更加复杂和容易引入**竞态条件和死锁**等问题。

JS,Python，Rust,C++ 等语言都提供了异步编程支持(单线程) ： Async，asyncio，await

**Fetch API**

fetch().then((console)⇒{})`fetch()` 强制接受一个参数，即要获取的资源的路径。它返回一个 `[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)`，该 Promise 会在服务器使用标头响应后，兑现为该请求的 `[Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)`——**即使服务器的响应是 HTTP 错误状态**。你也可以传一个可选的第二个参数 `init`（参见 `[Request](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)`）。

Fetch relies on JavaScript [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

The `fetch` specification differs from `Ajax` in the following significant ways:

- 当接收到一个代表错误的 HTTP 状态码时，从 `fetch()` 返回的 Promise **不会被标记为 reject**，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve（如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 `[ok](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/ok)` 属性为 false），仅当网络故障时或请求被阻止时，才会标记为 reject。
- `fetch` **不会发送跨域 cookie**，除非你使用了 *credentials* 的[初始化选项](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch#%E5%8F%82%E6%95%B0)
    - 34全阿三去A·1

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

# Node.js

Node.js 和 React 是两个不同的 JavaScript 技术，用于不同的用途和环境。下面是它们之间的主要区别：

1. **用途**:
    - Node.js: Node.js 是一个服务器端运行时环境，用于构建服务器端应用程序，如 Web 服务器、API 服务器、后端服务等。它主要用于处理服务器端逻辑，与客户端浏览器没有直接关系。
    - React: React 是一个客户端库，用于构建用户界面。它主要用于前端开发，用于构建交互性强、响应式的用户界面，通常在浏览器中执行。
2. **技术领域**:
    - Node.js: 主要用于服务器端开发，可以用 JavaScript 编写服务器端应用逻辑，处理请求、响应、数据库操作等。
    - React: 主要用于前端开发，帮助构建用户界面和用户体验。
3. **环境**:
    - Node.js: 运行于服务器端环境，可以独立运行作为服务器，处理客户端请求。
    - React: 运行于浏览器端环境，用于呈现用户界面，通常与后端服务器（可能是使用 Node.js 构建的）交互以获取数据。

前端工程化的完成离不开 Node.js

Deno 旨在为现代程序员提供高效且安全的脚本环境。Deno 是使用 rust + google v8 engine 打造的下一代 javascript  runtime

Deno 将始终作为单个可执行文件分发。给定一个 Deno 程序的 URL，它只需约 [31 兆字节的压缩可执行文件](https://github.com/denoland/deno/releases)即可运行。Deno 明确承担了运行时和包管理器的角色。它使用标准的浏览器兼容协议来加载模块：URL。

除其他外，Deno 可以很好地替代以前可能使用 Bash 或 Python 编写的实用程序脚本。

Npm(node package manger)  ****npm 永久安裝，npx 安裝後即移除.**** npm 會全局性的安裝 create-nuxt-app，這個 dependency 也會一直存在在你的本機 node_modules 下，如果使用 npx 命令，他會安裝在臨時安裝包上，等到項目初始化完成後就刪除，**不用全局性的安裝，避免被汙染**

# GO

在Go语言出现之前，开发者们总是面临非常艰难的抉择，究竟是使用执行速度快但是编译速度并不理想的语言（如：C++），还是使用编译速度较快但执行效率不佳的语言（如：.NET、Java），或者说开发难度较低但执行速度一般的动态语言呢？显然，Go语言在这 **3 个条件**之间做到了最佳的平衡：**快速编译，高效执行，易于开发。**

Golang快速高效的轻量级并发支持，垃圾回收使得其成为开发处理大量后端请求的后端系统首选。在 Go 中部署微服务相对容易

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

命名规则涉及变量、常量、全局函数、结构、接口、方法等的命名。 Go语言从语法层面进行了以下限定：任何需要对外暴露的名字必须以大写字母开头，不需要对外暴露的则应该以小写字母开头。

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

## Slice切片

```go
type slice struct {
	array unsafe.Pointer
	len   int
	cap   int
}
```

编译期间的切片是 `[cmd/compile/internal/types.Slice](https://draveness.me/golang/tree/cmd/compile/internal/types.Slice)` 类型的，但是在运行时切片可以由如下的 `[reflect.SliceHeader](https://draveness.me/golang/tree/reflect.SliceHeader)` 结构体表示，其中:

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
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2 = append(slice2, 1)
    slice2[0] = 10001
    fmt.Println(slice)                                //【0,0】
    fmt.Println(slice1)         // [0]
    fmt.Println(cap(slice2))    //18
}
```

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

make()开辟map,slice空间

声明**map**

```
myMap = make(map[int][string])
myMap1 = map[int][string]{
    0:"john",
    1:"stan"
}
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

```
/*查看元素在集合中是否存在 */
    capital, ok := countryCapitalMap [ "American" ] /*如果确定是真实的,则存在,否则不存在 */

```

`[mapstructure](<https://github.com/mitchellh/mapstructure>)`
用于将通用的`map[string]interface{}`解码到对应的 Go 结构体中，或者执行相反的操作。很多时候，解析来自多种源头的数据流时，我们一般事先**并不知道他们对应的具体类型**。只有读取到一些字段之后才能做出判断。这时，**我们可以先使用标准的`encoding/json`库将数据解码为`map[string]interface{}`类型，然后根据标识字段利用`mapstructure`
库转为相应的 Go 结构体以便使用**

指针的一个高级应用是你可以传递一个变量的引用（如函数的参数），这样不会传递变量的拷贝。指针传递是很廉价的，只占用 4 个或 8 个字节。当程序在工作中需要占用大量的内存，或很多变量，或者两者都有，使用指针会减少内存占用和提高效率。被指向的变量也保存在内存中，直到没有任何指针指向它们，所以从它们被创建开始就具有相互独立的生命周期。

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

控制层返回json字符串数据给前端，前端通过ajax处理将数据展示给用户

Substring 从以连续顺序放置在两个指定索引之间的字符串中取出字符。另一方面， **子序列**可以通过删除中间的一些元素或不删除元素从另一个序列导出，但始终保持原始序列中元素的相对顺序。

key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。

key 和 value 中使用冒号 **:** 分割。              每个 key/value 对使用逗号 **,** 分割。

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

### kafka

- Kafka 结合了三个关键功能，因此您可以通过一个经过实战考验的解决方案实现端到端的事件流用例：
**发布（写入）和订阅（读取）事件流，包括从其他系统持续导入/导出数据。
根据需要持久可靠地存储事件流。
在事件发生时或回顾性地处理事件流。**

所有这些功能都以分布式、高度可扩展、弹性、容错和安全的方式提供。 Kafka 可以部署在裸机硬件、虚拟机和容器上，也可以部署在本地和云端。您可以在自行管理 Kafka 环境和使用各种供应商提供的完全托管服务之间进行选择。

服务器：Kafka 作为一个或多个服务器的集群运行，可以跨越多个数据中心或云区域。其中一些服务器形成存储层，称为代理。其他服务器运行 Kafka Connect 以将数据作为事件流持续导入和导出，以将 Kafka 与您现有的系统（如关系数据库以及其他 Kafka 集群）集成。为了让您实现关键任务用例，Kafka 集群具有高度可扩展性和容错性：如果其中任何一个服务器出现故障，其他服务器将接管它们的工作，以确保持续运行而不会丢失任何数据。

客户端：它们允许您编写分布式应用程序和微服务，以并行、大规模和容错方式读取、写入和处理事件流，即使在网络问题或机器故障的情况下也是如此。 Kafka 附带了一些这样的客户端，这些客户端由 Kafka 社区提供的数十个客户端进行了扩充：客户端可用于 Java 和 Scala，包括更高级别的 Kafka Streams 库，用于 Go、Python、C/C++ 和许多其他编程语言以及 REST API。

Events are organized and durably stored in **topics**. Very simplified, a topic is similar to a folder in a filesystem, and the events are the files in that folder. An example topic name could be "payments". Topics in Kafka are always multi-producer and multi-subscriber: a topic can have zero, one, or many producers that write events to it, as well as zero, one, or many consumers that subscribe to these events. Events in a topic can be read as often as needed—unlike traditional messaging systems, events are not deleted after consumption. Kafka's performance is effectively constant with respect to data size, so storing data for a long time is perfectly fine.

Topics are **partitioned**, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. This distributed placement of your data is very important for scalability because it allows client applications to both read and write the data from/to many brokers at the same time. When a new event is published to a topic, it is actually appended to one of the topic's partitions. Events with the same event key (e.g., a customer or vehicle ID) are written to the same partition, and Kafka [guarantees](https://kafka.apache.org/documentation/#semantics) that any consumer of a given topic-partition will always read that partition's events in exactly the same order as they were written.

broker, cluster

c.Next() 之前的操作是在 Handler 执行之前就执行(Authetication；c.Next() 之后的操作是在 Handler 执行之后再执行(总结处理，比如格式化输出、响应结束时间，响应时长计算之类的. if 想要计算这个请求到底花费了多久，就需要先执行下面的中间件和handler，等他们都完成后，再回到 `PrintResponse`
 这个中间件里，进行计时就ok了。 当你打印返回的response body的时候，也是一样的道理，中间件都会比handler先执行，但是没有handler，中间件怎么拿到 response body，这时候就要用到 c.Next() 先去 执行 余下的中间件和 handler，然后再回到我这个中间件里面

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

- routes group是为了管理一些相同的URL

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

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab28a5ec-65a2-4ed5-bfc7-f4c972dc4c8a/Untitled.png

通过`gin.Default()`生成的`gin.Engine`其实包含一个`RouterGroup`(嵌套组合),所以它可以用`RouterGroup`的方法。

`Group`方法又生成了一个`*RouterGroup`，这里最重要的就是`basePath`,它的值是`group.calculateAbsolutePath(relativePath)`

1.**gin 数据解析和绑定**

客户端传参，后端接收并解析到结构体。

### Lifecycle

Gin-Context 实现了对request和response的封装，是Gin的核心实现之一，学习使用gin框架就是学习使用Context包的过程。内部封装了request 和response 过程中的数据。

**框架启动过程**

**1. New 一个Engine实例**

`app **:=** gin.**Default**()`

**2. 注册添加路由、中间件**

你可能会疑惑，为什么这里的路由处理函数要接受一个 gin.Context 类型的参数，是在何时传入的？

**Engine结构体本身发挥的核心功能就是路由处理。**

`app.**GET**("/ping", **func**(c *****gin.Context) {         c.**JSON**(200, gin.H{             "message": "pong",         })     })`

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

**2. gin 框架处理请求核心：ServeHTTP**

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

Hexo是基于 Node.js 的静态网站生成器，Hexo 可以在几秒钟内生成数百个静态文件。

DNS 将域名转换为 IP 地址，以便浏览器能够加载互联网资源。

## 跨域

同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，现在所有支持 JavaScript 的浏览器都会使用这个策略。如果缺少了同源策略，浏览器很容易受到 XSS、 CSFR 等攻击。

同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。

浏览器都遵循同源策略，也就是说位于`www.flysnow.org`下的网页是无法访问非`www.flysnow.org`下的数据的

要解决跨域问题的办法有CORS、代理和JSONP

1. CORS

出于安全原因，浏览器限制从脚本发起的跨域 HTTP 请求。例如，`XMLHttpRequest` 和 Fetch [API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)遵循[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一来源请求资源，除非来自其他来源的响应包含正确的 CORS 标头。(XMLHTTP是一组API函数集，可被JavaScript、JScript、VBScript以及其它web浏览器内嵌的脚本语言调用，通过HTTP在浏览器和web服务器之间收发XML或其它数据。XMLHTTP最大的好处在于可以**动态**地更新网页，它无需重新从服务器读取整个网页，也不需要安装额外的插件。该技术被许多网站使用，以实现快速响应的动态网页应用。例如：Google的Gmail服务、Google Suggest动态查找界面以及Google Map地理信息服务。

2.JSONP （动态创建script标签）

JSONP跨域-前端适配，后端配合
前后端同时改造
jsonp原理：img、srcipt，link标签的src或href属性不受同源策略限制，可以用来作为请求，后端接受请求后返回一个回调函数callback，调用前端已经定义好的函数，从而实现跨域请求，如：

$('#btn').click(function(){
var frame = document.createElement('script');
frame.src = 'http://localhost:3000/article-listname=leo&age=30&callback=func';
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

---

Go官方提供了`database/sql`
包来给用户进行和数据库打交道的工作，`database/sql`
库实际只提供了一套操作数据库的接口和规范，例如抽象好的SQL预处理（prepare），连接池管理，数据绑定，事务，错误处理等等。官方并没有提供具体某种数据库实现的协议支持。

WEB开发中的ORM

ORM的目的就是屏蔽掉DB层，很多语言的ORM只要把你的类或结构体定义好，再用特定的语法将结构体之间的一对一或者一对多关系表达出来。那么任务就完成了。然后你就可以对这些映射好了数据库表的对象进行各种操作，例如save，create，retrieve，delete。至于ORM在背地里做了什么阴险的勾当，你是不一定清楚的。使用ORM的时候，我们往往比较容易有一种忘记了数据库的直观感受。

## casbin

Casbin 是一个强大的、高效的开源访问控制框架，其权限管理机制支持多种访问控制模型。储存RBAC关系中user role的ORM

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

injector中声明wire.build,`wire_gen.go`创建后，您可以通过运行重新生成它`[go generate](<https://blog.golang.org/generate>)`。****

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

**1. 定义 Injector**

创建`wire.go`文件，定义下你最终想用的实例初始化函数例如`initApp`（即 Injector），定好它返回的东西`*App`，在方法里用`panic(wire.Build(NewRedis, SomeProviderSet, NewApp))`罗列出它依赖哪些实例的初始化方法（即 Provider）/或者哪些组初始化方法（ProviderSet）

**2. 定义 ProviderSet（如果有的话）**

ProviderSet 就是一组初始化函数，是为了少写一些代码，能够更清晰的组织各个模块的依赖才出现的。也可以不用，但 Injector 里面的东西就需要写一堆。 像这样 `var SomeProviderSet = wire.NewSet(NewES,NewDB)`定义 ProviderSet 里面包含哪些 Provider

**3. 实现各个 Provider**

Provider 就是初始化方法，你需要自己实现，比如 NewApp，NewRedis，NewMySQL，GetConfig 等，注意他们们各自的输入输出

**4. 生成代码**

执行 wire 命令生成代码，工具会扫描你的代码，依照你的 Injector 定义来组织各个 Provider 的执行顺序，并自动按照 Provider 们的类型需求来按照顺序执行和安排参数传递，如果有哪些 Provider 的要求没有满足，会在终端报出来，持续修复执行 wire，直到成功生成`wire_gen.go`文件。接下来就可以正常使用`initApp`来写你后续的代码了。

## 协程Goroutine

Goroutine的并发编程模型基于GMP模型，简要解释一下GMP的含义：

G:表示goroutine，每个goroutine都有自己的栈空间，定时器，初始化的栈空间在2k左右，空间会随着需求增长。

M:抽象化代表内核工作线程，记录内核线程栈信息，当goroutine调度到线程时，使用该goroutine自己的栈信息。

P:代表调度器，负责调度goroutine到M，维护一个本地goroutine队列，M从P上获得goroutine并执行，同时还负责部分内存的管理。

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

```
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

`<-`总是优先和最左边的类型结合。(The <- operator associates with the leftmost chan possible)

创建管道`c := make(chan int)`

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