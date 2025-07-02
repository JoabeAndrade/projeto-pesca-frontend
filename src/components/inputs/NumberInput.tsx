type DecimalInputProps = {
  label: string,
  id: string,
  required?: boolean,
};

export default function DecimalInput({ label, id, required=false }: DecimalInputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="number" name={id} id={id} step="0.01" min="0" required={required}/>
    </div>
  );
}
