import React, { useState } from "react";
import PostItem from "@/components/PostItem";
import styles from "./AllPosts.module.css";

import Dropdown, { DropDownOption } from "@/components/Dropdown/Dropdown";
import { Hit } from "models/Hit";

interface AllHitsProps {
  hits: Hit[];
}

export default function AllHits({ hits }: AllHitsProps): JSX.Element {
  const options: DropDownOption[] = [
    {
      id: 1,
      imageUrl: "/images/angular.png",
      label: "Angular",
      query: "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=",
    },
    {
      id: 2,
      imageUrl: "/images/react.png",
      label: "React",
      query: "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=",
    },
    {
      id: 3,
      imageUrl: "/images/vue.png",
      label: "Vue",
      query: "https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=",
    },
  ];

  return (
    <div className={styles.container}>
      <Dropdown options={options}></Dropdown>
      <div className={styles.postsContainer}>
        {hits ? (
          hits.map(
            (hit, index): JSX.Element => (
              <PostItem key={`post-item-${index}`} hit={hit} index={index} />
            )
          )
        ) : (
          <div>Loading... </div>
        )}
      </div>
    </div>
  );
}
