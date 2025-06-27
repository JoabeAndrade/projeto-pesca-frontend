"use client";

import { createAreaPesca } from "@/app/actions";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

export default function AreaPescaForm() {
  return (
    <FormContainer action={createAreaPesca}>
      <TextInput
        label="Descrição da área de pesca"
        id="descricao"
        placeholder=""
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
