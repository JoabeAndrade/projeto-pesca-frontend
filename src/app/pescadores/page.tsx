import ListItemPescadores from "@/components/ListItemPescadores";
import ListHeaderPescadores from "@/components/ListHeaderPescadores";
import HeaderTitle from "@/components/HeaderTitle";
import { PescadorData } from "@/types/pescadores/pescador";
import { getAllPescadores } from "@/actions/pescador/get-all-pescadores";

export const dynamic = "force-dynamic";

export default async function PescadoresPage() {
  const pescadores = await getAllPescadores();

  if (!pescadores) {
    return <p>Não foi possível carregar os dados dos pescadores.</p>;
  }

  return (
    <div>
      <HeaderTitle
        title="Perfil Social / Pescador"
        urlNovo="/pescadores/novo"
      />

      <div className="px-8 w-full mx-auto">
        <ListHeaderPescadores />
        {pescadores.map((pescador: PescadorData) => (
          <ListItemPescadores
            key={pescador.id}
            id={pescador.id}
            nome={pescador.nome}
            falecido={pescador.ativo ? "Não" : "Sim"}
            pontoEmbarque={pescador.porto_desembarque_principal?.nome || "N/A"}
            projetoCadastrado={pescador.projeto?.nome || "N/A"}
            apelido={pescador.apelido}
            // As props urlDelete e urlEdit foram removidas daqui, pois o componente agora é autossuficiente
          />
        ))}
      </div>
    </div>
  );
}
