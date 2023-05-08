import React, { useEffect, useState } from "react";
import { Hit } from "models/Hit";
import styles from "./Myfaves.module.css";
import PostItem from "@/components/PostItem";

interface MyFavesProps {
  hits: Hit[];
}

export default function MyFaves({ hits }: MyFavesProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.postsContainer}>
        {hits ? (
          hits
            .filter((hit) => hit.liked)
            .map(
              (hit, index): JSX.Element => (
                <PostItem
                  key={`liked-post-item-${index}`}
                  hit={hit}
                  index={index}
                />
              )
            )
        ) : (
          <div>Loading... </div>
        )}
      </div>
    </div>
  );
}
