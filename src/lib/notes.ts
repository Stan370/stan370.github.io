import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '../i18n/ui';
import { localizePath } from '../i18n/utils';
import { parseVariantId, resolveEntriesForLocale, type ResolvedEntry } from './content-i18n';
import { langOf, plainText } from './posts';

export type Note = CollectionEntry<'notes'>;
export type LocalizedNote = ResolvedEntry<Note>;

/** Resolve notes for a target locale while keeping canonical note slugs stable. */
export async function getLocalizedNotes(locale: Locale = DEFAULT_LOCALE): Promise<LocalizedNote[]> {
  const raw = await getCollection('notes');
  return resolveEntriesForLocale(raw, locale, (n) => langOf(plainText(n.body), n.data.lang)).sort((a, b) =>
    a.meta.baseId.localeCompare(b.meta.baseId),
  );
}

export function noteBaseId(note: Note): string {
  return parseVariantId(note.id).baseId;
}

export function noteHref(note: Note, locale: Locale = DEFAULT_LOCALE): string {
  return encodeURI(localizePath(`/notes/${noteBaseId(note)}/`, locale));
}

/** Notes mostly lack front matter: fall back to the first heading, then the file name. */
export function noteTitle(note: Note) {
  const baseId = noteBaseId(note);
  if (note.data.title && note.data.title !== note.id && note.data.title !== baseId) return note.data.title;
  const heading = note.body?.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim();
  return heading || baseId;
}
