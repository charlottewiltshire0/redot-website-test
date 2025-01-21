import { defineField, defineType } from "sanity";

export interface InterfaceReview {
  name: string;
  username: { current: string };
  image?: any;
  imageUrl: string;
  body: string;
  _id: string;
}

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Display Name",
      description: "The name that will be displayed for this review.",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "User Avatar",
      description: "A profile picture or avatar for the reviewer.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Review Body",
      description: "The main text content of the review.",
      type: "text",
      validation: (rule) => rule.required().min(10).max(500),
    }),
  ],
});
