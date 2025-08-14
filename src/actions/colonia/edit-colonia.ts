"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function editColonia(formData: FormData): Promise<void> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("ID da colônia não fornecido.");
  }

  const data = {
    codigo: formData.get("codigo"),
    comunidade_id: formData.get("comunidade"),
  };

  await fetchData({
    url: `/colonias/${id}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("colonias");
  revalidateTag(`colonia-${id}`);
}
