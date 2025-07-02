type BooleanInputProps = {
  title: string,
  name: string,
};

export default function BooleanInput({ title, name }: BooleanInputProps) {
  return (
    <div>
      <h3>{title}</h3>
      <input type="radio" name={name} id={`${name}_true`} value="true" />
      <label htmlFor={`${name}_true`}>Sim</label><br />
      <input type="radio" name={name} id={`${name}_false`} value="false" />
      <label htmlFor={`${name}_false`}>Não</label><br />
    </div>
  );
}
