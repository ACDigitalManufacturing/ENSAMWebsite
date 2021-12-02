import { research } from "routes/routes";

const Research = (): JSX.Element => {
  return (
    <div>
      <h2>RECHERCHE</h2>
      <ul>
        <a href={research.teamsAndLaboratories}>Équipes et Laboratoires</a>
        <a href={research.doctoralStudies}>Formation Doctorale</a>
        <a href={research.ensamProjects}>Projets ENSAM</a>
        <a href={research.incubator}>Incubateur</a>
        <a href={research.scientificManifestation}>
          Manifestation Scientifique
        </a>
        <a href={research.scientificPartnerships}>Partenariats Scientifiques</a>
      </ul>
    </div>
  );
};

export default Research;
