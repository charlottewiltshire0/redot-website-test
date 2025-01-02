import { cn } from "@/lib/utils";

export const Tag = ({
  name,
  className,
  isActive,
  onClick,
}: {
  name: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-9 items-center rounded-full border border-input px-3 text-center text-sm hover:bg-accent",
        isActive ? "bg-accent" : "bg-background hover:bg-accent",
        className
      )}
    >
      {name}
    </button>
  );
};
