import Banner from "@/components/banner";
import Link from "next/link";
import Image from "next/image";
import { headerLinks } from "@/constants/headerLinks";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "@/components/mobile-navbar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[50] w-full backdrop-blur-sm">
      <Banner
        subMessage="Upgrade to the latest version."
        mainMessage="Redot Engine is now stable!"
        link="https://www.redotengine.org/news/release-4-3-stable"
      />
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="rounded-md border border-slate-800 bg-black p-2"
            >
              <Image
                src="/logo.webp"
                alt="Redot Engine Logo"
                width={30}
                height={30}
              />
            </Link>
            <div className="hidden lg:block">
              <nav className="flex items-center gap-3 md:gap-6">
                {headerLinks.map((link) => (
                  <Link
                    key={link.label}
                    className="font-medium text-black/60 transition-colors duration-300 hover:text-black"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="/download">Download</Link>
                </Button>
              </nav>
            </div>
            <div className="block lg:hidden">
              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
