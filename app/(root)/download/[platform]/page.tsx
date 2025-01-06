import { DownloadHero } from "@/components/sections/download/hero";
import { ThreeSteps } from "@/components/sections/download/three-steps";
import { SupportedPlatform } from "@/components/sections/download/supported-platform";
import { Help } from "@/components/sections/download/help";
import { Information } from "@/components/sections/download/information";
import { Metadata } from "next";
import { platformMapping } from "@/constants/platformMapping";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function generateStaticParams() {
  return Object.keys(platformMapping).map(
    (platform) => platformMapping[platform]
  );
}

export async function generateMetadata(props: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const platform = params.platform;
  const capitalizedPlatform = capitalizeFirstLetter(platform);

  return {
    title: `Download for ${capitalizedPlatform}`,
  };
}

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
