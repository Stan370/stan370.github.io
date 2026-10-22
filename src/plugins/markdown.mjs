// Small remark/rehype plugins for the migrated Hexo content.
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { visit, SKIP } from 'unist-util-visit';

const isRemote = (url) => /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(url) || /^(?:data|mailto):/i.test(url);
const isWindowsPath = (url) => /^[a-z]:[\\/]/i.test(url) || url.includes('\\') || /^file:/i.test(url);

function isBrokenLocal(url, file) {
  if (!url || isRemote(url)) return false;
  if (isWindowsPath(url)) return true;
  if (url.startsWith('/')) return false; // served from public/
  const base = file.path ? dirname(file.path) : process.cwd();
  return !existsSync(resolve(base, decodeURI(url.split(/[?#]/)[0])));
}

function warn(file, url) {
  const where = file.path ? file.path.replace(process.cwd() + '/', '') : 'unknown file';
  console.warn(`[broken-image] ${where}: ${url}`);
}

const placeholder = (alt) => ({
  type: 'html',
  value: `<span class="img-missing" role="img" aria-label="图片缺失">图片缺失${alt ? `：${escapeHtml(alt)}` : ''}</span>`,
});

const escapeHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/**
 * Typora left `C:\Users\...` image paths in several posts. Astro would fail the
 * build trying to resolve them, so swap them for a visible placeholder and log
 * them as a to-fix list. Also flags whether the page needs KaTeX CSS.
 */
export function remarkMigrationFixes() {
  return (tree, file) => {
    visit(tree, 'image', (node, index, parent) => {
      if (!isBrokenLocal(node.url, file)) return;
      warn(file, node.url);
      parent.children[index] = placeholder(node.alt);
      return SKIP;
    });
    visit(tree, 'html', (node) => {
      node.value = node.value.replace(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi, (tag, src) => {
        if (!isBrokenLocal(src, file)) return tag;
        warn(file, src);
        return placeholder('').value;
      });
    });

    let hasMath = false;
    visit(tree, ['math', 'inlineMath'], () => {
      hasMath = true;
    });
    if (file.data.astro?.frontmatter) file.data.astro.frontmatter.hasMath = hasMath;
  };
}

// CJK ideographs/kana next to ASCII letters or digits get a thin gap (盘古之白).
// Deliberately narrower than pangu.js, which also spaces brackets and turns
// `select()` into `select ()` — wrong for a code-heavy blog.
const CJK = '\\u2e80-\\u2eff\\u2f00-\\u2fdf\\u3040-\\u309f\\u30a0-\\u30ff\\u3100-\\u312f\\u3200-\\u32ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff';
const cjkThenLatin = new RegExp(`([${CJK}])([A-Za-z0-9])`, 'g');
const latinThenCjk = new RegExp(`([A-Za-z0-9%])([${CJK}])`, 'g');

export const spaceCjk = (text) => text.replace(cjkThenLatin, '$1 $2').replace(latinThenCjk, '$1 $2');

/** Insert spaces between CJK and Latin text, skipping code. */
export function remarkCjkSpacing() {
  return (tree) => {
    visit(tree, 'text', (node) => {
      node.value = spaceCjk(node.value);
    });
  };
}

/**
 * Some migrated posts use `#` headings inside the body. The page title is the
 * only <h1>, so shift every heading down a level when the body contains an h1.
 */
export function remarkDemoteHeadings() {
  return (tree) => {
    let hasH1 = false;
    visit(tree, 'heading', (node) => {
      if (node.depth === 1) hasH1 = true;
    });
    if (!hasH1) return;
    visit(tree, 'heading', (node) => {
      node.depth = Math.min(6, node.depth + 1);
    });
  };
}

/**
 * External images: send no Referer (CSDN, cnblogs etc. reject hotlinks that carry
 * one), and lazy-load them. Covers markdown images and raw <img> HTML.
 */
export function rehypeExternalImages() {
  const attrs = 'referrerpolicy="no-referrer" loading="lazy" decoding="async"';
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && node.tagName === 'img' && isRemote(String(node.properties?.src ?? ''))) {
        Object.assign(node.properties, { referrerPolicy: 'no-referrer', loading: 'lazy', decoding: 'async' });
      } else if (node.type === 'raw') {
        node.value = node.value.replace(/<img\b(?![^>]*referrerpolicy)([^>]*\bsrc=["'](?:https?:)?\/\/[^>]*)>/gi, `<img ${attrs}$1>`);
      }
    });
  };
}
