// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import {
  getBlogSitemapMeta,
  getPagePriority,
  getPageSitemapImage,
  LEGACY_BLOG_REDIRECTS,
  SITE_URL,
} from './src/lib/sitemap-meta.mjs';

const blogMeta = getBlogSitemapMeta();

/** @type {Record<string, import('astro').RedirectConfig>} */
const legacyRedirects = Object.fromEntries(
  Object.entries(LEGACY_BLOG_REDIRECTS).map(([source, destination]) => [
    source,
    { status: 301, destination },
  ]),
);

const legacyRedirectUrls = new Set(Object.keys(LEGACY_BLOG_REDIRECTS).map((path) => `${SITE_URL}${path}`));

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
        video: false,
      },
      filter: (page) => !legacyRedirectUrls.has(page),
      serialize(item) {
        const url = item.url.endsWith('/') ? item.url : `${item.url}/`;
        const pathname = new URL(url).pathname;
        const blogEntry = blogMeta.get(url) ?? blogMeta.get(item.url);

        if (blogEntry) {
          item.url = url;
          item.lastmod = blogEntry.lastmod;
          item.priority = 0.8;

          const imageUrl = blogEntry.coverImage ?? getPageSitemapImage(pathname).url;
          const imageTitle = blogEntry.coverImageAlt ?? getPageSitemapImage(pathname).title;
          item.img = [{ url: imageUrl, title: imageTitle, caption: imageTitle }];

          return item;
        }

        item.url = url;
        item.lastmod = new Date().toISOString();
        item.priority = getPagePriority(pathname);

        const pageImage = getPageSitemapImage(pathname);
        item.img = [{ url: pageImage.url, title: pageImage.title, caption: pageImage.title }];

        return item;
      },
    }),
    react(),
  ],
  redirects: legacyRedirects,
  compressHTML: true,
});
