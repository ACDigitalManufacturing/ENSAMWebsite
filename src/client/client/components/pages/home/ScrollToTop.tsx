import up from "assets/icons/arrows/up";
import { useRef, useEffect } from "react";
import { scrollUp } from "utils/Scroll";
import styles from "./styles/scrollUp.module.scss";

const ScrollToTop = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!ref) return;
    if (window.innerHeight - 70 < window.scrollY) {
      ref.current?.classList.add(styles.display);
    } else {
      ref.current?.classList.remove(styles.display);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollToTop} onClick={scrollUp} ref={ref}>
      {up}
    </div>
  );
};

export default ScrollToTop;
