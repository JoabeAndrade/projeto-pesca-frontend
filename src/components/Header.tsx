"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Página Inicial",
    "Relatórios",
    "Monitoramento",
    "Instituições",
    "Equipe",
    "Contato",
    "Sobre",
  ];

  return (
    <nav className="bg-[#6d4c41] w-full px-4 md:px-14 py-2">
      <div className="flex justify-between items-center h-14">
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex flex-row gap-4 items-center text-white">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-3 py-2 rounded-md hover:bg-[#5a3a2e] transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex flex-row items-center gap-4">
          <h1 className="text-[#d7ccc8]">Olá, André</h1>
          <button className="cursor-pointer px-3 py-2 rounded-md hover:bg-[#5a3a2e] transition-colors text-white">
            Sair
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-2 flex flex-col gap-2 text-white">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-3 py-2 rounded-md hover:bg-[#5a3a2e] transition-colors"
            >
              {item}
            </li>
          ))}
          <hr className="border-[#5a3a2e]" />
          <div className="flex flex-col gap-2">
            <h1 className="text-[#d7ccc8] px-3">Olá, André</h1>
            <button className="cursor-pointer px-3 py-2 rounded-md hover:bg-[#5a3a2e] transition-colors text-white text-left">
              Sair
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}
