import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { MunicipioData } from "@/types/pescadores/municipio";

export default async function Page() {
  const data = await fetch('http://localhost:8000/municipios');
  const municipios = await data.json();

  return (
    <div>
      {/* O Header tem que ficar no layout */}
      <Header />
      <HeaderTitle title='Perfil Social / Município' urlNovo='municipios/novo'/>

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
          <div className="flex-1">
            <h1 className="font-bold">UF</h1>
          </div>
          <div className="w-24 flex items-center justify-center">
            <h1 className="font-bold">Ações</h1>
          </div>
        </div>

        {/* Itens da lista */}
        {municipios.map((municipio: MunicipioData, index: number) => (
          <div className="flex flex-row h-20 items-center border-t border-gray-300" key={index}>
            <div className="flex-1">
              <h1>{municipio.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{municipio.nome}</h1>
            </div>
            <div className="flex-1">
              <h1>{municipio.uf}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`http://localhost:8000/municipios/${municipio.id}`}
              urlEdit={`http://localhost:3000/municipios/${municipio.id}/editar`}
              itemName={municipio.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
