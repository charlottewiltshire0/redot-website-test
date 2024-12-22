"use server";

import { cookies } from "next/headers";

export async function setLanguage(value: string) {
  const cookieStore = await cookies();
  cookieStore.set("locale", value);
}

export async function getLanguage() {
  const cookieStore = await cookies();
  return cookieStore.get("locale")?.value || "en";
}
