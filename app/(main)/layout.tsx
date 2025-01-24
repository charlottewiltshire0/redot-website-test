"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
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
  );
}
