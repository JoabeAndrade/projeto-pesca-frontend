import TelefoneListItem from "./TelefoneListItem";
import { TelefoneData } from "@/types/pescadores/telefone";

type TelefonesListProps = {
  telefones: TelefoneData[],
};

export default function TelefonesList({ telefones }: TelefonesListProps) {
  return (
    <div className="mt-6">
      <table className="w-full text-left text-sm mt-4 border-t pt-2">
        <thead className="text-gray-800 font-semibold">
          <tr>
            <th className="py-2"></th>
            <th className="py-2">Número</th>
            <th className="py-2">Opções</th>
          </tr>
        </thead>
        <tbody>
          {telefones.map((telefone: TelefoneData, index: number) => (
            <TelefoneListItem
              key={index}
              index={index + 1}
              telefone={telefone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
