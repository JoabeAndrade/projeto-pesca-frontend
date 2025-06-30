type RadioInputProps = {
  title: string;
  name: string;
  options: {
    label: string;
    id: string;
  }[],
};

export default function RadioInput({ title, name, options }: RadioInputProps) {
  return (
    <div>
      <h3>{title}</h3>
      {options.map(({ label, id }, index) => (
        <div key={index}>
          <input type="radio" name={name} id={id} value={id} />
          <label htmlFor={id}>{label}</label><br />
        </div>
      ))}
    </div>
  );
}
