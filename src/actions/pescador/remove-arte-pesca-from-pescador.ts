"use server";

import fetchData from "../fetch-data";

export async function removeArtePescaFromPescador(idPescador: number, idArtePesca: number): Promise<void> {
  const data = {
    id_artepesca: idArtePesca,
  };

  fetchData({
    url: `/pescadores/${idPescador}/artespesca`,
    method: "DELETE",
    body: JSON.stringify(data),
  });
}
