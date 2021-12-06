import { useEffect, useState } from "react";
import CustomCardOne from "components/cards/CustomCardOne";

import left from "assets/icons/arrows/left";
import right from "assets/icons/arrows/right";

import styles from "./styles/customCardOneSlider.module.scss";
import { PostType } from "Types/api";

interface Props {
  title: string;
  posts: PostType[];
}

function CustomCardOneSlider({ title, posts }: Props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className={styles.customCardOneSliderWrapper}>
      <h4>{title}</h4>
      <div className={styles.cardsWrapper}>
        {/* <div className={styles.cardsList}> */}
        {posts.length
          ? posts.map((post, idx) => (
              <div
                key={idx}
                className={
                  styles.customCardWrapper +
                  " " +
                  (idx < currentTabIndex
                    ? styles.left
                    : idx > currentTabIndex + 2
                    ? styles.right
                    : styles.showing)
                }
                style={
                  idx < currentTabIndex || idx > currentTabIndex + 2
                    ? {}
                    : {
                        left: 1 + 33.33 * (idx - currentTabIndex) + "%",
                      }
                }
              >
                <CustomCardOne post={post} />
              </div>
            ))
          : null}
        <CustomCardOne
          post={posts[0]}
          customClass={styles.customCardPlaceholder}
        />
        {/* </div> */}
      </div>
      <div className={styles.navigationWrapper}>
        <div
          className={`${styles.prev} ${
            currentTabIndex === 0 ? styles.deactivated : ""
          }`}
          onClick={() =>
            setCurrentTabIndex((prev) => (prev === 0 ? prev : prev - 1))
          }
        >
          {left}
        </div>
        <div className={styles.dots}>
          {Array(Math.max(posts.length - 2, 1))
            .fill(0)
            .map((_, idx) => (
              <div
                className={`${styles.dot} ${
                  currentTabIndex === idx ? styles.active : ""
                }`}
                key={idx}
                onClick={() => setCurrentTabIndex(idx)}
              ></div>
            ))}
        </div>
        <div
          className={`${styles.next} ${
            currentTabIndex + 1 === Math.max(posts.length - 2, 1)
              ? styles.deactivated
              : ""
          }`}
          onClick={() =>
            setCurrentTabIndex((prev) =>
              prev === Math.max(posts.length - 2, 1) ? prev : prev + 1
            )
          }
        >
          {right}
        </div>
      </div>
    </div>
  );
}

export default CustomCardOneSlider;
