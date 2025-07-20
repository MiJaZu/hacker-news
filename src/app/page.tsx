'use client';

import Dropdown from '@/components/Dropdown/Dropdown';
import { OptionProps } from '@/components/Dropdown/DropDownOption';
import NewsList from '@/components/NewsList';
import FilterProvider from '@/context/FilterContext';
import { useHitsProviderData } from '@/context/HitsProviderContext';

export default function Home() {
  const { hits, faves, fetchHits, isLoading } = useHitsProviderData();

  const options: OptionProps[] = [
    {
      imgUrl: '/images/angular.png',
      label: 'Angular',
      query: 'https://hn.algolia.com/api/v1/search_by_date?query=angular',
    },
    {
      imgUrl: '/images/react.png',
      label: 'React',
      query: 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=',
    },
    {
      imgUrl: '/images/vue.png',
      label: 'Vue',
      query: 'https://hn.algolia.com/api/v1/search_by_date?query=vuejs',
    },
  ];

  const addedFaves = hits.map((hit) => {
    let liked = false;
    if (faves[hit.objectID]) liked = faves[hit.objectID].liked;
    return {
      ...hit,
      liked,
    };
  });

  return (
    <FilterProvider refetch={fetchHits}>
      <section className="flex flex-col w-10/12  mx-auto my-8">
        <Dropdown options={options}></Dropdown>
        <NewsList hits={addedFaves} isLoading={isLoading} />
      </section>
    </FilterProvider>
  );
}
