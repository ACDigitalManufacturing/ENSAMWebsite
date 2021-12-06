import type { NextApiRequest, NextApiResponse } from "next";

import clientPromise from "lib/mongodb";
import { postToJson } from "utils/Posts";
import { PostCategories, PostStatuses, PostType } from "Types/api";
// import connectDB from "middleware/mongodb";

export interface ReadAllPostsResponse {
  posts: PostType[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReadAllPostsResponse>
) {
  const { skip, limit } = req.query;

  const client = await clientPromise;
  const db = client.db("myFirstDatabase");

  // set number of posts to skip
  let skip_as_number = /^-?\d+$/.test(skip as string)
    ? parseInt(skip as string)
    : 0;

  let limit_as_number = /^-?\d+$/.test(limit as string)
    ? parseInt(limit as string)
    : 9;

  // set options if category
  let options = {
    category: PostCategories.OfficialReleases,
    status: PostStatuses.live,
  };

  // query
  const posts = await db
    .collection("posts")
    .find(options)
    .sort([["createdAt", -1]])
    .skip(skip_as_number)
    .limit(limit_as_number)
    .toArray();

  // response
  const response: any = {
    posts: posts.map((post) => postToJson(post)) as PostType[],
  };
  res.status(200).send(response);
}

// const dummyData: any[] = [
//   {
//     tags: [Tags.communique],
//     title:
//       "Liste des candidats présélectionnés au concours d'accès au master Big Data et Internet des Objets phase I 2021-2022",
//     date: 1631110890578,
//     coverUrl: "/school/schoolThree.png",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.communique],
//     title:
//       "Accès parallèle à la première année du cycle d'ingénieur à l'ENSAM de Casablanca : Résultats de la présélection",
//     date: 1631110890578,
//     coverUrl: "/school/schoolOne.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.communique],
//     title:
//       'Liste des candidats convoqués au concours écrits du recrutement d\'un administrateur 2ème grade spécialité "Assurance qualité"',
//     date: 1631110890578,
//     coverUrl: "/school/schoolTwo.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.communique],
//     title:
//       "Liste des candidats présélectionnés au concours d'accès au master Big Data et Internet des Objets phase I 2021-2022",
//     date: 1631110890578,
//     coverUrl: "/school/schoolThree.png",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.communique],
//     title:
//       "Accès parallèle à la première année du cycle d'ingénieur à l'ENSAM de Casablanca : Résultats de la présélection",
//     date: 1631110890578,
//     coverUrl: "/school/schoolOne.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.communique],
//     title:
//       'Liste des candidats convoqués au concours écrits du recrutement d\'un administrateur 2ème grade spécialité "Assurance qualité"',
//     date: 1631110890578,
//     coverUrl: "/school/schoolTwo.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.communique],
//     title:
//       'Liste des candidats convoqués au concours écrits du recrutement d\'un administrateur 2ème grade spécialité "Assurance qualité"',
//     date: 1631110890578,
//     coverUrl: "/school/schoolThree.png",
//     link: "/under-reconstruction",
//   },
// ];
