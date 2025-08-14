"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function addAssociacaoToPescador(
  formData: FormData
): Promise<void> {
  const idPescador = formData.get("pescador_id");
  if (!idPescador) throw new Error("ID do pescador não fornecido.");

  const data = { associacao_id: formData.get("associacao") };
  await fetchData({
    url: `/pescadores/${idPescador}/associacoes/`,
    method: "POST",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${idPescador}`);
}
