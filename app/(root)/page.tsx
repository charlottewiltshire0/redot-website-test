"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/landing/hero";
import { ProductShowcase } from "@/components/sections/landing/product-showcase";

const Features = dynamic(
  () =>
    import("@/components/sections/landing/features").then(
      (mod) => mod.Features
    ),
  {
    ssr: false,
  }
);

const Review = dynamic(
  () =>
    import("@/components/sections/landing/review").then((mod) => mod.Review),
  {
    ssr: false,
  }
);

const Start = dynamic(
  () => import("@/components/sections/landing/start").then((mod) => mod.Start),
  {
    ssr: false,
  }
);

export default function Landing() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      {/* TODO: Implement a news/blog system */}
      <Features />
      <Review />
      <Start />
    </div>
  );
}
