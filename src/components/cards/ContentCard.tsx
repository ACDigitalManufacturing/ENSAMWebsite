import styles from "./styles/contentCard.module.scss";
import { Content } from "../../types/Content";

const ContentCard = ({
  image,
  title,
  category,
  date,
}: Content): JSX.Element => {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.cardDetails}>
        <h2>{title}</h2>
        <p>Catégorie: {category}</p>
        <p>Crée le {date}</p>
      </div>
      <div className={styles.detailsButton}>
        <button>...</button>
      </div>
    </article>
  );
};

export default ContentCard;
