"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function editArtePesca(formData: FormData): Promise<void> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("ID da arte de pesca não fornecido.");
  }

  const data = {
    nome: formData.get("nome"),
  };

  await fetchData({
    url: `/artespesca/${id}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("artes-pesca");

  revalidateTag(`arte-pesca-${id}`);
}
