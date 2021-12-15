import jlij from "assets/icons/jlij";
import styles from "./styles/authLayout.module.scss";

interface Props {
  children: JSX.Element;
}

const AuthLayout = function ({ children }: Props): JSX.Element {
  return (
    <div className={styles.authLayoutWrapper}>
      <div className={styles.jlij}>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <span key={idx} className={styles[`j${idx}`]}>
              {jlij}
            </span>
          ))}
      </div>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

export default AuthLayout;
