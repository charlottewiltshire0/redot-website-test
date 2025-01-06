import { getPostBySlug } from "@/lib/blog";
import { ArticleSplash } from "@/components/blog/ArticleSplash";
import { ArticleNotFoundPage } from "@/components/blog/ArticleNotFound";
import ArticleContentWrapper from "@/components/blog/ArticleContentWrapper";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = await params.slug;
  const post = await getPostBySlug(slug);

  if (!post || post.length === 0) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const postData = post[0];

  return {
    applicationName: "Redot Engine",
    title: postData.title ?? "Untitled Post",
    description: postData.excerpt ?? "No description provided.",
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      images: postData.imageUrl ? [{ url: postData.imageUrl }] : [],
      url: `https://www.redotengine.org//blog/${slug}`,
      type: "article",
      publishedTime: postData.publishedAt
        ? new Date(postData.publishedAt).toISOString()
        : undefined,
      authors: postData.author ? [{ name: postData.author.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.excerpt,
      images: postData.imageUrl ? [postData.imageUrl] : [],
    },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await getPostBySlug(slug);

  if (!post || post.length === 0) {
    return <ArticleNotFoundPage />;
  }

  return (
    <div className="mb-24 px-5 lg:px-40">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[800px] md:w-[800px]">
          <ArticleSplash article={post[0]} />
          <ArticleContentWrapper article={post[0]} />
        </div>
      </div>
    </div>
  );
}
