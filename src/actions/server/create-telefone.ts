"use server";

import { TelefoneData } from "@/types/pescadores/telefone";
import fetchData from "./fetch-data";
import { revalidatePath } from "next/cache";

export async function createTelefone(formData: FormData): Promise<void> {
  const data = {
    pescador: formData.get("pescador_id"),
    numero: formData.get("numero"),
  };

  console.log(data);

  fetchData<TelefoneData>({
    url: "/telefones/",
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidatePath(`/pescadores/${data.pescador}/editar`);
}
