import home from "assets/icons/home"
import leave from "assets/icons/leave"
import { Link, useLocation } from "react-router-dom"
import localRoutes from "routes/routes"
import styles from "./styles/sideMenu.module.scss"

function SideMenu(): JSX.Element {
  // this location is for selecting the active link
  const location = useLocation()

  return (
    <div className={styles.sideMenuWrapper}>
      <section className={styles.logoWrapper}>
        <img src="/images/ensam-logo.png" alt="ensam casa" />
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

      <button className={styles.decoButton}>
        <span>{leave}</span>
        Se Déconnecter
      </button>
    </div>
  )
}

const MenuLinks = [
  {
    icon: home,
    link: localRoutes.dashboard,
    text: "Générale",
  },
  {
    icon: home,
    link: localRoutes.officialReleases,
    text: "Communiqués Officiels",
  },
  {
    icon: home,
    link: localRoutes.noticeToStudents,
    text: "Avis Aux Etudiants",
  },
]

export default SideMenu
