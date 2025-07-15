type BooleanInputProps = {
  title: string,
  name: string,
  value?: boolean,
};

export default function BooleanInput({ title, name, value }: BooleanInputProps) {
  const options = [
    { label: "Sim", value: "true" },
    { label: "Não", value: "false" },
  ];

  function booleanToString(value: boolean | undefined): string {
    if (value === true) return "true";
    if (value === false) return "false";
    else return "";
  };

  return (
    <div>
      <h3>{title}</h3>
      {options.map((opt, index) => (
        <div key={index}>
          <input
            type="radio"
            name={name}
            id={`${name}_${opt.value}`}
            value={opt.value}
            defaultChecked={booleanToString(value) === opt.value}
          />
          <label htmlFor={`${name}_${opt.value}`}>{opt.label}</label><br />
        </div>
      ))}
      <div>
        <input
          type="radio"
          name={name}
          id={`${name}_vazio`}
          value=""
        />
        <label htmlFor={`${name}_vazio`}>Não informado</label><br />
      </div>
    </div>
  );
}
