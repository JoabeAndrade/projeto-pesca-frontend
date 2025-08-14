"use server";

import fetchData from "@/lib/fetch-data";
import { revalidateTag } from "next/cache";

export async function editAreaPesca(formData: FormData): Promise<void> {
  const id = formData.get("id");

  if (!id) {
    throw new Error("ID da área de pesca não fornecido.");
  }

  const data = {
    descricao: formData.get("descricao"),
  };

  await fetchData({
    url: `/areaspesca/${id}/`,
    method: "PUT",
    body: JSON.stringify(data),
  });

  revalidateTag("areas-pesca");

  revalidateTag(`area-pesca-${id}`);
}
