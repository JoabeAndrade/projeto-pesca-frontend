import { getMunicipios } from "@/app/actions";
import ComunidadeForm from "@/components/ComunidadeForm";
import PageTitle from "@/components/PageTitle";

export default async function Page() {
  const municipios = await getMunicipios();

  return (
    <div>
      <PageTitle title="Inserir comunidade" />
      <ComunidadeForm municipios={municipios}/>
    </div>
  );
}
