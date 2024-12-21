import { links } from "@/constants/links";

interface HeaderLink {
  label: string;
  href: string;
}

export const header: HeaderLink[] = [
  {
    label: "Documentation",
    href: links.documentation,
  },
  {
    label: "Blog",
    href: "/blog/",
  },
  {
    label: "Proposals",
    href: links.proposals,
  },
  {
    label: "Community",
    href: "/community/",
  },
];
