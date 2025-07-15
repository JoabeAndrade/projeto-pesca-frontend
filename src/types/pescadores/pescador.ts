import { MunicipioData } from "./municipio";
import { ColoniaData } from "./colonia";
import { ArtePescaData } from "./arte-pesca";
import { AreaPescaData } from "./area-pesca";
import { TelefoneData } from "./telefone";
import { DependenteData } from "./dependente";
import { ComunidadeData } from "./comunidade";

type PescadorBase = {
  nome: string,
  sexo: string,
  apelido: string,
  data_nascimento: string,
  nome_pai: string,
  nome_mae: string,
  matricula_colonia: string,
  data_inscricao_colonia: string,
  rg: string,
  cpf: string,
  tipo_embarcacao: string,
  proprietario_embarcacao: boolean,
  tamanho_embarcacao: string,
  escolaridade: string,
  renda_mensal_pesca: string,
  outra_renda: string,
  ativo: boolean,
  motivo_inatividade: string,
  falecido: boolean,
  data_cadastramento: string,
};

export type PescadorData = PescadorBase & {
  id: number,
  cidade_natal: MunicipioData,
  naturalidade: MunicipioData,
  colonia_inscrita: ColoniaData,
  colonia: ColoniaData,
  comunidade: ComunidadeData,
  artes_pesca: ArtePescaData[],
  areas_pesca: AreaPescaData[],
  telefones: TelefoneData[],
  dependentes: DependenteData[],
};

export type PescadorWriteData = PescadorBase & {
  naturalidade_id: number,
  colonia_id: number,
  comunidade_id: number,
}
