'use client';

import { deleteCookie } from '@/app/actions';
import { useRouter } from 'next/navigation';

type LogoutButtonProp = {
  data: string;
};

export default function LogoutButton({ data }: LogoutButtonProp) {
  const router = useRouter();
  const handleLogout = async () => {
    await deleteCookie(data);
    router.push('/');
    router.refresh();
  };

  return <button onClick={handleLogout}>Sair</button>;
}
