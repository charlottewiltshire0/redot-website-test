"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface DisableAnimationsProps {
  children: React.ReactNode;
  [key: string]: any;
}

const DisableAnimations = ({ children, ...rest }: DisableAnimationsProps) => {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setDisableAnimations(isMobile);

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setDisableAnimations(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (disableAnimations) {
    return <div {...rest}>{children}</div>;
  }

  return <motion.div {...rest}>{children}</motion.div>;
};

export default DisableAnimations;
