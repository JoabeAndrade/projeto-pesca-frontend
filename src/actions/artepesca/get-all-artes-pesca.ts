"use server";

import { ArtePescaData } from "@/types/pescadores/arte-pesca";
import fetchData from "@/lib/fetch-data";

export async function getAllArtesPesca(): Promise<ArtePescaData[]> {
  const response = await fetchData<ArtePescaData[]>({
    url: `/artespesca/`,
    method: "GET",
    next: {
      tags: ["artes-pesca"],
    },
  });

  return response;
}
