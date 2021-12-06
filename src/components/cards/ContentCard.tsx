import styles from "./styles/contentCard.module.scss";
import options from "assets/icons/options";
import { useState, useRef, useEffect } from "react";
import { Categories, PostCategories, PostStatuses } from "types/api";
import { getHost } from "api/getHost";
import { useSelector } from "react-redux";
import { rootStateType } from "store/reducers";
import { toast } from "react-toastify";
import { deletePost, unsetCoverOfPost } from "api/posts";
import { useNavigate } from "react-router";

interface Props {
  title: string;
  date: string;
  image: string | null;
  category: PostCategories;
  status: PostStatuses;
  id: string;
  onDelete: () => void;
}

const ContentCard = ({
  image,
  title,
  category,
  date,
  status,
  id,
  onDelete,
}: Props): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { auth_token } = useSelector((state: rootStateType) => state.admin);
  const navigate = useNavigate();

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  // eslint-disable-next-line
  const handleClicks = (e: any) => {
    if (!menuRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };

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
    if (image) {
      const { response: responseUnsetCover, errors: errorsUnsetCover } =
        await unsetCoverOfPost(id, auth_token);
      if (errorsUnsetCover) {
        return errorsUnsetCover.forEach(({ message }) => {
          toast.error(message);
        });
      }

      if (!responseUnsetCover?.post) {
        return toast.error("Something Wrong");
      }
    }
    const { response, errors } = await deletePost(id, auth_token);

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
    // TODO : Change the link category
    navigate(`/create-post/${getCategory(category)}/?postId=${id}`);
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
        <img src={image ? `${getHost()}/documents/${image}` : ""} alt={title} />

        <div className={styles.cardDetails}>
          <h3>{title || "Untitled"}</h3>
          <p>
            Catégorie:{" "}
            <span className={styles.category}>{getCategory(category)}</span>
          </p>
          <p className={styles.date}>
            Crée le{" "}
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className={styles.date}>Statut: {getStatus(status)}</p>
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
          <li>Aperçu</li>
          <li onClick={editPost}>Modifer</li>
          <li onClick={handleDeletePost}>Supprimer</li>
        </ul>
      </div>
    </article>
  );
};

export default ContentCard;
