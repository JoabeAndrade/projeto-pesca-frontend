"use client";

import { Phone } from "lucide-react";
import { TelefoneData } from "@/types/pescadores/telefone";
import CardContainer from "./containers/CardContainer";
import CardHeader from "./CardHeader";
import TelefoneForm from "./forms/TelefoneForm";
import TelefonesList from "./TelefonesList";

type TelefonesCardProps = {
  pescadorId: number,
  telefones: TelefoneData[],
};

export default function TelefonesCard({
  pescadorId,
  telefones,
}: TelefonesCardProps) {
  return (
    <CardContainer>
      <CardHeader title="Telefones" icon={<Phone />} />
      <TelefoneForm pescadorId={pescadorId}/>
      <TelefonesList telefones={telefones}/>
    </CardContainer>
  );
}
