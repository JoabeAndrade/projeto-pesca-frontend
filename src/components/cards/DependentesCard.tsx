"use client";

import { DependenteData } from "@/types/pescadores/dependente"
import { House } from "lucide-react";
import CardContainer from "../containers/CardContainer";
import CardHeader from "./CardHeader";
import { createDependente } from "@/actions/pescador/add-dependente-to-pescador";
import { deleteItem } from "@/actions/delete-item";

type Option = {
  value: string,
  label: string,
};

type DependentesCardProps = {
  idPescador: number,
  dependentes: DependenteData[],
  tiposDependente: Option[],
};

export default function DependentesCard({ idPescador, dependentes, tiposDependente }: DependentesCardProps) {
  const handleDelete = (id: number) => {
    deleteItem({ url: `/dependentes/${id}` })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("não alcançou o servidor");
      })
  };

  return (
    <CardContainer>
      <CardHeader title="Dependentes" icon={<House />} />
      <form action={createDependente}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input type="hidden" name="pescador_id" value={idPescador} />
          <label htmlFor="relacao">Relação</label>
          <select
            name="relacao"
            id="relacao"
            className="border-b w-full focus:outline-none py-1"
            required
          >
            <option value="">Selecione o tipo</option>
            {tiposDependente.map((tipo, index) => (
              <option key={index} value={tipo.value}>{tipo.label}</option>
            ))}
          </select>

          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            min={1}
            className="border-b w-full focus:outline-none py-1"
            required
          />
        </div>

        <button
          className="bg-[#6B4A3F] text-white px-4 py-2 rounded shadow hover:bg-[#5a3e36] transition"
        >
          SALVAR
        </button>
      </form>

      <div className="mt-6">
        <table className="w-full text-left text-sm mt-4 border-t pt-2">
          <thead className="text-gray-800 font-semibold">
            <tr>
              <th className="py-2"></th>
              <th className="py-2">Relação</th>
              <th className="py-2">Quantidade</th>
              <th className="py-2">Opções</th>
            </tr>
          </thead>
          <tbody>
            {dependentes.map((dependente, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dependente.relacao}</td>
                <td>{dependente.quantidade}</td>
                <td>
                  <div>
                    <button onClick={() => handleDelete(dependente.id)}>Excluir</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContainer>
  );
}
