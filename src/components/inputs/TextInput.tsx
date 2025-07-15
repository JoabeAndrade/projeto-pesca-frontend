type TextInputProps = {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

export default function TextInput(
  { label, name, value="", placeholder="", required=false }: TextInputProps
) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        required={required}
        className="p-2 border-2 border-[#6d4c41] rounded"
      />
    </div>
  );
}
