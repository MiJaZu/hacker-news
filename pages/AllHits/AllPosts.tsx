import React from "react";
import ReactPaginate from "react-paginate";
import PostItem from "@/components/PostItem";
import styles from "./AllPosts.module.css";

import Dropdown, { type DropDownOption } from "@/components/Dropdown/Dropdown";
import { type Hit } from "models/Hit";

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

  const pageCount = 45;

  // Invoke when user click to request another page.
  const handlePageClick = (event: any): void => {};

  return (
    <div className={styles.container}>
      <Dropdown options={options}></Dropdown>
      <div className={styles.postsContainer}>
        {hits.map(
          (hit, index): JSX.Element => (
            <PostItem key={`post-item-${index}`} hit={hit} index={index} />
          )
        )}
      </div>
      <ReactPaginate
        containerClassName={styles.pagination}
        activeClassName={styles.pagination__link__active}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        // className={styles.pagination}
      />
    </div>
  );
}
