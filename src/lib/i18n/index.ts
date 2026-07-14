import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { DEFAULT_LOCALE, I18N_LOCALES, LOCALE_CODES, stripLocalePrefix } from '../i18n-config.mjs';
import { getMessages } from './messages';

export { DEFAULT_LOCALE, I18N_LOCALES, LOCALE_CODES, getLocaleMeta } from '../i18n-config.mjs';
export type { LocaleCode, LocaleMessages } from './messages';
export { getMessages, messages } from './messages';

/** Astro i18n route key (no slashes) for a pathname. */
export function toRouteSegment(pathname: string): string | undefined {
  const base = stripLocalePrefix(pathname);
  if (base === '/') return undefined;
  return base.replace(/^\//, '').replace(/\/$/, '');
}

/** Absolute canonical URL for the active locale + path. */
export function localizedCanonical(locale: string, pathname: string): string {
  return getAbsoluteLocaleUrl(locale, toRouteSegment(pathname));
}

/** hreflang alternates for every configured locale. */
export function localizedHreflangAlternates(pathname: string) {
  const route = toRouteSegment(pathname);
  return I18N_LOCALES.map((meta) => ({
    hreflang: meta.hreflang,
    href: getAbsoluteLocaleUrl(meta.code, route),
  }));
}

export function localizedDefaultUrl(pathname: string): string {
  return getAbsoluteLocaleUrl(DEFAULT_LOCALE, toRouteSegment(pathname));
}

/** Localized path for internal links (e.g. cheats → /es/cheats/). */
export function localeHref(locale: string, path: string): string {
  const trimmed = path.replace(/^\//, '').replace(/\/$/, '');
  return getRelativeLocaleUrl(locale, trimmed || undefined);
}

export function navLinks(locale: string) {
  const t = getMessages(locale);
  return [
    { href: localeHref(locale, '/cheats/'), label: t.nav.cheats },
    { href: localeHref(locale, '/products/'), label: t.nav.products },
    { href: localeHref(locale, '/blog/'), label: t.nav.blog },
    { href: localeHref(locale, '/faq/'), label: t.nav.faq },
    { href: localeHref(locale, '/about/'), label: t.nav.about },
  ] as const;
}

/** Strip /{locale}/ prefix so switcher can rebuild URLs for other languages. */
export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && LOCALE_CODES.includes(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}/` : '/';
  }
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}
