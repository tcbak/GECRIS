/**
 * Content collections
 * News & events are Markdown files in src/content/news/.
 * Each file becomes a page at /news/<file-name>/.
 * Images referenced in frontmatter are relative to the Markdown file and are
 * optimised automatically at build time.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Publication date (YYYY-MM-DD). Used for sorting, newest first.
      date: z.coerce.date(),
      type: z.enum(['news', 'event']).default('news'),
      image: image().optional(),
      imageAlt: z.string().default(''),
      // Optional event details
      eventDate: z.coerce.date().optional(),
      eventEndDate: z.coerce.date().optional(),
      location: z.string().optional(),
      // Optional photographs shown below the article
      photos: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
      // draft: true hides the article from the website
      draft: z.boolean().default(false),
      // placeholder: true shows a "Sample content" notice
      placeholder: z.boolean().default(false),
    }),
});

export const collections = { news };
