import { SectionWithButtons } from "@/components/SectionWithButtons";
import { links } from "@/constants/links";

export const Start = () => {
  return (
    <SectionWithButtons
      titleKey="startSection.title"
      descriptionKey="startSection.description"
      buttonLinks={[
        { href: "/download", labelKey: "startSection.buttons.download" },
        {
          href: links.documentation,
          labelKey: "startSection.buttons.documentation",
        },
      ]}
    />
  );
};
