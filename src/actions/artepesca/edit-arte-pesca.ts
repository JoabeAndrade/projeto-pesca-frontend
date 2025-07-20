"use server";

import { revalidatePath } from "next/cache";

export async function editArtePesca(formData: FormData): Promise<void> {
  const id = formData.get("id");
  const data = {
    nome: formData.get("nome"),
  };

  await fetch(`http://localhost:8000/artespesca/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })

  revalidatePath(`http://localhost:3000/artespesca/${id}/editar`);
}
