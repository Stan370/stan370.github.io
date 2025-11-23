---
title: 深入理解Git 和 分支， merge / rebase / cherry-pick：历史结构的不同操作方式
date: 2025-11-23 16:01:51
---
Git（/ ɡɪt /） 是一个分布式版本控制 软件系统，能够管理源代码或数据的版本。它通常用于协作开发软件的程序员控制源代码，with nearly 95% of developers reporting it as their primary version control system as of 2022.
Git 的基本单位包括仓库（Repository）、提交（Commit）和分支（Branch）。一个完整的仓库保存了项目的完整历史记录，每次提交都是对仓库当前状态的一次记录，而分支则允许多个并行开发线。 
1. 仓库（Repository）
作用：保存了项目的完整历史记录，是 Git 的基础单位，也是项目的核心。
特点：每个本地的克隆就是一个功能齐全的存储库，允许用户离线工作。 
2. 提交（Commit）
作用：是对仓库所做的改动的记录，是版本控制的基本单位。
特点：
每次提交都会保存当前项目的状态，并生成一个唯一的版本号（commit id）。
这个 commit id 是一个使用 SHA-1 计算出来的长十六进制字符串，但通常可以使用前面几位来唯一标识。
习惯上也被称为“版本”。 
3. 分支（Branch）
作用：允许多个并行开发线，可以将不同的开发工作分离开来。
特点：
在一个项目中可以有多个分支，每个分支都是一个独立的开发线。
提交是构成一个“提交树”或“提交图”的基本元素，而分支是这个图中的一个节点，指向了特定提交。
## Git 的历史：为什么分支是它的灵魂
早期：CVS → Subversion（集中式）。协作成本高，分支笨重。

2005 年 BitKeeper 商业纠纷爆发，Linux 内核团队被迫换工具。Linus Torvalds 用 10 天写了 Git 的雏形，目标非常明确：

分支要“几乎无成本”（cheap）合并要极快
历史要不可变（内容寻址 + DAG + 哈希完整性）

分布式，每个人都是完整仓库副本（无中心）
这套设计直接反向塑造了 Git 的哲学：
你应该随时开分支、随时试错、随时丢弃，因为分支和合并本来就是最轻的数据操作。

Git 不是记录文件，它记录的是“变化的图”。每个 commit 是一个节点，分支只是指针，合并就是让 DAG 有一个新的汇合点。
BitKeeper：Linux 内核曾用 BitKeeper（商业）做分布式工作流；2005 年 BitKeeper 纠纷后，Linus Torvalds 造了 Git（目标：速度、分布式、数据完整性）。

2005 之后：Junio Hamano 成为长期维护者，Git 设计逐渐成熟。
2008+：GitHub/Bitbucket/GitLab 等兴起，把分支+Pull Request/Code Review 的模式推到大众。

近年：从“只能用 SHA-1”到支持更现代的 hash（朝着 SHA-256 迁移方向），以及更强的签名与安全特性；大体上 Git 从内核用的工具变成了一套工程文化。

## 核心哲学

分支是“廉价的实验空间”。Git 设计就是鼓励你频繁分支、试错、合并、丢弃。

历史是“叙述”而非单纯数据；你要决定历史是“真实记录发生过什么”还是“把演化写成一条干净的故事线”。两者都有价值，选一个并把团队规则统一。

不要把版本控制当档案箱：它是协作工具、回退工具、追踪工具。commit 应该表达“为什么做”，而不仅是“做了什么”。

核心实现模型

Git 的基本单位是 commit（有 SHA 的对象），整个 repo 是 DAG（有向无环图）。分支是对某个 commit 的可移动指针。

三个工作区：工作区（working tree）、暂存区（index/staging）、HEAD（当前分支指向的 commit）。理解这三层可以解释很多命令的行为。

commit 是不可变的：rebase/amend 都是“创建新 commit 并移动指针”。这也是为什么“改历史”会造成共享分支问题。

reflog 是本地的恢复保险箱：可以从被删除或被覆盖的指针里找回 commit。

实践（策略、命令、场景决策）

分支策略：几种常见选择与取舍

Trunk-based（推荐现代 CI/CD）

分支寿命短（hours→days），频繁合并到 main；搭配 feature toggle。优点：持续集成、少冲突、部署频繁。缺点：需要更成熟的测试与回滚手段。

GitHub Flow（简单）

main + short-lived feature branches + PR + CI → merge（常用 squash 或 merge commit）。适合 web 服务快速迭代。

Gitflow（复杂，历史悠久）

master/release/develop/feature/hotfix 分支模型，适合有严格版本发布/长生命周期的产品，但对现代快速部署有点重。
选择原则：越频繁部署越倾向 trunk-based；如果版本管理严格（多长期 release 支线），再引入 release/hotfix/backport 流程。


本地开发：用 git rebase origin/main 保持分支线性、提前解决冲突，再 push。

公共分支（main/master/release）：不要重写历史（避免在别人共享的分支上 rebase+force push）。

团队约定：

想保留分叉历史 → 用 merge commit。

想要干净线性历史 → PR 合并前允许作者 rebase -i 整理，再 fast-forward 或 squash-merge。

## 合并策略：什么时候用 merge / rebase / squash / cherry-pick？
Git 的所有操作都只是**对 DAG（有向无环图）的修改方式不同**。merge 改结构，rebase 改节点，cherry-pick 复制 diff。理解这一点，你就不会混淆这三者。

### **merge：保留分叉史，产生一个新的合并节点**

merge 会创建一个新的 commit，带两个 parent。它忠实记录“这里发生过一次分叉和合并”。历史是树状的，开发过程是什么样，它就是什么样。

冲突处理：

- 手动改冲突 → `git add .` → `git commit` 就结束
- merge 不会重写旧 commit，也不会改分支起点位置

用图感受下（简化）：

```
A---B---C (main)
     \
      D---E (feature)
```

merge 后：

```
A---B---C-------M
     \         /
      D---E---
```

特征是“双线合一”，这就是 merge 的叙事方式。

适用于：

* 团队多人并行工作
* 不希望改写历史
* CI/审计需要完整记录
* long-running branches（release/hotfix）
---

### **rebase：重写你的这条历史，把你的 commits 重新贴到目标分支上**

rebase 把你在 feature 分支的 commit **完全复制一份**，贴到目标分支最新 commit 后面。旧的 commits 成为孤儿，等待 GC。

冲突处理：

- 手动改冲突 → `git add .` → `git rebase --continue`
- 或跳过：`git rebase --skip`

核心代价是：**历史不再真实，你修改了已存在的 commit。**

适用：本地 feature 分支整理历史，让分支更干净。

图示：

```
A---B---C (main)
     \
      D---E (feature)
```

你 rebase 到 main：

```
A---B---C---D'---E'
```

---

### **pull：merge pull 和 rebase pull 的根本差异**

`git pull` = fetch + merge

`git pull --rebase` = fetch + rebase

区别不在于“有没有合并”，而在于*合并方式*：

- `git pull` 默认会在每次拉取远程更新时产生一个 merge commit
    
    → 历史里出现一堆 “Merge branch 'origin/main' into xxx”
    
- `git pull --rebase` 不会产生 merge commit
    
    → 它把你本地的 commits 重新贴到远程最新提交后面
    
    → 历史保持线性，可读性更强
    

绝大多数个人开发者和小团队偏向 `pull --rebase`，因为它没有多余 merge commit。

---

## **merge vs rebase 的本质区别**

merge 和 rebase 都不能避免冲突。冲突来自 diff 不兼容，与选择何种“策略”无关。

真正的区别是对历史的态度：

- **merge**
    
    → 历史真实、有分叉、有合并
    
    → 记录“feature 是从哪里拉出来的”
    
    → 会产生 merge commit
    
    → DAG 有多条线
    
- **rebase**
    
    → 历史线性、整洁
    
    → “假装这个分支是从最新位置拉出来的”
    
    → 不会产生 merge commit
    
    → DAG 永远只有一条线
    
    → 但牺牲历史真实性（尤其多人与公有仓库时危险）
    

最后结果（文件内容）可以一样，但历史（DAG）完全不一样。

---

## **rebase 的经典团队场景：本地 feature 分支紧跟最新主干**

你从 master 拉出 feature-a，结果别人把 feature-b merge 回 master 了。

如果你不 rebase，本地 feature-a 的起点就会落后。

在多人协作下，这会导致你的 PR 冲突巨大、历史混乱。

正确做法：

```
git checkout feature-a
git fetch origin
git rebase origin/master
# 解决冲突 -> add -> rebase --continue

```

你得到的是一条干净的线性分支，并且你提前修过一次冲突，不会让 reviewer 面对一堆 merge noise。

这一点在大项目里几乎是强制要求：

**feature 分支必须在合并前 rebase 到最新 master。** 同时禁止 rebase main 三条原因：
1. **破坏共享历史**

   * rebase 会导致团队本地历史不一致
   * 容易 force push 覆盖他人工作

---

## **cherry-pick：把某个 commit 的 diff 当补丁复制到当前分支**

> cherry-pick = 将一个 commit 的 diff 重新应用到当前分支，生成一个全新的 commit（不同 SHA）。
> 

它更像补丁系统，用 commit 的 diff 做一次“复制/粘贴”。不会合并分支、不保持 parent，也不重写整条分支，仅仅是把特定变更搬过来。原始 commit 和新 commit 是两个不同的 SHA。

这种操作针对“我只要这个修复，不要整个分支”。

典型用途：

**修 bug： 把 feature 分支里的某个 fix cherry-pick 到 release 分支**

**跨版本热修（hotfix）**

**从实验分支挑选部分变更到稳定分支cherry-pick 在 90% 以上的长线维护仓库中作为“bugfix backport 工具”长期存在**

**它不保存分支结构、不保存 parent 信息，也不会合并任何历史，只是把那段变更抠出来贴到你现在的 HEAD 后。**

核心使用场景：

开源项目常见标签：

`needs backport to 1.30`

`needs cherry-pick`

核心目标是“稳定版修 bug，但不带入主干的其他变更”。

你可以用这个模型判断任何 Git 操作：

- **merge**：修改 DAG 结构，产生多 parent 合并节点。
- **rebase**：重写 DAG 节点，重新生成 commit。
- **cherry-pick**：复制 diff，不修改历史，不合并结构。

merge = 历史真实

rebase = 历史干净

cherry-pick = 精确移植变更

这三个操作没有对错，只有适用场景。