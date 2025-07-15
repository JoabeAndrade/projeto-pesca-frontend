type DateInputProps = {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
};

export default function DateInput({ label, name, defaultValue, required=false }: DateInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        defaultValue={defaultValue}
        required={required}
        className="p-2 border-2 border-[#6d4c41] rounded"
      />
    </div>
  );
}
