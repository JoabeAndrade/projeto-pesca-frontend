"use client";

import { deleteItem } from "@/actions/server/delete-item";
import { TelefoneData } from "@/types/pescadores/telefone";

type TelefoneListItemProps = {
  index: number,
  telefone: TelefoneData,
};

export default function TelefoneListItem({ index, telefone }: TelefoneListItemProps) {
  const handleDelete = () => {
    deleteItem({ url: `/telefones/${telefone.id}` })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        console.log("não conseguiu conectar com o servidor.");
      });
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{telefone.numero}</td>
      <td>
        <div>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      </td>
    </tr>
  );
}
