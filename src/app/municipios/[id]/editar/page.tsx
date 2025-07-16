import { getMunicipio } from "@/actions/server/get-municipio";
import MunicipioForm from "@/components/forms/MunicipioForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const municipio = await getMunicipio(id);

  return (
    <PageContainer>
      <PageTitle title="Editar município" />
      <MunicipioForm municipio={municipio} />
      <Link href="/municipios">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
