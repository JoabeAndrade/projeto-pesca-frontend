"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function addArtePescaToPescador(
  formData: FormData
): Promise<void> {
  const idPescador = formData.get("pescador_id");
  if (!idPescador) throw new Error("ID do pescador não fornecido.");

  const data = { id_artepesca: formData.get("arte_pesca") };
  await fetchData({
    url: `/pescadores/${idPescador}/artespesca/`,
    method: "POST",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${idPescador}`);
}
