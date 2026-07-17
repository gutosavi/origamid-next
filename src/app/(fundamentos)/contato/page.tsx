import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Essa é a página de contato.',
};

export default function ContatoPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Contato</h1>
    </main>
  );
}
