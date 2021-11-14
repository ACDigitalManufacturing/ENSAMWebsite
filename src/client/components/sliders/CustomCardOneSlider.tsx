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
    console.log(currentTabIndex);
  }, [currentTabIndex]);
  return (
    <div className={styles.customCardOneSliderWrapper}>
      <h4>{title}</h4>
      <div className={styles.cardsWrapper}>
        {/* <div className={styles.cardsList}> */}
        {cards.map((card, idx) => (
          <CustomCardOne
            key={idx}
            card={card}
            customClass={
              idx < currentTabIndex * 3
                ? styles.left
                : idx >= (currentTabIndex + 1) * 3
                ? styles.right
                : ""
            }
            row={1}
            column={(idx % 3) + 1}
          />
        ))}
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
          {Array(Math.ceil(cards.length / 3))
            .fill(0)
            .map((_, idx) => (
              <div
                className={`${styles.dot} ${
                  currentTabIndex === idx ? styles.active : ""
                }`}
                key={idx}
              ></div>
            ))}
        </div>
        <div
          className={`${styles.next} ${
            currentTabIndex + 1 === Math.ceil(cards.length / 3)
              ? styles.deactivated
              : ""
          }`}
          onClick={() =>
            setCurrentTabIndex((prev) =>
              prev === Math.ceil(cards.length / 3) ? prev : prev + 1,
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
