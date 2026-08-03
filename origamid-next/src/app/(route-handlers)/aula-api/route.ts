import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { NextRequest } from 'next/server';

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
      throw new Error(`Erro: ${response.status}`);
    }

    const data = await response.json();

    // Next.js possui a função cookies para acessar e criar HTTP cookies
    (await cookies()).set('token-aula', data.token, {
      httpOnly: true, // sem acesso no cliente
      secure: true, // maior segurança para envios HTTPS
    });

    return Response.json(data);
  } catch (error) {
    console.error('Erro', error);
    notFound();
  }
}

export async function POST(request: NextRequest) {
  const params = request.nextUrl.searchParams.get('busca');
  const body = await request.json();
  return Response.json(body);
}

/*
A função cookies tem outros métodos que podemos ver na documentação Next.js, tais como:

getAll() - retorna uma lista de todos os cookies
has('name') - retorna um boolean se o parâmetro informado existe;
delete(name) - deletar o cookie name;
toString() - retorna uma representação em string do cookie


*/
