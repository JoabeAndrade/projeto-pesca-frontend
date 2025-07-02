import AssociacaoForm from "@/components/forms/AssociacaoForm";
import PageTitle from "@/components/PageTitle";
import PageContainer from "@/components/containers/PageContainer";
import Link from "next/link";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Associação"/>
      <AssociacaoForm />
      <Link href="/associacoes">VOLTAR</Link>
    </PageContainer>
  );
}
