"use server";

import { MunicipioData } from "@/types/pescadores/municipio";
import fetchData from "@/lib/fetch-data";

export async function getMunicipio(id: string): Promise<MunicipioData> {
  const municipio = await fetchData<MunicipioData>({
    url: `/municipios/${id}/`,
    method: "GET",
    next: {
      tags: [`municipio-${id}`],
    },
  });
  return municipio;
}
