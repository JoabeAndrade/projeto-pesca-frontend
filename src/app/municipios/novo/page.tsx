"use client";

import Button from "@/components/Button";
import "react-toastify/dist/ReactToastify.css";
import { Save } from "lucide-react";
import { useState } from "react";

const ufs = [
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "SE", nome: "Sergipe" },
];

export default function Page() {
  const [ufSelecionada, setUfSelecionada] = useState("");

  return (
    <div>
      <div className="px-8">
        <div className="flex flex-row w-full h-14 justify-between items-center my-6">
          <h1 className="text-black text-4xl">Perfil Social / Município</h1>
        </div>

        <div className="flex w-full justify-start">
          <form className="w-full max-w-4xl flex items-center gap-x-6 bg-white p-6 rounded shadow">
            <div className="flex flex-col w-full max-w-md">
              <label
                htmlFor="municipio"
                className="mb-2 text-base font-medium text-gray-700"
              >
                Comunidade
              </label>
              <div className="flex flex-row items-center gap-x-4">
                <input
                  type="text"
                  className="flex-1 p-3 border-2 border-[#6d4c41] rounded text-base"
                  id="municipio"
                  name="municipio"
                  required
                />

                <select
                  value={ufSelecionada}
                  onChange={(e) => setUfSelecionada(e.target.value)}
                  className="p-3 border-2 border-[#6d4c41] rounded text-base"
                  required
                >
                  <option value="">Selecione o estado</option>
                  {ufs.map((uf) => (
                    <option key={uf.sigla} value={uf.sigla}>
                      {uf.sigla} - {uf.nome}
                    </option>
                  ))}
                </select>

                <Button icon={Save} className="bg-[#6d4c41] px-4 py-2">
                  SALVAR
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
