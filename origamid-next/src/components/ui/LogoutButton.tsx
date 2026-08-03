'use client';

import { deleteCookie } from '@/actions/actions';
import { useRouter } from 'next/navigation';

type LogoutButtonProp = {
  data: string | undefined;
};

export default function LogoutButton({ data }: LogoutButtonProp) {
  const router = useRouter();
  const handleLogout = async () => {
    if (data) {
      await deleteCookie(data);
    }
    router.push('/');
    router.refresh();
  };

  return <button onClick={handleLogout}>Sair</button>;
}
