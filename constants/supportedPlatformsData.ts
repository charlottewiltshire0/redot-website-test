import { getPlatformDownloadLink } from "@/lib/platformDownloadLink";

export const supportedPlatformsData = [
  {
    label: "Android",
    href: "/download/android",
    icon: "/platform/android.svg",
  },
  {
    label: "Web Editor",
    href: getPlatformDownloadLink("webEditor"),
    icon: "/platform/web-editor.svg",
  },
  {
    label: "Windows",
    href: "/download/windows",
    icon: "/platform/windows.svg",
  },
  {
    label: "macOS",
    href: "/download/mac",
    icon: "/platform/apple.svg",
  },
  {
    label: "Linux",
    href: "/download/linux",
    icon: "/platform/linux.svg",
  },
];
