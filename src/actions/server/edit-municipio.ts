"use server";

import { revalidatePath } from "next/cache";

export async function editMunicipio(formData: FormData): Promise<void> {
  const id = formData.get("id");
  const data = {
    nome: formData.get("nome"),
    uf: formData.get("uf"),
  };

  await fetch(`http://localhost:8000/municipios/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidatePath(`http://localhost:3000/municipios/${id}/editar`);
}
