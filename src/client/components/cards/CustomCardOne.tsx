import right from "assets/icons/right";
import { Tags } from "Types/Application";
import styles from "./styles/customCardOne.module.scss";

export interface CustomCardOneType {
  coverUrl: string;
  tags: Tags[];
  date: number;
  title: string;
  link: string;
}

interface Props {
  card: CustomCardOneType;
}

function CustomCardOne({ card }: Props): JSX.Element {
  return (
    <div className={styles.customCardOneWrapper}>
      {/* Card Cover - START */}
      <div className={styles["coverWrapper"]}>
        <img src={card.coverUrl} alt="" />
      </div>
      {/* Card Cover - END */}

      {/* Card Info - START */}
      <div className="infoWrapper">
        <ul className="tagsWrapper">
          {card.tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
        <h6>
          {new Date(card.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h6>
        <h5>{card.title}</h5>

        <a href={card.link}>
          voir plus <span>{right}</span>
        </a>
      </div>
      {/* Card Info - END */}
    </div>
  );
}

export default CustomCardOne;
