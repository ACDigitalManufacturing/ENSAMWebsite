import right from "assets/icons/right";
import styles from "./styles/schoolPresentation.module.scss";

function SchoolPresentation() {
  return (
    <section className={styles.schoolPresentationWrapper}>
      <div className={styles.info}>
        <h4>ENSAM Casablanca</h4>
        <p>
          ENSAM Créée en 2010, dans la plus grande agglomération industrielle du
          Royaume pour répondre aux besoins en ingénieurs, l’École Nationale
          Supérieure des Arts et Métiers de Casablanca relevant de l’Université
          Hassan II de Casablanca, est une école d’ingénieurs étatique qui
          assure une formation d’ingénieurs pluri-compétents, humanistes,
          innovants et dotés d’un esprit entrepreneurial, opérants dans
          différents secteurs industriels privés et publics à l’échelle national
          et international.
        </p>
        <a href="/under-reconstruction" className="customSeeMore outlined">
          voir plus <span>{right}</span>
        </a>
      </div>
      <div className={styles.schoolImageWrapper}>
        <img src="/school/schoolThree.png" alt="" />
      </div>
    </section>
  );
}

export default SchoolPresentation;
