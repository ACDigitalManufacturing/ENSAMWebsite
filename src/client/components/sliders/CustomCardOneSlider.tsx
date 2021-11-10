import { useState } from "react";
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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  return (
    <div className={styles.customCardOneSliderWrapper}>
      <h4>{title}</h4>
      <div className={styles.cardsWrapper}>
        <div
          className={`${styles.prev} ${
            currentCardIndex === 0 ? styles.deactivated : ""
          }`}
        >
          {left}
        </div>
        <div
          className={`${styles.next} ${
            currentCardIndex + 1 === cards.length ? styles.deactivated : ""
          }`}
        >
          {right}
        </div>
        <div className={styles.cardsList}>
          {cards.map((card, idx) => (
            <CustomCardOne key={idx} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomCardOneSlider;
