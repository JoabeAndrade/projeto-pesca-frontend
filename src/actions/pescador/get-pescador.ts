import { PescadorData } from "@/types/pescadores/pescador";
import fetchData from "@/actions/fetch-data";

export default async function getPescador(id: string | number): Promise<PescadorData> {
  const url = `/pescadores/${id}`;
  const pescador = await fetchData<PescadorData>({ url });
  return pescador;
}
