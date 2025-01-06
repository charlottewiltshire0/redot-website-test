"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { links } from "@/constants/links";
import { useTranslations } from "next-intl";

export const Start = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const t = useTranslations("startSection");

  return (
    <section
      ref={ref}
      className="overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#FFD2D2] py-20 md:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="px-5 lg:px-40"
      >
        <div className="mx-auto max-w-[540px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 bg-gradient-to-b from-black to-[#7F0000] bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 text-center text-xl tracking-tighter text-black/60 md:text-[22px] md:leading-[30px]"
          >
            {t("description")}
          </motion.p>

          <div className="mt-[38px] flex flex-col items-center justify-center gap-1 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full md:w-auto"
            >
              <Button className="w-full md:w-auto" asChild>
                <Link href="/download">{t("buttons.download")}</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-auto"
            >
              <Button variant="link" className="w-full md:w-auto" asChild>
                <Link href={links.documentation}>
                  {t("buttons.documentation")}
                  <IconArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
