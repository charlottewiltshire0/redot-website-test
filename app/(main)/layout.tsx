"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Lenis from "@/components/Lenis";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Lenis>
      <section className="scroll-smooth">
        <div className="absolute">
          <CookieConsent
            onAcceptCallback={() => {}}
            onDeclineCallback={() => {}}
          />
        </div>

        <Header />
        {children}
        <Footer />
      </section>
    </Lenis>
  );
}
