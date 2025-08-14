import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { AreaPescaData } from "@/types/pescadores/area-pesca";
import { getAllAreasPesca } from "@/actions/areapesca/get-all-areas-pesca";

export const dynamic = "force-dynamic";

export default async function AreasPescaPage() {
  const areasPesca = await getAllAreasPesca();

  if (!areasPesca) {
    return <p>Não foi possível carregar os dados das áreas de pesca.</p>;
  }

  return (
    <div>
      <HeaderTitle
        title="Perfil Social / Áreas de Pesca"
        urlNovo="/areaspesca/novo"
      />
      <div className="px-8 w-full mx-auto">
        <div className="flex flex-row h-20 items-center border-t border-b border-gray-300">
          <div className="flex-1">
            <h1 className="font-bold">Id</h1>
          </div>
          <div className="flex-1">
            <h1 className="font-bold">Descrição</h1>
          </div>
          <div className="w-24 flex items-center justify-center">
            <h1 className="font-bold">Ações</h1>
          </div>
        </div>

        {areasPesca.map((areaPesca: AreaPescaData) => (
          <div
            className="flex flex-row h-20 items-center border-t border-gray-300"
            key={areaPesca.id}
          >
            <div className="flex-1">
              <h1>{areaPesca.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{areaPesca.descricao}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`/areaspesca/${areaPesca.id}/excluir`}
              urlEdit={`/areaspesca/${areaPesca.id}/editar`}
              itemName={areaPesca.descricao}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
