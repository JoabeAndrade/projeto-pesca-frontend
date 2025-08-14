"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";
import { PescadorData } from "@/types/pescadores/pescador";
import { EnderecoData } from "@/types/pescadores/endereco";

export async function addEnderecoToPescador(formData: FormData): Promise<void> {
  const idPescador = formData.get("pescador_id");
  if (!idPescador) throw new Error("ID do pescador não fornecido");

  const enderecoData = {
    logradouro: formData.get("logradouro"),
    numero: formData.get("numero"),
    bairro: formData.get("bairro"),
    complemento: formData.get("complemento"),
    cep: formData.get("cep"),
    municipio_id: formData.get("municipio_id"),
  };

  const novoEndereco = await fetchData<EnderecoData>({
    url: "/enderecos/",
    method: "POST",
    body: JSON.stringify(enderecoData),
  });

  await fetchData<PescadorData>({
    url: `/pescadores/${idPescador}/`,
    method: "PATCH",
    body: JSON.stringify({ endereco_id: novoEndereco.id }),
  });

  revalidateTag(`pescador-${idPescador}`);
}
