import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../site.config';

// Satori needs real glyph data and can't read woff2. Fontsource ships Noto Serif SC
// as ~100 unicode-range .woff chunks; load only the chunks a given card needs.
// Satori won't fall back between fonts sharing a family name, so each chunk gets
// its own name and the card lists them all in `fontFamily`.
const require = createRequire(import.meta.url);
const fontDir = dirname(require.resolve('@fontsource/noto-serif-sc/package.json'));

type Chunk = { file: string; ranges: [number, number][] };

function parseChunks(weight: number): Chunk[] {
  const css = readFileSync(join(fontDir, `${weight}.css`), 'utf8');
  return [...css.matchAll(/@font-face\s*{([^}]*)}/g)].flatMap(([, block]) => {
    const file = block.match(/url\(\.\/files\/([^)]+\.woff)\)/)?.[1];
    const range = block.match(/unicode-range:\s*([^;]+)/)?.[1];
    if (!file || !range) return [];
    const ranges = range.split(',').map((r) => {
      const [a, b] = r.trim().replace(/^U\+/i, '').split('-');
      return [parseInt(a, 16), parseInt(b ?? a, 16)] as [number, number];
    });
    return [{ file, ranges }];
  });
}

const chunks = { 400: parseChunks(400), 700: parseChunks(700) };
const cache = new Map<string, Buffer>();

function fontsFor(text: string, weight: 400 | 700) {
  const codes = new Set([...text].map((c) => c.codePointAt(0)!));
  return chunks[weight]
    .filter((c) => c.ranges.some(([a, b]) => [...codes].some((cp) => cp >= a && cp <= b)))
    .map((c) => {
      if (!cache.has(c.file)) cache.set(c.file, readFileSync(join(fontDir, 'files', c.file)));
      return { name: c.file, data: cache.get(c.file)!, weight, style: 'normal' as const };
    });
}

const family = (fonts: { name: string }[]) => fonts.map((f) => `'${f.name}'`).join(', ');

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

/** 1200×630 social card on the site's paper / ink / vermilion palette. */
export async function renderCard({ title, meta }: { title: string; meta: string }) {
  const brand = site.title;
  const bold = fontsFor(title, 700);
  const regular = fontsFor(`${brand}${meta}stan370.github.io`, 400);
  const size = [...title].length > 28 ? 56 : 68;

  const svg = await satori(
    h(
      'div',
      {
        width: 1200,
        height: 630,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 84px',
        background: '#FAF7F2',
        color: '#1F1D1A',
        fontFamily: family(regular),
        borderTop: '10px solid #C2410C',
      },
      [
        h('div', { fontSize: 30, color: '#6B655C', fontWeight: 400 }, brand),
        h('div', { fontSize: size, fontWeight: 700, fontFamily: family(bold), lineHeight: 1.3, letterSpacing: '0.01em' }, title),
        h(
          'div',
          { display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#6B655C', fontWeight: 400, borderTop: '2px solid #E8E1D5', paddingTop: 28 },
          [h('div', {}, meta), h('div', {}, 'stan370.github.io')],
        ),
      ],
    ) as never,
    { width: 1200, height: 630, fonts: [...bold, ...regular] },
  );

  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
