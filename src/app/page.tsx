'use client';

import Dropdown from '@/components/Dropdown/Dropdown';
import { OptionProps } from '@/components/Dropdown/DropDownOption';
import NewsItem from '@/components/NewsItem';
import Spinner from '@/components/Spinner';
import FilterProvider from '@/context/FilterContext';
import { useHitsProviderData } from '@/context/HitsProviderContext';
import { Hit } from '@/models/Hit';

export default function Home() {
  const { hits, fetchHits, isLoading } = useHitsProviderData();

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

  return (
    <FilterProvider refetch={fetchHits}>
      <section className="flex flex-col w-10/12  mx-auto my-8">
        <Dropdown options={options}></Dropdown>
        <div className="flex justify-center mt-8">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5">
              {hits?.map((hit: Hit, index: number) => (
                <NewsItem key={`post-item-${index}`} hit={hit} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </FilterProvider>
  );
}
