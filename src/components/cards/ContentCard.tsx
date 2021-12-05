import styles from "./styles/contentCard.module.scss";
import { Content } from "../../types/Content";
import options from "assets/icons/options";
import { useState, useRef, useEffect } from "react";

const ContentCard = ({
  image,
  title,
  category,
  date,
}: Content): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  // eslint-disable-next-line
  const handleClicks = (e: any) => {
    if (!menuRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClicks);
    return () => {
      document.removeEventListener("mousedown", handleClicks);
    };
  });

  return (
    <article className={styles.contentCard}>
      <div className={styles.cardData}>
        <img src={image} alt={title} />

        <div className={styles.cardDetails}>
          <h3>{title}</h3>
          <p>
            Catégorie: <span className={styles.category}>{category}</span>
          </p>
          <p className={styles.date}>
            Crée le{" "}
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
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
          <li>Modifer</li>
          <li>Supprimer</li>
        </ul>
      </div>
    </article>
  );
};

export default ContentCard;
