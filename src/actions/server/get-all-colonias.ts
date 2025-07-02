"use server";

import { ColoniaData } from "@/types/pescadores/colonia";

export async function getAllColonias(): Promise<ColoniaData[]> {
  const colonias = await fetch("http://localhost:8000/colonias");
  const coloniasJson = await colonias.json();
  return coloniasJson;
}
