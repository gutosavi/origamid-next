export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ServerFetch({ espera }: { espera?: number }) {
  let produtos: Produto[] = [];
  if (espera) await new Promise((resolve) => setTimeout(resolve, espera));
  // Promessa adicionada apenas para testar o loading no componente

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      cache: "no-store",
    });

    if (!response.ok)
      throw new Error("Ocorreu algum problema ao carregar os produtos.");
    produtos = (await response.json()) as Produto[];
  } catch (error) {
    if (error instanceof Error) {
      return <p>Erro: {error.message}</p>;
    }
  }

  return (
    <ul className="px-2.5">
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome}: R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
}
