"use server";

import { MunicipioData } from "@/types/pescadores/municipio";

export async function getMunicipio(id: string): Promise<MunicipioData> {
  const municipios = await fetch(`http://localhost:8000/municipios/${id}`);
  const jsonMunicipios = await municipios.json();
  return jsonMunicipios;
}
