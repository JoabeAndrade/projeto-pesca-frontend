import { getAllComunidades } from "@/actions/server/get-all-comunidades";
import getColonia from "@/actions/server/get-colonia";
import Button from "@/components/Button";
import PageContainer from "@/components/containers/PageContainer";
import ColoniaForm from "@/components/forms/ColoniaForm";
import PageTitle from "@/components/PageTitle";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const colonia = await getColonia(id);
  const comunidades = getAllComunidades();

  return (
    <PageContainer>
      <PageTitle title="Editar Colônia" />
      <ColoniaForm colonia={colonia} comunidades={comunidades} />
      <Link href="/colonias">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
