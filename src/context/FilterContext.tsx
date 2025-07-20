import { createContext, useContext, useEffect, useState } from 'react';
import { useHitsProviderData } from './HitsProviderContext';

export interface Filter {
  tech: string;
}

interface FilterContextType {
  filter: Filter;
  updateFilterData: (newFilterData: Filter) => void;
}

const initialFilter = {
  tech: 'Select your news',
};

const initialValue: FilterContextType = {
  filter: initialFilter,
  updateFilterData: (newFilterData) => {},
};

export const FilterContext = createContext<FilterContextType>(initialValue);

export const useFilterData = () => {
  const filterContext = useContext(FilterContext);
  if (!FilterContext) throw Error('No filter context ');

  return filterContext;
};

interface FilterProviderProps {
  children: React.ReactNode;
  refetch: (newFilter: Filter) => void;
}

export default function FilterProvider({ children, refetch }: FilterProviderProps) {
  const [filter, setFilter] = useState<Filter>({ tech: 'Select your news' });
  const { fetchHits } = useHitsProviderData();

  const updateFilterData = (newFilter: Filter) => {
    setFilter(newFilter);
    console.log('updated', newFilter);
  };

  useEffect(() => {
    fetchHits(filter);
  }, [filter]);

  return (
    <FilterContext.Provider value={{ filter, updateFilterData }}>{children}</FilterContext.Provider>
  );
}
