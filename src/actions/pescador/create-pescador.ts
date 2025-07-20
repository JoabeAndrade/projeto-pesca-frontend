"use server";

import { extractDataFromPescadorForm } from "@/utils/extract-data-pescador-form";

type State = {
  errors: string[];
  message: string;
};

export async function createPescador(prevState: State, formData: FormData): Promise<State> {
  const data = extractDataFromPescadorForm(formData)

  const response = await fetch('http://localhost:8000/pescadores/', {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseJson = await response.json();

  if (response.ok) {
    return {
      errors: [],
      message: "deu",
    };
  } else {
    return {
      errors: responseJson,
      message: "não deu",
    };
  }
}
