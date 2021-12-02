import { school } from "routes/routes";

const School = (): JSX.Element => {
  return (
    <div>
      <h2>L'ÉCOLE</h2>
      <ul>
        <a href={school.presentation}>Présentation</a>
        <a href={school.directorWord}>Mot du Directeur</a>
        <a href={school.officialPressReleases}>Communiqués Officiels</a>
        <a href={school.professionalBody}>Corps Professoral</a>
        <a href={school.recruitmentAndInternship}>Recrutement et Stage</a>
        <a href={school.internalRegulations}>Règlement Intérieur</a>
        <a href={school.tenders}>Appels d'Offres</a>
        <a href={school.agenda}>Agenda</a>
      </ul>
    </div>
  );
};

export default School;
