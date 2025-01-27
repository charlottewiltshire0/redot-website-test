import { CTA } from "@/components/CTA";
import { links } from "@/constants/links";

export const Start = () => {
  return (
    <CTA
      titleKey="startSection.title"
      descriptionKey="startSection.description"
      buttonLinks={[
        { href: "/download", labelKey: "startSection.buttons.download" },
        {
          href: links.documentation,
          labelKey: "startSection.buttons.documentation",
          variant: "link",
        },
      ]}
    />
  );
};
