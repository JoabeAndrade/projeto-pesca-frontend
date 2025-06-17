import Link from "next/link";
import Button from "./Button";
import { Plus } from "lucide-react";

type HeaderTitleProps = {
  title: string;
  urlNovo: string;
};

export default function HeaderTitle(props: HeaderTitleProps) {
  return (
    <div className="flex flex-row w-full h-14 justify-between items-center px-8 my-4">
      <h1 className="text-black text-4xl">{props.title}</h1>
      <Link href={props.urlNovo}>
        <Button icon={Plus}>NOVO</Button>
      </Link>
    </div>
  );
}
