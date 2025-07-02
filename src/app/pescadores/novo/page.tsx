import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import PescadorForm from "@/components/forms/PescadorForm";
import Link from "next/link";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Pescador" />
      <PescadorForm />
      <Link href="/pescadores">VOLTAR</Link>
    </PageContainer>
  );
}
