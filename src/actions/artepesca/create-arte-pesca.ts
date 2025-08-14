"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function createArtePesca(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
  };

  await fetchData({
    url: "/artespesca/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("artes-pesca");
}
