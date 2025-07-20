"use server";

import { getAllMunicipios } from "@/actions/municipio/get-all-municipios";
import { getAssociacao } from "@/actions/associacao/get-associacao";
import Button from "@/components/Button";
import PageContainer from "@/components/containers/PageContainer";
import AssociacaoForm from "@/components/forms/AssociacaoForm";
import EnderecoGenericForm from "@/components/forms/EnderecoGenericForm";
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
  const municipios = getAllMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Editar Associação" />
      <AssociacaoForm associacao={associacao} />
      <EnderecoGenericForm
        endereco={associacao.endereco}
        municipios={municipios}
        parentData={{ type: "associacao", id: associacao.id }}
      />
      <Link href="/associacoes">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
