import test from 'node:test';
import assert from 'node:assert/strict';
import { parseVariantId, resolveEntriesForLocale } from './content-i18n';

type MockEntry = {
  id: string;
  body: string;
  data: {
    lang?: string;
    translationStatus?: 'auto' | 'reviewed' | 'human';
  };
};

const detect = (e: MockEntry): 'zh-CN' | 'en' => (e.data.lang === 'en' ? 'en' : 'zh-CN');

test('parseVariantId extracts canonical baseId for root and nested sidecars', () => {
  assert.deepEqual(parseVariantId('macos-tun'), { baseId: 'macos-tun', variant: null });
  assert.deepEqual(parseVariantId('macos-tun.en'), { baseId: 'macos-tun', variant: 'en' });
  assert.deepEqual(parseVariantId('rust.zh'), { baseId: 'rust', variant: 'zh' });
  assert.deepEqual(parseVariantId('IOandEpoll/Epoll.en'), { baseId: 'IOandEpoll/Epoll', variant: 'en' });
  assert.deepEqual(parseVariantId('git-branch/index.en'), { baseId: 'git-branch/index', variant: 'en' });
});

test('resolveEntriesForLocale deduplicates sidecars and computes fallback / translation metadata', () => {
  const entries: MockEntry[] = [
    { id: 'macos-tun', body: '中文正文', data: { lang: 'zh-CN' } },
    { id: 'macos-tun.en', body: 'English body', data: { lang: 'en', translationStatus: 'reviewed' } },
    { id: 'rust', body: 'English original', data: { lang: 'en' } },
    { id: 'rust.zh', body: '中文译文', data: { lang: 'zh-CN', translationStatus: 'auto' } },
    { id: 'accelerate', body: '仅中文', data: { lang: 'zh-CN' } },
  ];

  const zh = resolveEntriesForLocale(entries, 'zh', detect);
  const en = resolveEntriesForLocale(entries, 'en', detect);

  // Never leaks sidecars as extra posts
  assert.equal(zh.length, 3);
  assert.equal(en.length, 3);

  const zhMac = zh.find((x) => x.meta.baseId === 'macos-tun')!;
  assert.equal(zhMac.entry.id, 'macos-tun');
  assert.equal(zhMac.meta.isTranslated, false);
  assert.equal(zhMac.meta.isFallback, false);
  assert.equal(zhMac.meta.hasAlternateTranslation, true);

  const enMac = en.find((x) => x.meta.baseId === 'macos-tun')!;
  assert.equal(enMac.entry.id, 'macos-tun.en');
  assert.equal(enMac.meta.isTranslated, true);
  assert.equal(enMac.meta.isFallback, false);
  assert.equal(enMac.meta.translationStatus, 'reviewed');

  const zhRust = zh.find((x) => x.meta.baseId === 'rust')!;
  assert.equal(zhRust.entry.id, 'rust.zh');
  assert.equal(zhRust.meta.isTranslated, true);
  assert.equal(zhRust.meta.isFallback, false);

  const enRust = en.find((x) => x.meta.baseId === 'rust')!;
  assert.equal(enRust.entry.id, 'rust');
  assert.equal(enRust.meta.isTranslated, false);
  assert.equal(enRust.meta.isFallback, false);
  assert.equal(enRust.meta.hasAlternateTranslation, true);

  const enAccel = en.find((x) => x.meta.baseId === 'accelerate')!;
  assert.equal(enAccel.entry.id, 'accelerate');
  assert.equal(enAccel.meta.isTranslated, false);
  assert.equal(enAccel.meta.isFallback, true);
  assert.equal(enAccel.meta.hasAlternateTranslation, false);
});
