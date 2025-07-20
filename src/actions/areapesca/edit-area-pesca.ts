"use server";

import { revalidatePath } from "next/cache";

export async function editAreaPesca(formData: FormData): Promise<void> {
  const id = formData.get("id");
  const data = {
    descricao: formData.get("descricao"),
  };

  await fetch(`http://localhost:8000/areaspesca/${id}`, {
    method: 'PUT',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidatePath(`http://localhost:3000/areaspesca/${id}/editar`);
}
