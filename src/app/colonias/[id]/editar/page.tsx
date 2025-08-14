import { getAllComunidades } from "@/actions/comunidade/get-all-comunidades";
import { getAllMunicipios } from "@/actions/municipio/get-all-municipios";
import getColonia from "@/actions/colonia/get-colonia";
import Button from "@/components/Button";
import PageContainer from "@/components/containers/PageContainer";
import ColoniaForm from "@/components/forms/ColoniaForm";
import EnderecoGenericForm from "@/components/forms/EnderecoGenericForm";
import PageTitle from "@/components/PageTitle";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const colonia = await getColonia(id);
  const comunidades = getAllComunidades();
  const municipios = getAllMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Editar Colônia" />
      <ColoniaForm colonia={colonia} comunidades={comunidades} />
      <EnderecoGenericForm
        endereco={colonia.endereco_sede}
        municipios={municipios}
        parentData={{ type: "colonia", id: colonia.id }}
      />
      <Link href="/colonias">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
