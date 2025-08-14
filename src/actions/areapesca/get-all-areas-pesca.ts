"use server";

import { AreaPescaData } from "@/types/pescadores/area-pesca";
import fetchData from "@/lib/fetch-data";

export async function getAllAreasPesca(): Promise<AreaPescaData[]> {
  const response = await fetchData<AreaPescaData[]>({
    url: `/areaspesca/`,
    method: "GET",

    next: {
      tags: ["areas-pesca"],
    },
  });

  return response;
}
