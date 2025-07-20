"use server";

export async function createAssociacao(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
  };

  await fetch(`http://localhost:8000/associacoes/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
}
