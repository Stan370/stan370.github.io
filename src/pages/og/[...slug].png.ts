import type { APIRoute, GetStaticPaths } from 'astro';
import { formatDate, getPosts, type Post } from '../../lib/posts';
import { renderCard } from '../../lib/og';
import { site } from '../../site.config';

export const getStaticPaths = (async () => {
  const posts = await getPosts({ includeHidden: true });
  return [
    { params: { slug: '_site' }, props: { title: site.title, meta: site.author } },
    ...posts.map((post: Post) => ({
      params: { slug: post.id },
      props: { title: post.data.title, meta: `${site.author} · ${formatDate(post.data.date)}` },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderCard(props as { title: string; meta: string });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
