"use server";

import { revalidatePath } from "next/cache";
import fetchData from "../fetch-data";

export async function createDependente(formData: FormData): Promise<void> {
  const data = {
    pescador: formData.get("pescador_id"),
    relacao: formData.get("relacao"),
    quantidade: formData.get("quantidade"),
  };

  await fetchData({
    url: "/dependentes/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidatePath(`/pescadores/${data.pescador}/editar`);
}
