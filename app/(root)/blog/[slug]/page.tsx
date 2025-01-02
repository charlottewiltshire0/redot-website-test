import { getPostBySlug } from "@/lib/blog";
import { ArticleSplash } from "@/components/blog/article-splash";
import { ArticleNotFoundPage } from "@/components/blog/article-not-found";
import ArticleContentWrapper from "@/components/blog/article-content-wrapper";

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
        <div className="max-w-[800px]">
          <ArticleSplash article={post[0]} />
          <ArticleContentWrapper article={post[0]} />
        </div>
      </div>
    </div>
  );
}
