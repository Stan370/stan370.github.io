---
title: 操作系统 I/O 多路复用，select / poll / epoll
date: 2024-09-15 12:16:23
categories: 
- 计算机科学
tags:
- 计算机基础
- 操作系统

---

在现代计算机系统中，I/O 操作是影响性能的关键因素，尤其是在网络服务和本地存储密集型应用中。你是否曾经思考过网络 I/O 和本地 I/O 之间的性能差异？为什么网络传输总是比本地硬盘慢？

函数select()、poll()和epoll()在网络编程和操作系统中用于监视多个文件描述符，以查看其中任何一个是否可进行 I/O（例如，套接字已准备好进行读/写）。这些主要用于事件驱动编程，特别是在服务器中同时处理多个连接时。那么，epoll 到底为什么如此高效？它如何超越传统的 select() 和 poll()？通过这篇讨论，你将深入了解为什么 epoll 是大规模网络 I/O 管理的首选，以及如何在实践中最大化其优势。

在操作系统中，程序运行的空间分为内核空间和用户空间， 用户空间所有对io操作的代码（如文件的读写、socket的收发等）都会通过系统调用进入内核空间完成实际的操作。
## 阻塞 I/O
在阻塞 I/O 模式下，系统调用（如 read() 或 recvfrom()）会一直等待，直到内核把数据准备好并传输到用户空间。此期间，线程会被挂起，CPU将被释放去做其他事情，但这个线程无法执行任何其他任务，直到 I/O 操作完成。这种情况会导致线程阻塞，尤其在高并发环境下，每个 I/O 操作都可能耗费大量时间等待。在linux中，默认情况下所有的socket都是阻塞的，一个典型的读操作流程大概是这样：![socket](https://cdn.jsdelivr.net/gh/Stan370/stan370.github.io@main/source/_posts/IOandEpoll/image-1.png)


当用户进程调用了 read()/recvfrom() 等系统调用函数，它会进入内核空间中，当这个网络I/O没有数据的时候，内核就要等待数据的到来，而在用户进程这边，整个进程会被阻塞，直到内核空间返回数据。当内核空间的数据准备好了，它就会将数据从内核空间中拷贝到用户空间，此时用户进程才解除阻塞的的状态，重新运行起来。
所以，阻塞I/O的特点就是在IO执行的两个阶段（用户空间与内核空间）都被阻塞了。

## 非阻塞 I/O

非阻塞 I/O 则允许程序发起 I/O 操作（例如 read() 或 recvfrom()），即使数据还没准备好，内核也不会让进程挂起，而是立即返回。此时用户进程得到的是一个错误，提示数据尚未准备好。用户进程需要不断轮询，重复调用 I/O 操作直到数据可用。这种方式避免了线程被阻塞的情况，但频繁的轮询可能会导致 CPU 使用效率低下。![alt text](https://cdn.jsdelivr.net/gh/Stan370/stan370.github.io@main/source/_posts/IOandEpoll/image-2.png)

## 多路复用 I/O
协程（英语：coroutine）是计算机程序的一类组件，推广了协作式多任务的子例程，允许执行被挂起与被恢复,协程可以通过yield（取其“退让”之义而非“产生”）来调用其它协程，接下来的每次协程被调用时，从协程上次yield返回的位置接着执行，通过yield方式转移执行权的协程之间不是调用者与被调用者的关系，而是彼此对称、平等的。
多路复用 I/O (select()，poll()，epoll()) 允许单个线程监控多个文件描述符（如 socket），从而在多个 I/O 操作之间进行复用。它的基本原理是通过轮询多个 socket，查看是否有数据到达，并在有数据到达时通知应用程序。相比非阻塞 I/O，这种机制更高效，特别适合于处理大量连接的服务器。
本地 I/O 操作通常为阻塞模式，即在进行 I/O 操作时，进程会被挂起直到操作完成。然而，现代操作系统也提供了非阻塞本地 I/O 或异步 I/O（如 Linux 的 aio 或 Windows 的 IOCP），允许应用程序继续执行其他任务而不等待 I/O 完成。网络 I/O 同样可以是阻塞的或非阻塞的。在非阻塞网络 I/O 中，进程发起 I/O 操作时不需要等待数据返回，可以继续执行其他操作。网络 I/O 领域中，异步 I/O、多路复用 I/O（如 select()、poll()、epoll()）、以及事件驱动编程（如 libuv、libevent）等技术被广泛使用，以应对高延迟和并发问题。

将协程与IO多路复用结合起来，可以实现高性能的并发IO程序。socket 是 Unix 中的术语。socket 可以用于同一台主机的不同进程间的通信，也可以用于不同主机间的通信。一个 socket 包含地址、类型和通信协议等信息，通过 socket() 函数创建：
int socket(int domain, int type, int protocol)
返回的就是这个 socket 对应的文件描述符 fd。操作系统将 socket 映射到进程的一个文件描述符上，进程就可以通过读写这个文件描述符来和远程主机通信。

可以这样理解：socket 是进程间通信规则的高层抽象，而 fd 提供的是底层的具体实现。socket 与 fd 是一一对应的。通过 socket 通信，实际上就是通过文件描述符 fd 读写文件。这也符合 Unix“一切皆文件”的哲学。使用IO多路复用技术监听多个socket，当有socket可读或可写时，通过事件通知，激活相应的协程进行处理。﻿
 
## 1.select() 
用法：允许监视多个文件描述符，以查看它们是否已准备好读取、写入或是否有错误。
限制：
具有可监控的最大文件描述符数量（通常为 1024）。此数量由 定义FD_SETSIZE，在高并发应用程序中可能会受到限制。
当有大量文件描述符时效率低下，因为它每次都必须检查每个描述符。
使用单一数据结构来保存读取、写入和错误描述符。

例子：
fd_set readfds; FD_ZERO(&readfds); FD_SET(socket_fd, &readfds); select(socket_fd + 1, &readfds, NULL, NULL, &timeout); 
## 2.poll()
poll 和 select 几乎没有区别。poll 在用户态通过数组方式传递文件描述符，在内核会转为链表方式存储，没有最大数量的限制 int poll(struct pollfd *fds, nfds_t nfds, int timeout);


好处：
struct pollfd使用比 使用的位掩码更具可扩展性的数组select()。
可以更轻松地处理大量文件描述符。

例子：
struct pollfd fds[2]; fds[0].fd = socket_fd; fds[0].events = POLLIN; poll(fds, 2, timeout); 
## 3. epoll()（Linux 专用）
epoll 有以下几个特点：

使用红黑树存储文件描述符集合
使用队列存储就绪的文件描述符
每个文件描述符只需在添加时传入一次；通过事件更改文件描述符状态

因为它使用基于事件的模型，所以poll()效率更高。内核仅返回已就绪的文件描述符，而不是轮询每个文件描述符。允许边缘触发和电平触发模式，提供灵活性。

epoll()效率更高，因为它会内部跟踪文件描述符集，并且只在某个文件描述符就绪时通知应用程序。它不需要在每次调用时重新检查所有文件描述符。那为什么epoll可以高效处理数千个连接，达到更好的并发性能？
### 高效的事件通知机制
select()和poll()：

这两个函数每次调用时都会对所有文件描述符执行线性扫描。这意味着即使只有少数文件描述符“就绪”（即数据可供读取/写入），内核也必须在每次调用该函数时检查每个描述符。这使得它们的性能与受监视的文件描述符数量成正比。
例如，如果您正在监视 1,000 个文件描述符，但只有 1 个已准备就绪，select()则poll()仍将对所有 1,000 个进行迭代。


epoll它的工作原理是只向内核注册一次文件描述符（使用epoll_ctl()）。此后，内核会跟踪哪些文件描述符已就绪。当您调用时epoll_wait()，它仅返回具有事件（即数据就绪）的文件描述符，而不会扫描所有文件描述符。这使得它更加高效，尤其是在监视大量描述符时，因为它消除了重复扫描的需要。
它不再在每次调用时检查所有文件描述符，epoll而是更像一个“事件驱动”系统：当注册描述符的状态发生变化时，内核会通知您。

### 边沿触发和电平触发模式
select 只支持水平触发，epoll 支持水平触发和边缘触发。

水平触发（LT，Level Trigger）：当文件描述符就绪时，会触发通知，如果用户程序没有一次性把数据读/写完，下次还会发出可读/可写信号进行通知。

边缘触发（ET，Edge Trigger）：仅当描述符从未就绪变为就绪时，通知一次，之后不会再通知。


3.大量描述符的 O(1) 性能
select()和poll()：
两者都具有O(n)复杂度，其中n是被监视的文件描述符的数量。随着描述符数量的增加，检查它们所花费的时间也呈线性增长。
epoll()：
epoll_wait()对于大多数操作来说，其复杂度为O(1)，这意味着它的性能不会随着文件描述符数量的增加而降低。这使得它在处理数千（甚至数万）个连接时具有更好的扩展性。

4.内核空间数据结构
epoll()使用更先进的内核空间数据结构（如红黑树和链接列表）来高效跟踪文件描述符。一旦文件描述符被注册，它就会存储在树中，从而允许快速查找和更新，进一步提高性能。
相比之下，每次调用时select()都poll()需要将所有文件描述符从用户空间复制到内核空间，并且内核必须检查每一个文件描述符，从而导致更多的开销。
    
- **`select()` and `poll()`**:
    - Both have **O(n)** complexity, where `n` is the number of file descriptors being monitored. As the number of descriptors grows, the time taken to check them grows linearly.
- **`epoll()`**:
    - `epoll_wait()` has **O(1)** complexity for most operations, meaning it doesn't degrade in performance as the number of file descriptors increases. This allows it to scale much better when handling thousands (or even tens of thousands) of connections.

### 4. **Kernel-Space Data Structures**

- `epoll()` uses more advanced kernel-space data structures (like red-black trees and linked lists) to efficiently track the file descriptors. Once a file descriptor is registered, it is stored in a tree, allowing quick lookups and updates, further improving performance.
- In contrast, `select()` and `poll()` need to copy all file descriptors from user space to kernel space on every call, and the kernel has to check each one, leading to more overhead.

此外还使用了内存映射（ `mmap` ）技术

另一个本质的改进在于 `epoll` 采用基于事件的就绪通知方式。在 `select/poll` 中，进程只有在调用一定的方法后，内核才对所有监视的socket描述符进行扫描，而 `epoll` 事先通过 `epoll_ctl()` 来注册一个socket描述符，一旦检测到epoll管理的socket描述符就绪时，内核会采用类似 `callback` 的回调机制，迅速激活这个socket描述符，当进程调用 `epoll_wait()` 时便可以得到通知，也就是说epoll最大的优点就在于它 **只管就绪的socket描述符，而跟socket描述符的总数无关** 。

5.大量描述符的内存使用率较低
在 中select()，您必须提供一个固定大小的位掩码（通常限制为 1024 个描述符，但在某些系统中可以进行调整）。
在中poll()，您传递一个数组struct pollfd，该数组随着描述符的数量线性增长。
epoll()通过仅维护活动文件描述符（具有事件的文件描述符）列表而不是所有描述符的完整集合来最大限度地减少内存使用量。
下面是epoll性能检测的一段代码示例：


```c

#include <stdio.h>
#include <sys/epoll.h>
#include <unistd.h>
#include <fcntl.h>
int main() {
    int fd1 = open("file1.txt", O_RDONLY);
    int fd2 = open("file2.txt", O_RDONLY);

    if (fd1 < 0 || fd2 < 0) {
        perror("open failed");
        return -1;
    }

    // Create an epoll instance
    int epoll_fd = epoll_create1(0);
    if (epoll_fd < 0) {
        perror("epoll_create1 failed");
        return -1;
    }
    // Add fd1 and fd2 to the epoll instance
    struct epoll_event event;
    event.events = EPOLLIN;  // We are interested in read events
    event.data.fd = fd1;
    if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD, fd1, &event) < 0) {
        perror("epoll_ctl failed for fd1");
        return -1;
    }
    event.data.fd = fd2;
    if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD, fd2, &event) < 0) {
        perror("epoll_ctl failed for fd2");
        return -1;
    }
    struct epoll_event events[2];
    while (1) {
        // Wait for events on the file descriptors
        int num_events = epoll_wait(epoll_fd, events, 2, -1);

        if (num_events < 0) {
            perror("epoll_wait failed");
            break;
        }

        // Handle the events that are ready
        for (int i = 0; i < num_events; i++) {
            if (events[i].data.fd == fd1) {
                printf("Data ready on fd1\n");
            } else if (events[i].data.fd == fd2) {
                printf("Data ready on fd2\n");
            }
        }
    }

    close(fd1);
    close(fd2);
    close(epoll_fd);
    return 0;
}
```
epoll()速度更快，主要是因为它避免了重复扫描所有文件描述符，而是使用事件驱动模型，仅在必要时通知应用程序。对于大多数操作，它的性能为 O(1)，并且可以高效处理数千个连接，使其成为大型 Web 服务器等高并发场景的理想选择。相比之下，select()和poll()两者都具有 O(n) 性能，随着文件描述符数量的增加，这会导致速度明显变慢。
## Reactor 
最直观的服务器处理多客户端访问的方式，就是为每个连接创建一个线程，或者更早期操作系统里甚至是一个进程。虽然线程比进程更轻量，切换成本也更低，但每连接一个线程在并发量大时仍会面临两个问题：

线程创建/销毁有系统开销（malloc stack、context switch）。

线程是稀缺资源，系统线程数有上限（如 Linux 默认 1024~65535）。

所以，现代服务端架构更倾向于使用线程池来复用线程资源。线程池中每个线程从任务队列中取任务处理，避免了反复创建/销毁的开销。

但线程池引入后面临另一个问题：I/O 阻塞会浪费线程资源。如果一个线程执行 read(socket) 被阻塞，而连接上没有数据，那么整个线程就“卡住”了，不能服务其他连接。

为了避免这个问题，我们可以将 socket 设置为非阻塞模式。这样 read() 不会阻塞，而是立即返回，如果没有数据，就返回错误码 EAGAIN。线程就可以在用户空间“轮询”所有 socket。

但这种方式会导致高 CPU 占用，尤其在连接数多时效率低。

所以引入了 I/O 多路复用技术（如 select、poll、epoll），它允许一个线程通过一个系统调用（如 epoll_wait）同时监听多个连接的状态，一旦某些连接可读（或可写），内核就通知我们“这些连接准备好了”，我们再去 read()，避免了不必要的轮询。

这就是像 Nginx、Redis、Node.js、netty 等高并发服务采用的基础模式：I/O 多路复用 + 非阻塞 I/O + 事件驱动模型。Reactor模式称为反应器模式或应答者模式，是基于事件驱动的设计模式，拥有一个或多个并发输入源，有一个服务处理器和多个请求处理器，服务处理器会同步的将输入的请求事件以多路复用的方式分发给相应的请求处理器。Proactor 是把任务交给操作系统 / runtime，让它完成后通知你处理结果


单 Reactor 单线程（Redis）
所有 I/O + 业务逻辑都在一个线程中串行完成

简单、性能好（但业务处理不能太重）

单 Reactor 多线程（Nginx）
Reactor 只负责监听/调度，业务逻辑交给线程池处理

主从 Reactor（Netty）
主 Reactor 接收连接

从 Reactor 负责具体数据读写

分离 accept 和 IO 阶段，提高可扩展性