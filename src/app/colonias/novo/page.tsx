import PageTitle from "@/components/PageTitle";
import ColoniaForm from "@/components/forms/ColoniaForm";
import { getAllComunidades } from "@/actions/server/get-all-comunidades";
import Link from "next/link";
import PageContainer from "@/components/containers/PageContainer";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export default async function Page() {
  const comunidades = getAllComunidades();

  return (
    <PageContainer>
      <PageTitle title="Inserir Colônia" />
      <ColoniaForm comunidades={comunidades} />
      <Link href="/colonias">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
