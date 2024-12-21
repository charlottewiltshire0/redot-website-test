import { links } from "@/constants/links";

interface Footer {
  title: string;
  href?: string;
  children?: Footer[];
}

export const footer: Footer[] = [
  {
    title: "Product",
    children: [
      { title: "Download", href: "/download" },
      { title: "Status", href: links.status },
      { title: "Donate", href: links.donation },
      { title: "Documentation", href: links.documentation },
      { title: "Source Code", href: links.github },
    ],
  },
  {
    title: "Resources",
    children: [
      { title: "News", href: "/news" },
      { title: "Feedback", href: links.feedback },
      { title: "Community", href: "/community" },
      { title: "Press Kit", href: links.pressKit },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Beta Programs",
    children: [
      { title: "Launcher", href: "/beta/launcher" },
      { title: "Academy", href: links.academy },
      { title: "Engine Experimental", href: "/beta/engine-experimental" },
    ],
  },
  {
    title: "Policies",
    children: [
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
      { title: "Cookie Settings", href: "/cookie-settings" },
      { title: "Licenses", href: "/license" },
      { title: "Contribution Guidelines", href: links.contribute },
    ],
  },
];
