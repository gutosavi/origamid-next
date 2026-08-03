import ServerFetch from '@/components/server-fetch';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Essa é a página de Produtos.',
};

export const dynamic = 'force-dynamic';

export default function ProdutosPage() {
  return (
    <main className="w-full h-full flex flex-col p-2.5">
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Produtos</h1>
      <Button route="produtos/adicionar" name="Add Produto" />
      <ServerFetch />
    </main>
  );
}
