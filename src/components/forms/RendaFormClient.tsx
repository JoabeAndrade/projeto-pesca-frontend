"use client";

import { DollarSign } from "lucide-react";
import { useState } from "react";
import InfoSisherman from "../InfoFisherman";

export default function RendaFormClient({
  pescadorId,
}: {
  pescadorId: string;
}) {
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSave = () => {
    alert(`Salvar para o pescador ${pescadorId}: ${tipo} - ${descricao}`);
    // Aqui você pode chamar uma action server (com mutate) ou uma API
  };

  return (
    <InfoSisherman
      icon={<DollarSign />}
      title="Renda"
      subtitle="Salvar Renda:"
      onSave={handleSave}
      table={
        <table className="w-full text-left text-sm mt-4 border-t pt-2">
          <thead className="text-gray-800 font-semibold">
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Renda</th>
              <th className="py-2">ID</th>
              <th className="py-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {/* Você pode popular com dados vindos de props ou fetch no client */}
          </tbody>
        </table>
      }
    >
      <select
        className="border-b w-full focus:outline-none py-1"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="">Selecione o tipo</option>
        <option value="Subsistência">Subsistência</option>
        <option value="Comercial">Comercial</option>
      </select>

      <select
        className="border-b w-full focus:outline-none py-1"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      >
        <option value="">Selecione a descrição</option>
        <option value="PESCA">PESCA</option>
        <option value="AGRICULTURA">AGRICULTURA</option>
      </select>
    </InfoSisherman>
  );
}
