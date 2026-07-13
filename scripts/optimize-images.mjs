import { access, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = join(root, 'assets', 'source', 'cheats');
const cheatsDir = join(root, 'public', 'images', 'cheats');
const blogDir = join(root, 'public', 'images', 'blog');
const publicDir = join(root, 'public');

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function writeWebp(input, output, width, height, quality) {
  await sharp(input)
    .resize(width, height, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
}

async function optimizeCheats() {
  if (!(await exists(sourceDir))) {
    console.log('No PNG sources in assets/source/cheats — skipping cheat image optimization');
    return;
  }

  const files = (await readdir(sourceDir)).filter((file) => file.endsWith('.png'));
  if (files.length === 0) {
    console.log('No PNG sources found — skipping cheat image optimization');
    return;
  }

  for (const file of files) {
    const input = join(sourceDir, file);
    const base = file.replace(/\.png$/i, '');

    await writeWebp(input, join(cheatsDir, `${base}.webp`), 960, 540, 76);
    await writeWebp(input, join(cheatsDir, `${base}-640.webp`), 640, 360, 72);

    console.log(`Optimized ${file} -> ${base}.webp + ${base}-640.webp`);
  }

  const heroInput = join(sourceDir, 'ss2.png');
  if (await exists(heroInput)) {
    await writeWebp(heroInput, join(publicDir, 'images', 'hero.webp'), 960, 540, 68);
    console.log('Created hero.webp');
  }
}

async function optimizeBlog() {
  if (!(await exists(blogDir))) {
    console.log('No public/images/blog — skipping blog image optimization');
    return;
  }

  const slugs = await readdir(blogDir, { withFileTypes: true });
  let count = 0;

  for (const entry of slugs) {
    if (!entry.isDirectory()) continue;

    const slugDir = join(blogDir, entry.name);
    const files = (await readdir(slugDir)).filter((f) => f.endsWith('.webp'));

  for (const file of files) {
    const input = join(slugDir, file);
    if (file.endsWith('-640.webp')) continue;

    const base = file.replace(/\.webp$/i, '');
    const thumb = `${base}-640.webp`;
    const thumbPath = join(slugDir, thumb);

    if (!(await exists(thumbPath))) {
      await writeWebp(input, thumbPath, 640, 360, 72);
      count++;
      console.log(`Blog thumb: ${entry.name}/${thumb}`);
    }
  }
  }

  if (count === 0) {
    console.log('Blog images already optimized or none found');
  }
}

await optimizeCheats();
await optimizeBlog();
