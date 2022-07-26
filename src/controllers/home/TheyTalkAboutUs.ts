import { Request, Response } from "express";
import { FlattenMaps, LeanDocument } from "mongoose";

import { PostDoc, documentType } from "../../models";

export const TheyTalkAboutUs = async (_: Request, res: Response) => {
  res.send(dummyData);
};

const dummyData = [
  {
    date: 1631110890578,
    title:
      "L’ENSAM de Casablanca et Altran Maroc promeuvent l’innovation technologique",
    logoUrl: "/mentions/lematin.png",
    typeCard: "press",
    link: "/under-reconstruction",
  },
  {
    date: 1631110890578,
    title:
      "Innovation technologique : L’ENSAM et Altran Maroc lancent la première édition de Techathon",
    logoUrl: "/mentions/aujourdhui1.png",
    typeCard: "press",
    link: "/under-reconstruction",
  },
  {
    date: 1631110890578,
    title:
      "Enseignement Supérieur: Ces «skills» qui vous aideront à réussir votre formation",
    logoUrl: "/mentions/economist.png",
    typeCard: "press",
    link: "/under-reconstruction",
  },
];
