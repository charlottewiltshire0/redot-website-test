"use client";

import SectionHeader from "@/components/SectionHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Start } from "@/components/sections/landing/Start";
import { LicenseContent } from "@/components/licenses/LicenseContent";

const licensesUrl =
  "https://raw.githubusercontent.com/Redot-Engine/redot-engine/refs/heads/master/";
const licenseTypes = ["LICENSE", "COPYRIGHT", "LOGO_LICENSE"];

export default function License() {
  const [licenses, setLicenses] = useState<{ [key: string]: string | null }>({
    LICENSE: null,
    COPYRIGHT: null,
    LOGO_LICENSE: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const responses = await Promise.all(
          licenseTypes.map(async (type) => {
            const url = `${licensesUrl}${type}.txt`;
            try {
              const response = await axios.get(url);
              return { [type]: response.data };
            } catch (innerError) {
              console.error(`Error fetching ${type}:`, innerError);
              return { [type]: null };
            }
          })
        );

        setLicenses(Object.assign({}, ...responses));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching licenses:", error);
        setIsLoading(false);
      }
    };

    fetchLicenses();
  }, []);

  return (
    <div>
      <div className="relative flex w-full items-start justify-center bg-white bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.1]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 px-5 pb-5 pt-10 lg:px-40">
          <SectionHeader section="licenses" />
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-8 px-5 lg:px-40">
        {licenseTypes.map((type) => (
          <LicenseContent
            key={type}
            type={type}
            content={licenses[type]}
            isLoading={isLoading}
          />
        ))}
      </div>
      <Start />
    </div>
  );
}
