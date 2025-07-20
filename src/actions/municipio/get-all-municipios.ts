"use server";

import { MunicipioData } from "@/types/pescadores/municipio";

export async function getAllMunicipios(): Promise<MunicipioData[]> {
  const municipios = await fetch("http://localhost:8000/municipios");
  const jsonMunicipios = await municipios.json();
  return jsonMunicipios;
}
