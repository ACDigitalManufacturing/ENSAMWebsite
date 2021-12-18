import styles from "./styles/customCardTwo.module.scss";

export interface CustomCardTwoType {
  date: number;
  title: string;
  logoUrl: string;
  typeCard: string;
  link: string;
}
interface Props {
  card: CustomCardTwoType;
}
function CustomCardTwo({ card }: Props) {
  return (
    <div className={styles.customCardTwoWrapper}>
      <div className={styles.date}>
        {new Date(card.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>

      <h5>{card.title}</h5>
      <div className={styles.logoWrapper}>
        <img src={card.logoUrl} alt="" />
      </div>
      <h6>{card.typeCard}</h6>
    </div>
  );
}

export default CustomCardTwo;
