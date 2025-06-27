import { getMunicipios } from "@/app/actions";
import ComunidadeForm from "@/components/ComunidadeForm";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page() {
  const municipios = await getMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Inserir comunidade" />
      <ComunidadeForm municipios={municipios}/>
      <Link href="/comunidades">VOLTAR</Link>
    </PageContainer>
  );
}
