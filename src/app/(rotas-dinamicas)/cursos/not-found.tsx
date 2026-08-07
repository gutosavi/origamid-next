export default function notFound() {
  // por ser o único not-found.tsx da rota, essa página é que vai ser renderizada quando ouver alguma exceção
  return (
    <section>
      <h1>Página não encontrada</h1>
      <p>
        Se você quer isolar a exceção e renderizar um erro específico para cada
        componente, a saída é fazer um arquivo [not-found.tsx] na pasta atual
      </p>
      <p>
        E se você quer manter a estrutura da página e isolar apenas o componente
        com a exceção, envolva o componente em um Suspense
      </p>
    </section>
  );
}

/*  
O arquivo not-found.tsx pode ser usado se quisermos personalizar a interface do usuário.
Tanto o arquivo not-found quanto à função, trabalham juntos;
A função notFound() seria o gatilho, enquanto o not-found.tsx é a inferface.

Essa interação entre os dois funciona da seguinte forma:
- notFound() interrompe a execução do componente. Dispara um erro interno do Next.js.
- not-found.tsx renderiza a tela de erro 404 customizada mais próxima no nível da rota.

Para isso,existe regras de precedência:
- invocar notFound() força a exibição do not-found.tsx mais próximo;
- se não houver not-found.tsx na pasta atual, o Next.js busca nas pastas acima;
- se nenhum arquivo customizado for achado, a tela padrão do sistema aparece.

A função notFound pode ser invocada em componentes de servidor, funções de servidor e manipuladores de rotas.

Se você quer isolar uma exceção dentro de um componente, mantendo a estrutura da página visível, você pode fazer a verificação dentro de um componente envolvido em <Suspense>;

*/
