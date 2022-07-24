import {
  companiesLinks,
  createdByLinks,
  formationLinks,
  historyOfScienceLinks,
  laureatesLinks,
  researchLinks,
  schoolLinks,
  studentLifeLinks,
} from "routes/navLinks";
import NavbarColumn from "./Navbar/NavbarColumn";
import styles from "./styles/footer.module.scss";

function Footer(): JSX.Element {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerLinks}>
        <div className={styles.footerInfo}>
          <img src="/ensam.png" alt="Ensam Casablanca" />
          <p>
            L'ENSAM de Casablanca est une école d'ingénieurs qui a pour mission
            de préparer les étudiants-ingénieurs aux métiers du secteur
            industriel.
          </p>
          <div>
            <span>Adresse: 150 Avenue Nile Sidi Othman، Casablanca 20670</span>
            <span>Tel: +212 52 25 64 222</span>
            <span>Email: contact@ensam-casa.ma</span>
          </div>
          {/* Mini map */}
          {/* Link : */}
          {/* https://www.google.com/maps/place/ENSAM+CASABLANCA/@33.5594072,-7.5683356,17z/data=!3m1!4b1!4m5!3m4!1s0xda6332908d1d61b:0x569d5bec37f7f81a!8m2!3d33.5594111!4d-7.5662305 */}
        </div>

        {/* <div className={styles.column}>
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
          <h2>Created by</h2>
          <ul>
            <a href="/web-masters">Webmasters</a>
          </ul> */}
        {/* </div> */}

        <div className={styles.column}>
          <NavbarColumn title={schoolLinks.title} links={schoolLinks.links} />
        </div>

        <div className={styles.column}>
          <NavbarColumn
            title={formationLinks.title}
            links={formationLinks.links}
          />
          <NavbarColumn
            title={studentLifeLinks.title}
            links={studentLifeLinks.links}
          />
        </div>

        <div className={styles.column}>
          <NavbarColumn
            title={researchLinks.title}
            links={researchLinks.links}
          />
          <NavbarColumn
            title={historyOfScienceLinks.title}
            links={historyOfScienceLinks.links}
          />
        </div>

        <div className={styles.column}>
          <NavbarColumn
            title={companiesLinks.title}
            links={companiesLinks.links}
          />
          <NavbarColumn
            title={laureatesLinks.title}
            links={laureatesLinks.links}
          />
          <NavbarColumn
            title={createdByLinks.title}
            links={createdByLinks.links}
          />
        </div>
      </div>
      <p>© 2021 ENSAM - CASABLANCA. All rights reserved.</p>
    </div>
  );
}

export default Footer;
