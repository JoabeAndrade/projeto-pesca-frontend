import { getAllMunicipios } from "@/actions/server/get-all-municipios";
import ComunidadeForm from "@/components/forms/ComunidadeForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default async function Page() {
  const municipios = await getAllMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Inserir comunidade" />
      <ComunidadeForm municipios={municipios}/>
      <Link href="/comunidades">VOLTAR</Link>
    </PageContainer>
  );
}
