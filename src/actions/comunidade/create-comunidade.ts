"use server";

import fetchData from "../fetch-data";

export async function createComunidade(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
    municipio_id: formData.get("municipio"),
  };

  await fetchData({ url: "/comunidades/", method: "POST", body: JSON.stringify(data) });
}
