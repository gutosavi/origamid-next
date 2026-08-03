import { fetchAulas } from '@/services/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curso',
  description: 'Página do curso',
};

type PageParams = {
  params: Promise<{ cursoSlug: string }>;
};

export default async function CursoPage({ params }: PageParams) {
  const { cursoSlug } = await params;
  const data = await fetchAulas(cursoSlug);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <div className="px-2.5">
        <h1 className="font-bold text-2xl">{data.nome}</h1>
        <p className="text-lg">{data.descricao}</p>
        <div className="py-2.5">
          <p className="font-bold">Aulas:</p>
          <ul>
            {data.aulas.map((item) => (
              <li key={item.id}>
                <Link href={`${data.slug}/${item.slug}`}>{item.nome}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
