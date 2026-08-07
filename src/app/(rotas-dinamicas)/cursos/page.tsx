import { CursoProp, fetchCursos } from "@/services/api";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Página dos cursos",
};

export async function generateStaticParams() {
  const cursos = await fetchCursos();
  return cursos?.map((curso) => ({
    curso: curso.slug,
  }));
}

export default async function CursosPage() {
  const data: CursoProp[] | null = await fetchCursos();

  // if (!data) notFound();

  return (
    <main>
      <h1 className="text-2xl font-medium font-mono p-2.5">Cursos</h1>
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
