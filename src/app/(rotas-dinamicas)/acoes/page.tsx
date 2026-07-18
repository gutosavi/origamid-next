import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ações',
  description: 'Página dos ações',
};

type AcoesProps = {
  nome: string;
  descricao: string;
  atualizada: string;
  preco: number;
  preco_anterior: number;
};

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua');

  // {
  //   next: {
  //     revalidate: 5,
  //   }, // essa propriedade permite indicar a cada quantos segundos esses dados serão revalidados
  // });
  // o que vai acontecer é que servidor faz o fetch da nova informação, guarda isso em cache, gera um novo html, e quando acessarmos de novo a página, o novo dado estará visível. Isso faz com que a ação de revalidar o dado, não interfira na performance da aplicação.
  // Nesse caso em específico de ações, não é a melhor abordagem, pois queremos ter os dados renderizados instantâneamente, mas para 95% dos casos, essa será a abordagem utilizada.

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
