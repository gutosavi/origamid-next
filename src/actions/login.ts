'use server';

import { createCookie } from '@/actions/actions';

interface Login {
  username: string;
  password: string;
}

export async function login({ username, password }: Login) {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      return { success: false, message: 'Dados incorretos', status: 401 };
    }

    const data = await response.json();

    await createCookie('token', data.token);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Erro no servidor', status: 500 };
  }
}
