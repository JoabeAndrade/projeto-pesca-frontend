import Link from "next/link";
import Button from "./Button";
import { Plus } from "lucide-react";

type HeaderTitleProps = {
  title: string;
  urlNovo: string;
};

export default function HeaderTitle({ title, urlNovo }: HeaderTitleProps) {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-14 justify-between items-start md:items-center px-4 sm:px-8 my-4 gap-3 md:gap-0">
      <h1 className="text-black text-3xl sm:text-4xl font-semibold">{title}</h1>
      <Link href={urlNovo}>
        <Button icon={Plus} className="w-full md:w-auto">
          NOVO
        </Button>
      </Link>
    </div>
  );
}
