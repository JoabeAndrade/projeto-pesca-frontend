"use server";

import getPescador from "@/actions/server/get-pescador";
import PageContainer from "@/components/containers/PageContainer";
import PescadorForm from "@/components/forms/PescadorForm";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import RendaFormClient from "@/components/forms/RendaFormClient"; // ✅ IMPORTADO

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pescador = await getPescador(id);

  return (
    <PageContainer>
      <PageTitle title="Editar pescador" />
      <PescadorForm pescador={pescador} />
      <Link href="/pescadores" className="text-blue-500 underline mb-4 block">
        VOLTAR
      </Link>

      {/* ✅ Componente cliente com formulário de renda */}
      <RendaFormClient pescadorId={id} />
    </PageContainer>
  );
}
