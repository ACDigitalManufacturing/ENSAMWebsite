import { Link } from "react-router-dom";
import { Content } from "types/Content";
import ContentCard from "../cards/ContentCard";
import styles from "./styles/postsOverview.module.scss";

interface Props {
  title: string;
  category: string;
  cards: Content[];
}

const PostsOverview = ({ title, cards, category }: Props): JSX.Element => {
  return (
    <div className={styles.postsOverviewWrapper}>
      <h1>{title}</h1>
      <div className={styles.header}>
        <div className={styles.total}>Total: {cards.length}</div>
        <Link to={`/create-post${category}`} className={styles.createNew}>
          {" "}
          <div>+</div>
          Créer un nouveau{" "}
        </Link>
      </div>

      {/* pagination */}
      {/*            */}
      {/* pagination */}

      <div className={styles.cardsWrapper}>
        {cards.map((card, idx) => (
          <ContentCard
            key={idx}
            title={card.title}
            category={card.category}
            date={card.date}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsOverview;
