import React, { useEffect } from "react";
import PostItem from "@/components/PostItem";
import styles from "./index.module.css";

import Dropdown from "@/components/Dropdown/Dropdown";
import { OptionProps } from "@/components/Dropdown/DropDownOption";
import { useHitsProviderData } from "context/HitsProvider";
import { Hit } from "models/Hit";

export default function AllHits(): JSX.Element {
  const { hits } = useHitsProviderData();

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

  return (
    <section className={styles.container}>
      <Dropdown options={options}></Dropdown>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainerGroup}>
          {hits?.map(
            (hit: Hit, index: number): JSX.Element => (
              <PostItem key={`post-item-${index}`} hit={hit} index={index} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
