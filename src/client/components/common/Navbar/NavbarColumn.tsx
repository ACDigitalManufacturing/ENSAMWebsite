import styles from "./styles/navbarColumn.module.scss";

interface Links {
  title: string;
  link: string;
  status: number;
}

interface Props {
  title: string;
  links: Links[];
}

const NavbarColumn = ({ title, links }: Props): JSX.Element => {
  return (
    <div className={styles.column}>
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <a
            className={link.status ? "" : styles.inactive}
            key={link.title}
            href={link.link}
          >
            {link.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default NavbarColumn;
