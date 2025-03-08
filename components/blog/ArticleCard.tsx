import { Tag } from "@/components/blog/Tag";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Tag as SchemaTag } from "@/sanity/schemaTypes/tagType";
import { Post } from "@/sanity/schemaTypes/postType";

export const ArticleCard = ({ article }: { article: Post }) => {
  return (
    <Link
      href={`blog/${article.slug.current}`}
      className="relative h-full cursor-pointer"
    >
      <div className="flex flex-col gap-4">
        {article.imageUrl && (
          <div className="relative aspect-video w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              className="rounded-md object-cover"
              fill
            />
          </div>
        )}
        <div className="mb-2 flex flex-row items-center gap-2">
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
            <p className="text-sm font-medium">
              {article.author?.name || "Unknown Author"}
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              {formatDate(article.publishedAt)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {article.tags?.map((tag: SchemaTag) => (
            <Tag
              key={tag._id}
              className="h-7 hover:bg-background"
              name={tag.name}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="whitespace-normal text-lg font-medium">
            {article.title}
          </h3>
          <p className="line-clamp-2 text-base text-muted-foreground">
            {article.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};
