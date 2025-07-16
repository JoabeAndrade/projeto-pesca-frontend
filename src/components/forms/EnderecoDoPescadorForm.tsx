"use client";

import { EnderecoData } from "@/types/pescadores/endereco";
import { MunicipioData } from "@/types/pescadores/municipio";
import FormContainer from "../containers/FormContainer";
import { addEnderecoToPescador } from "@/actions/server/add-endereco-to-pescador";
import { editEndereco } from "@/actions/server/edit-endereco";
import Button from "../Button";
import { Save } from "lucide-react";
import SectionContainer from "../containers/SectionContainer";
import { NewSelectInput } from "../inputs/NewSelectInput";
import { use, useState } from "react";
import TextInput from "../inputs/TextInput";

type EnderecoFormProps = {
  idPescador: number;
  endereco?: EnderecoData;
  municipios: Promise<MunicipioData[]>;
};

type Option = {
  label: string,
  value: string,
};

function formatMunicipiosToOptions(municipios: MunicipioData[]): Option[] {
  const opts = municipios.map(({ id, nome, uf }) => ({
    label: `${nome} (${uf})`,
    value: id.toString(),
  }));
  return opts;
}

export default function EnderecoDoPescadorForm({ idPescador, endereco, municipios }: EnderecoFormProps) {
  const [ selectedMunicipio, setSelectedMunicipio ] = useState(endereco?.municipio.id.toString());
  const action = (endereco) ? editEndereco : addEnderecoToPescador;
  const optionsMunicipio = use(municipios);

  return (
    <FormContainer action={action}>
      <input type="hidden" name="pescador_id" value={idPescador} />
      <input type="hidden" name="endereco_id" value={endereco?.id} />
      <SectionContainer title="Endereço">
        <TextInput
          label="Logradouro"
          name="logradouro"
          value={endereco?.logradouro}
          required={true}
        />
        <TextInput
          label="Número"
          name="numero"
          value={endereco?.numero}
          required={true}
        />
        <TextInput
          label="Bairro"
          name="bairro"
          value={endereco?.bairro}
          required={true}
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
          options={formatMunicipiosToOptions(optionsMunicipio)}
          onChange={setSelectedMunicipio}
          required={true}
        />
      </SectionContainer>
      <Button icon={Save} type="submit">Salvar</Button>
    </FormContainer>
  );
}
