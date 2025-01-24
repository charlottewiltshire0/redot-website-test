"use client";

import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader";
import { Start } from "@/components/sections/landing/Start";
import { CommunityCard } from "@/components/community/CommunityCard";
import { motion } from "motion/react";
import {
  communityLinks,
  communitySpaces,
  supportContributions,
} from "@/constants/socials";

export default function Community() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const t = useTranslations("community");

  return (
    <div ref={ref}>
      <div className="relative flex w-full items-start justify-center bg-white bg-grid-black/[0.1] dark:bg-background dark:bg-grid-white/[0.1]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
        <div className="relative z-20 px-5 pb-5 pt-10 lg:px-40">
          <SectionHeader section="community" />
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="mt-24 px-5 lg:px-40"
      >
        <div className="flex flex-col gap-8">
          {/* Social Platforms */}
          <div className="flex flex-col gap-8">
            <h2 className="mt-5 text-left text-3xl font-bold tracking-tighter md:text-4xl">
              {t("socialPlatforms")}
            </h2>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {communityLinks.map(({ imageUrl, label, description, href }) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={cardVariants}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  <CommunityCard
                    imageUrl={imageUrl}
                    label={label}
                    description={t(description)}
                    href={href}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community Spaces */}
          <div className="flex flex-col gap-8">
            <h2 className="mt-5 text-left text-3xl font-bold tracking-tighter md:text-4xl">
              {t("communitySpaces")}
            </h2>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {communitySpaces.map(({ imageUrl, label, description, href }) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={cardVariants}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                  }}
                >
                  <CommunityCard
                    imageUrl={imageUrl}
                    label={label}
                    description={t(description)}
                    href={href}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support and Contributions */}
          <div className="flex flex-col gap-8">
            <h2 className="mt-5 text-left text-3xl font-bold tracking-tighter md:text-4xl">
              {t("supportAndContributions")}
            </h2>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {supportContributions.map(
                ({ imageUrl, label, description, href }) => (
                  <motion.div
                    key={label}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={cardVariants}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                  >
                    <CommunityCard
                      imageUrl={imageUrl}
                      label={label}
                      description={t(description)}
                      href={href}
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <Start />
    </div>
  );
}
