"use server";

import { AssociacaoData } from "@/types/pescadores/associacao";
import fetchData from "./fetch-data";

export async function getAllAssociacoes(): Promise<AssociacaoData[]> {
  const associacoes = fetchData<AssociacaoData[]>({ url: "/associacoes/" });
  return associacoes;
}
