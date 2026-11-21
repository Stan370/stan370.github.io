import type { Locale } from '../i18n/ui';

export interface VariantParts {
  /** Canonical content id without `.en` or `.zh` sidecar suffix. */
  baseId: string;
  /** Locale suffix if this file is a translation sidecar (`*.en.md` / `*.zh.md`), else null. */
  variant: Locale | null;
}

export interface TranslationMeta {
  /** Canonical slug/id shared across all locales (keeps URLs identical across / and /en/). */
  baseId: string;
  /** True when the entry rendered for this locale is a translated sidecar file. */
  isTranslated: boolean;
  /** True when no native or translated version exists for the requested locale (showing original). */
  isFallback: boolean;
  /** True when a dedicated translation sidecar exists for the alternate locale. */
  hasAlternateTranslation: boolean;
  /** Detected or declared language of the displayed content (`zh-CN` or `en`). */
  contentLang: 'zh-CN' | 'en';
  /** Original source language of the base document (`zh-CN` or `en`). */
  originalLang: 'zh-CN' | 'en';
  /** Translation provenance from frontmatter, if this is a sidecar. */
  translationStatus?: 'auto' | 'reviewed' | 'human';
}

export interface ResolvedEntry<T> {
  entry: T;
  meta: TranslationMeta;
}

const SIDECAR_RE = /\.(en|zh)$/;

/**
 * Parse a content collection id into its canonical `baseId` and optional sidecar locale.
 * Co-located sidecars (e.g. `IOandEpoll/Epoll.en` next to `IOandEpoll/Epoll`) share relative images
 * and map to the exact same URL slug under `/en/...`.
 */
export function parseVariantId(id: string): VariantParts {
  const match = id.match(SIDECAR_RE);
  if (!match) return { baseId: id, variant: null };
  return {
    baseId: id.slice(0, -match[0].length),
    variant: match[1] as Locale,
  };
}

/**
 * Resolve a collection of base + sidecar entries for a given target `locale`.
 *
 * Rules:
 * - Sidecar files (`*.en`, `*.zh`) never create duplicate standalone items.
 * - For `locale`, if a matching `.{locale}` sidecar exists, pick it.
 * - Otherwise fall back to the canonical base file (or any remaining variant if base is absent).
 * - Compute `isFallback` accurately so SEO templates can add `noindex` to untranslated fallbacks
 *   and avoid duplicate-content penalties across `/` and `/en/`.
 */
export function resolveEntriesForLocale<
  T extends { id: string; data: { translationStatus?: 'auto' | 'reviewed' | 'human' } },
>(
  entries: readonly T[],
  locale: Locale,
  detectLang: (entry: T) => 'zh-CN' | 'en',
): ResolvedEntry<T>[] {
  const groups = new Map<string, { base?: T; zh?: T; en?: T }>();

  for (const entry of entries) {
    const { baseId, variant } = parseVariantId(entry.id);
    const group = groups.get(baseId) ?? {};
    if (variant === 'en') group.en = entry;
    else if (variant === 'zh') group.zh = entry;
    else group.base = entry;
    groups.set(baseId, group);
  }

  const resolved: ResolvedEntry<T>[] = [];
  const targetLangCode: 'zh-CN' | 'en' = locale === 'en' ? 'en' : 'zh-CN';

  for (const [baseId, group] of groups.entries()) {
    const sidecar = locale === 'en' ? group.en : group.zh;
    const altSidecar = locale === 'en' ? group.zh : group.en;
    const canonical = group.base ?? group.zh ?? group.en;
    if (!canonical) continue;

    const chosen = sidecar ?? canonical;
    const originalLang = detectLang(canonical);
    const contentLang = sidecar ? targetLangCode : originalLang;
    const isTranslated = Boolean(sidecar);
    const isFallback = !sidecar && originalLang !== targetLangCode;

    resolved.push({
      entry: chosen,
      meta: {
        baseId,
        isTranslated,
        isFallback,
        hasAlternateTranslation: Boolean(altSidecar || (isTranslated && group.base)),
        contentLang,
        originalLang,
        translationStatus: sidecar ? (chosen.data.translationStatus ?? 'auto') : undefined,
      },
    });
  }

  return resolved;
}
