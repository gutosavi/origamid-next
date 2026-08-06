import Button from "@/components/ui/Button";
import { fetchAulas } from "@/services/api";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageParams = {
  params: Promise<{ cursoSlug: string }>;
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { cursoSlug } = await params;
  const data = await fetchAulas(cursoSlug);

  return {
    title: `${data?.nome}`,
  };
}

export default async function CursoPage({ params }: PageParams) {
  const { cursoSlug } = await params;
  const data = await fetchAulas(cursoSlug);

  if (!data) {
    notFound();
  }

  return (
    <main className="p-2.5">
      <Button route="/cursos" name="Voltar" />
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
