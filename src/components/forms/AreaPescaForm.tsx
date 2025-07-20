"use client";

import { createAreaPesca } from "@/actions/areapesca/create-area-pesca";
import { editAreaPesca } from "@/actions/areapesca/edit-area-pesca";
import FormContainer from "../containers/FormContainer";
import TextInput from "../inputs/TextInput";
import Button from "../Button";
import { Save } from "lucide-react";
import { AreaPescaData } from "@/types/pescadores/area-pesca";

type AreaPescaFormProps = {
  areaPesca?: AreaPescaData;
};

export default function AreaPescaForm({ areaPesca }: AreaPescaFormProps) {
  const action =
    typeof areaPesca === "undefined" ? createAreaPesca : editAreaPesca;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={areaPesca?.id} />
      <TextInput
        label="Descrição da área de pesca"
        name="descricao"
        value={areaPesca?.descricao}
        required={true}
      />
      <Button icon={Save} type="submit">
        Salvar
      </Button>
    </FormContainer>
  );
}
