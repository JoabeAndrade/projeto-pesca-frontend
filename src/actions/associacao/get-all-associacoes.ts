"use server";

import { AssociacaoData } from "@/types/pescadores/associacao";
import fetchData from "@/lib/fetch-data";

export async function getAllAssociacoes(): Promise<AssociacaoData[]> {
  const associacoes = await fetchData<AssociacaoData[]>({
    url: "/associacoes/",
    method: "GET",
    next: {
      tags: ["associacoes"],
    },
  });
  return associacoes;
}
