import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSitemapXml } from '../src/lib/build-sitemap.mjs';
import { SITE_URL } from '../src/lib/sitemap-meta.mjs';

const sitemap = buildSitemapXml();

writeFileSync(join(process.cwd(), 'public/sitemap.xml'), sitemap);

const sitemapIndex = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <sitemap>',
  `    <loc>${SITE_URL}/sitemap.xml</loc>`,
  '  </sitemap>',
  '</sitemapindex>',
].join('\n');

writeFileSync(join(process.cwd(), 'public/sitemap-index.xml'), sitemapIndex);

console.log('Generated public/sitemap.xml and sitemap-index.xml');
