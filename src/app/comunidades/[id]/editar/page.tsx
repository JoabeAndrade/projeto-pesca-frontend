"use server";

import { getAllMunicipios } from "@/actions/server/get-all-municipios";
import getComunidade from "@/actions/server/get-comunidade";
import PageContainer from "@/components/containers/PageContainer";
import ComunidadeForm from "@/components/forms/ComunidadeForm";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ id: string}>} ) {
  const { id } = await params;
  const comunidade = await getComunidade(id);
  const municipios = getAllMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Editar Comunidade" />
      <ComunidadeForm
        comunidade={comunidade}
        municipios={municipios}
      />
      <Link href="/comunidades">VOLTAR</Link>
    </PageContainer>
  );
}
