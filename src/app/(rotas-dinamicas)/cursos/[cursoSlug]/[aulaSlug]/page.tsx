import Button from "@/components/ui/Button";
import { fetchAulas } from "@/services/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageParams = {
  params: Promise<{ cursoSlug: string; aulaSlug: string }>;
};

async function getDetalhesAula(cursoSlug: string, aulaSlug: string) {
  const curso = await fetchAulas(cursoSlug);
  const aula = curso?.aulas.find((item) => item.slug === aulaSlug);

  if (!curso || !aula) return null;

  return { curso, aula };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { cursoSlug, aulaSlug } = await params;
  const resultado = await getDetalhesAula(cursoSlug, aulaSlug);

  return {
    title: resultado?.aula.nome ?? "Aula",
    description: resultado?.aula.descricao ?? "",
  };
}

export default async function AulaPage({ params }: PageParams) {
  const { cursoSlug, aulaSlug } = await params;
  const resultado = await getDetalhesAula(cursoSlug, aulaSlug);

  if (!resultado) {
    notFound();
  }

  return (
    <main className="p-2.5">
      <Button route={`/cursos/${cursoSlug}`} name={"Voltar"} />
      <div>
        <h1>{resultado.aula.nome}</h1>
        <p>{resultado.aula.descricao}</p>
        <p>Duração: {resultado.aula.tempo} minutos</p>
      </div>
    </main>
  );
}
