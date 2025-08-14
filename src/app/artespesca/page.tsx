import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { ArtePescaData } from "@/types/pescadores/arte-pesca";
import { getAllArtesPesca } from "@/actions/artepesca/get-all-artes-pesca";

export const dynamic = "force-dynamic";

export default async function ArtesPescaPage() {
  const artesPesca = await getAllArtesPesca();

  if (!artesPesca) {
    return <p>Não foi possível carregar os dados das artes de pesca.</p>;
  }

  return (
    <div>
      <HeaderTitle
        title="Perfil Social / Artes de Pesca"
        urlNovo="/artespesca/novo"
      />

      <div className="px-8 w-full mx-auto">
        <div className="flex flex-row h-20 items-center border-t border-b border-gray-300">
          <div className="flex-1">
            <h1 className="font-bold">Id</h1>
          </div>
          <div className="flex-1">
            <h1 className="font-bold">Nome</h1>
          </div>
          <div className="w-24 flex items-center justify-center">
            <h1 className="font-bold">Ações</h1>
          </div>
        </div>

        {artesPesca.map((artePesca: ArtePescaData) => (
          <div
            className="flex flex-row h-20 items-center border-t border-gray-300"
            key={artePesca.id}
          >
            <div className="flex-1">
              <h1>{artePesca.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{artePesca.nome}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`/artespesca/${artePesca.id}/excluir`}
              urlEdit={`/artespesca/${artePesca.id}/editar`}
              itemName={artePesca.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
