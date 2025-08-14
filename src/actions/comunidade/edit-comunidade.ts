"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function editComunidade(formData: FormData): Promise<void> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("ID da comunidade não fornecido.");
  }

  const data = {
    nome: formData.get("nome"),
    municipio_id: formData.get("municipio"),
  };

  await fetchData({
    url: `/comunidades/${id}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("comunidades");
  revalidateTag(`comunidade-${id}`);
}
