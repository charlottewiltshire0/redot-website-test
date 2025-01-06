import { DownloadHero } from "@/components/sections/download/DownloadHero";
import { DownloadThreeSteps } from "@/components/sections/download/DownloadThreeSteps";
import { DownloadSupportedPlatform } from "@/components/sections/download/DownloadSupportedPlatform";
import { DownloadHelp } from "@/components/sections/download/DownloadHelp";
import { DownloadInformation } from "@/components/sections/download/DownloadInformation";
import { Metadata } from "next";
import { platformMapping } from "@/constants/platformMapping";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function generateStaticParams() {
  return Object.keys(platformMapping).map(
    (platform) => platformMapping[platform as keyof typeof platformMapping]
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
      <DownloadThreeSteps />
      <DownloadSupportedPlatform />
      <DownloadInformation />
      <DownloadHelp />
    </div>
  );
}
