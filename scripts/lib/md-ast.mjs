import { createHash } from 'node:crypto';
import YAML from 'yaml';

const CJK_RE = /[\u3400-\u9fff\uf900-\ufaff]/g;
const LATIN_WORD_RE = /[A-Za-z]{2,}/g;
const SIDECAR_FILE_RE = /\.(en|zh)\.md$/i;
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
const PLACEHOLDER_RE = /\[\[\[(?:CODE_BLOCK|MATH_BLOCK|INLINE_CODE|INLINE_MATH|HTML_TAG|URL)_\d+\]\]\]/g;

/** Check whether a file path is already a generated sidecar translation (`*.en.md` / `*.zh.md`). */
export function isSidecarFile(filePath) {
  return SIDECAR_FILE_RE.test(filePath);
}

/** Compute the co-located sidecar file path in the exact same directory (preserves sibling images). */
export function sidecarPathFor(sourcePath, targetLocale) {
  return sourcePath.replace(/\.md$/i, `.${targetLocale}.md`);
}

/** Deterministic SHA-256 prefix for incremental change detection. */
export function computeSourceHash(rawContent) {
  return createHash('sha256').update(rawContent, 'utf8').digest('hex').slice(0, 16);
}

/** Split YAML frontmatter (if present) from Markdown body. */
export function splitFrontmatter(raw) {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) {
    return { hasFrontmatter: false, data: {}, body: raw };
  }
  const parsed = YAML.parse(match[1]);
  const data = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  const body = raw.slice(match[0].length);
  return { hasFrontmatter: true, data, body };
}

/** Serialize frontmatter + body back to clean Markdown. */
export function serializeMarkdown(data, body) {
  const cleaned = {};
  for (const [k, v] of Object.entries(data)) {
    if (v !== undefined) cleaned[k] = v;
  }
  const yamlText = YAML.stringify(cleaned, { lineWidth: 0 }).trimEnd();
  return `---\n${yamlText}\n---\n\n${body.replace(/^\r?\n+/, '')}`;
}

/**
 * Classify a Markdown document's prose language after stripping code, math, HTML, and URLs.
 * Returns `{ lang: 'zh' | 'en' | 'mixed', cjkCount, latinWords, cjkRatio }`.
 */
export function detectContentLanguage(markdownBody, explicitLang) {
  const stripped = markdownBody
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/`[^`\n]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ');

  const cjkCount = stripped.match(CJK_RE)?.length ?? 0;
  const latinWords = stripped.match(LATIN_WORD_RE)?.length ?? 0;
  const totalUnits = cjkCount + latinWords;

  if (totalUnits === 0) {
    const fallback = explicitLang?.toLowerCase().startsWith('en') ? 'en' : 'zh';
    return { lang: fallback, cjkCount, latinWords, cjkRatio: fallback === 'zh' ? 1 : 0 };
  }

  const cjkRatio = cjkCount / totalUnits;
  let lang;
  if (cjkRatio >= 0.68) lang = 'zh';
  else if (cjkRatio <= 0.12) lang = 'en';
  else lang = 'mixed';

  return { lang, cjkCount, latinWords, cjkRatio: Number(cjkRatio.toFixed(3)) };
}

/** Decide target sidecar locale(s) for a source document. */
export function resolveTargetLocales(detectedLang, mode = 'auto') {
  if (mode === 'en') return detectedLang === 'en' ? [] : ['en'];
  if (mode === 'zh') return detectedLang === 'zh' ? [] : ['zh'];
  // auto: zh & mixed produce `.en.md`; pure en produces `.zh.md`
  if (detectedLang === 'en') return ['zh'];
  return ['en'];
}

/**
 * Freeze code fences, math expressions, inline code, HTML tags, and image/link URLs behind
 * deterministic placeholders so LLMs spend 0 tokens on code and can never corrupt syntax or paths.
 */
export function protectMarkdown(body) {
  const tokens = new Map();
  let seq = 0;

  const freeze = (kind, raw) => {
    const key = `[[[${kind}_${seq++}]]]`;
    tokens.set(key, raw);
    return key;
  };

  let out = body.replace(/\r\n/g, '\n');

  // 1. Fenced code blocks (CommonMark: backtick fence info strings cannot contain backticks,
  //    so same-line triple-backtick inline spans like ```foo``` do not swallow the rest of a file).
  const lines = out.split('\n');
  const afterFences = [];
  let inFence = false;
  let fenceChar = '';
  let fenceLen = 0;
  let fenceBuf = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inFence) {
      const openBacktick = line.match(/^(\s*)(`{3,})([^`]*)$/);
      const openTilde = !openBacktick ? line.match(/^(\s*)(~{3,})(.*)$/) : null;
      const open = openBacktick || openTilde;
      if (open) {
        inFence = true;
        fenceChar = open[2][0];
        fenceLen = open[2].length;
        fenceBuf = [line];
        continue;
      }
      afterFences.push(line);
    } else {
      fenceBuf.push(line);
      const closeRe = new RegExp(`^\\s*${fenceChar}{${fenceLen},}\\s*$`);
      if (closeRe.test(line)) {
        afterFences.push(freeze('CODE_BLOCK', fenceBuf.join('\n')));
        inFence = false;
        fenceBuf = [];
      }
    }
  }
  if (inFence && fenceBuf.length) {
    // Unclosed fence: flush lines untransformed so we never swallow the tail of malformed legacy notes.
    afterFences.push(...fenceBuf);
  }
  out = afterFences.join('\n');

  // 2. Display math blocks ($$...$$)
  out = out.replace(/\$\$[\s\S]*?\$\$/g, (m) => freeze('MATH_BLOCK', m));

  // 3. Inline code spans (supports triple/double/single backticks on one line)
  out = out.replace(/(`+)([^\n`]+?)\1/g, (m) => freeze('INLINE_CODE', m));

  // 4. Inline math ($...$, avoiding currency like `$100` or trailing spaces)
  out = out.replace(/(?<!\\)\$(?!\s)(?:\\.|[^$\\\n])+?(?<!\s)\$/g, (m) => {
    // Skip obvious prices such as "$10" or "$3,000" when there's no math operator
    if (/^\$\d[\d,.]*\$$/.test(m)) return m;
    return freeze('INLINE_MATH', m);
  });

  // 5. Raw HTML tags (e.g. <img src="...">, <br/>, <details>, <iframe>)
  out = out.replace(/<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s+[^<>]*?)?\/?>/g, (m) => freeze('HTML_TAG', m));

  // 6. Markdown link & image destinations: preserve alt/label text, freeze the exact URL/path.
  out = out.replace(/(!?\[[^\]]*\]\()([^)\n]+?)(\))/g, (_m, open, dest, close) => {
    return `${open}${freeze('URL', dest)}${close}`;
  });

  return {
    protectedText: out,
    tokens,
    stats: {
      totalProtected: tokens.size,
      codeBlocks: [...tokens.keys()].filter((k) => k.startsWith('[[[CODE_BLOCK_')).length,
      mathBlocks: [...tokens.keys()].filter((k) => k.startsWith('[[[MATH_BLOCK_') || k.startsWith('[[[INLINE_MATH_')).length,
      urls: [...tokens.keys()].filter((k) => k.startsWith('[[[URL_')).length,
    },
  };
}

/** Restore frozen placeholders back to their exact original code/math/URL content. */
export function restoreMarkdown(translatedText, tokens) {
  let out = translatedText;
  // Restore in reverse insertion order so nested/adjacent replacements stay exact.
  const entries = [...tokens.entries()].reverse();
  for (const [key, value] of entries) {
    out = out.replaceAll(key, value);
  }
  return out;
}

/** Verify every protected placeholder in `inputChunk` survived verbatim in `outputChunk`. */
export function verifyProtectedTokens(inputChunk, outputChunk) {
  const expected = inputChunk.match(PLACEHOLDER_RE) ?? [];
  const actual = outputChunk.match(PLACEHOLDER_RE) ?? [];
  const actualSet = new Set(actual);
  const expectedSet = new Set(expected);

  const missing = expected.filter((tok) => !actualSet.has(tok));
  const unexpected = actual.filter((tok) => !expectedSet.has(tok));

  return {
    ok: missing.length === 0 && unexpected.length === 0,
    missing,
    unexpected,
  };
}

/**
 * Split protected Markdown into heading-aligned semantic chunks under `maxChars`.
 * Guarantees large monolithic files (120 KB – 300 KB) never exceed LLM output budgets.
 */
export function chunkMarkdown(protectedText, maxChars = 5500) {
  const normalized = protectedText.replace(/\r\n/g, '\n');
  const text = normalized.trim();
  if (!text) return [];
  if (text.length <= maxChars) {
    const firstHeading = text.match(/^#{1,6}\s+(.+)$/m)?.[1]?.trim() ?? '';
    return [{ index: 0, sectionHeading: firstHeading, text }];
  }

  // First split into sections starting at Markdown headings (# .. ######)
  const lines = normalized.split('\n');
  const sections = [];
  let currentLines = [];
  let currentHeading = '';

  for (const line of lines) {
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
    if (headingMatch && currentLines.length > 0) {
      sections.push({ heading: currentHeading, text: currentLines.join('\n') });
      currentLines = [line];
      currentHeading = headingMatch[1].trim();
    } else {
      if (headingMatch && !currentHeading) currentHeading = headingMatch[1].trim();
      currentLines.push(line);
    }
  }
  if (currentLines.length > 0) {
    sections.push({ heading: currentHeading, text: currentLines.join('\n') });
  }

  // Merge small adjacent sections and split oversized sections on paragraph then line boundaries.
  const rawChunks = [];
  let buffer = '';
  let bufferHeading = '';

  const flush = () => {
    if (buffer.trim()) {
      rawChunks.push({ sectionHeading: bufferHeading, text: buffer.trimEnd() });
    }
    buffer = '';
    bufferHeading = '';
  };

  const pushOversized = (heading, block) => {
    const paragraphs = block.split(/\n{2,}/);
    let paraBuf = '';
    for (const para of paragraphs) {
      if (para.length > maxChars) {
        if (paraBuf.trim()) {
          rawChunks.push({ sectionHeading: heading, text: paraBuf.trimEnd() });
          paraBuf = '';
        }
        let lineBuf = '';
        for (const l of para.split('\n')) {
          if (lineBuf && lineBuf.length + 1 + l.length > maxChars) {
            rawChunks.push({ sectionHeading: heading, text: lineBuf.trimEnd() });
            lineBuf = l;
          } else {
            lineBuf = lineBuf ? `${lineBuf}\n${l}` : l;
          }
        }
        if (lineBuf.trim()) rawChunks.push({ sectionHeading: heading, text: lineBuf.trimEnd() });
      } else if (paraBuf && paraBuf.length + 2 + para.length > maxChars) {
        rawChunks.push({ sectionHeading: heading, text: paraBuf.trimEnd() });
        paraBuf = para;
      } else {
        paraBuf = paraBuf ? `${paraBuf}\n\n${para}` : para;
      }
    }
    if (paraBuf.trim()) {
      rawChunks.push({ sectionHeading: heading, text: paraBuf.trimEnd() });
    }
  };

  for (const section of sections) {
    if (section.text.length <= maxChars) {
      if (buffer && buffer.length + 2 + section.text.length > maxChars) {
        flush();
      }
      if (!bufferHeading) bufferHeading = section.heading;
      buffer = buffer ? `${buffer}\n\n${section.text}` : section.text;
    } else {
      flush();
      pushOversized(section.heading, section.text);
    }
  }
  flush();

  return rawChunks.map((c, index) => ({ index, ...c }));
}
