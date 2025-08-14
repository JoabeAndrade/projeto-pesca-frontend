"use server";

import { revalidateTag } from "next/cache";
import { extractDataFromPescadorForm } from "@/utils/extract-data-pescador-form";
import fetchData from "@/lib/fetch-data";

type ErrorState = Record<string, string[]>;

type State = {
  errors?: ErrorState;
  message: string;
};

export async function editPescador(
  prevState: State,
  formData: FormData
): Promise<State> {
  const id = formData.get("id");
  if (!id) return { message: "ID não encontrado", errors: {} };

  const data = extractDataFromPescadorForm(formData);

  try {
    await fetchData({
      url: `/pescadores/${id}/`,
      method: "PUT",
      body: JSON.stringify(data),
    });

    revalidateTag("pescadores");
    revalidateTag(`pescador-${id}`);
    return { message: "Sucesso! O pescador foi atualizado.", errors: {} };
  } catch (error: unknown) {
    if (error instanceof Error) {
      try {
        const errorDetails: ErrorState = JSON.parse(error.message);
        return {
          message: "Erro de validação ao atualizar o pescador.",
          errors: errorDetails,
        };
      } catch (e) {
        return { message: error.message, errors: {} };
      }
    }
    return { message: "Ocorreu um erro desconhecido.", errors: {} };
  }
}
