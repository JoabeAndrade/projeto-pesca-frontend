import { Pencil } from "lucide-react";
import Button from "./Button";

type PropsListItemPescadores = {
  id: number;
  nome: string;
  apelido: string;
  falecido: string;
  pontoEmbarque: string;
  projetoCadastrado: string;
};

export default function ListItemPescadores({
  id,
  nome,
  apelido,
  falecido,
  pontoEmbarque,
  projetoCadastrado,
}: PropsListItemPescadores) {
  return (
    <div className="flex flex-row h-20 items-center border-t border-gray-300">
      <div className="flex-1">
        <h1>{id}</h1>
      </div>
      <div className="flex-1">
        <h1>{nome}</h1>
      </div>
      <div className="flex-1">
        <h1>{apelido}</h1>
      </div>
      <div className="flex-1">
        <h1>{falecido}</h1>
      </div>
      <div className="flex-1">
        <h1>{pontoEmbarque}</h1>
      </div>
      <div className="flex-1">
        <h1>{projetoCadastrado}</h1>
      </div>
      <div className="w-8">
        <Button icon={Pencil} className="rounded-full bg-[#6d4c41] mx-2" />
      </div>
    </div>
  );
}
