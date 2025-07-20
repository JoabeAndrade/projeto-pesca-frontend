"use server";

import fetchData from "../fetch-data";

export async function removeAreaPescaFromPescador(
  idPescador: number, idAreaPesca: number
): Promise<void> {
  const data = { id_areapesca: idAreaPesca };

  fetchData({
    url: `/pescadores/${idPescador}/areaspesca`,
    method: "POST",
    body: JSON.stringify(data),
  });
}