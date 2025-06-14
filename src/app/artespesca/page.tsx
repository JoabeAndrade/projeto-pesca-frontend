import { ArtePescaData } from "@/types/pescadores/arte-pesca";

export default async function Page() {
  const data = await fetch('http://localhost:8000/artespesca');
  const associacoes = await data.json();

  return (
    <div>
      <h1>Artes de Pesca</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {associacoes.map((artePesca: ArtePescaData, index: number) => (
            <tr key={index}>
              <td>{artePesca.id}</td>
              <td>{artePesca.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
