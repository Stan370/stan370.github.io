import test from 'node:test';
import assert from 'node:assert/strict';
import {
  chunkMarkdown,
  computeSourceHash,
  detectContentLanguage,
  isSidecarFile,
  protectMarkdown,
  resolveTargetLocales,
  restoreMarkdown,
  serializeMarkdown,
  sidecarPathFor,
  splitFrontmatter,
  verifyProtectedTokens,
} from './md-ast.mjs';

test('sidecar helpers keep translations co-located in the exact same folder', () => {
  assert.equal(isSidecarFile('src/content/posts/IOandEpoll/Epoll.md'), false);
  assert.equal(isSidecarFile('src/content/posts/IOandEpoll/Epoll.en.md'), true);
  assert.equal(isSidecarFile('src/content/posts/rust.zh.md'), true);
  assert.equal(
    sidecarPathFor('src/content/posts/IOandEpoll/Epoll.md', 'en'),
    'src/content/posts/IOandEpoll/Epoll.en.md',
  );
});

test('splitFrontmatter and serializeMarkdown handle files with and without frontmatter', () => {
  const withFm = `---\ntitle: 测试文章\ndate: 2026-09-15 22:00:19\ntags:\n  - Go\n---\n\n正文内容\n`;
  const parsed = splitFrontmatter(withFm);
  assert.equal(parsed.hasFrontmatter, true);
  assert.equal(parsed.data.title, '测试文章');
  assert.deepEqual(parsed.data.tags, ['Go']);
  assert.equal(parsed.body.trim(), '正文内容');

  const noFm = `# Pure Note\n\nSome content without YAML frontmatter.`;
  const parsedNoFm = splitFrontmatter(noFm);
  assert.equal(parsedNoFm.hasFrontmatter, false);
  assert.deepEqual(parsedNoFm.data, {});
  assert.equal(parsedNoFm.body, noFm);

  const rebuilt = serializeMarkdown({ title: 'Translated', lang: 'en', sourceHash: 'abc123' }, 'Hello world\n');
  const reparsed = splitFrontmatter(rebuilt);
  assert.equal(reparsed.data.title, 'Translated');
  assert.equal(reparsed.data.sourceHash, 'abc123');
  assert.equal(reparsed.body.trim(), 'Hello world');
});

test('detectContentLanguage distinguishes zh, en, and mixed ignoring code fences', () => {
  const zhDoc = `这是一篇关于操作系统和网络代理排查的技术笔记。\n\`\`\`go\npackage main\nfunc main() { println("hello world from go code") }\n\`\`\``;
  assert.equal(detectContentLanguage(zhDoc).lang, 'zh');
  assert.deepEqual(resolveTargetLocales('zh', 'auto'), ['en']);

  const enDoc = `Recently I rewrote a distributed networking library in Rust to improve memory safety, zero-copy parsing, and throughput.`;
  assert.equal(detectContentLanguage(enDoc).lang, 'en');
  assert.deepEqual(resolveTargetLocales('en', 'auto'), ['zh']);

  const mixedDoc = `最近在学习 Rust memory safety 和 distributed consensus protocols, 发现 ownership model 非常适合 systems engineering.`;
  assert.equal(detectContentLanguage(mixedDoc).lang, 'mixed');
  assert.deepEqual(resolveTargetLocales('mixed', 'auto'), ['en']);
});

test('protectMarkdown and restoreMarkdown preserve code, math, HTML, and relative CJK image paths verbatim', () => {
  const md = [
    '## 标题',
    '',
    '这里有一张本地图片 ![调试界面](./PROJECT_ARTICLE/06-调试工具：直接调用插件工具.png) 和 [链接](https://example.com/a?b=1).',
    '',
    '行内代码 `const x = 1;` 与行内公式 $E = mc^2$ 以及价格 $100。',
    '',
    '```ts',
    'export function epoll(fd: number) {',
    '  return fd + 1;',
    '}',
    '```',
    '',
    '$$',
    '\\sum_{i=1}^{n} x_i = S',
    '$$',
    '',
    '<img src="./image-1.png" alt="diagram" />',
  ].join('\n');

  const { protectedText, tokens, stats } = protectMarkdown(md);
  assert.equal(stats.codeBlocks, 1);
  assert.equal(stats.mathBlocks, 2);
  assert.equal(stats.urls, 2);

  // Code, math, and image filename must not leak into translatable prose
  assert.ok(!protectedText.includes('export function epoll'));
  assert.ok(!protectedText.includes('06-调试工具：直接调用插件工具.png'));
  assert.ok(!protectedText.includes('\\sum_{i=1}^{n}'));
  // Price $100 should remain untransformed prose
  assert.ok(protectedText.includes('$100'));

  // Simulate translating prose while keeping placeholders intact
  const simulated = protectedText.replace('## 标题', '## Title').replace('这里有一张本地图片', 'Here is a local image');
  assert.equal(verifyProtectedTokens(protectedText, simulated).ok, true);

  const restored = restoreMarkdown(simulated, tokens);
  assert.ok(restored.includes('## Title'));
  assert.ok(restored.includes('./PROJECT_ARTICLE/06-调试工具：直接调用插件工具.png'));
  assert.ok(restored.includes('export function epoll(fd: number)'));
  assert.ok(restored.includes('\\sum_{i=1}^{n} x_i = S'));
  assert.ok(restored.includes('<img src="./image-1.png" alt="diagram" />'));
});

test('verifyProtectedTokens catches missing or corrupted placeholders', () => {
  const input = 'Intro [[[CODE_BLOCK_0]]] and [[[URL_1]]] end.';
  assert.equal(verifyProtectedTokens(input, 'Translated [[[CODE_BLOCK_0]]] and [[[URL_1]]] end.').ok, true);
  const bad = verifyProtectedTokens(input, 'Translated [[[CODE_BLOCK_0]]] end.');
  assert.equal(bad.ok, false);
  assert.deepEqual(bad.missing, ['[[[URL_1]]]']);
});

test('chunkMarkdown splits huge monolithic documents cleanly along headings within maxChars', () => {
  const sections = Array.from({ length: 12 }, (_, i) => {
    const body = `Paragraph content for section ${i}. `.repeat(40);
    return `## Section ${i}\n\n${body}`;
  }).join('\n\n');

  const chunks = chunkMarkdown(sections, 2500);
  assert.ok(chunks.length >= 6);
  for (const chunk of chunks) {
    assert.ok(chunk.text.length <= 2600, `chunk ${chunk.index} too large: ${chunk.text.length}`);
  }
  assert.equal(computeSourceHash('abc'), computeSourceHash('abc'));
  assert.notEqual(computeSourceHash('abc'), computeSourceHash('abd'));
});

test('handles Windows CRLF notes and same-line triple-backtick spans without swallowing content', () => {
  const crlfDoc =
    '# Title\r\n\r\n```inline.code()```\r\n\r\n' +
    Array.from({ length: 10 }, (_, i) => `## Part ${i}\r\n\r\n${'中文段落测试内容。'.repeat(120)}`).join('\r\n\r\n');
  const { protectedText, tokens } = protectMarkdown(crlfDoc);
  assert.ok(protectedText.includes('[[[INLINE_CODE_0]]]'));
  const chunks = chunkMarkdown(protectedText, 2500);
  assert.ok(chunks.length >= 4, `expected >= 4 chunks, got ${chunks.length}`);
  const restored = restoreMarkdown(chunks.map((c) => c.text).join('\n\n'), tokens);
  assert.ok(restored.includes('```inline.code()```'));
});
