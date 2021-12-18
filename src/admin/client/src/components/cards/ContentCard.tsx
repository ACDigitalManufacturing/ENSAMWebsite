import styles from "./styles/contentCard.module.scss";
import options from "assets/icons/options";
import { useState, useRef, useEffect } from "react";
import { Categories, PostCategories, PostStatuses, PostType } from "types/api";
import { getHost } from "api/getHost";
import { useSelector } from "react-redux";
import { rootStateType } from "store/reducers";
import { toast } from "react-toastify";
import { deletePost, unsetCoverOfPost } from "api/posts";
import { useNavigate } from "react-router";

interface Props {
  post: PostType;
  onDelete: () => void;
}

const ContentCard = ({ post, onDelete }: Props): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { auth_token } = useSelector((state: rootStateType) => state.admin);
  const navigate = useNavigate();

  //! Function - START
  const handleMenu = () => {
    setOpen(!isOpen);
  };
  //! Function - END

  //! Function - START
  // eslint-disable-next-line
  const handleClicks = (e: any) => {
    if (!menuRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  //! Function - END

  //! Function - START
  const getStatus = (status: PostStatuses) => {
    if (status == PostStatuses.live) {
      return "Publié";
    } else if (status == PostStatuses.draft) {
      return "Bruillion";
    } else if (status == PostStatuses.not_saved) {
      return "Non enregistré";
    }
  };
  //! Function - END

  //! Function - START
  const getCategory = (category: PostCategories) => {
    if (category == 0) {
      return Categories.NoticeToStudent;
    } else if (category == 1) {
      return Categories.OfficialReleases;
    }
  };
  //! Function - END

  //! Function - START
  const handleDeletePost = async () => {
    // documents.map(async (document) => {
    //   const { response, errors } = await unassignDocumentFromPost(
    //     document,
    //     id,
    //     auth_token
    //   );
    //   if (errors) {
    //     return errors.forEach(({ message }) => {
    //       toast.error(message);
    //     });
    //   }

    //   if (!response?.post) {
    //     return toast.error("Something Wrong");
    //   }
    // });

    if (post.cover) {
      const { response: responseUnsetCover, errors: errorsUnsetCover } =
        await unsetCoverOfPost(post.id, auth_token);
      if (errorsUnsetCover) {
        return errorsUnsetCover.forEach(({ message }) => {
          toast.error(message);
        });
      }

      if (!responseUnsetCover?.post) {
        return toast.error("Something Wrong");
      }
    }

    const { response, errors } = await deletePost(post.id, auth_token);

    if (errors) {
      return errors.forEach(({ message }) => {
        toast.error(message);
      });
    }

    if (!response?.deletedPost) {
      return toast.error("Something Wrong");
    }

    toast.success("Post has been deleted successfully");
    onDelete();
  };
  //! Function - END

  //! Function - START
  const editPost = () => {
    navigate(`/create-post/${getCategory(post.category)}/?postId=${post.id}`);
  };
  //! Function - END

  useEffect(() => {
    document.addEventListener("mousedown", handleClicks);
    return () => {
      document.removeEventListener("mousedown", handleClicks);
    };
  });

  return (
    <article className={styles.contentCard}>
      <div className={styles.cardData}>
        <div className={styles.cover}>
          <img
            src={
              post.cover
                ? `${getHost()}/documents/${post.cover}`
                : "/images/No_Image-Availabe.jpg"
            }
            alt={post.title}
          />
        </div>

        <div className={styles.cardDetails}>
          <h3>{post.title || "Untitled"}</h3>
          <p>
            Catégorie:{" "}
            <span className={styles.category}>
              {getCategory(post.category)}
            </span>
          </p>
          <p className={styles.date}>
            Crée le{" "}
            {new Date(post.createdAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className={styles.date}>Statut: {getStatus(post.status)}</p>
        </div>
      </div>
      <button className={styles.detailsButton} onClick={handleMenu}>
        {options}
      </button>
      <div
        className={styles.cardOptions}
        style={isOpen ? { display: "block" } : { display: "none" }}
        ref={menuRef}
      >
        <ul>
          {post.status === PostStatuses.live ? (
            <li>
              <a href={`https://ensam-casa.herokuapp.com/post/${post.id}`}>
                Aperçu
              </a>
            </li>
          ) : null}
          <li onClick={editPost}>Modifer</li>
          <li onClick={handleDeletePost}>Supprimer</li>
        </ul>
      </div>
    </article>
  );
};

export default ContentCard;
