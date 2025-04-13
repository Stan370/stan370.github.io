---
title: Coding philosophy
date: 2024-10-10 12:49:46
categories: 感想
tags: personal growth
img: https://cdn.jsdelivr.net/gh/Stan370/stan370.github.io/medias/featureimages/0.jpg
---

# Coding philosophy
我们编写的每一行代码都讲述一个故事。它反映了我们的思维过程、解决问题的方法以及我们对手头任务的理解。但除了功能之外，代码还体现了一种哲学——指导我们的决策并塑造我们创建的软件的一组原则。This blog delves into the fascinating world of coding philosophies. We'll explore the diverse approaches developers take, from prioritizing elegance and simplicity to embracing pragmatism and efficiency. We'll discuss the trade-offs inherent in each philosophy and how they influence everything from code readability and maintainability to project timelines and team dynamics.




水平差的程序员往往对代码 “**不讲究**”，这其实是工程素养差的表现。

那不讲究的代码是什么样的呢？比如，同样含义的变量使用不同的名字、对偶功能（如增删改查）命名不成体系、相似代码不断重复而没有重用、反常逻辑没有任何注释、子模块间头重脚轻、好好的封装被改出几个洞等等（关于如何命名可参考我之前的一篇[文章](https://www.qtmuniao.com/2021/12/12/how-to-write-code-scrutinize-names/)）

**生命周期**。生命周期越长的代码，一定要写的越干净；临时使用代码，比如小脚本，就可以不讲究一些。反过来，也正是干净的代码才能成就超长的生命周期。

- **不要贬低你的工作**
    
    因为是新人，新手程序员总是倾向于认为他们的工作没那么重要。又或者也许你是一个有经验的程序员，但是在一个让你感到不适应的新领域里工作。在我看来，一些最好的想法正是来自于新手程序员，他们能看到现有技术的可改进之处，而那些已经形成固有观念的人却看不到。
    
    无论如何，你的工作都是有价值的。在最坏的情况下，如果你的方法失败了，社区至少可以更好的了解为何这种方法行不通。（对社区的一点说明：这条是我们要做的，要对新人友好一些。）
    
- **不用总是在压力下工作**
    
    新技术每天都会出现，这可能会让你觉得如果放慢脚步，就会与这个世界脱节。然而并不是这样的。事实上，如果你能很好的休息，你就能更好的工作。你的思路将保持清晰，我发现当我不工作时，我的潜意识里会出现很多新想法。
    
    那些每天不断发布的内容大部分都是一些现有想法的翻版。真正革命性的东西只会每几年才发生一次。关于这个话题有一个不错的分享值得一看：[吊床驱动开发](https://www.youtube.com/watch?v=f84n5oFoZBc)
    

# System design

技术创新与生产关系变革联系起来，并探讨了软件和运维架构背后的组织结构。这种观点可以为我们更好地理解技术变革的动力提供新的视角。让我们进一步探讨一下这些观点及其背后的逻辑。

### 技术创新与生产关系的变革

**容器和容器编排的兴起：**

- **背景：** 传统的虚拟机管理技术在面对大规模服务器时显得笨重和低效。
- **需求：** Google 等大型互联网公司需要一种更高效的管理方式，以便少数人能够管理数十万台服务器。
- **解决方案：** Kubernetes 的诞生使得容器编排成为可能，大大提高了资源利用率和管理效率。

这一变化不仅仅是技术上的创新，更是生产关系的变革。容器技术和容器编排的兴起，使得运维团队能够更加高效地协作和管理庞大的计算资源，实现了真正的自动化和规模化运维。

### 软件架构与团队组织架构

软件架构反映团队组织（康威定律）：

你提到了软件架构设计受到团队组织结构的影响，这正是康威定律的核心思想：

  “组织架构决定了系统架构。”（Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.）

这种架构的最大价值在于，它不仅仅是技术上的进步，更是对团队组织形式的一种优化，从而提升了整体的软件质量和开发效率。

### 宏内核与微内核的争论

**操作系统内核设计的选择：**

- **宏内核：** 由一个庞大的工程团队开发和维护，功能完备，但相对复杂。
- **微内核：** 由于资源有限，只专注于核心功能，其他功能由用户态软件实现。

这种选择背后实际上是组织协作方式的不同。大型公司可以投入大量资源开发复杂的宏内核，而开源项目则更倾向于开发微内核，通过社区协作来实现功能扩展。

### 实例分析

**IPVS、cgroups、eBPF 等技术：**

- 这些技术最初在用户态实现，但随着性能和功能需求的增加，逐渐进入了内核态。
- 这种迁移反映了对性能优化和功能需求的不断追求，同时也展示了技术发展过程中组织和协作方式的演变。



