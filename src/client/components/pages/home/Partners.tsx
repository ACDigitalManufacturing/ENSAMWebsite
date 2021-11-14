import { getPartners } from "api/home";
import { PartnerType } from "pages/api/home/partners";
import { useEffect, useState } from "react";
import { CustomError } from "Types/api";

import styles from "./styles/partners.module.scss";
function Partners() {
  const [partnersList, setPartnersList] = useState<PartnerType[]>([]);
  const [errors, setErrors] = useState<CustomError[]>([]);

  const initializePartners = async () => {
    const { response, errors } = await getPartners();

    if (errors) return setErrors(errors);
    if (!response)
      return setErrors((prev) => [
        ...prev,
        { message: "server not responding" },
      ]);

    setPartnersList(response);
  };

  useEffect(() => {
    initializePartners();
  }, []);
  return (
    <section className={styles.partnersSectionWrapper}>
      <h4>Partenaires</h4>
      <div className={styles.partnersListWrapper}>
        <div className={styles.partnersMovingList}>
          {partnersList.map(({ logoUrl }, idx) => (
            <img src={logoUrl} alt="" key={idx} />
          ))}
          {partnersList.map(({ logoUrl }, idx) => (
            <img src={logoUrl} alt="" key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
