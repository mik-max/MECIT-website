import { defineField, defineType } from "sanity";

export const youtubeEmbed = defineType({
  name: "youtubeEmbed",
  title: "YouTube / Video Embed",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Video URL",
      type: "url",
      description: "Paste a YouTube or Vimeo video link (e.g. https://www.youtube.com/watch?v=...)",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption / Description",
      type: "string",
      description: "Optional caption for the video",
    }),
  ],
});
