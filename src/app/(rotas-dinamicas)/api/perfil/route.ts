import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export async function GET() {
  const token = (await cookies()).get('token');
  try {
    const response = await fetch('https://api.origamid.online/conta/perfil', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token?.value,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Erro', error);
    notFound();
  }
}
