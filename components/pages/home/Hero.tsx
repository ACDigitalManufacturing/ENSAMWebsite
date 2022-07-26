import styles from "./styles/hero.module.scss";
import right from "assets/icons/arrows/right";
import down from "assets/icons/arrows/down";
import { scrollDown, scrollToCourses } from "utils/Scroll";

// import jlij from "assets/icons/jlij";

function Hero() {
  return (
    <section className={styles.heroWrapper}>
      {/* <div className={styles.backgroundJlij}>
        <div className={styles.jlijOne}>{jlij}</div>
        <div className={styles.jlijTwo}>{jlij}</div>
        <div className={styles.jlijThree}>{jlij}</div>
      </div> */}

      <div className={styles.heroContent}>
        <div className={styles.rightContainer}>
          {/* <img src="/school/Restored_web_version.jpg" alt="" /> */}
          <video
            src="/school/ensamLandingVideo.mp4#t=5"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className={styles.leftContainer}>
          <h1>Ensam Casablanca</h1>
          <p>
            L’École Nationale Supérieure d’Arts et Métiers de Casablanca,
            affiliée à l'Université Hassan II de Casablanca.
          </p>
          <div className={styles.callToAction}>
            <button className={styles.primary} onClick={scrollToCourses}>
              Nos Formation
            </button>
            <a href="/under-reconstruction">
              <button className={styles.secondary}>
                EENT <span>{right}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Down arrow */}
        <div className={styles.scrollDown} onClick={scrollDown}>
          {down}
        </div>
      </div>
    </section>
  );
}

export default Hero;
