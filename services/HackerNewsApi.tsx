export async function getHackerNews(
  query: string = "",
  page: number = 0
): Promise<any> {
  return (
    await fetch(
      `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
    )
  ).json;
}
