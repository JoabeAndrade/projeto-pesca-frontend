"use server";

import { ColoniaData } from "@/types/pescadores/colonia";
import fetchData from "@/lib/fetch-data";

export default async function getColonia(id: string): Promise<ColoniaData> {
  const colonia = await fetchData<ColoniaData>({
    url: `/colonias/${id}/`,
    method: "GET",
    next: {
      tags: [`colonia-${id}`],
    },
  });
  return colonia;
}
