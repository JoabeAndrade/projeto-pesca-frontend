import PageTitle from "@/components/PageTitle";
import ColoniaForm from "@/components/forms/ColoniaForm";
import { getAllComunidades } from "@/actions/server/get-all-comunidades";
import Link from "next/link";
import PageContainer from "@/components/containers/PageContainer";

export default async function Page() {
  const comunidades = await getAllComunidades();

  return (
    <PageContainer>
      <PageTitle title="Inserir Colônia" />
      <ColoniaForm comunidades={comunidades} />
      <Link href="/colonias">VOLTAR</Link>
    </PageContainer>
  );
}
