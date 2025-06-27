import AreaPescaForm from "@/components/AreaPescaForm";
import HeaderTitle from "@/components/HeaderTitle";

export default async function Page() {
  return (
    <div>
      <HeaderTitle title="Inserir Área de Pesca" urlNovo=""/>
      <AreaPescaForm />
    </div>
  );
}
