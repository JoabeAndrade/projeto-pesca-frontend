import MunicipioForm from "@/components/MunicipioForm";
import PageContainer from "@/components/PageContainer";
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
