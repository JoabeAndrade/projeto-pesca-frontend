import { ColoniaData } from "@/types/pescadores/colonia";
import fetchData from "./fetch-data";

export default async function getColonia(id: string): Promise<ColoniaData> {
  const url = `/colonias/${id}`;
  const colonia = await fetchData<ColoniaData>({ url });
  return colonia;
}
