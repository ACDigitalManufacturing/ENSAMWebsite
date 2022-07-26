import api from "assets/icons/courses/api";
import FormationList from "./FormationList";

export const CyclePrepa = () => {
  return (
    <FormationList
      formations={formations}
      title="Cycle Préparatoire"
      id="preparatory-years"
    />
  );
};

const formations = [
  {
    icon: api,
    title: "Années Préparatoires Intégrées",
    description:
      "L’objectif principal est de préparer en deux ans les étudiants aux études des filières du cycle ingénieur. Ainsi, cette formation va permettre aux étudiants d’acquérir de bonnes compétences en Mathématiques, Physique, Chimie, Technologie, Informatique, et Techniques d’Expression et de Communication. Sa structure est telle qu’elle leur apporte de solides bases scientifiques, techniques et méthodologiques.",
    link: "/files/formations/prepa/API.pdf",
  },
];
