export default function ListHeaderPescadores() {
  return (
    <div className="flex flex-row h-20 items-center border-t border-b border-gray-300">
      <div className="flex-1">
        <h1 className="font-bold">id</h1>
      </div>
      <div className="flex-1">
        <h1 className="font-bold">Nome</h1>
      </div>
      <div className="flex-1">
        <h1 className="font-bold">Apelido</h1>
      </div>
      <div className="flex-1">
        <h1 className="font-bold">Falecido</h1>
      </div>
      <div className="flex-1">
        <h1 className="font-bold">Pontos de Desembarque</h1>
      </div>
      <div className="flex-1">
        <h1 className="font-bold">Projeto Cadastrado</h1>
      </div>
      <div className="w-24 flex items-center justify-center">
        <h1 className="font-bold">Ações</h1>
      </div>
    </div>
  );
}
