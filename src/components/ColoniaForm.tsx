"use client";

import { createColonia, getComunidades } from "@/app/actions";
import FormContainer from "./FormContainer";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";
import SectionContainer from "./SectionContainer";
import { useEffect, useState } from "react";

type Option = {
  text: string;
  value: string;
};

export default function ColoniaForm() {
  const [optionsComunidade, setOptionsComunidade] = useState<Option[]>([]);

  useEffect(() => {
    getComunidades()
      .then((resp) => (resp.map(({ id, nome }) => ({ text: nome, value: id.toString() }))))
      .then((opts) => (setOptionsComunidade(opts)))
  }, []);

  return (
    <FormContainer action={createColonia}>
      <SectionContainer title="Dados da colônia">
        <TextInput
          label="Código da colônia"
          id="codigo"
          placeholder=""
          required={true}
        />
        <SelectInput
          label="Comunidade"
          id="comunidade"
          options={optionsComunidade}
          placeholder="Selecione uma comunidade"
          required={true}
        />
      </SectionContainer>
      <SubmitButton />
    </FormContainer>
  );
}
