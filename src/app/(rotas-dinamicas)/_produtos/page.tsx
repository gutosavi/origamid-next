import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produto',
  description: 'Página do produto',
};

export default function ProdutosPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Produto</h1>
    </main>
  );
}
