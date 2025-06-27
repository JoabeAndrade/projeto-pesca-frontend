"use client";

import { createMunicipio } from "@/app/actions";
import FormContainer from "./FormContainer";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";

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

export default function MunicipioForm() {
  const ufOptions = ufs.map(
    ({ nome, sigla }) => ({ value: sigla, text: `${nome} (${sigla})` })
  );

  return (
    <FormContainer action={createMunicipio}>
      <TextInput
        label="Nome do município"
        id="nome"
        placeholder=""
        required={true}
      />
      <SelectInput
        label="Unidade da Federação"
        id="uf"
        placeholder=""
        required={true}
        options={ufOptions}
      />
      <SubmitButton />
    </FormContainer>
  );
}
