"use client";

import { createAssociacao } from "@/actions/server/create-associacao";
import FormContainer from "../containers/FormContainer";
import SubmitButton from "../SubmitButton";
import TextInput from "../inputs/TextInput";
import { AssociacaoData } from "@/types/pescadores/associacao";
import { editAssociacao } from "@/actions/server/edit-associacao";

type AssociacaoFormProps = {
  associacao?: AssociacaoData;
}

export default function AssociacaoForm({ associacao }: AssociacaoFormProps) {
  const action = (typeof associacao === "undefined") ? createAssociacao : editAssociacao;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={associacao?.id} />
      <TextInput
        label="Nome da associação"
        name="nome"
        value={associacao?.nome}
        required={true}
      />
      <SubmitButton />
    </FormContainer>
  );
}
