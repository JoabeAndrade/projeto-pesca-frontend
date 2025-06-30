"use client";

import { useActionState, useEffect, useState } from "react";
import { createPescador } from "@/actions/server/create-pescador";
import FormContainer from "./FormContainer";
import SectionContainer from "./SectionContainer";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";
import DateInput from "./DateInput";
import RadioInput from "./RadioInput";
import BooleanInput from "./BooleanInput";
import NumberInput from "./NumberInput";
import { getColonias, getComunidades, getMunicipios } from "@/app/actions";

type Option = {
  text: string;
  value: string;
};

const initialState = {
  errors: [],
  message: "",
};

export default function PescadorForm() {
  const [optionsNaturalidade, setOptionsNaturalidade] = useState<Option[]>([]);
  const [optionsColonia, setOptionsColonia] = useState<Option[]>([]);
  const [optionsComunidade, setOptionsComunidade] = useState<Option[]>([]);

  const [status, formAction] = useActionState(createPescador, initialState);

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
    getMunicipios().then((response) => {
      const opts = response.map(
        ({ id, nome, uf }) => ({ text: `${nome}/${uf}`, value: id.toString() })
      );
      setOptionsNaturalidade(opts);
    });

    getColonias().then((response) => {
      const opts = response.map(
        ({ id, codigo }) => ({ text: codigo, value: id.toString() })
      );
      setOptionsColonia(opts);
    });

    getComunidades().then((response) => {
      const opts = response.map(
        ({ id, nome }) => ({ text: nome, value: id.toString() })
      );
      setOptionsComunidade(opts);
    });
  }, []);

  useEffect(() => (console.log(status)), [status]);

  return (
    <FormContainer action={formAction}>
      <SectionContainer title="Dados pessoais">
        <TextInput
          label="Nome"
          id="nome"
          placeholder=""
          required={true}
        />
        <SelectInput
          label="Sexo"
          id="sexo"
          placeholder=""
          required={false}
          options={optionsSexo}
        />
        <TextInput
          label="Apelido"
          id="apelido"
          placeholder=""
          required={false}
        />
        <DateInput
          label="Data de nascimento"
          id="data_nascimento"
          placeholder=""
          required={false}
        />
        <SelectInput
          label="Naturalidade"
          id="naturalidade"
          placeholder=""
          required={false}
          options={optionsNaturalidade}
        />
        <TextInput
          label="Nome do pai"
          id="nome_pai"
          placeholder=""
          required={false}
        />
        <TextInput
          label="Nome da mãe"
          id="nome_mae"
          placeholder=""
          required={false}
        />
      </SectionContainer>
      <SectionContainer title="Organizações">
        <SelectInput
          label="Colônia"
          id="colonia"
          placeholder=""
          required={false}
          options={optionsColonia}
        />
        <TextInput
          label="Número de matrícula na colônia"
          id="matricula_colonia"
          placeholder=""
          required={false}
        />
        <DateInput
          label="Data de matrícula na colônia"
          id="data_matricula_colonia"
          placeholder=""
          required={false}
        />
        <SelectInput
          label="Comunidade"
          id="comunidade"
          placeholder=""
          required={false}
          options={optionsComunidade}
        />
      </SectionContainer>
      <SectionContainer title="Documentos">
        <TextInput
          label="RG"
          id="rg"
          placeholder=""
          required={false}
        />
        <TextInput
          label="CPF"
          id="cpf"
          placeholder=""
          required={false}
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
          placeholder=""
          options={optionsEscolaridade}
          required={false}
        />
        <NumberInput
          label="Renda mensal com a pesca"
          id="renda_mensal_pesca"
          required={false}
        />
        <TextInput
          label="Outra renda comercial"
          id="outra_renda"
          placeholder=""
          required={false}
        />
        <BooleanInput
          title="Ainda é ativo como pescador?"
          name="ativo"
        />
        <TextInput
          label="Se estiver inativo, qual o motivo?"
          id="motivo_inatividade"
          placeholder=""
          required={false}
        />
      </SectionContainer>
      <SectionContainer title="Dados do cadastro">
        <DateInput
          label="Data de cadastramento"
          id="data_cadastramento"
          placeholder=""
          required={false}
        />
      </SectionContainer>
      <SubmitButton />
    </FormContainer>
  );
}
