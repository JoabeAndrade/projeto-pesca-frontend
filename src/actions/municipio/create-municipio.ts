"use server";

export async function createMunicipio(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
    uf: formData.get("uf"),
  };

  fetch(`http://localhost:8000/municipios/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
}
