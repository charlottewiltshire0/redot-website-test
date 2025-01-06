import { remark } from "remark";
import html from "remark-html";
import { Post } from "@/sanity/schemaTypes/postType";

export const ArticleContent = async ({ article }: { article: Post }) => {
  const processedContent = await remark().use(html).process(article.body);
  console.log(article.body);

  const contentHtml = processedContent.toString();

  return (
    <div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};
