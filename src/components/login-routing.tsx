'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

// Exemplo de componente de login que utiliza route-handler para lidar com autenticação do usuário. O componente mantém o estado do nome de usuário, senha e mensagens de erro, e envia uma solicitação POST para a rota de login quando o botão de envio é clicado. Se a autenticação for bem-sucedida, o usuário é redirecionado para o dashboard; caso contrário, uma mensagem de erro é exibida.
export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const router = useRouter();

  const handleClick = async () => {
    try {
      setError('');
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        setError('O usuário ou a senha estão incorretos');
        throw new Error(`Erro ao efetuar login: ${response.status}`);
      }

      const result = await response.json();

      router.push('/dashboard');
      router.refresh();
      return result;
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
