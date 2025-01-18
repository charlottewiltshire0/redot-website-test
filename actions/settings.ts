"use server";

import { cookies } from "next/headers";

export async function saveSettingsBlogLayout(layout: string) {
  const cookieStore = await cookies();
  cookieStore.set("blogLayout", layout);
}

export async function getSettingsBlogLayout() {
  const cookieStore = await cookies();
  return cookieStore.get("blogLayout")?.value || "new";
}
