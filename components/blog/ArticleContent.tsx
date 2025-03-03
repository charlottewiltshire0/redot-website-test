"use client";

import { Post } from "@/sanity/schemaTypes/postType";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

export const ArticleContent = ({ article }: { article: Post }) => {
  const [contentHtml, setContentHtml] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Now we are sure the code runs only in the browser
      const processContent = async () => {
        const processedContent = await remark().use(html).process(article.body);
        setContentHtml(processedContent.toString());
      };

      processContent();
    }
  }, [article]);

  return (
    <div>
      <article
        className="font-in dark:prose-blockquote:border-muted-foreground dark:prose-blockquote:bg-muted-foreground/20 dark:prose-li:marker:text-muted-foreground prose dark:prose-invert sm:prose-base md:prose-lg prose-blockquote:rounded-r-lg prose-blockquote:border-muted prose-blockquote:bg-muted/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-figure:relative prose-figcaption:mb-2 prose-figcaption:mt-1 prose-li:marker:text-muted-foreground col-span-12 max-w-max first-letter:text-3xl sm:first-letter:text-5xl lg:col-span-8"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};
