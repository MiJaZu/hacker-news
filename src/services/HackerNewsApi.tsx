import { Filter } from '@/context/FilterContext';
import { type Hit } from '@/models/Hit';

export interface ApiResponse<T> {
  hits: Hit[];
  data: T;
}

export async function getHackerNews<T>({
  tech = '',
  // page: number = 0
}: Filter): Promise<ApiResponse<T>> {
  const page = 0;
  return await (
    await fetch(`https://hn.algolia.com/api/v1/search?query=${tech}&page=${page}`)
  ).json();
}
