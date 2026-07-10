/** Shared route catalog for sitemap + SEO tooling (keep in sync with data/*.ts). */

export const CHEAT_SLUGS = ['xray', 'pro', 'private'];

export const PRODUCT_SLUGS = ['ugc', 'skin-changer', 'cloud-dma', 'hwid-spoofer'];

export const CHEAT_DETAIL_PATHS = CHEAT_SLUGS.map((id) => `/cheats/${id}/`);

export const PRODUCT_DETAIL_PATHS = PRODUCT_SLUGS.map((id) => `/products/${id}/`);
