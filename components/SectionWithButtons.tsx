"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface ButtonLink {
  readonly href: string;
  readonly labelKey: string;
}

interface SectionWithButtonsProps {
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly buttonLinks: readonly ButtonLink[];
  readonly additionalClassNames?: string;
}

export const SectionWithButtons = ({
  titleKey,
  descriptionKey,
  buttonLinks,
  additionalClassNames = "",
}: SectionWithButtonsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const t = useTranslations();

  return (
    <section
      ref={ref}
      className={cn(
        "overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#FFD2D2] py-20 md:py-36",
        additionalClassNames
      )}
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
            {t(titleKey)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 text-center text-xl tracking-tighter text-black/60 md:text-[22px] md:leading-[30px]"
          >
            {t(descriptionKey)}
          </motion.p>

          <div className="mt-[38px] flex flex-col items-center justify-center gap-1 md:flex-row">
            {buttonLinks.map(({ href, labelKey }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto" asChild>
                  <Link href={href}>
                    {t(labelKey)}
                    {index === 1 && <IconArrowRight className="h-5 w-5" />}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
