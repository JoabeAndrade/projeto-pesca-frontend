"use server";

import { ArtePescaData } from "@/types/pescadores/arte-pesca";
import fetchData from "../fetch-data";

export async function getAllArtesPesca(): Promise<ArtePescaData[]> {
  const response = fetchData<ArtePescaData[]>({
    url: `/artespesca/`,
    method: "GET",
  });

  return response;
}
