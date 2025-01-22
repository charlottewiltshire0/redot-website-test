import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SupportedPlatformItemProps {
  label: string;
  href: string;
  icon: string;
  className?: string;
}

export const SupportedPlatformItem = ({
  label,
  href,
  icon,
  className,
}: SupportedPlatformItemProps) => {
  return (
    <Link
      className={cn(
        "flex cursor-pointer flex-row items-center justify-center gap-4 overflow-hidden rounded-xl border border-border bg-background p-4 transition-colors duration-200 hover:bg-accent/60",
        className
      )}
      href={href}
    >
      <Image
        src={icon}
        alt={`${label} icon`}
        width={32}
        height={32}
        className="invert dark:invert-0"
      />
      <p className="text-lg font-medium">{label}</p>
    </Link>
  );
};
