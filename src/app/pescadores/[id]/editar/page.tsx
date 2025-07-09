"use server";

import getPescador from "@/actions/server/get-pescador";
import PageContainer from "@/components/containers/PageContainer";
import PescadorForm from "@/components/forms/PescadorForm";
import PageTitle from "@/components/PageTitle";
import TelefoneCard from "@/components/TelefonesCard";
import ReturnButton from "@/components/ReturnButton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const pescador = await getPescador(id);

  return (
    <PageContainer>
      <PageTitle title="Editar pescador" />
      <PescadorForm pescador={pescador} />
      <ReturnButton url="/pescadores" />
      <TelefoneCard
        pescadorId={Number(id)}
        telefones={pescador.telefones}
      />
    </PageContainer>
  );
}
