"use server";

import { PescadorData } from "@/types/pescadores/pescador";
import fetchData from "@/lib/fetch-data";

export default async function getPescador(
  id: string | number
): Promise<PescadorData> {
  const pescador = await fetchData<PescadorData>({
    url: `/pescadores/${id}/`,
    method: "GET",
    next: {
      tags: [`pescador-${id}`],
    },
  });
  return pescador;
}
