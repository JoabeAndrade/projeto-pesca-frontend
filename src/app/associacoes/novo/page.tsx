import AssociacaoForm from "@/components/forms/AssociacaoForm";
import PageTitle from "@/components/PageTitle";
import PageContainer from "@/components/containers/PageContainer";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Associação" />
      <AssociacaoForm />
      <Link href="/associacoes">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
