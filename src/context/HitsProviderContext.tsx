'use client';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Hit, Faves } from '@/models/Hit';
import { createContext, useContext, useEffect, useState } from 'react';
import { getHackerNews } from '@/services/HackerNewsApi';
import { Filter, useFilterData } from '@/context/FilterContext';

export type HitsProviderData = {
  hits: Hit[];
  faves: Faves;
  setHits: (newHits: Hit[]) => void;
  setFaves: (newFaves: Hit) => void;
  isLoading: boolean;
  fetchHits: (filter: Filter) => Promise<void>;
};

type HitsProviderProps = {
  children: React.ReactNode;
};

const HitsContext = createContext<HitsProviderData | null>(null);

export function useHitsProviderData(): HitsProviderData {
  const dataProvider = useContext(HitsContext);
  if (!dataProvider) throw new Error('No hits found');

  return dataProvider;
}

export const HITS_KEY = 'hits';
export const FAVES_KEY = 'faves';

export default function HitsProvider({ children }: HitsProviderProps) {
  // const [hits, setHits] = useLocalStorage<Hit[]>(HITS_KEY, []);
  const [faves, setFaves] = useLocalStorage<Faves>(FAVES_KEY, {});
  const [hits, setHits] = useState<Hit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { filter } = useFilterData();

  const fetchHits = async (filter: Filter) => {
    try {
      setIsLoading(true);
      const data = await getHackerNews<Hit>(filter);
      setHits(data.hits);
    } catch (e) {
      setError('Error when loading data');
    } finally {
      setIsLoading(false);
    }
  };

  const addFave = (newFave: Hit) => {
    if (faves[newFave.objectID]) {
      delete faves[newFave.objectID];
    } else {
      faves[newFave.objectID] = { ...newFave, liked: true };
    }
    setFaves({ ...faves });
  };

  useEffect(() => {
    fetchHits(filter);
  }, []);

  return (
    <HitsContext.Provider
      value={{
        hits,
        faves,
        isLoading,
        setHits: (newHits) => setHits(newHits),
        setFaves: (newFave) => {
          addFave(newFave);
        },
        fetchHits,
      }}
    >
      {children}
    </HitsContext.Provider>
  );
}
