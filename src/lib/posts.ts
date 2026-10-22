import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../site.config';

export type Post = CollectionEntry<'posts'>;

/** All published posts, newest first. `hide: true` posts are built but not listed. */
export async function getPosts({ includeHidden = false } = {}): Promise<Post[]> {
  const posts = await getCollection('posts', (p) => !p.data.draft && (includeHidden || !p.data.hide));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const pad = (n: number) => String(n).padStart(2, '0');

export function dateParts(d: Date) {
  return { year: String(d.getUTCFullYear()), month: pad(d.getUTCMonth() + 1), day: pad(d.getUTCDate()) };
}

/** Hexo permalink `:year/:month/:day/:title/`. */
export function postPath(post: Post) {
  const { year, month, day } = dateParts(post.data.date);
  return `/${year}/${month}/${day}/${post.id}/`;
}

/** Encoded form for hrefs (ids may contain spaces / CJK). */
export const postHref = (post: Post) => encodeURI(postPath(post));

export function formatDate(d: Date, style: 'full' | 'short' = 'full') {
  const { year, month, day } = dateParts(d);
  return style === 'short' ? `${month}-${day}` : `${year}-${month}-${day}`;
}

/** Port of hexo-util `slugize` (transform 0) so tag/category URLs stay identical. */
export function slugize(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u0000-\u001f]/g, '')
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const tagHref = (name: string) => encodeURI(`/tags/${slugize(name)}/`);
export const categoryHref = (name: string) => encodeURI(`/categories/${slugize(name)}/`);

/** Markdown → plain text, good enough for summaries, language detection and reading time. */
export function plainText(md = '') {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, '')
    .replace(/[*_~|]+/g, '')
    .replace(/\$\$?[^$]*\$\$?/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text: string, max = 110) {
  const chars = [...text];
  return chars.length > max ? chars.slice(0, max).join('').trimEnd() + '…' : text;
}

export function summaryOf(post: Post, max = 110) {
  return post.data.description ?? post.data.summary ?? truncate(plainText(post.body), max);
}

export const CJK = /[\u3400-\u9fff\uf900-\ufaff]/g;

/** Front-matter `lang`, otherwise zh-CN when CJK makes up a meaningful share of the text. */
export function langOf(text: string, explicit?: string) {
  if (explicit) return explicit;
  const sample = text.slice(0, 4000);
  const cjk = sample.match(CJK)?.length ?? 0;
  const latin = sample.match(/[A-Za-z]+/g)?.length ?? 0;
  return cjk > latin * 0.5 ? 'zh-CN' : 'en';
}

/** ~400 CJK chars or ~220 Latin words per minute. */
export function readingMinutes(text: string) {
  const cjk = text.match(CJK)?.length ?? 0;
  const words = text.replace(CJK, ' ').match(/[A-Za-z0-9]+/g)?.length ?? 0;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}

export function groupByYear<T>(items: T[], date: (item: T) => Date) {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const y = String(date(item).getUTCFullYear());
    groups.set(y, [...(groups.get(y) ?? []), item]);
  }
  return [...groups.entries()];
}

/** Map of slug → { name, posts } for tags or categories. */
export function taxonomy(posts: Post[], key: 'tags' | 'categories') {
  const map = new Map<string, { name: string; posts: Post[] }>();
  for (const post of posts) {
    for (const name of post.data[key]) {
      const slug = slugize(name);
      const entry = map.get(slug) ?? { name, posts: [] };
      entry.posts.push(post);
      map.set(slug, entry);
    }
  }
  return [...map.entries()].sort((a, b) => b[1].posts.length - a[1].posts.length);
}

export const absoluteUrl = (path: string) => new URL(path, site.url).href;
