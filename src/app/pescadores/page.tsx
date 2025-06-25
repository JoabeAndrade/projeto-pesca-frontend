import ListItemPescadores from "@/components/ListItemPescadores";
import ListHeaderPescadores from "@/components/ListHeaderPescadores";
import HeaderTitle from "@/components/HeaderTitle";

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
      <HeaderTitle title='Perfil Social / Pescador' urlNovo='pescadores/novo'/>

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
