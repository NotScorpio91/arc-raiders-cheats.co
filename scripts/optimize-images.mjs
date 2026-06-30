import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cheatsDir = join(root, 'public', 'images', 'cheats');
const publicDir = join(root, 'public');

async function writeWebp(input, output, width, height, quality) {
  await sharp(input)
    .resize(width, height, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
}

async function optimizeCheats() {
  const files = (await readdir(cheatsDir)).filter((file) => file.endsWith('.png'));

  for (const file of files) {
    const input = join(cheatsDir, file);
    const base = file.replace(/\.png$/i, '');

    await writeWebp(input, join(cheatsDir, `${base}.webp`), 960, 540, 76);
    await writeWebp(input, join(cheatsDir, `${base}-640.webp`), 640, 360, 72);

    console.log(`Optimized ${file} -> ${base}.webp + ${base}-640.webp`);
  }

  const posterInput = join(cheatsDir, 'ss1.png');
  await writeWebp(posterInput, join(cheatsDir, 'video-poster.webp'), 960, 540, 72);
  console.log('Created video-poster.webp');

  await writeWebp(join(cheatsDir, 'ss2.png'), join(publicDir, 'images', 'hero.webp'), 960, 540, 68);
  console.log('Created hero.webp');
}

async function optimizeLogo() {
  const input = join(publicDir, 'logo.png');
  const output = join(publicDir, 'logo.webp');

  await sharp(input)
    .resize(88, 104, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(output);

  console.log('Created logo.webp');
}

await optimizeCheats();
await optimizeLogo();
