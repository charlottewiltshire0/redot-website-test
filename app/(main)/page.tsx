"use client";

import dynamic from "next/dynamic";

const Start = dynamic(
  () => import("@/components/sections/landing/Start").then((mod) => mod.Start),
  {
    ssr: false,
  }
);

export default function Landing() {
  return (
    <main>
      <Start />
    </main>
  );
}
