import ClientFetch from '@/components/client-fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Essa é a página sobre.',
};

export default function SobrePage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Sobre</h1>
      <ClientFetch />
    </main>
  );
}
