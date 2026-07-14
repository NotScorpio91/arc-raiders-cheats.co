/** Shared i18n routing config — imported by astro.config.mjs and build scripts. */

export const DEFAULT_LOCALE = 'en';

/** @type {{ code: string; label: string; hreflang: string; ogLocale: string }[]} */
export const I18N_LOCALES = [
  { code: 'en', label: 'English', hreflang: 'en', ogLocale: 'en_US' },
  { code: 'es', label: 'Español', hreflang: 'es', ogLocale: 'es_ES' },
  { code: 'de', label: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE' },
  { code: 'fr', label: 'Français', hreflang: 'fr', ogLocale: 'fr_FR' },
  { code: 'pt', label: 'Português', hreflang: 'pt', ogLocale: 'pt_BR' },
  { code: 'ru', label: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU' },
  { code: 'ja', label: '日本語', hreflang: 'ja', ogLocale: 'ja_JP' },
  { code: 'ko', label: '한국어', hreflang: 'ko', ogLocale: 'ko_KR' },
  { code: 'zh', label: '中文', hreflang: 'zh-Hans', ogLocale: 'zh_CN' },
  { code: 'tr', label: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR' },
  { code: 'pl', label: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL' },
  { code: 'it', label: 'Italiano', hreflang: 'it', ogLocale: 'it_IT' },
];

export const LOCALE_CODES = I18N_LOCALES.map((locale) => locale.code);

/** Non-English locales fall back to English page content until translated. */
export const I18N_FALLBACK = Object.fromEntries(
  LOCALE_CODES.filter((code) => code !== DEFAULT_LOCALE).map((code) => [code, DEFAULT_LOCALE]),
);

/** @param {string} code */
export function getLocaleMeta(code) {
  return I18N_LOCALES.find((locale) => locale.code === code) ?? I18N_LOCALES[0];
}

/** Strip leading /{locale}/ from a pathname. */
export function stripLocalePrefix(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && LOCALE_CODES.includes(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join('/')}/` : '/';
  }
  return pathname.endsWith('/') || pathname === '/' ? pathname : `${pathname}/`;
}

/** @param {string} pathname */
export function localePathForSitemap(pathname, locale) {
  const base = stripLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) {
    return base === '/' ? '/' : base;
  }
  if (base === '/') {
    return `/${locale}/`;
  }
  return `/${locale}${base}`;
}
