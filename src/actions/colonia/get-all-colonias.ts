"use server";

import { ColoniaData } from "@/types/pescadores/colonia";
import fetchData from "@/lib/fetch-data";

export async function getAllColonias(): Promise<ColoniaData[]> {
  const colonias = await fetchData<ColoniaData[]>({
    url: "/colonias/",
    method: "GET",
    next: {
      tags: ["colonias"],
    },
  });
  return colonias;
}
