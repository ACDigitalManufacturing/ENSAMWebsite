import Main from "layouts/Main";
import styles from "styles/pages/about.module.scss";
function about() {
  return (
    <Main>
      <>
        <span className={styles.navPadding}></span>
        <div className={styles.aboutPageWrapper}>
          <div className={styles.header}>
            <h2>ENSAM CASABLANCA</h2>
            <p>
              L’École nationale Supérieure des arts et métiers de Casablanca,
              affiliée
            </p>
            <p>à l'Université Hassan II de Casablanca</p>
          </div>
          <div className={styles.presentation}>
            <div className={styles.imageWrapper}>
              <img
                src="/school/Restored_web_version.jpg"
                alt="ENSAM Casablanca image"
              />
            </div>
            <p>
              ENSAM Créée dans la plus grande agglomération industrielle du
              Royaume pour répondre aux besoins en ingénieurs, l’École Nationale
              Supérieure des Arts et Métiers de Casablanca relevant de
              l’Université Hassan II de Casablanca, est une école d’ingénieurs
              étatique qui assure une formation d’ingénieurs pluri-compétents,
              humanistes, innovants et dotés d’un esprit entrepreneurial,
              opérants dans différents secteurs industriels privés et publics à
              l’échelle national et international.
            </p>
          </div>
          <div className="details">
            <h3>MISSION</h3>
            <p>
              Afin d’être à la hauteur des attentes de ses élèves ingénieurs, et
              convaincue que leur formation doit combiner : Qualité technique,
              managériale et relationnelle ; l’ENSAM de Casablanca vise le
              développement d’une offre très large de formations. Partant de ce
              principe, et en incitant et motivant ses étudiants à organiser
              différents événements (Sociales, professionnels, culturels et
              sportifs), elle permet à ses futurs lauréats d’acquérir :{" "}
            </p>
            <ol>
              <li>
                Les compétences techniques et professionnelles de l’ingénieur.
              </li>
              <li>L’épanouissement de la personnalité</li>
              <li>L’apprentissage de la responsabilité.</li>
              <li>
                L’adaptation à un milieu professionnel en constante évolution.
              </li>
            </ol>
            <h3>FORMATION</h3>
            <p>
              La formation à l’ENSAM– Casablanca dure cinq ans: deux années
              préparatoires et trois années de formations spécialisées en l’une
              des filières :{" "}
            </p>
            <ol>
              <li>Génie Electromécanique</li>
              <li>Management des Systèmes Electriques Intelligents</li>
              <li>Intelligence Artificielle et Génie Informatique</li>
              <li>Génie Industriel</li>
              <li>Génie Mécanique</li>
            </ol>
            <h3>AVANTAGES</h3>
            <h4>Un accès sélectif pour un apprentissage productif</h4>
            <p>
              En choisissant d’intégrer l’ENSAM-Casablanca, vous optez pour une
              formation d’ingénieurs de référence. L’accès en première année de
              l’ENSAM est réservé aux élèves ayant obtenu :
            </p>
            <ul>
              <li>
                Un baccalauréat scientifique (Sciences Mathématiques A ou B,
                Sciences Expérimentales) Un baccalauréat technique.
              </li>
              <li>Un baccalauréat technique.</li>
            </ul>
            <p>
              En choisissant d’intégrer l’ENSAM-Casablanca, vous optez pour une
              formation d’ingénieurs de référence. L’accès en première année de
              l’ENSAM est réservé aux élèves ayant obtenu :
            </p>
            <ul>
              <li>
                Le concours national communs et titulaires des diplômes de DUT,
                DEUG, DEUST, BTS, DTS, license ou tout diplôme reconnu.
                équivalent.
              </li>
            </ul>
            <h4>Une pédagogie attrayante pour un métier d’avenir</h4>
            <p>
              80% de la formation à l’ENSAM-Casablanca est basée sur les
              sciences et techniques. Elle donne accès à de nombreux secteurs
              industriels porteurs (automobile, aéronautique, mécatronique,
              énergie…). 20% de la formation est centrée sur la pratique et à la
              maîtrise de l’ingénierie de projet, aux techniques de
              communication, au travail en équipe et à la gestion de
              l’entreprise. Ces disciplines apportent aux étudiants-ingénieurs
              les compétences managériales indispensables à leur futur métier et
              leur permet d’être immédiatement opérationnels dans le monde des
              entreprises.{" "}
            </p>
            <h4>
              Une formation axée sur l’entreprise pour une insertion réussie
            </h4>
            <p>
              L’intégration dans l’entreprise, par le biais des stages de
              découverte, d’ingénieur et le Projet de fin d’étude, fait partie
              intégrante de la formation de l’ingénieur de l’ENSAM.
              L’enseignement couvre des domaines étendus selon trois options de
              formations en étroite relation avec les secteurs industriels
              porteurs et les enjeux sociétaux prioritaires :
            </p>
            <ul>
              <li>Conception des Produits Nouveaux (CPN) </li>
              <li>Construction d’Ouvrages Métalliques (COM) </li>
              <li>
                Efficacité et Performance Energétique Industrielle (EFPEI)
              </li>
            </ul>
            <p>
              La formation délivrée permet aussi aux jeunes ingénieurs de
              s’orienter vers des fonctions types bureaux d’études, Industrie
              automobile, aéronautique, navale et ferroviaire …{" "}
            </p>
            <h4>Un partenariat large pour plus d’ouverture</h4>
            <p>
              Les partenariats pédagogiques constituent un axe incontournable du
              développement de l’école. Au niveau national, l’école fait partie
              du réseau national des grandes écoles d’ingénieurs. A
              l’international, l’ENSAM a développé des liens forts avec de
              grandes écoles d’ingénieur en France comme l’UTC de Belfort
              Montbéliard, l’ENSAM Paris-Tech et le réseau des INSA de France.
              Certes, dans une ère de mondialisation des efforts sont toujours
              déployés pour une grande ouverture sur l’international. Les
              relations industrielles de l’ENSAM ne cessent de s’accroitre dans
              un tissu industriel casablancais assez développé et assez varié.
            </p>
            <h4>
              Un cadre de travail privilégié pour une vie étudiante active et
              citoyenne
            </h4>
            <p>
              Pour rendre l’école plus dynamique et vivante, l’association des
              élèves, à travers ses clubs, propose aux étudiants une multitude
              d’activités allant du domaine artistique au domaine technique.
              Elle assure l’animation et la gestion de la vie étudiante et
              fédère plus de 15 clubs et associations qui ont pour objectif le
              développement personnel des élèves ingénieurs de
              l’ENSAM-Casablanca.{" "}
            </p>
          </div>
        </div>
      </>
    </Main>
  );
}

export default about;
