'use client';
import React from 'react';

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch('https://api.origamid.online/produtos');
      const json: Produto[] = await response.json();

      setData(json);
    };
    fetchData();
  }, []);

  return (
    <ul className="px-2.5">
      {data.map((produto) => (
        <li key={produto.id}>
          {produto.nome}: R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
}

// Aqui podemos ver que o componente ClientFetch é um componente de cliente, pois ele utiliza o hook useEffect para buscar dados de uma API e atualizar o estado do componente com os dados recebidos. O 'use client' no topo do arquivo indica que este componente deve ser renderizado no lado do cliente.
// Enquanto isso, o componente ServerFetch (que não está presente neste snippet) seria um componente de servidor, que poderia buscar dados diretamente no servidor e renderizar o HTML com os dados já incluídos, sem a necessidade de usar useEffect ou useState.
