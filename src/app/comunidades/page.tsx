import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { ComunidadeData } from "@/types/pescadores/comunidade";

export default async function Page() {
  const data = await fetch('http://localhost:8000/comunidades');
  const comunidades = await data.json();

  return (
    <div>
      <HeaderTitle title='Perfil Social / Comunidades' urlNovo='comunidades/novo' />
      <div className="px-8 w-full mx-auto">
        <div className="flex flex-row h-20 items-center border-t border-b border-gray-300">
          <div className="flex-1">
            <h1 className="font-bold">Id</h1>
          </div>
          <div className="flex-1">
            <h1 className="font-bold">Nome</h1>
          </div>
          <div className="flex-1">
            <h1 className="font-bold">Município</h1>
          </div>
          <div className="w-24 flex items-center justify-center">
            <h1 className="font-bold">Ações</h1>
          </div>
        </div>

        {comunidades.map((comunidade: ComunidadeData, index: number) => (
          <div className="flex flex-row h-20 items-center border-t border-gray-300" key={index}>
            <div className="flex-1">
              <h1>{comunidade.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{comunidade.nome}</h1>
            </div>
            <div className="flex-1">
              <h1>{comunidade.municipio.nome}/{comunidade.municipio.uf}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`http://localhost:8000/comunidades/${comunidade.id}`}
              urlEdit={`http://localhost:3000/comunidades/${comunidade.id}/editar`}
              itemName={comunidade.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}