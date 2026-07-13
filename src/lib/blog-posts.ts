import type { CollectionEntry } from 'astro:content';
import {
  type BlogCardData,
  BLOG_CATEGORY_ICONS,
  formatBlogDate,
} from './blog';
import type { IconName } from './icons';

export function toBlogCardData(post: CollectionEntry<'blog'>): BlogCardData {
  return {
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    href: `/blog/${post.id}/`,
    date: formatBlogDate(post.data.pubDate),
    icon: (post.data.icon ?? 'file-text') as IconName,
    readTime: post.data.readTime,
    category: post.data.category,
    tags: post.data.tags,
    coverImage: post.data.coverImage,
    coverImageAlt: post.data.coverImageAlt,
    featured: post.data.featured,
  };
}

export function getFeaturedPost(posts: CollectionEntry<'blog'>[]) {
  return posts.find((p) => p.data.featured) ?? posts[0];
}

export function resolveRelatedPosts(
  posts: CollectionEntry<'blog'>[],
  currentId: string,
  relatedSlugs?: string[],
  category?: string,
  limit = 3,
): BlogCardData[] {
  const others = posts.filter((p) => p.id !== currentId);
  const picked: CollectionEntry<'blog'>[] = [];

  if (relatedSlugs?.length) {
    for (const slug of relatedSlugs) {
      const match = others.find((p) => p.id === slug);
      if (match && !picked.includes(match)) picked.push(match);
    }
  }

  if (picked.length < limit && category) {
    for (const p of others) {
      if (p.data.category === category && !picked.includes(p)) picked.push(p);
    }
  }

  for (const p of others) {
    if (picked.length >= limit) break;
    if (!picked.includes(p)) picked.push(p);
  }

  return picked.slice(0, limit).map(toBlogCardData);
}

export { BLOG_CATEGORY_ICONS };
