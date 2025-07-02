import { ComunidadeData } from "@/types/pescadores/comunidade";
import fetchData from "./fetch-data";

export default async function getComunidade(id: string): Promise<ComunidadeData> {
  const url = `/comunidades/${id}`;
  const comunidade = await fetchData<ComunidadeData>({ url });
  return comunidade;
}
