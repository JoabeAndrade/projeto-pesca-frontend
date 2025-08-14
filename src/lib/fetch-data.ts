// Define uma interface para os parâmetros, tornando o uso mais seguro
interface FetchDataParams extends RequestInit {
  url: string;
}

/**
 * Um helper para fazer requisições à API do backend.
 * Ele automaticamente adiciona a URL base da API e trata a resposta.
 * @param url O caminho do endpoint da API (ex: "/areaspesca/")
 * @param options Opções adicionais do fetch (method, headers, body, etc.)
 * @returns Os dados da resposta em formato JSON.
 */
export default async function fetchData<T>({
  url,
  ...options
}: FetchDataParams): Promise<T> {
  // Pega a URL base do ambiente. Se não estiver definida, usa a URL de desenvolvimento local como padrão.
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  // Monta a URL completa
  const completeUrl = `${apiUrl}${url}`;

  try {
    const response = await fetch(completeUrl, {
      // Define um header padrão, que pode ser sobrescrito pelas options
      headers: {
        "Content-Type": "application/json",
      },
      ...options, // Adiciona ou sobrescreve com as opções passadas (method, body, etc)
    });

    if (!response.ok) {
      // Se a resposta não for OK (ex: erro 404, 500), lança um erro.
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    // Se a resposta não tiver conteúdo (ex: DELETE), retorna null
    if (response.status === 204) {
      return null as T;
    }

    return response.json();
  } catch (error) {
    console.error("Falha no fetchData:", error);
    // Lança o erro novamente para que a função que chamou possa tratá-lo
    throw error;
  }
}
