"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function addTelefoneToPescador(formData: FormData): Promise<void> {
  const data = {
    pescador: formData.get("pescador_id"),
    numero: formData.get("numero"),
  };

  if (!data.pescador) throw new Error("ID do pescador não fornecido.");

  await fetchData({
    url: "/telefones/",
    method: "POST",
    body: JSON.stringify(data),
  });
  revalidateTag(`pescador-${data.pescador}`);
}
