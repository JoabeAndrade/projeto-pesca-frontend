/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useActionState, useEffect, useState } from "react";
import { createPescador } from "@/actions/pescador/create-pescador";
import FormContainer from "../containers/FormContainer";
import SectionContainer from "../containers/SectionContainer";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import DateInput from "../inputs/DateInput";
import RadioInput from "../inputs/RadioInput";
import BooleanInput from "../inputs/BooleanInput";
import DecimalInput from "../inputs/DecimalInput";
import { getAllMunicipios } from "@/actions/municipio/get-all-municipios";
import { getAllComunidades } from "@/actions/comunidade/get-all-comunidades";
import { getAllColonias } from "@/actions/colonia/get-all-colonias";
import { PescadorData } from "@/types/pescadores/pescador";
import { editPescador } from "@/actions/pescador/edit-pescador";
import { NewSelectInput } from "../inputs/NewSelectInput";
import Button from "../Button";
import { Save } from "lucide-react";

// --- Tipos para o formulário e seu estado ---

type Option = {
  label: string;
  value: string;
};

type PescadorFormProps = {
  pescador?: PescadorData;
};

// Tipos para o estado da ação, correspondendo ao que a Server Action espera
type ErrorState = Record<string, string[]>;
type State = {
  errors?: ErrorState;
  message: string;
};

// --- Opções para os selects ---

const optionsSexo = [
  { text: "Masculino", value: "m" },
  { text: "Feminino", value: "f" },
];

const optionsTipoEmbarcacao = [
  { label: "Desembarcado", value: "desembarcado" },
  { label: "Barco", value: "barco" },
  { label: "Bote", value: "bote" },
  { label: "Canoa", value: "canoa" },
  { label: "Jangada", value: "jangada" },
  { label: "Lancha", value: "lancha" },
];

const optionsTamanhoEmbarcacao = [
  { label: "Pequeno", value: "pequeno" },
  { label: "Médio", value: "medio" },
  { label: "Grande", value: "grande" },
];

const optionsEscolaridade = [
  { label: "Ensino fundamental completo", value: "fundamental_completo" },
  { label: "Ensino médio completo", value: "medio_completo" },
  { label: "Ensino superior completo", value: "superior_completo" },
];

// --- CORREÇÃO PRINCIPAL: Estado inicial ---

const initialState: State = {
  errors: {}, // <<--- MUDANÇA 1: 'errors' agora é um objeto vazio, não um array.
  message: "",
};

export default function PescadorForm({ pescador }: PescadorFormProps) {
  const [optionsNaturalidade, setOptionsNaturalidade] = useState<Option[]>([]);
  const [optionsColonia, setOptionsColonia] = useState<Option[]>([]);
  const [optionsComunidade, setOptionsComunidade] = useState<Option[]>([]);

  const [selectedNaturalidade, setSelectedNaturalidade] = useState(
    pescador?.naturalidade?.id.toString()
  );
  const [selectedColonia, setSelectedColonia] = useState(
    pescador?.colonia?.id.toString()
  );
  const [selectedComunidade, setSelectedComunidade] = useState(
    pescador?.comunidade?.id.toString()
  );

  const action =
    typeof pescador === "undefined" ? createPescador : editPescador;
  const [status, formAction] = useActionState(action, initialState);

  const handleSubmit = async (formData: FormData): Promise<void> => {
    formAction(formData);
  };

  const clearForm = () => {
    setSelectedNaturalidade(undefined);
    setSelectedColonia(undefined);
    setSelectedComunidade(undefined);
    const form = document.querySelector("form");
    if (form) {
      form.reset();
    }
  };

  useEffect(() => {
    getAllMunicipios().then((response) => {
      const opts = response.map(({ id, nome, uf }) => ({
        label: `${nome}/${uf}`,
        value: id.toString(),
      }));
      setOptionsNaturalidade(opts);
    });

    getAllColonias().then((response) => {
      const opts = response.map(({ id, codigo }) => ({
        label: codigo,
        value: id.toString(),
      }));
      setOptionsColonia(opts);
    });

    getAllComunidades().then((response) => {
      const opts = response.map(({ id, nome }) => ({
        label: nome,
        value: id.toString(),
      }));
      setOptionsComunidade(opts);
    });
  }, []);

  useEffect(() => {
    console.log(status);

    // Limpar formulário apenas na criação e quando foi bem-sucedido
    if (
      typeof pescador === "undefined" &&
      status.message &&
      // <<--- MUDANÇA 2: A forma de verificar se há erros foi ajustada.
      (!status.errors || Object.keys(status.errors).length === 0)
    ) {
      clearForm();
    }
  }, [status]);

  return (
    <FormContainer action={handleSubmit}>
      <input type="hidden" name="id" value={pescador?.id} />
      <SectionContainer title="Dados pessoais">
        <TextInput
          label="Nome"
          name="nome"
          value={pescador?.nome}
          required={true}
        />
        <SelectInput
          label="Sexo"
          id="sexo"
          options={optionsSexo}
          initialValue={pescador?.sexo}
        />
        <TextInput label="Apelido" name="apelido" value={pescador?.apelido} />
        <DateInput
          label="Data de nascimento"
          name="data_nascimento"
          defaultValue={pescador?.data_nascimento}
        />
        <NewSelectInput
          label="Naturalidade"
          name="naturalidade"
          options={optionsNaturalidade}
          value={selectedNaturalidade}
          onChange={setSelectedNaturalidade}
        />
        <TextInput
          label="Nome do pai"
          name="nome_pai"
          value={pescador?.nome_pai}
        />
        <TextInput
          label="Nome da mãe"
          name="nome_mae"
          value={pescador?.nome_mae}
        />
      </SectionContainer>
      <SectionContainer title="Organizações">
        <NewSelectInput
          label="Colônia"
          name="colonia"
          options={optionsColonia}
          value={selectedColonia}
          onChange={setSelectedColonia}
        />
        <TextInput
          label="Número de matrícula na colônia"
          name="matricula_colonia"
          value={pescador?.matricula_colonia}
        />
        <DateInput
          label="Data de matrícula na colônia"
          name="data_matricula_colonia"
          defaultValue={pescador?.data_inscricao_colonia}
        />
        <NewSelectInput
          label="Comunidade"
          name="comunidade"
          options={optionsComunidade}
          value={selectedComunidade}
          onChange={setSelectedComunidade}
        />
      </SectionContainer>
      <SectionContainer title="Documentos">
        <TextInput label="RG" name="rg" value={pescador?.rg} />
        <TextInput label="CPF" name="cpf" value={pescador?.cpf} />
      </SectionContainer>
      <SectionContainer title="Embarcação">
        <RadioInput
          title="Tipo de embarcação"
          name="tipo_embarcacao"
          selectedValue={pescador?.tipo_embarcacao}
          options={optionsTipoEmbarcacao}
        />
        <RadioInput
          title="Tamanho da embarcação"
          name="tamanho_embarcacao"
          selectedValue={pescador?.tamanho_embarcacao}
          options={optionsTamanhoEmbarcacao}
        />
        <BooleanInput
          title="O pescador é proprietário da embarcação?"
          name="proprietario_embarcacao"
          value={pescador?.proprietario_embarcacao}
        />
      </SectionContainer>
      <SectionContainer title="Dados sociais">
        <NewSelectInput
          label="Escolaridade"
          name="escolaridade"
          defaultValue={pescador?.escolaridade}
          options={optionsEscolaridade}
        />
        <DecimalInput
          label="Renda mensal com a pesca"
          id="renda_mensal_pesca"
          defaultValue={pescador?.renda_mensal_pesca}
        />
        <TextInput
          label="Outra renda comercial"
          name="outra_renda"
          value={pescador?.outra_renda}
        />
        <BooleanInput
          title="Ainda é ativo como pescador?"
          name="ativo"
          value={pescador?.ativo}
        />
        <TextInput
          label="Se estiver inativo, qual o motivo?"
          name="motivo_inatividade"
          value={pescador?.motivo_inatividade}
        />
      </SectionContainer>
      <SectionContainer title="Dados do cadastro">
        <DateInput
          label="Data de cadastramento"
          name="data_cadastramento"
          defaultValue={pescador?.data_cadastramento}
        />
      </SectionContainer>
      <Button icon={Save} type="submit">
        Salvar
      </Button>
    </FormContainer>
  );
}
