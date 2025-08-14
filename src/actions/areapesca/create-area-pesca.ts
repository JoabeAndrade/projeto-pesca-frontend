"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function createAreaPesca(formData: FormData): Promise<void> {
  const data = {
    descricao: formData.get("descricao"),
  };

  await fetchData({
    url: "/areaspesca/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("areas-pesca");
}
