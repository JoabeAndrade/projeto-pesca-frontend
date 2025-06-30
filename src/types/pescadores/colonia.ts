import { ComunidadeData } from "./comunidade";
import { EnderecoData } from "./endereco";

type ColoniaBase = {
  id: number,
  codigo: string,
};

export type ColoniaData = ColoniaBase & {
  comunidade: ComunidadeData,
  endereco_sede: EnderecoData,
};

export type ColoniaWriteData = ColoniaBase & {
  comunidade_id: number,
  endereco_sede_id: number,
};
