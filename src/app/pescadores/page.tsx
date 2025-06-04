import Button from "@/components/Button";
import Header from "@/components/Header";
import { Plus } from "lucide-react";
import Link from "next/link";
import ListItemPescadores from "@/components/ListItemPescadores";
import ListHeaderPescadores from "@/components/ListHeaderPescadores";

type PescadorType = {
  id: number;
  nome: string;
  falecido: string;
  pontoEmbarque: string;
  projetoCadastrado: string;
  apelido: string;
}

export default async function Page() {
  const data = await fetch("http://localhost:8000/pescadores/");
  const pescadores = await data.json();

  return (
    <div>
      <Header />
      <div className="flex flex-row w-full h-14 justify-between items-center px-8 my-4">
        <h1 className="text-black text-4xl">Perfil Social / Pescador</h1>
        <Link href="pescadores/novo">
          <Button icon={Plus}>NOVO</Button>
        </Link>
      </div>

      <div className="px-8 w-full mx-auto">
        <ListHeaderPescadores />
        {pescadores.map((pescador: PescadorType) => (
          <ListItemPescadores
            key={pescador.id}
            id={pescador.id}
            nome={pescador.nome}
            falecido={pescador.falecido ? "Sim" : "Não"}
            pontoEmbarque=""
            projetoCadastrado=""
            apelido={pescador.apelido}
          />
        ))}
      </div>
    </div>
  );
}
