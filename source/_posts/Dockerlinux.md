---
title: 从Docker容器探究Linux
date: 2024-06-14 17:43:33
categories: 
- 计算机科学
tags:
- 计算机基础
---
我最近一直在研究开源多语言应用服务器 NGINX Unit。在研究中，我注意到 Unit 同时支持 namespace 和 cgroup 这两项 进程隔离 的特性本文将介绍这两大构成 容器 基础的 Linux 技术。 容器及相关工具（例如 Docker 和 Kubernetes） 出现有一段时间了。它们改变了现代应用环境中软件的开发和交付方式。容器可支持软件在各自的隔离环境中快速部署和运行，而无需用户构建单独的虚拟机 (VM)。 大多数人可能很少考虑容器的工作基础，但我认为，了解底层技术很重要，因为这有助于我们制定决策。另外，就我个人而言，能够彻底弄清事物的工作原理令我心情舒畅！

Docker由Solomon Hykes及其团队在DotCloud（后来更名为Docker, Inc.）公司内部开发和推出。Docker的初次发布是在2013年3月。Docker 在初期与 Warden 类似，使用的也是 LXC，之后才开始采用自己开发的 libcontainer 来替代 LXC，它是将应用程序及其依赖打包到几乎可以在任何服务器上运行的容器的工具。与其他只做容器的项目不同的是，Docker 引入了一整套管理容器的生态系统，这包括高效、分层的容器镜像模型、全局和本地的容器注册库、清晰的 REST API、命令行等等。

## 发明Docker的背景和初衷
问题背景
开发环境与生产环境不一致：


在传统的软件开发过程中，开发环境和生产环境之间往往存在差异，这会导致应用程序在开发人员的机器上运行正常，但在生产环境中出现问题。这种“在我的机器上能运行”的问题困扰了许多开发团队。
依赖管理的复杂性：

现代应用程序通常依赖于许多不同的库、框架和服务。管理这些依赖关系，并确保它们在不同环境中的一致性，是一个复杂且容易出错的过程。
资源效率低下：

Namespace 作为 Linux 内核的组成部分大约出现于 2002 年，随着时间的推移，Linux 内核添加了更多的工具和 namespace 类型。然而，直到 2013 年，Linux 内核才添加了真正的容器支持。

Docker引入的解决方案
Docker利用操作系统层的虚拟化技术，通过Linux内核的Cgroups和Namespaces实现轻量级的容器。与虚拟机不同，容器共享主机操作系统的内核，但仍提供进程级别的隔离。这使得容器比虚拟机更轻量、更高效。

通过Docker，开发人员可以将应用程序及其所有依赖项打包成一个标准化的容器镜像。这个容器镜像可以在任何支持Docker的环境中运行，从而确保开发、测试和生产环境的一致性。Docker容器的快速启动和停止使得应用程序的部署和扩展变得更加简便。容器的不可变性也有助于实现更可靠的持续集成和持续交付（CI/CD）流程。Docker天然适合微服务架构，每个微服务可以运行在一个独立的容器中，互不干扰。这简化了微服务的开发、部署和管理。
### WSL

WSL 提供的隔离比传统的虚拟机和容器要弱得多。它更注重与 Windows 的集成和互操作性，而不是隔离。WSL 更像是一个集成的开发环境，可以在 Windows 中无缝运行 Linux 工具和应用程序，但它没有提供强隔离性的需求，比如网络隔离或进程隔离。因此，WSL 更适合用于开发和测试场景，而不是对隔离性要求很高的生产环境。

1. **File System:** WSL interacts with the Windows file system, which means there might be differences in file I/O performance or behavior compared to a native Ubuntu installation where it interacts directly with Linux file systems like ext4.
2. **Integration:** WSL provides integration features allowing Windows and Linux to communicate and share resources. However, this integration might not be as seamless as in a native Ubuntu environment.
3. **Hardware Access:** Certain hardware functionalities and access might be different between WSL and native Ubuntu due to how WSL interacts with the underlying Windows system.
## Linux内核调用
Namespaces和Cgroups是容器化技术的两个关键机制，它们分别用于实现进程隔离和资源管理。以下是对Namespaces和Cgroups的详细介绍：

Namespace 作为 Linux 内核的组成部分大约出现于 2002 年，随着时间的推移，Linux 内核添加了更多的工具和 namespace 类型。然而，直到 2013 年，Linux 内核才添加了真正的容器支持。至此，namespace 开始大显身手，并得到了广泛应用。
Linux 内核包含了不同类型的 namespace。每个 namespace 都有自己的独特属性。

- IPC：隔离System V IPC和POSIX消息队列。
- Network：隔离网络资源。
- Mount：隔离文件系统挂载点。
- PID：隔离进程ID，使得每个Namespace内的进程拥有独立的PID空间。一个Namespace中的进程无法看到或干扰另一个Namespace中的进程。
- UTS：隔离主机名和域名。
- User：隔离用户ID和组ID。

**NameSpace**我们知道Linux中的PID、IPC、网络等资源是全局的，而NameSpace机制是一种资源隔离方案，在该机制下这些资源就不再是全局的了，而是属于某个特定的NameSpace，各个NameSpace下的资源互不干扰，这就使得每个NameSpace看上去就像一个独立的操作系统一样，但是只有NameSpace是不够。
**Control groups**虽然有了NameSpace技术可以实现资源隔离，但进程还是可以不受控的访问系统资源，比如CPU、内存、磁盘、网络等，为了控制容器中进程对资源的访问，Docker采用control groups技术(也就是[cgroup](https://www.zhihu.com/search?q=cgroup&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22187505981%22%7D))，有了cgroup就可以控制容器中进程对系统资源的消耗了，比如你可以限制某个容器使用内存的上限、可以在哪些CPU上运行等等。

有了这些理论，现在我们实际创建一个新的 namespace 以加深理解。Linux unshare 命令是一个很好的着手点。手册页显示它就是我们要找的：

NAME
          unshare - run program in new name namespaces
当前我以普通用户 svk 的身份登录，该用户拥有自己的用户 ID、组等，但没有 root 权限：

`svk $ id
uid=1000(svk) gid=1000(svk) groups=1000(svk) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c.1023`
现在，我运行以下 unshare 命令，使用自己的 user 和 PID namespace 创建一个新的 namespace。我将 root 用户映射到新的 namespace（换句话说，我在新的 namespace 中拥有 root 权限），挂载一个新的 proc 文件系统，并在新创建的 namespace 中进行进程（本例中为 bash）分支。

`svk $ unshare --user --pid --map-root-user --mount-proc --fork bash
`（对于熟悉容器的人来说，这相当于在运行的容器中执行 <runtime> exec -it <image> /bin/bash 命令。）

ps -ef 命令显示有两个进程正在运行（bash 和 ps 命令本身），并且 id 命令确认我在新的 namespace 中是 root 用户（这一点也可以从更改的命令提示符看出）：

`root # ps -ef
UID         PID     PPID  C STIME TTY        TIME CMD
root          1        0  0 14:46 pts/0  00:00:00 bash
root         15        1  0 14:46 pts/0  00:00:00 ps -ef
root # id
uid=0(root) gid=0(root) groups=0(root) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c.1023`
需要注意的是，我只能看到我的 namespace 中的两个进程，而看不到系统上运行的任何其他进程。我完全隔离在自己的 namespace 中。

从外部角度看 Namespace
虽然我从自己的 namespace 中看不到其他进程，但我可以使用 lsns (list namespace) 命令，从父 namespace（在新的 namespace 之外）的角度列出所有可用的 namespace 并显示其相关信息。


## Docker 文件系统和分层存储
Docker镜像的工作原理涉及多个重要概念，包括rootfs、Union mount、image和layer。
### 1. rootfs

- **定义**：rootfs（root filesystem）是一个操作系统在启动时所需要的最低限度文件系统，它包含所有必要的文件和目录。
- **在Docker中的作用**：在Docker中，rootfs通常指的是基础镜像层，它包含了操作系统的文件系统（如Linux的文件系统），这是容器运行所需的基本环境。例如，一个Ubuntu基础镜像的rootfs包含了Ubuntu系统的文件和目录。

### 2. Union Mount

- **定义**：Union mount是一种文件系统技术，允许将多个不同的文件系统层合并成一个单一的文件系统视图。它实现了多个层的叠加，使得用户可以看到一个合并后的文件系统。
- **在Docker中的作用**：Docker利用Union mount技术将镜像的各层（只读层）和容器的可写层合并在一起，形成一个统一的文件系统视图。每个容器启动时，都会在镜像的基础上创建一个新的可写层，这个可写层是临时的，当容器删除时也会被删除。

### 3. Image

- **定义**：在Docker中，image（镜像）是一个只读的模板，用于创建Docker容器。镜像包含了应用程序及其所有依赖项，以及运行应用程序所需的操作系统环境。
- **在Docker中的作用**：镜像是构建和运行容器的基础。每个镜像由多个层组成，每层都基于其下的层构建。镜像可以从Docker Hub等镜像仓库中拉取，也可以通过Dockerfile自定义构建。

### 4. Layer

- **定义**：layer（层）是Docker镜像的基本组成单位。每个镜像是由多个只读层叠加而成的，每一层都是前一层的增量更新。
- **在Docker中的作用**：层是Docker镜像的核心特性之一。每个Dockerfile中的命令都会创建一个新的层。镜像的每一层都存储了该层的文件系统变更（添加、修改或删除的文件）。由于层的可重用性和缓存机制，Docker在构建镜像时可以显著提高效率，减少重复下载和存储的数据量。

关系

- **rootfs**：作为基础层，为容器提供必要的操作系统文件和目录。
- **Union mount**：将多个只读层和一个可写层合并成一个统一的文件系统视图，使得容器能够在不修改基础镜像层的情况下运行和保存数据。
- **Image**：由多个只读层组成，提供了创建和运行容器的模板。
- **Layer**：构成镜像的基本单位，每一层都是对前一层的增量更新，通过层的叠加和Union mount技术，实现了高效的镜像构建和管理。

假设我们有一个简单的Dockerfile，用于构建一个包含Nginx的镜像：

```
dockerfile复制代码`
FROM ubuntu:20.04      # 基础镜像，提供rootfs
RUN apt-get update && apt-get install -y nginx  # 创建一个新层，安装Nginx
COPY index.html /var/www/html/index.html  # 创建另一个新层，复制文件`

```

1. **rootfs**：Ubuntu基础镜像提供了操作系统的文件系统。
2. **Union mount**：在运行容器时，Docker将基础镜像层（只读）和容器的可写层合并在一起，提供一个统一的文件系统视图。
3. **Image**：这个Dockerfile构建出的镜像包含了Ubuntu操作系统和安装的Nginx软件，以及复制的文件。
4. **Layer**：每个`RUN`、`COPY`指令都会创建一个新的层，这些层共同构成了最终的镜像。

当 Docker Daemon 为 Docker Container 挂载 rootfs 的时候，与传统 Linux 内核类似，将其设定为只读（read-only）模式。在 rootfs 挂载完毕之后，和 Linux 内核不一样的是，Docker Daemon 没有将 Docker Container 的文件系统设为读写（read-write）模式，而是利用 Union mount 的技术，在这个只读的 rootfs 之上再挂载一个读写（read-write）的文件系统，挂载时该读写（read-write）文件系统内空无一物。

**Copy-On-Write (COW)** 文件系统的核心理念是：在需要修改数据时，不直接修改原始数据，而是将其复制到新的可写层，然后在该新层上进行修改。这样做的好处是：

- 原始数据保持不变，可以多次重复使用。
- 数据修改在新的层上进行，保证了数据的可追溯性和可恢复性。

具体到Docker，当容器试图修改一个只读文件时，例如 `/etc/hosts`，COW机制会将这个文件从只读层复制到可写层（容器存储层），然后对复制后的文件进行修改。这样，用户看到的文件系统就是修改后的版本，但原始的只读层数据并没有改变。

前面讲过镜像使用的是分层存储，容器也是如此。每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为 **容器存储层**。容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。

按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 [数据卷（Volume）](notion://www.notion.so/docker_practice/data_management/volume)、或者 [绑定宿主目录](notion://www.notion.so/docker_practice/data_management/bind-mounts)，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。

容器技术可实现不同云计算之间应用程序的可移植性，以及提供了一个把应用程序拆分为分布式组件的方法。此外，用户还可以管理和扩展这些容器成为集群。

**分层存储**

因为镜像包含操作系统完整的 `root` 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 [Union FS](https://en.wikipedia.org/wiki/Union_mount) 的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 `ISO` 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，**而是由一组文件系统组成，或者说，由多层文件系统联合组成。**

镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。

CMD命令设置容器启动后默认执行的命令及其参数，当Dockerfile中存在多个CMD命令，只有最后一个会被执行，但CMD设置的命令能够被docker run后面的命令行参数覆盖替换。 
ENTRYPOINT配置容器启动时的执行命令，当运行 docker run时指定了其他命令，docker run时指定的命令会追加到ENTRYPOINT配置命令行的参数一起执行。ENTRYPOINT 中的参数始终会被使用，与CMD不同，它不会被替换。