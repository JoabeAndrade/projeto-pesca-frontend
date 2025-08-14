"use server";

import { ComunidadeData } from "@/types/pescadores/comunidade";
import fetchData from "@/lib/fetch-data";

export default async function getComunidade(
  id: string
): Promise<ComunidadeData> {
  const comunidade = await fetchData<ComunidadeData>({
    url: `/comunidades/${id}/`,
    method: "GET",
    next: {
      tags: [`comunidade-${id}`],
    },
  });
  return comunidade;
}
