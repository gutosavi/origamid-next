type Produto = {
  id: number;
  nome: string;
};

export default async function ServerFetch() {
  const response = await fetch('https://api.origamid.online/produtos');
  const data: Produto[] = await response.json();

  return (
    <ul className="px-2.5">
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
