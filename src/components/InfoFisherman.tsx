"use client";

import { ReactNode } from "react";

interface CardFormProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
  onSave: () => void;
  table?: ReactNode;
}

export default function InfoSisherman({
  icon,
  title,
  subtitle,
  children,
  onSave,
  table,
}: CardFormProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <div className="flex items-center mb-4">
        <div className="text-xl mr-2">{icon}</div>
        <h2 className="text-lg font-semibold">{title}:</h2>
      </div>

      {subtitle && <p className="mb-4 text-sm text-gray-700">{subtitle}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {children}
      </div>

      <button
        onClick={onSave}
        className="bg-[#6B4A3F] text-white px-4 py-2 rounded shadow hover:bg-[#5a3e36] transition"
      >
        SALVAR
      </button>

      {table && <div className="mt-6">{table}</div>}
    </div>
  );
}
