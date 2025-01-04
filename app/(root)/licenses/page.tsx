"use client";

import HeaderSection from "@/components/header-section";
import { useEffect, useState } from "react";
import axios from "axios";
import { Start } from "@/components/sections/landing/start";

export default function License() {
  const [files, setFiles] = useState<{ [key: string]: string }>({
    LICENSE: "",
    COPYRIGHT: "",
    LOGO_LICENSE: "",
  });

  useEffect(() => {
    const fileUrls = {
      LICENSE:
        "https://raw.githubusercontent.com/Redot-Engine/redot-engine/refs/heads/master/LICENSE.txt",
      COPYRIGHT:
        "https://raw.githubusercontent.com/Redot-Engine/redot-engine/refs/heads/master/COPYRIGHT.txt",
      LOGO_LICENSE:
        "https://raw.githubusercontent.com/Redot-Engine/redot-engine/refs/heads/master/LOGO_LICENSE.txt",
    };

    const fetchFiles = async () => {
      try {
        const responses = await Promise.all(
          Object.entries(fileUrls).map(async ([key, url]) => {
            const response = await axios.get(url);
            return { key, content: response.data };
          })
        );
        const newFiles = responses.reduce(
          (acc, { key, content }) => {
            acc[key] = content;
            return acc;
          },
          {} as { [key: string]: string }
        );

        setFiles(newFiles);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <div className="relative flex w-full items-start justify-center bg-white bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.1]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 px-5 pb-5 pt-10 lg:px-40">
          <HeaderSection section="licenses" />
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-8 px-5 lg:px-40">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">LICENSE</h3>
          <pre>{files.LICENSE}</pre>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">COPYRIGHT</h3>
          <pre>{files.COPYRIGHT}</pre>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">LOGO LICENSE</h3>
          <pre>{files.LOGO_LICENSE}</pre>
        </div>
      </div>

      <Start />
    </div>
  );
}
