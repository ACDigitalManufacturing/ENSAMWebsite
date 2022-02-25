import { getHost } from "api/getHost";

export const getDocumentURI = (documentId: string) => {
  const host = getHost();
  return `${host}/documents/${documentId}`;
};

// export const documentToJson = ({
//   _id,
//   contentType,
//   filename,
//   createdAt,
//   updatedAt,
// }: any): DocumentMeta => {
//   return {
//     id: _id,
//     contentType,
//     link: `${process.env.BACKEND_API_URI || ""}/documents/${_id}`,
//     filename,
//     createdAt,
//     updatedAt,
//   };
// };
