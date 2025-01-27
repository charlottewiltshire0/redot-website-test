"use client";

import SectionHeader from "@/components/SectionHeader";
import { ContactCard } from "@/components/contact/ContactCard";
import { contactCardsData } from "@/constants/contactCardsData";
import { Start } from "@/components/sections/landing/Start";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { faqList } from "@/constants/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const t = useTranslations("contact");

  return (
    <div ref={ref}>
      <div className="relative flex w-full items-start justify-center bg-white bg-grid-black/[0.1] dark:bg-background dark:bg-grid-white/[0.1]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>
        <div className="relative z-20 px-5 pb-5 pt-10 lg:px-40">
          <SectionHeader section="contact" />
        </div>
      </div>
      <div className="mt-10 px-5 lg:px-40">
        <div className="grid grid-rows-4 gap-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          {contactCardsData.map((card, index) => (
            <motion.div
              key={card.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <ContactCard
                icon={card.icon}
                title={t(`contactCard.${card.title}`)}
                description={t(`contactCard.${card.description}`)}
                links={card.links}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-24 px-5 lg:px-40">
        <div className="flex flex-col items-center gap-8">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tighter md:text-4xl">
            {t("faqTitle")}
          </h2>
          <Accordion type="single" className="w-full md:w-[600px]" collapsible>
            {faqList.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left">
                  {t(`faq.${faq.question}`)}
                </AccordionTrigger>
                <AccordionContent> {t(`faq.${faq.answer}`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Start />
    </div>
  );
}
