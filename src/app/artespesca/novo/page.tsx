import ArtePescaForm from "@/components/ArtePescaForm";
import HeaderTitle from "@/components/HeaderTitle";

export default async function Page() {
  return (
    <div>
      <HeaderTitle title="Inserir Árte de Pesca" urlNovo=""/>
      <ArtePescaForm />
    </div>
  );
}
