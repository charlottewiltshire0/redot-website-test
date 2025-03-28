"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Start = dynamic(
  () => import("@/components/sections/landing/Start").then((mod) => mod.Start),
  {
    ssr: false,
  }
);

export default function Landing() {
  const t = useTranslations("textRevealSection");

  return (
    <main>
      <Start />
    </main>
  );
}
