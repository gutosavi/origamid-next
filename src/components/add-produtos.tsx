'use client';
import React from 'react';
import { Produto } from './client-fetch';
import { postProdutos } from '@/actions/post-produtos';
import { useRouter } from 'next/navigation';
import { updateTagActions } from '@/actions/revalidate-path';

const classNameInput = 'w-full border border-gray-100 p-1';

type FormField = {
  label: string;
  type: 'text' | 'number' | 'checkbox';
  name: keyof Produto;
  value: string | number | boolean;
};

const form: FormField[] = [
  { label: 'Nome', type: 'text', name: 'nome', value: '' },
  { label: 'Preço', type: 'number', name: 'preco', value: 0 },
  { label: 'Descrição', type: 'text', name: 'descricao', value: '' },
  { label: 'Estoque', type: 'number', name: 'estoque', value: 0 },
  { label: 'Importado', type: 'checkbox', name: 'importado', value: false },
];

export default function AdicionarProdutos() {
  const router = useRouter();
  const [formData, setFormData] = React.useState<Produto>({
    nome: '',
    preco: 0,
    descricao: '',
    estoque: 0,
    importado: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
            ? 1
            : 0
          : type === 'number'
            ? Number(value)
            : value,
    }));
  };

  const handleClick = async () => {
    try {
      const formResult = await postProdutos(formData);

      if (!formResult?.success) {
        console.log('Erro', formResult?.message);
        // aqui colocamos uma lógica de estado de erro, mas por se tratar de ambiente de estudo, não foi adicionada.
      }

      if (formResult?.success) {
        await updateTagActions('produtos');
        router.push('/produtos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full p-2.5">
      {form.map((input) => (
        <div key={input.name} className="flex flex-col gap-1">
          <label
            className="block text-sm font-medium text-gray-700 mt-2"
            htmlFor={input.name}
          >
            {input.label}
          </label>

          {input.type === 'checkbox' ? (
            <input
              type="checkbox"
              id={input.name}
              name={input.name}
              onChange={handleChange}
              checked={formData.importado === 1}
              className="flex flex-row w-4 h-4"
            />
          ) : (
            <input
              type={input.type}
              id={input.name}
              name={input.name}
              onChange={handleChange}
              value={formData[input.name as keyof Produto] as string | number}
              className={classNameInput}
            />
          )}
        </div>
      ))}
      <button
        className="w-40 h-10 bg-gray-900 hover:bg-gray-800 text-gray-50 uppercase font-medium font-[Roboto] p-2.5 my-2 rounded transition-all duration-75"
        onClick={handleClick}
      >
        Adicionar
      </button>
    </form>
  );
}
