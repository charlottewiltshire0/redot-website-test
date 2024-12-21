import {
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconBrandReddit,
  IconBrandXFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

export interface SocialLink {
  url: string;
  icon: React.ReactNode;
}

export const socials: SocialLink[] = [
  {
    url: "https://x.com/Redot_Engine",
    icon: <IconBrandXFilled className="h-6 w-6" />,
  },
  {
    url: "https://discord.gg/redot",
    icon: <IconBrandDiscordFilled className="h-6 w-6" />,
  },
  {
    url: "https://github.com/Redot-Engine",
    icon: <IconBrandGithubFilled className="h-6 w-6" />,
  },
  {
    url: "https://www.youtube.com/@RedotEngine",
    icon: <IconBrandYoutubeFilled className="h-6 w-6" />,
  },
  {
    url: "https://www.reddit.com/r/RedotGameEngineMain",
    icon: <IconBrandReddit className="h-6 w-6" />,
  },
];
