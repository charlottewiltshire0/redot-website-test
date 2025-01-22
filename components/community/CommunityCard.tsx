import Link from "next/link";
import Image from "next/image";

export interface CommunityCardProps {
  readonly imageUrl: string;
  readonly label: string;
  readonly description: string;
  readonly href: string;
}

export const CommunityCard = ({
  imageUrl,
  label,
  description,
  href,
}: Readonly<CommunityCardProps>) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative h-full cursor-pointer overflow-hidden rounded-xl border border-border p-4 transition-colors duration-200 hover:bg-accent/60">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-video w-full">
            <Image
              src={imageUrl}
              alt={label}
              className="h-full w-full rounded-xl object-cover"
              fill
            />
          </div>
          <div>
            <h2 className="text-lg font-medium">{label}</h2>
            <p className="text-base text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
