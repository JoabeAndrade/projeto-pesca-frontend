import MunicipioForm from "@/components/forms/MunicipioForm";
import PageContainer from "@/components/containers/PageContainer";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Button from "@/components/Button";

export default function Page() {
  return (
    <PageContainer>
      <PageTitle title="Inserir município" />
      <MunicipioForm />
      <Link href="/municipios">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
