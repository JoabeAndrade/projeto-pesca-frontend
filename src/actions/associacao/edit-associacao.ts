"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function editAssociacao(formData: FormData): Promise<void> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("ID da associação não fornecido.");
  }

  const data = {
    nome: formData.get("nome"),
  };

  await fetchData({
    url: `/associacoes/${id}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("associacoes");
  revalidateTag(`associacao-${id}`);
}
