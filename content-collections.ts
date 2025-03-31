import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const blog = defineCollection({
  name: "Blog",
  directory: "content/blogs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    slug: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    return {
      ...document,
      slug: `/blogs/${document._meta.path}`,
      slugAsParams: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});

const podcast = defineCollection({
  name: "Podcast",
  directory: "content/podcasts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    category: z.string(),
    slug: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    return {
      ...document,
      slug: `/podcasts/${document._meta.path}`,
      slugAsParams: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});

export default defineConfig({
  collections: [blog, podcast],
});
