import { getAssociacao } from "@/actions/server/get-associacao";
import Button from "@/components/Button";
import PageContainer from "@/components/containers/PageContainer";
import AssociacaoForm from "@/components/forms/AssociacaoForm";
import PageTitle from "@/components/PageTitle";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const associacao = await getAssociacao(id);

  return (
    <PageContainer>
      <PageTitle title="Editar Associação" />
      <AssociacaoForm associacao={associacao} />
      <Link href="/associacoes">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
