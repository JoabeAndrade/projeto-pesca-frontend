"use server";

export async function createAreaPesca(formData: FormData): Promise<void> {
  const data = {
    descricao: formData.get("descricao"),
  };

  await fetch('http://localhost:8000/areaspesca/', {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
}
