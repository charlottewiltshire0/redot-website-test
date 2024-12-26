"use client";

import { useRouter } from "next/navigation";
import { detect } from "detect-browser";
import { platformMapping } from "@/constants/platformMapping";

export const runtime = "edge";

export default function Download() {
  const router = useRouter();

  const browser = detect();

  if (!browser) {
    console.error("Unable to detect browser");
    return <></>;
  }

  const rawPlatform =
    browser.os?.toLowerCase().replace(/\d+/g, "").trim().replace(/\s+/g, "") ||
    "";
  const detectedPlatform =
    platformMapping[rawPlatform as keyof typeof platformMapping] || rawPlatform;

  if (detectedPlatform) {
    router.push(`/download/${detectedPlatform}`);
  } else {
    console.error("Unable to determine platform");
  }

  return <></>;
}
