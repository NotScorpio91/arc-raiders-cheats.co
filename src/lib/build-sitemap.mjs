import {
  BLOG_INDEX_LASTMOD,
  BLOG_SITEMAP_URLS,
  getBlogSitemapMeta,
  getPagePriority,
  getPageSitemapImage,
  LEGACY_BLOG_REDIRECTS,
  LEGACY_CHEAT_REDIRECTS,
  SITE_URL,
  STATIC_CONTENT_LASTMOD,
} from './sitemap-meta.mjs';
import { CHEAT_DETAIL_PATHS, PRODUCT_DETAIL_PATHS } from './page-catalog.mjs';
import { I18N_LOCALES, LOCALE_CODES, localePathForSitemap } from './i18n-config.mjs';

const STATIC_SITEMAP_PATHS = [
  '/',
  '/about/',
  '/cheats/',
  '/products/',
  '/blog/',
  '/contact/',
  '/faq/',
  '/privacy-policy/',
  '/terms/',
];

const LEGACY_PATHS = new Set([
  ...Object.keys(LEGACY_BLOG_REDIRECTS),
  ...Object.keys(LEGACY_CHEAT_REDIRECTS),
]);

function normalizePath(pathname) {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** @returns {string[]} */
export function getAllSitemapPaths() {
  const paths = new Set([
    ...STATIC_SITEMAP_PATHS,
    ...BLOG_SITEMAP_URLS.map((url) => normalizePath(new URL(url).pathname)),
    ...CHEAT_DETAIL_PATHS,
    ...PRODUCT_DETAIL_PATHS,
  ]);

  return [...paths].filter((path) => !LEGACY_PATHS.has(path));
}

/** @param {string} pathname */
function getLastmod(pathname, blogMeta, buildTime) {
  const path = normalizePath(pathname);
  const blogUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
  const blogEntry = blogMeta.get(blogUrl);

  if (blogEntry) return blogEntry.lastmod;
  if (path === '/blog/' && BLOG_INDEX_LASTMOD) return BLOG_INDEX_LASTMOD;
  return STATIC_CONTENT_LASTMOD;
}

function hreflangLinksForPath(pathname) {
  return I18N_LOCALES.map((locale) => {
    const localizedPath = localePathForSitemap(pathname, locale.code);
    const href = `${SITE_URL}${localizedPath === '/' ? '/' : localizedPath}`;
    return `    <xhtml:link rel="alternate" hreflang="${escapeXml(locale.hreflang)}" href="${escapeXml(href)}" />`;
  }).concat(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${SITE_URL}${pathname === '/' ? '/' : pathname}`)}" />`,
  );
}

/** @param {string} [buildTime] */
export function buildSitemapXml(buildTime = new Date().toISOString()) {
  const blogMeta = getBlogSitemapMeta();
  const paths = getAllSitemapPaths();

  const urlNodes = paths.flatMap((pathname) => {
    const path = normalizePath(pathname);
    const lastmod = getLastmod(path, blogMeta, buildTime);
    const priority = getPagePriority(path);
    const image = getPageSitemapImage(path);
    const alternates = hreflangLinksForPath(path);

    return LOCALE_CODES.map((locale) => {
      const localizedPath = localePathForSitemap(path, locale);
      const loc = `${SITE_URL}${localizedPath === '/' ? '/' : localizedPath}`;

      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        ...alternates,
        `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
        `    <priority>${priority.toFixed(1)}</priority>`,
        '    <image:image>',
        `      <image:loc>${escapeXml(image.url)}</image:loc>`,
        `      <image:title>${escapeXml(image.title)}</image:title>`,
        `      <image:caption>${escapeXml(image.title)}</image:caption>`,
        '    </image:image>',
        '  </url>',
      ].join('\n');
    });
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlNodes,
    '</urlset>',
  ].join('\n');
}
