import useLocalStorage from "hooks/useLocalStorage";
import { Hit } from "models/Hit";
import { createContext, useContext, useEffect } from "react";
import { getHackerNews } from "services/HackerNewsApi";

export type HitsProviderData = {
  hits: Hit[];
};

type HitsProviderProps = {
  children: JSX.Element;
};
const HitsContext = createContext<HitsProviderData | null>(null);

export function useHitsProviderData(): HitsProviderData {
  const dataProvider = useContext(HitsContext);
  if (!dataProvider) throw new Error("No hits found");

  return dataProvider;
}

const HITS_KEY = "hits";

export default function HitsProvider({ children }: HitsProviderProps) {
  const [hits, setHits] = useLocalStorage<Hit[]>(HITS_KEY, []);

  useEffect(() => {
    (async () => {
      const data = await getHackerNews<Hit>();
      console.log(hits);
      setHits(data.hits);
    })();
  }, []);

  return (
    <HitsContext.Provider value={{ hits }}>{children}</HitsContext.Provider>
  );
}
