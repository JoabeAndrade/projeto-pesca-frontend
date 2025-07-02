import AreaPescaForm from "@/components/forms/AreaPescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import getAreaPesca from "@/actions/server/get-area-pesca";

export default async function Page({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  const areaPesca = await getAreaPesca(id);

  return (
    <PageContainer>
      <PageTitle title="Editar Área de Pesca"/>
      <AreaPescaForm areaPesca={areaPesca}/>
      <Link href="/areaspesca">VOLTAR</Link>
    </PageContainer>
  );
}
