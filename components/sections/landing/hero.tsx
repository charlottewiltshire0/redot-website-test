"use client";

import { IconArrowRight } from "@tabler/icons-react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import Head from "next/head";

export const Hero = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="https://image.redotengine.org/cover.webp"
          imageSrcSet="https://image.redotengine.org/cover.webp 1x"
          type="image/webp"
        />
      </Head>
      <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FF1300,#FEEAEA_66%)] pb-20 pt-8">
        <div className="px-5 lg:px-40">
          <div className="items-center justify-center gap-24 md:flex">
            <div className="md:w-[478px]">
              <motion.div
                className="z-10 flex pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={cn(
                    "group rounded-full border border-black/5 bg-zinc-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>🎉 Stable version is here</span>
                    <IconArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </div>
              </motion.div>

              <motion.h1
                className="mt-6 bg-gradient-to-b from-black to-[#7F0000] bg-clip-text pb-6 text-5xl font-bold tracking-tighter text-transparent md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Game Engine, <br /> Game Changer
              </motion.h1>

              <motion.p
                className="text-xl tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Create your 2D and 3D games, cross-platform projects, or explore
                innovative ideas in XR technology with Redot Engine!
              </motion.p>

              <div className="mt-[38px] flex flex-col items-center gap-1 md:flex-row">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full md:w-auto"
                >
                  <Button asChild className="w-full md:w-auto">
                    <Link href="/download">Get Redot Engine for Windows</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full md:w-auto"
                >
                  <Button variant="link" asChild className="w-full md:w-auto">
                    <Link href="https://docs.redotengine.org/">
                      Learn more
                      <IconArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="relative mt-20 aspect-video h-full md:mt-0 md:flex-1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* TODO: Replace the image with a video showcasing the game footage from the game jam. */}
              <Image
                src="https://image.redotengine.org/cover.webp"
                alt="Hero cover"
                className="h-auto w-auto rounded-lg object-cover"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
