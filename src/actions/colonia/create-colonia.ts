"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function createColonia(formData: FormData): Promise<void> {
  const data = {
    codigo: formData.get("codigo"),
    comunidade_id: formData.get("comunidade"),
  };

  await fetchData({
    url: "/colonias/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("colonias");
}
