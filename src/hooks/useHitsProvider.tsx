'use client';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Hit, Faves } from '@/models/Hit';
import { createContext, useContext, useEffect, useState } from 'react';
import { getHackerNews } from '@/services/HackerNewsApi';
import { useFilterData } from '@/context/Context';

export type HitsProviderData = {
  hits: Hit[];
  faves: Faves;
  setHits: (newHits: Hit[]) => void;
  setFaves: (newFaves: Hit) => void;
  isLoading: boolean;
  fetchHits: () => Promise<void>;
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
  const [hits, setHits] = useLocalStorage<Hit[]>(HITS_KEY, []);
  const [faves, setFaves] = useLocalStorage<Faves>(FAVES_KEY, {});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { filter } = useFilterData();

  const fetchHits = async () => {
    try {
      setIsLoading(true);
      const data = await getHackerNews<Hit>(filter.tech);
      setHits(data.hits);
    } catch (e) {
      setError('Error when loading data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHits();
  }, []);

  useEffect(() => {
    if (filter.tech !== 'Select your news') fetchHits();
  }, [filter.tech]);

  return (
    <HitsContext.Provider
      value={{
        hits,
        faves,
        isLoading,
        setHits: (newHits) => setHits(newHits),
        setFaves: (newFave) => {
          if (faves[newFave.objectID]) delete faves[newFave.objectID];
          else faves[newFave.objectID] = { ...newFave, liked: true };
          setFaves({ ...faves });
        },
        fetchHits,
      }}
    >
      {children}
    </HitsContext.Provider>
  );
}
