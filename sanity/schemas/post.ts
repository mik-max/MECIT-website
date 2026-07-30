import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      initialValue: "Engineer Innocent",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Software & Cloud", value: "Software & Cloud" },
          { title: "AI & Machine Learning", value: "AI & Machine Learning" },
          { title: "Energy & Smart Grids", value: "Energy & Smart Grids" },
          { title: "IT Infrastructure", value: "IT Infrastructure" },
          { title: "Engineering Insights", value: "Engineering Insights" },
        ],
      },
      initialValue: "Engineering Insights",
    }),
    defineField({
      name: "mainImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time (e.g. 5 min read)",
      type: "string",
      initialValue: "5 min read",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Short Summary",
      type: "text",
      rows: 3,
      description: "Brief summary shown on blog cards and search results",
      validation: (Rule: any) => Rule.max(250),
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          type: "youtubeEmbed",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
    },
    prepare(selection: Record<string, any>) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author ? `By ${author}` : "",
      };
    },
  },
});
