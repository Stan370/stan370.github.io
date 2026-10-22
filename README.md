<div align="center">

# StanBlog

**A calm, book-like Astro blog for technical writing in Chinese and English.**

Ink-wash backdrop · GitHub contribution map · ⌘K search · light/dark · zero client framework

[![Deploy](https://github.com/Stan370/stan370.github.io/actions/workflows/page.yml/badge.svg)](https://github.com/Stan370/stan370.github.io/actions/workflows/page.yml)
[![Astro 7](https://img.shields.io/badge/Astro-7-ff5d01?logo=astro&logoColor=white)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[**Live demo**](https://stan370.github.io/) · [**Use this template**](https://github.com/Stan370/stan370.github.io/generate) · [中文说明](README.zh-CN.md)

<img src=".github/assets/home-light.jpg" alt="StanBlog home page: ink-wash mountains, contribution map, post list and profile card" width="900">

</div>

## Why this template

Most blog themes look like 2019: carousels, card grids, a dozen jQuery plugins. StanBlog goes the other way. Text comes first, it's typographically careful with CJK, and it ships almost no JavaScript, with just enough visual life to not feel bare.

It's a good fit if you are:

- **A student or new developer** who wants a personal site that looks professional, is free to host on GitHub Pages, and teaches you modern Astro without a framework in the way.
- **Writing in Chinese, or Chinese and English mixed.** Fonts, line height, CJK/Latin spacing and punctuation are all tuned for it.
- **Moving off Hexo.** This repo *is* a Hexo → Astro migration, and the build checks that every old URL still resolves (see [Migrating from Hexo](#migrating-from-hexo)).

## Features

**Reading**
- 680px reading column, Noto Serif SC body, LXGW WenKai headings, JetBrains Mono code. Fonts are self-hosted as `unicode-range` chunks, with no Google Fonts.
- CJK-aware typography: 1.8 line height, automatic spacing between CJK and Latin text (code like `select()` left alone), and Latin quotes on English pages.
- Sticky table of contents with the current section highlighted, a CSS-only reading progress bar, and previous/next links.
- Expressive Code blocks with file names, line markers and a copy button. KaTeX loads only on pages that use math.

**Look and feel**
- Paper/ink palette with one vermilion accent. Light/dark follows the system, with a manual toggle and no flash on load.
- Ink-wash mountain banner generated at build time as SVG, with slowly drifting mist. Paper grain and soft colour washes on every page. All motion stops for visitors who prefer reduced motion.
- Native View Transitions between pages.

**Home and sidebar**
- **Contribution map** of your last year on GitHub, fetched at build time with no token, with the days you published a post marked.
- **Profile card** that stays in view as you scroll: avatar, post/tag/category counts, total words, days writing, last update.

**Search, SEO and feeds**
- Pagefind full-text search on ⌘K / Ctrl K, indexing Chinese and English together.
- Canonical URLs, Open Graph/Twitter tags, JSON-LD, sitemap, robots.txt, and per-page `lang` detection.
- **A social card image for every post**, generated at build time with Satori (CJK titles included).
- RSS feed with full post content.

**Extras (off until configured)**
- Giscus comments (GitHub Discussions), GA4, Google AdSense.

<table>
  <tr>
    <td><img src=".github/assets/post-dark.jpg" alt="A post in dark mode with code block and table of contents"></td>
    <td><img src=".github/assets/search.jpg" alt="⌘K search dialog with highlighted results"></td>
    <td width="22%"><img src=".github/assets/mobile.jpg" alt="Home page on a phone"></td>
  </tr>
  <tr>
    <td align="center">Dark mode post</td>
    <td align="center">⌘K search</td>
    <td align="center">Mobile</td>
  </tr>
</table>

## Performance

Lighthouse (mobile, slow 4G with devtools throttling) on a long post: **Performance 96 · Accessibility 100 · SEO 100.** Post pages ship three tiny scripts (theme toggle, TOC highlight, broken-image fallback) and no framework runtime.

## Quick start

You need [Node.js](https://nodejs.org) 22.23 or newer and a GitHub account.

1. Click [**Use this template**](https://github.com/Stan370/stan370.github.io/generate) and name the new repository **`<your-username>.github.io`**.
2. In the new repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Clone it and run it locally:

   ```bash
   npm install
   npm run dev        # http://localhost:4321
   ```

4. Make it yours (next section), then push to `main`. GitHub Actions builds and publishes to `https://<your-username>.github.io/`.

## Make it yours

Almost everything lives in one file, [`src/site.config.ts`](src/site.config.ts):

| Setting | What to put there |
| --- | --- |
| `url` | `https://<your-username>.github.io` |
| `title`, `author`, `career`, `intro`, `description` | Your site name, name, role, one-line intro and SEO description |
| `githubUser` | Your GitHub username (drives the contribution map and the GitHub button) |
| `social` | Links for the footer and About page, in display order |
| `adsenseClient` | **Set to `''`** unless you have your own AdSense account |
| `ga4Id` | Your GA4 measurement ID, or leave empty |
| `giscus` | Repo and IDs from [giscus.app](https://giscus.app), or leave empty |

Then clean out the original author's content:

```bash
rm -rf src/content/posts/* src/content/notes/*      # posts and notes
rm -rf public/medias public/page public/about public/*.html public/ads.txt
: > scripts/legacy-urls.txt                          # old-URL check: start empty
```

Finally, replace `public/avatar.jpg` and `public/favicon.png`, and rewrite [`src/pages/about.astro`](src/pages/about.astro).

## Writing posts

Add a Markdown file to `src/content/posts/`. If a post has images, use a folder with an `index.md` and put the images next to it:

```markdown
---
title: How epoll actually works
date: 2026-10-22 20:00:00
tags: [Linux, Networking]
categories: [Systems]
description: Optional. Used for list summaries and SEO; otherwise the first lines of the post.
img: /medias/epoll-cover.jpg   # optional cover image (a file in public/, or a full URL)
---

Write here. Code blocks, tables, footnotes and $math$ all work.
```

Posts are published at `/:year/:month/:day/:file-path/`. Front-matter options: `hide: true` keeps a post out of lists, `draft: true` skips it entirely, and `lang: en` overrides the language detection.

## Customizing

- **Colours:** the tokens at the top of [`src/styles/global.css`](src/styles/global.css) (`--paper`, `--ink`, `--accent`, `--indigo`), each with a dark-mode counterpart.
- **Fonts:** `--font-serif`, `--font-heading` and `--font-mono` in the same file. The packages are imported in [`src/layouts/Base.astro`](src/layouts/Base.astro).
- **Banner:** [`src/components/InkHero.astro`](src/components/InkHero.astro). Change the seeds in `ridge(…)` to get a different mountain range.
- **Interface language:** the UI strings (归档, 标签, 目录, …) are Chinese and live in `src/components/`. Search for them and translate as needed.

```
src/
├── content/posts/     your posts (Markdown)
├── components/        header, TOC, search, contribution map, profile card, …
├── layouts/           Base (head + SEO) and Post
├── pages/             routes: home, archive, tags, categories, about, RSS, OG images, robots
├── plugins/           remark/rehype plugins (CJK spacing, heading levels, image fixes)
├── styles/            design tokens and article typography
└── site.config.ts     all site settings
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (search works only after a build) |
| `npm run build` | Type check → build → Pagefind index → legacy URL check |
| `npm run preview` | Serve the production build locally |

## Migrating from Hexo

This blog ran Hexo + hexo-theme-matery from 2019 to 2025. The migration kept every URL working, and the same approach will work for your blog:

- Hexo's `:year/:month/:day/:title/` permalinks are reproduced exactly: original file names (spaces and case included), dates read without timezone drift, and Hexo's tag/category slug rules ported.
- `scripts/legacy-urls.txt` lists every URL the old site served. After each build, `scripts/check-urls.mjs` fails if any of them is missing.
- Old Typora `C:\…` image paths become a visible placeholder and are logged at build time, so they don't break the build.

To migrate your own Hexo blog: copy `source/_posts` into `src/content/posts`, list your old URLs in `scripts/legacy-urls.txt`, and run `npm run build` until the check passes.

## Contributing

Issues and PRs are welcome, especially fixes for typography bugs, accessibility issues and an English UI-string option. If this template helped you ship your blog, **a ⭐ helps other people find it**, and I'd love to see your site linked in an issue.

## License

Code is released under the [MIT License](LICENSE). The posts in `src/content/` are the author's personal writing; please don't republish them.
