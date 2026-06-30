import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fontsDir = join(root, 'public', 'fonts');
const source = join(
  root,
  'node_modules',
  '@fontsource-variable',
  'inter',
  'files',
  'inter-latin-wght-normal.woff2',
);
const destination = join(fontsDir, 'inter-latin.woff2');

await mkdir(fontsDir, { recursive: true });
await copyFile(source, destination);
console.log('Copied inter-latin.woff2 to public/fonts/');
