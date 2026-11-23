import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatMonthLabel,
  formatWordCount,
  getAlternateLinks,
  getAlternateLocale,
  getLocaleFromPath,
  localizePath,
  stripLocalePrefix,
  switchLocalePath,
  useTranslations,
} from './utils';

test('getLocaleFromPath detects zh at root and en under /en/', () => {
  assert.equal(getLocaleFromPath('/'), 'zh');
  assert.equal(getLocaleFromPath('/archives/'), 'zh');
  assert.equal(getLocaleFromPath('/2026/09/15/macos-tun/'), 'zh');
  assert.equal(getLocaleFromPath('/en'), 'en');
  assert.equal(getLocaleFromPath('/en/'), 'en');
  assert.equal(getLocaleFromPath('/en/archives/'), 'en');
  assert.equal(getLocaleFromPath('/en/2026/09/15/macos-tun/'), 'en');
  // Paths merely starting with "/en" characters without segment boundary stay zh
  assert.equal(getLocaleFromPath('/engineering/'), 'zh');
});

test('stripLocalePrefix normalizes /en/* back to root paths', () => {
  assert.equal(stripLocalePrefix('/'), '/');
  assert.equal(stripLocalePrefix('/en'), '/');
  assert.equal(stripLocalePrefix('/en/'), '/');
  assert.equal(stripLocalePrefix('/en/tags/Go/'), '/tags/Go/');
  assert.equal(stripLocalePrefix('/2026/09/15/macos-tun/'), '/2026/09/15/macos-tun/');
});

test('localizePath and switchLocalePath preserve exact URL symmetry and skip external URLs', () => {
  assert.equal(localizePath('/', 'zh'), '/');
  assert.equal(localizePath('/', 'en'), '/en/');
  assert.equal(localizePath('/archives/', 'en'), '/en/archives/');
  assert.equal(localizePath('/en/archives/', 'zh'), '/archives/');
  assert.equal(localizePath('/en/archives/', 'en'), '/en/archives/');
  assert.equal(localizePath('https://github.com/Stan370', 'en'), 'https://github.com/Stan370');
  assert.equal(localizePath('#section-1', 'en'), '#section-1');

  assert.equal(switchLocalePath('/2026/09/15/macos-tun/', 'en'), '/en/2026/09/15/macos-tun/');
  assert.equal(switchLocalePath('/en/2026/09/15/macos-tun/', 'zh'), '/2026/09/15/macos-tun/');
  assert.equal(getAlternateLocale('zh'), 'en');
  assert.equal(getAlternateLocale('en'), 'zh');
});

test('getAlternateLinks emits absolute zh, en, and x-default URLs', () => {
  const links = getAlternateLinks('/en/2026/09/15/macos-tun/', 'https://stan370.github.io');
  assert.deepEqual(links, {
    zh: 'https://stan370.github.io/2026/09/15/macos-tun/',
    en: 'https://stan370.github.io/en/2026/09/15/macos-tun/',
    xDefault: 'https://stan370.github.io/2026/09/15/macos-tun/',
  });
});

test('useTranslations interpolates placeholders across locales', () => {
  const tZh = useTranslations('zh');
  const tEn = useTranslations('en');
  assert.equal(tZh('post.readingMinutes', { minutes: 8 }), '8 分钟');
  assert.equal(tEn('post.readingMinutes', { minutes: 8 }), '8 min read');
  assert.equal(tZh('nav.archives'), '归档');
  assert.equal(tEn('nav.archives'), 'Archives');
});

test('formatWordCount and formatMonthLabel localize numbers and calendar labels', () => {
  assert.equal(formatWordCount(259_000, 'zh'), '25.9 万');
  assert.equal(formatWordCount(259_000, 'en'), '259.0k');
  assert.equal(formatMonthLabel(11, 'zh'), '11月');
  assert.equal(formatMonthLabel(11, 'en'), 'Nov');
});
