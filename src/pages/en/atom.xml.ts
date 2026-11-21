import type { APIContext } from 'astro';
import { buildRssFeed } from '../../lib/feed';

export function GET(context: APIContext) {
  return buildRssFeed(context, 'en');
}
