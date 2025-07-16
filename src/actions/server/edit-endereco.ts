"use server";

import fetchData from "./fetch-data";

export async function editEndereco(formData: FormData): Promise<void> {
  const idEndereco = formData.get("endereco_id");
  const data = {
    logradouro: formData.get("logradouro"),
    numero: formData.get("numero"),
    bairro: formData.get("bairro"),
    complemento: formData.get("complemento"),
    cep: formData.get("cep"),
    municipio_id: formData.get("municipio_id"),
  };

  fetchData({
    url: `/enderecos/${idEndereco}`,
    method: "PUT",
    body: JSON.stringify(data),
  })
}
