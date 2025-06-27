"use client";

import { createComunidade } from "@/app/actions";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { MunicipioData } from "@/types/pescadores/municipio";

type ComunidadeFormProps = {
  municipios: MunicipioData[],
}

export default function ComunidadeForm({ municipios }: ComunidadeFormProps) {
  const municipiosOptions = municipios.map(
    ({ id, nome, uf }) => ({ value: id.toString(), text: `${nome}/${uf}` })
  );

  return (
    <FormContainer action={createComunidade}>
      <TextInput
        label="Nome da comunidade"
        id="nome"
        placeholder=""
        required={true}
      />
      <SelectInput
        label="Município"
        id="municipio"
        placeholder=""
        required={true}
        options={municipiosOptions}
      />
      <SubmitButton />
    </FormContainer>
  );
}
