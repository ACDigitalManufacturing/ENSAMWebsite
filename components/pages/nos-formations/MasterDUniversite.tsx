import api from "assets/icons/courses/api";
import FormationList from "./FormationList";

export const MasterDUniversite = () => {
  return (
    <FormationList
      formations={formations}
      title="Masters spécialisés d'Université"
      id="university-master"
    />
  );
};

const formations = [
  {
    title: "Management industriel",
    description: `Ce master dispense une formation solide en industriel avec un accent sur la production et la logistique, qui sont
    actuellement le noyau de toute organisation industrielle publique ou privée. En effet, au-delà de la maîtrise des outils, cette formation entend également développer une ouverture d’esprit
    et une capacité de réflexion indispensables pour exercer des métiers en constante évolution.`,
    link: "/files/formations/master/management_industriel.pdf",
  },
  {
    title: "Systèmes d'information et de décision",
    description: `La formation de master spécialisé d’université en systèmes d’information et de décision de l’ENSAM de Casablanca
    vise à former des professionnels des systèmes d'information possédant une double ...`,
    link: "/files/formations/master/systemes_information_et_de_decision.pdf",
  },
  {
    title: "Systèmes intelligents et génie électrique",
    description: `Cette formation permet aux étudiants d’acquérir des connaissances, des aptitudes et des compétences en systèmes embarqués.
    Elle vise à enrichir les compétences de ces cadres pour pouvoir se familiariser avec ...`,
    link: "/files/formations/master/systeme_intelligents_et_genie_electrique.pdf",
  },
  {
    title: "Contrôle industriel et management de l'énergie",
    description: `Cette formation a pour objectif de former des cadres techniques, capables de concevoir et de piloter des systèmes intelligents de
    contrôle-commande industrielle et de gestion de l’énergie. Le cursus de ce...`,
    link: "/files/formations/master/controle_ndustriel_management_de_energie.pdf",
  },
  {
    title: "Génie civil et construction durable",
    description: `A la fin de la formation, le cadre supérieur en génie civil doit être capable de :
    - Réaliser les calculs d’ouvrages divers de génie civil en Béton, en charpente métallique & mixte
    - Réaliser les travaux des laboratoires de génie civil ainsi les calculs de VRD
    - Coordonner des projets de génie civil et réaliser des missions de contrôle technique`,
    link: "/files/formations/master/genie_civil_et_construction_durable.pdf",
  },
].map((formation) => ({ ...formation, icon: api }));
