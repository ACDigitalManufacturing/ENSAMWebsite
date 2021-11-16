import styles from "./styles/navbar.module.scss";

import { useState } from "react";

function Navbar(): JSX.Element {
  const [isOpened, setOpened] = useState(false);

  const openMenu = () => {
    setOpened(true);
  };

  const closeMenu = () => {
    setOpened(false);
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.hamburger} onClick={() => openMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a className={styles.logo} href="/">
          <img src="/ensam-logo.png" alt="Ensam" />
        </a>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <a href="/">Accueil</a>
          <a href="/under-reconstruction">Formation</a>
          <a href="/under-reconstruction">Entreprise</a>
          <a href="/under-reconstruction">Recherche et Innovation</a>
          <a href="/under-reconstruction">Contact</a>
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
                  <a href="/under-reconstruction">Cycle Préparatoire</a>
                  <a href="/under-reconstruction">Cycle d'Inginieur</a>
                  <a href="/under-reconstruction">License d'Université</a>
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
                <h2>RECHERCHE & INNOVATION</h2>
                <ul>
                  <a href="/under-reconstruction">Équipes et Laboratoires</a>
                  <a href="/under-reconstruction">Formation Doctorale</a>
                  <a href="/under-reconstruction">Projets ENSAM</a>
                  <a href="/under-reconstruction">Incubateur</a>
                  <a href="/under-reconstruction">Manifestation Scientifique</a>
                  <a href="/under-reconstruction">Partenariats Scientifique</a>
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
