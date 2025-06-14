import { MunicipioData } from "./municipio";
import { ColoniaData } from "./colonia";

export type PescadorData = {
  id: number,
  nome: string,
  sexo: string,
  apelido: string,
  cidade_natal: MunicipioData,
  data_nascimento: string,
  nome_pai: string,
  nome_mae: string,
  colonia_inscrita: ColoniaData,
  matricula_colonia: string,
  data_inscricao_colonia: string,
  rg: string,
  cpf: string,
  tipo_embarcacao: string,
  tamanho_embarcacao: string,
  proprietario_embarcacao: boolean,
  escolaridade: string,
  renda_mensal_pesca: number,
  outra_renda: string,
  ativo: boolean,
  motivo_inatividade: string,
  falecido: boolean,
  data_cadastramento: string,
};
