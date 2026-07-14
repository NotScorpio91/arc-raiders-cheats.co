import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://arcraiderscheats.co';
const LOCALES = ['en', 'es', 'de', 'fr', 'pt', 'ru', 'ja', 'ko', 'zh', 'tr', 'pl', 'it'];
const EXPECTED_HREFLANG_COUNT = LOCALES.length + 1; // + x-default

const distDir = join(process.cwd(), 'dist');
const issues = [];

function distPathToUrl(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  if (normalized === 'index.html') return `${SITE}/`;
  if (normalized === '404.html') return `${SITE}/404/`;
  const withoutFile = normalized.replace(/\/index\.html$/, '/').replace(/index\.html$/, '/');
  return `${SITE}/${withoutFile}`;
}

function walkSchemaNodes(node, visit) {
  if (!node || typeof node !== 'object') return;
  visit(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const item of value) walkSchemaNodes(item, visit);
    } else if (value && typeof value === 'object') {
      walkSchemaNodes(value, visit);
    }
  }
}

function auditHtml(relativePath) {
  const html = readFileSync(join(distDir, relativePath), 'utf-8');
  const expectedUrl = distPathToUrl(relativePath);
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/)?.[1] ?? '';
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
  const isNoindex = robots.includes('noindex');

  const hreflangWithHref = [...html.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)];
  const allHreflangTags = [...html.matchAll(/<link rel="alternate" hreflang="[^"]*"[^>]*>/g)];

  if (!isNoindex) {
    if (!canonical) issues.push(`${relativePath}: missing canonical`);
    if (canonical !== expectedUrl) {
      issues.push(`${relativePath}: canonical ${canonical} !== expected ${expectedUrl}`);
    }
    if (ogUrl && ogUrl !== canonical) {
      issues.push(`${relativePath}: og:url (${ogUrl}) !== canonical (${canonical})`);
    }
    if (canonical.startsWith('http://')) issues.push(`${relativePath}: canonical uses HTTP`);
    if (canonical && !canonical.endsWith('/')) issues.push(`${relativePath}: canonical missing trailing slash`);

    if (allHreflangTags.length > hreflangWithHref.length) {
      issues.push(`${relativePath}: ${allHreflangTags.length - hreflangWithHref.length} hreflang tag(s) missing href`);
    }
    if (hreflangWithHref.length > 0 && !hreflangWithHref.some((m) => m[2] === canonical)) {
      issues.push(`${relativePath}: canonical not in hreflang alternates`);
    }
    const xDefault = hreflangWithHref.find((m) => m[1] === 'x-default');
    if (hreflangWithHref.length > 0 && !xDefault) {
      issues.push(`${relativePath}: missing x-default hreflang`);
    }
    if (xDefault && !xDefault[2].startsWith(`${SITE}/`) && xDefault[2] !== `${SITE}/`) {
      issues.push(`${relativePath}: x-default should point to English URL`);
    }

    const hreflangCodes = hreflangWithHref.map((m) => m[1]).filter((c) => c !== 'x-default');
    const dupes = hreflangCodes.filter((c, i) => hreflangCodes.indexOf(c) !== i);
    if (dupes.length) issues.push(`${relativePath}: duplicate hreflang codes: ${[...new Set(dupes)].join(', ')}`);

    for (const [, , href] of hreflangWithHref) {
      if (!href.startsWith('https://')) issues.push(`${relativePath}: hreflang href not HTTPS: ${href}`);
      if (!href.endsWith('/')) issues.push(`${relativePath}: hreflang href missing trailing slash: ${href}`);
    }

    const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const [, rawJson] of jsonLdBlocks) {
      try {
        const parsed = JSON.parse(rawJson);
        walkSchemaNodes(parsed, (node) => {
          if (node['@type'] === 'SoftwareApplication' && !node.offers) {
            issues.push(`${relativePath}: nested SoftwareApplication missing offers (${node.name ?? 'unnamed'})`);
          }
          if (node['@type'] === 'Product' && !node.offers) {
            issues.push(`${relativePath}: Product missing offers (${node.name ?? 'unnamed'})`);
          }
        });
      } catch {
        issues.push(`${relativePath}: invalid JSON-LD`);
      }
    }
  }
}

function auditSitemap() {
  const sitemapPath = join(process.cwd(), 'public/sitemap.xml');
  const indexPath = join(process.cwd(), 'public/sitemap-index.xml');
  if (!existsSync(sitemapPath)) {
    issues.push('public/sitemap.xml: missing');
    return;
  }

  const sitemap = readFileSync(sitemapPath, 'utf-8');
  const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);

  for (const loc of locs) {
    if (!loc.startsWith('https://arcraiderscheats.co')) {
      issues.push(`sitemap: non-HTTPS loc ${loc}`);
    }
    if (!loc.endsWith('/')) {
      issues.push(`sitemap: loc missing trailing slash ${loc}`);
    }
    if (loc.includes('/buy/')) {
      issues.push(`sitemap: noindex buy page in sitemap ${loc}`);
    }
  }

  const localeHomes = LOCALES.filter((l) => l !== 'en').map((l) => `${SITE}/${l}/`);
  for (const home of localeHomes) {
    if (!locs.includes(home)) {
      issues.push(`sitemap: missing locale home ${home}`);
    }
    const badHome = `${SITE}/${home.split('/').filter(Boolean).pop()}`;
    if (locs.includes(badHome)) {
      issues.push(`sitemap: locale home without trailing slash ${badHome}`);
    }
  }

  if (existsSync(indexPath)) {
    const index = readFileSync(indexPath, 'utf-8');
    if (index.includes('<url>')) {
      issues.push('sitemap-index.xml: contains <url> entries (should be sitemap index only)');
    }
    if (!index.includes('<sitemapindex')) {
      issues.push('sitemap-index.xml: not a valid sitemap index');
    }
    const indexLocs = [...index.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
    if (indexLocs.length !== 1 || indexLocs[0] !== `${SITE}/sitemap.xml`) {
      issues.push(`sitemap-index.xml: unexpected sitemap references: ${indexLocs.join(', ')}`);
    }
    const overlap = locs.filter((loc) => index.includes(`<loc>${loc}</loc>`));
    if (overlap.length > 0) {
      issues.push(`sitemap-index.xml: duplicates ${overlap.length} URLs from sitemap.xml`);
    }
  }

  // Spot-check: sitemap locs for indexable pages should match built canonicals
  const sampleLocs = [
    `${SITE}/`,
    `${SITE}/es/`,
    `${SITE}/es/cheats/`,
    `${SITE}/de/blog/arc-raiders-esp-guide/`,
    `${SITE}/products/xray/`.replace('/products/xray/', '/cheats/xray/'),
    `${SITE}/cheats/xray/`,
  ].filter(Boolean);

  for (const loc of sampleLocs) {
    if (!locs.includes(loc)) issues.push(`sitemap: missing expected URL ${loc}`);
  }
}

// Audit HTML
const htmlFiles = readdirSync(distDir, { recursive: true }).filter(
  (f) => typeof f === 'string' && f.endsWith('.html'),
);

for (const file of htmlFiles) auditHtml(file);
auditSitemap();

// Audit redirects
const redirectsPath = join(process.cwd(), 'public/_redirects');
if (existsSync(redirectsPath)) {
  const redirects = readFileSync(redirectsPath, 'utf-8');
  if (redirects.includes('/sitemap-index.xml')) {
    issues.push('_redirects: sitemap-index should not redirect to sitemap.xml');
  }
}

console.log(`Audited ${htmlFiles.length} HTML files + sitemap/redirects`);
if (issues.length > 0) {
  console.error(`\n${issues.length} issue(s) found:`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}
console.log('Full SEO audit passed — no issues found.');
