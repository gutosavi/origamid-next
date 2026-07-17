import Link from 'next/link';

interface ButtonProp {
  route: string;
  name: string;
}

const Button = ({ route, name }: ButtonProp) => {
  return (
    <button className="w-32 h-10 bg-gray-900 hover:bg-gray-800 text-gray-50 uppercase font-bold font-[Roboto] p-2.5 my-2 rounded-lg">
      <Link href={`${route}`}>{name}</Link>
    </button>
  );
};

export default Button;
