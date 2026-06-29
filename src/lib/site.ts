export const SITE = {
  name: 'ArcRaidersCheats',
  title: 'Arc Raider Cheats — ESP, Aimbot & Premium Tools',
  description:
    'Arc Raider cheats with ESP, aimbot, and premium tools. Buy Xray, Pro, and Private tiers — plus Cloud DMA and HWID spoofer. Updated for Season 1.',
  url: 'https://arcraiderscheats.co',
  locale: 'en_US',
  author: 'Arc Raiders Cheats Team',
  email: 'support@arcraiderscheats.co',
  twitter: '@arcraiderscheats',
  logo: '/logo.png',
  logoAlt: 'Zadeyo',
  themeColor: '#7c3aed',
  updated: '2026-06-29',
} as const;

export const SITE_KEYWORDS = [
  'arc raider cheats',
  'arc raiders cheats',
  'arc raiders esp',
  'arc raiders aimbot',
  'arc raider wallhack',
  'arc raiders hack',
  'buy arc raider cheats',
] as const;

export const PRECONNECT_ORIGINS = [
  'https://images.igdb.com',
  'https://bryjchknhsrmjdunnfer.supabase.co',
] as const;

export const SITE_LOGO_URL = `${SITE.url}${SITE.logo}`;

export const ZADEYO_CHEATS_URL = 'https://zadeyo.com/products/arc-raiders-cheats';

export const NAV_LINKS = [
  { href: '/cheats/', label: 'Cheats' },
  { href: '/products/', label: 'Products' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/about/', label: 'About' },
] as const;
