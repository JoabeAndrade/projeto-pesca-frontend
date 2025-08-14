"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function createComunidade(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
    municipio_id: formData.get("municipio"),
  };

  await fetchData({
    url: "/comunidades/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("comunidades");
}
