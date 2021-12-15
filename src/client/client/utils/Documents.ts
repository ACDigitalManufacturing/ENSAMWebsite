export const getDocumentURI = (documentId: string) => {
  return `${
    process.env.NEXT_PUBLIC_BACKEND_API_URI || "/api/v1"
  }/documents/${documentId}`;
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
