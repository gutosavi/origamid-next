import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Esse é o dashboard do usuário quando logado.',
};

export default function DashboardPage() {
  return (
    <main>
      <h1 className="text-2xl font-medium font-[Roboto] p-2.5">Dashboard</h1>
    </main>
  );
}
