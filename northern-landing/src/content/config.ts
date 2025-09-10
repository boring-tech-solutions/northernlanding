import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['immigration', 'settlement', 'work', 'community', 'success-story', 'resources']),
    tags: z.array(z.string()).optional(),
    readTime: z.string().optional(),
    featured: z.boolean().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
