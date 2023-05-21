import React from "react";
import styles from "./Myfaves.module.css";
import PostItem from "@/components/PostItem";
import { useHitsProviderData } from "context/HitsProvider";

export default function MyFaves(): JSX.Element {
  const { hits } = useHitsProviderData();
  return (
    <section className={styles.container}>
      <div className={styles.postsContainer}>
        {hits
          .filter((hit) => hit.liked)
          .map(
            (hit, index): JSX.Element => (
              <PostItem
                key={`liked-post-item-${index}`}
                hit={hit}
                index={index}
              />
            )
          )}
      </div>
    </section>
  );
}
