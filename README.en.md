# [stanBlog](https://stan370.github.io/)
**StanBlog** is a blog theme built with Hexo and the EJS template engine, featuring material design and responsive layouts. This comprehensive, visually appealing personal tech blog theme supports Markdown and HTML syntax, offers built-in RSS and Atom feeds, customizable themes and layouts, code highlighting, and syntax checking, as well as mobile device access.

A beautiful Hexo blog theme with material design and responsive design.

<img width="878" alt="image" src="https://github.com/Stan370/stan370.github.io/assets/56168768/bf7c495d-a51c-4c2b-a454-7a66aa036b86">

> - 🔁 Project synced at: [Github](https://github.com/Stan370/stan370.github.io/) 
> - 📖 Ebook reader at: [Github Pages](https://stan370.github.io//) 

## Features

*   Uses Hexo as the blogging framework
*   Uses EJS as the template engine
*   Supports Markdown and HTML syntax
*   Built-in RSS and Atom feed support
*   Customizable themes and layouts
*   Code highlighting and syntax checking
*   Mobile device support
*   Clean, visually appealing design with easy-to-read article pages
*   Supports Material Design - [Material Design](https://material.io/)
*   Responsive layout for desktop, tablet, and mobile
*   Carousel articles on the homepage with a daily changing banner image
*   Waterfall layout for the article list (24 default images displayed if no feature image is provided)
*   Timeline layout for the archive page
*   Tag page displayed as a word cloud, category page displayed as a radar chart
*   Rich "About" page (includes About Me, article stats, my projects, my skills, photo album, etc.)
*   Customizable data for the Links page
*   Option to add copyright information when copying article content
*   Option for password protection on articles

## Project Structure
```
├── _config.yml
├── package.json
├── scaffolds
│   ├── draft.md
│   ├── page.md
│   └── post.md
├── scripts
│   ├── deploy.sh
│   └── server.sh
├── source
│   ├── _drafts
│   ├── _posts
│   └── index.ejs
├── themes
│   └── ejs-theme
│       ├── _config.yml
│       ├── layout.ejs
│       ├── index.ejs
│       └── partials
│           ├── footer.ejs
│           ├── header.ejs
│           └── sidebar.ejs
└── yarn.lock
```

## Fork Guide

After forking this project, you'll need to complete a few steps to set up your own blog page.

1. **Set the correct project name and branch.**

   According to GitHub Pages guidelines, a project named `username.github.io` on the master branch or a project with a different name on the gh-pages branch can automatically generate a GitHub Pages page.

2. **Modify the domain.**

   If you want to bind a custom domain, modify the content of the CNAME file and follow [GitHub Pages Custom Domain Configuration](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site). If you don't need a custom domain, delete the CNAME file.

3. **Edit the configuration.**

   The site configuration is primarily in the `_config.yml` file. Update the personal information fields, such as `url`, `title`, `subtitle`, and any third-party comment module settings, as needed. Use a CDN such as JsDelivr to accelerate file loading from GitHub.

4. **Remove my posts and images.**

   You can delete all content in the following folders, except for the `template.md` file, and add your content:

   * The `_posts` folder contains my published blog posts.
   * The `_drafts` folder contains my unpublished drafts.
   * The `_wiki` folder contains my published wiki pages.
   * The `images` folder contains images used in articles and pages.

5. **Update the "About" page.**

   The `pages/about.md` file corresponds to the "About" page, which contains personal information. Update it with your details, including `skills.yml` and `social.yml` in the `_data` directory.

6. **Test Locally and Deploy**

To deploy, choose a method such as GitHub Pages or Vercel. Here's a quick setup guide for GitHub Pages:

```
npm install hexo-deployer-git --save

Configure deployment in _config.yml:
deploy:
  type: git
  repo: <repository url>
  branch: gh-pages
Generate and Deploy:

hexo generate
hexo deploy
```

## Acknowledgments

This theme is based on [BlinkFox](http://blinkfox.com/) with modifications—thank you!

The longer a piece of code is intended to last, the cleaner it should be. Temporary code, like quick scripts, can be less strict. Conversely, only clean code can achieve exceptional longevity.
