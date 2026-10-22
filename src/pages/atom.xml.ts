import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import type { APIContext } from 'astro';
import { getPosts, postHref, summaryOf } from '../lib/posts';
import { site } from '../site.config';

const absolute = (attr: string) => (tagName: string, attribs: sanitizeHtml.Attributes) => {
  const value = attribs[attr];
  if (value?.startsWith('/') && !value.startsWith('//')) attribs[attr] = new URL(value, site.url).href;
  return { tagName, attribs };
};

// Kept at /atom.xml so existing Hexo feed subscribers keep working (served as RSS 2.0).
export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    customData: `<language>${site.defaultLang.toLowerCase()}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      link: postHref(post),
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
