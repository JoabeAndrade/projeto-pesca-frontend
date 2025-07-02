"use client";

import { createColonia } from "@/actions/server/create-colonia";
import FormContainer from "../containers/FormContainer";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";
import SubmitButton from "../SubmitButton";
import { ColoniaData } from "@/types/pescadores/colonia";
import { editColonia } from "@/actions/server/edit-colonia";
import { ComunidadeData } from "@/types/pescadores/comunidade";

type ColoniaFormProps = {
  comunidades: ComunidadeData[],
  colonia?: ColoniaData;
};

export default function ColoniaForm({ comunidades, colonia }: ColoniaFormProps) {
  const optionsComunidade = comunidades.map(({ id, nome }) => ({ text: nome, value: id.toString() }))

  const action = (typeof colonia === 'undefined') ? createColonia : editColonia;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={colonia?.id} />
      <TextInput
        label="Código da colônia"
        id="codigo"
        value={colonia?.codigo}
        required={true}
      />
      <SelectInput
        label="Comunidade"
        id="comunidade"
        options={optionsComunidade}
        defaultValue={colonia?.comunidade?.id}
        placeholder="Selecione uma comunidade"
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
