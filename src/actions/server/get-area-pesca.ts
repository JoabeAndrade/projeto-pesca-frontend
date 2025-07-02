"use server";

import { AreaPescaData } from "@/types/pescadores/area-pesca";

export default async function getAreaPesca(id: string): Promise<AreaPescaData> {
  const response = await fetch(`http://localhost:8000/areaspesca/${id}`);
  const responseJson = await response.json();
  return responseJson;
}
