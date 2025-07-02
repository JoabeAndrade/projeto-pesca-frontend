"use server";

import { revalidatePath } from "next/cache";
import fetchData from "./fetch-data";

export async function editComunidade(formData: FormData): Promise<void> {
  const id = formData.get("id");
  const data = {
    nome: formData.get("nome"),
    municipio_id: formData.get("municipio"),
  };

  await fetchData({ url: `/comunidades/${id}`, method: 'PUT', body: JSON.stringify(data) });

  revalidatePath(`http://localhost:3000/comunidades/${id}/editar`);
}
