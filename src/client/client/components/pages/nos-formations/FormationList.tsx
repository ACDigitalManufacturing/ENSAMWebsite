import right from "assets/icons/arrows/right";
import { paragraphSlice } from "utils/paragraphSlicer";
import styles from "./styles/formationList.module.scss";

interface Formation {
  icon?: JSX.Element;
  title: string;
  description: string;
  link?: string;
}
interface Props {
  title?: string;
  id?: string;
  formations: Formation[];
}

const FormationList = ({ formations, title, id }: Props) => {
  return (
    <div className={styles.container} id={id || ""}>
      {title ? <h4 className={styles.title}>{title}</h4> : null}
      <ul className={styles.listOfCoursesWrapper}>
        {/* CourseCard - start */}
        {formations.map(({ icon, title, description, link }, idx) => (
          <li key={idx}>
            {/* <div className={styles.cardWrapper}> */}
            <div className={styles.hero}>
              <div className={styles.courseIcon}>{icon || ""}</div>
              <h5>{title}</h5>
            </div>
            <div className={styles.info}>
              <p className={styles.courseDescription}>
                {paragraphSlice(description, 250, "...")}
              </p>
              {link ? (
                <a href={link} className="customSeeMore">
                  voir plus <span>{right}</span>
                </a>
              ) : null}
            </div>
            {/* </div> */}
          </li>
        ))}
        {/* CourseCard - end */}
      </ul>
    </div>
  );
};

export default FormationList;
