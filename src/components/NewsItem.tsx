'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegClock } from 'react-icons/fa';
import { type Hit } from '@/models/Hit';
import { useHitsProviderData } from '@/context/HitsProviderContext';

interface PostItemProps {
  hit: Hit;
  index: number;
}

export default function NewsItem({ hit }: PostItemProps) {
  const [isLiked, setIsLiked] = useState(hit.liked);
  const { setFaves } = useHitsProviderData();

  const getLikedPosts = async (): Promise<Hit[]> => {
    let hits: Hit[] = [];
    if (hits === null) hits = [];
    return hits;
  };

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // Avoid the propagation of the url click event
    event.preventDefault();
    setFaves(hit);
    setIsLiked(!isLiked);
  };

  return (
    <a
      target="_blank"
      href={hit.url ?? hit.story_url}
      className="flex border-1 border-solid border-gray-200 rounded-md hover:opacity-[0.7] justify-between"
      rel="noreferrer"
    >
      <div className="px-2.5 py-5 w-full">
        <div className="flex items-center h-8">
          <FaRegClock />
          <p>{hit.created_at_i} ago by author</p>
        </div>
        <div>{hit.title ?? hit.story_title}</div>
      </div>
      <button onClick={handleLikeClick} className="bg-gray-100 rounded-tr-md rounded-br-md p-4">
        {isLiked ? (
          <FaHeart className="text-red-600 w-6 h-6" />
        ) : (
          <FaRegHeart className="text-red-600 w-6 h-6" />
        )}
      </button>
    </a>
  );
}
