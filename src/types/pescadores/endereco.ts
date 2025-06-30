import { MunicipioData } from "./municipio";

type EnderecoBase = {
  id: number,
  logradouro: string,
  numero: string,
  bairro: string,
  complemento: string,
  cep: string,
}

export type EnderecoData = EnderecoBase & {
  municipio: MunicipioData,
};

export type EnderecoWriteData = EnderecoBase & {
  municipio_id: number,
};
