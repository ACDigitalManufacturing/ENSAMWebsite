import left from "assets/icons/left";
import right from "assets/icons/right";
import CustomCardOne, {
  CustomCardOneType,
} from "components/cards/CustomCardOne";

import styles from "./styles/customCardOneSlider.module.scss";

interface Props {
  title: string;
  cards: CustomCardOneType[];
}

function CustomCardOneSlider({ title, cards }: Props) {
  return (
    <div className={styles.customCardOneSliderWrapper}>
      <h4>{title}</h4>
      <div className={styles.cardsWrapper}>
        <div className={styles.prev}>{left}</div>
        <div className={styles.next}>{right}</div>
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
