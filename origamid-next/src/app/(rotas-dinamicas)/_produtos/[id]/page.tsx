import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produto',
  description: 'Página do produto',
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

type PageParams = {
  params: {
    id: string;
  };
};

export default async function ProdutoPage({ params }: PageParams) {
  const { id } = await params;
  console.log('Teste:', id);

  const response = await fetch(`https://api.origamid.online/produtos/${id}`);
  const data: Produto = await response.json();

  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Teste</h1>
      <div className="px-2.5">
        <h2>{id}</h2>
        <h3>{data.nome}</h3>
        <p>{data.preco}</p>
        <p>{data.descricao}</p>
      </div>
    </main>
  );
}
