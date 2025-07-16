"use server";

import fetchData from "./fetch-data";
import { AssociacaoData } from "@/types/pescadores/associacao";

export async function addEnderecoToAssociacao(
  idEndereco: number, idAssociacao: number
): Promise<AssociacaoData> {
  const response = fetchData<AssociacaoData>({
    url: `/associacoes/${idAssociacao}`,
    method: "PATCH",
    body: JSON.stringify({ endereco_id: idEndereco })
  })

  return response;
}
