"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { IconDownload } from "@tabler/icons-react";
import { versions } from "@/constants/versions";

interface DownloadDialogProps {
  readonly platform: string;
  readonly arch: string;
}

export default function DownloadDialog({
  platform,
  arch,
}: DownloadDialogProps) {
  const [open, setOpen] = useState(false);
  const [version, setVersion] = useState("stable");

  const t = useTranslations("downloadDialog");

  const mapPlatform = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "windows":
        return "win";
      case "mac":
        return "macos";
      case "linux":
        return "linux";
      case "android":
        return "android";
      default:
        console.error("Unsupported platform");
    }
  };

  const fetchDownloadUrl = async () => {
    const mappedPlatform = mapPlatform(platform);
    const response = await fetch(
      `/api/download?platform=${mappedPlatform}&arch=${arch}&channel=${version}`
    );
    if (!response.ok) {
      console.error("Failed to fetch download URL");
    }
    const data = await response.json();
    return data.url;
  };

  const handleDownload = async () => {
    try {
      window.location.href = await fetchDownloadUrl();
    } catch (error) {
      console.error("Download failed:", error);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="px-8">
          <IconDownload className="mr-2 h-5 w-5" />
          {t("downloadButton")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <RadioGroup
            value={version}
            onValueChange={setVersion}
            className="space-y-4"
          >
            {versions.map((v) => (
              <Card
                key={v.id}
                className={`transition-all ${version === v.id ? "border-primary" : "hover:border-primary/50"}`}
              >
                <CardContent className="flex items-center space-x-4 p-4">
                  <RadioGroupItem value={v.id} id={v.id} className="sr-only" />
                  <v.icon
                    className={`h-6 w-6 ${version === v.id ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <Label
                    htmlFor={v.id}
                    className="flex-grow cursor-pointer space-y-1"
                  >
                    <div className="font-semibold">{t(`${v.id}.name`)}</div>
                    <div className="text-sm text-muted-foreground">
                      {t(`${v.id}.description`)}
                    </div>
                  </Label>
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button onClick={handleDownload} size="lg" className="w-full">
            <IconDownload className="mr-2 h-5 w-5" />
            Download {version.charAt(0).toUpperCase() + version.slice(1)}{" "}
            Version
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
