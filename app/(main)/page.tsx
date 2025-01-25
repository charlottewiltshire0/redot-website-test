"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/landing/Hero";
import { ProductShowcase } from "@/components/sections/landing/ProductShowcase";

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
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <Features />
      <Blog />
      <Review />
      <Start />
    </div>
  );
}
