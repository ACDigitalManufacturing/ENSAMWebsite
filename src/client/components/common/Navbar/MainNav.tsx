import MainNavbar from "routes/MainNavbar";

const MainNav = ({ styles, setOpened, logo }: any): JSX.Element => {
  const openMenu = () => {
    setOpened(true);
  };

  return (
    <>
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
        <MainNavbar />
      </div>
    </>
  );
};

export default MainNav;
