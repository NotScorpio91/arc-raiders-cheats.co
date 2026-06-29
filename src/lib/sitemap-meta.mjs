import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const SITE_URL = 'https://arcraiderscheats.co';

/** @type {Record<string, string>} */
export const LEGACY_BLOG_REDIRECTS = {
  '/blog/competitive-settings-guide/': '/blog/arc-raiders-cheats-guide/',
  '/blog/patch-1-2-meta-shift/': '/blog/arc-raiders-spoofer-guide/',
};

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match?.[1] ?? '';
}

function parseYamlValue(block, key) {
  const match = block.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match?.[1]?.trim() ?? null;
}

const IGDB = 'https://images.igdb.com/igdb/image/upload/t_screenshot_huge';
const IGDB_COVER = 'https://images.igdb.com/igdb/image/upload/t_1080p/co9rk1.jpg';

/** @type {Record<string, { url: string, title: string }>} */
export const PAGE_SITEMAP_IMAGES = {
  '/': { url: `${IGDB}/scii62.jpg`, title: 'ARC Raiders extraction gameplay' },
  '/cheats/': { url: `${IGDB}/sc11kk7.jpg`, title: 'ARC Raiders cheat tiers' },
  '/cheats/xray/': { url: `${IGDB}/scii62.jpg`, title: 'ARC Raiders Xray cheat' },
  '/cheats/pro/': { url: `${IGDB}/sc11kk8.jpg`, title: 'ARC Raiders Pro cheat' },
  '/cheats/private/': { url: `${IGDB}/sc11kk9.jpg`, title: 'ARC Raiders Private cheat' },
  '/products/': { url: `${IGDB}/sc11kka.jpg`, title: 'ARC Raiders products' },
  '/products/ugc/': { url: `${IGDB}/sc11kka.jpg`, title: 'ARC Raiders UGC tools' },
  '/products/cloud-dma/': { url: `${IGDB}/sc11kk9.jpg`, title: 'ARC Raiders Cloud DMA' },
  '/products/hwid-spoofer/': { url: `${IGDB}/sc11kkc.jpg`, title: 'ARC Raiders HWID Spoofer' },
  '/blog/': { url: `${IGDB}/sc11kk7.jpg`, title: 'ARC Raiders blog' },
  '/blog/arc-raiders-cheats-guide/': { url: `${IGDB}/scii62.jpg`, title: 'ARC Raiders cheats guide' },
  '/blog/arc-raiders-spoofer-guide/': { url: `${IGDB}/sc11kk9.jpg`, title: 'ARC Raiders spoofer guide' },
  '/blog/season-1-meta-analysis/': { url: `${IGDB}/sc11kk8.jpg`, title: 'ARC Raiders Season 1 meta' },
  '/about/': { url: `${IGDB}/sc11kk8.jpg`, title: 'About Arc Raiders Cheats' },
  '/faq/': { url: `${IGDB}/sc11kka.jpg`, title: 'Arc Raiders Cheats FAQ' },
  '/contact/': { url: `${IGDB}/sc11kk9.jpg`, title: 'Contact Arc Raiders Cheats' },
  '/privacy-policy/': { url: IGDB_COVER, title: 'ARC Raiders official cover art' },
  '/terms/': { url: IGDB_COVER, title: 'ARC Raiders official cover art' },
};

/** @param {string} pathname */
export function getPageSitemapImage(pathname) {
  const path = pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
  return PAGE_SITEMAP_IMAGES[path] ?? PAGE_SITEMAP_IMAGES['/'];
}

/** @returns {Map<string, { lastmod: string, coverImage?: string, coverImageAlt?: string }>} */
export function getBlogSitemapMeta() {
  /** @type {Map<string, { lastmod: string, coverImage?: string, coverImageAlt?: string }>} */
  const map = new Map();
  const dir = join(__dirname, '../content/blog');

  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;

    const slug = file.replace(/\.(mdx|md)$/, '');
    const block = parseFrontmatter(readFileSync(join(dir, file), 'utf-8'));
    const updated = parseYamlValue(block, 'updated');
    const pubDate = parseYamlValue(block, 'pubDate');
    const rawDate = updated || pubDate;

    if (!rawDate) continue;

    const lastmod = new Date(rawDate).toISOString();
    const coverImage = parseYamlValue(block, 'coverImage');
    const coverImageAlt = parseYamlValue(block, 'coverImageAlt');

    map.set(`${SITE_URL}/blog/${slug}/`, {
      lastmod,
      ...(coverImage ? { coverImage, coverImageAlt: coverImageAlt ?? undefined } : {}),
    });
  }

  return map;
}

/** @param {string} pathname */
export function getPagePriority(pathname) {
  const path = pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;

  if (path === '/') return 1;
  if (path === '/cheats/' || path === '/products/') return 0.9;
  if (path === '/blog/') return 0.85;
  if (path.startsWith('/blog/')) return 0.8;
  if (path.startsWith('/cheats/') || path.startsWith('/products/')) return 0.75;
  return 0.6;
}
