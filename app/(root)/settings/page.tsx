import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { AppearanceForm } from "@/components/settings/AppearanceForm";

export const metadata: Metadata = {
  title: "Appearance",
};

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the look and feel of your experience by adjusting themes,
          colors, and display preferences.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  );
}
