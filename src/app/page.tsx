import Link from "next/link";

export default function HomePage() {
  const navLinks = [
    { href: "/areaspesca", label: "Áreas de Pesca" },
    { href: "/artespesca", label: "Artes de Pesca" },
    { href: "/associacoes", label: "Associações" },
    { href: "/colonias", label: "Colônias" },
    { href: "/comunidades", label: "Comunidades" },
    { href: "/municipios", label: "Municípios" },
    { href: "/pescadores", label: "Pescadores" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Bem-vindo ao Sistema de Gestão de Pesca
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Selecione uma opção abaixo para começar
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-center"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
