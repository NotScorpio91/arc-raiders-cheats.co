import type { IconName } from './icons';

export const BLOG_CATEGORIES = ['esp', 'aimbot', 'guides', 'meta', 'setup'] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  esp: 'ESP',
  aimbot: 'Aimbot',
  guides: 'Guides',
  meta: 'Meta',
  setup: 'Setup',
};

export const BLOG_CATEGORY_ICONS: Record<BlogCategory, IconName> = {
  esp: 'eye',
  aimbot: 'crosshair',
  guides: 'guide',
  meta: 'chart',
  setup: 'settings',
};

export const BLOG_POSTS_PER_PAGE = 9;

export type BlogCardData = {
  slug: string;
  title: string;
  description: string;
  href: string;
  date: string;
  icon: IconName;
  readTime?: string;
  category?: BlogCategory;
  tags?: string[];
  coverImage?: string;
  coverImageAlt?: string;
  featured?: boolean;
};

export function formatBlogDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
