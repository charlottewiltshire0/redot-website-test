"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ReviewCard } from "@/components/review/review-card";
import Marquee from "@/components/ui/marquee";
import { reviews } from "@/constants/reviews";

export const Review = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section ref={ref} className="overflow-x-clip bg-background pt-24">
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
              🎉 Stable version is here
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-center text-3xl font-bold tracking-tighter sm:text-[54px] sm:leading-[60px]"
          >
            What our users say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 text-center text-base tracking-tighter text-black/60 sm:text-[22px] sm:leading-[30px]"
          >
            Redot Engine empowers developers with flexibility and performance
            for creating amazing games.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <div className="hidden md:block">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard
                    key={review.username}
                    className="w-64"
                    {...review}
                  />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                  <ReviewCard
                    key={review.username}
                    className="w-64"
                    {...review}
                  />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="relative flex flex-row items-center justify-center overflow-hidden rounded-lg border bg-background">
              <Marquee
                pauseOnHover
                vertical
                className="w-full [--duration:20s]"
              >
                {firstRow.map((review) => (
                  <ReviewCard
                    key={review.username}
                    className="w-full"
                    {...review}
                  />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
