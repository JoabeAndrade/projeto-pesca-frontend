"use server";

import { revalidateTag } from "next/cache";
import { extractDataFromPescadorForm } from "@/utils/extract-data-pescador-form";
import fetchData from "@/lib/fetch-data";

type ErrorState = Record<string, string[]>;

type State = {
  errors?: ErrorState;
  message: string;
};

export async function createPescador(
  prevState: State,
  formData: FormData
): Promise<State> {
  const data = extractDataFromPescadorForm(formData);

  try {
    await fetchData({
      url: "/pescadores/",
      method: "POST",
      body: JSON.stringify(data),
    });

    revalidateTag("pescadores");
    return { message: "Sucesso! O pescador foi criado.", errors: {} };
  } catch (error: unknown) {
    if (error instanceof Error) {
      try {
        const errorDetails: ErrorState = JSON.parse(error.message);
        return {
          message: "Erro de validação ao criar o pescador.",
          errors: errorDetails,
        };
      } catch {
        return { message: error.message, errors: {} };
      }
    }
    return { message: "Ocorreu um erro desconhecido.", errors: {} };
  }
}
