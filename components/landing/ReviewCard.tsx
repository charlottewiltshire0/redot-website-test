import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InterfaceReview } from "@/sanity/schemaTypes/reviewType";

interface ReviewsProps extends InterfaceReview {
  className?: string;
}

export const ReviewCard = ({
  className,
  name,
  username,
  imageUrl,
  body,
}: ReviewsProps) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card bg-zinc-50/[.05] p-4 transition-colors duration-300 ease-in-out hover:bg-accent/60",
        className
      )}
    >
      <div className="flex flex-row items-center">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>
              {name ? name.charAt(0).toUpperCase() : ""}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <figcaption className="text-sm font-medium leading-none">
              {name}
            </figcaption>
            <p className="text-xs text-muted-foreground">{username.current}</p>
          </div>
        </div>
      </div>
      <blockquote className="mt-2 line-clamp-4 overflow-hidden text-ellipsis text-sm">
        {body}
      </blockquote>
    </figure>
  );
};
