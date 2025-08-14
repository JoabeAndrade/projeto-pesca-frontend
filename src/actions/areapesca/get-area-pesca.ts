"use server";

import { AreaPescaData } from "@/types/pescadores/area-pesca";
import fetchData from "@/lib/fetch-data";

export default async function getAreaPesca(id: string): Promise<AreaPescaData> {
  const response = await fetchData<AreaPescaData>({
    url: `/areaspesca/${id}/`,
    method: "GET",
    next: {
      tags: [`area-pesca-${id}`],
    },
  });
  return response;
}
