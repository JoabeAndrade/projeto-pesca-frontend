import { ColoniaData } from "@/types/pescadores/colonia";
import fetchData from "./fetch-data";

export async function addEnderecoToColonia(
  idColonia: number,
  idEndereco: number,
): Promise<ColoniaData> {
  const colonia = fetchData<ColoniaData>({
    url: `/colonias/${idColonia}`,
    method: "PATCH",
    body: JSON.stringify({ endereco_sede_id: idEndereco }),
  });

  return colonia;
}
