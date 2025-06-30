"use server";

import { ComunidadeData } from "@/types/pescadores/comunidade";
import { MunicipioData } from "@/types/pescadores/municipio";
import { ColoniaData } from "@/types/pescadores/colonia";

export async function getColonias(): Promise<ColoniaData[]> {
  const colonias = await fetch("http://localhost:8000/colonias");
  const coloniasJson = await colonias.json();
  return coloniasJson;
}

export async function getComunidades(): Promise<ComunidadeData[]> {
  const comunidades = await fetch("http://localhost:8000/comunidades");
  const jsonComunidades = await comunidades.json();
  return jsonComunidades;
}

export async function getMunicipios(): Promise<MunicipioData[]> {
  const municipios = await fetch("http://localhost:8000/municipios");
  const jsonMunicipios = await municipios.json();
  return jsonMunicipios;
}

export async function createAreaPesca(formData: FormData): Promise<void> {
  const data = {
    descricao: formData.get("descricao"),
  };

  await fetch('http://localhost:8000/areaspesca/', {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
}

export async function createArtePesca(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
  };

  fetchData(data, 'artespesca');
}

export async function createAssociacao(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
  }

  await fetchData(data, "associacoes");
}

export async function createColonia(formData: FormData): Promise<void> {
  const data = {
    codigo: formData.get("codigo"),
    comunidade_id: formData.get("comunidade"),
  };

  await fetchData(data, 'colonias');
}

export async function createComunidade(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
    municipio_id: formData.get("municipio"),
  }

  await fetchData(data, "comunidades");
}

export async function createMunicipio(formData: FormData): Promise<void> {
  const data = {
    nome: formData.get("nome"),
    uf: formData.get("uf"),
  }

  await fetchData(data, "municipios");
}

async function fetchData(data: object, url: string): Promise<void> {
  fetch(`http://localhost:8000/${url}/`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
}

