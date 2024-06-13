---
title: Go生态常用库 中间件
date: 2022-11-17 17:43:33

categories: 
- 计算机工程
tags:
- 计算机基础
- 编程
- 开源
img: /medias/featureimages/go.png
---

## **GIN**

一个高性能的Web框架，具有内置的中间件支持。它提供了路由、中间件、JSON验证和绑定等功能，非常适合用于构建高性能的RESTful API。
It features a martini-like API with performance that is up to 40 times faster thanks to [httprouter](https://github.com/julienschmidt/httprouter). If you need performance and good productivity, you will love Gin.

只要你的路由带有参数，并且这个项目的API数目超过了10，就尽量不要使用`net/http`中默认的路由。在Go开源界应用最广泛的router是httpRouter，很多开源的router框架都是基于httpRouter进行一定程度的改造的成果。关于httpRouter路由的原理，会在本章节的router一节中进行详细的阐释。

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

SEO

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

DNS 将域名转换为 IP 地址，以便浏览器能够加载互联网资源。

要解决跨域问题的办法有CORS、代理和JSONP

1. CORS

出于安全原因，浏览器限制从脚本发起的跨域 HTTP 请求。例如，`XMLHttpRequest` 和 Fetch [API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)遵循[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一来源请求资源，除非来自其他来源的响应包含正确的 CORS 标头。(XMLHTTP是一组API函数集，可被JavaScript、JScript、VBScript以及其它web浏览器内嵌的脚本语言调用，通过HTTP在浏览器和web服务器之间收发XML或其它数据。XMLHTTP最大的好处在于可以**动态**地更新网页，它无需重新从服务器读取整个网页，也不需要安装额外的插件。该技术被许多网站使用，以实现快速响应的动态网页应用。例如：Google的Gmail服务、Google Suggest动态查找界面以及Google Map地理信息服务。

在HTTP协议中，OPTIONS方法是一个预检请求（preflight request），用于在发送实际请求之前确定服务器是否愿意接受该请求。这种方法特别重要在跨源资源共享（CORS, Cross-Origin Resource Sharing）中，因为它帮助浏览器决定是否安全地进行跨域请求。

 **OPTIONS 请求的作用包括：**

1. **检查服务器支持的HTTP方法**：通过发送一个OPTIONS请求到服务器，客户端可以知道服务器支持哪些HTTP方法（如GET, POST, DELETE等）。
2. **CORS预检请求**：
    - 在进行跨域请求时，如果请求满足某些条件（例如，使用了除GET/HEAD/POST以外的方法，或者POST请求的Content-Type不是application/x-www-form-urlencoded、multipart/form-data或text/plain，或者请求包含了额外的头信息），浏览器会自动先发送一个OPTIONS请求到服务器，询问服务器是否允许跨域请求，并且询问可以使用哪些HTTP方法和头信息。
    - 这个预检请求的响应中，服务器会返回**`Access-Control-Allow-Origin`**、**`Access-Control-Allow-Methods`**和**`Access-Control-Allow-Headers`**等CORS相关的响应头，指示哪些源、哪些HTTP方法和哪些头信息是被允许的。
**OPTIONS 请求的响应头：**

- **Access-Control-Allow-Origin**：指示哪些源可以访问资源。
- **Access-Control-Allow-Methods**：指示允许的HTTP方法。
- **Access-Control-Allow-Headers**：在实际请求中允许携带的自定义请求头。
- **Access-Control-Max-Age**：指示浏览器应该缓存预检请求的结果多长时间。

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

## GORM

WEB开发中的ORM

实际上大量的工作都是简单的select，和update delete等，复杂的sql并不是特别频繁，如果orm有性能问题，再手写sql。

ORM的目的就是屏蔽掉DB层，很多语言的ORM只要把你的类或结构体定义好，再用特定的语法将结构体之间的一对一或者一对多关系表达出来。那么任务就完成了。然后你就可以对这些映射好了数据库表的对象进行各种操作，例如save，create，retrieve，delete。至于ORM在背地里做了什么阴险的勾当，你是不一定清楚的。使用ORM的时候，我们往往比较容易有一种忘记了数据库的直观感受。

决定在项目中是否使用 ORM（对象关系映射）库通常取决于多种因素，包括项目规模、开发团队的经验、项目的复杂性以及特定需求等。以下是一些关于是否使用 ORM 的考虑因素：

**优点：**

- **简化数据库操作**：ORM 将数据库操作转换为对象操作，使代码更易读、易写、易维护。它可以让开发者更专注于业务逻辑而不是 SQL 语句。
- **跨数据库平台**：ORM 库通常能够提供跨不同数据库平台的支持，因此你可以更轻松地在不同的数据库之间切换。
- **对象映射**：ORM 可以将数据库表映射到程序中的对象，简化了对象和数据库之间的转换。
- **内置功能**：ORM 通常提供了许多内置功能，例如数据验证、查询构建器、关联查询等，简化了开发流程。

**缺点：**

- **性能损耗**：有时候 ORM 会引入一定程度的性能损耗，因为它需要进行对象和数据库之间的映射转换。
- **学习曲线**：ORM 框架可能有自己的学习曲线，开发团队需要时间来熟悉并掌握框架的使用。
- **复杂查询的处理**：在一些复杂的查询场景下，ORM 可能会限制灵活性，需要编写复杂的 ORM 特定语法或者原生 SQL。

**何时使用 ORM：**

- **小型到中型项目**：对于小型到中型的项目，ORM 可能更有益于提高开发效率，并减少基本的 CRUD 操作的重复代码。
- **团队熟悉度**：如果团队对某个 ORM 框架比较熟悉，并且该框架能够满足项目需求，那么使用 ORM 可能是个不错的选择。
- **快速开发**：对于需要快速迭代和开发的项目，ORM 可以加快开发速度。

**何时不使用 ORM：**

- **性能要求极高**：对于对性能要求极高、需要高度优化的场景，可能直接使用原生 SQL 或避免 ORM 更合适。
- **复杂查询**：某些复杂的查询可能不容易通过 ORM 来表达，可能需要编写复杂的 ORM 语句或者原生 SQL。

Go官方提供了`database/sql`
包来给用户进行和数据库打交道的工作，`database/sql`
库实际只提供了一套操作数据库的接口和规范，例如抽象好的SQL预处理（prepare），连接池管理，数据绑定，事务，错误处理等等。官方并没有提供具体某种数据库实现的协议支持。

---

**gorm**框架是go的一个数据库连接及交互框架，一般用于连接关系型数据库。

本人最近用go写业务后台，数据库是mysql，用的是gorm连接，一般而言，是数据库先启动，再启动业务后台服务。
本人在程序启动的时候，会事先进行数据库连接。
下面是我发现的现象：
1.数据库先启动，再启动业务后台，业务操作正常，此时断掉数据库，业务操作异常(数据库操作报错)， 此时启动数据库，再进行业务请求，业务操作正常(数据库请求正常)。

2.业务后台先启动，数据库后启动，此时业务操作异常(数据库操作报错)

很明显，现象1是我想要的结果，断掉数据库后再重新启动数据库，gorm内部给人感觉会自动重连一样。

**现象1表现出了期望的行为，而现象2则没有展现出自动重连的效果。这可能是因为在现象2中，GORM 连接并未尝试重新连接到数据库，而是仍然使用先前建立的连接，导致了业务操作异常。**

在 GORM 中，默认情况下，并不会对连接断开进行自动重连。但是你可以设置 GORM 的连接参数以实现断开连接后的自动重连功能。

```jsx
// 示例使用 DryRun 模式来检查是否有额外或低效的查询

// Assuming 'db' is your GORM database connection instance

// 开启 DryRun 模式
db = db.Session(&gorm.Session{DryRun: true})

// 构建查询
query := db.Preload("Orders").Find(&[]User{})

// 打印生成的 SQL 语句
fmt.Println(query.Statement.SQL.String()) // 这里会输出生成的 SQL 语句

// 分析生成的 SQL 查询语句，确保它们是你预期的，且是有效的
```

**避免N+1查询问题？**

**1. 使用预加载（Eager Loading）**：
ORM工具通常提供预加载功能，例如使用 **`Preload`** 或 **`Join`** 等方法可以一次性加载所有需要的关联数据，而不是在循环中逐个加载。 Preload().Find(&product)

**2. 批量查询**：
可以通过在单个查询中检索所有相关的数据来避免多次查询。这可以通过ORM工具的批量查询方法来实现，以减少数据库的访问次数。

**3. 使用联合查询（Join）**：
利用数据库的关联查询功能，通过在查询中使用JOIN语句一次性获取所需的数据，而不是进行多次单独的查询。 Select

**4. 缓存数据**：
对于频繁使用的数据，可以考虑将其缓存在内存中，以减少对数据库的实际访问次数。

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

## Wire

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
