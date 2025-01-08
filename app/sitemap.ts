import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { platformMapping } from "@/constants/platformMapping";
import { Post } from "@/sanity/schemaTypes/postType";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
  }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/licenses`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  try {
    const posts = await getPosts();

    const blogPostRoutes = posts.map((post: Post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    const uniquePlatforms = Array.from(new Set(Object.values(platformMapping)));

    const platformDownloadRoutes = uniquePlatforms.map((platform) => ({
      url: `${baseUrl}/download/${platform}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticRoutes, ...blogPostRoutes, ...platformDownloadRoutes];
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return staticRoutes;
  }
}
