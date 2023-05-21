import React from "react";
import PostItem from "@/components/PostItem";
import styles from "./AllHits.module.css";

import Dropdown from "@/components/Dropdown/Dropdown";
import { OptionProps } from "@/components/Dropdown/DropDownOption";
import { type Hit } from "models/Hit";

interface AllHitsProps {
  hits: Hit[];
}

export default function AllHits({ hits }: AllHitsProps): JSX.Element {
  const options: OptionProps[] = [
    {
      imgUrl: "/images/angular.png",
      label: "Angular",
      query: "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=",
    },
    {
      imgUrl: "/images/react.png",
      label: "React",
      query: "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=",
    },
    {
      imgUrl: "/images/vue.png",
      label: "Vue",
      query: "https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=",
    },
  ];

  const pageCount = 45;

  // Invoke when user click to request another page.
  const handlePageClick = (event: any): void => {};

  return (
    <div className={styles.container}>
      <Dropdown options={options}></Dropdown>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainerGroup}>
          {hits.map(
            (hit, index): JSX.Element => (
              <PostItem key={`post-item-${index}`} hit={hit} index={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
