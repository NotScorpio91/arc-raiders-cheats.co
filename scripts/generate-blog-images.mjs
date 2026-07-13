/**
 * Blog image workflow — AI assets only.
 *
 * 1. Generate PNGs via Cursor GenerateImage using names from blog-image-manifest.json:
 *    blog__{slug}__{basename}.png
 * 2. Import and convert:
 *    node scripts/import-blog-ai-assets.mjs
 *
 * Prompt helper:
 *    node scripts/blog-image-prompts.mjs --batch 1
 *    node scripts/blog-image-prompts.mjs --json
 *
 * DO NOT regenerate procedural SVG placeholders — they overwrite real AI art.
 */
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const importScript = join(root, 'scripts', 'import-blog-ai-assets.mjs');

console.log('Blog images are AI-generated. Running import step only...\n');

const child = spawn(process.execPath, [importScript], { stdio: 'inherit', cwd: root });

child.on('exit', (code) => {
  if (code === 0) {
    console.log('\nTip: run `node scripts/optimize-images.mjs` if thumbs need refreshing.');
  }
  process.exit(code ?? 1);
});
