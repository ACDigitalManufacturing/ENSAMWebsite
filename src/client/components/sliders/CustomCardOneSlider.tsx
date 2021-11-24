import { useEffect, useState } from "react";
import CustomCardOne, {
  CustomCardOneType,
} from "components/cards/CustomCardOne";

import left from "assets/icons/left";
import right from "assets/icons/right";

import styles from "./styles/customCardOneSlider.module.scss";

interface Props {
  title: string;
  cards: CustomCardOneType[];
}

function CustomCardOneSlider({ title, cards }: Props) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  useEffect(() => {
    // console.log(currentTabIndex);
    // cards.map((card, idx) => {
    //   console.log(
    //     idx < currentTabIndex
    //       ? -1
    //       : idx >= currentTabIndex + 3
    //       ? 4
    //       : (idx - currentTabIndex) % 3,
    //   );
    // });
  }, [currentTabIndex]);
  return (
    <div className={styles.customCardOneSliderWrapper}>
      <h4>{title}</h4>
      <div className={styles.cardsWrapper}>
        {/* <div className={styles.cardsList}> */}
        {cards.map((card, idx) => (
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
            <CustomCardOne card={card} />
          </div>
        ))}
        <CustomCardOne
          card={cards[0]}
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
          {/* {Array(Math.ceil(cards.length / 3)) */}
          {Array(Math.max(cards.length - 2, 1))
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
            // currentTabIndex + 1 === Math.ceil(cards.length / 3)
            currentTabIndex + 1 === Math.max(cards.length - 2, 1)
              ? styles.deactivated
              : ""
          }`}
          onClick={() =>
            setCurrentTabIndex((prev) =>
              // prev === Math.ceil(cards.length / 3) ? prev : prev + 1,
              prev === Math.max(cards.length - 2, 1) ? prev : prev + 1,
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
