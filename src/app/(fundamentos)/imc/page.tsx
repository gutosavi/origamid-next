import Imc from '@/components/imc';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IMC',
  description: 'Índice de Massa Corporal',
};

export default function ImcPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">
        Índice de Massa Corporal
      </h1>
      <Imc />
    </main>
  );
}
