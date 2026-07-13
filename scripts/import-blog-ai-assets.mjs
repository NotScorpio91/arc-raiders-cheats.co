/**
 * Moves AI PNGs from Cursor assets/ into public/images/blog/{slug}/ as WebP.
 * Supports naming: blog__{slug}__{base}.png OR blog-{slug}-{base}.png
 */
import { access, mkdir, readdir, readFile, unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogRoot = join(root, 'public', 'images', 'blog');
const manifest = JSON.parse(
  await readFile(join(root, 'scripts', 'blog-image-manifest.json'), 'utf8'),
);

const ASSET_DIRS = [
  join(root, 'assets'),
  join(dirname(root), '..', '..', '.cursor', 'projects', 'd-Data-Projects-Astro-arc-raiders-cheats-co', 'assets'),
  'C:/Users/nonok/.cursor/projects/d-Data-Projects-Astro-arc-raiders-cheats-co/assets',
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function resolveEntry(filename) {
  if (!filename.endsWith('.png')) return null;

  const double = filename.match(/^blog__(.+)__(.+)\.png$/);
  if (double) {
    return { slug: double[1], base: double[2] };
  }

  const single = filename.match(/^blog-(.+)\.png$/);
  if (!single) return null;

  const body = single[1];
  for (const entry of manifest) {
    const base = entry.filename.replace(/\.webp$/i, '');
    if (body === `${entry.slug}-${base}` || body.endsWith(`-${base}`) && body.slice(0, -(base.length + 1)) === entry.slug) {
      return { slug: entry.slug, base };
    }
  }

  return null;
}

async function convertPng(pngPath, webpPath, thumbPath) {
  await sharp(pngPath)
    .resize(1280, 720, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(webpPath);

  await sharp(pngPath)
    .resize(640, 360, { fit: 'cover', position: 'centre' })
    .webp({ quality: 74 })
    .toFile(thumbPath);
}

let count = 0;
const seen = new Set();

for (const assetsDir of ASSET_DIRS) {
  if (!(await exists(assetsDir))) continue;

  const files = await readdir(assetsDir);
  for (const file of files) {
    if (!file.startsWith('blog') || seen.has(file)) continue;

    const resolved = resolveEntry(file);
    if (!resolved) continue;

    const { slug, base } = resolved;
    const slugDir = join(blogRoot, slug);
    await mkdir(slugDir, { recursive: true });

    const pngPath = join(assetsDir, file);
    const webpPath = join(slugDir, `${base}.webp`);
    const thumbPath = join(slugDir, `${base}-640.webp`);

    await convertPng(pngPath, webpPath, thumbPath);
    await unlink(pngPath);
    seen.add(file);
    console.log(`Imported ${slug}/${base}.webp`);
    count++;
  }
}

console.log(count ? `Done — ${count} image(s) imported.` : 'No blog PNG files found to import.');
