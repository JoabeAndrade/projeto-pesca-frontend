import AssociacaoForm from "@/components/AssociacaoForm";
import PageTitle from "@/components/PageTitle";
import PageContainer from "@/components/PageContainer";
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
