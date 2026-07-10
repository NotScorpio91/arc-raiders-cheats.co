import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSitemapXml } from '../src/lib/build-sitemap.mjs';

const sitemap = buildSitemapXml();

writeFileSync(join(process.cwd(), 'public/sitemap-index.xml'), sitemap);

console.log('Generated static sitemap-index.xml');
