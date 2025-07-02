"use server";

import { revalidatePath } from "next/cache";
import fetchData from "./fetch-data";

export async function editColonia(formData: FormData): Promise<void> {
  const id = formData.get("id");
  const data = {
    codigo: formData.get("codigo"),
    comunidade_id: formData.get("comunidade"),
  };

  await fetchData({ url: `/colonias/${id}`, method: 'PUT', body: JSON.stringify(data) });

  revalidatePath(`http://localhost:3000/colonias`);
}
