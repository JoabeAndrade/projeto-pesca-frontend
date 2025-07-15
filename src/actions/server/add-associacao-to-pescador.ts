"use server";

import fetchData from "./fetch-data";

export async function addAssociacaoToPescador(formData: FormData): Promise<void> {
  const idPescador = formData.get("pescador_id");
  const data = {
    associacao_id: formData.get("associacao"),
  };

  fetchData({
    url: `/pescadores/${idPescador}/associacoes`,
    method: "POST",
    body: JSON.stringify(data),
  });
}
