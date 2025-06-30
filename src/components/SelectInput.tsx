import { useState } from "react";

type SelectInputProps = {
  label: string;
  id: string;
  placeholder: string;
  required: boolean;
  options: {
    value: string;
    text: string;
  }[]
};

export default function SelectInput({ label, id, placeholder, required, options }: SelectInputProps) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
      >
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        required={required}
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
