import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readTime: z.string(),
    author: z.string().default('Arc Raiders Cheats Team'),
    icon: z
      .enum([
        'target',
        'settings',
        'map',
        'gamepad',
        'file-text',
        'wrench',
        'chart',
        'loadout',
        'crosshair',
        'extraction',
        'enemy',
        'movement',
        'loot',
        'guide',
      ])
      .default('file-text'),
    keywords: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
