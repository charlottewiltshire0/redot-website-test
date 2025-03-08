import Image from "next/image";
import { Tag } from "@/components/blog/Tag";
import { Tag as SchemaTag } from "@/sanity/schemaTypes/tagType";
import { formatDate } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/sanity/schemaTypes/postType";

export const ArticleSplashNew = ({ article }: { article: Post }) => {
  return (
    <div className="flex w-full flex-col items-center gap-8 pb-24">
      <div className="flex max-w-[768px] flex-col items-center gap-6 text-center md:w-[768px]">
        <div className="flex flex-col items-center gap-3 text-primary">
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {article.tags?.map((tag: SchemaTag) => (
                <Tag
                  key={tag.slug.current}
                  className="hover:bg-background"
                  name={tag.name}
                />
              ))}
            </div>
          )}
          <h2 className="text-4xl font-bold md:text-6xl">{article.title}</h2>
        </div>
        <p className="text-pretty text-lg text-muted-foreground md:text-xl">
          {article.excerpt}
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage
            src={article.author?.imageUrl}
            alt={article.author?.name || "Unknown Author"}
          />
          <AvatarFallback>
            {article.author?.name
              ? article.author.name.charAt(0).toUpperCase()
              : ""}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">
            {article.author?.name || "Unknown Author"}
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            {formatDate(article.publishedAt)}
          </p>
        </div>
      </div>
      {article.imageUrl && (
        <div className="relative aspect-video w-full lg:w-[1024px]">
          <Image
            src={article.imageUrl}
            alt={article.title}
            className="h-full w-full rounded-xl object-cover"
            fill
          />
        </div>
      )}
    </div>
  );
};
