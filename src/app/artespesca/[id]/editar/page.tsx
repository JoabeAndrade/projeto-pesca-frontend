import ArtePescaForm from "@/components/forms/ArtePescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import getArtePesca from "@/actions/artepesca/get-arte-pesca";
import { MoveLeft } from "lucide-react";
import Button from "@/components/Button";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artePesca = await getArtePesca(id);

  return (
    <PageContainer>
      <PageTitle title="Editar Árte de Pesca" />
      <ArtePescaForm artePesca={artePesca} />
      <Link href="/artespesca">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
