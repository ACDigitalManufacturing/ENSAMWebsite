import { Link } from "react-router-dom";
import { PostType } from "types/api";
import ContentCard from "../cards/ContentCard";
import styles from "./styles/postsOverview.module.scss";

interface Props {
  title: string;
  category: string;

  posts: PostType[];
  onDelete: () => void;
}

const PostsOverview = ({
  title,
  posts,
  category,
  onDelete,
}: Props): JSX.Element => {
  return (
    <div className={styles.postsOverviewWrapper}>
      <h1>{title}</h1>
      <div className={styles.header}>
        <div className={styles.total}>Total: {posts.length}</div>
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
        {posts.map((post, idx) => (
          <ContentCard key={idx} {...{ post, onDelete }} />
        ))}
      </div>
    </div>
  );
};

export default PostsOverview;
