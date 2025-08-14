"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function removeAssociacaoFromPescador(
  idPescador: number,
  idAssociacao: number
): Promise<void> {
  const data = { associacao_id: idAssociacao };
  await fetchData({
    url: `/pescadores/${idPescador}/associacoes/`,
    method: "DELETE",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${idPescador}`);
}
