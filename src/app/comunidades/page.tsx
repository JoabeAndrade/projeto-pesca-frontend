import { ComunidadeData } from "@/types/pescadores/comunidade";

export default async function Page() {
  const data = await fetch('http://localhost:8000/comunidades');
  const comunidades = await data.json();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Municipio</th>
          </tr>
        </thead>
        <tbody>
          {comunidades.map((comunidade: ComunidadeData, index: number) => (
            <tr key={index}>
              <td>{comunidade.id}</td>
              <td>{comunidade.nome}</td>
              <td>{comunidade.municipio.nome} - {comunidade.municipio.uf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
