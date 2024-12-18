import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewsProps {
  className?: string;
  avatar: string;
  name: string;
  username: string;
  body: string;
}

export const ReviewCard = ({
  avatar,
  name,
  username,
  body,
  className,
}: ReviewsProps) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border border-background/[.1] bg-background/[.01] p-4 hover:bg-background/[.05]",
        className
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt="User avatar"
          src={avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
