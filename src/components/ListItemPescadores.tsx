/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Pencil, Trash } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import Link from "next/link";

type PropsListItemPescadores = {
  id: number;
  nome: string;
  apelido: string;
  falecido: string;
  pontoEmbarque: string;
  projetoCadastrado: string;
};

export default function ListItemPescadores({
  id,
  nome,
  apelido,
  falecido,
  pontoEmbarque,
  projetoCadastrado,
}: PropsListItemPescadores) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  async function handleDelete() {
    try {
      const res = await fetch(`http://localhost:8000/pescadores/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Pescador deletado com sucesso!");
        setShowModal(false);
        router.refresh();
      } else {
        toast.error("Erro ao deletar pescador.");
      }
    } catch (error) {
      toast.error("Erro de conexão com o servidor.");
    }
  }

  return (
    <>
      <div className="flex flex-row h-20 items-center border-t border-gray-300">
        <div className="flex-1">
          <h1>{id}</h1>
        </div>
        <div className="flex-1">
          <h1>{nome}</h1>
        </div>
        <div className="flex-1">
          <h1>{apelido}</h1>
        </div>
        <div className="flex-1">
          <h1>{falecido}</h1>
        </div>
        <div className="flex-1">
          <h1>{pontoEmbarque}</h1>
        </div>
        <div className="flex-1">
          <h1>{projetoCadastrado}</h1>
        </div>
        <div className="w-24 flex flex-row items-center justify-center">
          <Link href={`/pescadores/${id}/editar`}><Button icon={Pencil} className="rounded-full bg-[#6d4c41] mx-2" /></Link>
          <Button
            icon={Trash}
            className="rounded-full bg-[#e53935] mx-2"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
            <p className="mb-6">
              Deseja realmente excluir o pescador <strong>{nome}</strong>?
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
