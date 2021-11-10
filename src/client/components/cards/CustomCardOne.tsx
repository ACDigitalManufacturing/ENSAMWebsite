import right from "assets/icons/right";
import { Tags } from "Types/Application";
import styles from "./styles/customCardOne.module.scss";

export interface CustomCardOneType {
  coverUrl: string;
  tags: Tags[];
  description?: string;
  date: number;
  title: string;
  link: string;
}

interface Props {
  card: CustomCardOneType;
}

function CustomCardOne({ card }: Props): JSX.Element {
  console.log(card.description?.length);

  return (
    <div className={styles.customCardOneWrapper}>
      {/* Card Cover - START */}
      <div className={styles.coverWrapper}>
        <img src={card.coverUrl} alt="" />
      </div>
      {/* Card Cover - END */}

      {/* Card Info - START */}
      <div className={styles.infoWrapper}>
        <ul className={styles.tagsWrapper}>
          {card.tags.map((tag, idx) => (
            <li
              key={idx}
              className={`${
                tag === Tags.communique
                  ? "communiqueTag"
                  : tag === Tags.avisetudiant
                  ? "avisetudiantTag"
                  : ""
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <h6>
          {new Date(card.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h6>
        <h5>
          {card.description && card.title.length > 30
            ? card.title.slice(0, 30) + "..."
            : card.title}
        </h5>
        {!card.description ? null : (
          <p>
            {card.description.length > 160
              ? card.description.slice(0, 160) + "..."
              : card.description}
          </p>
        )}

        <a href={card.link}>
          voir plus <span>{right}</span>
        </a>
      </div>
      {/* Card Info - END */}
    </div>
  );
}

export default CustomCardOne;
