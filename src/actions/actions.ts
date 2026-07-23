'use server';

import { cookies } from 'next/headers';

export async function deleteCookie(data: string) {
  const cookieStore = await cookies();
  cookieStore.delete(data);
}

export async function createCookie(key: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: key,
    value: value,
    httpOnly: true,
    secure: true,
  });
}
