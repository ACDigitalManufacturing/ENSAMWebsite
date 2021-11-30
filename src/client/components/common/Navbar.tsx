import styles from "./styles/navbar.module.scss";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Navbar(): JSX.Element {
  const [isOpened, setOpened] = useState(false);
  const [logo, setLogo] = useState("/ensam2.png");
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    setOpened(true);
  };

  const closeMenu = () => {
    setOpened(false);
  };

  const handleScroll = () => {
    if (!ref) return;
    //! Replacing window.innerHeight with 200 to avoid the overlap with the hero text
    //! handle the route changing
    if (200 < window.scrollY) {
      console.log(window.location.pathname);

      ref.current?.classList.add(styles.showProperly);
      setLogo("/ensam-logo.png");
    } else {
      ref.current?.classList.remove(styles.showProperly);
      //! Changing the logo color for better contrast
      setLogo("/ensam2.png");
    }
  };
  useEffect(() => {
    if (window.location.pathname !== "/") {
      ref.current?.classList.add(styles.showProperly);
      setLogo("/ensam-logo.png");
    } else {
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.navbarWrapper} ref={ref}>
      <div className={styles.leftContainer}>
        <div className={styles.hamburger} onClick={() => openMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a className={styles.logo} href="/">
          <img src={logo} alt="Ensam" />
        </a>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <a href="/">Accueil</a>
          <a href="/under-reconstruction">Formation</a>
          <a href="/under-reconstruction">Entreprise</a>
          <a href="/under-reconstruction">Recherche</a>
        </ul>
      </div>

      <div
        className={styles.menu}
        style={isOpened ? { display: "block" } : { display: "none" }}
      >
        <div className={styles.closeMenu} onClick={() => closeMenu()}>
          <span></span>
          <span></span>
        </div>
        <div>
          <div className={styles.menuContainer}>
            <div className={styles.menuLinks}>
              <div className={styles.column}>
                <h2>L'ÉCOLE</h2>
                <ul>
                  <a href="/under-reconstruction">Presentation</a>
                  <a href="/under-reconstruction">Mot du Directeur</a>
                  <a href="/under-reconstruction">Communiqué Officiels</a>
                  <a href="/under-reconstruction">Corps Professoral</a>
                  <a href="/under-reconstruction">Recrutement et Stage</a>
                  <a href="/under-reconstruction">Règlement Intérieur</a>
                  <a href="/under-reconstruction">Appels d'Offres</a>
                  <a href="/under-reconstruction">Agenda</a>
                </ul>
              </div>

              <div className={styles.column}>
                <h2>FORMATION</h2>
                <ul>
                  <a href="/under-reconstruction">Années Préparatoire</a>
                  <a href="/under-reconstruction">Cycle d'Inginieur</a>
                  <a href="/under-reconstruction">Licence d'Université</a>
                  <a href="/under-reconstruction">Master d'Université</a>
                </ul>
                <h2>VIE DE L'ÉTUDIANT</h2>
                <ul>
                  <a href="/under-reconstruction">Clubs</a>
                  <a href="/under-reconstruction">Avis aux Étudiants </a>
                  <a href="/under-reconstruction">Jeux Olympiques</a>
                </ul>
              </div>

              <div className={styles.column}>
                <h2>RECHERCHE</h2>
                <ul>
                  <a href="/under-reconstruction">Équipes et Laboratoires</a>
                  <a href="/under-reconstruction">Formation Doctorale</a>
                  <a href="/under-reconstruction">Projets ENSAM</a>
                  <a href="/under-reconstruction">Incubateur</a>
                  <a href="/under-reconstruction">Manifestation Scientifique</a>
                  <a href="/under-reconstruction">Partenariats Scientifique</a>
                </ul>
                <h2>Histoire de la science</h2>
                <ul>
                  <a href="/under-reconstruction">Histoire de la science</a>
                </ul>
              </div>

              <div className={styles.column}>
                <h2>ENTREPRISE</h2>
                <ul>
                  <a href="/under-reconstruction">Appels à Projets</a>
                  <a href="/under-reconstruction">Stages et Insertion</a>
                </ul>
                <h2>LAUREATS</h2>
                <ul>
                  <a href="/under-reconstruction">
                    Association des Lauréats de l’ENSAM
                  </a>
                  <a href="/under-reconstruction">
                    Cérémonies de remise des diplômes
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
