"use client";

import { createComunidade } from "@/actions/server/create-comunidade";
import FormContainer from "../containers/FormContainer";
import SubmitButton from "../SubmitButton";
import SelectInput from "../inputs/SelectInput";
import TextInput from "../inputs/TextInput";
import { MunicipioData } from "@/types/pescadores/municipio";
import { ComunidadeData } from "@/types/pescadores/comunidade";
import { editComunidade } from "@/actions/server/edit-comunidade";

type ComunidadeFormProps = {
  municipios: MunicipioData[],
  comunidade?: ComunidadeData,
};

export default function ComunidadeForm({ municipios, comunidade }: ComunidadeFormProps) {
  const municipiosOptions = municipios.map(
    ({ id, nome, uf }) => ({ value: id.toString(), text: `${nome}/${uf}` })
  );

  const action = (typeof comunidade === 'undefined') ? createComunidade : editComunidade;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={comunidade?.id} />
      <TextInput
        label="Nome da comunidade"
        id="nome"
        value={comunidade?.nome}
        required={true}
      />
      <SelectInput
        label="Município"
        id="municipio"
        options={municipiosOptions}
        defaultValue={comunidade?.municipio?.id}
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
