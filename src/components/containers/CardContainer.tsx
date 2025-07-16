"use client";

import { ReactNode } from "react";

interface CardFormProps {
  children: ReactNode;
}

export default function CardContainer({ children }: CardFormProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-6 my-10">{children}</div>
  );
}
