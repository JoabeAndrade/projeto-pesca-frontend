import Link from "next/link";

export default function ReturnButton({ url }: { url: string }) {
  return (
    <Link href={url} className="text-blue-500 underline mb-4 block">
      VOLTAR
    </Link>
  );
}
