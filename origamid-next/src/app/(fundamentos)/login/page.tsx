import Login from '@/components/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Tela de Login',
};

export default function LoginPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">
        Tela de Login
      </h1>
      <Login />
    </main>
  );
}
