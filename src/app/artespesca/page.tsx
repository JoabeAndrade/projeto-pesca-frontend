import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { ArtePescaData } from "@/types/pescadores/arte-pesca";

export default async function Page() {
  const data = await fetch('http://localhost:8000/artespesca');
  const artesPesca = await data.json();

  return (
    <div>
      <HeaderTitle title='Perfil Social / Artes de Pesca' urlNovo='artespesca/novo'/>

      {/* Lista */}
      <div className="px-8 w-full mx-auto">
        {/* Header da lista */}
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

        {/* Itens da lista */}
        {artesPesca.map((artePesca: ArtePescaData, index: number) => (
          <div className="flex flex-row h-20 items-center border-t border-gray-300" key={index}>
            <div className="flex-1">
              <h1>{artePesca.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{artePesca.nome}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`http://localhost:8000/artespesca/${artePesca.id}`}
              urlEdit={`http://localhost:3000/artespesca/${artePesca.id}/editar`}
              itemName={artePesca.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
