import { Plus } from "@geist-ui/icons";

export default function Button() {
  return (
    <button className="bg-[#6d4c41] py-1 px-3 text-white rounded flex flex-row items-center gap-2">
      <div>NOVO</div>
      <Plus color="#ffffff" size={20} />
    </button>
  );
}
