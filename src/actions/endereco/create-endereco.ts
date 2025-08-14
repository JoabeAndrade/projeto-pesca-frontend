"use server";

import { revalidateTag } from "next/cache";
import { EnderecoData } from "@/types/pescadores/endereco";
import fetchData from "@/lib/fetch-data";

export async function createEndereco(
  formData: FormData
): Promise<EnderecoData> {
  const data = {
    logradouro: formData.get("logradouro"),
    numero: formData.get("numero"),
    bairro: formData.get("bairro"),
    complemento: formData.get("complemento"),
    cep: formData.get("cep"),
    municipio_id: formData.get("municipio_id"),
  };

  const response = await fetchData<EnderecoData>({
    url: "/enderecos/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidateTag("enderecos");

  return response;
}
