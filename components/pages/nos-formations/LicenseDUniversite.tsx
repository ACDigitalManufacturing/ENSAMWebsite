import FormationList from "./FormationList";

export const LicenseDUniversite = () => {
  return <FormationList formations={formations} title="License d'Université" />;
};

const formations = [
  {
    title: "Génie civil",
    description:
      "Le principal objectif visé par la formation est d’offrir aux étudiants les bases solides nécessaires et une spécialisation    de premier niveau en génie civil pour répondre aux exigences des entreprises de ce secteur. Afin d’assurer cette    mission, la présente formation permettra aux étudiants de ",
    link: "#",
  },
  {
    title: "Conception des systems automobiles et aéronautiques",
    description: `
    Former des cadres intermédiaires ayant les missions de : • Maîtriser les logiciels de Dessin et de Conception Assistés par Ordinateur (DAO/CAO) les plus utilisés par les industries automobile et aéronautique ;
    `,
    link: "#",
  },
  {
    title: "Automatisms industriels et systems électrique",
    description: `Cette formation permet aux étudiants d’acquérir des connaissances, des aptitudes et des compétences en Automatismes
    industriels, Electrotechnique, Electronique de puissance , Régulation industrielle, Informatique Industrielle, maintenance et
    production afin d’œuvrer dans les domaines des systèmes automatisés, les installations électriques, la commande et la
    supervision des systèmes de production, la gestion de la production et de la maintenance, la distribution et la transformation de
    l'énergie électrique, ainsi que les énergies renouvelables.`,
    link: "#",
  },
  {
    title: "Diagnostiques Automobile et Maintenance Industrielle",
    description: `La formation a pour objectifs de former un profil qui repond aux besoins, en termes de competences, des entreprises qui operent dans le secteur automible. it sera capable de faire le diagnostic electricite-electronique et mecanique, il intervient dans toutes les activites de maintenance`,
    link: "#",
  },
  {
    title: "Management des systemes industriels",
    description: `La formation de licence dote son titulaire des outils techniques et manageieles pour gerer les processus industriels avec les aspects et contraintes d'optimisation des flux, des delais, de la qualite, de la securite et des resources humaines et materielles.`,
    link: "#",
  },
  {
    title: "Developpement logiciel & Securite des systemes",
    description: `L'objectif de la formation est de futurs informaticiens specialises sur les themes du genie logiciel et securite des systems qui auront integre dans leur culture l'enjeu de la qualite que pose tout developpement logiciel. Ainsi, a l'issue de la licence, l'analyse et le developpement fiable de logiciels auront ete detailles`,
    link: "#",
  },
  {
    title: "Big data et systemes embarques",
    description: `La formation de licence professionnelle d’université en Big Data et Systèmes Embarqués de l’ENSAM de Casablanca permet aux étudiants d’acquérir des connaissances, des aptitudes et des compétences capables de ...`,
    link: "#",
  },
  {
    title: "Ingenierie et bureau d'etudes en construction metallique",
    description: `Ingenierie et bureau d'etudes en construction metallique`,
    link: "#",
  },
];
