# [StanBlog](https://stan370.github.io/)

[中文](README.md)

Stan Ke's personal tech blog: engineering notes on Go, distributed systems, operating systems, networking and LLMs, plus the occasional essay. Most posts are in Chinese.

From 2019 to 2025 the site ran on Hexo + hexo-theme-matery. In 2026 it moved to [Astro](https://astro.build) with a quiet, book-like reading design. The old version lives on in git history.

## Highlights

- **Reading first.** A single 680px column, with Noto Serif SC for body text, LXGW WenKai for headings and JetBrains Mono for code. Fonts are self-hosted as `unicode-range` chunks, with no Google Fonts dependency.
- **CJK typography.** 1.8 line height, build-time spacing between CJK and Latin text, and `text-autospace` as progressive enhancement.
- **Light / dark.** Follows the system setting and has a manual toggle. Paper `#FAF7F2` with a single vermilion `#C2410C` accent.
- **Technical details.** Expressive Code blocks (file names, line markers, copy button), KaTeX loaded only on pages that use math, a sticky table of contents, a CSS-only reading progress bar, and native View Transitions.
- **Home page.** An ink-wash landscape banner (SVG generated at build time, with slowly drifting mist), a one-year GitHub contribution map with post days marked, and a sticky profile card showing posts, tags, categories, word count and days writing.
- **Search.** Pagefind full-text search, opened with ⌘K / Ctrl K.
- **SEO.** Canonical URLs, Open Graph and Twitter cards, JSON-LD, sitemap, robots.txt, per-page `lang` detection, and per-post social images generated at build time with Satori.
- **No client framework.** Post pages ship three tiny scripts: the theme toggle, the TOC highlight and a broken-image fallback.
- **Comments.** Giscus (GitHub Discussions).

## Development

Requires Node.js ≥ 22.23.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check → build → Pagefind index → legacy URL check
npm run preview   # serve the build (search works here)
```

## Writing

Add Markdown to `src/content/posts/`, either as a single file or as `folder/index.md` with images alongside:

```markdown
---
title: Post title
date: 2026-10-22 20:00:00
tags: [Go]
categories: [Engineering]
description: Optional; used for summaries and SEO.
---
```

URLs follow `/:year/:month/:day/:file-path/`, which matches the old Hexo permalinks.

## Configuration

All site settings live in [`src/site.config.ts`](src/site.config.ts): GA4 ID, Giscus `repoId` / `categoryId`, and the AdSense client.

## Deployment

Pushing to `main` triggers `.github/workflows/page.yml`, which builds the site and deploys it to GitHub Pages. Pull requests build but don't deploy.

## License

[MIT](LICENSE)
