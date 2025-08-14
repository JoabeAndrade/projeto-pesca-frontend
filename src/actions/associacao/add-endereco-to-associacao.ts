"use server";

import fetchData from "@/lib/fetch-data";
import { AssociacaoData } from "@/types/pescadores/associacao";
import { revalidateTag } from "next/cache";

export async function addEnderecoToAssociacao(
  idEndereco: number,
  idAssociacao: number
): Promise<AssociacaoData> {
  const response = await fetchData<AssociacaoData>({
    url: `/associacoes/${idAssociacao}/`,
    method: "PATCH",
    body: JSON.stringify({ endereco_id: idEndereco }),
  });

  revalidateTag(`associacao-${idAssociacao}`);

  revalidateTag("associacoes");

  return response;
}
