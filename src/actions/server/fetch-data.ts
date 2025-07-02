type FetchDataProps = {
  url: string,
  method?: string,
  body?: string,
}

export default async function fetchData<T>({ url, method="GET", body }: FetchDataProps): Promise<T> {
  const response = await fetch(`http://localhost:8000${url}`, {
    method,
    headers: { "Content-type": "application/json" },
    body,
  });

  const responseJson = await response.json();
  return responseJson;
}
