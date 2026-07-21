import { cookies } from 'next/headers';

export async function GET() {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'dog',
        password: 'dog',
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    (await cookies()).set('token', data.token, {
      secure: true,
      httpOnly: true,
    });

    return Response.json(data);
  } catch (error) {
    console.error('Erro: ', error);
  }
}
