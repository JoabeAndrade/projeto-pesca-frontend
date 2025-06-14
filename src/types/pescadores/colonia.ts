import { ComunidadeData } from "./comunidade";
import { EnderecoData } from "./endereco";

export type ColoniaData = {
  id: number,
  codigo: string,
  comunidade: ComunidadeData,
  endereco_sede: EnderecoData,
};
