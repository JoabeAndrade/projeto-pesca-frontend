import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import PescadorForm from "@/components/forms/PescadorForm";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir Pescador" />
      <PescadorForm />
      <Link href="/pescadores">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
