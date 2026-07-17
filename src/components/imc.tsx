'use client';
import React from 'react';

export default function Imc() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState('');

  function calcularIMC(peso: string, altura: string) {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    return total;
  }

  const handleClick = () => {
    setImc(calcularIMC(peso, altura));
  };

  return (
    <div className="flex flex-col gap-2 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col w-32 p-2.5 gap-1"
      >
        <label htmlFor="peso">Peso:</label>
        <input
          id="peso"
          name="peso"
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-32 border border-gray-100 p-1"
        ></input>
        <label htmlFor="altura">Altura:</label>
        <input
          id="altura"
          name="altura"
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="w-32 border border-gray-100 p-1"
        ></input>
        <button
          className="text-lg font-bold w-32 h-10 my-2.5 rounded-lg bg-gray-300 text-gray-900"
          onClick={handleClick}
        >
          Calcular
        </button>
      </form>
      <div className="flex items-center p-2">
        <h2>
          Seu IMC é: <span>{imc}</span>
        </h2>
      </div>
    </div>
  );
}
