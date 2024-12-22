import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const runtime = "edge";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#FFD2D2] py-32">
        <div className="mx-auto max-w-[540px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="https://image.redotengine.org/redotchan.png"
              alt="Redotchan"
              width={160}
              height={160}
            />
            <div className="flex flex-col">
              <h2 className="mt-5 text-center text-4xl font-bold tracking-tighter md:text-[54px] md:leading-[60px]">
                {t("title")}
              </h2>
              <p className="mt-5 text-center text-xl tracking-tighter text-black/60 md:text-[22px] md:leading-[30px]">
                {t("description")}
              </p>
            </div>
            <Button asChild>
              <Link href="/">{t("goBack")}</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
