"use server";

import { AssociacaoData } from "@/types/pescadores/associacao";
import fetchData from "@/lib/fetch-data";

export async function getAssociacao(id: string): Promise<AssociacaoData> {
  const associacao = await fetchData<AssociacaoData>({
    url: `/associacoes/${id}/`,
    method: "GET",
    next: {
      tags: [`associacao-${id}`],
    },
  });
  return associacao;
}
