#!/usr/bin/env node
/**
 * Offline Incremental LLM Translation CLI for StanBlog (Astro SSG + Git-committed sidecars).
 *
 * Design principles:
 * - Co-located sidecars (`Foo.en.md` / `Foo.zh.md`) live next to the source file so relative
 *   images (`./image-1.png`) work with zero duplication.
 * - AST-level protection freezes fenced code blocks, inline code, KaTeX math, raw HTML, and
 *   image/link URLs behind placeholders before calling the LLM, then verifies 100% round-trip
 *   placeholder integrity.
 * - Heading-aligned semantic chunking splits monolithic files (up to 300 KB+) cleanly without
 *   truncation or broken code blocks.
 * - Content-hash (`sourceHash`) incremental caching skips unchanged files automatically.
 *
 * Usage:
 *   npm run translate:dry                                   # Inspect plan offline (no API key)
 *   npm run translate -- --file src/content/posts/DB.md     # Translate a single file
 *   npm run translate -- --to en --limit 5                  # Translate up to 5 Chinese posts
 *   npm run translate -- --collection notes --max-chars 4500
 */

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { GoogleGenAI, Type } from '@google/genai';
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
} from './lib/md-ast.mjs';

const ROOT = resolve(new URL('..', import.meta.url).pathname);
const CONTENT_DIRS = {
  posts: join(ROOT, 'src/content/posts'),
  notes: join(ROOT, 'src/content/notes'),
};

function parseArgs(argv) {
  const opts = {
    dryRun: false,
    force: false,
    to: 'auto', // auto | en | zh
    collection: 'all', // all | posts | notes
    file: null,
    limit: Infinity,
    maxChars: 5500,
    model: process.env.GEMINI_MODEL || 'gemini-4-hydrogen',
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--dry-run') opts.dryRun = true;
    else if (arg === '--force') opts.force = true;
    else if (arg === '--to') opts.to = argv[++i] ?? 'auto';
    else if (arg === '--collection') opts.collection = argv[++i] ?? 'all';
    else if (arg === '--file') opts.file = argv[++i] ?? null;
    else if (arg === '--limit') opts.limit = Number(argv[++i] ?? Infinity);
    else if (arg === '--max-chars') opts.maxChars = Number(argv[++i] ?? 5500);
    else if (arg === '--model') opts.model = argv[++i] ?? opts.model;
    else if (arg === '--help' || arg === '-h') {
      console.log(`Usage: node scripts/translate.mjs [options]
  --dry-run             Analyze files & chunk plans without calling the LLM
  --file <path>         Translate a single Markdown file
  --to <auto|en|zh>     Target locale (default: auto)
  --collection <all|posts|notes>
  --limit <N>           Max files to translate in this run
  --max-chars <N>       Max characters per AST chunk (default: 5500)
  --model <name>        Gemini model name (default: gemini-4-hydrogen)
  --force               Re-translate even when sourceHash matches`);
      process.exit(0);
    }
  }
  return opts;
}

function walkMarkdown(dir) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walkMarkdown(full));
    else if (entry.endsWith('.md') && !isSidecarFile(entry)) results.push(full);
  }
  return results.sort();
}

function collectFiles(opts) {
  if (opts.file) {
    const abs = resolve(ROOT, opts.file);
    if (!existsSync(abs)) throw new Error(`File not found: ${opts.file}`);
    if (isSidecarFile(abs)) throw new Error(`Refusing to translate sidecar file directly: ${opts.file}`);
    return [abs];
  }
  const files = [];
  if (opts.collection === 'all' || opts.collection === 'posts') files.push(...walkMarkdown(CONTENT_DIRS.posts));
  if (opts.collection === 'all' || opts.collection === 'notes') files.push(...walkMarkdown(CONTENT_DIRS.notes));
  return files;
}

async function withRetry(fn, label, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const waitMs = 1500 * 2 ** i;
      console.warn(`  [retry ${i + 1}/${attempts}] ${label}: ${err.message} (waiting ${waitMs}ms)`);
      await new Promise((r) => setTimeout(r, waitMs));
    }
  }
  throw lastErr;
}

async function translateFrontmatterFields(ai, model, fields, targetLocale) {
  const entries = Object.entries(fields).filter(([, v]) => typeof v === 'string' && v.trim());
  if (!entries.length) return {};

  const targetName = targetLocale === 'en' ? 'idiomatic technical English' : 'natural, idiomatic Simplified Chinese';
  const prompt = `Translate the following blog metadata fields into ${targetName}.
Preserve technical product names, acronyms (Go, Rust, LLM, MCP, TUN, DNS, KMP, iOS, Git), and formatting.
Input JSON:
${JSON.stringify(Object.fromEntries(entries), null, 2)}`;

  const properties = {};
  for (const [k] of entries) {
    properties[k] = { type: Type.STRING };
  }

  const res = await withRetry(
    () =>
      ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction:
            'You are a senior bilingual technical editor translating software engineering blog metadata. Return only valid JSON matching the schema.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties,
          },
        },
      }),
    'frontmatter',
  );

  return JSON.parse((res.text ?? '{}').trim());
}

async function translateChunk(ai, model, chunk, targetLocale, titleContext) {
  const targetName = targetLocale === 'en' ? 'idiomatic technical English' : 'natural, idiomatic Simplified Chinese';
  const systemInstruction = `You are a senior software engineer and bilingual technical translator.
Translate the given Markdown excerpt into ${targetName}.
CRITICAL RULES:
1. Preserve ALL placeholders like [[[CODE_BLOCK_0]]], [[[INLINE_CODE_3]]], [[[MATH_BLOCK_1]]], [[[INLINE_MATH_2]]], [[[HTML_TAG_4]]], [[[URL_5]]] VERBATIM without altering characters, brackets, numbers, or spacing around them.
2. Preserve Markdown structure (headings #, lists, tables, blockquotes, bold/italic emphasis).
3. Keep well-known programming terms, library names, CLI commands, and identifiers accurate and natural for engineers.
4. Return ONLY the translated Markdown excerpt with no extra commentary or outer code fences.`;

  const userPrompt = `Article title: ${titleContext || 'Untitled'}
${chunk.sectionHeading ? `Current section: ${chunk.sectionHeading}\n` : ''}
Translate the following Markdown chunk:

${chunk.text}`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await withRetry(
      () =>
        ai.models.generateContent({
          model,
          contents: userPrompt,
          config: { systemInstruction },
        }),
      `chunk #${chunk.index + 1}`,
    );

    const output = (res.text ?? '').trim();
    const check = verifyProtectedTokens(chunk.text, output);
    if (check.ok) return output;

    console.warn(
      `  [integrity warning] chunk #${chunk.index + 1} attempt ${attempt}: missing=${check.missing.join(',')} unexpected=${check.unexpected.join(',')}`,
    );
    if (attempt === 3) {
      throw new Error(
        `Placeholder integrity failed on chunk #${chunk.index + 1} after 3 attempts (missing: ${check.missing.join(', ')})`,
      );
    }
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const files = collectFiles(opts);

  let ai = null;
  if (!opts.dryRun) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('Error: GEMINI_API_KEY is not set. Run with --dry-run to inspect the translation plan offline.');
      process.exit(1);
    }
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
    });
  }

  let processed = 0;
  let skippedUpToDate = 0;
  let plannedTotal = 0;
  let totalChunks = 0;

  for (const filePath of files) {
    const rel = relative(ROOT, filePath);
    const raw = readFileSync(filePath, 'utf8');
    const sourceHash = computeSourceHash(raw);
    const { hasFrontmatter, data, body } = splitFrontmatter(raw);
    const detection = detectContentLanguage(body, typeof data.lang === 'string' ? data.lang : undefined);
    const targets = resolveTargetLocales(detection.lang, opts.to);

    for (const targetLocale of targets) {
      const outPath = sidecarPathFor(filePath, targetLocale);
      const outRel = relative(ROOT, outPath);

      if (!opts.force && existsSync(outPath)) {
        const existing = splitFrontmatter(readFileSync(outPath, 'utf8'));
        if (existing.data.sourceHash === sourceHash) {
          skippedUpToDate++;
          if (opts.dryRun) {
            console.log(`[skip:up-to-date] ${rel} -> ${outRel} (${detection.lang}, hash=${sourceHash})`);
          }
          continue;
        }
      }

      const { protectedText, tokens, stats } = protectMarkdown(body);
      const chunks = chunkMarkdown(protectedText, opts.maxChars);
      plannedTotal++;
      totalChunks += chunks.length;

      if (opts.dryRun) {
        const kb = (Buffer.byteLength(raw, 'utf8') / 1024).toFixed(1);
        console.log(
          `[plan:${detection.lang}->${targetLocale}] ${rel} (${kb} KB) -> ${outRel} | chunks=${chunks.length} | frozen(code=${stats.codeBlocks}, math=${stats.mathBlocks}, urls=${stats.urls})`,
        );
        continue;
      }

      if (processed >= opts.limit) break;

      console.log(
        `\n[translate:${detection.lang}->${targetLocale}] ${rel} -> ${outRel} (${chunks.length} chunk${chunks.length > 1 ? 's' : ''})`,
      );

      const translatedMeta = await translateFrontmatterFields(
        ai,
        opts.model,
        {
          title: data.title,
          description: data.description,
          summary: data.summary,
        },
        targetLocale,
      );

      const translatedParts = [];
      for (const chunk of chunks) {
        process.stdout.write(`  chunk ${chunk.index + 1}/${chunks.length}...`);
        const translatedChunk = await translateChunk(ai, opts.model, chunk, targetLocale, translatedMeta.title || data.title || rel);
        translatedParts.push(translatedChunk);
        process.stdout.write(' ok\n');
      }

      const restoredBody = restoreMarkdown(translatedParts.join('\n\n'), tokens);
      const nextFrontmatter = {
        ...(hasFrontmatter ? data : {}),
        ...translatedMeta,
        lang: targetLocale === 'en' ? 'en' : 'zh-CN',
        sourceHash,
        translatedFrom: detection.lang,
        translationStatus: 'auto',
      };

      writeFileSync(outPath, serializeMarkdown(nextFrontmatter, restoredBody), 'utf8');
      processed++;
      console.log(`  ✓ wrote ${outRel} (hash=${sourceHash})`);
    }

    if (!opts.dryRun && processed >= opts.limit) break;
  }

  console.log(
    `\nSummary: scanned=${files.length} source files | up-to-date=${skippedUpToDate} | ${
      opts.dryRun ? `planned=${plannedTotal} (${totalChunks} total chunks)` : `translated=${processed}`
    }`,
  );
}

main().catch((err) => {
  console.error(`\nTranslation failed: ${err.message}`);
  process.exit(1);
});
