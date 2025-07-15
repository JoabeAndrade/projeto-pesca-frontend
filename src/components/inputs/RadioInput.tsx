type RadioInputProps = {
  title: string;
  name: string;
  selectedValue?: string;
  options: {
    label: string;
    value: string;
  }[],
};

export default function RadioInput({ title, name, selectedValue, options }: RadioInputProps) {
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
            defaultChecked={selectedValue === opt.value}
          />
          <label htmlFor={`${name}_${opt.value}`}>{opt.label}</label><br />
        </div>
      ))}
      <div>
        <input
          type="radio"
          name={name}
          id={`${name}_nao_informado`}
          value=""
        />
        <label htmlFor={`${name}_nao_informado`}>Não informado</label><br />
      </div>
    </div>
  );
}
