import type { NextApiRequest, NextApiResponse } from "next";

import { documentType, PostDoc, Post } from "models";
import { FlattenMaps, LeanDocument } from "mongoose";
import { PostCategories, PostStatuses, PostType } from "Types/api";
import clientPromise from "lib/mongodb";
import { postToJson } from "utils/Posts";
// import connectDB from "middleware/mongodb";

export interface ReadAllPostsResponse {
  posts: FlattenMaps<LeanDocument<PostDoc<documentType>>>[];
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
    // category: PostCategories.NoticeToStudent,
    // status: PostStatuses.live,
  };

  // query
  const posts = (await db
    .collection("posts")
    .find(options)
    .sort([["createdAt", -1]])
    .skip(skip_as_number)
    .limit(limit_as_number)
    .toArray()) as PostDoc[];

  // response
  const response: any = {
    posts: posts.map((post) => postToJson(post)),
  };
  res.status(200).send(response);
}

// const dummyData: CustomCardOneType[] = [
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolOne.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolTwo.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolThree.png",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolOne.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolTwo.jpg",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolThree.png",
//     link: "/under-reconstruction",
//   },
//   {
//     tags: [Tags.avisetudiant],
//     title: "Liste des étudiants CI1 GM",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit et erat viverra gravida. Proin pharetra ornare risus, ut venenatis leo ornare lobortis.",
//     date: 1631110890578,
//     coverUrl: "/school/schoolOne.jpg",
//     link: "/under-reconstruction",
//   },
// ];
