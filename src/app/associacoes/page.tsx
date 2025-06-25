import HeaderTitle from "@/components/HeaderTitle";
import ListItemButtonSet from "@/components/ListItemButtonSet";
import { AssociacaoData } from "@/types/pescadores/associacao";

export default async function Page() {
  const data = await fetch('http://localhost:8000/associacoes');
  const associacoes = await data.json();

  return (
    <div>
      <HeaderTitle title='Perfil Social / Associações' urlNovo='associacoes/novo' />
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

        {associacoes.map((associacao: AssociacaoData, index: number) => (
          <div className="flex flex-row h-20 items-center border-t border-gray-300" key={index}>
            <div className="flex-1">
              <h1>{associacao.id}</h1>
            </div>
            <div className="flex-1">
              <h1>{associacao.nome}</h1>
            </div>
            <ListItemButtonSet
              urlDelete={`http://localhost:8000/associacoes/${associacao.id}`}
              urlEdit={`http://localhost:3000/associacoes/${associacao.id}/editar`}
              itemName={associacao.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
