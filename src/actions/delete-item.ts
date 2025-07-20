"use server";

type DeleteItemProps = {
  url: string,
};

export async function deleteItem({ url }: DeleteItemProps) {
  const response = await fetch(`http://localhost:8000/${url}`, { method: "DELETE" });
  const responseJson = JSON.stringify(response);
  return responseJson;
}
