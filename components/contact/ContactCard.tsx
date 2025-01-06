import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: { label: string; url: string }[];
  direction?: "row" | "col";
}

export const ContactCard = ({
  icon,
  title,
  description,
  links,
  direction = "row",
}: ContactCardProps) => {
  const directionClass = cn({
    "flex-row": direction === "row",
    "flex-col": direction === "col",
  });

  return (
    <div className="border-gray-250 flex h-[15rem] flex-col justify-between rounded-xl border bg-background p-4">
      <div className="border-gray-250 flex h-[36px] w-[36px] items-center justify-center rounded-lg border">
        {icon}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-lg font-medium">{title}</p>
          <p className="text-base text-black/80">{description}</p>
        </div>
        <div className={cn("flex flex-wrap gap-2", directionClass)}>
          {links.map(({ label, url }) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
