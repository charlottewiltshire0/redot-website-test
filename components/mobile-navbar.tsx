import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { headerLinks } from "@/constants/headerLinks";
import { IconMenu } from "@tabler/icons-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open Menu">
        <IconMenu />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-start justify-start gap-2">
          {headerLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className="block text-xl font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
