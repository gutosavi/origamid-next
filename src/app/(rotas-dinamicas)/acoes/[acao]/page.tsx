import { Metadata } from "next";
import { AcoesProps } from "../page";

export const metadata: Metadata = {
  title: "Ação",
  description: "Página da Ação",
};

export default async function AcaoPage({
  params,
}: {
  params: Promise<{ acao: string }>;
}) {
  const { acao } = await params;

  const response = await fetch(`https://api.origamid.online/acoes/${acao}`);

  const data: AcoesProps = await response.json();

  return (
    <main className="p-2.5">
      <h1>{data.nome}</h1>
      <p>Preço atual: {data.preco}</p>
      <p>Preço anterior: {data.preco_anterior}</p>
      <p>{data.atualizada}</p>
    </main>
  );
}
