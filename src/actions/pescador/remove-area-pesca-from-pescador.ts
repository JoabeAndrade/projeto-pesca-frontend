"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function removeAreaPescaFromPescador(
  idPescador: number,
  idAreaPesca: number
): Promise<void> {
  const data = { id_areapesca: idAreaPesca };
  await fetchData({
    url: `/pescadores/${idPescador}/areaspesca/`,
    method: "DELETE",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${idPescador}`);
}
