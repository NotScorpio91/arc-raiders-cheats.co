// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { SITE_URL } from './src/lib/sitemap-meta.mjs';
import { DEFAULT_LOCALE, I18N_FALLBACK, LOCALE_CODES } from './src/lib/i18n-config.mjs';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  prefetch: false,

  i18n: {
    locales: LOCALE_CODES,
    defaultLocale: DEFAULT_LOCALE,
    fallback: I18N_FALLBACK,
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite',
    },
  },

  integrations: [
    mdx({
      rehypePlugins: ['rehype-slug'],
    }),
    react(),
  ],

  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },
});