"use server";

import { client } from "@/sanity/lib/client";
import { sanitizeInput } from "@/lib/utils";
import { Post } from "@/sanity/schemaTypes/postType";

export async function getLatestArticle(language: string) {
  const query = `*[_type == "post"] | order(publishedAt desc) [0] {
    "title": coalesce(title[_key == "${language}"][0].value, title[_key == "en"][0].value),
    slug,
    image,
    "imageUrl": image.asset->url,
    publishedAt,
    "excerpt": coalesce(excerpt[_key == "${language}"][0].value, excerpt[_key == "en"][0].value),
    author,
    tags[]->{name, slug}
  }`;

  return await client.fetch(query);
}

export async function getAllTags() {
  const query = `*[_type == "tag"] {
    _id,
    name,
    slug {
      current
    }
  }`;

  return await client.fetch(query);
}

export async function getUsedTags() {
  const query = `*[_type == "post"] {
    tags[]->{
      _id,
      name,
      slug {
        current
      }
    }
  }`;

  const posts = await client.fetch(query);

  const usedTags = new Set<string>();
  posts.forEach((post: Post) => {
    post.tags.forEach((tag) => usedTags.add(tag.slug.current));
  });

  const uniqueTags = [...usedTags];

  const tagQuery = `*[_type == "tag" && slug.current in [${uniqueTags.map((slug) => `"${slug}"`).join(",")}]] {
    _id,
    name,
    slug {
      current
    }
  }`;

  return await client.fetch(tagQuery);
}

export async function getPosts(
  tag: string = "",
  search: string = "",
  language: string = "en"
) {
  let query = `*[_type == "post"`;
  const inputSearch = sanitizeInput(search);
  const filters: string[] = [];

  if (tag) {
    filters.push(`"${tag}" in tags[]->slug.current`);
  }

  if (search) {
    filters.push(
      `title[_key == "${language}"][0].value match "*${inputSearch}*" || excerpt[_key == "${language}"][0].value match "*${inputSearch}*"`
    );
  }

  if (filters.length > 0) {
    query += ` && (${filters.join(" && ")})`;
  }

  query += `] | order(publishedAt desc) {
    "title": title[_key == "${language}"][0].value,
    slug,
    image,
    "imageUrl": image.asset->url,
    publishedAt,
    "excerpt": excerpt[_key == "${language}"][0].value,
    author-> {
      _id,
      name,
      image,
      "imageUrl": image.asset->url
    },
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;

  return await client.fetch(query);
}

export async function getPostBySlug(slug: string, language: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    "title": coalesce(title[_key == "${language}"][0].value, title[_key == "en"][0].value),
    slug,
    image,
    "imageUrl": image.asset->url,
    publishedAt,
    "excerpt": coalesce(excerpt[_key == "${language}"][0].value, excerpt[_key == "en"][0].value),
    "body": coalesce(body[_key == "${language}"][0].value, body[_key == "en"][0].value),
    author-> {
      _id,
      name,
      image,
      "imageUrl": image.asset->url
    },
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;

  return await client.fetch(query);
}
