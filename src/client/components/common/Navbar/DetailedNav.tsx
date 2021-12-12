//* Icons
import facebook from "assets/icons/socialMedia/facebook";
import linkedin from "assets/icons/socialMedia/linkedin";
import twitter from "assets/icons/socialMedia/twitter";
import youtube from "assets/icons/socialMedia/youtube";
import covid from "assets/icons/covid";
import NavbarColumn from "./NavbarColumn";
import {
  schoolLinks,
  formationLinks,
  studentLifeLinks,
  researchLinks,
  historyOfScienceLinks,
  companiesLinks,
  laureatesLinks,
  createdByLinks,
  mainLinks,
} from "routes/navLinks";
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
          <div className={styles.mobileNav}>
            <NavbarColumn title={mainLinks.title} links={mainLinks.links} />
          </div>

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
          {/* // TODO: Refactor css to be able to map through the navLinks and minimize the code*/}

          {/* {navLinks.map((navLink) => (
            <NavbarColumn title={navLink.title} links={navLink.links} />
          ))} */}
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

// const navLinks = [
//   schoolLinks,
//   formationLinks,
//   studentLifeLinks,
//   researchLinks,
//   historyOfScienceLinks,
//   companiesLinks,
//   laureatesLinks,
//   createdByLinks,
// ];
