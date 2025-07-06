type Option = {
  value: string,
  label: string,
};

type NewSelectInputProps = {
  label: string,
  name: string,
  value?: string,
  defaultValue?: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  options: Option[],
  required?: boolean,
};

export function NewSelectInput({
  label,
  name,
  value,
  defaultValue,
  placeholder="",
  onChange=(() => {}),
  options,
  required=false,
}: NewSelectInputProps) {
  return <div className="flex flex-col">
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      id={name}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="p-2 border-2 border-[#6d4c41] rounded"
    >
      <option value="">{placeholder}</option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>;
}
