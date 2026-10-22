# [StanBlog](https://stan370.github.io/)

[English](README.en.md)

Stan Ke 的个人技术博客：Go、分布式系统、操作系统、网络与 LLM 的工程笔记，以及一些随笔。

2019–2025 年间基于 Hexo + hexo-theme-matery，2026 年迁移到 [Astro](https://astro.build)，重新设计为安静、像书一样的阅读界面。旧版本保留在 git 历史中。

## 特点

- **以阅读为中心**：单栏 680px 版心，正文 Noto Serif SC，标题霞鹜文楷，代码 JetBrains Mono；字体按 `unicode-range` 分片自托管，不依赖 Google Fonts。
- **中文排版细节**：1.8 行高、构建时自动在中英文之间加空格、`text-autospace` 渐进增强。
- **浅色 / 深色**：跟随系统，可手动切换；纸色 `#FAF7F2` + 朱砂 `#C2410C` 单一强调色。
- **技术细节**：Expressive Code 代码块（文件名、行高亮、复制按钮）、KaTeX（仅在含公式的页面加载）、粘性目录、纯 CSS 阅读进度条、原生 View Transitions。
- **首页**：水墨山水横幅（构建时生成的 SVG，雾气缓慢流动）、过去一年的 GitHub 贡献热力图（标出发文日）、右侧随页面滚动的个人卡片（文章 / 标签 / 分类 / 总字数 / 写作天数）。
- **搜索**：Pagefind 全文搜索，⌘K / Ctrl K 打开，中英文混合索引。
- **SEO**：canonical、Open Graph / Twitter Card、JSON-LD（BlogPosting / BreadcrumbList / WebSite）、sitemap、robots.txt、按内容自动判断 `lang`，构建时用 Satori 生成每篇文章的社交分享图。
- **零客户端框架**：文章页只有主题切换、目录高亮、失效图片占位三段小脚本。
- **评论**：Giscus（基于 GitHub Discussions）。

## 本地开发

需要 Node.js ≥ 22.23。

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 类型检查 → 构建 → Pagefind 索引 → 旧链接校验
npm run preview   # 预览构建结果（含搜索）
```

## 写文章

在 `src/content/posts/` 下新建 Markdown 文件（也可以是 `目录/index.md`，图片放在同一目录用相对路径引用）：

```markdown
---
title: 文章标题
date: 2026-10-22 20:00:00
tags: [Go, 分布式系统]
categories: [计算机工程]
description: 可选，用于列表摘要和 SEO；不写则自动截取正文。
---
```

文章 URL 为 `/:year/:month/:day/:文件路径/`，与旧 Hexo 站点保持一致。`hide: true` 可以让文章不出现在列表中。

## 目录结构

```
src/
├── content/posts/     # 文章（原 source/_posts）
├── content/notes/     # 早期零散笔记，/notes/<name>/
├── components/        # Header、TOC、搜索、评论等
├── layouts/           # Base（head / SEO）与 Post
├── pages/             # 路由：首页、归档、标签、分类、关于、RSS、OG 图片
├── plugins/           # remark 插件：迁移修复、中英文空格、标题层级
├── styles/            # 设计 token 与正文排版
└── site.config.ts     # 站点标题、简介、社交链接、AdSense、GA4、Giscus
public/                # 静态文件、旧链接跳转页、ads.txt、robots.txt
scripts/               # legacy-urls.txt + check-urls.mjs（构建时校验旧链接）
```

## 配置

所有站点级设置都在 [`src/site.config.ts`](src/site.config.ts)：

- `ga4Id`：填写 GA4 衡量 ID 后才会加载统计脚本。
- `giscus.repoId` / `giscus.categoryId`：在仓库开启 Discussions、安装 giscus app，然后从 [giscus.app](https://giscus.app) 复制这两个值。
- `adsenseClient`：留空即关闭 AdSense。

## 部署

推送到 `main` 后，GitHub Actions（`.github/workflows/page.yml`）会自动构建并发布到 GitHub Pages。Pull request 只构建不发布。

## License

[MIT](LICENSE)
