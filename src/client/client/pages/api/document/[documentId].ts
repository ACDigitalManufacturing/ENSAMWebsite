import clientPromise from "lib/mongodb";
import { ObjectID } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { documentId } = req.query;
    // console.log("documentid", documentId);

    if (!documentId || documentId instanceof Array) {
      return res
        .status(404)
        .json({ errors: [{ message: "document not found" }] });
    }
    const client = await clientPromise;
    const db = client.db("myFirstDatabase");

    const { contentType, filename, data } = (await db
      .collection("documents")
      .findOne({
        _id: new ObjectID(documentId),
      })) as any;

    if (!data || !contentType) {
      return res
        .status(404)
        .json({ errors: [{ message: "document not found" }] });
    }

    // console.log(contentType, filename);

    res.setHeader("Content-Type", contentType);

    res.setHeader("Content-disposition", `attachment; filename=${filename}`);
    // res.writeHead(200, {
    //   "Content-Type": contentType,
    // });
    return res.send(data);
  } catch (error) {
    return res
      .status(404)
      .json({ errors: [{ message: "document not found" }] });
  }
}
