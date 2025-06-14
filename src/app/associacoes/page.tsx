import { AssociacaoData } from "@/types/pescadores/associacao";

export default async function Page() {
  const data = await fetch('http://localhost:8000/associacoes');
  const associacoes = await data.json();

  return (
    <div>
      <h1>Associações</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {associacoes.map((associacao: AssociacaoData, index: number) => (
            <tr key={index}>
              <td>{associacao.id}</td>
              <td>{associacao.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
