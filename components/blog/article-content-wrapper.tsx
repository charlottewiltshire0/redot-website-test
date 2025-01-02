"use client";
import dynamic from "next/dynamic";
import { Post } from "@/sanity/schemaTypes/postType";

const ArticleContent = dynamic<{ article: Post }>(
  () =>
    import("@/components/blog/article-content").then(
      (mod) => mod.ArticleContent
    ),
  { ssr: false }
);

export default function ArticleContentWrapper({ article }: { article: Post }) {
  return <ArticleContent article={article} />;
}
