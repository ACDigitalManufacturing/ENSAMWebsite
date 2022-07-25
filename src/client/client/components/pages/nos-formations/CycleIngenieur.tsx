import api from "assets/icons/courses/api";
import gem from "assets/icons/courses/gem";
import gi from "assets/icons/courses/gi";
import gm from "assets/icons/courses/gm";
import iagi from "assets/icons/courses/iagi";
import msei from "assets/icons/courses/msei";
import FormationList from "./FormationList";

export const CycleIngenieur = () => {
  return (
    <FormationList
      formations={formations}
      title="Cycle Ingénieur"
      id="engineering-cycle"
    />
  );
};

const formations = [
  {
    icon: gem,
    title: "Génie Électromécanique",
    description:
      "La formation d’Ingénieur en Génie Electromécanique à l’ENSAM Casablanca répond à une véritable demande formulée par les différents acteurs du tissu industriel marocain. En effet, la formation de l’ingénieur en génie électromécanique se caractérise par un aspect pluridisciplinaire, alliant les compétences des systèmes électriques (contrôle-commande, actionneurs) et celle des systèmes mécaniques (conception, prototype, maintenance).",
    link: "#",
  },
  {
    icon: msei,
    title: "Management Des systèmes Électriques Intelligents",
    description:
      "La formation d’Ingénieur en Management Des systèmes Électriques Intelligents à l’ENSAM-Casablanca s’inscrit dans le cadre d’une nouvelle vision stratégique de l’ingénierie. Ses principales motivations sont la formation d’une génération d’ingénieurs en parfait accord avec les mutations technologiques dans le domaine de la commande industrielle et le contrôle digital d’une part, et la capitalisation d’un ensemble de compétences dans le domaine de l’efficacité énergétique et des systèmes de management de l’énergie. ",
    link: "#",
  },
  {
    icon: gm,
    title: "Génie Mécanique",
    description:
      "L'objectif principal de la filière Génie Mécanique est de former des ingénieurs capables d'aborder tous les problèmes techniques et scientifiques liés à l'étude, au développement, au dimensionnement, à la conception, à la fabrication et à l'industrialisation d’un système mécanique. En plus de ces compétences techniques, l’ingénieur doit être un bon communicant et un bon manager afin de coordonner et de gérer des équipes.",
    link: "#",
  },
  {
    icon: gi,
    title: "Génie Industriel",
    description:
      "Le Génie Industriel est la formation qui s’intéresse aux systèmes de production, d’approvisionnement et/ou de distribution de biens ou de services, à leur conception, leur mise en œuvre, leur gestion et à leur amélioration avec une vision systémique.",
    link: "#",
  },
  {
    icon: iagi,
    title: "Intelligence Artificielle et Génie Informatique",
    description:
      "La filière Intelligence Artificielle et Génie Informatique(IAGI) forme les développeurs spécialisés et les futurs responsables en intelligence artificielle de l’industrie et en Génie Informatique. Elle atteste d’une expertise élevée en informatique et l’IA. Elle garantit une compréhension fine des défis et enjeux de l’IA. Elle offre des spécialisations, grâce aux cours avancés, dans des domaines spécifiques comme Machine Learning, Deep Learning, Cobotique, Internet des Objets (IoT) ou la Réalité augmentée. Notamment, le volet pratique de la formation prouve que l’élève ingénieur possède une expérience professionnelle et est capable de développer un projet d’entreprise en intelligence artificielle et l’ingénierie informatique.",
    link: "#",
  },
];
