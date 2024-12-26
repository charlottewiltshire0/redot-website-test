import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { header } from "@/constants/header";
import { IconMenu } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const MobileSidebar = () => {
  const t = useTranslations("header");

  return (
    <Sheet>
      <SheetTrigger aria-label="Open Menu">
        <IconMenu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="mb-4 flex flex-col gap-2 text-xl font-medium">
          <Image
            src="/logo.webp"
            alt="Redot Engine Logo"
            width={30}
            height={30}
            style={{ filter: "invert(100%)" }}
          />
          Redot Engine
        </SheetTitle>
        <div className="flex flex-col items-start justify-start gap-1">
          {header.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className="block text-lg">{t(link.label)}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
