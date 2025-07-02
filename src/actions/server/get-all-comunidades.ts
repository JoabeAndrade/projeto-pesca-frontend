"use server";

import { ComunidadeData } from "@/types/pescadores/comunidade";

export async function getAllComunidades(): Promise<ComunidadeData[]> {
  const comunidades = await fetch("http://localhost:8000/comunidades");
  const jsonComunidades = await comunidades.json();
  return jsonComunidades;
}
