"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function removeArtePescaFromPescador(
  idPescador: number,
  idArtePesca: number
): Promise<void> {
  const data = { id_artepesca: idArtePesca };
  await fetchData({
    url: `/pescadores/${idPescador}/artespesca/`,
    method: "DELETE",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${idPescador}`);
}
