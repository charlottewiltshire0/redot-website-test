"use client";

import { useState, useEffect } from "react";
import { detect } from "detect-browser";
import { platformMapping } from "@/constants/platformMapping";

const useOS = () => {
  const [os, setOS] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browser = detect();

      if (!browser) {
        console.error("Unable to detect browser");
        return;
      }

      if (browser) {
        const detectedOS = browser.os
          ? browser.os
              .toLowerCase()
              .replace(/\d+/g, "")
              .trim()
              .replace(/\s+/g, "") || ""
          : null;
        setOS(platformMapping[detectedOS] || detectedOS || "unknown");
      } else {
        setOS("unknown");
      }
    } else {
      setOS("server");
    }
  }, []);

  return os;
};

export default useOS;
