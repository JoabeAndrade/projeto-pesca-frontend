"use client";

import { addArtePescaToPescador } from "@/actions/pescador/add-arte-pesca-to-pescador";
import CardContainer from "../containers/CardContainer";
import CardHeader from "./CardHeader";
import { ArtePescaData } from "@/types/pescadores/arte-pesca";
import { Fish } from "lucide-react";
import { useEffect, useState } from "react";
import { removeArtePescaFromPescador } from "@/actions/pescador/remove-arte-pesca-from-pescador";

type Option = {
  value: string,
  label: string,
};

type ArtesPescaCardProps = {
  idPescador: number,
  artesDoPescador: ArtePescaData[],
  todasArtesPesca: Promise<ArtePescaData[]>,
};

function formatArtesPescaToOptions(artesPesca: ArtePescaData[]): Option[] {
  return artesPesca.map(({ id, nome }) => ({
    value: id.toString(),
    label: nome,
  }));
};

async function receiveArtesPesca(artesPesca: Promise<ArtePescaData[]>): Promise<Option[]> {
  const data = await artesPesca;
  return formatArtesPescaToOptions(data);
}

export default function ArtesPescaCard({ idPescador, artesDoPescador, todasArtesPesca }: ArtesPescaCardProps) {
  const [ optionsArtesPesca, setOptionsArtesPesca ] = useState<Option[]>([]);

  useEffect(() => {
    receiveArtesPesca(todasArtesPesca).then(opts => setOptionsArtesPesca(opts))
  }, [todasArtesPesca]);

  const handleDelete = (idArtePesca: number) => {
    removeArtePescaFromPescador(idPescador, idArtePesca);
  };

  return (
    <CardContainer>
      <CardHeader title="Artes de Pesca" icon={<Fish />} />
      <form action={addArtePescaToPescador}>
        <input type="hidden" name="pescador_id" value={idPescador} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="arte_pesca">Arte de pesca</label>
            <select
              name="arte_pesca"
              id="arte_pesca"
              className="border-b w-full focus:outline-none py-1"
              required
            >
              <option value="">Selecione...</option>
              {optionsArtesPesca.map((arte, index) => (
                <option key={index} value={arte.value}>{arte.label}</option>
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
            {artesDoPescador.map((arte, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{arte.nome}</td>
                <td>
                  <div>
                    <button onClick={() => handleDelete(arte.id)}>Excluir</button>
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
