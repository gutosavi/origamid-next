"use client";

import {
  // revalidatePathActions,
  // revalidateTagActions,
  updateTagActions,
} from "@/actions/revalidate-path";

export default function Atualizar() {
  const handleClick = () => {
    // revalidatePathActions('/acoes');
    // revalidateTagActions('acoes');
    updateTagActions("acoes");
  };

  return (
    <button
      onClick={handleClick}
      className="w-32 h-10 bg-gray-900 hover:bg-gray-800 text-gray-50 uppercase font-bold font-mono p-2.5 my-2 rounded-lg"
    >
      Atualizar
    </button>
  );
}
