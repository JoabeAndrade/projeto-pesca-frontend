import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { ComunidadeData } from "@/types/pescadores/comunidade";
import { getAllComunidades } from "@/actions/comunidade/get-all-comunidades";

export const dynamic = "force-dynamic";

export default async function ComunidadesPage() {
  const comunidades = await getAllComunidades();

  if (!comunidades) {
    return <p>Não foi possível carregar os dados das comunidades.</p>;
  }

  return (
    <div>
      <HeaderTitle
        title="Perfil Social / Comunidades"
        urlNovo="/comunidades/novo"
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
            <h1 className="font-bold">Município</h1>
          </div>
          <div className="w-24 flex items-center justify-center">
            <h1 className="font-bold">Ações</h1>
          </div>
        </div>

        {comunidades.map((comunidade: ComunidadeData) => (
          <div
            className="flex flex-row h-20 items-center border-t border-gray-300"
            key={comunidade.id}
          >
            <div className="flex-1">
              <h1>{comunidade.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{comunidade.nome}</h1>
            </div>
            <div className="flex-1">
              <h1>
                {comunidade.municipio?.nome}/{comunidade.municipio?.uf}
              </h1>
            </div>
            <div className="w-24 flex items-center justify-center">
              <ListItemButtonSet
                urlDelete={`/comunidades/${comunidade.id}/excluir`}
                urlEdit={`/comunidades/${comunidade.id}/editar`}
                itemName={comunidade.nome}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
