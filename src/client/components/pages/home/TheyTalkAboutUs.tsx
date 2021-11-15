import { getTheyTalkAboutUs } from "api/home";
import right from "assets/icons/right";
import CustomCardTwo, {
  CustomCardTwoType,
} from "components/cards/CustomCardTwo";
import { useEffect, useState } from "react";
import { CustomError } from "Types/api";
import styles from "./styles/theyTalkAboutUs.module.scss";
function TheyTalkAboutUs() {
  const [cards, setCards] = useState<CustomCardTwoType[]>([]);
  const [errors, setErrors] = useState<CustomError[]>([]);
  const initializeCards = async () => {
    const { response, errors } = await getTheyTalkAboutUs();

    if (errors) return setErrors(errors);
    if (!response)
      return setErrors((prev) => [
        ...prev,
        { message: "server not responding" },
      ]);

    setCards(response);
  };

  useEffect(() => {
    initializeCards();
  }, []);
  return (
    <section className={styles.theyTalkAboutUsWrapper}>
      <header>
        <h4>Ils Parlent de Nous</h4>
        <a href="/under-reconstruction" className="customSeeMore">
          voir plus <span>{right}</span>
        </a>
      </header>
      <div className={styles.cardListWrapper}>
        {cards.map((card, idx) => (
          <CustomCardTwo key={idx} card={card} />
        ))}
      </div>
    </section>
  );
}

export default TheyTalkAboutUs;
