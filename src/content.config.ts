import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Hexo permalinks use the file path verbatim (case and spaces preserved),
// so ids must too — Astro's default slugified id would break every URL.
const keepPath = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

// Hexo front matter allows `tags:` empty, a single string, or a list.
const stringList = z
  .union([z.string(), z.array(z.union([z.string(), z.array(z.string())])), z.null()])
  .optional()
  .transform((v) => (v == null ? [] : [v].flat(2).map(String).filter(Boolean)));

// Dates without a timezone are taken literally (as UTC), which is how the
// Hexo URLs were produced. Never let the build machine's timezone shift a day.
const literalDate = z.preprocess((v) => {
  if (typeof v === 'string') {
    const m = v.trim().match(/^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/);
    if (m) return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] ?? 0), +(m[5] ?? 0), +(m[6] ?? 0)));
  }
  return v;
}, z.coerce.date());

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts', generateId: keepPath }),
  schema: z.object({
    title: z.string(),
    date: literalDate,
    updated: literalDate.optional(),
    tags: stringList,
    categories: stringList,
    description: z.string().optional(),
    summary: z.string().optional(),
    img: z.string().optional(),
    lang: z.string().optional(),
    hide: z.boolean().optional(),
    draft: z.boolean().optional(),
    // Some older posts used `updatedate:` instead of Hexo's `updated:`.
    updatedate: literalDate.optional(),
  }).transform(({ updatedate, ...data }) => ({ ...data, updated: data.updated ?? updatedate })),
});

// Loose root-level notes migrated from Hexo's source/ (mostly no front matter).
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes', generateId: keepPath }),
  schema: z.object({
    title: z.string().optional(),
    date: literalDate.optional(),
    lang: z.string().optional(),
  }),
});

export const collections = { posts, notes };
