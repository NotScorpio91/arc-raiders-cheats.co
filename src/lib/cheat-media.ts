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

const cheatScreenshotAlts = [
  'Arc Raiders player ESP overlay showing enemy positions through walls',
  'Arc Raiders aimbot targeting preview with bone-lock aim assist',
  'Arc Raiders 2D radar hack displaying nearby players and extractions routes',
  'Arc Raiders player ESP highlighting raiders, distance, and health info',
  'Arc Raiders loot ESP marking high-value items and containers',
  'Arc Raiders cheat menu UI with ESP, aimbot, and radar toggles',
  'Arc Raiders in-game cheat overlay during an active raid',
] as const;

const cheatScreenshotFiles = ['ss1', 'ss2', 'ss3', 'ss4', 'ss5', 'ss6', 'ss7'] as const;

export const cheatScreenshotMedia: MediaItem[] = cheatScreenshotFiles.map((file, index) => ({
  type: 'image',
  src: `/images/cheats/${file}.webp`,
  alt: cheatScreenshotAlts[index] ?? `Arc Raiders cheat screenshot — ${cheatScreenshotLabels[index] ?? 'preview'}`,
  label: cheatScreenshotLabels[index] ?? 'Arc Raiders',
}));

/** Homepage + products — full gallery. */
export const cheatTierMedia: MediaItem[] = [...cheatScreenshotMedia];

function buildCheatTierMedia(startIndex: number, count: number): MediaItem[] {
  return cheatScreenshotMedia.slice(startIndex, startIndex + count);
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
