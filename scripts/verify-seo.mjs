import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const htmlFiles = readdirSync(distDir, { recursive: true }).filter(
  (file) => typeof file === 'string' && file.endsWith('.html'),
);

const issues = [];

for (const relativePath of htmlFiles) {
  const filePath = join(distDir, relativePath);
  const html = readFileSync(filePath, 'utf-8');
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const hreflangMatch = html.match(/<link rel="alternate" hreflang="en" href="([^"]*)"/);
  const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"/);
  const title = titleMatch?.[1] ?? '';
  const description = descMatch?.[1] ?? '';
  const canonical = canonicalMatch?.[1] ?? '';
  const hreflang = hreflangMatch?.[1] ?? '';

  const robots = robotsMatch?.[1] ?? '';
  const isNoindex = robots.includes('noindex');

  if (!isNoindex && title.length > 60) {
    issues.push(`${relativePath}: title too long (${title.length})`);
  }
  if (!isNoindex && (description.length < 120 || description.length > 160)) {
    issues.push(`${relativePath}: description length ${description.length}`);
  }
  if (canonical && hreflang && canonical !== hreflang) {
    issues.push(`${relativePath}: canonical/hreflang mismatch`);
  }
  if (!robotsMatch?.[1]?.includes('noindex') && !canonical.startsWith('https://arcraiderscheats.co')) {
    issues.push(`${relativePath}: non-canonical host in canonical`);
  }

  const emptyAlts = [...html.matchAll(/<img\b[^>]*alt=""[^>]*>/g)];
  if (emptyAlts.length > 0) {
    issues.push(`${relativePath}: ${emptyAlts.length} empty alt attribute(s)`);
  }

  if (!isNoindex) {
    const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const [, rawJson] of jsonLdBlocks) {
      try {
        const parsed = JSON.parse(rawJson);
        const nodes = parsed['@graph'] ?? [parsed];
        for (const node of nodes) {
          if (node.aggregateRating) {
            issues.push(`${relativePath}: JSON-LD contains unsupported aggregateRating`);
          }
          if (node.potentialAction?.['@type'] === 'SearchAction') {
            issues.push(`${relativePath}: JSON-LD contains invalid SearchAction`);
          }
          if (node['@type'] === 'Product' || node['@type'] === 'SoftwareApplication') {
            const offers = node.offers;
            const offerList = offers?.['@type'] === 'AggregateOffer' ? offers.offers : offers ? [offers] : [];
            if (offerList.length === 0) {
              issues.push(`${relativePath}: commercial JSON-LD missing offers`);
            } else {
              for (const offer of offerList) {
                if (!offer.price || !offer.priceCurrency) {
                  issues.push(`${relativePath}: commercial JSON-LD offer missing price/currency`);
                }
              }
            }
          }
        }
      } catch {
        issues.push(`${relativePath}: invalid JSON-LD block`);
      }
    }
  }
}

if (issues.length > 0) {
  console.error('SEO verification issues:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`SEO verification passed for ${htmlFiles.length} HTML files.`);
