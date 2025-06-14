import { MunicipioData } from "./municipio";

export type EnderecoData = {
  logradouro: string,
  numero: string,
  bairro: string,
  complemento: string,
  cep: string,
  municipio: MunicipioData,
};
