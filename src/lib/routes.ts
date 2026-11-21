import type { Locale } from '../i18n/ui';
import { dateParts, getLocalizedPosts, getPosts, taxonomy, type LocalizedPost, type Post } from './posts';
import { getLocalizedNotes, type LocalizedNote } from './notes';

export interface PostRouteProps {
  item: LocalizedPost;
  newer?: Post;
  older?: Post;
}

/** Shared static-path generator for both `/[year]/[month]/[day]/[...slug]` and `/en/...`. */
export async function getPostStaticPaths(locale: Locale) {
  const all = await getLocalizedPosts({ includeHidden: true, locale });
  const listed = all.filter((p) => !p.entry.data.hide);
  return all.map((item) => {
    const i = listed.indexOf(item);
    return {
      params: { ...dateParts(item.entry.data.date), slug: item.meta.baseId },
      props: {
        item,
        newer: i > 0 ? listed[i - 1].entry : undefined,
        older: i >= 0 ? listed[i + 1]?.entry : undefined,
      } satisfies PostRouteProps,
    };
  });
}

/** Shared static-path generator for `/notes/[...id]` and `/en/notes/[...id]`. */
export async function getNoteStaticPaths(locale: Locale) {
  const notes = await getLocalizedNotes(locale);
  return notes.map((item) => ({
    params: { id: item.meta.baseId },
    props: { item } satisfies { item: LocalizedNote },
  }));
}

/** Shared static-path generator for tags and categories pages in both locales. */
export async function getTermStaticPaths(locale: Locale, kind: 'tags' | 'categories') {
  return taxonomy(await getPosts({ locale }), kind).map(([term, { name, posts }]) => ({
    params: { term },
    props: { name, posts },
  }));
}
