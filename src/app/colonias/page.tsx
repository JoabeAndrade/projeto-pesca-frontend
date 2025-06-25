import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { ColoniaData } from "@/types/pescadores/colonia";

export default async function Page() {
  const data = await fetch('http://localhost:8000/colonias');
  const colonias = await data.json();

  return (
    <div>
      <HeaderTitle title='Perfil Social / Colônia' urlNovo='colonias/novo' />
      <div className="px-8 w-full mx-auto">
        <div className="flex flex-row h-20 items-center border-t border-b border-gray-300">
          <div className="flex-1">
            <h1 className="font-bold">Id</h1>
          </div>
          <div className="flex-1">
            <h1 className="font-bold">Código</h1>
          </div>
          <div className="flex-1">
            <h1 className="font-bold">Comunidade</h1>
          </div>
          <div className="w-24 flex items-center justify-center">
            <h1 className="font-bold">Ações</h1>
          </div>
        </div>

        {colonias.map((colonia: ColoniaData, index: number) => {
          let comunidade;
          if (typeof colonia.comunidade !== 'undefined')
            comunidade = colonia.comunidade.nome;

          return (
            <div className="flex flex-row h-20 items-center border-t border-gray-300" key={index}>
              <div className="flex-1">
                <h1>{colonia.id}</h1>
              </div>
              <div className="flex-1">
                <h1>{colonia.codigo}</h1>
              </div>
              <div className="flex-1">
                <h1>{comunidade}</h1>
              </div>
              <ListItemButtonSet
                urlDelete={`http://localhost:8000/colonias/${colonia.id}`}
                urlEdit={`http://localhost:3000/colonias/${colonia.id}/editar`}
                itemName={colonia.codigo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
