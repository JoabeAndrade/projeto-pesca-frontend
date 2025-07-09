import { createTelefone } from "@/actions/server/create-telefone";

export default function TelefoneForm({ pescadorId }: {pescadorId: number}) {
  return (
    <form action={createTelefone}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input type="hidden" name="pescador_id" value={pescadorId} />
        <div>
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            name="numero"
            id="numero"
            className="border-b w-full focus:outline-none py-1"
          />
        </div>
      </div>
      <button
        className="bg-[#6B4A3F] text-white px-4 py-2 rounded shadow hover:bg-[#5a3e36] transition"
      >
        SALVAR
      </button>
    </form>
  );
}
