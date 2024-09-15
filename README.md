# [stanBlog](https://stan370.github.io/)
A beautiful hexo blog theme with material design and responsive design with reference to BlinkFox.

<img width="878" alt="image" src="https://github.com/Stan370/stan370.github.io/assets/56168768/bf7c495d-a51c-4c2b-a454-7a66aa036b86">

一个基于材料设计和响应式设计而成的全面、美观的Hexo主题的个人技术博客Blog


> - 🔁 项目同步维护：[Github](https://github.com/Stan370/stan370.github.io/) 
> - 📖 电子书阅读：[Github Pages](https://stan370.github.io//) 

## Features

- Simple and beautiful, and post is Beautiful and readable.
- [Material Design](https://material.io/).
- Responsive design, which can be displayed well on desktop, tablet, mobile phone, etc.
- Home page carousel posts and changing 'banner' picture dynamically everyday.
- Blog posts list with waterflow (There will be 24 images if the article doesn't have featured pictures).
- Archive page with timeline.
- Tags page of the **word cloud** and categories page of the **radar chart**
- Rich 'About' page (including about me, posts charts, my projects, my skills, gallery etc.)
- Friendly link page for customizable data
- Support post topping and rewards
- Support `MathJax`
- TOC
- Can be set append the copyright information when copying the content of the post
- Can be set to do password verification when reading a post


## Fork 指南

Fork 本项目之后，还需要做一些事情才能让你的页面「正确」跑起来。

1. 正确设置项目名称与分支。

   按照 GitHub Pages 的规定，名称为 `username.github.io` 的项目的 master 分支，或者其它名称的项目的 gh-pages 分支可以自动生成 GitHub Pages 页面。

2. 修改域名。

   如果你需要绑定自己的域名，那么修改 CNAME 文件的内容，并参考 [配置 GitHub Pages 站点的自定义域](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site) 做好配置；如果不需要绑定自己的域名，那么删掉 CNAME 文件。

3. 修改配置。

   网站的配置基本都集中在 \_config.yml 文件中，将其中与个人信息相关的部分替换成你自己的，比如网站的 url、title、subtitle 和第三方评论模块的配置等。
   使用 JsDelivr图床 来加速 GitHub 上托管的文件

4. 删除我的文章与图片。

   如下文件夹中除了 template.md 文件外，都可以全部删除，然后添加你自己的内容。

   * \_posts 文件夹中是我已发布的博客文章。
   * \_drafts 文件夹中是我尚未发布的博客文章。
   * \_wiki 文件夹中是我已发布的 wiki 页面。
   * images 文件夹中是我的文章和页面里使用的图片。

5. 修改「关于」页面。

   pages/about.md 文件内容对应网站的「关于」页面，里面的内容多为个人相关，将它们替换成你自己的信息，包括 \_data 目录下的 skills.yml 和 social.yml 文件里的数据。


## 致谢

本博客外观基于 [BlinkFox](http://blinkfox.com/) 修改，感谢！

生命周期越长的代码，一定要写的越干净；临时使用代码，比如小脚本，就可以不讲究一些。反过来，也正是干净的代码才能成就超长的生命周期。
