'use client';
import React, { JSX } from 'react';
// import PostItem from "@/components/PostItem";
// import { useHitsProviderData } from "@/context/HitsProvider";

export default function MyFaves(): JSX.Element {
  //   const { hits } = useHitsProviderData();
  return (
    <section className="w-full flex flex-col  mt-28">
      <div className="w-full h-full flex flex-wrap  items-center justify-center">
        {/* {hits
          .filter((hit) => hit.liked)
          .map(
            (hit, index): JSX.Element => (
              <PostItem
                key={`liked-post-item-${index}`}
                hit={hit}
                index={index}
              />
            )
          )} */}
      </div>
    </section>
  );
}
