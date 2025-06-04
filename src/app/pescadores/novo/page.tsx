"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

const optionSexo: Option[] = [
  { label: "Masculino", value: "Masculino" },
  { label: "Feminino", value: "Feminino" },
];

const optionCidades: Option[] = [
  { label: "Itabuna BA", value: "Itabuna" },
  { label: "Ilhéus BA", value: "Ilhéus" },
  { label: "Porto Seguro BA", value: "Porto Seguro" },
];

export default function Page() {
  const [sexoSelecionado, setSexoSelecionado] = useState("");
  const [naturalidadeSelecionado, setNaturalidadeSelecionado] = useState("");

  async function createPescador(formData: FormData) {
    const data = {
      nome: formData.get('nome'),
      apelido: formData.get('apelido'),
      nome_pai: formData.get('nome_pai'),
      nome_mae: formData.get('nome_mae')
    }

    const response = await fetch('http://localhost:8000/pescadores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  }

  return (
    <div>
      <Header />
      <div className="flex flex-row w-full h-14 justify-between items-center px-8 my-4">
        <h1 className="text-black text-4xl">Perfil Social / Pescador</h1>
      </div>
      <div className="flex w-full h-screen justify-center items-center">
        <form className="w-2xl" action={createPescador}>
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="nome"
              name="nome"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sexo">Sexo</label>
            <select
              name="sexo"
              id="sexo"
              value={sexoSelecionado}
              onChange={(e) => setSexoSelecionado(e.target.value)}
              className="p-2 border-2 border-[#6d4c41] rounded"
            >
              <option value="">Selecione</option>
              {optionSexo.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="matricula">Matrícula</label>
            <input
              type="number"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="matricula"
              name="matricula"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apelido">Apelido</label>
            <input
              type="text"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="apelido"
              name="apelido"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome_pai">Nome do Pai</label>
            <input
              type="text"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="nome_pai"
              name="nome_pai"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome_mae">Nome da Mãe</label>
            <input
              type="text"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="nome_mae"
              name="nome_mae"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rg">RG</label>
            <input
              type="text"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="rg"
              name="rg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="cpf"
              name="cpf"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="data">Data de Nascimento</label>
            <input
              type="date"
              className="p-2 border-2 border-[#6d4c41] rounded"
              id="data"
              name="data"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="naturalidade">Naturalidade</label>
            <select
              name="naturalidade"
              id="naturalidade"
              value={naturalidadeSelecionado}
              onChange={(e) => setNaturalidadeSelecionado(e.target.value)}
              className="p-2 border-2 border-[#6d4c41] rounded"
            >
              <option value="">Selecione</option>
              {optionCidades.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className="w-full my-6">
            SALVAR E CONTINUAR
          </Button>
        </form>
      </div>
    </div>
  );
}
