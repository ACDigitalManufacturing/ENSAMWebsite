//* Routes
import School from "routes/detailedNav/School";
import Formation from "routes/detailedNav/Formation";
import StudentLife from "routes/detailedNav/StudentLife";
import Research from "routes/detailedNav/Research";
import HistoryOfScience from "routes/detailedNav/HistoryOfScience";
import Companies from "routes/detailedNav/Companies";
import Laureates from "routes/detailedNav/Laureates";
//*

//* Icons
import facebook from "assets/icons/socialMedia/facebook";
import linkedin from "assets/icons/socialMedia/linkedin";
import twitter from "assets/icons/socialMedia/twitter";
import youtube from "assets/icons/socialMedia/youtube";
import covid from "assets/icons/covid";
//*

const DetailedNav = ({ styles, isOpened, setOpened }: any): JSX.Element => {
  const closeMenu = () => {
    setOpened(false);
  };

  return (
    <div
      className={styles.menu}
      style={isOpened ? { display: "block" } : { display: "none" }}
    >
      {/* TOP MENU */}
      <div className={styles.header}>
        <div className={styles.closeMenu} onClick={() => closeMenu()}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.language}>Français</div>
      </div>
      {/* TOP MENU */}

      {/* CENTER MENU */}
      <div className={styles.menuContainer}>
        <div className={styles.menuLinks}>
          <div className={styles.column}>
            <School />
          </div>

          <div className={styles.column}>
            <Formation />
            <StudentLife />
          </div>

          <div className={styles.column}>
            <Research />
            <HistoryOfScience />
          </div>

          <div className={styles.column}>
            <Companies />
            <Laureates />
            <h2>Created by</h2>
            <ul>
              <a href="/web-masters">Webmasters</a>
            </ul>
          </div>
        </div>
      </div>
      {/* CENTER MENU */}

      {/* BOTTOM MENU */}
      <div className={styles.bottom}>
        <div className={styles.socialLinks}>
          <a href="">{linkedin}</a>
          <a href="">{facebook}</a>
          <a href="">{twitter}</a>
          <a href="">{youtube}</a>
        </div>
        <a className={styles.covid}>{covid} Covid 19</a>
      </div>
      {/* BOTTOM MENU */}
    </div>
  );
};

export default DetailedNav;
