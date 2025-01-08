import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
