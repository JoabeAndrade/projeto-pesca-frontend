"use server";

import fetchData from "../fetch-data";

export async function addArtePescaToPescador(formData: FormData): Promise<void> {
  const idPescador = formData.get("pescador_id");
  const data = {
    id_artepesca: formData.get("arte_pesca"),
  };

  fetchData({
    url: `/pescadores/${idPescador}/artespesca`,
    method: "POST",
    body: JSON.stringify(data),
  });
}
