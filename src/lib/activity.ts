import { execSync } from 'node:child_process';
import { site } from '../site.config';
import { CJK, dateParts, plainText, type Post } from './posts';

export interface Day {
  date: string; // YYYY-MM-DD
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
  posts: string[]; // titles of posts published that day
}

export interface Activity {
  days: Day[];
  total: number;
  source: 'github' | 'git';
}

const iso = (d: Date) => {
  const { year, month, day } = dateParts(d);
  return `${year}-${month}-${day}`;
};

/** GitHub's public contribution calendar (same data as the profile graph), no token needed. */
async function fromGitHub(user: string): Promise<Omit<Day, 'posts'>[] | undefined> {
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest', 'User-Agent': 'stanblog-build' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return;
    const html = await res.text();

    const tips = new Map<string, number>();
    for (const [, id, text] of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)</g)) {
      const n = text.trim().match(/^(\d[\d,]*)\s+contribution/);
      tips.set(id, n ? Number(n[1].replace(/,/g, '')) : 0);
    }
    const days = [...html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)].map(([td]) => {
      const date = td.match(/data-date="([^"]+)"/)![1];
      const id = td.match(/\bid="([^"]+)"/)?.[1] ?? '';
      const level = Number(td.match(/data-level="(\d)"/)?.[1] ?? 0) as Day['level'];
      return { date, level, count: tips.get(id) ?? (level > 0 ? 1 : 0) };
    });
    return days.length > 300 ? days.sort((a, b) => a.date.localeCompare(b.date)) : undefined;
  } catch {
    return;
  }
}

/** Fallback: this repo's own commit history, bucketed into GitHub-style levels. */
function fromGit(start: Date, end: Date): Omit<Day, 'posts'>[] {
  const counts = new Map<string, number>();
  try {
    const log = execSync(`git log --since=${iso(start)} --format=%ad --date=short`, { encoding: 'utf8' });
    for (const d of log.split('\n').filter(Boolean)) counts.set(d, (counts.get(d) ?? 0) + 1);
  } catch {
    /* not a git checkout — posts alone will drive the map */
  }
  const max = Math.max(1, ...counts.values());
  const days: Omit<Day, 'posts'>[] = [];
  for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    const count = counts.get(iso(d)) ?? 0;
    const level = (count === 0 ? 0 : Math.min(4, Math.ceil((count / max) * 4))) as Day['level'];
    days.push({ date: iso(d), level, count });
  }
  return days;
}

let cached: Promise<Activity> | undefined;

/** One year of activity (Sunday-aligned weeks), with blog posts marked on their publish day. */
export function getActivity(posts: Post[]): Promise<Activity> {
  return (cached ??= (async () => {
    const end = new Date();
    const start = new Date(Date.UTC(end.getUTCFullYear() - 1, end.getUTCMonth(), end.getUTCDate()));
    start.setUTCDate(start.getUTCDate() - start.getUTCDay()); // back to Sunday

    const gh = await fromGitHub(site.githubUser);
    const base = gh ?? fromGit(start, end);
    const byDate = new Map<string, string[]>();
    for (const p of posts) {
      const d = iso(p.data.date);
      byDate.set(d, [...(byDate.get(d) ?? []), p.data.title]);
    }
    const days = base.map((d) => ({ ...d, posts: byDate.get(d.date) ?? [] }));
    return { days, total: days.reduce((s, d) => s + d.count, 0), source: gh ? 'github' : 'git' } as Activity;
  })());
}


/** Headline numbers for the sidebar card. */
export function blogStats(posts: Post[]) {
  let words = 0;
  for (const p of posts) {
    const text = plainText(p.body);
    words += (text.match(CJK)?.length ?? 0) + (text.replace(CJK, ' ').match(/[A-Za-z0-9]+/g)?.length ?? 0);
  }
  const first = posts.at(-1)?.data.date ?? new Date();
  const latest = posts[0]?.data.date ?? new Date();
  const days = Math.floor((Date.now() - first.valueOf()) / 86_400_000);
  return {
    posts: posts.length,
    tags: new Set(posts.flatMap((p) => p.data.tags)).size,
    categories: new Set(posts.flatMap((p) => p.data.categories)).size,
    words,
    days,
    latest,
  };
}

/** 123456 → "12.3 万" */
export const formatWords = (n: number) => (n >= 10_000 ? `${(n / 10_000).toFixed(1)} 万` : n.toLocaleString('zh-CN'));
