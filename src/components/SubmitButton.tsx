"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={pending? "bg-red-600" : ""}>SALVAR</button>
  );
}
