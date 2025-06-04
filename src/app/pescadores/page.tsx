import Button from "@/components/Button";
import Header from "@/components/Header";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-row w-full h-14 justify-between items-center px-8 my-4">
        <h1 className="text-black text-4xl">Perfil Social / Pescador</h1>
        <Button icon={Plus}>NOVO</Button>
      </div>
    </div>
  );
}
