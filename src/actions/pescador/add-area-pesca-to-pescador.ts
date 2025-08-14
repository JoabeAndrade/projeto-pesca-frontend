"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function addAreaPescaToPescador(
  formData: FormData
): Promise<void> {
  const idPescador = formData.get("pescador_id");
  if (!idPescador) throw new Error("ID do pescador não fornecido.");

  const data = { id_areapesca: formData.get("area_pesca") };
  await fetchData({
    url: `/pescadores/${idPescador}/areaspesca/`,
    method: "POST",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${idPescador}`);
}
