import { getAllMunicipios } from "@/actions/municipio/get-all-municipios";
import ComunidadeForm from "@/components/forms/ComunidadeForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Page() {
  const municipios = getAllMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Inserir comunidade" />
      <ComunidadeForm municipios={municipios} />
      <Link href="/comunidades">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
