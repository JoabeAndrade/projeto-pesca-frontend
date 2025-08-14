"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function createAssociacao(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
  };

  await fetchData({
    url: "/associacoes/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("associacoes");
}
