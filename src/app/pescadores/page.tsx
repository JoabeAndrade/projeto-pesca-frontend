import Button from "@/components/Button";
import Header from "@/components/Header";
import { Plus } from "lucide-react";
import { PescadorData } from "@/types/pescadores/pescador_data";

export default async function Page() {
  const data = await fetch('http://localhost:8000/pescadores/');
  const pescadores = await data.json();

  return (
    <div>
      <Header />
      <div className="flex flex-row w-full h-14 justify-between items-center px-8 my-4">
        <h1 className="text-black text-4xl">Perfil Social / Pescador</h1>
        <Button icon={Plus}>NOVO</Button>
      </div>

      <div>
        <h1>Pescadores</h1>
        {pescadores.map((pescador: PescadorData) => (
          <div key={pescador.id}>
            <h2>{pescador.nome}</h2>
            <ul>
              <li>{pescador.apelido}</li>
              <li>{pescador.nome_pai}</li>
              <li>{pescador.nome_mae}</li>
            </ul>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
