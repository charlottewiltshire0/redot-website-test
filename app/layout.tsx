import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const runtime = "edge";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redotengine.org"),
  title: {
    default: "Redot Engine: Open source game engine for everyone.",
    template: "%s - Redot Engine",
  },
  description:
    "Redot Engine is an open-source game engine that enables developers to create stunning games with ease, offering powerful features, an active community, and a seamless development experience.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 selection:bg-zinc-700/60 selection:text-white"
    >
      <head>
        <link rel="preconnect" href="https://image.redotengine.org" />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} />
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
