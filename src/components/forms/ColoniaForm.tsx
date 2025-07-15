"use client";

import { createColonia } from "@/actions/server/create-colonia";
import FormContainer from "../containers/FormContainer";
import TextInput from "../inputs/TextInput";
import SubmitButton from "../SubmitButton";
import { ColoniaData } from "@/types/pescadores/colonia";
import { editColonia } from "@/actions/server/edit-colonia";
import { ComunidadeData } from "@/types/pescadores/comunidade";
import { useEffect, useState } from "react";
import { NewSelectInput } from "../inputs/NewSelectInput";

type ColoniaFormProps = {
  comunidades: Promise<ComunidadeData[]>,
  colonia?: ColoniaData;
};

type Option = {
  value: string;
  label: string;
};

function formatComunidadesToOptions(comunidades: ComunidadeData[]): Option[] {
  return comunidades.map(({ id, nome }) => ({
    value: id.toString(),
    label: nome,
  }));
}

async function receiveComunidades(comunidades: Promise<ComunidadeData[]>): Promise<Option[]> {
  const data = await comunidades;
  return formatComunidadesToOptions(data);
}

export default function ColoniaForm({ comunidades, colonia }: ColoniaFormProps) {
  const [ optionsComunidade, setOptionsComunidade ] = useState<Option[]>([]);
  const [ selectedComunidade, setSelectedComunidade ] = useState(colonia?.comunidade?.id.toString() || "");

  const action = (typeof colonia === 'undefined') ? createColonia : editColonia;

  useEffect(() => {
    receiveComunidades(comunidades).then((opts) => setOptionsComunidade(opts))
  }, [comunidades]);

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={colonia?.id} />
      <TextInput
        label="Código da colônia"
        name="codigo"
        value={colonia?.codigo}
        required={true}
      />
      <NewSelectInput
        label="Comunidade"
        name="comunidade"
        value={selectedComunidade}
        onChange={setSelectedComunidade}
        options={optionsComunidade}
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
