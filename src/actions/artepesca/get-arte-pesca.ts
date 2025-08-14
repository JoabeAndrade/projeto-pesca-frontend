"use server";

import { ArtePescaData } from "@/types/pescadores/arte-pesca";
import fetchData from "@/lib/fetch-data";

export default async function getArtePesca(id: string): Promise<ArtePescaData> {
  const response = await fetchData<ArtePescaData>({
    url: `/artespesca/${id}/`,
    method: "GET",
    next: {
      tags: [`arte-pesca-${id}`],
    },
  });

  return response;
}
