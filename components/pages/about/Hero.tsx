import styles from "./styles/hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["schoolName"]}>
        <h1>ENSAM CASABLANCA</h1>
        <h5>
          L’École nationale Supérieure des arts et métiers de Casablanca,
          affiliée à <br />
          l'Université Hassan II de Casablanca
        </h5>
      </div>

      <div className={styles["schoolImage"]}>
        <img src="/school/Restored_web_version.jpg" alt="" />
      </div>

      <div className={styles["schoolDescription"]}>
        <p>
          ENSAM Créée dans la plus grande agglomération industrielle du Royaume
          pour répondre aux besoins en ingénieurs, l’École Nationale Supérieure
          des Arts et Métiers de Casablanca relevant de l’Université Hassan II
          de Casablanca, est une école d’ingénieurs étatique qui assure une
          formation d’ingénieurs pluri-compétents, humanistes, innovants et
          dotés d’un esprit entrepreneurial, opérants dans différents secteurs
          industriels privés et publics à l’échelle national et international.
        </p>
      </div>
    </div>
  );
};
