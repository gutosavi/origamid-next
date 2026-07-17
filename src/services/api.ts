export type CursoProp = {
  id: number;
  nome: string;
  descricao: string;
  slug: string;
  total_aulas: number;
  total_horas: number;
  aulas: Array<{
    id: number;
    nome: string;
    descricao: string;
    slug: string;
    tempo: number;
  }>;
};

export async function fetchCursos(): Promise<CursoProp[] | null> {
  try {
    const response = await fetch('https://api.origamid.online/cursos/');
    if (!response.ok) throw new Error('Erro ao buscar cursos');
    return response.json();
  } catch (error) {
    console.error('Failed to fetch cursos:', error);
    throw error;
  }
}

export async function fetchAulas(slug: string): Promise<CursoProp | null> {
  try {
    const response = await fetch(`https://api.origamid.online/cursos/${slug}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Failed to fetch aulas:', error);
    throw error;
  }
}
