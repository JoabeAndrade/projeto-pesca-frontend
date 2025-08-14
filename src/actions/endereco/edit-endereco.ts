"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function editEndereco(formData: FormData): Promise<void> {
  const idEndereco = formData.get("endereco_id");

  if (!idEndereco) {
    throw new Error("ID do endereço não fornecido.");
  }

  const data = {
    logradouro: formData.get("logradouro"),
    numero: formData.get("numero"),
    bairro: formData.get("bairro"),
    complemento: formData.get("complemento"),
    cep: formData.get("cep"),
    municipio_id: formData.get("municipio_id"),
  };

  await fetchData({
    url: `/enderecos/${idEndereco}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("enderecos");
  revalidateTag(`endereco-${idEndereco}`);
}
