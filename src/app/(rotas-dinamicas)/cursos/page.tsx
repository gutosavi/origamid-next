import Link from 'next/link';
import { fetchCursos, CursoProp } from '@/services/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Página dos cursos',
};

export default async function CursosPage() {
  const data: CursoProp[] | null = await fetchCursos();

  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Cursos</h1>
      <ul>
        {data &&
          data.map((curso) => (
            <div key={curso.id} className="p-2.5">
              <ul>
                <li className="text-xl font-bold">
                  <Link href={`cursos/${curso.slug}`}>{curso.descricao}</Link>
                </li>
                <li>Total aulas: {curso.total_aulas}</li>
                <li>Total horas: {curso.total_horas}</li>
              </ul>
            </div>
          ))}
      </ul>
    </main>
  );
}
