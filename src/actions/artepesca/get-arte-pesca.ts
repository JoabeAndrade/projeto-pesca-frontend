"use server";

import { ArtePescaData } from "@/types/pescadores/arte-pesca";

export default async function getArtePesca(id: string): Promise<ArtePescaData> {
  const response = await fetch(`http://localhost:8000/artespesca/${id}`);
  const responseJson = await response.json();
  return responseJson;
}
