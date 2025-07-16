"use client";

import { createComunidade } from "@/actions/server/create-comunidade";
import FormContainer from "../containers/FormContainer";
import TextInput from "../inputs/TextInput";
import { MunicipioData } from "@/types/pescadores/municipio";
import { ComunidadeData } from "@/types/pescadores/comunidade";
import { editComunidade } from "@/actions/server/edit-comunidade";
import { useEffect, useState } from "react";
import { NewSelectInput } from "../inputs/NewSelectInput";
import Button from "../Button";
import { Save } from "lucide-react";

type ComunidadeFormProps = {
  municipios: Promise<MunicipioData[]>;
  comunidade?: ComunidadeData;
};

type Option = {
  value: string;
  label: string;
};

async function formatMunicipiosToOptions(
  municipios: Promise<MunicipioData[]>
): Promise<Option[]> {
  const muns = await municipios;
  const options = muns.map(({ id, nome, uf }) => ({
    value: id.toString(),
    label: `${nome}/${uf}`,
  }));
  return options;
}

export default function ComunidadeForm({
  municipios,
  comunidade,
}: ComunidadeFormProps) {
  const [municipio, setMunicipio] = useState(
    comunidade?.municipio?.id.toString()
  );
  const [municipiosOptions, setMunicipiosOptions] = useState<Option[]>([]);

  useEffect(() => {
    formatMunicipiosToOptions(municipios).then((opts) =>
      setMunicipiosOptions(opts)
    );
  }, [municipios]);

  const action =
    typeof comunidade === "undefined" ? createComunidade : editComunidade;

  return (
    <FormContainer action={action}>
      <input type="hidden" name="id" value={comunidade?.id} />
      <TextInput
        label="Nome da comunidade"
        name="nome"
        value={comunidade?.nome}
        required={true}
      />
      <NewSelectInput
        label="Município"
        name="municipio"
        options={municipiosOptions}
        value={municipio}
        onChange={setMunicipio}
        required={true}
      />
      <Button icon={Save} type="submit">
        Salvar
      </Button>
    </FormContainer>
  );
}
