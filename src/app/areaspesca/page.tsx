import { AreaPescaData } from "@/types/pescadores/area-pesca";

export default async function Page() {
  const data = await fetch('http://localhost:8000/areaspesca');
  const associacoes = await data.json();

  return (
    <div>
      <h1>Areas de Pesca</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {associacoes.map((areaPesca: AreaPescaData, index: number) => (
            <tr key={index}>
              <td>{areaPesca.id}</td>
              <td>{areaPesca.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
