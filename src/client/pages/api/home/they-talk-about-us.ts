import type { NextApiRequest, NextApiResponse } from "next";

import { CustomCardTwoType } from "components/cards/CustomCardTwo";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomCardTwoType[]>,
) {
  res.status(200).json(dummyData);
}
new Date().getTime();
const dummyData = [
  {
    date: 1631110890578,
    title:
      "L’ENSAM de Casablanca et Altran Maroc promeuvent l’innovation technologique",
    logoUrl: "/mentions/lematin.png",
    typeCard: "press",
    link: "#",
  },
  {
    date: 1631110890578,
    title:
      "Innovation technologique : L’ENSAM et Altran Maroc lancent la première édition de Techathon",
    logoUrl: "/mentions/aujourdhui1.png",
    typeCard: "press",
    link: "#",
  },
  {
    date: 1631110890578,
    title:
      "Enseignement Supérieur: Ces «skills» qui vous aideront à réussir votre formation",
    logoUrl: "/mentions/economist.png",
    typeCard: "press",
    link: "#",
  },
];
