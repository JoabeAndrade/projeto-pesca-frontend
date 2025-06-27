"use client";

import { createColonia } from "@/app/actions";
import { ComunidadeData } from "@/types/pescadores/comunidade";
import FormContainer from "./FormContainer";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import SubmitButton from "./SubmitButton";
import SectionContainer from "./SectionContainer";

type ColoniaFormProps = {
  comunidades: ComunidadeData[],
};

export default function ColoniaForm({ comunidades }: ColoniaFormProps) {
  const comunidadeOptions = comunidades.map(
    ({ id, nome }) => ({ value: id.toString(), text: nome })
  );

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
          options={comunidadeOptions}
          placeholder="Selecione uma comunidade"
          required={true}
        />
      </SectionContainer>
      <SubmitButton />
    </FormContainer>
  );
}
