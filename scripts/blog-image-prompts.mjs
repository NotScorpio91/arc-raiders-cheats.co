/**
 * Builds AI image prompts from blog-image-manifest.json.
 * Usage:
 *   node scripts/blog-image-prompts.mjs              # list all entries
 *   node scripts/blog-image-prompts.mjs --batch 1    # batch 1 slugs only
 *   node scripts/blog-image-prompts.mjs --json         # full JSON output
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = join(root, 'scripts', 'blog-image-manifest.json');

const STYLE_PREFIX =
  'Cinematic Arc Raiders extraction shooter artwork, 16:9 widescreen, dark industrial surface zone with ruined factories and teal-cyan atmospheric lighting, photorealistic third-person game-capture style, moody rain and dust, no text, no logos, no watermark, no UI overlays: ';

const BATCHES = [
  ['arc-raiders-esp-guide', 'arc-raiders-loot-esp-guide', 'arc-raiders-aimbot-guide', 'arc-raiders-triggerbot-tips'],
  ['arc-raiders-2d-radar-guide', 'arc-raiders-skeleton-esp', 'arc-raiders-xray-tier-review', 'arc-raiders-pro-tier-review', 'arc-raiders-private-viper-guide'],
  ['arc-raiders-extraction-esp', 'arc-raiders-pvp-positioning-esp', 'arc-raiders-arc-enemy-esp', 'arc-raiders-best-cheat-features'],
  ['arc-raiders-cheat-settings-low-profile', 'arc-raiders-stream-safe-overlays', 'arc-raiders-eac-and-cheats', 'arc-raiders-cheat-setup-checklist'],
  ['arc-raiders-cloud-dma-with-cheats', 'arc-raiders-hwid-spoofer-with-cheats', 'arc-raiders-solo-vs-squad-cheats', 'arc-raiders-season-patch-survival'],
  ['arc-raiders-undetected-myths', 'arc-raiders-cheats-guide', 'arc-raiders-spoofer-guide', 'season-1-meta-analysis'],
];

function buildPrompt(entry) {
  return `${STYLE_PREFIX}${entry.alt}`;
}

function enrichEntry(entry) {
  const base = entry.filename.replace(/\.webp$/i, '');
  return {
    ...entry,
    prompt: buildPrompt(entry),
    outputPath: join('public', 'images', 'blog', entry.slug, entry.filename),
    stagingPng: join('public', 'images', 'blog', entry.slug, `${base}.png`),
  };
}

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const entries = manifest.map(enrichEntry);

const args = process.argv.slice(2);
const batchArg = args.indexOf('--batch');
const jsonMode = args.includes('--json');

if (batchArg !== -1) {
  const batchNum = Number(args[batchArg + 1] ?? 1);
  const slugs = BATCHES[batchNum - 1];
  if (!slugs) {
    console.error(`Invalid batch ${batchNum}. Use 1-${BATCHES.length}.`);
    process.exit(1);
  }
  const filtered = entries.filter((e) => slugs.includes(e.slug));
  if (jsonMode) {
    console.log(JSON.stringify(filtered, null, 2));
  } else {
    console.log(`Batch ${batchNum}: ${filtered.length} images\n`);
    for (const e of filtered) {
      console.log(`--- ${e.slug}/${e.filename}`);
      console.log(e.prompt);
      console.log(`-> ${e.outputPath}\n`);
    }
  }
} else if (jsonMode) {
  const outPath = join(root, 'scripts', 'blog-image-prompts.json');
  await writeFile(outPath, JSON.stringify({ batches: BATCHES, entries }, null, 2));
  console.log(`Wrote ${entries.length} prompts to scripts/blog-image-prompts.json`);
} else {
  console.log(`${entries.length} images across ${BATCHES.length} batches:`);
  BATCHES.forEach((slugs, i) => {
    const count = entries.filter((e) => slugs.includes(e.slug)).length;
    console.log(`  Batch ${i + 1}: ${count} images — ${slugs.join(', ')}`);
  });
}
