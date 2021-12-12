import {
  companies,
  formation,
  historyOfScience,
  laureates,
  localRoutes,
  research,
  school,
  studentLife,
  Webmasters,
} from "routes/routes";
import { LinkStatus } from "Types/Application";

export const schoolLinks = {
  title: "L'ÉCOLE",
  links: [
    {
      title: "Présentation",
      link: school.presentation,
      status: LinkStatus.inactive,
    },
    {
      title: "Mot du Directeur",
      link: school.directorWord,
      status: LinkStatus.inactive,
    },
    {
      title: "Communiqués Officiels",
      link: school.officialPressReleases,
      status: LinkStatus.inactive,
    },
    {
      title: "Corps Professoral",
      link: school.professionalBody,
      status: LinkStatus.inactive,
    },
    {
      title: "Recrutement et Stage",
      link: school.recruitmentAndInternship,
      status: LinkStatus.inactive,
    },
    {
      title: "Règlement Intérieur",
      link: school.internalRegulations,
      status: LinkStatus.inactive,
    },
    {
      title: "Appels d'Offres",
      link: school.tenders,
      status: LinkStatus.inactive,
    },
    {
      title: "Agenda",
      link: school.agenda,
      status: LinkStatus.inactive,
    },
  ],
};

export const formationLinks = {
  title: "FORMATION",
  links: [
    {
      title: "Années Préparatoires",
      link: formation.preparatoryYears,
      status: LinkStatus.inactive,
    },
    {
      title: "Cycle d'Ingénieur",
      link: formation.engineeringCycle,
      status: LinkStatus.inactive,
    },
    {
      title: "Licence d'Université",
      link: formation.universityLicense,
      status: LinkStatus.inactive,
    },
    {
      title: "Master d'Université",
      link: formation.universityMaster,
      status: LinkStatus.inactive,
    },
  ],
};

export const studentLifeLinks = {
  title: "VIE DE L'ÉTUDIANT",
  links: [
    {
      title: "Clubs",
      link: studentLife.clubs,
      status: LinkStatus.inactive,
    },
    {
      title: "Avis aux Étudiants",
      link: studentLife.noticeToStudents,
      status: LinkStatus.inactive,
    },
  ],
};

export const researchLinks = {
  title: "RECHERCHE",
  links: [
    {
      title: "Équipes et Laboratoires",
      link: research.teamsAndLaboratories,
      status: LinkStatus.inactive,
    },
    {
      title: "Formation Doctorale",
      link: research.doctoralStudies,
      status: LinkStatus.inactive,
    },
    {
      title: "Projets ENSAM",
      link: research.ensamProjects,
      status: LinkStatus.inactive,
    },
    {
      title: "Incubateur",
      link: research.incubator,
      status: LinkStatus.inactive,
    },
    {
      title: "Manifestation Scientifique",
      link: research.scientificManifestation,
      status: LinkStatus.inactive,
    },
    {
      title: "Partenariats Scientifiques",
      link: research.scientificPartnerships,
      status: LinkStatus.inactive,
    },
  ],
};

export const historyOfScienceLinks = {
  title: "Histoire de la science",
  links: [
    {
      title: "Histoire de la science",
      link: historyOfScience.historyOfScience,
      status: LinkStatus.inactive,
    },
  ],
};

export const companiesLinks = {
  title: "ENTREPRISES",
  links: [
    {
      title: "Appels à Projets",
      link: companies.callsForProjects,
      status: LinkStatus.inactive,
    },
    {
      title: "Stages et Insertion",
      link: companies.internshipAndIntegration,
      status: LinkStatus.inactive,
    },
  ],
};

export const laureatesLinks = {
  title: "LAURÉATS",
  links: [
    {
      title: "Association des Lauréats de l’ENSAM",
      link: laureates.associationOfENSAMLaureates,
      status: LinkStatus.inactive,
    },
    {
      title: "Cérémonies de remise des diplômes",
      link: laureates.graduationCeremonies,
      status: LinkStatus.inactive,
    },
  ],
};

export const createdByLinks = {
  title: "Created by",
  links: [
    {
      title: "Webmasters",
      link: Webmasters.webmasters,
      status: LinkStatus.active,
    },
  ],
};

export const mainLinks = {
  title: "",
  links: [
    {
      title: "Accueil",
      link: localRoutes.home,
      status: LinkStatus.active,
    },
    {
      title: "Formation",
      link: localRoutes.underRecontruction,
      status: LinkStatus.active,
    },
    {
      title: "Entreprises",
      link: localRoutes.underRecontruction,
      status: LinkStatus.active,
    },
    {
      title: "Recherche",
      link: localRoutes.underRecontruction,
      status: LinkStatus.active,
    },
  ],
};
