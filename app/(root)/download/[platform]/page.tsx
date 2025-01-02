import { DownloadHero } from "@/components/sections/download/hero";
import { ThreeSteps } from "@/components/sections/download/three-steps";
import { SupportedPlatform } from "@/components/sections/download/supported-platform";
import { Help } from "@/components/sections/download/help";
import { Information } from "@/components/sections/download/information";

export default async function DownloadPlatform({
  params,
}: {
  params: Promise<{ platform: string }>;
}) {
  const platform = (await params).platform;
  return (
    <div>
      <DownloadHero platform={platform} />
      <ThreeSteps />
      <SupportedPlatform />
      <Information />
      <Help />
    </div>
  );
}
