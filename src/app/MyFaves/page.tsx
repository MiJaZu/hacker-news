'use client';

import NewsList from '@/components/NewsList';
import { useHitsProviderData } from '@/context/HitsProviderContext';

export default function MyFaves() {
  const { faves } = useHitsProviderData();
  const myFaves = Object.values(faves);

  return (
    <section className="flex flex-col w-10/12  mx-auto my-8">
      <NewsList hits={myFaves} />
    </section>
  );
}
