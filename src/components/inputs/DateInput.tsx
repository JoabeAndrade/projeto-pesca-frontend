type DateInputProps = {
  label: string;
  id: string;
  required?: boolean;
};

export default function DateInput({ label, id, required=false }: DateInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type="date"
        id={id}
        name={id}
        required={required}
        className="p-2 border-2 border-[#6d4c41] rounded"
      />
    </div>
  );
}
