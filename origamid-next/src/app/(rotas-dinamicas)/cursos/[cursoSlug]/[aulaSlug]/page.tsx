import { CursoProp, fetchAulas } from '@/services/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Aula',
  description: 'Página da aula',
};

type PageParams = {
  params: Promise<{ cursoSlug: string; aulaSlug: string }>;
};

export default async function AulaPage({ params }: PageParams) {
  const { cursoSlug, aulaSlug } = await params;
  const data: CursoProp | null = await fetchAulas(cursoSlug);
  const detalhesAulas = data?.aulas.find((aula) => aula.slug === aulaSlug);

  if (!data) {
    notFound();
  }

  if (!detalhesAulas) {
    notFound();
  }

  return (
    <main className="p-2.5">
      <Button route={`/cursos/${cursoSlug}`} name={'Voltar'} />
      <div>
        <h1>{detalhesAulas.nome}</h1>
        <p>{detalhesAulas.descricao}</p>
        <p>Duração: {detalhesAulas.tempo} minutos</p>
      </div>
    </main>
  );
}
