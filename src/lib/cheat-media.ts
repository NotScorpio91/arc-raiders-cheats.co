import type { MediaItem } from './media';

const cheatScreenshotLabels = [
  'ESP Overlay',
  'Aimbot',
  'Radar Hack',
  'Player ESP',
  'Loot ESP',
  'Cheat Menu',
  'In-Game',
] as const;

const cheatScreenshotFiles = ['ss1', 'ss2', 'ss3', 'ss4', 'ss5', 'ss6', 'ss7'] as const;

export const cheatScreenshotMedia: MediaItem[] = cheatScreenshotFiles.map((file, index) => ({
  type: 'image',
  src: `/images/cheats/${file}.webp`,
  alt: `ARC Raiders cheat screenshot — ${cheatScreenshotLabels[index] ?? 'preview'}`,
  label: cheatScreenshotLabels[index] ?? 'ARC Raiders',
}));

export const cheatShowcaseVideo = {
  src: 'https://bryjchknhsrmjdunnfer.supabase.co/storage/v1/object/public/575/0510(3).mp4',
  poster: '/images/cheats/video-poster.webp',
  alt: 'ARC Raiders gameplay preview',
};

const cheatVideoMedia: MediaItem = {
  type: 'video',
  src: cheatShowcaseVideo.src,
  poster: cheatShowcaseVideo.poster,
  alt: cheatShowcaseVideo.alt,
  label: 'Gameplay Demo',
};

/** Homepage + products — full gallery. */
export const cheatTierMedia: MediaItem[] = [cheatVideoMedia, ...cheatScreenshotMedia];

function buildCheatTierMedia(startIndex: number, count: number): MediaItem[] {
  return [cheatVideoMedia, ...cheatScreenshotMedia.slice(startIndex, startIndex + count)];
}

/** Per-tier screenshots: Xray 2 · Pro 3 · Private 2 (7 total, no overlap). */
const cheatTierMediaById: Record<string, MediaItem[]> = {
  xray: buildCheatTierMedia(0, 2),
  pro: buildCheatTierMedia(2, 3),
  private: buildCheatTierMedia(5, 2),
};

export function getCheatTierMedia(cheatId: string): MediaItem[] {
  return cheatTierMediaById[cheatId] ?? cheatTierMedia;
}
