import { ColoniaData } from "@/types/pescadores/colonia";

export default async function Page() {
  const data = await fetch('http://localhost:8000/colonias');
  const colonias = await data.json();

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
          {colonias.map((colonia: ColoniaData, index: number) => (
            <tr key={index}>
              <td>{colonia.id}</td>
              <td>{colonia.codigo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
