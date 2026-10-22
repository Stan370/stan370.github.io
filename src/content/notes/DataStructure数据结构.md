---
title: 算法笔记
date: 2024-05-24 17:43:33
categories: 
- 计算机科学
tags:
- CS基础
- 编程
- 算法
---

### 

算法题目已经成为了公司筛人的一种方式，大厂的每一轮面试基本都会有几道算法题，甚至有的公司笔试全部都是算法题。其他题目答的都差不多，那你算法题做不出来，可能就被淘汰了。

所以为啥要刷算法题呢？一方面是帮助你学习和理解算法，但另一方面也是像背公式、背八股文一样，增加你面试时碰到原题的概率。像面试无非就那么几个重点：树、动态规划、深度 / 广度优先搜索、链表、数组、排序、栈、队列、哈希、字符串等。你要先完成专项练习中一些简单的题目，理解其背后的算法和数据结构。之后，再举一反三，练习更多相关的题目，当你能做到用同一个算法解决一类共性问题，做到 多题一解 时，才算是真正理解了。

总之,刷算法题是一个漫长而艰辛的过程,但如果坚持下去,一定会收获丰硕的成果。保持积极乐观的心态,循序渐进地提升自己,相信您一定能够成为出色的软件工程师。


5 大基本算法及其适用情况

以下是一些补充，希望能更完善你的总结：

1. 贪心算法：

核心思想： 贪心算法总是做出在当前看来最优的决策，希望通过一系列局部最优选择来达到全局最优。
适用场景： 适用于能将问题分解成一系列子问题，且每个子问题的最优解能直接推导出全局最优解的问题。
典型例子： 活动选择问题、哈夫曼编码、最小生成树问题（Prim 算法和 Kruskal 算法）。
2. 分治法：

核心思想： 将一个复杂问题分解为多个相同或相似的子问题，递归地解决这些子问题，然后将子问题的解合并起来得到原问题的解。
典型例子： 归并排序、快速排序、二分查找。
3. 动态规划：

核心思想： 将问题分解成一系列子问题，存储每个子问题的解，避免重复计算，并利用子问题的解来构建原问题的解。
适用场景： 适用于具有最优子结构性质、无后效性、存在重叠子问题的问题。
典型例子： 斐波那契数列、最长公共子序列、背包问题。
4. 回溯：

核心思想： 尝试所有可能的解，并在搜索过程中不断剪枝，避免无效的搜索。
适用场景： 适用于寻找所有可能的解，或者寻找满足特定条件的解的问题。
典型例子： 八皇后问题、迷宫问题、旅行售货员问题。
5. 穷举：

核心思想： 枚举所有可能的解，并逐一判断是否满足条件。
适用场景： 适用于问题规模较小，且所有可能的解都能被枚举的问题。
典型例子： 寻找数组中最大的元素、判断一个数是否为素数。
算法性质：

有穷性： 算法必须在有限步内结束。
确定性： 算法的每一步操作都有明确的定义，不会出现歧义。
输入项： 算法有 0 个或多个输入，用来描述问题的初始状态。
输出项： 算法有一个或多个输出，用来反映对输入数据的处理结果。
可行性： 算法中的操作都能通过计算机实现。
补充说明：

算法复杂度分析： 理解算法复杂度分析是学习算法的重要环节，它可以帮助你评估算法的效率，选择最优的算法。
数据结构： 算法和数据结构密切相关，理解常用的数据结构，如数组、链表、栈、队列、树、图等，可以帮助你更好地设计和实现算法。

贪心选择的一般特征：贪心选择性质和最优子结构性质。

贪心算法和动态规划算法都要求问题具有最优子结构性质，这是两类算法的一个共同点。大多数时候，能用贪心算法求解的问题，都可以用动态规划算法求解。但是能用动态规划求解的，不一定能用贪心算法进行求解。

找到最优子结构 => 动态规划解**最值问题**，状态转移方程

1. 最优子结构性质。如果问题的最优解所包含的子问题的解也是最优的，我们就称该问题具有最优子结构性质（即满足最优化原理）。最优子结构性质为动态规划算法解决问题提供了重要线索。
2. 无后效性。即子问题的解一旦确定，就不再改变，**不受在这之后、包含它的更大的问题的求解决策影响**。**解的计算不依赖于问题的后续阶段，只依赖于当前阶段的状态**。这使得我们可以独立地解决子问题，而不必关心它们如何被组合起来形成更大的问题的解决方案。
3. 子问题重叠性质。子问题重叠性质是指在用递归算法自顶向下对问题进行求解时，每次产生的子问题并不总是新问题，有些子问题会被重复计算多次。动态规划算法正是利用了这种子问题的重叠性质，对每一个子问题只计算一次，然后将其计算结果保存在一个表格中，当再次需要计算已经计算过的子问题时，只是在表格中简单地查看一下结果，从而获得较高的效率，降低了时间复杂度。

## Dynamic Programing

动态规划（Dynamic Programming，简称DP）是一种求解最优化问题的方法。它通过将问题分解成更小的子问题，利用子问题的解来构造原问题的解。动态规划的核心思想是避免重复计算，通过存储子问题的结果来提高效率。下面是动态规划在多个领域的应用和示例代码。

https://leetcode.cn/circle/discuss/tXLS3i/

**动态规划（入门/背包/状态机/划分/区间/状压/数位/树形/数据结构优化）**

## **栈、队列**

**栈是递归的底层实现，** 我们用栈实现队列，用队列实现栈来掌握的栈与队列的基本操作。

接着，通过括号匹配问题、字符串去重问题、删除字串问题，逆波兰表达式问题来系统讲解了栈在系统中的应用，以及使用技巧。

通过求滑动窗口最大值，以及前K个高频元素介绍了两种队列：单调队列和优先级队列，这是特殊场景解决问题的利器，是一定要掌握的。

> 正常循环的情况下，数组的滚动（游标移动）是向后的，引入栈的时候，**则可以有了向前滚动的机会（有了一定的反悔的机会），然后这样子就能够解决一些局部的问题**（比如说，寻找相邻的大的数字）。由于栈还可以对于没有价值（已经发现了大的数字）的东西删除，这样子的遗忘功能，**简化了搜索空间，问题空间。**
> 

当一个算法完全不进行**多余**的运算，那么它是一个时间复杂度最低的算法。但我们往往会对一些结果进行**重复**的计算，那么栈的引入就是为了解决这样的问题，栈**存储**了一些**重要**的运算结果，用于和接下来的元素进行**比较**。

**单调队列**
	可以查询区间最值（不能维护区间k大，因为队列中很有可能没有k个元 素）
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

滑动窗口指的是这样一类问题的求解方法，在数组上通过双指针同向移动而解决的一类问题。将嵌套的循环问题，转换为单循环问题，降低[时间复杂度](https://www.zhihu.com/search?q=%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A620247024%7D)为O（n）。

1. 内层循环 **`for window[c]`** 用来缩小窗口。虽然它看起来是嵌套在外层循环中的，但实际上每个字符只会被从窗口中移出一次。也就是说，左指针 **`left`** 最多移动 n 次。

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

### Graph

Floyd 算法       是用来求任意两个结点之间的最短路的。

复杂度比较高，但是常数小，容易实现（只有三个 `for`）。

适用于任何图，不管有向无向，边权正负，但是最短路必须存在。（不能有个负环）

Dijkstra 算法的基本思路。它使用优先队列来管理节点，不断选择距离源节点最近的节点，并更新与其相邻节点的距离，直到所有节点都被访问过或者最短路径已知。

**一个连通图的生成树是一个极小连通子图，它含有图中全部顶点，但只有足以构成一棵树的n-1条边。**

**生成树**是对应连通图来说，而生成森林是对应非连通图来说的。如果一个图有n个顶点和小于n-1条边，则是非连通图；如果它多于n-1条边，则一定有环，但有n-1条边的图不一定是生成树。

并查集，在一些有N个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，其间要查找一个元素在哪个集合中。

**并查集应用**

- **求连通分量**：依次对每个边的两个顶点进行并查集合并，可以使得每个连通分量的root相同，从而得出每个连通分量。
- **查找环**：合并过程中，如果发现一条边的两个顶点已经合并过，说明这两个顶点之前已经通过其他路径合并，再加上这条边，图中就出现了环。
- **求最小生成树**：贪心思想，从小到大排序所有边，使用并查集依次合并，并跳过形成环的边，即可得到最小生成树。

拓扑排序

使用Kahn算法，实际上就是一种BFS算法。在解决有向无环图的时候比较有用。

● 计算入度，将所有入度为0的顶点加入队列

● 取出队列顶点，更新入度，重复操作

## 回溯法+剪枝/ DFS

```

result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```

这一类问题都需要先画出树形图，然后编码实现。

编码通过 深度优先遍历 实现，使用一个列表，在 深度优先遍历 变化的过程中，遍历所有可能的列表并判断当前列表是否符合题目的要求

如果题目要求，结果集不计算顺序，此时需要按顺序搜索，才能做到不重不漏。「力扣」第 47 题（ 全排列 II ）、「力扣」第 15 题（ 三数之和 ）也使用了类似的思想，使得结果集没有重复。

Recursive algorithms can be both **in-place and not-in-place**, depending on how they are implemented. In computer science, an "in-place" algorithm is one that uses **a constant amount of extra memory** or auxiliary data structures to perform its operations, regardless of the size of the input data. On the other hand, a "not-in-place" algorithm uses additional memory that grows with the input size. 因此，虽然精确的空间复杂度分析（O(1)、O(n) 等）对于理论讨论和比较很有用，但现实世界的考虑通常会导致对算法的内存使用情况进行更细致的评估。目标是在空间效率和算法简单性之间取得平衡，使代码更容易理解和维护，同时仍然实现可接受的性能。 

## 树和二叉树

两种递归本质的理解也殊途同归一下：

1. 树本身是一种简单化的图
2. 自顶向下/自下向上本质上对应着dfs（深度优先）/bfs（广度优先）
- **先序遍历（前序遍历）**：先访问当前节点，然后递归地访问左子树和右子树。它是DFS的一种体现，常用于创建复制树、输出树结构等。
- **中序遍历**：先访问左子树，然后访问当前节点，最后访问右子树。兼具 DFS 和 BFS 的思想，在二叉搜索树中，它能得到有序的结果（类似 BFS 的层次感），**但遍历过程仍然是深度优先的**。
- **后序遍历**：先递归地访问左子树和右子树，然后访问节点本身。这不完全对应BFS。后序遍历常用于先处理子节点再处理父节点的情形，如树形DP、计算树的高度等，其实更倾向于DFS的一种应用。

**快速排序与二叉树的前序遍历类比：**

快速排序的过程可以类比为二叉树的前序遍历，因为快速排序通过选取一个基准值（pivot），将数组分为两部分，并递归地对子数组进行排序。这个过程可以类比为前序遍历，先处理当前节点（即当前的基准值），然后递归地处理左右子树（较小和较大的元素）。

**归并排序与二叉树的后序遍历类比：**

归并排序的过程可以类比为二叉树的后序遍历，因为归并排序将数组递归地分割为更小的子数组，然后合并这些子数组。这个过程类似于后序遍历，先递归地处理左右子树（将数组分割为更小的部分），然后在递归回溯时进行合并操作（将两个有序的子数组合并为一个有序的数组）。

虽然这种类比有助于理解快速排序和归并排序的工作原理

动归/DFS/回溯算法都可以看做二叉树问题的扩展，只是它们的关注点不同：

- **动态规划**：动态规划是一种将问题分解为子问题，并以自底向上的方式解决的方法。每个子问题的解决方案被记录下来，以避免重复计算。你可以将动态规划问题视为填充一张二维表格，其中每个格子代表一个子问题的解，从而形成一种树状的结构。这与二叉树的概念有些类似。
- **回溯**：**回溯是一种深度优先的搜索方法**，通常用于解决排列、组合、子集等问题。你可以将回溯过程看作在一个决策树上的遍历，每个节点代表一个选择，通过遍历树上的路径来寻找解。你的理解关于回溯关注于节点间的「树枝」是正确的。

回溯算法是系统地搜索问题的解的方法。

某个问题的所有可能解的称为问题的解空间，若解空间是有限的，则可将解空间映射成树结构。

任何解空间可以映射成树结构的问题，都可以使用回溯法。

回溯法是能够在树结构里搜索到通往特定终点的一条或者多条特定路径。

回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试，从而搜索到抵达特定终点的一条或者多条特定路径。

值得注意，回溯法以深度优先搜索的方式搜索解空间，并且在搜索过程中用**剪枝**函数避免无效搜索。

- **DFS**：深度优先搜索是一种遍历图或树的方法。它从一个起始节点出发，沿着一个路径一直向下遍历，直到无法继续为止，然后回溯并探索其他分支。你的理解关于DFS关注于单个「节点」也是正确的。

如上面所言，深度优先搜索是特定于图结构的一种搜索算法，回溯算法是特定于树结构的搜索算法。

遍历

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c57a2004-37c9-4653-9daa-ac2816fc2790/Untitled.png)

中序遍历：递归，栈，移动右子树使用pre指针遍历

Morris 遍历是一种不使用递归和栈，而是利用线索二叉树（Threaded Binary Tree）的思想来实现二叉树的遍历，包括中序遍历、前序遍历和后序遍历。Morris 遍历的优点在于它使用的**空间复杂度是 O(1)，**并且不会破坏原来的树结构。（leetcode99 

Morris 遍历算法的关键在于如何建立临时的线索连接，从而在遍历过程中完成左右子树节点的跳转，而不需要额外的空间。

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

一共有几个和为 `k` 的子数组。给定一个二进制数组 `nums` , 找到含有相同数量的 `0` 和 `1` 的最长连续子数组，并返回该子数组的长度。

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

历史上至少有过两个问题，它们看起来非常困难，非常不像 P 问题，但在人们的不懈努力之下，最终还是成功地加入了 P 问题的大家庭。其中一个是线性规划（linear programming），它是一种起源于二战时期的运筹学模型。1947 年，乔治·丹齐格（George Dantzig）提出了一种非常漂亮的算法叫作“单纯形法”（simplex algorithm），它在随机数据中的表现极为不错，但在最坏情况下却需要耗费指数级的时间。因此，很长一段时间，人们都在怀疑，线性规划是否有多项式级的算法。直到 1979 年，人们才迎来了线性规划的第一个多项式级的算法，它是由前苏联数学家列昂尼德·哈奇扬（Leonid Khachiyan）提出的。

另外一个问题则是质数判定问题（primality test）：判断一个正整数是否是质数（prime），或者说判断一个正整数是不是无法分成两个更小的正整数之积。人们曾经提出过各种质数判定的多项式级算法，但它们要么是基于概率的，要么是基于某些假设的，要么是有一定适用范围的。2002 年，来自印度理工学院坎普尔分校的阿格拉瓦尔（M. Agrawal）、卡亚勒（N. Kayal）和萨克斯泰纳（N. Saxena）发表了一篇重要的论文《PRIMES is in P》，给出了第一个确定性的、时间复杂度为多项式级别的质数判定算法，质数判定问题便也归入了 P 问题的集合。很容易看出，找出一个多项式级的答案**验核**算法，再怎么也比找出一个多项式级的答案**获取**算法更容易。

为了练习函数与循环，判断一个数是否为质数：**我们来实现一个平方根函数：用牛顿法实现平方根函数。**

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

在数学中，**数根**(又称位数根或数字根Digital root)是自然数的一种性质，换句话说，每个自然数都有一个数根。数根是将一正整数的各个位数相加（即横向相加），若加完后的值大于10的话，则继续将各位数进行横向相加直到其值小于十为止[1]，或是，将一数字重复做数字和，直到其值小于十为止，则所得的值为该数的数根。

例如54817的数根为7，因为5+4+8+1+7=25，25大于10则再加一次，2+5=7，7小于十，则7为54817的数根。

数根是一种对数值进行处理的方法，它可以帮助我们快速计算数字的特性，如同余、整除性等，并且可以作为验证计算正确性的方法。主要用途如下：

1. **计算模运算的同余**：
    - 通过计算数根，可以方便地进行模运算的同余判断。在处理大数字时，数根可以简化计算，节省时间和计算资源。
2. **验证计算正确性**：
    - 数字的数根可以用作验证计算结果的正确性的方法。例如，通过对两个数字的数根进行运算，可以检查它们的和的数根是否等于原数字的数根之和。
3. **判断整除性**：
    - 数根能够帮助判断一个数是否能被3或9整除。如果一个数字的数根能被3或9整除，那么原始的数字也能被3或9整除。

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


