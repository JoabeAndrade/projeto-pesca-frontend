import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { AreaPescaData } from "@/types/pescadores/area-pesca";

export default async function Page() {
  const data = await fetch('http://localhost:8000/areaspesca');
  const areasPesca = await data.json();

  return (
    <div>
      <Header />
      <HeaderTitle title='Perfil Social / Áreas de Pesca' urlNovo='areaspesca/novo' />
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

        {areasPesca.map((areaPesca: AreaPescaData, index: number) => (
          <div className="flex flex-row h-20 items-center border-t border-gray-300" key={index}>
            <div className="flex-1">
              <h1>{areaPesca.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{areaPesca.descricao}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`http://localhost:8000/areaspesca/${areaPesca.id}`}
              urlEdit={`http://localhost:3000/areaspesca/${areaPesca.id}/editar`}
              itemName={areaPesca.descricao}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
