import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const svgBuffer = readFileSync(join(publicDir, 'logo.svg'));

await sharp(svgBuffer).resize(256, 256).png().toFile(join(publicDir, 'logo.png'));
await sharp(svgBuffer).resize(32, 32).png().toFile(join(publicDir, 'favicon-32.png'));
await sharp(readFileSync(join(publicDir, 'favicon.svg')))
  .resize(32, 32)
  .toFile(join(publicDir, 'favicon.ico'));

console.log('Generated logo.png, favicon.ico from brand SVGs');
