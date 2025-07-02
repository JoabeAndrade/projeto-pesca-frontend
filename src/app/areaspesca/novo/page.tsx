import AreaPescaForm from "@/components/forms/AreaPescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Área de Pesca"/>
      <AreaPescaForm />
      <Link href="/areaspesca">VOLTAR</Link>
    </PageContainer>
  );
}
