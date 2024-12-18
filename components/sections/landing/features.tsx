"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Marquee from "@/components/ui/marquee";
import { featuresList } from "@/constants/features-list";
import { FeaturesCard } from "@/components/features/features-card";
import FeaturesHighlight from "@/components/features/features-highlight";
import { IconCommand } from "@tabler/icons-react";
import { featuresHighlightLists } from "@/constants/features-highlight-list";

export const Features = () => {
  const { inView, ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const firstRow = featuresList.slice(0, featuresList.length / 2);

  return (
    <section ref={ref} className="overflow-x-clip pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="px-5 lg:px-40"
      >
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex h-9 items-center rounded-md border border-input bg-background px-3 text-center text-sm font-medium hover:bg-accent"
            >
              🤖 Next-Gen Game Design
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-center text-3xl font-bold tracking-tighter sm:text-[54px] sm:leading-[60px]"
          >
            Redot Engine&apos;s <br /> Powerful Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 text-center text-base tracking-tighter text-black/60 sm:text-[22px] sm:leading-[30px]"
          >
            Discover cutting-edge tools and capabilities designed to bring your
            game ideas to life effortlessly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <Marquee pauseOnHover className="[--duration:15s]">
              {firstRow.map((feature) => (
                <FeaturesCard key={feature.label} {...feature} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:15s]">
              {firstRow.map((feature) => (
                <FeaturesCard key={feature.label} {...feature} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
          </div>
        </motion.div>

        <div className="mt-6">
          <div className="relative flex max-h-[50rem] min-h-[40rem] w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="relative grid h-full place-items-center gap-16 p-16 md:grid-cols-2 lg:gap-32 lg:p-32">
              {featuresHighlightLists.map((feature, index) => (
                <motion.div
                  key={feature.header}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                >
                  <FeaturesHighlight
                    icon={feature.icon || <IconCommand className="h-6 w-6" />}
                    header={feature.header}
                    description={feature.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
