"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function createDependente(formData: FormData): Promise<void> {
  const data = {
    pescador: formData.get("pescador_id"),
    relacao: formData.get("relacao"),
    quantidade: formData.get("quantidade"),
  };

  if (!data.pescador) throw new Error("ID do pescador não fornecido.");

  await fetchData({
    url: "/dependentes/",
    method: "POST",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${data.pescador}`);
}
