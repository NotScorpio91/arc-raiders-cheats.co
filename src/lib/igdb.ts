const IGDB_BASE = 'https://images.igdb.com/igdb/image/upload';

export function igdbImage(imageId: string, size: string) {
  return `${IGDB_BASE}/t_${size}/${imageId}.jpg`;
}

/** Official ARC Raiders imagery from [IGDB](https://www.igdb.com/games/arc-raiders). */
export const ARC_RAIDERS_IGDB = {
  cover: igdbImage('co9rk1', '1080p'),
  banner: igdbImage('scii62', 'screenshot_huge'),
  screenshots: [
    {
      src: igdbImage('scii62', 'screenshot_huge'),
      alt: 'ARC Raiders Raider overlooking a ruined surface zone',
    },
    {
      src: igdbImage('sc11kk7', 'screenshot_huge'),
      alt: 'ARC Raiders combat against mechanized ARC threats',
    },
    {
      src: igdbImage('sc11kk8', 'screenshot_huge'),
      alt: 'ARC Raiders squad pushing through industrial ruins',
    },
    {
      src: igdbImage('sc11kk9', 'screenshot_huge'),
      alt: 'ARC Raiders extraction zone under heavy pressure',
    },
    {
      src: igdbImage('sc11kka', 'screenshot_huge'),
      alt: 'ARC Raiders loot run through a hostile surface map',
    },
    {
      src: igdbImage('sc11kkc', 'screenshot_huge'),
      alt: 'ARC Raiders third-person firefight in open terrain',
    },
  ] as const,
} as const;
