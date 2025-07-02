"use server";

import getPescador from "@/actions/server/get-pescador";
import PageContainer from "@/components/containers/PageContainer";
import PescadorForm from "@/components/forms/PescadorForm";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const pescador = await getPescador(id);

  return (
    <PageContainer>
      <PageTitle title="Editar pescador"/>
      <PescadorForm pescador={pescador} />
      <Link href="/pescadores">VOLTAR</Link>
    </PageContainer>
  );
}
