import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { ColoniaData } from "@/types/pescadores/colonia";
import { getAllColonias } from "@/actions/colonia/get-all-colonias";

export const dynamic = "force-dynamic";

export default async function ColoniasPage() {
  const colonias = await getAllColonias();

  if (!colonias) {
    return <p>Não foi possível carregar os dados das colônias.</p>;
  }

  return (
    <div>
      <HeaderTitle title="Perfil Social / Colônia" urlNovo="/colonias/novo" />

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

        {colonias.map((colonia: ColoniaData) => (
          <div
            className="flex flex-row h-20 items-center border-t border-gray-300"
            key={colonia.id}
          >
            <div className="flex-1">
              <h1>{colonia.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{colonia.codigo}</h1>
            </div>
            <div className="flex-1">
              <h1>{colonia.comunidade?.nome}</h1>
            </div>
            <div className="w-24 flex items-center justify-center">
              <ListItemButtonSet
                urlDelete={`/colonias/${colonia.id}/excluir`}
                urlEdit={`/colonias/${colonia.id}/editar`}
                itemName={colonia.codigo}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
