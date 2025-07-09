"use server";

import { revalidatePath } from "next/cache";

type DeleteItemProps = {
  url: string,
  id: number,
  revalidationPath: string,
};

export async function deleteItem({ url, id, revalidationPath }: DeleteItemProps): Promise<Response> {
  const response = await fetch(`http://localhost:8000/${url}/${id}`, { method: "DELETE" });
  if (response.ok)
    revalidatePath(revalidationPath);
  return response;
}
