---
title: 理解数据库系统
date: 2024-08-20 00:09:14
tags:
- 数据库
img: https://cdn.jsdelivr.net/gh/Stan370/stan370.github.io/medias/featureimages/1.png
---
# Database
数据库是一个存储数据的系统，它可以存储大量的数据，并且能够高效地检索这些数据。数据库中的数据被组织成表格的形式，这些表格称为表。表中的每一行代表一个记录，每一列代表一个字段。
> 对于数据库而言，重要的不是数据量，而是当数据量增加时运算如何增加。时间复杂度用来检验某个算法处理一定量的数据要花多长时间，时间复杂度不会给出确切的运算次数，但是给出的是一种理念。

**根据数据模型分类：**

**关系型数据库（RDBMS）**：

- 使用表格（表）和行列结构存储数据。
- 数据以严格的结构（模式）存在，具有预定义的模式（Schema）。
- 常见的关系型数据库包括 MySQL、PostgreSQL、Oracle 和 SQL Server 等。

**非关系型数据库（NoSQL）**：

键值（Key-Value）数据库
概述：键值数据库就像在传统语言中使用的哈希表。你可以通过key来添加、查询或者删除数据，鉴于使用主键访问，所以会获得不错的性能及扩展性。

产品：Riak、Redis、Memcached、Amazon’s Dynamo、Project Voldemort

适用的场景：

**储存用户信息，比如会话、配置文件、参数、购物车等等。这些信息一般都和ID（键）挂钩，这种情景下键值数据库是个很好的选择。**

不适用场景

需要通过值来查询。Key-Value数据库中根本没有通过值查询的途径

需要储存数据之间的关系。在Key-Value数据库中不能通过两个或以上的键来关联数据。

需要事务的支持。在Key-Value数据库中故障产生时不可以进行回滚。

二、 面向文档（Document-Oriented）数据库
概述：面向文档数据库会将数据以文档的形式储存。每个文档都是自包含的数据单元，是一系列数据项的集合。
每个数据项都有一个名称与对应的值，值既可以是简单的数据类型，如字符串、数字和日期等；也可以是复杂的类型，如有序列表和关联对象。
数据存储的最小单位是文档，同一个表中存储的文档属性可以是不同的，数据可以使用XML、JSON或者JSONB等多种形式存储。

产品：MongoDB、CouchDB、RavenDB

适用的场景

日志。企业环境下，每个应用程序都有不同的日志信息。Document-Oriented数据库并没有固定的模式，所以我们可以使用它储存不同的信息。

分析。鉴于它的弱模式结构，不改变模式下就可以储存不同的度量方法及添加新的度量。

不适用场景

在不同的文档上添加事务。Document-Oriented数据库并不支持文档间的事务，如果对这方面有需求则不应该选用这个解决方案。

三、 列存储数据库
概述：列存储数据库将数据储存在列族中，一个列族存储经常被一起查询的相关数据。
**举个例子，如果我们有一个Person类，我们通常会一起查询他们的姓名和年龄而不是薪资。这种情况下，姓名和年龄就会被放入一个列族中，而薪资则在另一个列族中。**

产品：Cassandra、HBase

有谁在使用：Ebay （Cassandra）、Instagram （Cassandra）、NASA （Cassandra）、Twitter （Cassandra and HBase）、Facebook （HBase）、Yahoo!（HBase）

适用的场景

日志。因为我们可以将数据储存在不同的列中，每个应用程序可以将信息写入自己的列族中。

博客平台。我们储存每个信息到不同的列族中。举个例子，标签可以储存在一个，类别可以在一个，而文章则在另一个。

不适用场景

如果我们需要ACID事务。Vassandra就不支持事务。

原型设计。如果我们分析Cassandra的数据结构，我们就会发现结构是基于我们期望的数据查询方式而定。在模型设计之初，我们根本不可能去预测它的查询方式，而一旦查询方式改变，我们就必须重新设计列族。

四、 图（Graph-Oriented）数据库
概述：图数据库允许我们将数据以图的方式储存。实体会被作为顶点，而实体之间的关系则会被作为边。
比如我们有三个实体，Steve Jobs、Apple和Next，则会有两个“Founded by”的边将Apple和Next连接到Steve Jobs。

产品：Neo4J、Infinite Graph、OrientDB

**NoSQL 不适合处理多对多的场景，SQL 不适合节点的数据类型多变，且不支持递归的关系查找，关系也没有属性附着**

**根据用途分类：**

**事务处理数据库（OLTP）**：

- 用于处理日常的交易和操作，例如在线交易处理、电子商务等。
- 需要快速读写、维护数据的一致性和完整性。
- 常见的关系型数据库常用于 OLTP。

**在线分析处理数据库（OLAP）**：

- 用于分析大量数据，支持复杂的查询和数据分析。
- 重视对数据的高效读取和汇总，用于决策支持和报告。
- 数据仓库和一些大数据平台通常用于 OLAP。

OLTP vs OLAP

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/235d1c69-6aa1-4d68-944f-bc9712ea91a2/Untitled.png)

## Mysql

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/01a4e620-e7a8-4b42-93c1-220075d1ef92/Untitled.png)

MySQL 的架构共分为两层：**Server 层和存储引擎层**，

- **Server 层负责建立连接、分析和执行 SQL**。MySQL 大多数的核心功能模块都在这实现，主要包括连接器，查询缓存、解析器、预处理器、优化器、执行器等。另外，所有的内置函数（如日期、时间、数学和加密函数等）和所有跨存储引擎的功能（如存储过程、触发器、视图等。）都在 Server 层实现。
- **存储引擎层负责数据的存储和提取**。支持 InnoDB、MyISAM、Memory 等多个存储引擎，不同的存储引擎共用一个 Server 层。现在最常用的存储引擎是 InnoDB，从 MySQL 5.5 版本开始， InnoDB 成为了 MySQL 的默认存储引擎。我们常说的索引数据结构，就是由存储引擎层实现的，不同的存储引擎支持的索引类型也不相同，比如 InnoDB 支持索引类型是 B+树 ，且是默认使用，也就是说在数据表中创建的主键索引和二级索引默认使用的是 B+ 树索引。

执行一条 SQL 查询语句，期间发生了什么？

- 连接器：建立连接，管理连接、校验用户身份；
- 查询缓存：查询语句如果命中查询缓存则直接返回，否则继续往下执行。MySQL 8.0 已删除该模块；
- 解析 SQL，通过解析器对 SQL 查询语句进行词法分析、语法分析，然后构建语法树，方便后续模块读取表名、字段、语句类型；
- 执行 SQL：执行 SQL 共有三个阶段：
    - 预处理阶段：检查表或字段是否存在；将 `select *` 中的 `` 符号扩展为表上的所有列。
    - 优化阶段：基于查询成本的考虑， 选择查询成本最小的执行计划；
    - 执行阶段：根据执行计划执行 SQL 查询语句，从存储引擎读取记录，返回给客户端；

连接的过程需要先经过 TCP 三次握手，因为 MySQL 是基于 TCP 协议进行传输的

> 怎么解决长连接占用内存的问题？
> 

有两种解决方式。

第一种，**定期断开长连接**。既然断开连接后就会释放连接占用的内存资源，那么我们可以定期断开长连接。

第二种，**客户端主动重置连接**。MySQL 5.7 版本实现了 `mysql_reset_connection()` 函数的接口，注意这是接口函数不是命令，那么当客户端执行了一个很大的操作后，在代码里调用 mysql_reset_connection 函数来重置连接，达到释放内存的效果。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。

### InnoDB 的架构

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/b4b375d5-303b-467c-9bfb-613f15101592/image.png)

**1. 入口点：Handler API**

- 这是应用程序与 InnoDB 存储引擎交互的接口。SQL 语句（如选择，插入，更新，删除) 通过此 API 进行处理。

**2.执行引擎：**

- **MTR1（阅读视图）：** 管理事务的一致读取视图，确保每个事务都能看到数据库的一致快照。
- **MTR2（交易）：**处理事务管理，包括启动、提交和回滚事务。
- **命令：**表示要执行的已解析 SQL 语句（例如从用户中选择 *）。

**3.缓冲池（内存中）：**

- **InnoDB的核心：**一个大型内存区域，用于缓存数据库文件中经常访问的数据页。这可最大限度地减少磁盘 I/O 并显著提高性能。
- **LRU 列表：** 实施最近最少使用 (LRU) 算法来管理缓存页面。经常使用的页面保留在内存中，而较少使用的页面则被逐出，为新数据腾出空间。
- **空闲列表：**跟踪缓冲池中可用于新数据的页面。
- **冲洗清单：** 保存需要写回磁盘的页面（由于修改）。
- **自适应哈希索引：** 通过在哈希表中缓存经常访问的索引条目来进一步加快索引查找速度。

**4. 更换缓冲液：**

- **优化写入：** 内存中的一种特殊数据结构，用于临时存储对二级索引的更改。InnoDB 不会立即将这些更改写入磁盘，而是将它们缓冲在更改缓冲区中。这减少了磁盘 I/O，尤其是对于写入密集型工作负载。
- **合并：** 更改缓冲区会定期与磁盘上的二级索引合并，从而使更改持久化。

**5. 撤消缓冲区：**

- **支持回滚：**存储有关以前版本数据的信息，允许 InnoDB 撤消事务并提供一致的读取视图。

**6.重做日志缓冲区：**

- **预写日志：**内存缓冲区，用于记录对数据库所做的所有更改，在将其写入磁盘之前。这可确保数据持久性和崩溃恢复。

**7.磁盘存储：**

- **InnoDB 表空间：**InnoDB 将数据和索引存储在表空间文件中。
    - **系统表空间（.ibd）：**保存数据字典信息，如果配置的话可能包含用户表。
    - **每个表的文件表空间 (.ibd)：** 每个表都有自己的.ibd 文件，提高了可管理性。
    - **通用表空间（diy.ibd）：**允许您创建共享表空间来存储多个表。
    - **临时表空间（ibtmp1）：** 用于临时表和内部操作。
- **双写缓冲区：** 一种有助于防止崩溃恢复期间数据损坏的机制。更改首先写入磁盘上的双写缓冲区，然后写入实际数据文件。
- **撤消表空间 (.mother)：** 将撤消信息存储在磁盘上。
- **重做日志（ib_logfile[0/1]）：** 重做日志的持久存储，对于崩溃恢复至关重要。

**数据流：**

1. **SQL 语句：** 应用程序通过 Handler API 发送 SQL 语句。
2. **解析和执行：** 执行引擎处理该语句。
3. **缓冲池：** InnoDB 检查所需数据是否已在缓冲池中。如果没有，它将数据从磁盘读入缓冲池。
4. **变化：** 如果该语句修改了数据，则更改将应用于缓冲池，记录在重做日志缓冲区中，并可能缓冲在更改缓冲区中。
5. **重做日志：** 重做日志缓冲区会定期刷新到磁盘上的重做日志文件。
6. **检查点：** InnoDB 执行检查点，将修改后的页面从缓冲池写入磁盘。
7. **耐用性：** 重做日志确保所有已提交的更改都安全地保存在磁盘上，即使发生崩溃。

该架构突出了 InnoDB 的主要特性，如 ACID 属性（原子性、一致性、隔离性、持久性）、崩溃恢复以及通过缓冲和日志记录实现的性能优化。

查询语句的那一套流程，更新语句也是同样会走一遍：

- 客户端先通过连接器建立连接，连接器自会判断用户身份；
- 因为这是一条 update 语句，所以不需要经过查询缓存，但是表上有更新语句，是会把整个表的查询缓存清空的，所以说查询缓存很鸡肋，在 MySQL 8.0 就被移除这个功能了；
- 解析器会通过词法分析识别出关键字 update，表名等等，构建出语法树，接着还会做语法分析，判断输入的语句是否符合 MySQL 语法；
- 预处理器会判断表和字段是否存在；
- 优化器确定执行计划，因为 where 条件中的 id 是主键索引，所以决定要使用 id 这个索引；
- **Handler API到**执行器负责具体执行，找到这一行，然后更新。

不过，更新语句的流程会涉及到 undo log（回滚日志）、redo log（重做日志） 、binlog （归档日志）这三种日志：

- **undo log（回滚日志）**：是 Innodb 存储引擎层生成的日志，实现了事务中的**原子性**，主要**用于事务回滚和 MVCC**。
- **redo log（重做日志）**：是 Innodb 存储引擎层生成的日志，实现了事务中的**持久性**，主要**用于掉电等故障恢复**；
- **binlog （归档日志）**：是 Server 层生成的日志，主要**用于数据备份和主从复制**；

undo log 和 redo log 用于**记录事务对数据的修改**，以保证原子性和持久性，而 binlog 用于记录数据库的整体变更，MVCC 则用于控制并发，确保读写之间的隔离性。这些机制相互协作，确保数据库在事务执行和并发访问时的一致性和可靠性。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/6bd06c67-eb44-4fbe-8c54-905aadec8be0/Untitled.png)

CREATE INDEX ,ALTER TABLE

最基本的分页方式：

```
SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT ...
```

在中小数据量的情况下，这样的 SQL 足够用了，唯一需要注意的问题就是确保使用了索引。

举例来说，如果实际 SQL 类似下面语句，那么在 category_id, id 两列上建立复合索引比较好。

```
SELECT * FROM articles WHERE category_id = 123 ORDER BY id LIMIT 50, 10
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e37d8205-76d7-42cc-af76-6c807159e612/Untitled.png)

1. 分解大连接查询
将一个大连接查询分解成对每一个表进行一次单表查询，然后在应用程序中进行关联，这样做的好处有：

**缓存之所以能够大幅提高系统的性能，关键在于数据的访问具有局部性，也就是二八定律：「百分之八十的数据访问是集中在 20% 的数据上」。这部分数据也被叫做热点数据。**

让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。
分解成多个单表查询，这些单表查询的缓存结果更可能被其它查询使用到，从而减少冗余记录的查询。
减少锁竞争；
在应用层进行连接，可以更容易对数据库进行拆分，从而更容易做到高性能和可伸缩。
查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。

### Optimization

https://developer.aliyun.com/article/1497219

在实际场景中进行 MySQL 查询优化时，通常需要根据具体的业务需求和数据库环境采取针对性的措施。以下是一个系统化的优化步骤和方法：

1. **了解业务需求与数据特点**

**明确查询的业务需求**：了解查询的具体业务需求，包括查询的频率、重要性、响应时间要求等。

**数据分布与访问模式**：分析数据的分布特点（如数据量、表结构、索引情况）和访问模式（读多写少还是读写并重，随机访问还是顺序访问）。

2. **分析现有查询性能**

**使用 `EXPLAIN` 分析查询计划**：通过 `EXPLAIN` 了解查询的执行计划，判断查询是否合理利用了索引，以及优化器whether正确连接表，是否存在全表扫描、文件排序等性能瓶颈。

**慢查询日志**：启用 MySQL 慢查询日志，找出执行时间较长的查询，并集中优化这些查询。mysqldumpslow -s t /path/to/slow.log

**查询执行时间**：使用 `SHOW PROFILES` 或 `SHOW STATUS` 查看查询的执行时间、CPU 使用率、磁盘 IO 等性能指标。

3. **索引优化**

**创建适当的索引**：为查询中的 `WHERE`、`JOIN`、`ORDER BY`、`GROUP BY` 等条件创建索引，特别是选择性高的列。

**避免冗余索引**：检查并删除冗余或未被使用的索引，以减少维护开销。

**覆盖索引**：通过覆盖索引（即查询字段都在同一索引中）来减少查询的回表操作。

4. **查询语句优化**

**优化 `JOIN` 查询**：避免在连接条件中使用函数或计算，尽量使用等值连接（`INNER JOIN`）而非笛卡尔积（`CROSS JOIN`）。

**减少返回的数据量**：避免 `SELECT *`，只选择需要的列；使用 `LIMIT` 限制返回的行数。

**子查询优化**：将复杂的子查询改写为 `JOIN` 或使用 `EXISTS`，避免嵌套子查询带来的性能问题。

5. **表结构优化**

**规范化与反规范化**：根据查询模式适当选择规范化或反规范化策略，减少表之间的连接次数或查询的复杂度。

**分区表**：对大表进行分区，如按时间或范围分区，可以加快查询性能。

**优化表的数据类型**：选择更合适的字段类型，避免使用过大或不必要的精度，如用 `TINYINT` 而不是 `INT`。

6. **利用缓存与存储过程**

**缓存热点数据**：将高频访问的数据缓存到内存中（如使用 Redis），减少数据库查询次数。

**预计算与存储过程**：对于计算复杂且频繁的查询，可以通过预计算将结果缓存到表中，或者使用存储过程加快查询速度。

7. **事务与锁优化**

**合理管理事务**：避免长事务或在事务中执行大量查询，尽量缩短事务的执行时间。

**减少锁定范围**：使用合适的锁级别（如行级锁而非表级锁），减少锁争用，提高并发性能。

8. **数据维护与归档**

**定期归档历史数据**：将不常用的历史数据迁移到冷存储或归档表，减小主表的体积，提升查询性能。

**碎片整理**：定期执行 `OPTIMIZE TABLE`，整理表碎片，特别是对于频繁更新、删除的表。

9. **监控与持续优化**

**监控查询性能**：使用监控工具（如 MySQL Enterprise Monitor、Percona Toolkit、Prometheus 等）持续监控查询性能，发现并优化潜在的性能瓶颈。

**调整数据库参数**：根据监控结果调整 MySQL 的配置参数（如 `query_cache_size`、`innodb_buffer_pool_size`），优化数据库整体性能。

实际案例分析

案例1：优化电商系统中的订单查询

**场景描述**：某电商系统中的订单表非常大，用户经常查询自己最近一年的订单。

**优化方法**：

- **分区表**：按年份或月份对订单表进行分区，查询最近一年订单时，只扫描相关分区。
- **覆盖索引**：在订单表的 `user_id`、`order_date` 上建立联合索引，避免回表。
- **缓存**：将最近一年的订单数据缓存到 Redis 中，减少数据库查询。

```jsx
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_date DATE,
    order_amount DECIMAL(10, 2),
    product_id INT
);
你有一个查询需要经常获取特定用户在某个日期范围内的订单信息，例如：在没有索引的情况下，
库需要对 orders 表进行**全表扫描**，查找符合条件的记录。这可能会导致查询速度变慢，
尤其是在订单表数据量非常大的情况下。

CREATE INDEX idx_user_order_date 
ON orders(user_id, order_date);

```

案例2：优化社交平台中的用户动态查询

**场景描述**：社交平台用户的动态查询经常发生，涉及多表连接，如用户信息表、动态表、评论表等。

**优化方法**：

- **拆分连接查询**：将用户信息与动态内容的查询分开，先查询用户信息表，再通过 `IN()` 方式获取动态内容。
- **水平拆分**：将动态表按用户 ID 或时间进行水平拆分，减少单表数据量，提升查询效率。
- **缓存用户信息**：将用户信息缓存到 Redis 或内存中，减少数据库查询。

```jsx

CREATE TABLE comments (
    comment_id INT PRIMARY KEY,
    post_id INT,
    user_id INT,
    comment_content TEXT,
    comment_date DATETIME
);

假设我们需要查询某个用户的所有动态及其对应的评论，通常会使用如下查询：

SELECT u.username, p.post_content, c.comment_content
FROM users u
JOIN posts p ON u.user_id = p.user_id
LEFT JOIN comments c ON p.post_id = c.post_id
WHERE u.user_id = 12345
ORDER BY p.post_date DESC;
为了优化上述查询，我们可以在相关表上创建合适的索引。

1.在 posts 表上创建联合索引，优化 user_id 和 post_date 的查询和排序：
CREATE INDEX idx_user_post_date ON posts(user_id, post_date DESC);
在 comments 表上创建索引以优化 post_id 的连接查询：
CREATE INDEX idx_post_id ON comments(post_id);
2.覆盖索引
CREATE INDEX idx_user_post_content ON posts(user_id, post_date DESC, post_content);

```

case 3:以`%`开头的 LIKE 查询会导致索引失效

```sql
-- 原始查询SELECT * FROM products WHERE product_name LIKE 'abc%';

-- 优化后的查询SELECT * FROM products WHERE product_name >= 'abc' AND product_name < 'abd'; or 为文本列添加全文索引
```

通过以上的步骤和方法，你可以在实际场景中系统地优化 MySQL 查询，提升数据库的响应速度和系统的整体性能。

## 索引

数据库索引是对数据库表的一列或者多列的值进行排序一种**结构**，使用索引可以快速访问数据表中的特定信息。

**索引的优缺点？**

优点：

- 大大加快数据检索的速度。
- 将随机I/O变成顺序I/O(因为B+树的叶子节点是连接在一起的)

缺点：

- 从空间角度考虑，建立索引需要占用物理空间
- 从时间角度 考虑，创建和维护索引都需要花费时间，例如对数据进行增删改的时候都需要维护索引。

索引的实现通常使用**Hash索引和B+树**（MySQL常用的索引就是B+树）。除了数据之外，数据库系统还维护为满足特定查找算法的数据结构，这些数据结构以某种方式引用数据，这种数据结构就是索引。简言之，索引就类似于书本，字典的目录。以下是一些关键概念和要点与数据库索引相关：

1. **索引类型**：
    - **B树索引**：是最常见的索引类型，适用于大多数数据库系统。B树索引在树结构中进行数据划分，使得在平均情况下，检索时间复杂度为O(log n)。
    - **哈希索引**：基于哈希算法，适用于等值查询。但是，哈希索引不适用于范围查询，且不适合于有序数据。
    - **全文索引**：用于文本数据的高效搜索，支持关键词搜索、模糊查询等。
    - **空间索引**：用于地理空间数据的索引，可以支持地理坐标查询和范围查询。

### **什么时候不需要创建索引？**

- 只读或极少写的表（如配置表、代码表），很少被查询的信息（log
- `WHERE` 条件，`GROUP BY`，`ORDER BY` 里用不到的字段，索引的价值是快速定位，如果起不到定位的字段通常是不需要创建索引的，因为索引是会占用物理空间的。
- 字段中存在大量重复数据，不需要创建索引，比如性别字段，只有男女，如果数据库表中，男女的记录分布均匀，那么无论搜索哪个值都可能得到一半的数据。在这些情况下，还不如不要索引，因为 MySQL 还有一个查询优化器，查询优化器发现某个值出现在表的数据行中的百分比很高的时候，它一般会忽略索引，进行全表扫描。
- 表数据太少的时候，不需要创建索引；
- 经常更新的字段不用创建索引，比如不要对电商项目的用户余额建立索引，因为索引字段频繁修改，由于要维护 B+Tree的有序性，那么就需要频繁的重建索引，这个过程是会影响数据库性能的。

**MySQL 索引**
索引是在存储引擎层实现的，而不是在服务器层实现的，所以不同存储引擎具有不同的索引类型和实现。InnoDB将磁盘数据建立索引并储存在B+树中

1. B+Tree 索引
是大多数 MySQL 存储引擎的默认索引类型。

B树是一种多路平衡查找树

B+ 树**查询效率更稳定**。因为 B+ 树每次只有访问到叶子节点才能找到对应的数据，而在 B 树中，非叶子节点也会存储数据，这样就会造成查询效率不稳定的情况，有时候访问到了非叶子节点就可以找到关键字，而有时需要访问到叶子节点才能找到关键字。 

其次，B+ 树的查询效率更高，这是因为通常 B+ 树比 B 树更矮胖（阶数更大，深度更低），查询所需要的磁盘 I/O 也会更少。同样的磁盘页大小，B+ 树可以存储更多的节点关键字。 

**B+Tree 只在叶子节点存储数据，而 B 树 的非叶子节点也要存储数据，**所以 B+Tree 的单个节点的数据量更小，**在相同的磁盘 I/O 次数下，就能查询更多的节点**。 另外，B+Tree 叶子节点采用的是双链表连接，适合 MySQL 中常见的基于范围的顺序查找，而 B 树无法做到这一点。

2、B+Tree vs Hash， Hash 在做等值查询的时候效率贼快，搜索复杂度为 O(1)。 但是 Hash 表不适合做范围查询，它更适合做等值的查询，这也是 B+Tree 索引要比 Hash 表索引有着更广泛的适用场景的原因。

红黑树等平衡树也可以用来实现索引，但是文件系统及数据库系统普遍采用 B+ Tree 作为索引结构，这是因为使用 B+ 树访问磁盘数据有更高的性能。

Why innodb use b+ tree as index?  

1. **适合范围查询和范围扫描**：B+ 树索引适用于范围查询，例如 **`BETWEEN`**、**`<`**、**`>`** 等操作。B+ 树的特性使得在索引中查找范围更为高效。
2. **有序性**：B+ 树是一种有序树结构，叶子节点形成了一个有序链表。这使得范围扫描变得更加高效，因为它们能够顺序访问索引页。
3. **减少磁盘 I/O**：B+ 树索引的叶子节点通常构成一个链表，这有助于减少范围查询时需要读取的磁盘页数量。另外，由于索引节点存储了更多的键值对，相较于其他树结构（如 B 树），在内存中更有可能读取到所需的节点。
4. **支持聚集索引**：在 InnoDB 中，主键索引（如果定义了主键）被称为聚集索引，它决定了数据的物理存储顺序。B+ 树作为主键索引提供了对表数据物理存储顺序的优化。
5. **范围分裂**：B+ 树的分裂不会影响叶子节点，只有非叶子节点才会发生分裂。这有助于保持叶子节点的紧凑性，避免了频繁的平衡操作，提高了性能。
6. **支持多版本并发控制（MVCC）**：InnoDB 使用了 MVCC（多版本并发控制）来处理事务隔离性，而 B+ 树索引能够有效地支持这种并发控制模型。

二叉搜索树查询效率无疑是最高的，因为平均来说每次比较都能缩小一半的搜索范围  所以表面上来看我们使用 B、B+ 树没有 二叉查找树效率高，但是实际上由于 B、B+ 树降低了树高，减少了磁盘 IO 次数，反而大大提升了速度。

- 聚簇索引：**将[数据存储](https://cloud.tencent.com/product/cdcs?from_column=20065&from=20065)与索引放到了一块**，找到索引也就找到了数据 聚簇索引的叶子节点就是实际的数据行
- 非聚簇索引：一个表可以有多个非聚簇索引，这些索引在逻辑上只是指向数据行的指针。 将数据存储于索引分开结构，索引结构的叶子节点指向了数据的对应行，myisam通过key_buffer把索引先缓存到内存中，当需要访问数据时（通过索引访问数据），在内存中直接搜索索引，然后通过索引找到磁盘相应数据，这也就是为什么索引不在key buffer命中时，速度慢的原因

区别就在于叶子节点存放的是什么数据：

- 聚簇索引的叶子节点存放的是实际数据，所有完整的用户记录都存放在聚簇索引的叶子节点；
- 二级索引的叶子节点存放的是主键值，而不是实际数据。

**如果某个查询语句使用了二级索引，但是查询的数据不是主键值，这时在二级索引找到主键值后，需要去聚簇索引中获得数据行，这个过程就叫作「回表」，也就是说要查两个 B+ 树才能查到数据。不过，当查询的数据是主键值时，因为只在二级索引就能查询到，不用再去聚簇索引查，这个过程就叫作「索引覆盖」，也就是只需要查一个 B+ 树就能找到数据。**

**什么是覆盖索引和索引下推？**

覆盖索引，也就是 covering index 。 **指的是一个查询语句的执行只用从索引中就能获取到目标数据，不必从数据表中读取**。

1. **覆盖索引:** 当查询所需的全部列数据都能在索引中找到时，我们称之为覆盖索引。这意味着查询可以直接从索引中获取结果，无需回表查询主键索引。

`CREATE INDEX idx_name_age ON users (name, age);`

在这个例子中，我们创建了一个名为 `idx_name_age` 的覆盖索引，它包含了 `name` 和 `age` 两个列。如果查询需要根据 `name` 和 `age` 来查找用户，那么这个索引就可以覆盖查询，无需访问表本身。

 **查询时使用覆盖索引:**

当查询条件能够通过覆盖索引找到所需数据时，MySQL 会自动使用覆盖索引。

**示例查询:**

`SELECT name, age FROM users WHERE name = 'John' AND age = 30;`

在这个例子中，如果 `idx_name_age` 索引存在，并且包含了 `name` 和 `age` 的值，那么 MySQL 会使用覆盖索引来执行查询，直接返回结果，而无需访问表本身

Mysql5.6 引入的索引下推优化（index condition pushdown)， 可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。

现在有下面这条查询语句：

`select * from t_user  where age > 20 and reward = 100000;`

联合索引当遇到范围查询 (>、<) 就会停止匹配，也就是 **age 字段能用到联合索引，但是 reward 字段则无法利用到索引**。具体原因这里可以看这篇：[**索引常见面试题(opens new window)**](https://xiaolincoding.com/mysql/index/index_interview.html#%E6%8C%89%E5%AD%97%E6%AE%B5%E4%B8%AA%E6%95%B0%E5%88%86%E7%B1%BB)

那么，不使用索引下推（MySQL 5.6 之前的版本）时，执行器与存储引擎的执行流程是这样的：

- Server 层首先调用存储引擎的接口定位到满足查询条件的第一条二级索引记录，也就是定位到 age > 20 的第一条记录；
- 存储引擎根据二级索引的 B+ 树快速定位到这条记录后，获取主键值，然后**进行回表操作**，将完整的记录返回给 Server 层；
- Server 层在判断该记录的 reward 是否等于 100000，如果成立则将其发送给客户端；否则跳过该记录；
- 接着，继续向存储引擎索要下一条记录，存储引擎在二级索引定位到记录后，获取主键值，然后回表操作，将完整的记录返回给 Server 层；
- 如此往复，直到存储引擎把表中的所有记录读完。

可以看到，没有索引下推的时候，每查询到一条二级索引记录，都要进行回表操作，然后将记录返回给 Server，接着 Server 再判断该记录的 reward 是否等于 100000。而使用索引下推后，判断记录的 reward 是否等于 100000 的工作交给了存储引擎层，过程如下 ：

- Server 层首先调用存储引擎的接口定位到满足查询条件的第一条二级索引记录，也就是定位到 age > 20 的第一条记录；
- 存储引擎定位到二级索引后，**先不执行回表**操作，而是先判断一下该索引中包含的列（reward列）的条件（reward 是否等于 100000）是否成立。如果**条件不成立**，则直接**跳过该二级索引**。如果**成立**，则**执行回表**操作，将完成记录返回给 Server 层。
- Server 层在判断其他的查询条件（本次查询没有其他条件）是否成立，如果成立则将其发送给客户端；否则跳过该记录，然后向存储引擎索要下一条记录。
- 如此往复，直到存储引擎把表中的所有记录读完。

可以看到，使用了索引下推后，虽然 reward 列无法使用到联合索引，但是因为它包含在联合索引（age，reward）里，所以直接在存储引擎过滤出满足 reward = 100000 的记录后，才去执行回表操作获取整个记录。相比于没有使用索引下推，节省了很多回表操作。

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/c0f5f3ad-d930-472a-94f5-5da2e07e438a/Untitled.png)

InnoDB以页面（Page）为基本单位来组织和管理数据。这些页面是数据库中数据和索引的物理存储单元。

以下是 InnoDB 页面的一些关键特点：

1. **固定大小的页**：InnoDB 使用固定大小的数据页（通常是默认大小为 16KB）。每个页都有一个地址和唯一的页号，并用于存储数据、索引、事务日志等信息。
2. **页类型**：InnoDB 中有不同类型的页，如数据页（Data Page）、索引页（Index Page）、Undo 页（Undo Page）、事务日志页（Log Page）等。每种类型的页用于存储不同的信息。
3. **数据页**：主要用于存储表的数据。数据页中包含了行记录以及一些管理信息，例如行格式、行的版本信息（用于 MVCC）等。
4. **索引页**：用于存储索引的节点信息，B+ 树结构中的分支节点和叶子节点。
5. **管理和缓存**：InnoDB 通过缓冲池（Buffer Pool）来管理数据页的内存缓存。数据页在内存中进行读取和写入，以提高访问速度。LRU（Least Recently Used）算法用于管理缓冲池中的页。

Explain查询创建的索引是否真正有效

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/84e344c3-a1df-4da0-a8c1-52a0f32055ac/image.png)

The `EXPLAIN` statement in MySQL provides insight into how MySQL executes a query, specifically detailing how tables are joined. The `type` column in the `EXPLAIN` output describes the join method used, which indicates the efficiency of the query. Here's a summary of the join types listed from best to worst:

1. **system**

**Description**: The table has only one row, making it a "system table." This is a special case of the `const` join type.

**Efficiency**: Fastest, as there's only one row to retrieve.

2. **const**

**Description**: The table has at most one matching row, which is read at the start of the query. The result is treated as a constant by the optimizer.

**Usage**: Typically used when querying a table with a primary key or a unique index where the result is a single row.

**Example**:

```sql
SELECT * FROM tbl_name WHERE primary_key = 1;

```

3. **eq_ref**

**Description**: For each row from the previous tables, exactly one row is read from this table. This type is used when all parts of a primary key or unique index are used.

**Usage**: Used in join queries where the indexed column is compared with a constant or an expression involving columns from previously read tables.

**Example**:

```sql
SELECT * FROM ref_table, other_table WHERE ref_table.key_column = other_table.column;

```

4. **ref**

**Description**: All rows with matching index values are read from this table for each combination of rows from the previous tables. This type is used when the join uses only a leftmost prefix of the key or if the key is not a primary key or unique index.

**Usage**: Applicable when there are multiple rows that match the join condition.

**Example**:

```sql
SELECT * FROM ref_table WHERE key_column = expr;

```

5. **fulltext**

**Description**: The join is performed using a `FULLTEXT` index.

**Usage**: Used when a `FULLTEXT` index is involved in the query.

**Example**:

```sql
SELECT * FROM articles WHERE MATCH (title, body) AGAINST ('text');

```

6. **ref_or_null**

**Description**: Similar to `ref`, but includes an additional search for `NULL` values. Often used in queries that involve `OR` conditions with `NULL`.

**Usage**: When the query checks for both specific values and `NULL` in the indexed column.

**Example**:

```sql
SELECT * FROM ref_table WHERE key_column = expr OR key_column IS NULL;

```

7. **index_merge**

**Description**: Indicates that the `Index Merge` optimization is used, where multiple indexes are used to satisfy the query.

**Usage**: When the query can use more than one index.

**Example**:

```sql
SELECT * FROM tbl_name WHERE key1 = 10 OR key2 = 20;

```

8. **unique_subquery**

**Description**: Replaces `eq_ref` for some `IN` subqueries. It functions as an index lookup and replaces the subquery for efficiency.

**Usage**: For efficient `IN` subqueries.

**Example**:

```sql
SELECT * FROM tbl_name WHERE id IN (SELECT primary_key FROM single_table WHERE condition);

```

9. **index_subquery**

**Description**: Similar to `unique_subquery`, but works for non-unique indexes.

**Usage**: For `IN` subqueries involving non-unique indexes.

**Example**:

```sql
SELECT * FROM tbl_name WHERE id IN (SELECT key_column FROM single_table WHERE condition);

```

10. **range**

**Description**: Only rows within a certain range are retrieved using an index. The index allows for range scans.

**Usage**: When the query involves conditions that limit the result set to a specific range.

**Example**:

```sql
SELECT * FROM tbl_name WHERE key_column BETWEEN 10 AND 20;

```

11. **index**

**Description**: Similar to `ALL`, but instead of scanning the entire table, only the index is scanned. It's used when the query can be satisfied by the index alone.

**Usage**: When the index is covering (contains all needed columns).

**Example**:

```sql
SELECT indexed_column FROM tbl_name;

```

12. **ALL**

- **Description**: A full table scan is performed for each combination of rows from the previous tables. This is generally the least efficient join type.
- **Usage**: When no indexes are available, or the query optimizer determines that a full table scan is faster.
- **Example**:
    
    ```sql
    SELECT * FROM tbl_name;
    
    ```
    

- **Best Types**: `system`, `const`, `eq_ref` are the most efficient, meaning they minimize the number of rows scanned.
- **Good Types**: `ref`, `range`, `index_merge` are generally efficient, depending on the specific query and index design.
- **Less Optimal Types**: `index`, `ALL` are less efficient, as they may involve scanning large portions of the table.

Understanding and optimizing these join types is key to improving query performance in MySQL.

## Redis

Redis（Remote Dictionary Server )，即远程字典服务。C语言开发的一个开源的（遵从BSD协议）高性能键值对（key-value）的内存数据库，可以用作数据库、缓存、消息中间件等。它是一种NoSQL（not-only sql，泛指[非关系型数据库](https://www.zhihu.com/search?q=%E9%9D%9E%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22118561398%22%7D)）的数据库。

Redis的基本概念和用法：

1. **高性能**：Redis完全存储在内存中，这使得它能够以非常高的速度执行读写操作。
2. **多种数据结构**：除了键值对，Redis还支持字符串、哈希表、列表、集合、有序集合等多种数据结构，允许更灵活的数据操作。
3. **持久化**：Redis支持将数据持久化到硬盘，以便在重启后恢复数据。它提供了两种持久化方式：快照（Snapshotting）和AOF（Append-Only File）。
4. **发布/订阅**：Redis提供了发布（publish）和订阅（subscribe）的功能，允许不同部分之间通过消息进行通信。
5. **事务**：Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化，**Redis 在事务失败时不进行回滚，而是继续执行余下的命令。Redis官方认为事务是原子性的：所有的命令，要么全部执行（但不一定成功），要么全部不执行。**
6. **缓存**：Redis常用于作为缓存层，将频繁访问的数据存储在内存中，以提高读取性能。
7. **计数器和排行榜**：Redis适用于计数器和排行榜等需要快速处理增减操作的场景。
8. **分布式锁**：Redis可以用来实现分布式锁，以确保在多个节点上的操作不会互相干扰。
9. **消息队列**：使用Redis的列表数据结构，可以实现简单的消息队列，用于异步处理任务。

**Redis这么快？**

> 第一：Redis完全基于内存，绝大部分请求是纯粹的内存操作，非常迅速，数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度是O(1)。第二：数据结构简单，对数据操作也简单。第三：采用单线程，避免了不必要的上下文切换和竞争条件，不存在多线程导致的CPU切换，不用去考虑各种锁的问题，不存在加锁释放锁操作，没有死锁问题导致的性能消耗。虽然 Redis 的主要工作（网络 I/O 和执行命令）一直是单线程模型，但是**在 Redis 6.0 版本之后，也采用了多个 I/O 线程来处理网络请求**，**这是因为随着网络硬件的性能提升，Redis 的性能瓶颈有时会出现在网络 I/O 的处理上**。
> 

第四：使用多路复用IO模型，非阻塞IO。

String、Hash、List、Set、SortedSet。

1. **Hashes:** Hashes are maps between string fields and string values. They are useful for representing objects with multiple fields, such as user profiles.
2. **String** data up to 512 MB 。String类型是**二进制安全**的(其本质是将操作输入作为原始的、无任何特殊字符意义的数据流)，意思是 redis 的 string 可以包含任何数据。如数字，字符串，jpg图片或者序列化的对象。
3. **Lists:** 双向链表实现Lists are ordered collections of strings. You can add elements to the head (left) or tail (right) of a list. Lists can be used for task queues, message queues, and more.
4. **Sets:** Sets are unordered collections of unique strings. They are used for storing unique values. You can perform set operations like union, intersection, and difference. 
5. **Sorted Sets (ZSETs):** Similar to sets, but each member has a score associated with it. Sorted sets are used for tasks that require ordering by score, such as leaderboards.
6. **Bitmaps:** Bitmaps are used for bit-level operations. They are often used to represent sets with a large number of unique items in a very memory-efficient way.

- Redis 的字符串表示为 `sds(simple dynamic string)` ，而不是 C 字符串（以 `\0` 结尾的 `char*`）。
- 对比 C 字符串， `sds` 有以下特性：
    - 可以高效地执行长度计算（`strlen`）；
    - 可以高效地执行追加操作（`append`）；
    - 二进制安全；
- `sds` 会为追加操作进行优化：加快追加操作的速度，并降低内存分配的次数，代价是多占用了一些内存，而且这些内存不会被主动释放。

struct sdshdr{
int len;//buf数组中已经使用的字节的数量，也就是SDS字符串长度
int  free;//buf数组中未使用的字节的数量
char buf[];//字节数组，字符串就保存在这里面
};

Redis需要对数据设置过期时间，并采用的是惰性删除+定期删除两种策略对过期键删除。[Redis对过期键的策略+持久化](https://mp.weixin.qq.com/s?__biz=MzI4Njg5MDA5NA==&mid=2247484386&idx=1&sn=323ddc84dc851a975530090fcd6e2326&chksm=ebd742e3dca0cbf52bc65d430447e639d81cc13e0ac34613edf464dae3950b10e2e1df74dcc5&token=1834317504&lang=zh_CN&scene=21#wechat_redirect)

1. **数据过期清除策略**：
    1. 定期删除：Redis会定期（默认每隔100ms）随机抽取一些设置了过期时间TTL 的键，检查其是否过期，如果有过期的键就删除。这个策略确实是为了避免全局扫描而引入的，以减少CPU负载。
    2. 惰性删除：当你尝试访问某个键时，Redis会检查该键是否已过期，如果已过期，则删除它。这个策略确保在获取键的时候处理过期数据，称为"惰性"，因为它不主动扫描键。
2. 内存淘汰策略：
    - Redis是一个内存数据库，当内存用尽时，需要根据一定的策略来释放一些键以腾出内存空间。这个策略称为内存淘汰策略（Memory Eviction Policy）。
    - Redis提供了不同的内存淘汰策略，常见的策略包括：
        - LRU（Least Recently Used）：删除最近最少使用的键。
        - LFU（Least Frequently Used）：删除最不频繁使用的键。
        - Random（随机淘汰）：随机选择一个键进行删除。
        - TTL（Time To Live）：根据键的TTL来删除过期的键。
    - 你可以根据需要在Redis配置文件中选择适合你的内存淘汰策略，默认使用LRU策略。

如果缓存数据**设置的过期时间是相同**的，并且Redis恰好将这部分数据全部删光了。这就会导致在这段时间内，这些缓存**同时失效**，全部请求到数据库中。

跳表是**可以实现二分查找的有序链表**。

- Multi开始事务。
- 命令入队。
- Exec执行事务。

**持久化**

Reids 是先执行写操作命令后，才将该命令记录到 AOF 日志里的，这么做其实有两个好处。

- **避免额外的检查开销**：因为如果先将写操作命令记录到 AOF 日志里，再执行该命令的话，如果当前的命令语法有问题，那么如果不进行命令语法检查，该错误的命令记录到 AOF 日志里后，Redis 在使用日志恢复数据时，就可能会出错。
- **不会阻塞当前写操作命令的执行**：因为当写操作命令执行成功后，才会将命令记录到 AOF 日志。

**RDB 快照**：将某一时刻的内存数据，以二进制的方式写入磁盘

所以，RDB 快照就是记录某一个瞬间的内存数据，记录的是实际数据   因此在 Redis 恢复数据时， RDB 恢复数据的效率会比 AOF 高些，因为直接将 RDB 文件读入内存就可以，不需要像 AOF 那样还需要额外执行操作命令的步骤才能恢复数据。

> RDB 做快照时会阻塞线程吗？
> 

Redis 提供了两个命令来生成 RDB 文件，分别是 save 和 bgsave，他们的区别就在于是否在「主线程」里执行：

- 执行了 save 命令，就会在主线程生成 RDB 文件，由于和执行操作命令在同一个线程，所以如果写入 RDB 文件的时间太长，**会阻塞主线程**；
- 执行了 bgsave 命令，会创建一个子进程来生成 RDB 文件，这样可以**避免主线程的阻塞**；

Redis 还可以通过配置文件的选项来实现每隔一段时间自动执行一次 bgsave 命令，默认会提供以下配置：

`save 900 1
save 300 10
save 60 10000`

别看选项名叫 save，实际上执行的是 bgsave 命令，也就是会创建子进程来生成 RDB 快照文件。 只要满足上面条件的任意一个，就会执行 bgsave，它们的意思分别是：

- 900 秒之内，对数据库进行了至少 1 次修改；
- 300 秒之内，对数据库进行了至少 10 次修改；
- 60 秒之内，对数据库进行了至少 10000 次修改。

这里提一点，Redis 的快照是**全量快照**，也就是说每次执行快照，都是把内存中的「所有数据」都记录到磁盘中。所以执行快照是一个比较重的操作，如果频率太频繁，可能会对 Redis 性能产生影响。如果频率太低，服务器故障时，丢失的数据会更多。

**AOF 是一种持久化方式，它通过将 Redis 所有的写操作（包括写命令）以追加（append）的方式记录到一个文件中。AOF 文件包含了可以重放（replay）重建数据集的写命令序列，因此，它记录了数据库状态的完整变更历史。**

缺点：

**文件较大**：由于记录了所有写操作，AOF 文件可能会比 RDB 文件更大。

**恢复速度相对较慢**：在恢复时，可能会因为需要重新执行大量写操作而导致恢复速度较慢。

### 缓存

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/2ddd57f1-969b-4dfa-be99-704511625908/Untitled.png)

**缓存雪崩 Cache avalanche**

- Redis挂掉了，请求全部走数据库。
- 对缓存数据设置相同的过期时间，导致某段时间内缓存失效，请求全部走数据库。

缓存雪崩如果发生了，很可能就把我们的数据库**搞垮**，导致整个服务瘫痪！

**如何解决缓存雪崩？**

- 解决方法：考虑用**加锁或者队列**的方式保证来保证不会有大量的线程对数据库一次性进行读写，从而避免失效时大量的并发请求落到底层存储系统上；还有一个解决方案，原有的失效时间基础上增加一个随机值，这样就会大幅度的**减少缓存在同一时间过期**。

对于“Redis挂掉了，请求全部走数据库”这种情况，我们可以有以下的思路：

- 事发前：实现Redis的**高可用**(主从架构+Sentinel 或者Redis Cluster)，尽量避免Redis挂掉这种情况发生。
- 事发中：万一Redis真的挂了，我们可以设置**本地缓存(ehcache)+限流(hystrix)**，尽量避免我们的数据库被干掉(起码能保证我们的服务还是能正常工作的)
- 事发后：redis持久化，重启后自动从磁盘上加载数据，**快速恢复缓存数据**。

**缓存击穿   Hotspot data set is invalid**

However, for some hot data with very high requests, once the valid time has passed, there will be a large number of requests falling on the database at this moment, which may cause the database to crash. 

应对缓存击穿可以采取前面说到两种方案：

- 互斥锁方案，**保证同一时间只有一个业务线程更新缓存**，未能获取互斥锁的请求，要么等待锁释放后重新读取缓存，要么就返回空值或者默认值。
- **不给热点数据设置过期时间，由后台异步更新缓存，或者在热点数据准备要过期前，提前通知后台线程更新缓存以及重新设置过期时间；**

**缓存穿透**

是指查询一个一定**不存在的数据**。由于缓存不命中，并且出于容错考虑，如果从**数据库查不到数据则不写入缓存**，这将导致这个不存在的数据**每次请求都要到数据库去查询**，失去了缓存的意义。

缓存穿透也有两种方案：

- 由于请求的参数是不合法的(每次都请求不存在的参数)，于是我们可以使用布隆过滤器(BloomFilter)或者压缩filter**提前拦截**，不合法就不让这个请求到数据库层！
- 当我们从数据库找不到的时候，我们也将这个**空对象设置到缓存里边去**。下次再请求的时候，就可以从缓存里边获取了。
- 这种情况我们一般会将空对象设置一个**较短的过期时间**。

可以发现缓存击穿跟缓存雪崩很相似，如果缓存中的**某个热点数据过期**了，此时大量的请求直接访问数据库就是 

**缓存与数据库双写一致**

只要我们设置了**键的过期时间**，我们就能保证缓存和数据库的数据**最终是一致**的。因为只要缓存数据过期了，就会被删除。随后读的时候，因为缓存里没有，就可以查数据库的数据，然后将数据库查出来的数据写入到缓存中。

除了设置过期时间，我们还需要做更多的措施来**尽量避免**数据库与缓存处于不一致的情况发生。分布式环境下非常容易出现缓存和数据库间数据一致性问题，针对这一点，如果项目对缓存的要求是强一致性的，那么就不要使用缓存。我们只能采取合适的策略来降低缓存和数据库间数据不一致的概率，而无法保证两者间的强一致性。合适的策略包括合适的**缓存更新策略**，更新数据库后**及时更新缓存、缓存失败时增加重试机制。**

两种策略各自有优缺点：

- 先删除缓存，再更新数据库
- 在高并发下表现不如意，在原子性被破坏时表现优异
- 先更新数据库，再删除缓存(`Cache Aside Pattern`设计模式)

**缓存更新的策略**

- Cache Aside（旁路缓存）策略；
- Read/Write Through（读穿 / 写穿）策略；
- Write Back（写回）策略；

主要分为两类 **Cache-Aside** 和 **Cache-As-SoR。** SoR 即「System Of Record，记录系统」，表示数据库。 实际开发中，Redis 和 MySQL 的更新策略用的是 Cache Aside，另外两种策略主要应用在计算机系统里

- **Cache Aside 策略**：应用程序直接**与数据库和缓存交互**，并负责维护缓存的一致性。这种策略简单易用，但是需要维护缓存和数据库的一致性，可能出现缓存穿透或缓存雪崩的问题，一般采用**延迟双删**来保证最终一致性

> 查询：先查询缓存，如果缓存中没有，则查询数据库，并将结果写入缓存
> 
> 
> 更新：先更新数据库，然后删除缓存或者更新缓存
> 

Cache-As-SoR **可以理解为，应用认为后端就是一个单一的存储，而存储自己维护自己的Cache。**数据库由缓存代理，缓存未命中时由缓存加载数据库数据然后应用从缓存读，写数据时更新完缓存后同步写数据库。应用只感知缓存而不感知数据库。

- **Read/Write Through 策略**：应用程序**只和缓存交互**，使用缓存与数据库交互.  better integrity and consistency, less performance

> 查询：先查询缓存，如果缓存中没有，则缓存从数据库中加载数据，并写入缓存
> 
> 
> 更新：先更新缓存，再由缓存同步更新数据库
> 
- **Write Behind 策略**：应用程序**只和缓存交互**。回写式，数据写入缓存即可返回，缓存内部会异步的去更新数据源，这样好处是**写操作特别快**，因为只需要更新缓存。并且缓存内部可以合并对相同数据项的多次更新，但是带来的问题就是**数据不一致**，可能发生写丢失。
- **Refresh-Ahead 策略**：应用程序**只和缓存交互**，由后台服务与数据库交互

> 查询：只查询缓存
> 
> 
> 更新：由后台服务**自动从数据库中查询最新的数据**，并将数据写入缓存中，
> 

**性能**

`Cache Aside` 的性能较高，它**只在缓存未命中**时才访问数据库

`Read/Write Through` 的性能较低，它在**每次读写时都需要访问数据库**

`Write Behind Caching` 的性能最高，它**只在缓存未命中**时才访问数据库，而**写入操作是异步的**

`Refresh-Ahead` 的性能介于 `Cache Aside` 和 `Write Behind Caching` 之间，它**只在即将过期时**才访问数据库，并且**写入操作也是异步的**

**数据一致性**

`Cache Aside` 的数据一致性较低，它**只在缓存未命中时**才更新缓存，而写入操作则是**直接更新数据库**，**并将缓存中的数据删除或更新**

`Read/Write Through` 的数据一致性最高，它在**每次读写时都**更新数据库和缓存

`Write Behind Caching` 的数据一致性最低，它**只在缓存未命中**时才更新缓存，而写入操作则是先更新缓存，并在**异步更新数据库**，有较大的延迟。

`Refresh-Ahead` 的数据一致性介于 `Read/Write Through` 和 `Cache Aside` 之间，它保证了缓存中的数据**总是最新**的，但是有一定的延迟

Redis 持久化策略，其实就是为了减少服务宕机后数据丢失，以及快速恢复数据，也算是支持高可用的一种实现。 除此之外，Redis 还提供了其它几种方式来保证**系统高可用，**业务中最常用的莫过于主从同步（也称作主从复制）、Sentinel 哨兵机制以及 Cluster 集群。 

### **主从复制**

 Redis 同时支持主从复制和读写分离：一个 Redis 实例作为主节点 Master，负责写操作。其它实例（可能有 1 或多个）作为从节点 Slave，负责复制主节点的数据。

主节点 Master 数据更新：Master 负责处理所有的写操作，包括写入、更新和删除等。 数据同步：写操作在 Master 上执行，然后 Master 将写操作的结果同步到所有从节点 Slave 上。 从节点 Slave 数据读取：Slave 负责处理读操作，例如获取数据、查询等。 数据同步：Slave 从 Master 复制数据，并在本地保存一份与主节点相同的数据副本。 

2.2 为什么要读写分离 1）防止并发2）易于扩展 我们都知道，大部分使用 Redis 的业务都是读多写少的。所以，我们可以根据业务量的规模来确定挂载几个从节点 Slave，当缓存数据增大时，我们可以很方便的扩展从节点的数量，实现弹性扩展。 同时，读写分离还可以实现数据备份和负载均衡，从而提高可靠性和性能。 3）高可用保障 不仅如此，Redis 还可以手动切换主从节点，来做故障隔离和恢复。

**主从复制过程**

- 从服务器连接主服务器，发送SYNC命令；主服务器接收到SYNC命名后，开始执行BGSAVE命令生成RDB文件并使用缓冲区记录此后执行的所有写命令；主服务器BGSAVE执行完后，向所有从服务器发送快照文件，并在发送期间继续记录被执行的写命令；从服务器收到快照文件后丢弃所有旧数据，载入收到的快照；主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；从服务器完成对快照的载入，开始接受命令请求，并执行来自主服务器缓冲区的写命令；（从服务器初始化完成）主服务器每执行一个写命令就会向从服务器发送相同的写命令，从服务器接收并执行收到的写命令（从服务器初始化完成后的操作）
- 一般主从配置可以缓解请求压力，做读写分离，写服务器不开启持久化，从服务器开启，从服务器还负责读取的操作，而且从服务器可以是多个，可以有效缓解主服务器的压力；但是坏处在于，如果主服务器宕机，无法自动切换恢复；

bgsave 过程中，Redis 依然**可以继续处理操作命令**的，也就是数据是能被修改的，关键的技术就在于**写时复制技术（Copy-On-Write, COW）。**执行 bgsave 命令的时候，会通过 fork() 创建子进程

**写入时复制**（英语：**Copy-on-write**，简称**COW**）是一种计算机[程序设计](https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88)领域的优化策略。其核心思想是，如果有多个调用者（callers）同时请求相同资源（如内存或磁盘上的数据存储），他们会共同获取相同的指针指向相同的资源，直到某个调用者试图修改资源的内容时，系统才会真正复制一份专用副本（private copy）给该调用者，而其他调用者所见到的最初的资源仍然保持不变。这过程对其他的调用者都是[透明](https://zh.wikipedia.org/wiki/%E9%80%8F%E6%98%8E)的。此作法主要的优点是如果调用者没有修改该资源，就不会有副本（private copy）被建立，因此多个调用者只是读取操作时可以共享同一份资源。

Redis的**持久化策略**

有两种：1、RDB：快照形式是直接把内存中的数据保存到一个dump的文件中，定时保存，保存策略。2、AOF：把所有的对Redis的服务器进行修改的命令都存到一个文件里，命令的集合。Redis默认是快照RDB的持久化方式。当Redis重启的时候，它会优先使用[AOF文件](https://www.zhihu.com/search?q=AOF%E6%96%87%E4%BB%B6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22118561398%22%7D)来还原数据集，因为AOF文件保存的数据集通常比RDB文件所保存的数据集更完整。你甚至可以关闭[持久化功能](https://www.zhihu.com/search?q=%E6%8C%81%E4%B9%85%E5%8C%96%E5%8A%9F%E8%83%BD&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22118561398%22%7D)，让数据只在服务器运行时存。

**集群原理**

在Redis集群中，所有Redis节点彼此互联，节点内部使用二进制协议优化传输速度和带宽。当一个节点宕机后，集群中超过半数节点检测失效才认为该节点失效。不同于Tomcat集群需要反向代理服务器，Redis集群中任意节点都可以直接和Java客户端连接。Redis集群上的数据分配采用哈希槽。Redis集群中内置了16384个哈希槽，当有数据要存储时，Redis会首先使用CRC16算法对key进行计算，将计算结果对16384取余，这样每个key都会对应一个取值在16384之间的哈希槽。开发者可根据每个Redis实例性能来调整每个Redis实例上哈希槽的分布范围。

DELETE FROM messages WHERE create < DATE_SUB(NOW(), INTERVAL 3 MONTH);

一般业务刚上线的时候，直接使用单机数据库就够了，但是随着用户量上来之后，系统就面临着大量的写操作和读操作，单机数据库处理能力有限，容易成为系统瓶颈。由于存在读写锁冲突，并且很多大型互联网业务往往**读多写少**，读操作会首先成为数据库瓶颈，我们希望消除读写锁冲突从而提升数据库整体的读写能力。

那么就需要采用读写分离的数据库集群方式，一主多从，主库会同步数据到从库。写操作都到主库，读操作都去从库。

读写分离的主要思想是将数据库的读和写操作分开处理，从而减轻主数据库的负担，提高整个系统的并发能力和性能。

常见的读写分离架构包括：

1. **主从复制**：通过在主数据库上进行写操作，并将写操作同步到多个从数据库（只读副本）。读操作则可以在从数据库上执行，分担了主数据库的读压力。
2. **Sharding分片**：按照某种规则（例如按照用户ID、地理位置等）将数据分散存储在不同的数据库节点上，每个节点负责一部分数据。这样可以水平扩展数据库系统，提高了系统整体的读写能力。

Mysql**表格设计**？

平衡范式与冗余(效率优先；往往牺牲范式)拒绝3B(拒绝大[sql语句](https://so.csdn.net/so/search?q=sql%E8%AF%AD%E5%8F%A5&spm=1001.2101.3001.7020)：big sql、拒绝大事务：big transaction、拒绝大批量：big batch);

第一范式（1NF）是指数据库表的**每一列都是不可分割的基本数据项**，同一列中不能有多个值，即实体中的某个属性不能有多个值或者不能有重复的属性。如果出现重复的属性，就可能需要定义一个新的实体，新的实体由重复的属性构成，新实体与原实体之间为一对多关系。在第一范式（1NF）中表的每一行只包含一个实例的信息。简而言之，第一范式就是无重复的列。

说明：在任何一个关系数据库中，第一范式（1NF）是对关系模式的基本要求，**不满足第一范式（1NF）的数据库就不是关系数据库。**

第一范式存在问题：冗余度大、会引起修改操作的不一致性、数据插入异常、数据删除异常。

1. **冗余度大**：
    - 1NF要求每列都是原子性的，这可能导致数据的冗余。当数据重复存储在不同的表中，会增加存储空间，增加了数据不一致性的风险。
2. **修改操作的不一致性**：
    - 如果某个信息在多个地方存储，当需要修改这个信息时，需要在所有存储位置进行同样的修改。如果有一个位置的信息修改了而其他位置未修改，数据就会不一致。
3. **数据插入异常**：
    - 数据插入异常指的是由于表中的部分列被留空或无法插入新行，而导致无法插入需要的数据。在1NF中，如果表中的某列是必填项，而其他列不是，当插入新行时，可能会出现无法插入数据的情况。
4. **数据删除异常**：
    - 当从表中删除数据时，可能会意外删除其他相关数据，从而造成数据丢失。这种情况在存在多个依赖于相同键的表时较为常见。如果删除某个主键相关的信息，可能会导致其他数据不完整或不一致。

**第二范式**，强调记录的唯一性约束，数据表必须有一个主键，并且没有包含在主键中的列必须**完全依赖**于主键，而不能只依赖于主键的一部分。

举例：

学生信息（学号，身份证，姓名）学号-》姓名 ，学号，身份证-》姓名 所以姓名部分依赖于（学号，身份证）该表不是2NF。

**2.3 3NF 第三范式**

第三范式，强调数据属性冗余性的约束，也就是非主键列必须直接依赖于主键。也就是消除了非主属性对码的传递函数依赖的2NF。

BCNF消除主键的某一列会依赖于主键的其他列

**4NF 第四范式**

非主属性不应该有多值。如果有多值就违反了第四范式。4NF是限制关系模式的属性间不允许有非平凡且非函数依赖的多值依赖。

举例：用户联系方式表(用户id，固定电话，移动电话)，其中用户id是主键，这个满足了BCNF,但是一个用户有可能会有多个固定电话或者多个移动电话，那么这种设计就不合理，应该改为(用户id，联系方式类型，电话号码)。

说明：如果只考虑函数依赖，关系模式规范化程度最高的范式是BCNF;如果考虑多值依赖则是4NF。

先建立索引或者分区，然后再查询

### 事务

数据库环境中的事务有两个主要目的：

1. 提供可靠的工作单元，即使在系统发生故障的情况下，也可以从故障中正确恢复并保持数据库的一致性。例如：当执行过早且意外停止（完全或部分）时，在这种情况下，数据库上的许多操作仍未完成，状态不明确。