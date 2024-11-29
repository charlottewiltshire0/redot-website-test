import { IconArrowRight } from "@tabler/icons-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#C26D18,#FEF1EA_66%)] pb-20 pt-8">
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="z-10 flex pt-1">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>🎉 Stable version is here</span>
                  <IconArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#7F2C00] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
              Game Engine, <br /> Game Changer
            </h1>
            <p className="text-[#3E2901} mt-6 text-xl tracking-tight">
              Create your 2D and 3D games, cross-platform projects, or explore
              innovative ideas in XR technology with Redot Engine!
            </p>
            <div className="mt-[38px] flex flex-col items-center gap-1 md:flex-row">
              <Button asChild>
                <Link href="/download">Get Redot Engine for Windows</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="https://docs.redotengine.org/">
                  Learn more
                  <IconArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
