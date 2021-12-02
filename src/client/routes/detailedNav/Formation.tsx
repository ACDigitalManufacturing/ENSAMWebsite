import { formation } from "routes/routes";

const Formation = (): JSX.Element => {
  return (
    <div>
      <h2>FORMATION</h2>
      <ul>
        <a href={formation.preparatoryYears}>Années Préparatoires</a>
        <a href={formation.engineeringCycle}>Cycle d'Ingénieur</a>
        <a href={formation.universityLicense}>Licence d'Université</a>
        <a href={formation.universityMaster}>Master d'Université</a>
      </ul>
    </div>
  );
};

export default Formation;
