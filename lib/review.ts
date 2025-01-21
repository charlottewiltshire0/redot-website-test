import { client } from "@/sanity/lib/client";

export async function fetchAllReviews() {
  const query = `*[_type == "review"] {
    _id,
    name,
    username {
      current
    },
    image,
    "imageUrl": image.asset->url,
    body
  }`;

  return await client.fetch(query);
}
