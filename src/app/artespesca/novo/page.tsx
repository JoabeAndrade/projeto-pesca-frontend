import ArtePescaForm from "@/components/forms/ArtePescaForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Árte de Pesca" />
      <ArtePescaForm />
      <Link href="/artespesca">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
