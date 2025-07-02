import ArtePescaForm from "@/components/forms/ArtePescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Árte de Pesca"/>
      <ArtePescaForm />
      <Link href="/artespesca">VOLTAR</Link>
    </PageContainer>
  );
}
