"use client";

import { AssociacaoData } from "@/types/pescadores/associacao";
import CardContainer from "../containers/CardContainer";
import CardHeader from "./CardHeader";
import { Building2 } from "lucide-react";
import { use } from "react";
import { addAssociacaoToPescador } from "@/actions/pescador/add-associacao-to-pescador";
import { removeAssociacaoFromPescador } from "@/actions/pescador/remove-associacao-from-pescador";

type AssociacoesCardProps = {
  idPescador: number;
  associacoesDoPescador?: AssociacaoData[];
  todasAssociacoes: Promise<AssociacaoData[]>;
};

export default function AssociacoesCard({
  idPescador,
  associacoesDoPescador=[],
  todasAssociacoes,
}: AssociacoesCardProps) {
  const associacoes = use(todasAssociacoes);

  const handleDelete = (idAssociacao: number) => {
    removeAssociacaoFromPescador(idPescador, idAssociacao);
  };

  return (
    <CardContainer>
      <CardHeader title="Associações" icon={<Building2 />} />
      <div>
        <form action={addAssociacaoToPescador}>
          <input type="hidden" name="pescador_id" value={idPescador} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="associacao">Associações</label>
              <select
                name="associacao"
                id="associacao"
                required
                className="border-b w-full focus:outline-none py-1"
              >
                <option value="">Selecione...</option>
                {associacoes.map((associacao, index) => (
                  <option key={index} value={associacao.id}>{associacao.nome}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="bg-[#6B4A3F] text-white px-4 py-2 rounded shadow hover:bg-[#5a3e36] transition"
          >
            SALVAR
          </button>
        </form>
      </div>
      <div className="mt-6">
        <table className="w-full text-left text-sm mt-4 border-t pt-2">
          <thead className="text-gray-800 font-semibold">
            <tr>
              <th className="py-2"></th>
              <th className="py-2">Nome</th>
              <th className="py-2">Opções</th>
            </tr>
          </thead>
          <tbody>
            {associacoesDoPescador.map((assoc, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{assoc.nome}</td>
                <td>
                  <div>
                    <button onClick={() => handleDelete(assoc.id)}>Excluir</button>
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
