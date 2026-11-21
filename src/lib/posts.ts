import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '../i18n/ui';
import { localizePath } from '../i18n/utils';
import { parseVariantId, resolveEntriesForLocale, type ResolvedEntry, type TranslationMeta } from './content-i18n';
import { site } from '../site.config';

export type Post = CollectionEntry<'posts'>;
export type LocalizedPost = ResolvedEntry<Post>;
export type { TranslationMeta };

/** Resolve published posts for a target locale, deduplicating co-located `.en.md` / `.zh.md` sidecars. */
export async function getLocalizedPosts({
  includeHidden = false,
  locale = DEFAULT_LOCALE,
}: {
  includeHidden?: boolean;
  locale?: Locale;
} = {}): Promise<LocalizedPost[]> {
  const raw = await getCollection('posts', (p) => !p.data.draft && (includeHidden || !p.data.hide));
  const resolved = resolveEntriesForLocale(raw, locale, (p) => langOf(plainText(p.body), p.data.lang));
  return resolved.sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}

/** All published posts for a locale, newest first. `hide: true` posts are built but not listed. */
export async function getPosts(opts: { includeHidden?: boolean; locale?: Locale } = {}): Promise<Post[]> {
  return (await getLocalizedPosts(opts)).map((r) => r.entry);
}

const pad = (n: number) => String(n).padStart(2, '0');

export function dateParts(d: Date) {
  return { year: String(d.getUTCFullYear()), month: pad(d.getUTCMonth() + 1), day: pad(d.getUTCDate()) };
}

/** Canonical base slug without sidecar `.en` / `.zh` suffix. */
export function postBaseId(post: Post): string {
  return parseVariantId(post.id).baseId;
}

/** Hexo permalink `:year/:month/:day/:title/`, prefixed with `/en` when locale is `'en'`. */
export function postPath(post: Post, locale: Locale = DEFAULT_LOCALE) {
  const { year, month, day } = dateParts(post.data.date);
  return localizePath(`/${year}/${month}/${day}/${postBaseId(post)}/`, locale);
}

/** Encoded form for hrefs (ids may contain spaces / CJK). */
export const postHref = (post: Post, locale: Locale = DEFAULT_LOCALE) => encodeURI(postPath(post, locale));

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

export const tagHref = (name: string, locale: Locale = DEFAULT_LOCALE) =>
  encodeURI(localizePath(`/tags/${slugize(name)}/`, locale));

export const categoryHref = (name: string, locale: Locale = DEFAULT_LOCALE) =>
  encodeURI(localizePath(`/categories/${slugize(name)}/`, locale));

/** Markdown -> plain text, good enough for summaries, language detection and reading time. */
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
export function langOf(text: string, explicit?: string): 'zh-CN' | 'en' {
  if (explicit) return explicit.toLowerCase().startsWith('en') ? 'en' : 'zh-CN';
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

/** Map of slug -> { name, posts } for tags or categories. */
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
