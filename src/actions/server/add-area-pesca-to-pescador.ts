"use server";

import fetchData from "./fetch-data";

export async function addAreaPescaToPescador(formData: FormData) {
  const idPescador = formData.get("pescador_id");
  const data = { id_areapesca: formData.get("area_pesca") };

  fetchData({
    url: `/pescadores/${idPescador}/areaspesca`,
    method: "POST",
    body: JSON.stringify(data),
  })
}
