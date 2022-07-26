import styles from "./styles/mission.module.scss";

export const Mission = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <h1>MISSION</h1>
      </div>
      <div className={styles["content"]}>
        <p>
          Afin d’être à la hauteur des attentes de ses élèves ingénieurs, et
          convaincue que leur formation doit combiner : Qualité technique,
          managériale et relationnelle ; l’ENSAM de Casablanca vise le
          développement d’une offre très large de formations. Partant de ce
          principe, et en incitant et motivant ses étudiants à organiser
          différents événements (Sociales, professionnels, culturels et
          sportifs), elle permet à ses futurs lauréats d’acquérir :
        </p>
        <ol>
          <li>
            <span>
              Les compétences techniques et professionnelles de l’ingénieur.
            </span>
          </li>
          <li>
            <span>L’épanouissement de la personnalité</span>
          </li>
          <li>
            <span>L’apprentissage de la responsabilité.</span>
          </li>
          <li>
            <span>
              L’adaptation à un milieu professionnel en constante évolution.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};
