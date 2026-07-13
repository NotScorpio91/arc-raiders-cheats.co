/**
 * Converts AI-generated PNG blog images to WebP (1280x720 + 640 thumb).
 * Drop PNGs into public/images/blog/{slug}/{name}.png then run:
 *   node scripts/process-blog-ai-images.mjs
 *   node scripts/process-blog-ai-images.mjs --slug arc-raiders-esp-guide
 */
import { access, readdir, unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogRoot = join(root, 'public', 'images', 'blog');

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function processPng(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  const thumbPath = webpPath.replace(/\.webp$/, '-640.webp');

  await sharp(pngPath)
    .resize(1280, 720, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(webpPath);

  await sharp(pngPath)
    .resize(640, 360, { fit: 'cover', position: 'centre' })
    .webp({ quality: 74 })
    .toFile(thumbPath);

  await unlink(pngPath);
  return { webpPath, thumbPath };
}

const slugFilter = process.argv.includes('--slug')
  ? process.argv[process.argv.indexOf('--slug') + 1]
  : null;

const slugs = slugFilter
  ? [slugFilter]
  : await readdir(blogRoot, { withFileTypes: true }).then((e) => e.filter((d) => d.isDirectory()).map((d) => d.name));

let count = 0;
for (const slug of slugs) {
  const dir = join(blogRoot, slug);
  if (!(await exists(dir))) continue;

  const files = (await readdir(dir)).filter((f) => f.endsWith('.png'));
  for (const file of files) {
    const result = await processPng(join(dir, file));
    console.log(`Processed ${slug}/${file} -> ${result.webpPath.split('blog\\')[1] ?? result.webpPath}`);
    count++;
  }
}

if (count === 0) {
  console.log('No PNG files found to process.');
} else {
  console.log(`Done — ${count} image(s) converted to WebP.`);
}
