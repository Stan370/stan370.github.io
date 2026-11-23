import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import type { APIContext } from 'astro';
import { DEFAULT_LOCALE, type Locale } from '../i18n/ui';
import { getLocaleMeta } from '../i18n/utils';
import { getPosts, postHref, summaryOf } from './posts';
import { site } from '../site.config';

const absolute = (attr: string) => (tagName: string, attribs: sanitizeHtml.Attributes) => {
  const value = attribs[attr];
  if (value?.startsWith('/') && !value.startsWith('//')) attribs[attr] = new URL(value, site.url).href;
  return { tagName, attribs };
};

/** Shared RSS 2.0 feed builder for `/` (zh) and `/en/` (en). */
export async function buildRssFeed(context: APIContext, locale: Locale = DEFAULT_LOCALE) {
  const posts = await getPosts({ locale });
  const meta = getLocaleMeta(locale);

  return rss({
    title: locale === 'en' ? `${site.title} (English)` : site.title,
    description: site.descriptions[locale],
    site: context.site!,
    customData: `<language>${meta.htmlLang.toLowerCase()}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      link: postHref(post, locale),
      pubDate: post.data.date,
      description: summaryOf(post, 200),
      categories: [...post.data.categories, ...post.data.tags],
      content: post.rendered?.html
        ? sanitizeHtml(post.rendered.html, {
            allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
            transformTags: { img: absolute('src'), a: absolute('href') },
            // Optimised local images are still placeholders in the raw HTML; drop them.
            exclusiveFilter: (frame) => frame.tag === 'img' && !/^(https?:)?\/\//.test(frame.attribs.src ?? ''),
          })
        : undefined,
    })),
  });
}
