"use server";

import { AreaPescaData } from "@/types/pescadores/area-pesca";
import fetchData from "../fetch-data";

export async function getAllAreasPesca(): Promise<AreaPescaData[]> {
  const response = fetchData<AreaPescaData[]>({
    url: `/areaspesca/`,
    method: "GET",
  });

  return response;
}
