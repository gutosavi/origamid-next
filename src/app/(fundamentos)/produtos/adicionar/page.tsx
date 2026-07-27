import AdicionarProdutos from '@/components/add-produtos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adicionar',
  description: 'Essa é a página de adicionar produtos.',
};

export default function AdicionarPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">
        Adicionar Produto
      </h1>
      <AdicionarProdutos />
    </main>
  );
}
