import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { MunicipioData } from "@/types/pescadores/municipio";
import { getAllMunicipios } from "@/actions/municipio/get-all-municipios";

export const dynamic = "force-dynamic";

export default async function MunicipiosPage() {
  const municipios = await getAllMunicipios();

  if (!municipios) {
    return <p>Não foi possível carregar os dados dos municípios.</p>;
  }

  return (
    <div>
      <HeaderTitle
        title="Perfil Social / Município"
        urlNovo="/municipios/novo"
      />

      <div className="px-8 w-full mx-auto">
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

        {municipios.map((municipio: MunicipioData) => (
          <div
            className="flex flex-row h-20 items-center border-t border-gray-300"
            key={municipio.id}
          >
            <div className="flex-1">
              <h1>{municipio.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{municipio.nome}</h1>
            </div>
            <div className="flex-1">
              <h1>{municipio.uf}</h1>
            </div>
            <div className="w-24 flex items-center justify-center">
              <ListItemButtonSet
                urlDelete={`/municipios/${municipio.id}/excluir`}
                urlEdit={`/municipios/${municipio.id}/editar`}
                itemName={municipio.nome}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
