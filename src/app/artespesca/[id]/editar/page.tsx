import ArtePescaForm from "@/components/forms/ArtePescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import getArtePesca from "@/actions/server/get-arte-pesca";

export default async function Page({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  const artePesca = await getArtePesca(id);

  return (
    <PageContainer>
      <PageTitle title="Editar Árte de Pesca"/>
      <ArtePescaForm artePesca={artePesca} />
      <Link href="/artespesca">VOLTAR</Link>
    </PageContainer>
  );
}
