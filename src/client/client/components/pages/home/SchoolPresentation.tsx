import right from "assets/icons/arrows/right";
import { school } from "routes/routes";
import styles from "./styles/schoolPresentation.module.scss";

function SchoolPresentation() {
  return (
    <section className={styles.schoolPresentationWrapper}>
      <div className={styles.info}>
        <h4>ENSAM Casablanca</h4>
        <p>
          ENSAM Créée dans la plus grande agglomération industrielle du Royaume
          pour répondre aux besoins en ingénieurs, l’École Nationale Supérieure
          des Arts et Métiers de Casablanca relevant de l’Université Hassan II
          de Casablanca, est une école d’ingénieurs étatique qui assure une
          formation d’ingénieurs pluri-compétents, humanistes, innovants et
          dotés d’un esprit entrepreneurial, opérant dans différents secteurs
          industriels privés et publics à l’échelle nationale et international.
        </p>
        <a href={school.presentation} className="customSeeMore outlined">
          voir plus <span>{right}</span>
        </a>
      </div>
      <div className={styles.schoolImageWrapper}>
        <img src="/school/Restored_web_version.jpg" alt="" />
      </div>
    </section>
  );
}

export default SchoolPresentation;
