---
title: Frontend Development
date: 2024-03-10 15:43:32
---

欢迎来到我的前端小天地，这里不仅仅是代码的海洋，更是我对技术的热爱与追求的体现。我是一位独立的软件开发者，专注于为每个项目打造独特而精致的前端体验。

在这个数字化的时代，网站已经不再只是展示信息的窗口，更是用户与技术交互的平台。而我，对每一行代码都有着执着的追求，因为我相信，卓越的细节决定了卓越的用户体验。

为何选择我？

定制而非模板： 我的每一份工作都是独一无二的，我从不借助廉价的主题，而是为你精心打磨每一个细节，为你呈现出真正属于你的网站。

从大项目到细节设计： 作为一名全职开发者，我在与大型客户合作的同时，同样专注于每个细节的完美呈现。无论是响应式设计还是移动优先策略，我总是以用户为中心。

轻量化而高效： 我坚信没有必要通过过多的插件和主题来使网站臃肿。我的设计理念是“简而不减”，不仅摆脱了繁琐的编辑器，更拥抱了原生的JavaScript，让你的网站保持高效。

技术SEO的精通： 我不仅仅关注网站的外观，更深入关注技术SEO。你的网站不仅会令用户眼前一亮，更会在搜索引擎中占据有利位置。

在这个浮躁的网络世界，我力求通过博客分享我的经验和见解，教育人们为何他们应该关心技术细节，因为当他们了解时，他们就会关心。我的经验告诉我，用户不仅看到了网站的外观，更感受到了技术的品质。

一起探索前端的未知领域吧！感谢你阅读我的博客，期待我们的技术之旅。

# Marketing

https://www.reddit.com/r/webdev/comments/19ewsgp/is_wordpress_the_cheapest_fastest_way_of_making/

https://www.smashingmagazine.com/2022/10/roadmap-building-business-chatbot/

Airtasker fiverr which best for solo software developer

Well, I know exactly what makes me a better developer than others.

1. All my work is custom made, I will not sell you a cheap theme
2. I'm a full-time developer at an agency with large clients
3. Everything responsive, even better: I always work mobile first
4. No unnecessary plugins, they'll bloat the website in the long run
5. No bloated editors like Elementor as well, but clean custom fields instead
6. No Jquery but vanilla Javascript, which is faster
7. Very experienced with technical SEO

I know that clients do not care about technical aspects, but still. It drives me nuts that wannabe "website makers" are in my way of getting clients by reselling themes and changing some fonts and colours. Anyway, thank you for your tips.

如果您能教育他们为什么他们应该关心，他们就会关心。当我和这些人打交道时，他们会问，既然他们可以在 wix 或 Wordpress 上以低廉的价格免费完成工作，为什么还要付钱给我呢？我告诉他们这是一个完全不同的产品。他们的工作很可能是模板泵送和转储，没有真正关心或思考内容策略，并且具有无聊但对客户有吸引力的通用文本。最重要的是，他们的页面速度得分很糟糕。Wix 和 WordPress 网站得分为 17-30/100。我的作品得分为 98-100。

# 开发
[网络通信basic](https://www.notion.so/basic-0f2eb35096e24240abe436dd0a5c508e?pvs=21)

### JSX

`const element = <h1>Hello, world!</h1>;`

这个有趣的标签语法既不是字符串也不是 HTML。

它被称为 JSX，它是 JavaScript 的语法扩展。我们建议将它与 React 一起使用来描述 UI 应该是什么样子。JSX 可能会让您想起模板语言，但它具有 JavaScript 的全部功能。

- **`.js`:** 表示这是一个 JavaScript 文件。
- **`.jsx`:** 表示这是一个 JavaScript XML 文件，即包含 React 组件内部构建标签的类 XML 语法。
    
    JavaScript XML 是React组件内部构建标签的类XML语法。可以理解为React提供的[语法糖](https://www.zhihu.com/search?q=%E8%AF%AD%E6%B3%95%E7%B3%96&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%22625039917%22%7D)，可以让编译器更方便快速的选择编译方式。JavaScript 是能够被浏览器直接识别的，JavaScript XML需要经过编译器（webpack等）转换成 JavaScript
    
    在实际使用中，**`.js`** 和 **`.jsx`** 的语法和后缀可以互换，语法上也完全兼容。建议使用统一的 **`.js`** 后缀，无需特意区分。
    
- **`.ts`:** 表示这是一个 TypeScript 文件。文件内容不支持类似 **`<div>`** 这种 HTML 语法，因为 TypeScript 是一种静态类型语言，需要遵循类型定义。
- **`.tsx`:** 表示这是一个 TypeScript 文件，同时也包含了 JavaScript XML（JSX）语法。**`.tsx`** 文件在 TypeScript 的基础上支持 JSX 语法，可以包含类似 **`<div>`** 的标签。

总的来说，**`.js`** 和 **`.jsx`** 在 React 中通常是互换使用的，而 TypeScript 用户更倾向于使用 **`.ts`** 和 **`.tsx`**，其中 **`.tsx`** 用于包含 JSX 语法。

JSX 产生 React “元素”。[我们将在下一节](https://reactjs.org/docs/rendering-elements.html)探索将它们渲染到 DOM 。下面，您可以找到入门所需的 JSX 基础知识。在React中，**JSX**（JavaScript XML）通常要求在**返回的顶级元素中包裹所有内容**。这是因为当返回的内容包含多个元素时，React需要一个根元素来渲染。

在 React 项目中，index.tsx 和 App.tsx 在应用程序结构中具有不同的用途：

index.tsx：该文件充当 React 应用程序的入口点。它通常是启动或构建应用程序时执行的第一个文件。在大多数 React 应用程序中，index.tsx 或 index.js 是 ReactDOM 将应用程序的根组件渲染到 DOM 中的位置。它负责将主要组件（通常是 App.tsx）渲染到 HTML 文件中。

App.tsx：此文件包含 React 应用程序的根组件。这是应用程序的主要结构开始的地方。该组件通常代表应用程序的整体布局，包括路由结构以及跨应用程序的多个页面或部分保留的任何全局组件或布局。

使用 index.tsx 作为入口点的原因是使用 webpack 或 Create React App (CRA) 等工具捆绑和构建 React 应用程序的方式。 index.tsx 文件被指定为配置中的入口点，因此当构建或启动应用程序时，它会查找该文件作为应用程序的起点。同时，App.tsx 是开发人员定义 React 应用程序主要结构的传统位置。该文件通常包含路由逻辑、全局上下文/提供程序，并设置将呈现给用户的布局或结构。

### Next.js

Next.js 是一个流行的开源 React 框架，用于构建 Web 应用程序。前后端集成方案但复杂场景下还是需要分离的后端It's kind of a backend for the frontend. 

When to use? 

- **How Complex Is Your Application?**
    - For simple applications, a monolithic approach might be sufficient. For complex applications with distinct frontend and backend requirements, separation could be beneficial.
- **Team Structure:**
    - Do you have separate teams or developers specializing in frontend and backend development? If so, separation might align with your team structure.
- **Future Plans:**
    - Consider your long-term plans. If you anticipate significant growth, scalability requirements, or the need for microservices, a separate approach might be more future-proof.
- **Development Speed:**
    - If your priority is rapid development and deployment, a monolithic approach with Next.js API routes can be convenient.

以下是与 Next.js 相关的一些关键功能和概念：

Next.js 具有两种形式的预渲染： **静态生成（Static Generation）** 和 **服务器端渲染（Server-side Rendering）**。这两种方式的不同之处在于为 page（页面）生成 HTML 页面的 **时机** 。

- **[静态生成 （推荐）](https://www.nextjs.cn/docs/basic-features/pages#static-generation-recommended)**：HTML 在 **构建时** 生成，并在每次页面请求（request）时重用。
- **[服务器端渲染](https://www.nextjs.cn/docs/basic-features/pages#server-side-rendering)**：在 **每次页面请求（request）时** 重新生成 HTML。
1. **Server-side rendering (SSR)**: Next.js allows you to perform server-side rendering, generating HTML pages on the server at runtime before serving them to the client. This can improve initial loading times and SEO.
2. **Static Site Generation (SSG)**: Next.js provides static site generation, enabling the creation of static websites that can be pre-built during the build phase. This allows for high performance and easy deployment of static content.
3. **File-based Routing**: Next.js uses a file-based routing system where routes are defined based on the file structure. For example, creating a file in the **`pages`** directory automatically creates a route for that file.
4. **API Routes**: Next.js allows developers to create API endpoints easily using API routes. These routes are defined in the **`api`** directory and can handle server-side logic or connect to databases.
5. **Automatic Code Splitting**: Next.js performs automatic code splitting, allowing only the necessary JavaScript to be loaded for each page. This helps in optimizing the performance of the application.’

A **hydration often associated with SSR,** means "Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, modern JavaScript frameworks making it dynamic by attaching event listeners and state management to it using JavaScript.

I see **"use client"** as "enable client side interactivity".  将需要交互性的最叶子节点变成客户端组件是一个有效的**性能优化策略**，特别是在构建大型、复杂的 Web 应用时。这种方法允许开发者精细控制渲染行为，优化用户体验，同时保持应用的快速响应和高效加载。

**Next.** **js has two server runtimes to run your application: the Node.** **js Runtime (default) and the Edge Runtime**. When doing SSR, or serving API routes, the application code will be executed in the Node.

Next.js 的可配置性真的是一个很强大的特色，它准备了一套默认就很好用的默认配置，但这些配置基本上用户都可以 `完全` 控制它（完全做一个保留，但大型工程基本上都是可以支撑的）。

下面我们来分析一下它的可配置功能。

- 配置文件 `next.config.js` 中暴露了 webpack 实例，因此你可以完全控制 webpack; 支持配置自定义配置，你可以把一些公用的不变的配置写在 `serverRuntimeConfig` 或者 `publicRuntimeConfig` 中，前者只会出现在服务端，后者会暴露到客户端。
- 可 [自定义 server](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustom-server) ，你可以在启动服务的时候做一些自己想要做的处理，比如 node.js 性能监控等等。   不自定义 server ，也可以使用它提供的 [middreware](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fmiddleware) 机制来拦截请求或者校验权限等事项。
- [自定义 Document](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustom-document)，也就是`_document.js`，用于自定义配置 html 生成内容，比如插入 Google 分析脚本。
- [自定义错误界面](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustom-error-page) 也就是 404 或者 500 错误状态的页面。
- [自定义页面 head 属性](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fapi-reference%2Fnext%2Fhead)，使用`next/head` 提供的 Head 组件，用于自定义 html document 头部的 title/meta/base 等标签信息。
- 可自定义 `[babel](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustomizing-babel-config)` 和 `[postcss](https://link.juejin.cn/?target=https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustomizing-postcss-config)` 等工程化规则配置。

在现代JavaScript项目中，特别是使用模块打包器如Webpack或Rollup时，对模块的处理非常关键，因为它直接影响到最终构建的体积和性能。理解如何处理这些不同情况的模块导入是优化项目的重要部分。下面是对你提供的每个资源处理方式的解释：

代码 `import { Button } from "@shopify/polaris";` 存在以下可能：

- 导入它：导入并包含该模块，分析评估它并继续进行依赖分析
- 跳过它：不导入它，不分析评估它但会继续进行依赖分析
- 排除它：不导入它，不评估且不做依赖分析

为了利用 **tree shaking** 的优势，必须：

- 使用 ES2015 模块语法（即 `import` 和 `export`）；
- 确保没有编译器将 ES2015 模块语法转换为 CommonJS（顺带一提，这是现在常用的 `@babel/preset-env` 的默认行为，请参阅 [文档](https://babeljs.io/docs/en/babel-preset-env#modules) 以了解更多信息）。
- 在项目的 `package.json` 文件中添加 `"sideEffects"` 属性。
- 使用 `mode` 为 `"production"` 的配置项以启用 [更多优化项](https://webpack.docschina.org/concepts/#mode)，包括压缩代码与 tree shaking。

你可以将应用程序想象成一棵树。绿色表示实际用到的源码和库，是树上活的树叶。灰色表示未引用代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动（shake）这棵树，使它们落下。

API

### **Methods and Technologies for Data Fetching**

- **XMLHttpRequest (XHR)**: One of the earliest methods to perform asynchronous web requests. While still in use, it has largely been superseded by newer technologies.
- **Fetch API**: A modern, promise-based mechanism native to the browser that simplifies making web requests. It's more powerful and flexible than XHR.
- **Axios**: A popular JavaScript library that provides an easy-to-use API for making HTTP requests. It's based on promises, making it suitable for modern web development.
- **GraphQL**: A query language for APIs and a runtime for executing those queries by using a type system you define for your data. Unlike the traditional REST approach, GraphQL allows clients to request exactly the data they need, making data fetching more efficient.改善restful的缺点，避免了client获取不足和获取过度
- **Libraries/Frameworks Built-in Functions**: Many modern JavaScript frameworks and libraries like React, Angular, and Vue offer built-in functions or recommend specific libraries (like **`react-query`**, **`Apollo`** for GraphQL) to facilitate data fetching and state management.

### **Considerations in Data Fetching**

- **Asynchronous Nature**: Data fetching is inherently asynchronous. JavaScript provides mechanisms like callbacks, promises, and async/await syntax to handle asynchronous operations.
- **Error Handling**: Proper error handling is crucial to manage network errors, invalid responses, or data parsing errors gracefully.
- **Performance and Optimization**: Techniques like caching, data prefetching, and lazy loading are used to optimize the data fetching process and improve user experience.
- **Security**: It's important to secure data requests to protect sensitive information from being exposed or intercepted through practices like using HTTPS, securing API keys, and sanitizing inputs.

- **REST** 适用于简单的 CRUD 操作和资源管理。
- **GraphQL** 适用于需要灵活性和精确数据的场景。
- **RPC** 适用于强调过程调用的场景，尤其是在多语言和多平台之间进行通信时。

## CSS

布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 `[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)` 属性 + `[position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)`属性 + `[float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)`属性。它对于那些特殊布局非常不方便，比如，[垂直居中](https://css-tricks.com/centering-css-complete-guide/)就不容易实现。

- **`absolute`**：元素会相对于最近的已定位的祖先元素进行定位（即非**`static`**定位），如果没有，则相对于文档的初始包含块定位。
- **`fixed`**：元素会相对于浏览器窗口进行定位，即使窗口滚动，元素也会保持在指定的位置。
- **`sticky`**：元素是基于用户的滚动位置在**`relative`**和**`fixed`**定位之间切换的。

In CSS, **`position`** is a fundamental property that dictates how an element is positioned in the document layout. The values **`static`** and **`relative`** are two different settings for this property, and they have distinct behaviors:

1. **Position: Static**
    - **Default Behavior**: **`static`** is the default position value for any HTML element. If you don't explicitly set the **`position`** property, it defaults to **`static`**.
    - **Normal Document Flow**: Elements with **`position: static`** are positioned in the normal document flow. This means the element is positioned according to its place in the HTML structure, following the sequence and layout dictated by the HTML and other CSS properties.
    - **No Offsetting**: With **`position: static`**, you cannot use **`top`**, **`right`**, **`bottom`**, or **`left`** properties to move the element. These properties will have no effect on a statically positioned element.
    - **No Z-Index**: Static elements don't react to the **`z-index`** property, so you can't use it to change the stacking order of elements with **`position: static`**.
2. **Position: Relative**
    - **Adjust Position**: When you set an element to **`position: relative`**, it allows you to position the element relative to its normal position in the document flow.
    - **Offsets**: By using **`top`**, **`right`**, **`bottom`**, or **`left`** properties on an element with **`position: relative`**, you can move the element away from its normal position. For example, **`top: 10px;`** will move the element 10 pixels down from where it would normally be.
    - **Document Flow Impact**: Unlike absolute or fixed positioning, an element with **`position: relative`** still occupies its original space in the document flow. This means it doesn’t overlap other elements or leave a gap in the layout.
    - **Stacking Context**: You can use **`z-index`** on relatively positioned elements to control their stacking order.
    - **Base for Absolutely Positioned Children**: If an element with **`position: absolute`** is inside a container with **`position: relative`**, the absolute element will be positioned relative to its nearest positioned ancestor (the relative container in this case), not the entire page.

In summary, the primary difference is that **`static`** positioning is the default layout behavior with no ability to offset elements or use **`z-index`**, while **`relative`** positioning allows you to nudge elements from their normal position, use **`z-index`**, and serve as a positioning context for absolutely positioned child elements.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ea503cf6-9325-47ab-9fb3-3e33e40583ef/a1122c4d-67f0-456b-a801-25dfe28a150c/Untitled.png)

### Tailwind

Tailwind 适合的是新生代的公司，还没有自己的设计体系，要从零开始做一套自己的。这时候 Tailwind 的优势就出来了：你还没有自己的组件对吧？那你要用更小颗粒度的东西先搭出来通用组件吧？这个更小颗粒度的东西到底是什么呢？就是 HTML 元素和 CSS 样式了。

这时候你可以选择[原生 CSS](https://www.zhihu.com/search?q=%E5%8E%9F%E7%94%9F%20CSS&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2971232012%7D)，也可以选择 Tailwind。原生 CSS 被设计出来时，页面还没被拆分为组件，样式可以有丰富的上下文以来，所以支持复杂的 selector。自从有了组件的概念后，大家习惯了在组件和组件之间划清界限，互相不能影响对方的样式。就算[你是我的](https://www.zhihu.com/search?q=%E4%BD%A0%E6%98%AF%E6%88%91%E7%9A%84&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2971232012%7D)父组件，你也只能划定一个区域给我渲染，你无权干预我的样式。面对这样的需求，Tailwind 的优势就出来了。

你要用样式组合出组件，然后用[组件组合](https://www.zhihu.com/search?q=%E7%BB%84%E4%BB%B6%E7%BB%84%E5%90%88&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2971232012%7D)出应用。你不需要也不允许一个组件的样式影响到另一个组件的样式。Tailwind 能够给你很好用的可复用样式，而且它们互不干扰对方。

**思维转变：使用组合**

万物相通的，这些年面向对象语言中，迎来新的架构思想变化：组**合优于继承，多用组合少用继承**，熟悉react的同学，也清楚hook和class是两种开发思维的不同，原先一个庞大的class组件，变为多个简单的hook组件的组合，代码复用率得到提升。

而Tailwind CSS也是迎合这一思想的，而且它更彻底，组合到了原子级（一行css一个class名，例如：Tailwind CSS中，flex类表示 display：flex ）。

**按需编译&高复用率**

Tailwind CSS是用到多少，编译多少，多余的一点没有，因此极大的降低了css体积。

针对质疑的三问：

1. Tailwind CSS就是全新的，它对于CSS的意义，犹如react之于一众js框架&操作dom库。Bootstrap虽有utility classes，但它并不是原子化的，且使用上需要先加载整个Bootstrap的css文件，不管你用到的还是没用的。
2. 他没有增加记忆成本，反而每个class都有其实际CSS属性的含义，是对CSS的简写，且原先需要服用css属性，一样需要记忆，而Tailwind CSS熟悉后，不仅不增加成本，还大大提升了开发效率，因为class属性的记忆也是复用的。
3. 如果觉得class命名太长，且一些业务涉及动态设置class名，情况就更严重了，这里建议在使用Tailwind CSS时，可以结合着使用[classnames](https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fclassnames) 和[twin.macro](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fben-rogerson%2Ftwin.macro)（css-in-js）

- The **`base`** layer is for things like reset rules or default styles applied to plain HTML elements.
- The **`components`** layer is for class-based styles that you want to be able to override with utilities.
- The **`utilities`** layer is for small, single-purpose classes that should always take precedence over any other styles.

PostCSS 就是 CSS 界的 Babel。

它们本身只做两件事：

1. 把[源代码](https://www.zhihu.com/search?q=%E6%BA%90%E4%BB%A3%E7%A0%81&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22190520136%22%7D)（或者符合一定条件的扩展语法）解析为一个自带[遍历访问](https://www.zhihu.com/search?q=%E9%81%8D%E5%8E%86%E8%AE%BF%E9%97%AE&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22190520136%22%7D)、节点操作接口的树；
2. 把[语法树](https://www.zhihu.com/search?q=%E8%AF%AD%E6%B3%95%E6%A0%91&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22190520136%22%7D)输出为代码字符串。

主要的功能，都由插件提供，在第一步完成以后，这棵树以及上面的节点会由一个个插件依次进行处理。插件可以做很多事，比如：

- 识别一些浏览器尚未支持的语法，转换为浏览器支持的（Autoprefixer、[cssnext](https://www.zhihu.com/search?q=cssnext&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22190520136%22%7D)）；
- 在不破坏解析的前提下在一定程度上扩展语法，提供*私有*的[语法糖](https://www.zhihu.com/search?q=%E8%AF%AD%E6%B3%95%E7%B3%96&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A%22190520136%22%7D)；
- 识别出源码中不符合编码规范之处，输出结果来给 linter 显示（Stylelint）；
- 找到并去除冗余代码、将代码压缩为等价且更短的写法（cssnano）；

和手写 CSS 相比，主要优势很简单：写出更短、更标准、更容易维护的代码。

Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情

WebSocket 是一种计算机通信协议，允许服务器和客户端之间进行实时双向通信。 WebSocket 使用单个传输控制协议 (TCP) 连接，旨在实现 Web 应用程序中的高效数据传输。

An `EventSource` instance opens a persistent connection to an [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) server, which sends [events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) in `text/event-stream` format. The connection remains open until closed by calling `[EventSource.close()](https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close)`.

1. 服务器推送：`EventSource`专注于服务器向客户端主动推送事件的模型，这对于`ChatGPT`对话非常适用。`ChatGPT`通常是作为一个长期运行的服务，当有新的回复可用时，服务器可以主动推送给客户端，而不需要客户端频繁发送请求。
2. 自动重连和错误处理：`EventSource`具有内置的自动重连机制，它会自动处理连接断开和重新连接的情况。这对于`ChatGPT`对话而言很重要，因为对话可能需要持续一段时间，连接的稳定性很重要。
3. 简单性和易用性：相对于`WebSocket`，`EventSource`的API更加简单易用，只需实例化一个`EventSource`对象，并处理服务器发送的事件即可。这使得开发者可以更快速地实现对话功能，减少了一些复杂性。
4. 广泛的浏览器支持：`EventSource`在大多数现代浏览器中得到广泛支持，包括移动端浏览器。相比之下，`WebSocket`在某些旧版本的浏览器中可能不被完全支持，需要考虑兼容性问题。

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

## 页面解析渲染的过程

连接建立后 成功接收响应

1.HTML 被 HTML 解析器解析成 DOM 树；

当parser发现非阻塞资源，例如一张图片，浏览器会请求这些资源并且继续解析。当遇到一个 CSS 文件时，解析也可以继续进行，但是对于 `<script>` 标签（特别是没有 `[async](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)` 或者 `defer` 属性的）会阻塞渲染并停止 HTML 的解析。等待获取 CSS 不会阻塞 HTML 的解析或者下载，但是它确实会阻塞 JavaScript，因为 JavaScript 经常用于查询元素的 CSS 属性。尽管浏览器的预加载扫描器加速了这个过程，但过多的脚本仍然是一个重要的瓶颈。

2.CSS  被 CSS 解析器解析成 CSSOM 树；

在解析 CSS 和创建 CSSOM 的同时，包括 JavaScript 文件在内的其他资源也在下载（这要归功于预加载扫描器）。JavaScript 会被解析、编译和解释。脚本被解析为抽象语法树。有些浏览器引擎会将[抽象语法树](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91)输入编译器，输出字节码。这就是所谓的 JavaScript 编译。大部分代码都是在主线程上解释的，但也有例外，例如在 [web worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API) 中运行的代码。

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

# **JS**

JavaScript的编程思想主要体现在以下几个方面：

1. **事件驱动编程**：JavaScript最初设计用于增强网页交互性，因此它在核心上是事件驱动的。这意味着代码的执行通常是由用户行为（如点击、滚动等）或者浏览器事件（如页面加载完成）触发的。
2. **原型继承**：JavaScript使用原型（prototype）来实现对象间的继承。与传统的类继承不同，原型继承允许对象直接从其他对象继承属性和方法，这使得JavaScript的对象系统非常灵活。
3. **函数式编程**：JavaScript支持一流函数（first-class functions），这意味着函数可以像任何其他对象一样被使用，包括作为参数传递、赋值给变量或作为其他函数的返回值。这使得JavaScript非常适合函数式编程风格。
4. **异步编程**：由于JavaScript经常用于处理网络请求和用户界面，异步编程在JavaScript中非常重要。Promise和async/await是JavaScript处理异步操作的现代工具。
5. **灵活的类型系统**：JavaScript是一种弱类型语言，这意味着变量可以在运行时更改类型。虽然这提供了很大的灵活性，但也可能导致意外的类型转换和错误。
6. **模块化**：随着ES6标准的推出，JavaScript开始支持模块化编程，允许开发者将代码分割成可重用的模块。
7. **客户端和服务器端编程**：虽然JavaScript最初是为浏览器设计的，但随着Node.js的出现，它现在也被广泛用于服务器端编程。这意味着现代JavaScript开发者可以使用同一种语言编写客户端和服务器端代码。
8. **动态脚本语言**：作为一种解释型语言，JavaScript代码在运行时被解释和执行，而不是事先编译。这使得JavaScript具有高度的灵活性和动态性。
- 继承和原型链
    
    JavaScript 对象是变量的容器。
    
    在基于**类**的[面向对象语言](https://www.zhihu.com/search?q=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AF%AD%E8%A8%80&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A%2233658346%22%7D)中（比如Java和C++）， 是构建在**类(class)和实例(instance)上的。其中类**定义了所有用于具有某一特征对象的属性。**类**是抽象的事物， 而不是其所描述的全部对象中的任何特定的个体。另一方面， 一个**实例**是一个**类**的实例化，是其中的一个成员。
    
    JavaScript 中的原型链是一种用于实现继承和共享属性的机制。理解原型链对于深入理解 JavaScript 是非常重要的。这里是一个简单的解释：
    
    1. **什么是原型？**
        - 在 JavaScript 中，几乎所有的对象都有一个内部链接指向另一个对象，这个对象被称为它的“原型”。
        - 每个对象的原型都有自己的原型，以此类推，形成了一个“原型链”。
    2. **原型链的作用：**
        - 当尝试访问一个对象的属性时，如果这个对象本身没有这个属性，JavaScript 会沿着原型链向上查找，直到找到这个属性或达到原型链的顶端（**`null`**）。
        - 这就允许对象继承另一个对象的属性和方法。
    3. **如何创建原型链？**
        - 在 JavaScript 中，原型链通常是通过构造函数和它的 **`prototype`** 属性建立的。
        - 当你创建一个新对象时（使用 **`new`** 关键字），这个对象的原型就被设置为其构造函数的 **`prototype`** 属性。
    4. **示例：**
    假设有一个构造函数 **`Animal`** 和它的原型 **`Animal.prototype`**。如果你创建了一个 **`Animal`** 的实例，比如 **`let dog = new Animal()`**，那么 **`dog`** 的原型就是 **`Animal.prototype`**。
    5. **原型链的顶端：**
        - 原型链的顶端是 **`Object.prototype`**。所有的 JavaScript 对象都继承自 **`Object.prototype`**，除非它们的原型被显式设置为 **`null`**。
        - **`Object.prototype`** 的原型是 **`null`**，这表示原型链的结束。
    6. **原型链的好处和风险：**
        - 好处：允许对象共享方法和属性，节省内存。
        - 风险：如果不正确使用，可能导致意外的副作用，比如修改原型上的属性会影响所有从该原型继承的对象。
    
    **基于原型的面向对象**在基于**原型**的语言中（如JavaScript）并不存在这种区别：不论是构造函数(constructor)，实例(instance)，原型(prototype)本身都是对象。基于原型的语言具有所谓的原型对象的概念，新对象可以从中获得原始的属性。
    
- JavaScript 是一门高级语言。对于写网络应用程序而言，它足够灵活且富有表达力。它有许多优势——它是动态类型的，不需要编译环节以及一个巨大的能够提供强大框架、库和其他工具的生态系统。
- WebAssembly 是一门低级的类汇编语言。它有一种紧凑的二进制格式，使其能够以接近原生性能的速度运行，并且为诸如 C++和 Rust 等拥有低级的内存模型语言提供了一个编译目标以便它们能够在网络上运行。（注意，WebAssembly 有一个在将来支持使用了垃圾回收内存模型的语言的高级目标。）
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

React 是一个由 Facebook 开发的用于构建用户界面的JavaScript库。React 的设计思想主要包括以下几个方面：

1. **组件化：** React 的核心思想之一是组件化开发。它将用户界面划分为独立的组件，每个组件有自己的状态和属性，可以被独立地开发、测试和维护。组件化使得代码更具可复用性，提高了开发效率。
2. **虚拟 DOM：** React 引入了虚拟 DOM 的概念。虚拟 DOM 是一个虚拟的浏览器内存中的文档对象模型。当组件的状态发生变化时，React 先在虚拟 DOM 上进行更新，然后通过对比新旧虚拟 DOM，找出变化的部分，最终只更新实际发生变化的部分到真实 DOM。这种优化使得页面更新更为高效。
3. **单向数据流：** React 遵循单向数据流的原则，即数据的流动是单向的。父组件可以通过 props 将数据传递给子组件，但子组件不能直接修改父组件的数据。这种数据流的清晰性有助于理解和追踪数据在应用中的变化。有时造成问题当多个组件需要共享状态时，React推荐的解决方案是将状态提升到这些组件的最近公共父组件。但这会使得公共父组件变**得庞大和复杂**，同时增加了组件间的依赖性，使得组件重用变得更加困难。
4. **声明式编程：** React 使用声明式的编程风格，开发者只需描述目标的状态是什么，React 会自动负责如何达到这个状态。相比于命令式编程，声明式编程更易于理解和维护。
5. **可组合性：** React 组件可以被自由组合，一个组件可以包含其他组件。这种可组合性使得构建复杂界面变得更为灵活，开发者可以通过组合简单的组件来构建复杂的 UI。
6. **无状态组件：** React 推崇无状态组件的概念。无状态组件指的是没有内部状态（state）的组件，它只依赖于传入的 props。这种组件简单、易于测试和理解，有助于提高应用性能。
7. **生命周期方法：** React 组件具有生命周期方法，这些方法可以在组件的不同阶段执行。这使得开发者可以在组件的不同生命周期阶段执行特定的逻辑，例如在组件挂载后获取数据、在组件更新前进行清理等。

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

React Hooks 是 React 16.8 版本引入的一项功能，它允许**函数式组件**拥有类组件中的状态（state）、生命周期方法（如 **`componentDidMount`**、**`componentDidUpdate`**、**`componentWillUnmount`**等）以及其他 React 特性。

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

what’s the problem?

```jsx
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost; // Side effect here
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

**渲染会及时生成一张快照**

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

**组件化也是与分而治之类似的思想：**

- 如果我们将页面逻辑全部放在同一个页面中，处理起来将会非常复杂，不利于后期的管理拓展和维护。
- 如果我们将页面逻辑拆分成一个个小的功能块，每个功能块完成自己这部分独立的功能，然后整合成一个页面，那么之后整个页面的管理和维护就变得非常容易了。

props 是组件对外的接口，state 是组件对内的接口。组件内可以引用其他组件，组件之间的引用形成了一个树状结构（组件树），如果下层组件需要使用上层组件的数据或方法，上层组件就可以通过下层组件的props属性进行传递，因此props是组件对外的接口。组件除了使用上层组件传递的数据外，自身也可能需要维护管理数据，这就是组件对内的接口state。根据对外接口props 和对内接口state，组件计算出对应界面的UI。

定义组件最简单的方式就是编写 JavaScript 函数：

```jsx
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```

1. `React`组件被**声明一次**
2. 但`组件`可以作为`JSX`中的`React元素`被**多次使用**
3. 当`元素`被使用时，它就成为该组件的**一个实例**，挂载在React的组件树中

在JavaScript中，**`forEach()`** 和 **`map()`** 方法都是用于遍历数组的，但它们在使用目的和行为上有明显的区别。

1. **返回值**:
    - **`forEach()`**: 这个方法不返回任何值（即返回**`undefined`**）。它仅用于对数组的每个元素执行某些操作，比如打印元素或将元素的值修改。
    - **`map()`**: 这个方法返回一个新的数组，这个数组是由原数组中的每个元素调用一个指定的函数后的返回值组成的。这意味着**`map()`**是不会改变原数组的，它通过所提供的函数生成一个新的数组。
2. **用途**:
    - 使用**`forEach()`**时，通常是想对数组中的每个元素执行一些操作，如更新或打印元素，而不关心返回值。
    - **`map()`**则用于当你想基于原数组创建一个新数组时，每个元素都是通过指定函数变换后的结果。
3. **副作用与不可变性**:
    - **`forEach()`**可能会产生副作用，因为它经常用于修改原始数组或外部变量。
    - **`map()`**遵循不可变性原则，不修改原始数组，而是返回一个全新的数组，这对于函数式编程特别有用，其中不可变性是一个重要概念。

关于您提到的“React中只有map”，可能的含义是，在React的渲染逻辑中，经常使用**`map()`**来遍历数据数组并返回一个元素数组，这些元素可以直接在JSX中渲染。这是因为**`map()`**能够从原始数据数组创建一个新的元素数组，而不会改变原始数据，这对于React渲染优化和状态管理非常重要。

**对 React 的 Virtual DOM 的误解：** https://www.zhihu.com/question/31809713

**Virtual DOM 虚拟DOM**

传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是`Virtual DOM`,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。

为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个**diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。**

By default, React DOM [escapes](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html) any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.使用大括号，来在属性值中插入一个 JavaScript 表达式****

React DOM 在渲染所有输入内容之前，默认会进行[转义](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html)
。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS

但是Virtual dom也不是在所有的情况下都是最快的，在比较性能的时候，要分清楚初始渲染、小量数据更新、大量数据更新这些不同的场合

为什么需要虚拟DOM的一些原因：

1. **性能优化：**
    - 直接操作真实DOM可能会导致频繁的重排（Reflow）和重绘（Repaint），这会影响页面性能。虚拟DOM充当了真实DOM的抽象层，允许对虚拟DOM进行频繁的更新操作，然后将更新后的虚拟DOM与实际DOM进行比较，最终只更新实际需要变更的部分。这样可以最小化DOM操作，减少重排和重绘，提高页面性能。
2. **批量更新：**
    - 虚拟DOM可以进行批量更新，将多个更新合并为单个更新操作。相比直接操作真实DOM，这样可以减少更新频率，提高效率。
3. **框架状态管理：**
    - 虚拟DOM使得框架可以更好地管理应用的状态变更。在React等框架中，通过比较前后两个虚拟DOM树的差异，可以确定需要更新的部分，从而实现状态变更的响应式更新。

innerHTML vs. Virtual DOM 的重绘性能消耗：

- innerHTML: render html string **O(template size)** + 重新创建所有 DOM 元素 **O(DOM size)**
- Virtual DOM: render Virtual DOM + diff **O(template size)** + 必要的 DOM 更新 **O(DOM change)**

Virtual DOM render + diff 显然比渲染 html 字符串要慢，但是！它依然是纯 js 层面的计算，比起后面的 DOM 操作来说，依然便宜了太多。可以看到，innerHTML 的总计算量不管是 js 计算还是 DOM 操作都是和整个界面的大小相关，但 Virtual DOM 的计算量里面，只有 js 计算和界面大小相关，DOM 操作是和数据的变动量相关的。前面说了，和 DOM 操作比起来，js 计算是极其便宜的。这才是为什么要有 Virtual DOM：它保证了 1）不管你的数据变化多少，每次重绘的性能都可以接受；2) 你依然可以用类似 innerHTML 的思路去写你的应用。

作者：尤雨溪

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

### **Hook**

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）

是 React 16.8 的新增特性。它可以让你在**不编写 class 的情况下使用 state 以及其他的 React 特性。**在组件之间复用状态逻辑很难、大型组件很难拆分和重构，也很难测试。**Hook 使你在无需修改组件结构的情况下复用状态逻辑。没有 class 继承、没有 this、没有生命周期、代码更加简洁、这就是使用 hooks 的意义**

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

**为什么要使用 hooks**
难以理解的 class 、**组件中必须去理解 javascript 与 this 的工作方式**、需要绑定事件处理器、纯函数组件与 class 组件的差异存在分歧、甚至需要区分两种组件的使用场景；Hook 可以使你在非 class 的情况下可以使用更多的 React 特性。

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

Take a look at the useEffect Hook. At the end of the Hook, we’re returning a new function. This is the equivalent of the ***componentWillUnmount*** lifecycle method in a class-based React component. To learn more about the differences between functional components and class-based components check out this **[guide](https://upmostly.com/tutorials/react-functional-vs-class-components)**

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
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

## Typescript

TypeScript was designed and developed by Microsoft and first released in 2012. The primary motivations for creating TypeScript were to **address certain challenges and limitations faced by large-scale application development in JavaScript**. Here are some key reasons behind the design and introduction of TypeScript:

1. **Type Safety**: JavaScript is a dynamically typed language, which means that variables can hold values of any type and types are checked at runtime. While this offers flexibility, it also makes it difficult to detect certain types of errors during development. TypeScript introduces static typing, allowing developers to catch errors related to incorrect types at compile time, well before the code is run.
2. **Scalability**: As web applications grew in complexity around the early 2010s, there was a clear need for tools that could better support the development of large-scale applications. TypeScript's static typing system helps manage and maintain large codebases, making it easier for teams to work on complex projects and ensure code quality.
3. **Tooling and Developer Experience**: TypeScript was designed to enhance the developer experience, providing better tooling support for autocompletion, navigation, and refactoring. These features are particularly useful in large projects and can significantly improve productivity and reduce the likelihood of bugs.
4. **ESNext Features**: JavaScript's evolution is managed through the ECMAScript (ES) standards, which evolve over time. TypeScript aimed to allow developers to use features from future ECMAScript standards while still compiling down to JavaScript that browsers could execute. This forward-compatibility was a significant draw for developers wanting to use the latest language features.

Typescript 是一个**强类型**的 JavaScript 超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。TS对JS的改进主要是**静态类型检查**TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

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

### Umi

可插拔的企业级 React 应用程序框架。 “umi 是一个基于路由的框架，支持 next.js 式的常规路由和各种高级路由功能，比如路由级别的按需加载，支持多种插件如AntD

**Ant design**

Ant Design System 是企业级 UI 设计语言和 React UI 库的开源代码。它带有一组高质量的 React 组件，具有主题定制能力

The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.

**Protable**

ProTable 在 antd 的 Table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 antd Table 不同的 api。

**request**

`request` 是 ProTable 最重要的 API，`request` 会接收一个对象。对象中必须要有 `data` 和 `success`，如果需要手动分页 `total` 也是必需的。`request` 会接管 `loading` 的设置，同时在查询表单查询和 `params` 参数发生修改时重新执行。同时 查询表单的值和 `params` 参数也会带入。

iauth result success不符合param对successs的要求

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
var b =this.birth;// 1990
var fn =function () {
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

Promise 很棒的一点就是**链式调用**（**chaining**）连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 **Promise 链**来实现这种需求。`then()` 函数会返回一个和原来不同的**新的 Promise**

现在，我们可以把回调绑定到返回的 Promise 上，形成一个 Promise 链来避免原来写法的回调地狱

使用 then() 和 async/await 是在 JavaScript 中处理异步操作的两种不同方法。

### **Which to Choose** then() 和 async/await **?**

- **Existing Codebase:** If your project already uses one approach consistently, it might be best to stick with that for consistency.
- **Preference:** Some developers prefer the more explicit nature of **`then()`**, while others find **`async/await`** syntax more readable.
- **Use Case:** For simpler scenarios, either approach is fine. For more complex asynchronous logic, **`async/await`** can provide cleaner code.

In modern JavaScript projects, **`async/await`** is often the preferred choice due to its cleaner syntax and improved readability. However, the choice ultimately depends on the context and the preferences of the development team.

**优点：**

- 提供更像同步的代码结构，使其更易于阅读和推理。
- 使用 简化错误处理**`try/catch`** 处理多个异步操作时更容易使用。

**缺点：**

- 需要现代 JavaScript 环境或转译器（如 Babel）以实现兼容性。
- 对于某些场景可能需要额外的工具，例如处理 Promise.all。

```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function
fetchData();
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

/table

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

Npm(node package manger)  **npm 永久安裝，npx 安裝後即移除.** npm 會全局性的安裝 create-nuxt-app，這個 dependency 也會一直存在在你的本機 node_modules 下，如果使用 npx 命令，他會安裝在臨時安裝包上，等到項目初始化完成後就刪除，**不用全局性的安裝，避免被汙染**

服务端渲染样式有两种方案，它们各有优缺点：

- **内联样式**：在渲染时无需额外请求样式文件，好处是减少额外的网络请求，缺点则是会使得 HTML 体积增大，影响首屏渲染速度，相关讨论参考：[#39891](https://github.com/ant-design/ant-design/issues/39891)
- **整体导出**：提前烘焙 antd 组件样式为 css 文件，在页面中时引入。好处是打开任意页面时如传统 css 方案一样都会复用同一套 css 文件以命中缓存，缺点是如果页面中存在多主题，则需要额外进行烘焙