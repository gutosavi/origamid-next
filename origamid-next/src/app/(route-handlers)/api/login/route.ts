import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return Response.json({ message: 'Dados incorretos' }, { status: 401 });
    }

    const data = await response.json();

    (await cookies()).set('token', data.token, {
      secure: true,
      httpOnly: true,
    });

    return Response.json({ autorizado: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: 'Erro interno de servidor' },
      { status: 500 },
    );
  }
}
