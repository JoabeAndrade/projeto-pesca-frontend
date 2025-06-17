"use client";

import { Pencil, Trash } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type PropsListItemButtonSet = {
  urlDelete: string;
  urlEdit: string;
  itemName: string;
};

export default function ListItemButtonSet(props: PropsListItemButtonSet) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
  
    async function handleDelete() {
      try {
        const res = await fetch(props.urlDelete, {method: "DELETE"});
  
        if (res.ok) {
          toast.success("Deletado com sucesso!");
          setShowModal(false);
          router.refresh();
        } else {
          toast.error("Erro ao deletar.");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Erro de conexão com o servidor.");
      }
    }

  return (
    <>
      <div className="w-24 flex flex-row items-center justify-center">
        <Button icon={Pencil} className="rounded-full bg-[#6d4c41] mx-2" />
        <Button
          icon={Trash}
          className="rounded-full bg-[#e53935] mx-2"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
            <p className="mb-6">
              Deseja realmente excluir <strong>{props.itemName}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
