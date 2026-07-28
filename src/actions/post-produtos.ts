'use server';

import { Produto } from '@/components/client-fetch';
import { updateTagActions } from './revalidate-path';

type ProdutoInput = Omit<Produto, 'id'>;

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
  }
}
