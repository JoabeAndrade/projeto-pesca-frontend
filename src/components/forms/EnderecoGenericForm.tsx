"use client";

import FormContainer from "../containers/FormContainer";
import Button from "../Button";
import { Save } from "lucide-react";
import { EnderecoData } from "@/types/pescadores/endereco";
import { useEffect, useState } from "react";
import SectionContainer from "../containers/SectionContainer";
import TextInput from "../inputs/TextInput";
import { NewSelectInput } from "../inputs/NewSelectInput";
import { MunicipioData } from "@/types/pescadores/municipio";
import { editEndereco } from "@/actions/server/edit-endereco";
import { createEndereco } from "@/actions/server/create-endereco";
import { addEnderecoToAssociacao } from "@/actions/server/add-endereco-to-associacao";
import { addEnderecoToColonia } from "@/actions/server/add-endereco-to-colonia";
import fetchData from "@/actions/server/fetch-data";

type EnderecoGenericFormProps = {
  endereco?: EnderecoData;
  municipios: Promise<MunicipioData[]>;
  parentData: {
    type: string;
    id: number;
  };
};

type Option = {
  label: string,
  value: string,
};

async function criarEnderecoParaAssociacao(associacaoId: number, formData: FormData): Promise<void> {
  const novoEndereco = await createEndereco(formData);
  addEnderecoToAssociacao(novoEndereco.id, associacaoId);
}

async function criarEnderecoParaColonia(coloniaId: number, formData: FormData): Promise<void> {
  const novoEndereco = await createEndereco(formData);
  addEnderecoToColonia(coloniaId, novoEndereco.id);
}

async function criarEnderecoParaPescador(pescadorId: number, formData: FormData): Promise<void> {
  const novoEndereco = await createEndereco(formData);
  fetchData<EnderecoData>({
    url: `/pescadores/${pescadorId}`,
    method: "PATCH",
    body: JSON.stringify({ endereco_id: novoEndereco.id }),
  });
}

function selectFormAction(parent: { type: string, id: number }): (f: FormData) => (Promise<void>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let action = async (f: FormData) => { };

  switch (parent.type) {
    case "associacao":
      action = criarEnderecoParaAssociacao.bind(null, parent.id);
      break;
    case "colonia":
      action = criarEnderecoParaColonia.bind(null, parent.id);
      break;
    case "pescador":
      action = criarEnderecoParaPescador.bind(null, parent.id);
      break;
  }
  return action;
}

async function formatMunicipiosToOptions(municipios: Promise<MunicipioData[]>): Promise<Option[]> {
  return (await municipios).map(({ id, nome, uf }) => ({
    label: `${nome} (${uf})`,
    value: id.toString(),
  }));
}

export default function EnderecoGenericForm({ endereco, municipios, parentData }: EnderecoGenericFormProps) {
  const action = (endereco) ? editEndereco : selectFormAction(parentData);
  const [optionsMunicipio, setOptionsMunicipio] = useState<Option[]>([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState(endereco?.municipio.id.toString());

  useEffect(() => {
    formatMunicipiosToOptions(municipios)
      .then(opts => setOptionsMunicipio(opts))
  }, [municipios]);

  return (
    <FormContainer action={action}>
      <input type="hidden" name="endereco_id" value={endereco?.id} />
      <SectionContainer title="Endereço">
        <TextInput
          label="Logradouro"
          name="logradouro"
          value={endereco?.logradouro}
          required
        />
        <TextInput
          label="Número"
          name="numero"
          value={endereco?.numero}
          required
        />
        <TextInput
          label="Bairro"
          name="bairro"
          value={endereco?.bairro}
          required
        />
        <TextInput
          label="Complemento"
          name="complemento"
          value={endereco?.complemento}
        />
        <TextInput
          label="CEP"
          name="cep"
          value={endereco?.cep}
        />
        <NewSelectInput
          label="Município"
          name="municipio_id"
          placeholder="Selecione..."
          value={selectedMunicipio}
          options={optionsMunicipio}
          onChange={setSelectedMunicipio}
          required
        />
      </SectionContainer>
      <Button icon={Save} type="submit">Salvar</Button>
    </FormContainer>
  );
}
