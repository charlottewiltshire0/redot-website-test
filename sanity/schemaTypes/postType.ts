import { defineField, defineType } from "sanity";
import { Tag } from "@/sanity/schemaTypes/tagType";
import { Author } from "@/sanity/schemaTypes/authorType";

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: any;
  imageUrl: string;
  excerpt: string;
  body: string;
  tags: Array<Tag>;
  author: Author;
  _id: string;
}

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "text",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
