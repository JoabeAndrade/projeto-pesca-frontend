type DecimalInputProps = {
  label: string,
  id: string,
  defaultValue?: string,
  required?: boolean,
};

export default function DecimalInput({ label, id, defaultValue, required=false }: DecimalInputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        name={id}
        id={id}
        defaultValue={defaultValue}
        step="0.01"
        min="0"
        required={required}
      />
    </div>
  );
}
