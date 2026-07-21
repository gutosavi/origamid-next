'use client';
import React from 'react';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClick = () => {
    console.log('Hello world');
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
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-32 border border-gray-100 p-1"
        ></input>
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
