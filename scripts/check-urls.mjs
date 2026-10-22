// Fails the build if any URL the old Hexo site served is missing from dist/.
// scripts/legacy-urls.txt was captured from the Hexo build before the migration.
// Starting a fresh blog from this template? Empty legacy-urls.txt (or delete it).
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const list = new URL('./legacy-urls.txt', import.meta.url);
const urls = (existsSync(list) ? readFileSync(list, 'utf8') : '')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

if (!urls.length) {
  console.log('• No legacy URLs to check (scripts/legacy-urls.txt is empty)');
  process.exit(0);
}

const missing = urls.filter((url) => {
  const path = decodeURIComponent(url);
  const file = path.endsWith('/') ? join(dist, path, 'index.html') : join(dist, path);
  return !existsSync(file);
});

if (missing.length) {
  console.error(`✗ ${missing.length}/${urls.length} legacy URLs missing from dist/:`);
  for (const url of missing) console.error(`  ${url}  (${decodeURIComponent(url)})`);
  process.exit(1);
}
console.log(`✓ All ${urls.length} legacy URLs present in dist/`);
