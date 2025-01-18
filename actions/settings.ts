import { cookies } from "next/headers";

export async function saveSettingsBlogLayout(layout: string) {
  const cookieStore = await cookies();
  cookieStore.set("blogLayout", layout);
}
