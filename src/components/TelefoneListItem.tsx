"use client";

import { deleteItem } from "@/actions/server/delete-item";
import { TelefoneData } from "@/types/pescadores/telefone";
import { usePathname } from "next/navigation";

type TelefoneListItemProps = {
  index: number,
  telefone: TelefoneData,
};

export default function TelefoneListItem({ index, telefone }: TelefoneListItemProps) {
  const currentPath = usePathname();

  const handleDelete = () => {
    const response = deleteItem({
      url: 'telefones',
      id: telefone.id,
      revalidationPath: currentPath,
    });
    response.then((response) => {
      if (response.ok)
        console.log("deu");
      else
        console.log("não deu");
    }).catch(() => {
      console.log("não alcançou o servidor");
    })
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
