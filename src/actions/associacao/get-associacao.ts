"use server";

import { AssociacaoData } from "@/types/pescadores/associacao";

export async function getAssociacao(id: string): Promise<AssociacaoData> {
  const associacao = await fetch(`http://localhost:8000/associacoes/${id}`);
  const associacaoJson = await associacao.json();
  return associacaoJson;
}
