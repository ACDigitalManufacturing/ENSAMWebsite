import { laureates } from "routes/routes";

const Laureates = (): JSX.Element => {
  return (
    <div>
      <h2>LAURÉATS</h2>
      <ul>
        <a href={laureates.associationOfENSAMLaureates}>
          Association des Lauréats de l’ENSAM
        </a>
        <a href={laureates.graduationCeremonies}>
          Cérémonies de remise des diplômes
        </a>
      </ul>
    </div>
  );
};

export default Laureates;
