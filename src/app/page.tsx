'use client';

import Dropdown from '@/components/Dropdown/Dropdown';
import { OptionProps } from '@/components/Dropdown/DropDownOption';
import NewsItem from '@/components/NewsItem';
import { useHitsProviderData } from '@/hooks/useHitsProvider';
import { Hit } from '@/models/Hit';

export default function Home() {
  const { hits } = useHitsProviderData();

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
    <section className="flex flex-col w-10/12  mx-auto my-8">
      <Dropdown options={options}></Dropdown>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 mt-8">
        {hits?.map((hit: Hit, index: number) => (
          <NewsItem key={`post-item-${index}`} hit={hit} index={index} />
        ))}
      </div>
    </section>
  );
}
