"use client";

import { useActionState, useEffect, useState } from "react";
import { createPescador } from "@/actions/server/create-pescador";
import FormContainer from "../containers/FormContainer";
import SectionContainer from "../containers/SectionContainer";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import SubmitButton from "../SubmitButton";
import DateInput from "../inputs/DateInput";
import RadioInput from "../inputs/RadioInput";
import BooleanInput from "../inputs/BooleanInput";
import NumberInput from "../inputs/NumberInput";
import { getAllMunicipios } from "@/actions/server/get-all-municipios";
import { getAllComunidades } from "@/actions/server/get-all-comunidades";
import { getAllColonias } from "@/actions/server/get-all-colonias";
import { PescadorData } from "@/types/pescadores/pescador";
import { editPescador } from "@/actions/server/edit-pescador";

type Option = {
  text: string;
  value: string;
};

type PescadorFormProps = {
  pescador?: PescadorData;
};

const initialState = {
  errors: [],
  message: "",
};

export default function PescadorForm({ pescador }: PescadorFormProps) {
  const [optionsNaturalidade, setOptionsNaturalidade] = useState<Option[]>([]);
  const [optionsColonia, setOptionsColonia] = useState<Option[]>([]);
  const [optionsComunidade, setOptionsComunidade] = useState<Option[]>([]);
  
  const action = (typeof pescador === 'undefined') ? createPescador : editPescador;
  const [status, formAction] = useActionState(action, initialState);

  const optionsSexo = [
    { text: "Masculino", value: "m" },
    { text: "Feminino", value: "f" },
  ];

  const optionsTipoEmbarcacao = [
    { label: "Desembarcado", id: "desembarcado" },
    { label: "Barco", id: "barco" },
    { label: "Bote", id: "bote" },
    { label: "Canoa", id: "canoa" },
    { label: "Jangada", id: "jangada" },
    { label: "Lancha", id: "lancha" },
  ];

  const optionsTamanhoEmbarcacao = [
    { label: "Pequeno", id: "p" },
    { label: "Médio", id: "m" },
    { label: "Grande", id: "g" },
  ];

  const optionsEscolaridade = [
    { text: "Ensino fundamental completo", value: "fundamental_completo" },
    { text: "Ensino médio completo", value: "medio_completo" },
    { text: "Ensino superior completo", value: "superior_completo" },
  ];

  useEffect(() => {
    getAllMunicipios().then((response) => {
      const opts = response.map(
        ({ id, nome, uf }) => ({ text: `${nome}/${uf}`, value: id.toString() })
      );
      setOptionsNaturalidade(opts);
    });

    getAllColonias().then((response) => {
      const opts = response.map(
        ({ id, codigo }) => ({ text: codigo, value: id.toString() })
      );
      setOptionsColonia(opts);
    });

    getAllComunidades().then((response) => {
      const opts = response.map(
        ({ id, nome }) => ({ text: nome, value: id.toString() })
      );
      setOptionsComunidade(opts);
    });
  }, []);

  useEffect(() => (console.log(status)), [status]);

  return (
    <FormContainer action={formAction}>
      <input type="hidden" name="id" value={pescador?.id} />
      <SectionContainer title="Dados pessoais">
        <TextInput
          label="Nome"
          id="nome"
          value={pescador?.nome}
          required={true}
        />
        <SelectInput
          label="Sexo"
          id="sexo"
          options={optionsSexo}
          defaultValue={pescador?.sexo}
        />
        <TextInput
          label="Apelido"
          id="apelido"
          value={pescador?.apelido}
        />
        <DateInput
          label="Data de nascimento"
          id="data_nascimento"
        />
        <SelectInput
          label="Naturalidade"
          id="naturalidade"
          options={optionsNaturalidade}
          defaultValue={pescador?.naturalidade?.id}
        />
        <TextInput
          label="Nome do pai"
          id="nome_pai"
          value={pescador?.nome_pai}
        />
        <TextInput
          label="Nome da mãe"
          id="nome_mae"
          value={pescador?.nome_mae}
        />
      </SectionContainer>
      <SectionContainer title="Organizações">
        <SelectInput
          label="Colônia"
          id="colonia"
          options={optionsColonia}
        />
        <TextInput
          label="Número de matrícula na colônia"
          id="matricula_colonia"
        />
        <DateInput
          label="Data de matrícula na colônia"
          id="data_matricula_colonia"
        />
        <SelectInput
          label="Comunidade"
          id="comunidade"
          options={optionsComunidade}
        />
      </SectionContainer>
      <SectionContainer title="Documentos">
        <TextInput
          label="RG"
          id="rg"
        />
        <TextInput
          label="CPF"
          id="cpf"
        />
      </SectionContainer>
      <SectionContainer title="Embarcação">
        <RadioInput
          title="Tipo de embarcação"
          name="tipo_embarcacao"
          options={optionsTipoEmbarcacao}
        />
        <RadioInput
          title="Tamanho da embarcação"
          name="tamanho_embarcacao"
          options={optionsTamanhoEmbarcacao}
        />
        <BooleanInput
          title="O pescador é proprietário da embarcação?"
          name="proprietario_embarcacao"
        />
      </SectionContainer>
      <SectionContainer title="Dados sociais">
        <SelectInput
          label="Escolaridade"
          id="escolaridade"
          options={optionsEscolaridade}
        />
        <NumberInput
          label="Renda mensal com a pesca"
          id="renda_mensal_pesca"
        />
        <TextInput
          label="Outra renda comercial"
          id="outra_renda"
        />
        <BooleanInput
          title="Ainda é ativo como pescador?"
          name="ativo"
        />
        <TextInput
          label="Se estiver inativo, qual o motivo?"
          id="motivo_inatividade"
        />
      </SectionContainer>
      <SectionContainer title="Dados do cadastro">
        <DateInput
          label="Data de cadastramento"
          id="data_cadastramento"
        />
      </SectionContainer>
      <SubmitButton />
    </FormContainer>
  );
}
