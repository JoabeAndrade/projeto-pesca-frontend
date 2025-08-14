import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { AssociacaoData } from "@/types/pescadores/associacao";
import { getAllAssociacoes } from "@/actions/associacao/get-all-associacoes";

export const dynamic = "force-dynamic";

export default async function AssociacoesPage() {
  const associacoes = await getAllAssociacoes();

  if (!associacoes) {
    return <p>Não foi possível carregar os dados das associações.</p>;
  }

  return (
    <div>
      <HeaderTitle
        title="Perfil Social / Associações"
        urlNovo="/associacoes/novo"
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

        {associacoes.map((associacao: AssociacaoData) => (
          <div
            className="flex flex-row h-20 items-center border-t border-gray-300"
            key={associacao.id}
          >
            <div className="flex-1">
              <h1>{associacao.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{associacao.nome}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`/associacoes/${associacao.id}/excluir`}
              urlEdit={`/associacoes/${associacao.id}/editar`}
              itemName={associacao.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
