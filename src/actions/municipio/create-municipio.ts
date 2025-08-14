"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function createMunicipio(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
    uf: formData.get("uf"),
  };

  await fetchData({
    url: "/municipios/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("municipios");
}
