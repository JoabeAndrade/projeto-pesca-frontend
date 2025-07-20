"use server";

export async function createArtePesca(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
  };

  fetch(`http://localhost:8000/artespesca/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
}
