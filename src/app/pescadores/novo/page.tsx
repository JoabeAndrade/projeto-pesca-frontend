/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { MunicipioData } from "@/types/pescadores/municipio";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Option = {
  label: string;
  value: string;
};

const optionSexo: Option[] = [
  { label: "Masculino", value: "m" },
  { label: "Feminino", value: "f" },
];

const getMunicipios = async (): Promise<MunicipioData[]> => {
  const municipios = await fetch("http://localhost:8000/municipios/");
  const jsonMunicipios = await municipios.json();
  return jsonMunicipios;
};

export default function Page() {
  const [sexoSelecionado, setSexoSelecionado] = useState("");
  const [naturalidadeSelecionado, setNaturalidadeSelecionado] = useState("");
  const [municipios, setMunicipios] = useState<MunicipioData[]>([]);
  const router = useRouter();

  useEffect(() => {
    getMunicipios().then((response) => setMunicipios(response));
  }, []);

  async function createPescador(formData: FormData) {
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
      naturalidade: naturalidadeSelecionado,
    };

    try {
      const response = await fetch("http://localhost:8000/pescadores/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Cadastro realizado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });

        setTimeout(() => {
          router.push("/pescadores");
        }, 2200);
      } else {
        toast.error("Erro ao cadastrar pescador!");
      }
    } catch (error) {
      toast.error("Erro ao conectar com o servidor.");
    }
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="px-8 my-6">
        <h1 className="text-4xl font-semibold text-black mb-6">
          Perfil Social / Pescador
        </h1>

        <div className="w-full flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              createPescador(formData);
            }}
            className="bg-white shadow p-8 rounded w-full max-w-4xl space-y-8"
          >
            {/* Seção: Dados Pessoais */}
            <section>
              <h2 className="text-xl font-medium text-[#6d4c41] mb-4">
                Dados Pessoais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="sexo">Sexo</label>
                  <select
                    name="sexo"
                    id="sexo"
                    value={sexoSelecionado}
                    onChange={(e) => setSexoSelecionado(e.target.value)}
                    required
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
                  <label htmlFor="data_nascimento">Data de Nascimento</label>
                  <input
                    type="date"
                    id="data_nascimento"
                    name="data_nascimento"
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="naturalidade">Naturalidade</label>
                  <select
                    name="naturalidade"
                    id="naturalidade"
                    value={naturalidadeSelecionado}
                    onChange={(e) => setNaturalidadeSelecionado(e.target.value)}
                    required
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  >
                    <option value="">Selecione</option>
                    {municipios.map((municipio) => (
                      <option key={municipio.id} value={municipio.id}>
                        {municipio.nome} - {municipio.uf}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Seção: Documentos */}
            <section>
              <h2 className="text-xl font-medium text-[#6d4c41] mb-4">
                Documentos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="rg">RG</label>
                  <input
                    type="text"
                    id="rg"
                    name="rg"
                    placeholder="Apenas números"
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="Apenas números"
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>
              </div>
            </section>

            {/* Seção: Outros */}
            <section>
              <h2 className="text-xl font-medium text-[#6d4c41] mb-4">
                Outras Informações
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="matricula">Matrícula</label>
                  <input
                    type="number"
                    id="matricula"
                    name="matricula"
                    required
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="apelido">Apelido</label>
                  <input
                    type="text"
                    id="apelido"
                    name="apelido"
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="nome_pai">Nome do Pai</label>
                  <input
                    type="text"
                    id="nome_pai"
                    name="nome_pai"
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="nome_mae">Nome da Mãe</label>
                  <input
                    type="text"
                    id="nome_mae"
                    name="nome_mae"
                    className="p-2 border-2 border-[#6d4c41] rounded"
                  />
                </div>
              </div>
            </section>

            {/* Botão de envio */}
            <div>
              <Button type="submit" className="w-full mt-6">
                SALVAR E CONTINUAR
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
