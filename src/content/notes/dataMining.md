

## Classification

4.1 基本概念

4.2 归纳决策树

4.3 模型的过拟合

4.4 模型评估

4.5 模型比较

#### 定义：

给定一组记录的集合（称为训练集），每个记录都可以用一个元组(x,y)表示，其中x是属性的集合，y则指出了记录的类标号。

X:属性，预测，自变量，输入       

Y:类，响应，因变量，输出

而分类的任务就是通过学习得到一个能将每个属性值x映射到一个预先定义的类标号y的目标函数。

描述性建模：分类模型可以作为解释性的工具 用于区分不同类中的对象                             预测性建模：用于预测未知记录的类标号

基础的分类器：决策树分类法、基于规则的分类法、最近邻分类器、神经网络、深度学习、朴素贝叶斯分类法、支持向量机

Hunt算法：![在这里插入图片描述](https://img-blog.csdnimg.cn/2019122410151624.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY3NjE3NQ==,size_16,color_FFFFFF,t_70)
决策树是一个递归的过程。
2,3解释：当所有的样本点都属于同一个类别的时候，不需要划分（递归结束的一个条件）；
5,6解释：属性不能再划分的时候，其类别标记取决于该样本中数据最多的类。如果类别数量相同，注意看一下另一个叶子节点，不能与上一个叶子节点的类别相同，否则，无需划分。
8，解释：如何构建最优决策树。
hunt算法有一个bug：不好选最优划分属性。D是样本集。
9~14解释：对于某一个特征（属性），的每一个值，设置为node并生成一个分支；形成两个样本子集。为空，分支节点为叶子节点，否则，样本子集中数量多的类为返回值。

### Overfitting

分类模型的误差（包括两部分）

1、训练误差 (表现误差)

训练记录上误分类样本比例

2、泛化误差

模型在未知记录上的期望误差

模型的过拟合（图解）

（横坐标为模型节点数，节点越多模型越复杂）



拟合不足：当模型太简单,训练和测试误差都大（节点数少）

​         原因：模型尚未学习到数据的真实结构

过度拟合：当模型过于复杂时，训练误差很小，但是测试误差很大（节点数多）

​         原因：模型可能包含这样的节点，他们偶然地拟合训练数据中的某些噪声。这些节点降低了模型的性能，因为它们不能很好的泛化到检验样本上

**防止过拟合方法主要有：**

1.正则化（Regularization）（L1和L2）

2.数据增强（Data augmentation），也就是增加训练数据样本

3.Dropout

4.early stopping

### Preprocessing

在做**分类**时常常需要估算不同样本之间的相似性度量(SimilarityMeasurement)，这时通常采用的方法就是计算样本间的“距离”(Distance)。采用什么样的方法计算距离是很讲究，甚至关系到分类的正确与否。

<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210928225315495.png" alt="image-20210928225315495" style="zoom:50%;" />![image-20210928225649771](C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210928225649771.png)

![image-20210928225649771](C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20210928225649771.png)

(1) 杰卡德相似系数



```undefined
   两个集合A和B的交集元素在A，B的并集中所占的比例，称为两个集合的杰卡德相似系数，用符号J(A,B)表示。
```

![img](https:////upload-images.jianshu.io/upload_images/12754558-2431cca80a41917c.png?imageMogr2/auto-orient/strip|imageView2/2/w/118/format/webp)



杰卡德相似系数是衡量两个集合的相似度一种指标。

(2) 杰卡德距离



```undefined
   与杰卡德相似系数相反的概念是**杰卡德距离(**Jaccarddistance)。杰卡德距离可用如下公式表示：
```

![img](https:////upload-images.jianshu.io/upload_images/12754558-81b0e4c81906d059.png?imageMogr2/auto-orient/strip|imageView2/2/w/290/format/webp)

## 规则的分类器

互斥规则（Mutually exclusive rules）
	每个记录最多被一个规则覆盖
	如果规则集中不存在两条规则被同一条记录触发，称规则集中的规则是互斥的
	如果规则集不是互斥的:一个记录可能触发多条规则
解决办法：
有序规则集（Ordered rule set）
	基于规则的排序方案、基于类的排序方案
无序规则集（ Unordered rule set）
	使用投票模式
穷举规则（Exhaustive rules）
	如果对属性值的任一组合，都存在一条规则加以覆盖，成规则集具有穷举覆盖
	确保了每一条记录都至少被一条规则覆盖
如果规则不是穷举的:一条记录可能不会触发任何规则
解决办法：
使用缺省类（即通常被指定为没有被现存规则覆盖的训练记录的多数类）

### 4.1.1 Learn-One-Rule函数

Learn-One-Rule函数的目标是提取一个分类规则，该规则覆盖训练集中的大量正例，没有或仅覆盖少量反例。然而，由于搜索空间呈指数大小，要找到一个最佳的规则的计算开销很大。Learn-One-Rule函数通过以一种贪心的方式的增长规则来解决指数搜索问题。它产生一个初始规则r，并不断对该规则求精，直到满足某种终止条件为止。然后修剪该规则，以改进它的泛化误差。


## 关联分析



<img src="C:\Users\Stan\AppData\Roaming\Typora\typora-user-images\image-20211021105555779.png" alt="image-20211021105555779" style="zoom:50%;" />

### apriori

**先验算法**（Apriori Algorithm）[[1\]](https://zh.wikipedia.org/wiki/先验算法#cite_note-apriori-1)是[关联规则学习](https://zh.wikipedia.org/wiki/关联规则学习)的经典算法之一。先验算法的设计目的是为了处理包含交易信息内容的[数据库](https://zh.wikipedia.org/wiki/数据库)（例如,顾客购买的商品清单，或者网页常访清单。）而其他的算法则是设计用来寻找无交易信息（如Winepi算法和Minepi算法）或无时间标记（如DNA测序）的数据之间的联系规则。

在[关联式规则](https://zh.wikipedia.org/wiki/关联式规则)中,一般对于给定的项目集合（例如，零售交易集合，每个集合都列出的单个商品的购买信息），算法通常尝试在项目集合中找出至少有C个相同的子集。先验算法采用自底向上的处理方法，即频繁子集每次只扩展一个对象（该步骤被称为候选集产生），并且候选集由数据进行检验。当不再产生符合条件的扩展对象时，算法终止。先验算法采用[广度优先搜索](https://zh.wikipedia.org/wiki/广度优先搜索)算法  

disavantage:Apriori算法中的一些低效与权衡弊端也进而引致了许多其他的算法的产生，例如FP-growth算法。候选集产生过程**生成了大量的子集**（先验算法在每次对数据库进行扫描之前总是尝试加载尽可能多的候选集）。并且自底而上的子集浏览过程（本质上为宽度优先的子集格遍历）也直到遍历完所有 {\displaystyle 2^{|S|}-1} **个可能的子集之后才寻找任意最大子集S**

e.g.

一个大型超级市场根据[最小存货单位](https://zh.wikipedia.org/wiki/最小存货单位)（SKU）来追踪每件物品的销售数据。从而也可以得知哪些物品通常被同时购买。通过采用先验算法来从这些销售数据中创建频繁购买商品组合的清单是一个效率适中的方法。假设交易数据库包含以下子集{1,2,3,4}，{1,2}，{2,3,4}，{2,3}，{1,2,4}，{3,4}，{2,4}。每个标号表示一种商品，如“黄油”或“面包”。先验算法首先要分别计算单个商品的购买频率。下表解释了先验算法得出的单个商品购买频率。

| 商品编号 | 购买次数 |
| :------: | :------: |
|    1     |    3     |
|    2     |    6     |
|    3     |    4     |
|    4     |    5     |

然后我们可以定义一个最少购买次数来定义所谓的“频繁”。在这个例子中，我们定义最少的购买次数为3。因此，所有的购买都为频繁购买。接下来，就要生成频繁购买商品的组合及购买频率。先验算法通过修改[树](https://zh.wikipedia.org/wiki/树_(数据结构))结构中的所有可能子集来进行这一步骤。然后我们仅重新选择频繁购买的商品组合：

| 商品编号 | 购买次数 |
| :------: | :------: |
|  {1,2}   |    3     |
|  {2,3}   |    3     |
|  {2,4}   |    4     |
|  {3,4}   |    3     |

并且生成一个包含3件商品的频繁组合列表（通过将频繁购买商品组合与频繁购买的单件商品联系起来得出）。在上述例子中，不存在包含3件商品组合的频繁组合。最常见的3件商品组合为{1,2,4}和{2,3,4}，但是他们的购买次数为2，低于我们设定的最低购买次数。

## Anomaly detection

In , **anomaly detection** (also **outlier detection**)[[1\]](https://en.wikipedia.org/wiki/Anomaly_detection#cite_note-:0-1) is the identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data.[[1\]](https://en.wikipedia.org/wiki/Anomaly_detection#cite_note-:0-1) Typically the anomalous items will translate to some kind of problem such as [bank fraud](https://en.wikipedia.org/wiki/Bank_fraud), a structural defect, medical problems or errors in a text. Anomalies are also referred to as [outliers](https://en.wikipedia.org/wiki/Outlier), novelties, noise, deviations and exceptions.[[2\]](https://en.wikipedia.org/wiki/Anomaly_detection#cite_note-2)

model: unsupervised                        supervised

Three broad categories of anomaly detection techniques exist.[[4\]](https://en.wikipedia.org/wiki/Anomaly_detection#cite_note-ChandolaSurvey-4) **Unsupervised anomaly detection** techniques detect anomalies in an unlabeled test data set under the assumption that the majority of the instances in the data set are normal by looking for instances that seem to fit least to the remainder of the data set. **Supervised anomaly detection** techniques require a data set that has been labeled as "normal" and "abnormal" and involves training a classifier (the key difference to many other [statistical classification](https://en.wikipedia.org/wiki/Statistical_classification) problems is the inherent unbalanced nature of outlier detection). **Semi-supervised anomaly detection** techniques construct a model representing [normal behavior](https://en.wikipedia.org/wiki/Normal_behavior) from a given *normal* training data set, and then test the likelihood of a test instance to be generated by the utilized model.

### Regression

在[统计建模](https://en.wikipedia.org/wiki/Statistical_model)，**回归分析**是一组用于统计处理的[估计](https://en.wikipedia.org/wiki/Estimation_theory)之间的关系[因变量](https://en.wikipedia.org/wiki/Dependent_variable)（通常称为“结果”或“响应”变量）和一个或多个[自变量](https://en.wikipedia.org/wiki/Independent_variable)（通常称为“预测”，“协变量”， “解释变量”或“特征”）。回归分析最常见的形式是[线性回归](https://en.wikipedia.org/wiki/Linear_regression)，其中根据特定的数学标准找到最接近数据的直线（或更复杂的[线性组合](https://en.wikipedia.org/wiki/Linear_combination)）。例如，) 最小化真实数据与该线（或超平面）之间的平方差之和。由于特定的数学原因（请参阅[线性回归](https://en.wikipedia.org/wiki/Linear_regression)），这允许研究人员在自变量采用给定的一组值时估计因变量的[条件期望](https://en.wikipedia.org/wiki/Conditional_expectation)（或总体[平均值](https://en.wikipedia.org/wiki/Average_value)）。不太常见的回归形式使用稍微不同的程序来估计替代[位置参数](https://en.wikipedia.org/wiki/Location_parameters)（例如，[分位数回归](https://en.wikipedia.org/wiki/Quantile_regression)或必要条件分析[[1\]](https://en.wikipedia.org/wiki/Regression_analysis#cite_note-1)）或估计更广泛的非线性模型集合中的条件期望（例如，[非参数回归](https://en.wikipedia.org/wiki/Nonparametric_regression)）。

回归分析主要用于两个概念上不同的目的。首先，[prediction](https://en.wikipedia.org/wiki/Prediction) and [forecasting](https://en.wikipedia.org/wiki/Forecasting), where its use has substantial overlap with the field of [machine learning](https://en.wikipedia.org/wiki/Machine_learning). 其次，在某些情况下可以使用回归分析来推断[因果关系](https://en.wikipedia.org/wiki/Causality)自变量和因变量之间。重要的是，回归本身仅揭示固定数据集中因变量和自变量集合之间的关系。要分别使用回归进行预测或推断因果关系，研究人员必须仔细证明为什么现有关系对新环境具有预测能力，或者为什么两个变量之间的关系具有因果解释。当研究人员希望使用[观察数据](https://en.wikipedia.org/wiki/Observational_study)估计因果关系时，后者尤其重要 

最早的回归形式是[最小二乘法](https://en.wikipedia.org/wiki/Method_of_least_squares)