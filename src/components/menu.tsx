import Link from 'next/link';

const Menu = () => {
  return (
    <div className="w-full h-20 flex items-center p-2.5 bg-gray-900 sm:bg-gray-50">
      <ul className="flex flex-row gap-6 text-2xl font-bold font-[Roboto] text-gray-50 sm:text-gray-900 list-none leading-relaxed">
        <li>
          <Link href={'/'} prefetch={true}>
            {/* prefetch já é um padrão, então só faz sentido colocar se quiser que seja false */}
            Home
          </Link>
        </li>
        <li>
          <Link href={'/sobre'}>Sobre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
