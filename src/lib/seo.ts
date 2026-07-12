import { SITE } from './site';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
}

const META_DESC_MAX = 160;
const TITLE_MAX = 60;
const BRAND_SUFFIX = ` | ${SITE.name}`;

export function buildTitle(pageTitle: string): string {
  if (pageTitle.includes('ArcRaidersCheats')) {
    return pageTitle.length <= TITLE_MAX ? pageTitle : `${pageTitle.slice(0, TITLE_MAX - 1).trimEnd()}…`;
  }

  const full = `${pageTitle}${BRAND_SUFFIX}`;
  if (full.length <= TITLE_MAX) return full;

  const maxPageLen = TITLE_MAX - BRAND_SUFFIX.length;
  return `${pageTitle.slice(0, Math.max(maxPageLen, 20)).trimEnd()}${BRAND_SUFFIX}`;
}

export function trimDescription(description: string, max = META_DESC_MAX): string {
  const normalized = description.replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trimEnd()}…`;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function buildCanonical(path: string): string {
  if (!path || path === '/') return absoluteUrl('/');
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  return absoluteUrl(withSlash.startsWith('/') ? withSlash : `/${withSlash}`);
}
