"use client";

import { createArtePesca } from "@/app/actions";
import FormContainer from "./FormContainer";
import SubmitButton from "./SubmitButton";
import TextInput from "./TextInput";

export default function ArtePescaForm() {
  return (
    <FormContainer action={createArtePesca}>
      <TextInput
        label="Nome da arte de pesca"
        id="nome"
        placeholder=""
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
