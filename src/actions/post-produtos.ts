'use server';

import { Produto } from '@/components/client-fetch';
import { updateTagActions } from './revalidate-path';

type ProdutoInput = Omit<Produto, 'id'>;
// Aqui estamos omitindo o campo 'id' do tipo Produto, pois ao criar um novo produto, o 'id' será gerado automaticamente pelo backend e não é necessário fornecê-lo na requisição de criação.

export async function postProdutos(produto: ProdutoInput) {
  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
      next: {
        tags: ['produtos'],
      },
    });

    if (!response.ok) {
      return { success: false, message: 'Dados incorretos', status: 401 };
    }

    await response.json();

    await updateTagActions('produtos');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Erro ao enviar os dados', status: 500 };
  }
}
