"use client";

import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { getPlatformDownloadLink } from "@/lib/platformDownloadLink";
import React from "react";
import Image from "next/image";

export const DownloadHero = ({ platform }: { platform: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const t = useTranslations("downloadHero");

  return (
    <section
      ref={ref}
      className="relative mx-5 space-y-16 rounded-md bg-[url('https://image.redotengine.org/background.png')] bg-cover bg-center py-20 md:mx-10 md:py-0 md:pt-24 lg:mx-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex flex-col items-center space-y-8 md:space-y-12"
      >
        <div className="mx-5 flex flex-col items-center gap-4 text-center md:gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter text-primary-foreground dark:text-primary md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-xl text-base text-muted dark:text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="dark w-auto" asChild>
            <div className="flex items-center">
              <IconDownload />
              <Link
                href={getPlatformDownloadLink(platform)}
                className="text-wrap"
              >
                {t("downloadButton")}
              </Link>
            </div>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mx-10 mt-10 hidden h-[250px] select-none md:block lg:mx-24"
      >
        <Image
          src="https://image.redotengine.org/downloadProduct.png"
          alt="Product Image"
          className="h-auto w-full rounded-t-lg object-cover object-top sm:w-auto"
          priority
          fill
        />
      </motion.div>
    </section>
  );
};
