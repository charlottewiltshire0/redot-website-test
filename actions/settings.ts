"use server";

import { cookies } from "next/headers";

export async function saveSettingsBlogLayout(layout: string) {
  const cookieStore = await cookies();
  cookieStore.set("blogLayout", layout, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}

export async function getSettingsBlogLayout() {
  const cookieStore = await cookies();
  return cookieStore.get("blogLayout")?.value || "new";
}
