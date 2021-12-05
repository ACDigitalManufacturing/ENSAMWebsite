import home from "assets/icons/home";
import leave from "assets/icons/leave";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import localRoutes from "routes/routes";
import { admin_logged_out } from "store/actions";
import styles from "./styles/sideMenu.module.scss";

function SideMenu(): JSX.Element {
  const dispatch = useDispatch();
  // this location is for selecting the active link
  const location = useLocation();

  const handleDeconect = () => {
    dispatch(admin_logged_out());
  };

  return (
    <div className={styles.sideMenuWrapper}>
      <section className={styles.logoWrapper}>
        <img src="/images/ensam2.png" alt="ensam casa" />
      </section>

      {/* <section className={styles.searchWrapper}>
        <input type="text" placeholder="search not working yet" />
      </section> */}

      <ul className={styles.dashboardNavigation}>
        {/* to add any link to the menu please check the list below */}
        {MenuLinks.map(({ link, text, icon }, idx) => (
          <li
            key={idx}
            className={link == location.pathname ? styles.active : ""}
          >
            <Link to={link}>
              <span>{icon}</span> {text}
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.decoButton} onClick={handleDeconect}>
        <span>{leave}</span>
        Se Déconnecter
      </button>
    </div>
  );
}

const MenuLinks = [
  {
    icon: home,
    link: localRoutes.dashboard,
    text: "Générale",
    category: "",
  },
  {
    icon: home,
    link: localRoutes.officialReleases,
    text: "Communiqués Officiels",
    category: "communique",
  },
  {
    icon: home,
    link: localRoutes.noticeToStudents,
    text: "Avis Aux Etudiants",
    category: "",
  },
  {
    icon: home,
    link: localRoutes.agenda,
    text: "Agenda",
    category: "",
  },
];

export default SideMenu;

// Git tutorial xD
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
