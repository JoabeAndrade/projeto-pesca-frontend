import AssociacaoForm from "@/components/AssociacaoForm";
import HeaderTitle from "@/components/HeaderTitle";

export default async function Page() {
  return (
    <div>
      <HeaderTitle title="Inserir Associação" urlNovo=""/>
      <AssociacaoForm />
    </div>
  );
}
