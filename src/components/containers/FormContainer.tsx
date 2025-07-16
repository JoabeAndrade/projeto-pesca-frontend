"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

type FormContainerProps = {
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
};

export default function FormContainer({
  action,
  children,
}: FormContainerProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        await action(formData);
        toast.success("Salvo com sucesso!");
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error("Erro ao salvar.");
      }
    });
  }

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-8 rounded w-full space-y-8 mb-4"
      >
        {children}
        {isPending && <p className="text-sm text-gray-500">Salvando...</p>}
      </form>
    </div>
  );
}
