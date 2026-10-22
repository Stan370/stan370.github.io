import type { CollectionEntry } from 'astro:content';

/** Notes mostly lack front matter: fall back to the first heading, then the file name. */
export function noteTitle(note: CollectionEntry<'notes'>) {
  if (note.data.title && note.data.title !== note.id) return note.data.title;
  const heading = note.body?.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim();
  return heading || note.id;
}
