import { companies } from "routes/routes";

const Companies = (): JSX.Element => {
  return (
    <div>
      <h2>ENTREPRISES</h2>
      <ul>
        <a href={companies.callsForProjects}>Appels à Projets</a>
        <a href={companies.internshipAndIntegration}>Stages et Insertion</a>
      </ul>
    </div>
  );
};

export default Companies;
