import right from "assets/icons/arrows/right";
import styles from "./styles/customCardOne.module.scss";

import { PostCategories, PostType } from "Types/api";

interface Props {
  post: PostType;
  customClass?: string;
  link: string;
}

function CustomCardOne({ post, customClass, link }: Props): JSX.Element {
  return post ? (
    <div className={styles.customCardOneWrapper + " " + customClass}>
      {/* Card Cover - START */}
      <div className={styles.coverWrapper}>
        <img src={post.cover || ""} alt="" />
      </div>
      {/* Card Cover - END */}

      {/* Card Info - START */}
      <div className={styles.infoWrapper}>
        <ul className={styles.tagsWrapper}>
          <li
            className={`${
              post.category === PostCategories.OfficialReleases
                ? "communiqueTag"
                : post.category === PostCategories.NoticeToStudent
                ? "avisetudiantTag"
                : ""
            }`}
          >
            {post.category === PostCategories.OfficialReleases
              ? "communique"
              : post.category === PostCategories.NoticeToStudent
              ? "avisetudiant"
              : ""}
          </li>
        </ul>
        <h6>
          {new Date(post.createdAt).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h6>
        <h5>
          {post.title.length > 30
            ? post.title.slice(0, 30) + "..."
            : post.title}
        </h5>
        {post.content ? (
          <div
            dangerouslySetInnerHTML={{
              __html:
                post.content.length > 160
                  ? post.content.slice(0, 160) + "..."
                  : post.content,
            }}
          ></div>
        ) : null}

        <a href={link} className="customSeeMore">
          voir plus <span>{right}</span>
        </a>
      </div>
      {/* Card Info - END */}
    </div>
  ) : (
    <></>
  );
}

export default CustomCardOne;
