import Navbar from "components/common/Navbar";
import styles from "./styles/mainLayout.module.scss";

interface Props {
  children: JSX.Element;
}
function Main({ children }: Props) {
  return (
    <div className={styles.mainLayoutWrapper}>
      <Navbar />
      {children}
      <Navbar />
    </div>
  );
}

export default Main;
