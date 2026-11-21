import { DEFAULT_LOCALE, LOCALE_META, ui, type Locale, type UiKey } from './ui';

/** Detect the route locale from a URL pathname. Default locale (zh) lives at root; en lives under /en/. */
export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : DEFAULT_LOCALE;
}

/** Return the alternate locale for a 2-language site. */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}

/** Remove a leading `/en` locale prefix while keeping a valid leading slash. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

/**
 * Prefix an internal site path with `/en` when locale is `'en'`, leaving default `'zh'` at root.
 * External URLs, hash links, and static public assets are returned untouched.
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path || /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path) || path.startsWith('#')) {
    return path;
  }
  const clean = stripLocalePrefix(path);
  if (locale === DEFAULT_LOCALE) return clean;
  if (clean === '/') return '/en/';
  return `/en${clean}`;
}

/** Compute the paired path on `targetLocale` for the current pathname. */
export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  return localizePath(pathname, targetLocale);
}

/** Build absolute alternate URLs for SEO `<link rel="alternate" hreflang="...">` tags. */
export function getAlternateLinks(pathname: string, siteUrl: string) {
  const basePath = stripLocalePrefix(pathname);
  const zhPath = localizePath(basePath, 'zh');
  const enPath = localizePath(basePath, 'en');
  return {
    zh: new URL(zhPath, siteUrl).href,
    en: new URL(enPath, siteUrl).href,
    xDefault: new URL(zhPath, siteUrl).href,
  };
}

/** Typed translation lookup with lightweight `{param}` interpolation. */
export function useTranslations(locale: Locale) {
  const dict = ui[locale] ?? ui[DEFAULT_LOCALE];
  return function t(key: UiKey, params?: Record<string, string | number>): string {
    let text: string = dict[key] ?? ui[DEFAULT_LOCALE][key];
    if (!params) return text;
    for (const [k, v] of Object.entries(params)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
    return text;
  };
}

export function getLocaleMeta(locale: Locale) {
  return LOCALE_META[locale] ?? LOCALE_META[DEFAULT_LOCALE];
}

export function formatNumber(n: number, locale: Locale): string {
  return n.toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN');
}

export function formatWordCount(n: number, locale: Locale): string {
  if (locale === 'en') {
    return n >= 1_000 ? `${(n / 1_000).toFixed(1)}k` : n.toLocaleString('en-US');
  }
  return n >= 10_000 ? `${(n / 10_000).toFixed(1)} 万` : n.toLocaleString('zh-CN');
}

const EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

export function formatMonthLabel(month1Based: number, locale: Locale): string {
  if (locale === 'en') return EN_MONTHS[month1Based - 1] ?? '';
  return `${month1Based}月`;
}

export function getWeekdayLabels(locale: Locale): readonly [string, string, string] {
  return locale === 'en' ? (['M', 'W', 'F'] as const) : (['一', '三', '五'] as const);
}
