"use client";

import { useState, useEffect } from "react";
import { detect } from "detect-browser";
import { platformMapping } from "@/constants/platformMapping";

const useOS = () => {
  const [os, setOS] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browser = detect();

      if (!browser) {
        console.error("Unable to detect browser");
        return;
      }

      const detectedOS = browser.os
        ? browser.os
            .toLowerCase()
            .replace(/\d+/g, "")
            .trim()
            .replace(/\s+/g, "") || null
        : null;

      if (detectedOS && (detectedOS as keyof typeof platformMapping)) {
        setOS(platformMapping[detectedOS as keyof typeof platformMapping]);
      } else {
        setOS("unknown");
      }
    } else {
      setOS("unknown");
    }
  }, []);

  return os;
};

export default useOS;
