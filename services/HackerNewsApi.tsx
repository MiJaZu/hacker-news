import { type Hit } from "models/Hit";

export interface ApiResponse<T> {
  hits: Hit[];
  data: T;
}

export async function getHackerNews<T>(
  query: string = "",
  page: number = 0
): Promise<ApiResponse<T>> {
  return await (
    await fetch(
      `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
    )
  ).json();
}
