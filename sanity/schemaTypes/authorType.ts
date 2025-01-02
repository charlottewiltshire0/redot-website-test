import { defineField, defineType } from "sanity";

export interface Author {
  name: string;
  slug: { current: string };
  image?: any;
  imageUrl: string;
  _id: string;
}

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "username",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
