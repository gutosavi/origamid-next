'use server';

import { cookies } from 'next/headers';

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
      return { message: 'Dados incorretos', status: 401 };
    }

    const data = await response.json();

    (await cookies()).set('token', data.token, {
      secure: true,
      httpOnly: true,
    });

    return { autorizado: true };
  } catch (error) {
    console.error(error);
    return { message: 'Erro no servidor', status: 500 };
  }
}
