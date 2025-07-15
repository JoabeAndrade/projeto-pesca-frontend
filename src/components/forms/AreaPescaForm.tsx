"use client";

import { createAreaPesca } from "@/actions/server/create-area-pesca";
import FormContainer from "../containers/FormContainer";
import SubmitButton from "../SubmitButton";
import TextInput from "../inputs/TextInput";
import { AreaPescaData } from "@/types/pescadores/area-pesca";
import { editAreaPesca } from "@/actions/server/edit-area-pesca";

type AreaPescaFormProps = {
  areaPesca?: AreaPescaData;
};

export default function AreaPescaForm({ areaPesca }: AreaPescaFormProps) {
  const action = (typeof areaPesca === 'undefined') ? createAreaPesca : editAreaPesca;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={areaPesca?.id}/>
      <TextInput
        label="Descrição da área de pesca"
        name="descricao"
        value={areaPesca?.descricao}
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
