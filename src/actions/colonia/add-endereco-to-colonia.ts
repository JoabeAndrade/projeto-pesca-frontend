"use server";

import { ColoniaData } from "@/types/pescadores/colonia";
import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function addEnderecoToColonia(
  idColonia: number,
  idEndereco: number
): Promise<ColoniaData> {
  const colonia = await fetchData<ColoniaData>({
    url: `/colonias/${idColonia}/`,
    method: "PATCH",
    body: JSON.stringify({ endereco_sede_id: idEndereco }),
  });

  revalidateTag(`colonia-${idColonia}`);
  revalidateTag("colonias");

  return colonia;
}
