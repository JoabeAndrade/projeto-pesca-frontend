const ufs = [
  {sigla: 'AL', nome: 'Alagoas'},
  {sigla: 'BA', nome: 'Bahia'},
  {sigla: 'PE', nome: 'Pernambuco'},
  {sigla: 'SE', nome: 'Sergipe'},
];

export default function Page() {
  return (
    <div>
      <h1>Novo Município</h1>
      <form action="">
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <select name="" id="">
          <option value=""></option>
          {ufs.map((uf, index) => (
            <option key={index} value={uf.sigla}>{uf.sigla} - {uf.nome}</option>
          ))}
        </select>
        <button type="submit">Inserir</button>
      </form>
    </div>
  );
}
