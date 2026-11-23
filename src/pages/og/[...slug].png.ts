import type { APIRoute, GetStaticPaths } from 'astro';
import { formatDate, getLocalizedPosts } from '../../lib/posts';
import { renderCard } from '../../lib/og';
import { site } from '../../site.config';

export const getStaticPaths = (async () => {
  const zhPosts = await getLocalizedPosts({ includeHidden: true, locale: 'zh' });
  const enPosts = await getLocalizedPosts({ includeHidden: true, locale: 'en' });

  return [
    { params: { slug: '_site' }, props: { title: site.title, meta: site.author } },
    { params: { slug: 'en/_site' }, props: { title: `${site.title} · English`, meta: site.author } },
    ...zhPosts.map(({ entry, meta }) => ({
      params: { slug: meta.baseId },
      props: { title: entry.data.title, meta: `${site.author} · ${formatDate(entry.data.date)}` },
    })),
    ...enPosts
      .filter(({ meta }) => meta.isTranslated)
      .map(({ entry, meta }) => ({
        params: { slug: `en/${meta.baseId}` },
        props: { title: entry.data.title, meta: `${site.author} · ${formatDate(entry.data.date)}` },
      })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderCard(props as { title: string; meta: string });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
