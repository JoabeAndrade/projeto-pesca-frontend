/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

type State = {
  message: string;
};

export async function createPescador(prevState: State, formData: FormData): Promise<State> {
  const data = {
    nome: formData.get("nome"),
    sexo: formData.get("sexo"),
    matricula_colonia: formData.get("matricula"),
    apelido: formData.get("apelido"),
    nome_pai: formData.get("nome_pai"),
    nome_mae: formData.get("nome_mae"),
    rg: formData.get("rg"),
    cpf: formData.get("cpf"),
    data_nascimento: formData.get("data_nascimento"),
  };

  const response = await fetch('http://localhost:8000/pescadores/', {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseJson = await response.json();

  if (response.ok) {
    return {
      message: "deu",
    };
  } else {
    return {
      message: "não deu",
    };
  }

  return {
    message: "",
  }
}
