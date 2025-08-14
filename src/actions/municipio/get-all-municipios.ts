"use server";

import { MunicipioData } from "@/types/pescadores/municipio";
import fetchData from "@/lib/fetch-data";

export async function getAllMunicipios(): Promise<MunicipioData[]> {
  const municipios = await fetchData<MunicipioData[]>({
    url: "/municipios/",
    method: "GET",
    next: {
      tags: ["municipios"],
    },
  });
  return municipios;
}
