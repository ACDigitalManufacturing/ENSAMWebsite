import type { NextApiRequest, NextApiResponse } from "next";

import { Tags } from "Types/Application";

import { CustomCardOneType } from "components/cards/CustomCardOne";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomCardOneType[]>
) {
  res.status(200).json(dummyData);
}

const dummyData: CustomCardOneType[] = [
  {
    tags: [Tags.communique],
    title:
      "Liste des candidats présélectionnés au concours d'accès au master Big Data et Internet des Objets phase I 2021-2022",
    date: 1631110890578,
    coverUrl: "/school/schoolThree.png",
    link: "/under-reconstruction",
  },
  {
    tags: [Tags.communique],
    title:
      "Accès parallèle à la première année du cycle d'ingénieur à l'ENSAM de Casablanca : Résultats de la présélection",
    date: 1631110890578,
    coverUrl: "/school/schoolOne.jpg",
    link: "/under-reconstruction",
  },
  {
    tags: [Tags.communique],
    title:
      'Liste des candidats convoqués au concours écrits du recrutement d\'un administrateur 2ème grade spécialité "Assurance qualité"',
    date: 1631110890578,
    coverUrl: "/school/schoolTwo.jpg",
    link: "/under-reconstruction",
  },
  {
    tags: [Tags.communique],
    title:
      "Liste des candidats présélectionnés au concours d'accès au master Big Data et Internet des Objets phase I 2021-2022",
    date: 1631110890578,
    coverUrl: "/school/schoolThree.png",
    link: "/under-reconstruction",
  },
  {
    tags: [Tags.communique],
    title:
      "Accès parallèle à la première année du cycle d'ingénieur à l'ENSAM de Casablanca : Résultats de la présélection",
    date: 1631110890578,
    coverUrl: "/school/schoolOne.jpg",
    link: "/under-reconstruction",
  },
  {
    tags: [Tags.communique],
    title:
      'Liste des candidats convoqués au concours écrits du recrutement d\'un administrateur 2ème grade spécialité "Assurance qualité"',
    date: 1631110890578,
    coverUrl: "/school/schoolTwo.jpg",
    link: "/under-reconstruction",
  },
  {
    tags: [Tags.communique],
    title:
      'Liste des candidats convoqués au concours écrits du recrutement d\'un administrateur 2ème grade spécialité "Assurance qualité"',
    date: 1631110890578,
    coverUrl: "/school/schoolThree.png",
    link: "/under-reconstruction",
  },
];
