"use server";

import { EnderecoData } from "@/types/pescadores/endereco";
import fetchData from "./fetch-data";
import { PescadorData } from "@/types/pescadores/pescador";

export async function createEndereco(formData: FormData): Promise<void> {
  const idPescador = formData.get("pescador_id");
  const data = {
    logradouro: formData.get("logradouro"),
    numero: formData.get("numero"),
    bairro: formData.get("bairro"),
    complemento: formData.get("complemento"),
    cep: formData.get("cep"),
    municipio_id: formData.get("municipio_id"),
  };

  fetchData<EnderecoData>({
    url: "/enderecos/",
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((endereco) => {
      const idEndereco = endereco.id;
      fetchData<PescadorData>({
        url: `/pescadores/${idPescador}`,
        method: "PATCH",
        body: JSON.stringify({ endereco_id: idEndereco }),
      })
    })
}
