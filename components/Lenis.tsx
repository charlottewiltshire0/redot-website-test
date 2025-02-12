"use client";
import React, { PropsWithChildren } from "react";
import ReactLenis from "lenis/react";

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ duration: 1.4 }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
