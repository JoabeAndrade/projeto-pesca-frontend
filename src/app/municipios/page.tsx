import { MunicipioData } from "@/types/pescadores/municipio";

export default async function Page() {
  const data = await fetch('http://localhost:8000/municipios');
  const municipios = await data.json();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>UF</th>
          </tr>
        </thead>
        <tbody>
          {municipios.map((municipio: MunicipioData, index: number) => (
            <tr key={index}>
              <td>{municipio.id}</td>
              <td>{municipio.nome}</td>
              <td>{municipio.uf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
