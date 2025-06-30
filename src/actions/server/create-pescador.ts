"use server";

type State = {
  errors: string[];
  message: string;
};

export async function createPescador(prevState: State, formData: FormData): Promise<State> {
  const data = {
    nome: formData.get("nome"),
    sexo: formData.get("sexo"),
    apelido: formData.get("apelido"),
    data_nascimento: formData.get("data_nascimento"),
    naturalidade_id: formData.get("naturalidade"),
    nome_pai: formData.get("nome_pai"),
    nome_mae: formData.get("nome_mae"),
    colonia_id: formData.get("colonia"),
    matricula_colonia: formData.get("matricula_colonia"),
    data_inscricao_colonia: formData.get("data_matricula_colonia"),
    comunidade_id: formData.get("comunidade"),
    rg: formData.get("rg"),
    cpf: formData.get("cpf"),
    tipo_embarcacao: formData.get("tipo_embarcacao"),
    tamanho_embarcacao: formData.get("tamanho_embarcacao"),
    proprietario_embarcacao: formData.get("proprietario_embarcacao"),
    escolaridade: formData.get("escolaridade"),
    renda_mensal_pesca: formData.get("renda_mensal_pesca"),
    outra_renda: formData.get("outra_renda"),
    ativo: formData.get("ativo"),
    motivo_inatividade: formData.get("motivo_inatividade"),
    data_cadastramento: formData.get("data_cadastramento"),
  };

  const response = await fetch('http://localhost:8000/pescadores/', {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseJson = await response.json();

  if (response.ok) {
    return {
      errors: [],
      message: "deu",
    };
  } else {
    return {
      errors: responseJson,
      message: "não deu",
    };
  }
}
