import right from "assets/icons/right";
import styles from "./styles/ourCourses.module.scss";

function OurCourses() {
  return (
    <div className={styles.ourCoursesWrapper}>
      <h4>Nos Formations</h4>
      <ul className={styles.listOfCoursesWrapper}>
        {/* CourseCard - start */}
        {CoursesList.map(({ icon, title, description, link }, idx) => (
          <li key={idx}>
            <div className={styles.hero}>
              <div className={styles.courseIcon}>{icon}</div>
              <h5>{title}</h5>
            </div>
            <div className={styles.info}>
              <p className={styles.courseDescription}>{description}</p>
              <a href={link} className="customSeeMore">
                voir plus <span>{right}</span>
              </a>
            </div>
          </li>
        ))}
        {/* CourseCard - end */}
      </ul>
    </div>
  );
}

export default OurCourses;

const CoursesList = [
  {
    icon: <svg></svg>,
    title: "Années Préparatoires Intégrées",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.Suspendisse potenti. ",
    link: "#",
  },
  {
    icon: <svg></svg>,
    title: "Génie Electromécanique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.Suspendisse potenti. ",
    link: "#",
  },
  {
    icon: <svg></svg>,
    title: "Management des Systèmes Electriques Intelligents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.Suspendisse potenti. ",
    link: "#",
  },
  {
    icon: <svg></svg>,
    title: "Génie Mécanique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.Suspendisse potenti. ",
    link: "#",
  },
  {
    icon: <svg></svg>,
    title: "Génie Industriel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.Suspendisse potenti. ",
    link: "#",
  },
  {
    icon: <svg></svg>,
    title: "Intelligence Artificielle et Génie Informatique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.Suspendisse potenti. ",
    link: "#",
  },
];
