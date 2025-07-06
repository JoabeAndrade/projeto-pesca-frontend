type SelectInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  options: {
    value: string;
    text: string;
  }[],
  initialValue?: string | number;
  handleChange?: (value: string) => void;
};

export default function SelectInput(
  { label, id, placeholder="", required=false, options, initialValue, handleChange }: SelectInputProps
) {
  let value, defaultValue;

  if (typeof handleChange === 'undefined') {
    defaultValue = initialValue;
    handleChange = () => {};
  } else {
    value = initialValue;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        value={value}
        defaultValue={defaultValue}
        required={required}
        onChange={(e) => handleChange(e.target.value)}
        className="p-2 border-2 border-[#6d4c41] rounded"
      >
        <option value="">{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.text}</option>
        ))}
      </select>
    </div>
  );
}
