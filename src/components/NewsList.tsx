import { Hit } from '@/models/Hit';
import React from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';

interface NewsListProps {
  isLoading?: boolean;
  hits: Hit[];
}

export default function NewsList({ isLoading = false, hits }: NewsListProps) {
  return (
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
  );
}
