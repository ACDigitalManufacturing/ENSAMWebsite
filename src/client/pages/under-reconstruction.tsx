import Main from "layouts/Main";
import jlij from "assets/icons/jlij";

import styles from "styles/pages/underReconstruction.module.scss";

function UnderReconstruction() {
  return (
    <Main>
      <>
        <div className={styles.underReconstructionWrapper}>
          <div className={styles.backgroundJlij}>
            <div className={styles.jlijOne}>{jlij}</div>
            <div className={styles.jlijTwo}>{jlij}</div>
            <div className={styles.jlijThree}>{jlij}</div>
          </div>
          <div className={styles.content}>
            <h1>page en reconstruction</h1>
            <p>
              Cette page est actuellement en cours de reconstruction. <br />
              Merci pour votre comprehension.
            </p>
            <a href="/">Accueil</a>
          </div>
          <img src="/general/under_reconstruction.svg" alt="" />
        </div>
      </>
    </Main>
  );
}

export default UnderReconstruction;
