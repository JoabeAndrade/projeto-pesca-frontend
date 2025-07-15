"use server";

import fetchData from "./fetch-data";

export async function removeAssociacaoFromPescador(idPescador: number, idAssociacao: number): Promise<void> {
  const data = {
    associacao_id: idAssociacao,
  };

  fetchData({
    url: `/pescadores/${idPescador}/associacoes`,
    method: "DELETE",
    body: JSON.stringify(data),
  });
}
