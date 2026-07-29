'use client';

export default function ProdutosError({ error }: { error: Error }) {
  return (
    <main>
      <h1>Ocorreu um erro.</h1>
      <p>{error.message}</p>
    </main>
  );
}

// Essa é uma das formas de lidar com erros no Next.js. Aqui estamos criando um componente de erro que recebe o objeto de erro como uma prop e exibe uma mensagem de erro para o usuário. Isso é útil para capturar erros que ocorrem durante a renderização do componente ou durante a execução de funções assíncronas, como chamadas de API. Porém, ao decidirmos lidar com erros dessa forma, qualquer erro que ocorrer dentro de qualquer componente filho será capturado e a tela inteira será substituída pelo componente de erro. Isso pode não ser o comportamento desejado, especialmente se você quiser que apenas uma parte da página seja substituída por uma mensagem de erro, enquanto o restante da página continua a ser exibida normalmente.
// Uma melhor abordagem, é lidar com o erro diretamente dentro do componente, por exemplo, no ServerFetch, o erro está sendo capturado lá, ele não será capturado por este componente de erro, pois o ServerFetch está lidando com seus próprios erros internamente.
// Portanto, é importante decidir onde você quer lidar com os erros: dentro do componente que faz a chamada à API ou em um componente de erro separado como esse.
