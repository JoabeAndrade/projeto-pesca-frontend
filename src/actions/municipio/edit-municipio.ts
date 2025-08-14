"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function editMunicipio(formData: FormData): Promise<void> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("ID do município não fornecido.");
  }

  const data = {
    nome: formData.get("nome"),
    uf: formData.get("uf"),
  };

  await fetchData({
    url: `/municipios/${id}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("municipios");
  revalidateTag(`municipio-${id}`);
}
