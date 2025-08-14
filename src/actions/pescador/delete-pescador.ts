"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";

export async function deletePescador(
  id: number
): Promise<{ success: boolean; message: string }> {
  try {
    await fetchData({
      url: `/pescadores/${id}/`,
      method: "DELETE",
    });

    revalidateTag("pescadores");

    return { success: true, message: "Pescador excluído com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar pescador:", error);
    return { success: false, message: "Falha ao excluir o pescador." };
  }
}
