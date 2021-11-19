import { CustomError } from "types/api";
import styles from "./styles/showErrors.module.scss";

interface Props {
  errors: CustomError[];
}
function ShowErrors({ errors }: Props): JSX.Element | null {
  return errors.length ? (
    <ul className={styles.errorsWrapper}>
      {errors.map((error, idx) => (
        <li key={idx}>{error.message}</li>
      ))}
    </ul>
  ) : null;
}

export default ShowErrors;
