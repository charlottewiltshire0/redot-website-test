"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/landing/Hero";
import { ProductShowcase } from "@/components/sections/landing/ProductShowcase";
import { TextReveal } from "@/components/ui/text-reveal";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const Features = dynamic(
  () =>
    import("@/components/sections/landing/Features").then(
      (mod) => mod.Features
    ),
  {
    ssr: false,
  }
);

const Review = dynamic(
  () =>
    import("@/components/sections/landing/Review").then((mod) => mod.Review),
  {
    ssr: false,
  }
);

const Blog = dynamic(
  () => import("@/components/sections/landing/Blog").then((mod) => mod.Blog),
  {
    ssr: false,
  }
);

const Start = dynamic(
  () => import("@/components/sections/landing/Start").then((mod) => mod.Start),
  {
    ssr: false,
  }
);

export default function Landing() {
  const t = useTranslations("textRevealSection");
  
  useEffect(() => {
    document.documentElement.style.transform = "rotate(180deg)";
    document.documentElement.style.transformOrigin = "center";
  }, []);

  return (
    <main>
      <Hero />
      <ProductShowcase />
      <TextReveal text={t("body")} />
      <Features />
      <Blog />
      <Review />
      <Start />
    </main>
  );
}
