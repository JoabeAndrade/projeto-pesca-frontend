"use server";

import getPescador from "@/actions/server/get-pescador";
import PageContainer from "@/components/containers/PageContainer";
import PescadorForm from "@/components/forms/PescadorForm";
import PageTitle from "@/components/PageTitle";
import TelefoneCard from "@/components/TelefonesCard";
import ReturnButton from "@/components/ReturnButton";
import DependentesCard from "@/components/DependentesCard";

const tiposDependente = [
    { value: 'conjuge_companheira', label: 'Cônjuge ou companheiro(a)' },
    { value: 'filhos_enteados', label: 'Filhos(as) ou enteados(as)' },
    { value: 'irmaos_netos_bisnetos', label: 'Irmãos(ãs), netos(as) ou bisnetos(as)' },
    { value: 'pais_avos_bisavos', label: 'Pais, avós ou bisavós' },
    { value: 'sogro', label: 'Sogro(a)' },
    { value: 'incapazes', label: 'Incapaz(es)' },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const pescador = await getPescador(id);

  return (
    <PageContainer>
      <PageTitle title="Editar pescador" />
      <PescadorForm pescador={pescador} />
      <ReturnButton url="/pescadores" />
      <TelefoneCard
        pescadorId={Number(id)}
        telefones={pescador.telefones}
      />
      <DependentesCard
        idPescador={pescador.id}
        dependentes={pescador.dependentes}
        tiposDependente={tiposDependente}
      />
    </PageContainer>
  );
}
