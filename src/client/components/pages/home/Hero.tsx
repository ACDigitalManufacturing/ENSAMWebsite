import styles from "./styles/hero.module.scss";
import right from "assets/icons/right";

import jlij from "assets/icons/jlij";

function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.backgroundJlij}>
        <div className={styles.jlijOne}>{jlij}</div>
        <div className={styles.jlijTwo}>{jlij}</div>
        <div className={styles.jlijThree}>{jlij}</div>
      </div>
      <div className={styles.leftContainer}>
        <h1>Ensam Casablanca</h1>
        <p>
          L’École nationale Supérieure des arts et métiers de Casablanca,
          affiliée à l'Université Hassan II de Casablanca, a été créée en 2010.
        </p>
        <div className={styles.callToAction}>
          <a href="/under-reconstruction">
            <button className={styles.primary}>Nos Formation</button>
          </a>
          <a href="/under-reconstruction">
            <button className={styles.secondary}>
              EENT <span>{right}</span>
            </button>
          </a>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src="/school/Restored_web_version.jpg" alt="" />
      </div>
      {/* Scroll Down arrow */}
      <div className={styles.scrollDown}></div>
    </section>
  );
}

export default Hero;
