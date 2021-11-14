import right from "assets/icons/right";
import styles from "./styles/wordFromTheDirector.module.scss";

function WordFromTheDirector() {
  return (
    <div className={styles.wordFromTheDirectorWrapper}>
      <h4>Mot du Directeur</h4>

      <div className={styles.directorCardWrapper}>
        <div className={styles.directorImageWrapper}>
          <img src="/directeur.jpg" alt="" />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.titles}>
            <h5>Professeur Ahmed MOUCHTACHI</h5>
            <h6>Directeur de l'ENSAM-Casablanca</h6>
          </div>
          <p>
            L’École Nationale Superieur des Arts et Métiers de Casablanca
            –ENSAM– a été créée et implantée à l’Université HASSAN II –UHII- de
            la ville de Casablanca, cœur d’un important bassin industriel en
            pleine extension pour répondre aux besoins croissants en formations
            d’ingénieurs dans notre pays...
          </p>
          <a href="#" className="customSeeMore">
            voir plus <span>{right}</span>
          </a>

          <span className={styles.quoteIcon}>"</span>
        </div>
      </div>
    </div>
  );
}

export default WordFromTheDirector;
