"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import HeaderSection from "@/components/header-section";
import { SupportedPlatformItem } from "@/components/supported-platform/supported-platform-item";
import { supportedPlatforms } from "@/constants/supported-platforms";

export const SupportedPlatform = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="overflow-x-clip bg-background pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="px-5 lg:px-40"
      >
        <HeaderSection section="downloadSupportedPlatform" />

        <div className="mt-10 flex flex-row flex-wrap justify-center gap-4">
          {supportedPlatforms.map((platform, index) => (
            <motion.div
              key={platform.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 * index,
              }}
              className="w-full sm:w-auto"
            >
              <SupportedPlatformItem
                label={platform.label}
                href={platform.href}
                icon={platform.icon}
                className="w-full sm:w-auto"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
