export type MediaItem =
  | { type: 'image'; src: string; alt: string; label?: string }
  | { type: 'video'; src?: string; poster: string; alt: string; label?: string };
