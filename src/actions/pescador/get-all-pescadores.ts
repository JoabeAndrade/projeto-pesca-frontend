"use server";

import { PescadorData } from "@/types/pescadores/pescador";
import fetchData from "@/lib/fetch-data";

export async function getAllPescadores(): Promise<PescadorData[]> {
  const pescadores = await fetchData<PescadorData[]>({
    url: "/pescadores/",
    method: "GET",
    next: {
      tags: ["pescadores"],
    },
  });
  return pescadores;
}
