import PageTitle from "@/components/PageTitle";
import ColoniaForm from "@/components/ColoniaForm";
import { getComunidades } from "@/app/actions";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export default async function Page() {
  const comunidades = await getComunidades();

  return (
    <PageContainer>
      <PageTitle title="Inserir Colônia" />
      <ColoniaForm comunidades={comunidades} />
      <Link href="/colonias">VOLTAR</Link>
    </PageContainer>
  );
}
