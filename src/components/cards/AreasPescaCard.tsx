"use client";

import { AreaPescaData } from "@/types/pescadores/area-pesca";
import CardContainer from "../containers/CardContainer";
import { Waves } from "lucide-react";
import CardHeader from "./CardHeader";
import { useEffect, useState } from "react";
import { removeAreaPescaFromPescador } from "@/actions/server/remove-area-pesca-from-pescador";
import { addAreaPescaToPescador } from "@/actions/server/add-area-pesca-to-pescador";

type AreasPescaCardProps = {
  idPescador: number,
  areasPescaDoPescador: AreaPescaData[],
  todasAreasPesca: Promise<AreaPescaData[]>,
};

type Option = {
  value: string,
  label: string,
};

async function formatAreasPescaToOptions(areasPesca: Promise<AreaPescaData[]>): Promise<Option[]> {
  const data = await areasPesca;
  const opts = data.map(({ id, descricao }) => ({
    value: id.toString(),
    label: descricao,
  }));
  return opts;
}

export default function AreasPescaCard({
  idPescador,
  areasPescaDoPescador,
  todasAreasPesca
}: AreasPescaCardProps) {
  const [optionsAreasPesca, setOptionsAreasPesca] = useState<Option[]>([]);

  useEffect(() => {
    formatAreasPescaToOptions(todasAreasPesca).then(opts => setOptionsAreasPesca(opts));
  }, [todasAreasPesca]);

  const handleDelete = (idAreaPesca: number) => {
    removeAreaPescaFromPescador(idPescador, idAreaPesca);
  };

  return (
    <CardContainer>
      <CardHeader title="Areas de Pesca" icon={<Waves />} />
      <form action={addAreaPescaToPescador}>
        <input type="hidden" name="pescador_id" value={idPescador} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="area_pesca">Area de pesca</label>
            <select
              name="area_pesca"
              id="area_pesca"
              className="border-b w-full focus:outline-none py-1"
              required
            >
              <option value="">Selecione...</option>
              {optionsAreasPesca.map((area, index) => (
                <option key={index} value={area.value}>{area.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="bg-[#6B4A3F] text-white px-4 py-2 rounded shadow hover:bg-[#5a3e36] transition"
        >
          SALVAR
        </button>
      </form>

      <div className="mt-6">
        <table className="w-full text-left text-sm mt-4 border-t pt-2">
          <thead className="text-gray-800 font-semibold">
            <tr>
              <th className="py-2"></th>
              <th className="py-2">Descrição</th>
              <th className="py-2">Opções</th>
            </tr>
          </thead>
          <tbody>
            {areasPescaDoPescador.map((area, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{area.descricao}</td>
                <td>
                  <div>
                    <button onClick={() => handleDelete(area.id)}>Excluir</button>
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
