"use server";

import fetchData from "./fetch-data";

export async function createColonia(formData: FormData): Promise<void> {
  const data = {
    codigo: formData.get("codigo"),
    comunidade_id: formData.get("comunidade"),
  };

  await fetchData({ url: '/colonias/', method: 'POST', body: JSON.stringify(data) });
}
