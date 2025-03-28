"use client";

import dynamic from "next/dynamic";

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
    <main>
      <Blog />
      <Review />
      <Start />
    </main>
  );
}
