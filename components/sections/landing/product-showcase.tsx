"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export const ProductShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#FFD2D2] py-24"
    >
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
              🪁 Powering Your Game Development
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 text-center text-4xl font-bold tracking-tighter md:text-[54px] md:leading-[60px]"
          >
            Powering Your <br /> Game Development
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 text-center text-xl tracking-tighter text-black/60 md:text-[22px] md:leading-[30px]"
          >
            Unlock endless possibilities with our flexible and high-performance
            game engine for every creator.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative mx-5 mt-10 aspect-video h-full lg:mx-24"
        >
          <Image
            src="https://image.redotengine.org/productImage.webp"
            alt="Product Image"
            className="h-auto w-full rounded-lg object-cover sm:w-auto"
            fill
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
