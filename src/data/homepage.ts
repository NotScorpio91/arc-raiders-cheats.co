import type { MediaItem } from '../lib/media';
import { ARC_RAIDERS_IGDB } from '../lib/igdb';

const showcaseLabels = [
  'Surface Recon',
  'ARC Combat',
  'Industrial Push',
  'Extraction Run',
  'Loot Route',
  'Open Firefight',
] as const;

export const homepageShowcaseVideo = {
  src: 'https://bryjchknhsrmjdunnfer.supabase.co/storage/v1/object/public/575/0510(3).mp4',
  poster: ARC_RAIDERS_IGDB.screenshots[1].src,
  alt: 'ARC Raiders gameplay preview',
};

export const homepageHero = {
  badge: 'Season 1 · Updated June 2026',
  title: 'Arc Raider Cheats',
  description:
    'Arc Raider cheats with ESP, aimbot, and loot tracking built for live raids. Pick Xray, Pro, or Private and get access today — Cloud DMA and HWID spoofer on the products page if you want the full setup.',
};

export const homepageHeroImage = {
  src: ARC_RAIDERS_IGDB.screenshots[0].src,
  alt: 'ARC Raiders Raider surveying the hostile surface before a raid',
};

export const homepageShowcase: MediaItem[] = ARC_RAIDERS_IGDB.screenshots.map((shot, index) => ({
  type: 'image',
  src: shot.src,
  alt: shot.alt,
  label: showcaseLabels[index] ?? 'ARC Raiders',
}));
