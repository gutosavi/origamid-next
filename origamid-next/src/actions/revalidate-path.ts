'use server';

import { revalidatePath, revalidateTag, updateTag } from 'next/cache';

export async function revalidatePathActions(path: string) {
  revalidatePath(path);
}

export async function revalidateTagActions(tag: string) {
  revalidateTag(tag, 'max'); // marca os dados da tag como 'stale', mantém o conteúdo antigo disponível por enquanto, faz revalidação em segundo plano na próxima visita;
}

export async function updateTagActions(tag: string) {
  updateTag(tag); // o updateTag invalida imediatamente e faz o próximo request buscar novo conteúdo;
}
