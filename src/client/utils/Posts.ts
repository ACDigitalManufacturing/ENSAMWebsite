import { PostType } from "Types/api";

export const postToJson = ({
  _id,
  content,
  title,
  documents,
  cover,
  category,
  status,
  createdAt,
  updatedAt,
}: any): PostType => {
  return {
    id: _id,
    title,
    content,
    cover,
    documents,
    category,
    status,
    createdAt,
    updatedAt,
  };
};
