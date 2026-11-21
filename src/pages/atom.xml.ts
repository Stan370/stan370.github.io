import type { APIContext } from 'astro';
import { buildRssFeed } from '../lib/feed';

// Kept at /atom.xml so existing Hexo feed subscribers keep working (served as RSS 2.0).
export function GET(context: APIContext) {
  return buildRssFeed(context, 'zh');
}
