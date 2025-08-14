import AreaPescaForm from "@/components/forms/AreaPescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Área de Pesca" />
      <AreaPescaForm />
      <Link href="/areaspesca">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
