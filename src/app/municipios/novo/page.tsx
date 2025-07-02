import MunicipioForm from "@/components/forms/MunicipioForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir município" />
      <MunicipioForm />
      <Link href="/municipios">VOLTAR</Link>
    </PageContainer>
  );
}
