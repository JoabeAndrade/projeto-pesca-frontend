"use server";

import { revalidateTag } from "next/cache";
import fetchData from "@/lib/fetch-data";
import { extractDataFromPescadorForm } from "@/utils/extract-data-pescador-form";

type State = {
  errors?: any;
  message: string;
};

export async function editPescador(
  prevState: State,
  formData: FormData
): Promise<State> {
  const id = formData.get("id");
  if (!id) return { message: "ID do pescador não fornecido.", errors: {} };

  const data = extractDataFromPescadorForm(formData);

  try {
    await fetchData({
      url: `/pescadores/${id}/`,
      method: "PUT",
      body: JSON.stringify(data),
    });

    revalidateTag("pescadores");
    revalidateTag(`pescador-${id}`);
    return { message: "Pescador atualizado com sucesso.", errors: {} };
  } catch (error: any) {
    return {
      message: "Erro ao atualizar o pescador.",
      errors: JSON.parse(error.message),
    };
  }
}
