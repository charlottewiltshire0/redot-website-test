import {
  Icon3dCubeSphere,
  IconBrandGithub,
  IconCamera,
  IconCommand,
  IconDeviceDesktop,
  IconDeviceHeartMonitor,
} from "@tabler/icons-react";
import React from "react";

export interface FeaturesHighlightList {
  header: string;
  description: string;
  icon?: React.ReactNode;
}

export const featuresHighlightLists: FeaturesHighlightList[] = [
  {
    header: "Scene-driven design",
    description:
      "Create reusable scenes with nodes, scripts, and clear game logic via node hierarchy.",
    icon: <IconCamera className="h-6 w-6" />,
  },
  {
    header: "Cross platform",
    description:
      "Develop on various platforms. Deploy your game on desktop, mobile, and web quickly.",
    icon: <IconDeviceDesktop className="h-6 w-6" />,
  },
  {
    header: "2D and 3D engines",
    description:
      "Create performant 2D games with Redot's 2D engine and build rich 3D worlds easily.",
    icon: <Icon3dCubeSphere className="h-6 w-6" />,
  },
  {
    header: "Open Source",
    description:
      "Experience open development with Redot Engine, where all contributors share equally.",
    icon: <IconBrandGithub className="h-6 w-6" />,
  },
];
