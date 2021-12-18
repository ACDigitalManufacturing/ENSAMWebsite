import home from "assets/icons/home";
import leave from "assets/icons/leave";
import navArrowLeft from "assets/icons/navArrowLeft";
import post from "assets/icons/post";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import localRoutes from "routes/routes";
import { admin_logged_out } from "store/actions";
import styles from "./styles/sideMenu.module.scss";

function SideMenu(): JSX.Element {
  const dispatch = useDispatch();
  // this location is for selecting the active link
  const location = useLocation();

  const [isOpened, setOpened] = useState(false);

  const handleDisconnect = () => {
    dispatch(admin_logged_out());
  };

  return (
    <div
      className={`${styles.sideMenuWrapper} ${!isOpened ? styles.closed : ""}`}
    >
      <div
        className={styles.navArrow}
        style={
          isOpened
            ? { transform: "rotate(180deg)" }
            : { transform: "rotate(0deg)" }
        }
        onClick={() => setOpened(!isOpened)}
      >
        {navArrowLeft}
      </div>
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
              {icon}
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.decoButton} onClick={handleDisconnect}>
        {leave}
        <span>Se Déconnecter</span>
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
    icon: post,
    link: localRoutes.officialReleases,
    text: "Communiqués Officiels",
    category: "communique",
  },
  {
    icon: post,
    link: localRoutes.noticeToStudents,
    text: "Avis Aux Etudiants",
    category: "",
  },
  // {
  //   icon: home,
  //   link: localRoutes.agenda,
  //   text: "Agenda",
  //   category: "",
  // },
];

export default SideMenu;

// Git tutorial xD
// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
