"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { settingsSidebarItems } from "@/constants/settingsSidebarItems";

export const SettingsSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      {settingsSidebarItems.map((navItem) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === navItem.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
};
