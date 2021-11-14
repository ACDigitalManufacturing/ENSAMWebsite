import type { NextApiRequest, NextApiResponse } from "next";

import { Tags } from "Types/Application";

import { CustomCardOneType } from "components/cards/CustomCardOne";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomCardOneType[]>,
) {
  res.status(200).json(dummyData);
}

const dummyData: CustomCardOneType[] = [
  {
    tags: [Tags.avisetudiant],
    title: "Liste des étudiants CI1 GM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
    date: 5425525,
    coverUrl: "/school/schoolOne.jpg",
    link: "#",
  },
  {
    tags: [Tags.avisetudiant],
    title: "Liste des étudiants CI1 GM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
    date: 5425525,
    coverUrl: "/school/schoolTwo.jpg",
    link: "#",
  },
  {
    tags: [Tags.avisetudiant],
    title: "Liste des étudiants CI1 GM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
    date: 5425525,
    coverUrl: "/school/schoolThree.png",
    link: "#",
  },
  {
    tags: [Tags.avisetudiant],
    title: "Liste des étudiants CI1 GM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
    date: 5425525,
    coverUrl: "/school/schoolOne.jpg",
    link: "#",
  },
  {
    tags: [Tags.avisetudiant],
    title: "Liste des étudiants CI1 GM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
    date: 5425525,
    coverUrl: "/school/schoolTwo.jpg",
    link: "#",
  },
  {
    tags: [Tags.avisetudiant],
    title: "Liste des étudiants CI1 GM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
    date: 5425525,
    coverUrl: "/school/schoolThree.png",
    link: "#",
  },
];
