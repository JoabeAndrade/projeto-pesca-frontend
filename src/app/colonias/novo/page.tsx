import HeaderTitle from "@/components/HeaderTitle";
import ColoniaForm from "@/components/ColoniaForm";
import { getComunidades } from "@/app/actions";

export default async function Page() {
  const comunidades = await getComunidades();

  return (
    <div>
      <HeaderTitle title="Inserir Colônia" urlNovo="" />
      <ColoniaForm
        comunidades={comunidades}
      />
    </div>
  );
}
