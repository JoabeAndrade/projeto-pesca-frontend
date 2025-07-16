"use client";

import { createArtePesca } from "@/actions/server/create-arte-pesca";
import FormContainer from "../containers/FormContainer";
import TextInput from "../inputs/TextInput";
import { ArtePescaData } from "@/types/pescadores/arte-pesca";
import { editArtePesca } from "@/actions/server/edit-arte-pesca";
import Button from "../Button";
import { Save } from "lucide-react";

type ArtePescaProps = {
  artePesca?: ArtePescaData;
};

export default function ArtePescaForm({ artePesca }: ArtePescaProps) {
  const action =
    typeof artePesca === "undefined" ? createArtePesca : editArtePesca;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={artePesca?.id} />
      <TextInput
        label="Nome da arte de pesca"
        name="nome"
        value={artePesca?.nome}
        required={true}
      />
      <Button icon={Save} type="submit">
        Salvar
      </Button>
    </FormContainer>
  );
}
