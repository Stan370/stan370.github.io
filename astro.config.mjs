// @ts-check
import { defineConfig } from 'astro/config';
import { unified, rehypeHeadingIds } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { site } from './src/site.config.ts';
import { remarkMigrationFixes, remarkCjkSpacing, remarkDemoteHeadings, rehypeExternalImages } from './src/plugins/markdown.mjs';

export default defineConfig({
  site: site.url,
  integrations: [
    expressiveCode({
      themes: ['github-light', 'github-dark-dimmed'],
      // The theme toggle always sets <html data-theme>, so follow that instead of the media query.
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      styleOverrides: {
        borderRadius: '6px',
        borderColor: 'var(--rule)',
        codeFontFamily: 'var(--font-mono)',
        codeFontSize: '0.86rem',
        codeLineHeight: '1.65',
        codeBackground: 'var(--code-bg)',
        uiFontFamily: 'var(--font-ui)',
        frames: {
          shadowColor: 'transparent',
          editorTabBarBackground: 'var(--code-bar)',
          editorActiveTabBackground: 'var(--code-bg)',
          editorActiveTabIndicatorTopColor: 'var(--accent)',
          terminalTitlebarBackground: 'var(--code-bar)',
          terminalBackground: 'var(--code-bg)',
        },
      },
    }),
    sitemap({
      filter: (page) => !page.includes('/og/') && !page.endsWith('/404/'),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkMigrationFixes, remarkDemoteHeadings, remarkCjkSpacing],
      rehypePlugins: [
        [rehypeKatex, { strict: false }],
        rehypeExternalImages,
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          { behavior: 'append', properties: { className: ['anchor'], ariaHidden: 'true', tabIndex: -1, dataPagefindIgnore: '' }, content: { type: 'text', value: '#' } },
        ],
      ],
    }),
  },
});
