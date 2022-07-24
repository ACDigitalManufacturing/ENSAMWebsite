import right from "assets/icons/arrows/right";
import { formation } from "routes/routes";
import styles from "./styles/mission.module.scss";

export const Formation = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <h1>FORMATION</h1>

        <a href={formation.index} className="customSeeMore">
          voir plus <span>{right}</span>
        </a>
      </div>
      <div className={styles["content"]}>
        <p>
          La formation à l’ENSAM– Casablanca dure cinq ans: deux années
          préparatoires et trois années de formations spécialisées en l’une des
          filières :
        </p>
        <ol>
          <li>
            <span>Génie Electromécanique</span>
          </li>
          <li>
            <span>Management des Systèmes Electriques Intelligents</span>
          </li>
          <li>
            <span>Intelligence Artificielle et Génie Informatique</span>
          </li>
          <li>
            <span>Génie Industriel</span>
          </li>
          <li>
            <span>Génie Mécanique</span>
          </li>
        </ol>
      </div>
    </div>
  );
};
