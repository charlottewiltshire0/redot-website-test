"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socials } from "@/constants/socials";
import { language } from "@/constants/language";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconChevronDown } from "@tabler/icons-react";
import { links } from "@/constants/links";
import { footer } from "@/constants/footer";

export const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("en");

  return (
    <footer className="relative bottom-0 z-[50] w-full bg-black text-white">
      <div className="px-5 py-16 lg:px-40">
        <div className="flex flex-col gap-10">
          <div className="mt-2 flex flex-row justify-between">
            <div className="flex flex-col gap-8">
              <div className="dark">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      role="combobox"
                      aria-expanded={open}
                      className="flex items-center justify-between gap-2 text-white/80"
                      disabled={!value}
                    >
                      <Image
                        src={`/flags/${language.find((lang) => lang.value === value)?.code}.svg`}
                        alt={
                          language.find((lang) => lang.value === value)
                            ?.label as string
                        }
                        width="20"
                        height="15"
                        className="mr-2 rounded"
                      />
                      {value
                        ? language.find((lang) => lang.value === value)?.label
                        : "Select language..."}
                      <IconChevronDown className="h-4 w-4 opacity-80" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[220px] p-0">
                    <Command>
                      <CommandInput placeholder="Search language..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {language.map((lang) => (
                            <CommandItem
                              key={lang.value}
                              value={lang.value}
                              onSelect={(currentValue) => {
                                if (currentValue !== value) {
                                  setValue(currentValue);
                                  setOpen(false);
                                }
                              }}
                            >
                              <Image
                                src={`/flags/${lang.code}.svg`}
                                alt={lang.label}
                                width="20"
                                height="15"
                                className="rounded"
                              />
                              {lang.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  value === lang.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-row gap-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition-all duration-300 hover:text-white/70"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {footer.map((category, index) => (
                <div key={index} className="text-sm">
                  <h3 className="font-medium text-white/80">
                    {category.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {category.children?.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href || "#"}
                          className="text-white/60 transition duration-300 hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-white/30" />

          <div className="flex items-center justify-between">
            <Image
              src="/logo.webp"
              alt="Redot Engine Logo"
              width={36}
              height={36}
            />
            <span className="text-center text-sm text-white/60">
              © 2024-present by the Redot community. Website&nbsp;
              <Link
                href={links.websiteGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-all duration-300 hover:text-white/70"
              >
                source code on Github
              </Link>
            </span>
            <Button variant="secondary" asChild>
              <Link href="/settings">Settings</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
