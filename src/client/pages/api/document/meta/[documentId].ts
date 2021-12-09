import clientPromise from "lib/mongodb";
import { ObjectID } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { documentToJson } from "utils/Documents";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { documentId } = req.query;

    if (!documentId || documentId instanceof Array) {
      return res
        .status(404)
        .json({ errors: [{ message: "document not found" }] });
    }
    const client = await clientPromise;
    const db = client.db("myFirstDatabase");

    const document = (await db.collection("documents").findOne({
      _id: new ObjectID(documentId),
    })) as any;

    if (!document) {
      return res
        .status(404)
        .json({ errors: [{ message: "document not found" }] });
    }

    return res.send({
      document: documentToJson(document),
    });
  } catch (error) {
    return res
      .status(404)
      .json({ errors: [{ message: "document not found" }] });
  }
}
