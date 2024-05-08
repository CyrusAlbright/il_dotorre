import { defineCollection, z } from 'astro:content';

const events = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		location: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
	})
})

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, events };
