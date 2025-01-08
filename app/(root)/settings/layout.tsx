import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sittings",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
