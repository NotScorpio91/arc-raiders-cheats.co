// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { SITE_URL } from './src/lib/sitemap-meta.mjs';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  prefetch: false,

  integrations: [
    mdx(),
    react(),
  ],

  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },
});