"use client";

import { createMunicipio } from "@/actions/municipio/create-municipio";
import { editMunicipio } from "@/actions/municipio/edit-municipio";
import FormContainer from "../containers/FormContainer";
import SelectInput from "../inputs/SelectInput";
import TextInput from "../inputs/TextInput";
import { MunicipioData } from "@/types/pescadores/municipio";
import SectionContainer from "../containers/SectionContainer";
import Button from "../Button";
import { Save } from "lucide-react";

const ufs = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

type MunicipioFormProps = {
  municipio?: MunicipioData;
};

export default function MunicipioForm({ municipio }: MunicipioFormProps) {
  const ufOptions = ufs.map(({ nome, sigla }) => ({
    value: sigla,
    text: `${nome} (${sigla})`,
  }));

  const action =
    typeof municipio === "undefined" ? createMunicipio : editMunicipio;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={municipio?.id} />
      <SectionContainer>
        <TextInput
          label="Nome do município"
          name="nome"
          value={municipio?.nome}
          required={true}
        />
        <SelectInput
          label="Unidade da Federação"
          id="uf"
          options={ufOptions}
          initialValue={municipio?.uf}
          required={true}
        />
      </SectionContainer>
      <Button icon={Save} type="submit">
        Salvar
      </Button>
    </FormContainer>
  );
}
