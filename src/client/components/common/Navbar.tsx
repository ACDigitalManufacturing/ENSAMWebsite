import styles from "./styles/navbar.module.scss";

import { useEffect, useRef, useState } from "react";

import MainNav from "./Navbar/MainNav";
import DetailedNav from "./Navbar/DetailedNav";

function Navbar(): JSX.Element {
  const [isOpened, setOpened] = useState(false);
  const [logo, setLogo] = useState("/ensam2.png");
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!ref) return;
    //! Replacing window.innerHeight with 200 to avoid the overlap with the hero text
    //! handle the route changing
    if (200 < window.scrollY) {
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
      <MainNav styles={styles} logo={logo} setOpened={setOpened} />
      <DetailedNav styles={styles} isOpened={isOpened} setOpened={setOpened} />
    </div>
  );
}

export default Navbar;
