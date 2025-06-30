import { MunicipioData } from "./municipio"

type ComunidadeBase = {
  id: number,
  nome: string,
};

export type ComunidadeData = ComunidadeBase & {
  municipio: MunicipioData,
};

export type ComunidadeWriteData = ComunidadeBase & {
  municipio_id: number,
};
