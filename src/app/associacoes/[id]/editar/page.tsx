import { getAssociacao } from "@/actions/server/get-associacao";
import PageContainer from "@/components/containers/PageContainer";
import AssociacaoForm from "@/components/forms/AssociacaoForm";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ id: string}>} ) {
  const { id } = await params;
  const associacao = await getAssociacao(id);

  return (
    <PageContainer>
      <PageTitle title="Editar Associação" />
      <AssociacaoForm associacao={associacao} />
      <Link href="/associacoes">VOLTAR</Link>
    </PageContainer>
  );
}
