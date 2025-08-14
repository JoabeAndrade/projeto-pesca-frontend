"use server";

import { ComunidadeData } from "@/types/pescadores/comunidade";
import fetchData from "@/lib/fetch-data";

export async function getAllComunidades(): Promise<ComunidadeData[]> {
  const comunidades = await fetchData<ComunidadeData[]>({
    url: "/comunidades/",
    method: "GET",
    next: {
      tags: ["comunidades"],
    },
  });
  return comunidades;
}
