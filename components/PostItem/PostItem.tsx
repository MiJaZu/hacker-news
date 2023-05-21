import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegClock } from "react-icons/fa";
import styles from "./PostItem.module.css";
import { type Hit } from "models/Hit";

interface PostItemProps {
  hit: Hit;
  index: number;
}

export default function PostItem({ hit, index }: PostItemProps): JSX.Element {
  const [isFave, setIsFave] = useState(hit.liked);

  const getLikedPosts = async (): Promise<Hit[]> => {
    let hits: Hit[] = [];
    if (hits === null) hits = [];
    return hits;
  };

  const handleLikeClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    // Avoid the propagation of the url click event
    event.preventDefault();
    getLikedPosts()
      .then((hits) => {
        const likedHits = [...hits];
        likedHits[index] = { ...hits[index], liked: !isFave };
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <a
      target="_blank"
      href={hit.url}
      className={styles.container}
      rel="noreferrer"
    >
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
