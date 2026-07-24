'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/actions/login';

// Exemplo de como usar a função login (server action) em um componente React (client component);
export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const router = useRouter();

  const handleClick = async () => {
    try {
      setError('');
      const loginResult = await login({ username, password });

      if (!loginResult.success)
        setError('O usuário ou a senha estão incorretos');

      if (loginResult.success) router.push('/dashboard');
    } catch (error) {
      console.error('Erro', error);
    }
  };

  return (
    <div className="flex flex-col gap-2 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-32 p-2.5 gap-1"
      >
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-32 border border-gray-100 p-1"
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-32 border border-gray-100 p-1"
        ></input>
        {error && (
          <p className="text-red-300 text-sm font-extralight leading-2.5">
            {error}
          </p>
        )}
        <button
          className="text-lg font-bold w-32 h-10 my-2.5 rounded-lg bg-gray-300 text-gray-900"
          onClick={handleClick}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
