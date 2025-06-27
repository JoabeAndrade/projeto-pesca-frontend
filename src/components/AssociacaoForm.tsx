"use client";

import { createAssociacao } from "@/app/actions";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

export default function AssociacaoForm() {
  return (
    <FormContainer action={createAssociacao}>
      <TextInput
        label="Nome da associação"
        id="nome"
        placeholder=""
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
