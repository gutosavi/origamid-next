import Link from 'next/link';
import { cookies } from 'next/headers';
import LogoutButton from './ui/LogoutButton';

interface UserProfile {
  autorizado: boolean;
  usuario: string;
}

const Menu = async () => {
  const token = (await cookies()).get('token');
  let data: UserProfile | null = null;
  try {
    const response = await fetch('https://api.origamid.online/conta/perfil', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token?.value,
      },
    });

    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error('Erro', error);
  }

  return (
    <div className="w-full h-20 flex items-center p-2.5 bg-gray-900 sm:bg-gray-50">
      <ul className="flex flex-row gap-6 text-2xl font-bold font-[Roboto] text-gray-50 sm:text-gray-900 list-none leading-relaxed">
        <li>
          <Link href={'/'}>
            {/* prefetch já é um padrão, então só faz sentido colocar se quiser que seja false */}
            Home
          </Link>
        </li>
        <li>
          <Link href={'/sobre'}>Sobre</Link>
        </li>
        <li>
          {data?.autorizado ? (
            <Link href={'/dashboard'}>{data.usuario}</Link>
          ) : (
            <Link href={'/login'}>Login</Link>
          )}
        </li>
        {data?.autorizado && <LogoutButton data={token?.name} />}
      </ul>
    </div>
  );
};

export default Menu;
