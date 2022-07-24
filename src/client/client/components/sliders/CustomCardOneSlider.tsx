import { useEffect, useState } from "react";
import CustomCardOne from "components/cards/CustomCardOne";

import left from "assets/icons/arrows/left";
import right from "assets/icons/arrows/right";

import styles from "./styles/customCardOneSlider.module.scss";
import { PostType } from "Types/api";
import { postRoute } from "routes/routes";

interface Props {
  title: string;
  posts: PostType[];
}

function CustomCardOneSlider({ title, posts }: Props) {
  const [cardPerTab, setCardPerTab] = useState<1 | 2 | 3>(
    window.innerWidth > 1100 ? 3 : window.innerWidth > 700 ? 2 : 1
  );
  const lefts = {
    1: [50],
    2: [25, 75],
    3: [17, 50, 100 - 17],
  };
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCardPerTab(
        window.innerWidth > 1100 ? 3 : window.innerWidth > 700 ? 2 : 1
      );
    });
  }, []);

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
                    : idx > currentTabIndex + cardPerTab - 1
                    ? styles.right
                    : styles.showing)
                }
                style={
                  idx < currentTabIndex ||
                  idx > currentTabIndex + cardPerTab - 1
                    ? {}
                    : {
                        left: `${lefts[cardPerTab][idx - currentTabIndex]}%`,
                        // left: `calc(50% + ${100 * (idx - currentTabIndex)}%)`,
                        transform: "translateX(-50%)",
                      }
                }
              >
                <CustomCardOne post={post} link={postRoute(post.id)} />
              </div>
            ))
          : null}
        <CustomCardOne
          post={posts[0]}
          link={postRoute(posts[0].id)}
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
          {Array(Math.max(posts.length - cardPerTab + 1, 1))
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
            currentTabIndex + 1 === Math.max(posts.length - cardPerTab + 1, 1)
              ? styles.deactivated
              : ""
          }`}
          onClick={() =>
            setCurrentTabIndex((prev) =>
              prev === Math.max(posts.length - cardPerTab + 1, 1)
                ? prev
                : prev + 1
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
