"use server";

import { revalidateTag } from "next/cache";
import { extractDataFromPescadorForm } from "@/utils/extract-data-pescador-form";
import fetchData from "@/lib/fetch-data";

type State = {
  errors?: any;
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

    return {
      errors: {},
      message: "Sucesso! O pescador foi criado.",
    };
  } catch (error: any) {
    return {
      errors: error.message,
      message: "Erro ao criar o pescador.",
    };
  }
}
