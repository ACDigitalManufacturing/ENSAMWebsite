import { Link } from "react-router-dom";
import { PostType } from "types/api";
import ContentCard from "../cards/ContentCard";
import styles from "./styles/postsOverview.module.scss";

interface Props {
  title: string;
  category: string;
  cards: PostType[];
  onDelete: () => void;
}

const PostsOverview = ({
  title,
  cards,
  category,
  onDelete,
}: Props): JSX.Element => {
  return (
    <div className={styles.postsOverviewWrapper}>
      <h1>{title}</h1>
      <div className={styles.header}>
        <div className={styles.total}>Total: {cards.length}</div>
        <Link to={category} className={styles.createNew}>
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
            date={card.createdAt}
            image={card.cover}
            status={card.status}
            id={card.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsOverview;
