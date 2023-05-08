import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegClock } from "react-icons/fa";
import styles from "./PostItem.module.css";
import { Hit } from "models/Hit";
import localforage from "localforage";
import { POSTS_KEY } from "utils/localStorage";

interface PostItemProps {
  hit: Hit;
  index: number;
}

export default function PostItem({ hit, index }: PostItemProps): JSX.Element {
  const [isFave, setIsFave] = useState(hit.liked);

  const getLikedPosts = async (): Promise<Hit[]> => {
    let hits = await localforage.getItem<Hit[]>(POSTS_KEY);
    if (hits === null) hits = [];
    return hits;
  };

  const handleLikeClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    // Avoid the propagation of the url click event
    event.preventDefault();
    let hits = await getLikedPosts();
    hits[index] = { ...hits[index], liked: !isFave };
    localforage.setItem(POSTS_KEY, hits);
    setIsFave(!isFave);
  };

  return (
    <a target="_blank" href={hit.url} className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerTime}>
          <FaRegClock />
          <p>{hit.created_at_i} ago by author</p>
        </div>
        <div>{hit.title}</div>
      </div>
      <div className={styles.containerHeart}>
        <button onClick={handleLikeClick}>
          {isFave ? (
            <FaHeart className={styles.heart} />
          ) : (
            <FaRegHeart className={styles.heart} />
          )}
        </button>
      </div>
    </a>
  );
}
