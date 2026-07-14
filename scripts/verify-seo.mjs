import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://arcraiderscheats.co';
const distDir = join(process.cwd(), 'dist');
const issues = [];

function distPathToUrl(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');
  if (normalized === 'index.html') return `${SITE}/`;
  if (normalized === '404.html') return `${SITE}/404/`;
  const withoutFile = normalized.replace(/\/index\.html$/, '/');
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

const htmlFiles = readdirSync(distDir, { recursive: true }).filter(
  (file) => typeof file === 'string' && file.endsWith('.html'),
);

for (const relativePath of htmlFiles) {
  const html = readFileSync(join(distDir, relativePath), 'utf-8');
  const expectedUrl = distPathToUrl(relativePath);
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/)?.[1] ?? '';
  const hreflangLinks = [...html.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)];
  const allHreflangTags = [...html.matchAll(/<link rel="alternate" hreflang="[^"]*"[^>]*>/g)];
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
  const title = titleMatch?.[1] ?? '';
  const description = descMatch?.[1] ?? '';
  const isNoindex = robots.includes('noindex');

  if (!isNoindex) {
    if (!canonical) issues.push(`${relativePath}: missing canonical`);
    if (canonical !== expectedUrl) {
      issues.push(`${relativePath}: canonical ${canonical} !== expected ${expectedUrl}`);
    }
    if (ogUrl && ogUrl !== canonical) {
      issues.push(`${relativePath}: og:url !== canonical`);
    }
    if (title.length > 60) issues.push(`${relativePath}: title too long (${title.length})`);
    if (description.length < 120 || description.length > 160) {
      issues.push(`${relativePath}: description length ${description.length}`);
    }
    if (allHreflangTags.length > hreflangLinks.length) {
      issues.push(`${relativePath}: ${allHreflangTags.length - hreflangLinks.length} hreflang tag(s) missing href`);
    }
    if (hreflangLinks.length > 0 && !hreflangLinks.some((match) => match[2] === canonical)) {
      issues.push(`${relativePath}: canonical missing from hreflang alternates`);
    }
    if (hreflangLinks.length > 0 && !hreflangLinks.some((match) => match[1] === 'x-default')) {
      issues.push(`${relativePath}: missing x-default hreflang`);
    }
    if (canonical && !canonical.startsWith(SITE)) {
      issues.push(`${relativePath}: non-canonical host in canonical`);
    }
    if (canonical && !canonical.endsWith('/')) {
      issues.push(`${relativePath}: canonical missing trailing slash`);
    }
    for (const [, , href] of hreflangLinks) {
      if (!href.startsWith('https://') || !href.endsWith('/')) {
        issues.push(`${relativePath}: invalid hreflang href ${href}`);
      }
    }

    const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const [, rawJson] of jsonLdBlocks) {
      try {
        const parsed = JSON.parse(rawJson);
        walkSchemaNodes(parsed, (node) => {
          if (node.aggregateRating) {
            issues.push(`${relativePath}: JSON-LD contains unsupported aggregateRating`);
          }
          if (node.potentialAction?.['@type'] === 'SearchAction') {
            issues.push(`${relativePath}: JSON-LD contains invalid SearchAction`);
          }
          if (node['@type'] === 'SoftwareApplication' && !node.offers) {
            issues.push(`${relativePath}: SoftwareApplication missing offers`);
          }
          if (node['@type'] === 'Product' && !node.offers) {
            issues.push(`${relativePath}: Product missing offers`);
          }
        });
      } catch {
        issues.push(`${relativePath}: invalid JSON-LD block`);
      }
    }
  }

  const emptyAlts = [...html.matchAll(/<img\b[^>]*alt=""[^>]*>/g)];
  if (emptyAlts.length > 0) {
    issues.push(`${relativePath}: ${emptyAlts.length} empty alt attribute(s)`);
  }
}

const sitemapPath = join(process.cwd(), 'public/sitemap.xml');
const indexPath = join(process.cwd(), 'public/sitemap-index.xml');

if (!existsSync(sitemapPath)) {
  issues.push('public/sitemap.xml: missing');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf-8');
  const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    if (!loc.startsWith(SITE)) issues.push(`sitemap: non-HTTPS host ${loc}`);
    if (!loc.endsWith('/')) issues.push(`sitemap: loc missing trailing slash ${loc}`);
    if (loc.includes('/buy/')) issues.push(`sitemap: noindex buy page listed ${loc}`);
  }
  for (const locale of ['es', 'de', 'fr', 'pt', 'ru', 'ja', 'ko', 'zh', 'tr', 'pl', 'it']) {
    const home = `${SITE}/${locale}/`;
    if (!locs.includes(home)) issues.push(`sitemap: missing locale home ${home}`);
    if (locs.includes(`${SITE}/${locale}`)) issues.push(`sitemap: locale home without trailing slash ${SITE}/${locale}`);
  }
}

if (existsSync(indexPath)) {
  const index = readFileSync(indexPath, 'utf-8');
  if (index.includes('<url>')) issues.push('sitemap-index.xml: contains url entries instead of sitemap index');
  const indexLocs = [...index.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
  if (indexLocs.length !== 1 || indexLocs[0] !== `${SITE}/sitemap.xml`) {
    issues.push(`sitemap-index.xml: unexpected entries ${indexLocs.join(', ')}`);
  }
}

const redirectsPath = join(process.cwd(), 'public/_redirects');
if (existsSync(redirectsPath) && readFileSync(redirectsPath, 'utf-8').includes('/sitemap-index.xml')) {
  issues.push('_redirects: sitemap-index should not redirect to sitemap.xml');
}

if (issues.length > 0) {
  console.error('SEO verification issues:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`SEO verification passed for ${htmlFiles.length} HTML files.`);
