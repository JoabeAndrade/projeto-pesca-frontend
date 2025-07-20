"use server";

import getPescador from "@/actions/pescador/get-pescador";
import PageContainer from "@/components/containers/PageContainer";
import PescadorForm from "@/components/forms/PescadorForm";
import PageTitle from "@/components/PageTitle";
import TelefoneCard from "@/components/cards/TelefonesCard";
import DependentesCard from "@/components/cards/DependentesCard";
import ArtesPescaCard from "@/components/cards/ArtesPescaCard";
import { getAllArtesPesca } from "@/actions/artepesca/get-all-artes-pesca";
import { getAllAreasPesca } from "@/actions/areapesca/get-all-areas-pesca";
import AreasPescaCard from "@/components/cards/AreasPescaCard";
import { getAllAssociacoes } from "@/actions/associacao/get-all-associacoes";
import AssociacoesCard from "@/components/cards/AssociacoesCard";
import Link from "next/link";
import Button from "@/components/Button";
import { MoveLeft } from "lucide-react";
import { getAllMunicipios } from "@/actions/municipio/get-all-municipios";
import EnderecoGenericForm from "@/components/forms/EnderecoGenericForm";

const tiposDependente = [
  { value: "conjuge_companheira", label: "Cônjuge ou companheiro(a)" },
  { value: "filhos_enteados", label: "Filhos(as) ou enteados(as)" },
  { value: "irmaos_netos_bisnetos", label: "Irmãos(ãs), netos(as) ou bisnetos(as)" },
  { value: "pais_avos_bisavos", label: "Pais, avós ou bisavós" },
  { value: "sogro", label: "Sogro(a)" },
  { value: "incapazes", label: "Incapaz(es)" },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const pescador = await getPescador(id);
  const artesPesca = getAllArtesPesca();
  const areasPesca = getAllAreasPesca();
  const associacoes = getAllAssociacoes();
  const municipios = getAllMunicipios();

  return (
    <PageContainer>
      <PageTitle title="Editar pescador" />
      <PescadorForm pescador={pescador} />
      <EnderecoGenericForm
        endereco={pescador.endereco}
        municipios={municipios}
        parentData={{type: "pescador", id: pescador.id}}
      />
      <ArtesPescaCard
        idPescador={pescador.id}
        artesDoPescador={pescador.artes_pesca}
        todasArtesPesca={artesPesca}
      />
      <AreasPescaCard
        idPescador={pescador.id}
        areasPescaDoPescador={pescador.areas_pesca}
        todasAreasPesca={areasPesca}
      />
      <AssociacoesCard
        idPescador={pescador.id}
        associacoesDoPescador={pescador.associacoes}
        todasAssociacoes={associacoes}
      />
      <TelefoneCard
        pescadorId={Number(id)}
        telefones={pescador.telefones}
      />
      <DependentesCard
        idPescador={pescador.id}
        dependentes={pescador.dependentes}
        tiposDependente={tiposDependente}
      />
      <Link href="/pescadores">
        <Button icon={MoveLeft} iconPosition="left">
          Voltar
        </Button>
      </Link>
    </PageContainer>
  );
}
