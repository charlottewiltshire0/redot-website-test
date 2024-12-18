"use client";

import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";

interface DisableAnimationsProps extends MotionProps {
  children: React.ReactNode;
}

const DisableAnimations: React.FC<DisableAnimationsProps> = ({
  children,
  ...rest
}) => {
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
    return (
      <div {...rest} style={{ ...rest.style }}>
        {children}
      </div>
    );
  }

  return <motion.div {...rest}>{children}</motion.div>;
};

export default DisableAnimations;
