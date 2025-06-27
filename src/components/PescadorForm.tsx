"use client";

import { createPescador } from "@/actions/server/create-pescador";
import FormContainer from "./FormContainer";
import { useActionState } from "react";
import SectionContainer from "./SectionContainer";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";

const initialState = {
  message: "",
};

export default function PescadorForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, formAction] = useActionState(createPescador, initialState);

  const optionsSexo = [
    { text: "Masculino", value: "m" },
    { text: "Feminino", value: "f" },
  ];

  return (
    <FormContainer action={formAction}>
      <SectionContainer title="Dados pessoais">
        <TextInput
          label="Nome"
          id="nome"
          placeholder=""
          required={true}
        />
        <SelectInput
          label="Sexo"
          id="sexo"
          placeholder=""
          required={false}
          options={optionsSexo}
        />
      </SectionContainer>
      <SectionContainer title="Documentos">
        <TextInput
          label="RG"
          id="rg"
          placeholder=""
          required={false}
        />
        <TextInput
          label="CPF"
          id="cpf"
          placeholder=""
          required={false}
        />
      </SectionContainer>
      <SubmitButton />
    </FormContainer>
  );
}
