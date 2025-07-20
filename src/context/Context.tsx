import { createContext, useState } from 'react';

interface Filter {
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
  const [filter, setFilters] = useState<Filter>(initialFilter);
  const updateFilterData = (newFilterData: Filter) => setFilters(newFilterData);

  return {
    filter,
    updateFilterData,
  };
};
